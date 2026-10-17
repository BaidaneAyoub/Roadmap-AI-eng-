import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { domains as basic } from "../content/curriculum.mjs";
import { advanced } from "../content/advanced.mjs";
import { dataEngineering } from "../content/data-engineering.mjs";
import { expandDomains } from "../content/details.mjs";
import { attachVideos } from "../content/videos.mjs";
import { domainOrder, stageGuides, pipeline, roadmaps } from "../content/order.mjs";
import { recommend } from "../src/recommendations.mjs";
import {
  totals,
  nextLesson,
  parseChecklist,
  checklistTotals,
  toggleNode,
  safeUrl,
  statusFor,
  validateProfile,
  confidenceTotals,
  validateBrief,
  validateTopic,
} from "../src/logic.ts";
const domains = attachVideos(
  expandDomains([...basic, ...advanced, ...dataEngineering]).sort(
    (a, b) => domainOrder.indexOf(a.id) - domainOrder.indexOf(b.id),
  ),
);
const lessons = domains.flatMap((d) => d.modules.flatMap((m) => m.lessons));
test("Expanded curriculum preserves saved lesson/concept identities and adds substantive depth to every domain", () => {
  for (const domain of [...basic, ...advanced]) {
    const original = domain.modules.flatMap((m) => m.lessons);
    const expanded = lessons.filter((l) => l.domainId === domain.id);
    for (const previous of original) {
      const current = expanded.find((l) => l.id === previous.id);
      assert(current, `Saved lesson ID removed: ${previous.id}`);
      assert.deepEqual(
        current.concepts.map((c) => c.name),
        previous.concepts.map((c) => c.name),
      );
    }
    const added = expanded.filter(
      (l) => !original.some((old) => old.id === l.id),
    );
    assert(added.length >= 2, `${domain.id} needs expanded lessons`);
    for (const lesson of added) assert(lesson.concepts.length >= 5, lesson.id);
  }
  assert(lessons.filter((l) => l.domainId === "dl").length >= 30);
  for (const id of [
    "dl-attention-math",
    "dl-adamw-math",
    "dl-loss-derivatives",
    "dl-audio-multimodal",
    "dl-reinforcement-basics",
    "ml-svm-kernels",
    "rag-hybrid-reranking",
  ])
    assert(
      lessons.some((l) => l.id === id),
      id,
    );
});
test("Three roadmaps cover every domain, share one foundation and keep the advanced roadmap separate", async () => {
  assert.deepEqual(
    pipeline.map((s) => s.domain),
    domainOrder,
  );
  assert(pipeline.every((s) => s.outcome.length > 30));
  const [ai, data, advanced] = roadmaps;
  assert.deepEqual(
    roadmaps.map((r) => r.id),
    ["ai", "data", "ai-data"],
  );
  assert.deepEqual(
    [...new Set(roadmaps.flatMap((r) => r.domains))].sort(),
    [...domainOrder].sort(),
  );
  assert.equal(ai.domains[0], "python");
  assert.equal(ai.domains.at(-1), "product");
  assert(ai.domains.indexOf("eval-security") < ai.domains.indexOf("deployment"));
  assert.deepEqual(
    ai.domains.filter((id) => data.domains.includes(id)),
    ["python", "engineering", "math-data", "backend"],
  );
  assert.equal(data.domains.at(-1), "data-engineering");
  assert.deepEqual(advanced.domains, ["ai-data"]);
  assert(advanced.requires.length > 30);
  assert(!ai.domains.includes("ai-data") && !data.domains.includes("ai-data"));
  const exported = JSON.parse(
    await readFile(
      new URL("../src/data/catalog.json", import.meta.url),
      "utf8",
    ),
  );
  assert.deepEqual(exported.pipeline, pipeline);
  assert.deepEqual(exported.roadmaps, roadmaps);
});
test("Guided route covers every stage with an authored goal, checkpoint and transition", async () => {
  assert.equal(new Set(domainOrder).size, domains.length);
  assert.deepEqual(
    domains.map((d) => d.id),
    domainOrder,
  );
  const serialized = JSON.parse(
    await readFile(
      new URL("../src/data/catalog.json", import.meta.url),
      "utf8",
    ),
  );
  for (const domain of domains) {
    const guide = stageGuides[domain.id];
    assert(
      guide.phase &&
        guide.goal.length > 30 &&
        guide.checkpoint.length > 50 &&
        guide.bridge.length > 40,
    );
    assert.deepEqual(
      serialized.domains.find((d) => d.id === domain.id).guide,
      guide,
    );
  }
  assert.equal(domainOrder[0], "python");
  assert(domainOrder.indexOf("eval-security") < domainOrder.indexOf("agents"));
});
test("Data Engineering source keeps all ten phases across the Data and advanced AI + Data roadmaps", () => {
  // deepenDomains appends a Stage checkpoint module after each domain's phases.
  const phasesOf = (id) =>
    domains
      .find((d) => d.id === id)
      .modules.filter((m) => m.title !== "Stage checkpoint");
  const data = phasesOf("data-engineering");
  const advanced = phasesOf("ai-data");
  assert.deepEqual(
    data.map((m) => m.title),
    Array.from({ length: 7 }, (_, i) => `Phase ${i + 1}`),
  );
  assert.deepEqual(
    advanced.map((m) => m.title),
    ["Phase 1", "Phase 2", "Phase 3"],
  );
  const phases = [...data, ...advanced];
  assert.deepEqual(
    phases.map((m) => m.lessons[0].id),
    [
      "de-spark",
      "de-airflow",
      "de-kafka",
      "de-lakehouse",
      "de-dbt-kimball",
      "de-quality-observability",
      "de-cloud-infra",
      "de-mlops",
      "de-llm-genai",
      "de-system-design-interviews",
    ],
  );
  const content = phases
    .flatMap((m) => m.lessons)
    .flatMap((l) => [l.title, ...l.concepts.map((c) => c.name + " " + c.explanation)])
    .join(" ")
    .toLowerCase();
  for (const term of [
    "catalyst",
    "taskflow",
    "dynamic task mapping",
    "debezium",
    "schema registry",
    "iceberg",
    "kimball",
    "great expectations",
    "openlineage",
    "terraform",
    "mlflow",
    "feast",
    "lora",
    "recall@k",
    "star stories",
  ])
    assert(content.includes(term), term);
  assert.deepEqual(advanced[0].lessons[0].prerequisites, ["de-lakehouse"]);
  assert.deepEqual(advanced[2].lessons[0].prerequisites, ["de-lakehouse"]);
});
const profile = {
  id: "a",
  displayName: "Ayoub",
  hours: 8,
  selectedDomains: ["python"],
  knownLessons: [],
  lastLesson: "",
  onboarded: true,
};
test("Every lesson has stable unique IDs, explained concepts, free resources and a concrete lab", () => {
  assert.equal(domains.length, 15);
  assert.equal(new Set(lessons.map((l) => l.id)).size, lessons.length);
  for (const l of lessons) {
    assert(l.why.length > 30);
    assert(l.concepts.length >= 3);
    for (const c of l.concepts) {
      assert(
        c.name && c.explanation.length > 25 && c.example.length > 20,
        `${l.id}: ${c.name}`,
      );
    }
    assert(l.resources.length >= 2);
    l.resources.forEach((r) => assert.doesNotThrow(() => safeUrl(r.url)));
    assert(l.exercise.brief.length > 70);
    assert(l.exercise.deliverables.length >= 2);
    assert(l.exercise.acceptance.length >= 2);
    assert(l.studyHours > 0 && l.practiceHours > 0);
    l.prerequisites.forEach((id) =>
      assert(
        lessons.some((x) => x.id === id),
        `${l.id}: dangling prerequisite ${id}`,
      ),
    );
  }
  const seen = new Set();
  const visiting = new Set();
  function visit(id) {
    if (seen.has(id)) return;
    assert(!visiting.has(id), "Prerequisite cycle");
    visiting.add(id);
    lessons.find((l) => l.id === id).prerequisites.forEach(visit);
    visiting.delete(id);
    seen.add(id);
  }
  lessons.forEach((l) => visit(l.id));
});
test("Detailed ML/DL concepts and requested production skills remain covered", () => {
  const corpus = (id) =>
    domains
      .find((d) => d.id === id)
      .modules.flatMap((m) => m.lessons)
      .map((l) =>
        [l.title, ...l.concepts.map((c) => `${c.name} ${c.explanation}`)].join(
          " ",
        ),
      )
      .join(" ")
      .toLowerCase();
  for (const term of [
    "cross-validation",
    "leakage",
    "calibration",
    "imbalance",
    "regularization",
    "gradient descent",
    "boosting",
    "pca",
    "svm",
  ])
    assert(corpus("ml").includes(term), term);
  for (const term of [
    "softmax",
    "gelu",
    "adamw",
    "rmsprop",
    "momentum",
    "backpropagation",
    "initialization",
    "layer normalization",
    "early stopping",
    "mixed precision",
    "checkpoint",
    "lstm",
    "attention",
  ])
    assert(corpus("dl").includes(term), term);
  assert(lessons.some((l) => l.id === "docker"));
  assert(lessons.some((l) => l.id === "fastapi"));
});
test("Progress counts leaf lessons once and keeps skipped separate", () => {
  const sample = lessons.slice(0, 4);
  const p = {
    [sample[0].id]: { status: "Completed" },
    [sample[1].id]: { status: "Already known" },
    [sample[2].id]: { status: "Skipped" },
  };
  assert.deepEqual(totals(sample, p, [sample[0].id]), {
    done: 2,
    skipped: 1,
    total: 4,
    percent: 50,
  });
  assert.deepEqual(totals([], {}), {
    done: 0,
    skipped: 0,
    total: 0,
    percent: 0,
  });
  assert.equal(
    statusFor(sample[2].id, { ...profile, knownLessons: [sample[2].id] }, p),
    "Skipped",
  );
});
test("Understanding percentages stay separate from completion and average rated lessons only", () => {
  const sample = lessons.slice(0, 3);
  const p = {
    [sample[0].id]: { status: "Completed", confidence: 40 },
    [sample[1].id]: {
      status: "Not started",
      conceptConfidence: {
        [sample[1].concepts[0].name]: 80,
        [sample[1].concepts[1].name]: 100,
      },
    },
  };
  assert.deepEqual(confidenceTotals(sample, p), {
    percent: 65,
    rated: 2,
    total: 3,
  });
  assert.equal(totals(sample, p).done, 1);
  assert.deepEqual(confidenceTotals(sample, {}), {
    percent: null,
    rated: 0,
    total: 3,
  });
  assert.equal(
    confidenceTotals(sample, { [sample[0].id]: { confidence: 0 } }).percent,
    0,
  );
});
test("Custom topics and project briefs reject malformed external payloads", () => {
  assert.doesNotThrow(() => validateBrief(recommend([domains[0]])[0]));
  assert.throws(() => validateBrief({ id: "bad" }));
  assert.throws(() =>
    validateTopic({
      title: "unsafe",
      hours: 2,
      mapping: "",
      resources: [{ title: "bad", url: "javascript:alert(1)" }],
      checklist: parseChecklist("A"),
    }),
  );
  assert.throws(() =>
    validateTopic({
      title: "empty",
      hours: 2,
      mapping: "",
      resources: [],
      checklist: [],
    }),
  );
});
test("Continue learning respects selected domains, known skills and skips", () => {
  const python = lessons.filter((l) => l.domainId === "python");
  const p = {
    [python[0].id]: { status: "Completed" },
    [python[1].id]: { status: "Skipped" },
  };
  assert.equal(
    nextLesson(lessons, { ...profile, knownLessons: [python[2].id] }, p).id,
    python[3].id,
  );
  assert.equal(
    nextLesson(lessons, { ...profile, lastLesson: python[4].id }, p).id,
    python[4].id,
  );
});
test("Every catalog domain/lesson produces exactly ten distinct detailed briefs", () => {
  for (const skill of [...domains, ...lessons]) {
    const results = recommend([skill]);
    assert.equal(results.length, 10);
    assert.equal(new Set(results.map((r) => r.id)).size, 10);
    results.forEach((p) => {
      assert(p.problem.length > 30 && p.data.length > 30);
      assert.equal(p.integration[0].skillId, skill.id);
      assert(p.integration[0].task.length > 30);
      assert(
        p.milestones.length >= 4 &&
          p.acceptance.length >= 3 &&
          p.documentation.length >= 1,
      );
    });
  }
});
test("ML + DL + FastAPI + Docker all have meaningful tasks; IDs ignore selection order", () => {
  const skills = [
    domains.find((d) => d.id === "ml"),
    domains.find((d) => d.id === "dl"),
    lessons.find((l) => l.id === "fastapi"),
    lessons.find((l) => l.id === "docker"),
  ];
  const first = recommend(skills);
  const reversed = recommend([...skills].reverse());
  assert.deepEqual(
    first.map((p) => p.id),
    reversed.map((p) => p.id),
  );
  assert.equal(recommend([...skills, skills[0]])[0].integration.length, 4);
  for (const p of first) {
    assert.equal(p.integration.length, 4);
    for (const s of skills) {
      const part = p.integration.find((i) => i.skillId === s.id);
      assert(part.task && part.deliverable && part.check);
    }
    assert(
      p.integration.find((i) => i.skillId === "dl").task.includes("PyTorch"),
    );
    assert(
      p.integration
        .find((i) => i.skillId === "fastapi")
        .task.includes("FastAPI"),
    );
    assert(
      p.integration.find((i) => i.skillId === "docker").task.includes("Docker"),
    );
  }
  assert.equal(recommend([]).length, 0);
});
test("Unmapped custom topics are honestly labeled general practice", () => {
  const result = recommend([{ id: "custom-1", title: "Novel topic" }]);
  assert.equal(result.length, 10);
  result.forEach((p) => {
    assert(p.general);
    assert(p.integration[0].general);
    assert(p.integration[0].check.includes("no researched catalog mapping"));
  });
});
test("Nested custom checklists count only leaves and reject ambiguous indentation", () => {
  const nodes = parseChecklist(
    "Topic\n  First leaf\n  Subtopic\n    Second leaf\nAnother leaf",
  );
  assert.deepEqual(checklistTotals(nodes), { done: 0, total: 3 });
  const updated = toggleNode(nodes, "item-1");
  assert.deepEqual(checklistTotals(updated), { done: 1, total: 3 });
  assert.equal(nodes[0].children[0].done, false);
  assert.throws(() => parseChecklist("Root\n   Bad indent"));
  assert.throws(() => parseChecklist("Root\n    Skipped level"));
  assert.throws(() => parseChecklist(""));
});
test("Trust boundary checks reject unsafe links and invalid profile values", () => {
  assert.equal(safeUrl(""), "");
  assert.throws(() => safeUrl("javascript:alert(1)"));
  assert.throws(() => safeUrl("data:text/html,hello"));
  assert.throws(() => validateProfile({ ...profile, hours: 0 }));
  assert.throws(() => validateProfile({ ...profile, selectedDomains: [] }));
  assert.throws(() => validateProfile({ ...profile, displayName: "" }));
});
test("Generated catalog and coverage match the authored source", async () => {
  const generated = JSON.parse(
    await readFile(
      new URL("../src/data/catalog.json", import.meta.url),
      "utf8",
    ),
  );
  const compact = JSON.parse(
    JSON.stringify(
      lessons.map((l) => ({
        ...l,
        videos: undefined,
        videoUrls: l.videos.map((v) => v.url),
        concepts: l.concepts.map((c) => ({
          ...c,
          videos: undefined,
          videoUrls: c.videos.map((v) => v.url),
        })),
      })),
    ),
  );
  assert.deepEqual(generated.lessons, compact);
  const coverage = JSON.parse(
    await readFile(
      new URL("../src/data/coverage.json", import.meta.url),
      "utf8",
    ),
  );
  assert(coverage.length > 100);
  assert(
    coverage.every(
      (c) => c.lessonId && lessons.some((l) => l.id === c.lessonId),
    ),
  );
});
test("Every concept has YouTube links, explanations, useful guidance and publisher provenance", () => {
  for (const l of lessons) {
    assert(l.videos.length >= 1);
    for (const c of l.concepts) {
      assert(c.videos.length >= 1, `${l.id}/${c.name}`);
      for (const v of c.videos) {
        assert(v.url.startsWith("https://www.youtube.com/watch?v="));
        assert(
          v.explains.length > 25 &&
            v.useful.length > 25 &&
            v.source.startsWith("https://"),
        );
        assert(v.watchFor.includes(c.name.toLowerCase()));
      }
    }
  }
});
test("Migration keeps writes behind identity-enforcing RPCs and enables RLS on every table", async () => {
  const sql = await readFile(
    new URL("../supabase/migrations/001_workspace.sql", import.meta.url),
    "utf8",
  );
  for (const table of [
    "profiles",
    "teams",
    "memberships",
    "invitations",
    "lesson_progress",
    "private_notes",
    "custom_topics",
    "projects",
    "project_participants",
  ])
    assert(
      sql.includes(`alter table public.${table} enable row level security`),
    );
  assert(sql.includes("where id=p_id and revision=p_revision"));
  assert(sql.includes("expires_at>now() for update"));
  assert(sql.includes("grant update(revoked)"));
  assert(!sql.includes("grant insert,update on public.memberships"));
  assert(
    sql.includes("notes_read") && sql.includes("using(user_id=auth.uid())"),
  );
});
