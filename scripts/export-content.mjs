import { domains as basics } from "../content/curriculum.mjs";
import { advanced } from "../content/advanced.mjs";
import { dataEngineering } from "../content/data-engineering.mjs";
import { expandDomains } from "../content/details.mjs";
import { recommend, libraryBrief } from "../src/recommendations.mjs";
import { projectLibrary, projectLibraryVersion } from "../content/projects.mjs";
import { mentorPrompt } from "../src/project-mentor.mjs";
import { attachVideos } from "../content/videos.mjs";
import { domainOrder, stageGuides, pipeline, roadmaps } from "../content/order.mjs";
import { learningStages } from '../content/deep-route.mjs';
import { mkdir, writeFile, readFile } from "node:fs/promises";
import path from "node:path";
const domains = attachVideos(
  expandDomains([...basics, ...advanced, ...dataEngineering]).sort(
    (a, b) => domainOrder.indexOf(a.id) - domainOrder.indexOf(b.id),
  ),
).map((d) => ({ ...d, guide: stageGuides[d.id] }));
const lessons = domains.flatMap((d) => d.modules.flatMap((m) => m.lessons));
const allVideos = new Map(
  lessons.flatMap((l) =>
    [...l.videos, ...l.concepts.flatMap((c) => c.videos)].map((v) => [
      v.url,
      (({ watchFor, scope, ...base }) => base)(v),
    ]),
  ),
);
const catalog = {
  version: 1,
  pipeline,
  roadmaps,
  stages: learningStages(domains),
  domains: domains.map((domain) => ({
    ...domain,
    modules: domain.modules.map((module) => ({
      title: module.title,
      lessonIds: module.lessons.map((l) => l.id),
    })),
  })),
  lessons: lessons.map((l) => ({
    ...l,
    videos: undefined,
    videoUrls: l.videos.map((v) => v.url),
    concepts: l.concepts.map((c) => ({
      ...c,
      videos: undefined,
      videoUrls: c.videos.map((v) => v.url),
    })),
  })),
  videos: Object.fromEntries(allVideos),
};
await mkdir("src/data", { recursive: true });
await mkdir("docs/roadmap", { recursive: true });
await writeFile(
  "src/data/catalog.json",
  JSON.stringify(catalog, null, 2) + "\n",
);
const mdResource = (x) => `[${x.title}](${x.url}) — ${x.access}. ${x.extras}.`;
const mdVideo = (v) =>
  `[${v.title}](${v.url}) · ${v.creator} · ${v.format}\n  - Explains: ${v.explains}\n  - Useful because: ${v.useful}${v.watchFor ? `\n  - Watch for: ${v.watchFor}` : ""}\n  - ${v.access}. ${v.extras}\n  - Verification source: ${v.source}`;
const projectMD = (p) =>
  `### ${p.title}\n\n${p.problem}\n\n**Data:** ${p.data}\n\n**Output:** ${p.output}\n\n**Effort:** ${p.hours}h · ${p.difficulty}\n\n${p.integration.map((i) => `- **${i.skillTitle}:** ${i.task}\n  - Deliverable: ${i.deliverable}\n  - Check: ${i.check}`).join("\n")}\n\n**Milestones**\n\n${p.milestones.map((x) => `- [ ] ${x}`).join("\n")}\n\n**Acceptance**\n\n${p.acceptance.map((x) => `- [ ] ${x}`).join("\n")}\n\n**Documentation:** ${p.documentation.join("; ")}.\n`;
