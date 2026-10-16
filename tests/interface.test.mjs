import test, { after } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "vite";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

const server = await createServer({
  server: { middlewareMode: true, hmr: false },
  appType: "custom",
});
after(() => server.close());
const { LessonPage, Roadmap, Dashboard } =
  await server.ssrLoadModule("/src/App.tsx");
const { catalog } = await server.ssrLoadModule("/src/catalog.ts");
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

test("Compact roadmap keeps all 14 domain destinations and its eight-step main route", () => {
  const html = renderToStaticMarkup(
    createElement(Roadmap, { state, search: "" }),
  );
  for (const domain of catalog.domains)
    assert(html.includes(`href="#/roadmap/${domain.id}"`), domain.id);
  assert.equal((html.match(/class="pipeline-row"/g) ?? []).length, 8);
  assert.equal((html.match(/class="pipeline-phase"/g) ?? []).length, 4);
  for (const heading of [
    "Foundations",
    "Build an AI application",
    "Knowledge &amp; quality",
    "Ship &amp; improve",
  ])
    assert(html.includes(heading));
  assert.equal(
    (html.match(/class="pipeline-topics-disclosure"/g) ?? []).length,
    14,
  );
});

test("Dashboard gives the next learning action priority over statistics", () => {
  const html = renderToStaticMarkup(createElement(Dashboard, { state, user }));
  assert(
    html.indexOf("Continue learning") < html.indexOf("Your learning progress"),
  );
  assert.deepEqual(state.progress, {});
});
