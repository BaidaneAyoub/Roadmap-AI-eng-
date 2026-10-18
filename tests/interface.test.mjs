import test, { after } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "vite";

const server = await createServer({
  server: { middlewareMode: true, hmr: false },
  appType: "custom",
});
after(() => server.close());
// React and react-dom are loaded through the same Vite module runner as App.tsx
// so SSR shares one React instance; static imports create a duplicate on Windows.
const { createElement, renderToStaticMarkup } = await server.ssrLoadModule(
  "/tests/ssr-bridge.mjs",
);
const { LessonPage, Roadmap, Dashboard, ProjectBuilder, BriefDetail } =
  await server.ssrLoadModule("/src/App.tsx");
const { catalog } = await server.ssrLoadModule("/src/catalog.ts");
const { recommend } = await server.ssrLoadModule("/src/recommendations.mjs");
const user = {
  id: "learner",
  displayName: "Learner",
  hours: 8,
  selectedDomains: ["python", "dl"],
  knownLessons: [],
  lastLesson: "dl-tensors",
  onboarded: true,
};
const state = {
  version: 1,
  userId: user.id,
  profiles: [user],
  progress: {},
  custom: [],
  projects: [],
  team: null,
};

test("Project builder shows the first ten ideas, provenance and the next batch control", () => {
  const html = renderToStaticMarkup(
    createElement(ProjectBuilder, {
      state,
      user,
      run: async () => {},
      busy: false,
      initialSkill: "python",
    }),
  );
  assert.equal((html.match(/class="panel project-card"/g) ?? []).length, 10);
  assert(
    html.includes("Show more") &&
      html.includes("Curated match") &&
      html.includes("150 authored projects"),
  );
});

test("Project details expose the learning handoff and preserve legacy brief rendering", () => {
  const brief = recommend([catalog.lessons.find((l) => l.id === "fastapi")])[0];
  const html = renderToStaticMarkup(createElement(BriefDetail, { brief }));
  for (const label of [
    "What you will learn",
    "Architecture and data flow",
    "Copy mentor prompt",
    "Download .md",
    "Preview prompt",
    "Private notes",
  ])
    assert(html.includes(label), label);
  const legacy = { ...brief };
  for (const key of [
    "audience",
    "learningGoals",
    "boundaries",
    "dataFlow",
    "stages",
    "resources",
    "source",
  ])
    delete legacy[key];
  assert(
    renderToStaticMarkup(
      createElement(BriefDetail, { brief: legacy }),
    ).includes("Copy mentor prompt"),
  );
});

test("Simplified lesson keeps every concept, video and exercise available with separate progress controls", () => {
  const lesson = catalog.lessons.find((l) => l.id === "dl-tensors");
  const html = renderToStaticMarkup(
    createElement(LessonPage, {
      lesson,
      state,
      user,
      busy: false,
      run: async () => {},
    }),
  );
  for (const label of [
    "Lesson sections",
    "Understand",
    "Resources",
    "Practice",
    "Your progress",
    "Save progress",
  ]) {
    assert(html.includes(label), label);
  }
  assert.equal((html.match(/aria-pressed="true"/g) ?? []).length, 1);
  for (const concept of lesson.concepts) assert(html.includes(concept.name));
  for (const video of lesson.videos) assert(html.includes(video.url));
  assert(html.includes(lesson.exercise.title));
  assert(!html.includes("Unsaved changes"));
  assert(html.includes('id="lesson-progress"'));
});

test("Roadmap map shows all three roadmaps and every domain destination", () => {
  const html = renderToStaticMarkup(
    createElement(Roadmap, { state, search: "" }),
  );
  for (const domain of catalog.domains)
    assert(html.includes(`href="#/roadmap/${domain.id}"`), domain.id);
  const steps = catalog.roadmaps.flatMap((r) => r.domains).length;
  assert.equal((html.match(/class="pipeline-row"/g) ?? []).length, steps);
  assert.equal((html.match(/class="pipeline-phase"/g) ?? []).length, 3);
  for (const heading of [
    "AI Engineering",
    "Data Engineering",
    "AI + Data Engineering",
  ])
    assert(html.includes(`>${heading}</h2>`), heading);
  assert(html.includes("SHARED · STUDIED ONCE"));
  const places = new Map();
  for (const id of catalog.roadmaps.flatMap((r) => r.domains))
    places.set(id, (places.get(id) ?? 0) + 1);
  const sharedCards = [...places.values()]
    .filter((count) => count > 1)
    .reduce((sum, count) => sum + count, 0);
  assert.equal(
    (html.match(/pipeline-node +shared/g) ?? []).length,
    sharedCards,
    "shared nodes are marked in every roadmap that lists them",
  );
  assert.equal(
    (html.match(/class="pipeline-topics-disclosure"/g) ?? []).length,
    steps,
  );
});

test("Dashboard gives the next learning action priority over statistics", () => {
  const html = renderToStaticMarkup(createElement(Dashboard, { state, user }));
  assert(
    html.indexOf("Continue learning") < html.indexOf("Your learning progress"),
  );
  assert.deepEqual(state.progress, {});
});
