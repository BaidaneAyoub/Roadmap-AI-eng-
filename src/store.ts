import type {
  CustomTopic,
  Profile,
  Progress,
  ProjectInstance,
  Workspace,
} from "./types";
import {
  safeUrl,
  validateProfile,
  validateTopic,
  validateBrief,
  validateWorkspace,
} from "./logic";
const key = "forge-workspace-v1";
export const cloud = Boolean(
  import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY,
);
export const db = cloud
  ? (await import("@supabase/supabase-js")).createClient(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_ANON_KEY,
    )
  : null;
export const emptyProgress: Progress = {
  status: "Not started",
  checked: [],
  notes: "",
  evidence: "",
  confidence: null,
  conceptConfidence: {},
};
const defaultProfile = (id: string, displayName: string): Profile => ({
  id,
  displayName,
  hours: 8,
  selectedDomains: ["python", "engineering", "math-data"],
  knownLessons: [],
  lastLesson: "",
  onboarded: false,
});
const blank = (): Workspace => ({
  version: 1,
  userId: "local-you",
  profiles: ["You", "Omar", "Oussama", "Soulayman"].map((n, i) =>
    defaultProfile(`local-${i ? i : "you"}`, n),
  ),
  progress: {},
  custom: [],
  projects: [],
  team: null,
});
export function localLoad(): Workspace {
  const raw = localStorage.getItem(key);
  if (!raw) return blank();
  try {
    const data = JSON.parse(raw);
    validateWorkspace(data);
    return data;
  } catch {
    throw new Error(
      "Saved local data could not be read. Export it from Settings before resetting; your stored data has not been overwritten.",
    );
  }
}
export function localSave(state: Workspace) {
  validateWorkspace(state);
  localStorage.setItem(key, JSON.stringify(state));
}
export const localRaw = () => localStorage.getItem(key) ?? "";
export const resetLocal = () => localStorage.removeItem(key);
function assertResult(result: { error: { message: string } | null }) {
  if (result.error) throw new Error(result.error.message);
}
const profileFromRow = (row: any): Profile => ({
  id: row.id,
  displayName: row.display_name,
  hours: row.hours,
  selectedDomains: row.selected_domains,
  knownLessons: row.known_lessons,
  lastLesson: row.last_lesson,
  onboarded: row.onboarded,
});
export async function loadCloud(): Promise<Workspace | null> {
  if (!db) return null;
  const session = await db.auth.getSession();
  assertResult(session);
  const user = session.data.session?.user;
  if (!user) return null;
  const me = await db
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle();
  assertResult(me);
  if (!me.data) {
    const p = defaultProfile(
      user.id,
      user.user_metadata.full_name ?? user.user_metadata.user_name ?? "Learner",
    );
    await saveProfile({ ...blank(), userId: user.id }, p);
  }
  const membership = await db
    .from("memberships")
    .select("team_id,role")
    .eq("user_id", user.id)
    .maybeSingle();
  assertResult(membership);
  let team: Workspace["team"] = null;
  if (membership.data) {
    const result = await db
      .from("teams")
      .select("*")
      .eq("id", membership.data.team_id)
      .single();
    assertResult(result);
    team = {
      id: result.data.id,
      name: result.data.name,
      ownerId: result.data.owner_id,
      role: membership.data.role,
    };
  }
  const [profiles, progress, notes, custom, projects, participants] =
    await Promise.all([
      db.from("profiles").select("*"),
      db.from("lesson_progress").select("*"),
      db.from("private_notes").select("*").eq("user_id", user.id),
      db.from("custom_topics").select("*"),
      db.from("projects").select("*"),
      db.from("project_participants").select("*"),
    ]);
  [profiles, progress, notes, custom, projects, participants].forEach(
    assertResult,
  );
  for (const project of projects.data ?? []) validateBrief(project.brief);
  const byUser: Workspace["progress"] = {};
  for (const row of progress.data ?? []) {
    byUser[row.user_id] ??= {};
    byUser[row.user_id][row.lesson_id] = {
      status: row.status,
      checked: row.checked,
      notes:
        notes.data?.find((n) => n.lesson_id === row.lesson_id)?.notes ?? "",
      evidence: row.evidence,
      confidence: row.confidence,
      conceptConfidence: row.concept_confidence,
    };
  }
  return {
    version: 1,
    userId: user.id,
    profiles: (profiles.data ?? []).map(profileFromRow),
    progress: byUser,
    team,
    custom: (custom.data ?? []).map((row) => ({
      ...row.payload,
      id: row.id,
      ownerId: row.user_id,
    })),
    projects: (projects.data ?? []).map((row) => ({
      id: row.id,
      ownerId: row.owner_id,
      brief: row.brief,
      status: row.status,
      participants: (participants.data ?? [])
        .filter((p) => p.project_id === row.id)
        .map((p) => p.user_id),
      milestones: row.milestones,
      repoUrl: row.repo_url,
      demoUrl: row.demo_url,
      evidence: row.evidence,
      revision: row.revision,
    })),
  };
}
export async function saveProfile(state: Workspace, p: Profile) {
  validateProfile(p);
  if (db) {
    assertResult(
      await db.from("profiles").upsert({
        id: state.userId,
        display_name: p.displayName.trim(),
        hours: p.hours,
        selected_domains: p.selectedDomains,
        known_lessons: p.knownLessons,
        last_lesson: p.lastLesson,
        onboarded: p.onboarded,
      }),
    );
  } else {
    const latest = localLoad();
    localSave({
      ...latest,
      profiles: latest.profiles.map((x) => (x.id === p.id ? p : x)),
    });
  }
}
export async function saveProgress(
  state: Workspace,
  lessonId: string,
  p: Progress,
) {
  safeUrl(p.evidence);
  for (const n of [
    ...Object.values(p.conceptConfidence ?? {}),
    ...(p.confidence != null ? [p.confidence] : []),
  ])
    if (!Number.isInteger(n) || n < 0 || n > 100)
      throw new Error("Understanding ratings must be integers from 0 to 100.");
  if (db) {
    assertResult(
      await db.rpc("save_lesson_progress", {
        p_lesson: lessonId,
        p_status: p.status,
        p_checked: p.checked,
        p_notes: p.notes,
        p_evidence: p.evidence,
        p_confidence: p.confidence ?? null,
        p_concept_confidence: p.conceptConfidence ?? {},
      }),
    );
  } else {
    const latest = localLoad();
    localSave({
      ...latest,
      progress: {
        ...latest.progress,
        [state.userId]: { ...latest.progress[state.userId], [lessonId]: p },
      },
    });
  }
}
export async function saveTopic(state: Workspace, topic: CustomTopic) {
  validateTopic(topic);
  if (db) {
    assertResult(
      await db.from("custom_topics").upsert({
        id: topic.id,
        user_id: state.userId,
        team_id: state.team?.id ?? null,
        payload: topic,
      }),
    );
  } else {
    const latest = localLoad();
    localSave({
      ...latest,
      custom: [...latest.custom.filter((t) => t.id !== topic.id), topic],
    });
  }
}
export async function createProject(
  state: Workspace,
  project: ProjectInstance,
) {
  validateBrief(project.brief);
  if (db) {
    if (!state.team)
      throw new Error(
        "Create or join a team before starting a shared project.",
      );
    assertResult(
      await db.rpc("start_project", {
        p_id: project.id,
        p_brief: project.brief,
      }),
    );
  } else {
    const latest = localLoad();
    localSave({ ...latest, projects: [...latest.projects, project] });
  }
}
export async function recordVisit(state: Workspace, id: string) {
  if (db)
    assertResult(
      await db
        .from("profiles")
        .update({ last_lesson: id })
        .eq("id", state.userId),
    );
  else {
    const latest = localLoad();
    localSave({
      ...latest,
      profiles: latest.profiles.map((p) =>
        p.id === state.userId ? { ...p, lastLesson: id } : p,
      ),
    });
  }
}
export async function joinProject(state: Workspace, id: string) {
  if (db) assertResult(await db.rpc("join_project", { p_project: id }));
  else {
    const latest = localLoad();
    localSave({
      ...latest,
      projects: latest.projects.map((p) =>
        p.id === id
          ? {
              ...p,
              participants: [...new Set([...p.participants, state.userId])],
            }
          : p,
      ),
    });
  }
}
export async function saveProject(state: Workspace, project: ProjectInstance) {
  safeUrl(project.repoUrl);
  safeUrl(project.demoUrl);
  if (db) {
    assertResult(
      await db.rpc("update_project", {
        p_id: project.id,
        p_status: project.status,
        p_milestones: project.milestones,
        p_repo: project.repoUrl,
        p_demo: project.demoUrl,
        p_evidence: project.evidence,
        p_revision: project.revision,
      }),
    );
  } else {
    const latest = localLoad();
    const current = latest.projects.find((p) => p.id === project.id);
    if (!current || !current.participants.includes(state.userId))
      throw new Error("Only participants can edit this project.");
    if (current.revision !== project.revision)
      throw new Error(
        "Project changed in another tab. Refresh and load its latest saved version.",
      );
    localSave({
      ...latest,
      projects: latest.projects.map((p) =>
        p.id === project.id
          ? {
              ...p,
              status: project.status,
              milestones: project.milestones,
              repoUrl: project.repoUrl,
              demoUrl: project.demoUrl,
              evidence: project.evidence,
              revision: p.revision + 1,
            }
          : p,
      ),
    });
  }
}
export async function createTeam(name: string) {
  if (!db) return;
  assertResult(await db.rpc("create_team", { p_name: name }));
}
export async function acceptInvite(token: string) {
  if (!db) return;
  assertResult(await db.rpc("accept_invitation", { p_token: token }));
}
export async function createInvite() {
  if (!db) throw new Error("Connect Supabase to invite other devices.");
  const result = await db.rpc("create_invitation");
  assertResult(result);
  return result.data as string;
}
export async function invitations() {
  if (!db) return [];
  const r = await db
    .from("invitations")
    .select("id,expires_at,revoked")
    .order("expires_at", { ascending: false });
  assertResult(r);
  return r.data ?? [];
}
export async function revokeInvite(id: string) {
  if (db)
    assertResult(
      await db.from("invitations").update({ revoked: true }).eq("id", id),
    );
}
export async function signIn() {
  if (!db)
    throw new Error(
      "Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to enable GitHub sign-in.",
    );
  const invitation = new URLSearchParams(location.search).get("invite");
  if (invitation) sessionStorage.setItem("forge-pending-invite", invitation);
  assertResult(
    await db.auth.signInWithOAuth({
      provider: "github",
      options: { redirectTo: location.origin + location.pathname },
    }),
  );
}
