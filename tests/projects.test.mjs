import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { projectLibrary, predictionTargets } from "../content/projects.mjs";
import {
  recommend,
  recommendAll,
  libraryBrief,
  legacyRecommend,
} from "../src/recommendations.mjs";
import {
  learnerContext,
  mentorPrompt,
  copyMentorPrompt,
  promptDownload,
} from "../src/project-mentor.mjs";
import { validateBrief, validateWorkspace } from "../src/logic.ts";

const catalog = JSON.parse(
  fs.readFileSync(new URL("../src/data/catalog.json", import.meta.url)),
);
const skill = (id) =>
  catalog.lessons.find((s) => s.id === id) ??
  catalog.domains.find((s) => s.id === id);

test("140 authored projects cover each domain ten times with valid native skills and complete briefs", () => {
  assert.equal(projectLibrary.length, 140);
  assert.equal(new Set(projectLibrary.map((p) => p.id)).size, 140);
  assert.equal(new Set(projectLibrary.map((p) => p.title)).size, 140);
  assert.equal(new Set(projectLibrary.map((p) => p.check)).size, 140);
  for (const domain of catalog.domains)
    assert.equal(
      projectLibrary.filter((p) => p.domainId === domain.id).length,
      10,
    );
  for (const entry of projectLibrary) {
    assert(
      entry.nativeSkills.every((id) => skill(id)),
      entry.id,
    );
    const brief = libraryBrief(entry, entry.nativeSkills.map(skill));
    validateBrief(brief);
    assert(
      brief.learningGoals.length &&
        brief.stages.length >= 4 &&
        brief.resources.length,
    );
    assert(mentorPrompt(brief).includes(entry.check));
  }
});

test("Pagination is stable, exhausts candidates and never repeats IDs", () => {
  for (const ids of [
    ["python"],
    ["ml", "dl", "fastapi", "docker"],
    ["python-files", "python-iteration"],
    ["backend-sql", "docker-compose"],
    ["llm-model-selection", "llm-sampling-decoding"],
  ]) {
    const skills = ids.map(skill),
      all = recommendAll(skills);
    assert(all.length >= 10);
    assert.equal(new Set(all.map((p) => p.id)).size, all.length);
    const pages = [];
    for (let offset = 0; offset < all.length; offset += 10) {
      const page = recommend(skills, offset);
      assert.equal(page.length, Math.min(10, all.length - offset));
      pages.push(...page);
    }
    assert.deepEqual(pages, all);
    assert.deepEqual(recommendAll([...skills].reverse()), all);
    assert.deepEqual(recommend(skills, all.length), []);
    assert(
      all.slice(0, 10).every((p) => p.source !== "Composed practice pattern"),
    );
  }
});

test("ML/DL/API/container combinations use explicit prediction problems and connected responsibilities", () => {
  const results = recommend(["ml", "dl", "fastapi", "docker"].map(skill));
  for (const brief of results) {
    assert(predictionTargets[brief.patternId], brief.title);
    assert.equal(brief.integration.length, 4);
    assert.match(
      brief.integration.find((i) => i.skillId === "fastapi").task,
      /FastAPI.*Pydantic/,
    );
    assert.match(
      brief.integration.find((i) => i.skillId === "docker").task,
      /Docker/,
    );
    assert.match(brief.dataFlow.join(" "), /same target and splits/);
    for (const id of brief.skills)
      assert(
        brief.integration.some(
          (i) => i.skillId === id && i.check && i.deliverable,
        ),
      );
  }
});

test("SQL and FastAPI remain distinct; exact matches rank ahead of adapted projects", () => {
  const results = recommend([skill("backend-sql"), skill("fastapi")]);
  assert.match(
    results[0].integration.find((i) => i.skillId === "backend-sql").task,
    /SQL joins, constraints and transactions/,
  );
  assert.match(
    results[0].integration.find((i) => i.skillId === "fastapi").task,
    /request\/response validation/,
  );
  assert.equal(
    recommend([
      skill("dl-training-loop"),
      skill("ml"),
      skill("fastapi"),
      skill("docker"),
    ])[0].source,
    "Curated match",
  );
});

test("Projects disclose additional native prerequisites instead of hiding unselected technologies", () => {
  const entry = projectLibrary.find((p) => p.id === "dl-digits-compare");
  const brief = libraryBrief(entry, [skill("docker")]);
  assert(
    brief.prerequisiteSkills.includes("fastapi") &&
      brief.prerequisiteSkills.includes("ml"),
  );
  assert.match(mentorPrompt(brief), /Additional project background/);
});

