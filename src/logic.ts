import type {
  ChecklistNode,
  Lesson,
  Profile,
  Progress,
  Status,
} from "./types.ts";
export const statuses: Status[] = [
  "Not started",
  "Learning",
  "Completed",
  "Already known",
  "Skipped",
];
export const complete = (status?: Status) =>
  status === "Completed" || status === "Already known";
export function confidenceTotals(
  lessons: Lesson[],
  progress: Record<string, Progress> = {},
) {
  const values = lessons.flatMap((l) => {
    const p = progress[l.id];
    if (p?.confidence != null) return [p.confidence];
    const rated = l.concepts.flatMap((c) =>
      p?.conceptConfidence?.[c.name] != null
        ? [p.conceptConfidence[c.name]]
        : [],
    );
    return rated.length
      ? [rated.reduce((s, x) => s + x, 0) / rated.length]
      : [];
  });
  return {
    percent: values.length
      ? Math.round(values.reduce((s, x) => s + x, 0) / values.length)
      : null,
    rated: values.length,
    total: lessons.length,
  };
}
export function totals(
  lessons: Lesson[],
  progress: Record<string, Progress> = {},
  known: string[] = [],
) {
  const done = lessons.filter(
    (l) =>
      complete(progress[l.id]?.status) ||
      (progress[l.id] === undefined && known.includes(l.id)),
  ).length;
  const skipped = lessons.filter(
    (l) => progress[l.id]?.status === "Skipped",
  ).length;
  return {
    done,
    skipped,
    total: lessons.length,
    percent: lessons.length ? Math.round((done / lessons.length) * 100) : 0,
  };
}
export function statusFor(
  id: string,
  profile: Profile,
  progress: Record<string, Progress> = {},
): Status {
  return (
    progress[id]?.status ??
    (profile.knownLessons.includes(id) ? "Already known" : "Not started")
  );
}
export function nextLesson(
  lessons: Lesson[],
  profile: Profile,
  progress: Record<string, Progress> = {},
) {
  const chosen = lessons.filter((l) =>
    profile.selectedDomains.includes(l.domainId),
  );
  const current = chosen.find(
    (l) =>
      l.id === profile.lastLesson &&
      !complete(statusFor(l.id, profile, progress)) &&
      statusFor(l.id, profile, progress) !== "Skipped",
  );
  return (
    current ??
    chosen.find((l) => statusFor(l.id, profile, progress) === "Learning") ??
    chosen.find(
      (l) =>
        !complete(statusFor(l.id, profile, progress)) &&
        statusFor(l.id, profile, progress) !== "Skipped",
    )
  );
}
export function safeUrl(value: string, allowEmpty = true) {
  if (!value.trim() && allowEmpty) return "";
  const url = new URL(value.trim());
  if (!["http:", "https:"].includes(url.protocol))
    throw new Error("Links must use http:// or https://.");
  return url.href;
}
export function parseChecklist(text: string): ChecklistNode[] {
  const root: ChecklistNode[] = [];
  const stack: { level: number; node: ChecklistNode }[] = [];
  text.split("\n").forEach((line, i) => {
    if (!line.trim()) return;
    const indent = line.match(/^ */)?.[0].length ?? 0;
    if (indent % 2)
      throw new Error("Use two spaces per nested checklist level.");
    const level = indent / 2;
    if (level > 0 && (!stack.length || level > stack.at(-1)!.level + 1))
      throw new Error("Checklist nesting cannot skip a level.");
    const node = {
      id: `item-${i}`,
      label: line.trim(),
      done: false,
      children: [],
    };
    while (stack.length && stack.at(-1)!.level >= level) stack.pop();
    if (level === 0) root.push(node);
    else stack.at(-1)!.node.children.push(node);
    stack.push({ level, node });
  });
  if (!root.length) throw new Error("Add at least one checklist item.");
  return root;
}
export function toggleNode(
  nodes: ChecklistNode[],
  id: string,
): ChecklistNode[] {
  return nodes.map((n) => ({
    ...n,
    done: n.id === id ? !n.done : n.done,
    children: toggleNode(n.children, id),
  }));
}
export function checklistTotals(nodes: ChecklistNode[]): {
  done: number;
  total: number;
} {
  return nodes.reduce(
    (a, n) => {
      const child = checklistTotals(n.children);
      return {
        done: a.done + child.done + (n.children.length ? 0 : Number(n.done)),
        total: a.total + child.total + (n.children.length ? 0 : 1),
      };
    },
    { done: 0, total: 0 },
  );
}
export function validateProfile(profile: Profile) {
  if (
    typeof profile.displayName !== "string" ||
    !profile.displayName.trim() ||
    profile.displayName.length > 80
  )
    throw new Error("Use a display name of 1–80 characters.");
  if (
    !Number.isInteger(profile.hours) ||
    profile.hours < 1 ||
    profile.hours > 80
  )
    throw new Error("Weekly study hours must be an integer between 1 and 80.");
  if (
    !Array.isArray(profile.selectedDomains) ||
    !profile.selectedDomains.length
  )
    throw new Error("Choose at least one domain.");
}
export function validateTopic(topic: import("./types.ts").CustomTopic) {
  if (
    typeof topic.title !== "string" ||
    topic.title.trim().length < 1 ||
    topic.title.length > 120 ||
    !Number.isInteger(topic.hours) ||
    topic.hours < 1 ||
    topic.hours > 500
  )
    throw new Error(
      "Use a topic title of 1–120 characters and 1–500 whole study hours.",
    );
  if (
    !Array.isArray(topic.resources) ||
    !topic.resources.length ||
    typeof topic.mapping !== "string"
  )
    throw new Error("A custom topic needs sources and a valid mapping.");
  topic.resources.forEach((r) => {
    if (typeof r.title !== "string" || !r.title.trim())
      throw new Error("Every source needs a title.");
    safeUrl(r.url, false);
  });
  const ids = new Set<string>();
  let count = 0;
  const walk = (nodes: ChecklistNode[], depth: number) => {
    if (!Array.isArray(nodes) || depth > 10)
      throw new Error("Invalid checklist nesting.");
    for (const n of nodes) {
      count++;
      if (
        count > 500 ||
        typeof n.id !== "string" ||
        ids.has(n.id) ||
        typeof n.label !== "string" ||
        !n.label.trim() ||
        typeof n.done !== "boolean"
      )
        throw new Error("Invalid checklist item.");
      ids.add(n.id);
      walk(n.children, depth + 1);
    }
  };
  walk(topic.checklist, 0);
  if (!count) throw new Error("Add at least one checklist item.");
}
export function validateBrief(brief: import("./types.ts").Brief) {
  for (const name of [
    "id",
    "patternId",
    "title",
    "problem",
    "data",
    "output",
    "difficulty",
  ] as const)
    if (typeof brief[name] !== "string" || !brief[name])
      throw new Error("Invalid project brief.");
  for (const name of [
    "skills",
    "milestones",
    "acceptance",
    "documentation",
  ] as const)
    if (
      !Array.isArray(brief[name]) ||
      !brief[name].length ||
      !brief[name].every((x) => typeof x === "string")
    )
      throw new Error("Invalid project checklist.");
  if (
    !Number.isFinite(brief.hours) ||
    brief.hours < 1 ||
    !Array.isArray(brief.integration) ||
    brief.integration.length !== brief.skills.length
  )
    throw new Error("Invalid project skill integration.");
  for (const i of brief.integration) {
    if (
      !brief.skills.includes(i.skillId) ||
      ![i.skillTitle, i.task, i.check, i.deliverable].every(
        (x) => typeof x === "string" && x.length > 0,
      )
    )
      throw new Error("Missing project skill task.");
  }
}
export function validateWorkspace(state: import("./types.ts").Workspace) {
  if (
    state.version !== 1 ||
    !Array.isArray(state.profiles) ||
    !state.profiles.length ||
    !Array.isArray(state.custom) ||
    !Array.isArray(state.projects) ||
    !state.progress ||
    typeof state.progress !== "object"
  )
    throw new Error("Not a valid Forge v1 workspace backup.");
  const ids = new Set(state.profiles.map((p) => p.id));
  if (ids.size !== state.profiles.length || !ids.has(state.userId))
    throw new Error("Invalid workspace profile identifiers.");
  for (const p of state.profiles) {
    validateProfile(p);
    if (
      typeof p.id !== "string" ||
      typeof p.lastLesson !== "string" ||
      !Array.isArray(p.knownLessons) ||
      !p.knownLessons.every((x) => typeof x === "string") ||
      !p.selectedDomains.every((x) => typeof x === "string")
    )
      throw new Error("Invalid profile data.");
  }
  for (const [owner, byLesson] of Object.entries(state.progress)) {
    if (!ids.has(owner) || !byLesson || typeof byLesson !== "object")
      throw new Error("Invalid progress owner.");
    for (const p of Object.values(byLesson)) {
      if (
        !statuses.includes(p.status) ||
        !Array.isArray(p.checked) ||
        !p.checked.every((x) => typeof x === "string") ||
        typeof p.notes !== "string" ||
        p.notes.length > 20000
      )
        throw new Error("Invalid lesson progress.");
      safeUrl(p.evidence);
      for (const value of [
        ...Object.values(p.conceptConfidence ?? {}),
        ...(p.confidence != null ? [p.confidence] : []),
      ])
        if (!Number.isInteger(value) || value < 0 || value > 100)
          throw new Error("Invalid understanding percentage.");
    }
  }
  for (const t of state.custom) {
    if (!ids.has(t.ownerId)) throw new Error("Invalid custom topic owner.");
    validateTopic(t);
  }
  const projectIds = new Set<string>();
  for (const p of state.projects) {
    validateBrief(p.brief);
    safeUrl(p.repoUrl);
    safeUrl(p.demoUrl);
    if (
      projectIds.has(p.id) ||
      !ids.has(p.ownerId) ||
      !Array.isArray(p.participants) ||
      !p.participants.includes(p.ownerId) ||
      !p.participants.every((id) => ids.has(id)) ||
      !["Planned", "In progress", "Completed"].includes(p.status) ||
      !Array.isArray(p.milestones) ||
      typeof p.evidence !== "string" ||
      !Number.isInteger(p.revision)
    )
      throw new Error("Invalid project data.");
    projectIds.add(p.id);
  }
}