const links = new Map(
  lessons.flatMap((l) => l.resources.map((x) => [x.url, x])),
);
const libraryBriefs = projectLibrary.map((entry) =>
  libraryBrief(
    entry,
    entry.nativeSkills.map(
      (id) =>
        lessons.find((l) => l.id === id) ?? domains.find((d) => d.id === id),
    ),
  ),
);
await writeFile(
  "src/data/project-library.json",
  JSON.stringify(
    { version: projectLibraryVersion, projects: libraryBriefs },
    null,
    2,
  ) + "\n",
);
await writeFile(
  "docs/PROJECT_LIBRARY.md",
  `# Project library · version ${projectLibraryVersion}\n\n${projectLibrary.length} authored projects across ${domains.length} domains. Each brief is generated from the same data and composer used by the app. These are educational specifications, not claims that every implementation has been executed.\n\n${domains.map((d) => `- [${d.title}](#${d.id})`).join("\n")}\n\n${domains
    .map(
      (d) =>
        `<a id="${d.id}"></a>\n\n## ${d.title}\n\n${libraryBriefs
          .filter(
            (p) =>
              projectLibrary.find((e) => e.id === p.patternId).domainId ===
              d.id,
          )
          .map(
            (p) =>
              `${projectMD(p)}\n**Audience:** ${p.audience}\n\n**Learning objectives**\n\n${p.learningGoals.map((x) => `- ${x}`).join("\n")}\n\n**Data flow**\n\n${p.dataFlow.map((x, i) => `${i + 1}. ${x}`).join("\n")}\n\n**Free implementation references**\n\n${p.resources.map((r) => `- [${r.title}](${r.url}) — ${r.access}`).join("\n")}\n\n<details>\n<summary>English AI mentor prompt</summary>\n\n\`\`\`text\n${mentorPrompt(p)}\`\`\`\n\n</details>\n`,
          )
          .join("\n---\n")}`,
    )
    .join("\n\n")}`,
);
await writeFile(
  "docs/PIPELINE.md",
  `# Roadmaps\n\nThree roadmaps share one curriculum, built on the supplied Andrew skills map and [roadmap.sh](https://roadmap.sh/ai-engineer). A domain listed in two roadmaps is studied once: progress is recorded per lesson. Prerequisites guide the order; they never lock a lesson.\n\n${roadmaps.map((r) => `## ${r.title}\n\n${r.requires ? `**${r.requires}**\n\n` : ""}${r.domains.map((id, i) => `${i + 1}. [${domains.find((d) => d.id === id).title}](roadmap/${id}.md) — ${pipeline.find((s) => s.domain === id).outcome}`).join("\n")}`).join("\n\n")}\n\nEvery node opens detailed lessons, free sources and exercises. Completion and understanding are separate self-reported measures. [Choose a capstone](PROJECTS.md) when you finish a roadmap.\n`,
);
for (const domain of domains) {
  // A shared domain sits in several roadmaps; the first one supplies the next link.
  const places = roadmaps.flatMap((r) => r.domains.includes(domain.id) ? [{ r, i: r.domains.indexOf(domain.id) }] : []);
  const nextId = places[0] && places[0].r.domains[places[0].i + 1];
  const blocks = domain.modules
    .map(
      (module) =>
        `## ${module.title}\n\n${module.lessons
          .map(
            (lesson) =>
              `<a id="${lesson.id}"></a>\n\n### ${lesson.title}\n\n${lesson.why}\n\n**Priority:** ${lesson.priority} · **Study:** ${lesson.studyHours}h · **Practice:** ${lesson.practiceHours}h\n\n**Prerequisites:** ${
                lesson.prerequisites
                  .map((id) => {
                    const p = lessons.find((l) => l.id === id);
                    return `[${p.title}](${p.domainId}.md#${id})`;
                  })
                  .join(", ") || "None; start here."
              } Navigation is unrestricted.\n\n#### Concepts\n\n${lesson.concepts.map((c) => `- [ ] **${c.name}:** ${c.explanation}\n  - Example: ${c.example}\n  - Videos:\n${c.videos.map((v) => `    - ${mdVideo(v).replaceAll("\n", "\n    ")}`).join("\n")}`).join("\n")}\n\n#### YouTube: focused explanations and full courses\n\n${lesson.videos.map((v) => `- ${mdVideo(v)}`).join("\n")}\n\n#### Free written resources\n\n${lesson.resources.map((x, i) => `${i + 1}. ${mdResource(x)}`).join("\n")}\n\n#### ${lesson.exercise.title}\n\n${lesson.exercise.brief}\n\n**Deliverables**\n\n${lesson.exercise.deliverables.map((x) => `- ${x}`).join("\n")}\n\n**Completion checks**\n\n${lesson.exercise.acceptance.map((x) => `- [ ] ${x}`).join("\n")}\n\n#### Ten project recommendations\n\n${recommend([lesson]).map(projectMD).join("\n")}`,
          )
          .join("\n\n---\n\n")}`,
    )
    .join("\n\n");
  await writeFile(
    `docs/roadmap/${domain.id}.md`,
    `# ${domain.title}\n\n${domain.description}\n\n## ${places.map(({ r, i }) => `${r.title} · Step ${i + 1} of ${r.domains.length}`).join(" · ")}\n\n**Goal:** ${domain.guide.goal}\n\n**Stage checkpoint:** ${domain.guide.checkpoint}\n\n${pipeline.find((s) => s.domain === domain.id).outcome}${places[0]?.r.requires ? ` ${places[0].r.requires}` : ""}\n\nFollow the modules and lessons below at your pace. Finish each exercise, save your evidence and self-assessment, then continue. Completed and Already known count as completed; Skipped is reported separately. You can move ahead at any time.\n\n[Full pipeline](../PIPELINE.md) · ${nextId ? `[Next step: ${domains.find((d) => d.id === nextId).title}](${nextId}.md)` : "[Choose a capstone](../PROJECTS.md)"}\n\n${blocks}\n`,
  );
}
await writeFile(
  "docs/ROADMAP.md",
  `# AI Engineering Team Roadmap\n\nVersion 1 · ${domains.length} domains · ${lessons.length} lessons · ${lessons.reduce((s, l) => s + l.concepts.length, 0)} concept checks.\n\nFollow [the branching AI application pipeline](PIPELINE.md). The list below is a domain directory, not a requirement to complete every topic before continuing. Mark already-known lessons explicitly; skipped lessons do not count as completed. Weekly effort is individual. All required labs can run locally on CPU with generated/built-in data or recorded responses.\n\n${domains.map((d, i) => `${i + 1}. [${d.title}](roadmap/${d.id}.md) — ${d.description}`).join("\n")}\n\n## Recommended learning loop\n\nRead the concept → reproduce the example → finish the lab → run checks → explain results → choose a project → share evidence. Do not wait to finish every domain before building. Python/FastAPI/Docker and ML/DL are selectable independently in the project builder.\n\n## Documentation\n\nPrototype: README, problem statement, AI use case, architecture and evaluation. MVP: add requirements, data/API/prompt specifications and deployment. Production: add model card, monitoring, security, rollback and incident runbook. Follow the supplied AI_PROJECT_DOCUMENTATION_GUIDE (1).md.\n\n## Understanding versus completion\n\nOpen a numbered stage (Python first), then a module and a lesson. Rate each concept and the overall lesson/tool from 0–100%. This is your self-assessment, not a quiz score. Ratings never mark a lesson completed. Domain understanding averages rated lessons, using the overall rating when supplied or the mean of its rated concepts; unrated lessons are reported separately.\n\nSee [videos](VIDEOS.md), [resources](RESOURCES.md), [projects](PROJECTS.md), [coverage](COVERAGE.md) and [setup](SETUP.md).\n`,
);
await writeFile(
  "docs/RESOURCES.md",
  `# Free resource index\n\nLinks are per lesson and include specific chapters where available. Optional hosted products, certificates and GPU access are not required. Link-check results live in RESOURCE_CHECKS.md; availability is not a guarantee of free access forever.\n\n${[...links.values()].map((x) => `- ${mdResource(x)}`).join("\n")}\n`,
);
await writeFile(
  "docs/LEARNING_SEQUENCE.md",
  `# Step-by-step AI engineering route\n\nBased on the supplied Andrew skills map and [roadmap.sh AI Engineer](https://roadmap.sh/ai-engineer). The order is authored for this team, with a direct application-building route and optional ML/DL branches. See [the branching pipeline](PIPELINE.md) for the main route; this document expands the domain directory.\n\nOpen a pipeline node → choose relevant lessons → build each exercise → save understanding and evidence → review the checkpoint → continue along the main route or explore a branch. Skipped lessons stay separate from completed lessons.\n\n${domains.map((d, i) => `## ${i + 1}. [${d.title}](roadmap/${d.id}.md)\n\n${d.guide.phase}\n\n**Goal:** ${d.guide.goal}\n\n**Checkpoint:** ${d.guide.checkpoint}\n\n**Transition:** ${d.guide.bridge}\n\n${d.modules.map((m, j) => `### Module ${j + 1}: ${m.title}\n\n${m.lessons.map((l) => `- [ ] [${l.title}](roadmap/${d.id}.md#${l.id}) · ${l.studyHours + l.practiceHours}h · ${l.priority}`).join("\n")}`).join("\n\n")}\n\n${i < domains.length - 1 ? `↓ Next: [${domains[i + 1].title}](roadmap/${domains[i + 1].id}.md)` : "Build a team capstone and collect user feedback."}`).join("\n\n")}\n`,
);
await writeFile(
  "docs/PROJECTS.md",
  `# Project catalog\n\nBrowse the [142-project library with English mentor prompts](PROJECT_LIBRARY.md). Every lesson has ten initial project briefs in its domain document. The website supports further batches without repeating ideas. The website uses the same deterministic composer for combinations, with a named task, deliverable and check for every selected skill. Unmapped custom topics are explicitly general practice.\n\n## Example: ML + DL + FastAPI + Docker\n\n${recommend(
    [
      domains.find((d) => d.id === "ml"),
      domains.find((d) => d.id === "dl"),
      lessons.find((l) => l.id === "fastapi"),
      lessons.find((l) => l.id === "docker"),
    ],
  )
    .map(projectMD)
    .join("\n")}\n`,
);
// Explicit mapping of the supplied skills map, including its multi-column lines.
const original = await readFile(
  "Andrew_Ng_AI_Engineering_Skills_Map_Exact.md",
  "utf8",
);
const extracted = [
  ...new Set(
    [...original.matchAll(/[├└]─+\s*([^│├└\r\n]+)/g)]
      .map((m) => m[1].trim())
      .filter((x) => /[a-z]/i.test(x)),
  ),
];
const rules = [
  [/unit economics|business model/i, "product-economics"],
  [/^frontend$/i, "backend-frontend"],
  [/directing|break into tasks|^plan$/i, "coding-specifications"],
  [/review ai work|^verify$/i, "coding-review"],
  [/customize agents|coding.agent|^automate$/i, "coding-context"],
  [/^tools$|tool use/i, "agents-tools"],
  [/failure modes/i, "coding-review"],
  [/work with|^product$/i, "product-prototype"],
  [/^databases$/i, "backend-sql"],
  [
    /full.stack|frontend|authentication|authorization|sessions|back.?end/i,
    "backend-auth",
  ],
  [/vector|semantic search|embedding/i, "rag-embeddings"],
  [/sql retrieval|knowledge graph|graph db/i, "rag-sql-graphs"],
  [/chunk|document pars/i, "rag-ingestion"],
  [/rerank|retrieval|grounding|rag/i, "rag-retrieval"],
  [/adam|pytorch|neural|deep learning|transformer/i, "dl-tensors"],
  [
    /supervised|bias|variance|feature|scikit|ml foundation|^ml$/i,
    "ml-generalization",
  ],
  [
    /train.*validation|model evaluation|error analysis|inference/i,
    "ml-metrics",
  ],
  [
    /token|context window|llm foundation|llm behavior|^llms$/i,
    "llm-foundations",
  ],
  [/model selection|fine.tun|open.self|self.host/i, "llm-model-selection"],
  [/structured|prompt|multimodal|tool calling|llm api/i, "llm-tools"],
  [/context management|context engineering/i, "llm-context"],
  [/mcp/i, "agents-mcp"],
  [
    /langgraph|multi.agent|agent loop|agentic|^agents$|memory|^state$|planning/i,
    "agents-loops",
  ],
  [
    /permissions|sandbox|human approval|boundar|autonomy|correct tools|correct context/i,
    "agents-tools",
  ],
  [/docker|containers/i, "docker"],
  [
    /ci.cd|cloud|deployment|infrastructure|productionize|production ai|scaling/i,
    "deployment-cicd",
  ],
  [/monitor|logging|tracing|alert|incident/i, "deployment-monitoring"],
  [
    /architecture|microservices|load balan|scalability|reliability|latency|cost|unit economics|queue|caching|async processing|retries|timeouts|graceful failure|optimization/i,
    "deployment-scaling",
  ],
  [
    /sql database|nosql|indexes|transactions|concurrency|managing data|data engineering|data quality|privacy/i,
    "backend-transactions",
  ],
  [
    /security|secrets|rate limits|guardrails|data leakage|prompt injection/i,
    "security-guardrails",
  ],
  [
    /golden|eval dataset|automated eval|regression|evaluation.driven/i,
    "eval-datasets",
  ],
  [/llm.as|human eval|failure categor|evals|eval/i, "eval-human-judge"],
  [/business metric|measure results/i, "eval-metrics"],
  [/oop/i, "python-objects"],
  [/numpy|pandas/i, "data-pandas"],
  [/^git$/i, "engineering-git"],
  [/fastapi|^apis$/i, "fastapi"],
  [
    /testing|tests|linters|type checking|read generated|human review|verification|security checks/i,
    "coding-review",
  ],
  [
    /agents.md|instructions|mcp servers|custom tools|plugins|hooks|codebase|harness/i,
    "coding-context",
  ],
  [
    /codex|claude|subagents|long.running|delegate|agent autonomy/i,
    "coding-autonomy",
  ],
  [
    /specification|task decomposition|understand problem|research|requirements/i,
    "coding-specifications",
  ],
  [
    /identify problem|who is|problem|does it need|market|business model|high.agency/i,
    "product-discovery",
  ],
  [
    /prototype|test with|iterate|feedback|technical experiment|feature creates|a.b|^ux$|engineering|design|management|legal|customers|influence|explain|discuss|communication|leadership/i,
    "product-prototype",
  ],
];
const mapped = extracted.map((topic) => {
  const rule = rules.find(([rx]) => rx.test(topic));
  return { topic, lessonId: rule?.[1] ?? null };
});
const dataEngineeringPhases = [
  ["Distributed processing with Spark", "de-spark"],
  ["Orchestration mastery with Airflow", "de-airflow"],
  ["Streaming and CDC with Kafka", "de-kafka"],
  ["Lakehouse formats and storage internals", "de-lakehouse"],
  ["Transformation and modeling with dbt + Kimball", "de-dbt-kimball"],
  ["Data quality and observability", "de-quality-observability"],
  ["Cloud and infrastructure", "de-cloud-infra"],
  ["ML engineering and MLOps", "de-mlops"],
  ["LLM and GenAI engineering", "de-llm-genai"],
  ["System design and interview preparation", "de-system-design-interviews"],
];
await writeFile(
  "src/data/coverage.json",
  JSON.stringify(mapped, null, 2) + "\n",
);
await writeFile(
  "docs/COVERAGE.md",
  `# Source coverage\n\nThe Andrew map is the supplied reference, not independently authenticated as an official Andrew Ng publication. This checklist maps its tree labels to implementation lessons; repeated nodes share lessons. Multi-line labels are kept as they appear in the source.\n\n${mapped.map((x) => `- [${x.lessonId ? "x" : " "}] ${x.topic} → ${x.lessonId ? `[${x.lessonId}](roadmap/${lessons.find((l) => l.id === x.lessonId).domainId}.md#${x.lessonId})` : "UNMAPPED — must be resolved before delivery"}`).join("\n")}\n\n## Data Engineering + AI master roadmap coverage\n\nThe supplied DE_AI_Master_Roadmap.pdf is split into the Data Engineering roadmap (source phases 1–7) and the advanced AI + Data Engineering roadmap (source phases 8–10). Each phase retains its detailed topics, exercise and resources in the linked lesson.\n\n${dataEngineeringPhases.map(([title, id], i) => `- [x] Phase ${i + 1}: ${title} → [${id}](roadmap/${lessons.find((l) => l.id === id).domainId}.md#${id})`).join("\n")}\n\nThe advanced roadmap starts after the AI Engineering or the Data Engineering roadmap. The two-year framing is a pace estimate, not a fixed schedule.\n\n## Documentation guide coverage\n\n${["BRD", "PRD", "SRS", "AI use-case specification", "Data requirements", "AI evaluation plan", "Prompt/agent specification", "Model/provider decision", "System architecture", "ADRs", "API specification", "Data schema", "Test plan", "Deployment guide", "Runbook", "Monitoring/observability", "Model card", "Documentation levels", "Documentation timeline", "AGENTS.md context", "Change log"].map((x) => `- [x] ${x} → product/documentation lessons and project document checklist`).join("\n")}\n\n## roadmap.sh supplement\n\nReference: https://roadmap.sh/ai-engineer and its public content directory https://github.com/nilbuild/developer-roadmap/tree/master/roadmaps/ai-engineer/content. Added sampling, context compaction/isolation, local models, hybrid search, MCP transports, multimodal inputs, adversarial checks and observability. Vendor names are examples, not required paid dependencies.\n`,
);
await writeFile(
  "docs/VIDEOS.md",
  `# YouTube learning library\n\nEvery concept has selected video links, with explanations and practical watch guidance in the domain documents. Long courses complement focused explanations; you do not have to finish a 26-hour course before moving on. No fabricated timestamps are used. Videos may promote paid courses/cloud services; those are optional. For version-sensitive code, use the current official documentation linked in the lesson.\n\n${[...allVideos.values()].map((v) => `- ${mdVideo(v)}`).join("\n")}\n`,
);
console.log(
  `Exported ${domains.length} domains, ${lessons.length} lessons, ${links.size} resource URLs; ${mapped.filter((x) => !x.lessonId).length} source labels need mapping.`,
);