test("Mapped custom topics preserve tool roles; unknown topics are explicitly general practice", () => {
  const mapped = {
    id: "custom-postgres",
    title: "My database track",
    mapping: "backend-sql",
    domainId: "backend",
  };
  const result = recommend([mapped])[0];
  assert(!result.general);
  assert.match(result.integration[0].task, /relational schema/);
  const unknown = { id: "custom-unknown", title: "Novel tool" };
  for (const brief of recommend([unknown])) {
    assert(brief.general && brief.integration[0].general);
    assert.match(mentorPrompt(brief), /unmapped: agree a role first/);
  }
});

test("Large selections get extension stages and alternative models share comparison checks", () => {
  const selected = [
    "python",
    "ml",
    "dl",
    "fastapi",
    "backend-sql",
    "docker",
    "eval-datasets",
  ].map(skill);
  const brief = recommend(selected)[0];
  assert.equal(brief.integration.length, selected.length);
  assert(brief.stages.some((s) => s.title.startsWith("Extension")));
  assert(brief.hours > 30);
  assert(brief.acceptance.some((s) => s.includes("Compare ML and DL")));
});

test("Prompt includes learning signals and missing prerequisites without private fields", () => {
  const brief = recommend([skill("fastapi"), skill("docker")])[0];
  const progress = {
    fastapi: {
      status: "Learning",
      confidence: 42,
      notes: "PRIVATE_NOTE_SENTINEL",
      evidence: "https://private.example/evidence",
    },
  };
  const profile = { knownLessons: [], displayName: "PRIVATE_NAME_SENTINEL" };
  const learning = learnerContext(brief, catalog.lessons, profile, progress);
  assert.equal(
    learning.find((s) => s.title === skill("fastapi").title).confidence,
    42,
  );
  const text = mentorPrompt(brief, learning);
  for (const expected of [
    "self-reported",
    "42%",
    "Wait for my attempt",
    "Do not provide the entire implementation",
    "Required skill responsibilities",
    "Final acceptance tests",
    brief.problem,
  ])
    assert(text.includes(expected), expected);
  assert(!text.includes("PRIVATE_") && !text.includes("private.example"));
  const fresh = mentorPrompt(
    brief,
    learnerContext(brief, catalog.lessons, profile, {
      fastapi: { status: "Completed", confidence: 80 },
    }),
  );
  assert.notEqual(fresh, text);
  assert.equal(recommend([skill("docker"), skill("fastapi")])[0].id, brief.id);
});

test("Clipboard failures return a manual-copy outcome and downloads contain the exact prompt", async () => {
  let copied = "";
  assert.equal(
    await copyMentorPrompt("hello", {
      writeText: async (text) => {
        copied = text;
      },
    }),
    "copied",
  );
  assert.equal(copied, "hello");
  assert.equal(
    await copyMentorPrompt("hello", {
      writeText: async () => {
        throw new Error("denied");
      },
    }),
    "manual",
  );
  assert.equal(await copyMentorPrompt("hello", undefined), "manual");
  const brief = recommend([skill("python")])[0],
    file = promptDownload(brief);
  assert.equal(file.text, mentorPrompt(brief));
  assert(
    file.filename.endsWith("-mentor.md") &&
      file.type.startsWith("text/markdown"),
  );
});

test("Old saved project snapshots survive validation and prompt generation unchanged", () => {
  const brief = legacyRecommend([skill("python")])[0];
  const project = {
    id: "instance",
    ownerId: "a",
    brief,
    status: "In progress",
    participants: ["a"],
    milestones: [brief.milestones[0]],
    repoUrl: "",
    demoUrl: "",
    evidence: "existing work",
    revision: 2,
  };
  const state = {
    version: 1,
    userId: "a",
    profiles: [
      {
        id: "a",
        displayName: "Learner",
        hours: 8,
        selectedDomains: ["python"],
        knownLessons: [],
        lastLesson: "",
        onboarded: true,
      },
    ],
    progress: {},
    custom: [],
    projects: [project],
    team: null,
  };
  const original = JSON.stringify(state);
  validateWorkspace(state);
  assert(mentorPrompt(brief).includes(brief.problem));
  assert.equal(JSON.stringify(state), original);
  assert(brief.id.startsWith("v1:"));
});

test("New optional brief fields are validated at import boundaries", () => {
  const brief = recommend([skill("python")])[0];
  assert.throws(() =>
    validateBrief({
      ...brief,
      resources: [{ title: "bad", url: "javascript:alert(1)", access: "free" }],
    }),
  );
  assert.throws(() =>
    validateBrief({ ...brief, stages: [{ title: "missing" }] }),
  );
  assert.throws(() => validateBrief({ ...brief, learningGoals: [42] }));
});

test("Generated project library matches authored source and shared brief generator", () => {
  const exported = JSON.parse(
    fs.readFileSync(
      new URL("../src/data/project-library.json", import.meta.url),
    ),
  );
  assert.equal(exported.version, 2);
  assert.deepEqual(
    exported.projects,
    projectLibrary.map((p) => libraryBrief(p, p.nativeSkills.map(skill))),
  );
});
