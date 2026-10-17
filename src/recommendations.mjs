import { projectLibrary, predictionTargets } from "../content/projects.mjs";
import { toolFor } from "../content/project-tools.mjs";
// Authored project patterns and integration responsibilities; no model/API calls.
export const patterns = [
  {
    id: "support",
    title: "Support ticket triage desk",
    problem:
      "Route incoming support tickets to the right category and show the evidence behind each decision.",
    data: "Generate 120 labeled tickets about login, billing and account setup with fixed seed 42.",
    output:
      "A review queue with categories, confidence, evidence and correction controls.",
    check:
      "Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.",
  },
  {
    id: "library",
    title: "Research library navigator",
    problem:
      "Help a learner find relevant passages in a small technical reading collection.",
    data: "Use ten of your own Markdown notes with titles, source URLs and section headings.",
    output: "A searchable library with grounded answers and source references.",
    check:
      "Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.",
  },
  {
    id: "inventory",
    title: "Inventory exception monitor",
    problem:
      "Find unusual stock movements and explain which records need investigation.",
    data: "Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies.",
    output:
      "An exception list with explanations and reproducible source records.",
    check:
      "Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.",
  },
  {
    id: "reviews",
    title: "Product review quality explorer",
    problem:
      "Summarize themes and surface potentially misleading or contradictory review records.",
    data: "Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples.",
    output: "A theme browser and an evidence-linked quality report.",
    check:
      "Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.",
  },
  {
    id: "learning",
    title: "Learning gap coach",
    problem:
      "Turn a learner’s quiz results into a concrete next exercise with an explanation.",
    data: "Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships.",
    output: "A next-step study planner with explainable recommendations.",
    check:
      "Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.",
  },
  {
    id: "documents",
    title: "Document intake and validation pipeline",
    problem:
      "Convert incoming documents into validated records and flag what cannot be trusted.",
    data: "Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates.",
    output: "A reproducible ingestion pipeline and a rejection report.",
    check:
      "Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.",
  },
  {
    id: "operations",
    title: "Service incident investigation board",
    problem:
      "Connect incident symptoms to related logs and suggest a safe diagnostic next step.",
    data: "Generate 300 sanitized log events with request IDs and five seeded incident scenarios.",
    output: "An incident timeline with linked evidence and runbook actions.",
    check:
      "Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.",
  },
  {
    id: "search",
    title: "Catalog search and ranking workbench",
    problem:
      "Compare ranking approaches and explain which item best matches a query.",
    data: "Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries.",
    output: "A side-by-side ranking interface with measurable relevance.",
    check:
      "Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.",
  },
  {
    id: "forecast",
    title: "Workload forecast and planning desk",
    problem:
      "Estimate upcoming task volume and make uncertainty visible to planners.",
    data: "Generate 180 days of task counts with weekly seasonality and one distribution change.",
    output:
      "A forecast report with prediction intervals and a planning recommendation.",
    check:
      "Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.",
  },
  {
    id: "audit",
    title: "Dataset and model audit studio",
    problem:
      "Audit data quality and model behavior so a teammate can reproduce the findings.",
    data: "Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional.",
    output:
      "A reproducible audit report with slices, evidence and a model card.",
    check:
      "Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.",
  },
];
const tasks = {
  python: [
    "Implement typed, reusable ingestion and transformation functions with explicit errors.",
    "Run parametrized checks on empty, malformed and Unicode input.",
    "A Python package/CLI and passing unit checks",
  ],
  engineering: [
    "Version the pipeline, document its HTTP/data contracts and keep changes reviewable.",
    "Add an integration check and a reproducible clean-start command.",
    "A Git workflow, contract example and integration test",
  ],
  "math-data": [
    "Analyze feature shapes, distributions, missingness and similarity where relevant.",
    "Create numeric sanity checks and a labeled three-chart data report.",
    "A reproducible data audit notebook with mathematical explanations",
  ],
  ml: [
    "Train a suitable scikit-learn baseline on features derived from this project’s records.",
    "Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics.",
    "A fitted ML pipeline, held-out predictions and error analysis",
  ],
  dl: [
    "Train a small PyTorch MLP or sequence model using the same target as the baseline.",
    "Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time.",
    "A checkpoint, training curves and a measured ML/DL comparison",
  ],
  llm: [
    "Add a schema-validated explanation or summarization layer using local/recorded responses.",
    "Budget context, validate cited evidence and test malformed output and abstention.",
    "A context builder, response fixtures and output-validation suite",
  ],
  rag: [
    "Index the project’s records and notes with source IDs and permission metadata.",
    "Compare lexical/vector retrieval and evaluate citations with labeled queries.",
    "A local retrieval index, twenty query fixtures and grounded answers",
  ],
  agents: [
    "Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.",
    "Expose a read-only MCP tool; test tool failure, malicious input and a loop limit.",
    "A bounded workflow, local MCP endpoint and recovery evidence",
  ],
  backend: [
    "Expose project-specific records, predictions or analysis through validated FastAPI routes.",
    "Keep user authorization in trusted code and test invalid input and cross-user access.",
    "An OpenAPI contract, API checks and a browser/API interaction",
  ],
  "data-engineering": [
    "Build an idempotent data pipeline that moves CDC or batch ingestion into tested lakehouse models.",
    "Verify replay safety, data contracts, lineage and recovery against a reproducible baseline.",
    "A runnable pipeline, quality and lineage report, architecture diagram and documented recovery test",
  ],
  "ai-data": [
    "Connect a gold-layer table to a tracked ML model or a cited RAG consumer served from the data platform.",
    "Measure the consumer against a baseline and trace each result back to its data snapshot.",
    "A served model or assistant, an experiment record and an end-to-end system design",
  ],
  "eval-security": [
    "Build a golden task set and test evidence support, permissions and failure cases.",
    "Evaluate per-case results, adversarial inputs, latency and a meaningful error slice.",
    "An evaluation dataset, security checks and a results report",
  ],
  deployment: [
    "Package the project’s runnable API/worker in Docker with explicit configuration.",
    "Use non-root execution, persist necessary data, add health checks and rehearse rollback.",
    "A Dockerfile/Compose setup, health check and deployment runbook",
  ],
  "coding-agents": [
    "Write a bounded implementation spec and AGENTS.md for this project.",
    "Review connected callers, run type/tests/security checks and verify the complete user flow.",
    "A task handoff, reviewed patch and verification report",
  ],
  product: [
    "Interview a teammate, define the workflow and success metric, and scope a useful prototype.",
    "Document requirements, architecture, evaluation and limitations; test the prototype with a user.",
    "A concise PRD/ADR, user feedback and project documentation",
  ],
};
const scenarios = {
  support: {
    target: "ticket category: login, billing or account setup",
    baseline: "a majority-class predictor and keyword rules",
    skills: ["ml", "dl", "backend", "deployment"],
  },
  library: {
    target: "whether a query/passage pair is relevant",
    baseline: "keyword overlap and a TF-IDF retriever",
    skills: ["rag", "llm", "backend"],
  },
  inventory: {
    target: "whether a stock movement is an injected anomaly",
    baseline: "explicit quantity limits and rolling statistics",
    skills: ["math-data", "ml", "deployment"],
  },
  reviews: {
    target: "the review topic and rating-consistency flag",
    baseline: "topic keywords and explicit rating rules",
    skills: ["ml", "llm", "eval-security"],
  },
  learning: {
    target: "the next weak concept requiring practice",
    baseline: "the lowest-score eligible prerequisite-aware concept",
    skills: ["product", "ml", "python"],
  },
  documents: {
    target: "validity of a document record",
    baseline: "a deterministic schema validator; keep it authoritative",
    skills: ["python", "engineering", "backend", "data-engineering"],
  },
  operations: {
    target: "the incident category/severity from a log window",
    baseline: "error counts and a keyword-to-runbook mapping",
    skills: ["deployment", "agents", "eval-security", "data-engineering"],
  },
  search: {
    target: "query/item relevance",
    baseline: "keyword search and a simple ranker",
    skills: ["rag", "ml", "math-data"],
  },
  forecast: {
    target: "next-day task count",
    baseline: "the count on the same weekday in the previous week",
    skills: ["ml", "dl", "math-data"],
  },
  audit: {
    target: "the digit class or generated dataset label",
    baseline: "a dummy predictor and a simple fitted estimator",
    skills: ["eval-security", "ml", "dl", "ai-data"],
  },
};
export function legacyRecommend(skills) {
  const unique = [...new Map(skills.map((s) => [s.id, s])).values()].sort(
    (a, b) => a.id.localeCompare(b.id),
  );
  if (!unique.length) return [];
  const selectedDomains = [...new Set(unique.map((s) => s.domainId ?? s.id))];
  const ranked = [...patterns].sort((a, b) => {
    const score = (p) => {
      const preferred = scenarios[p.id].skills;
      return (
        (preferred.length === selectedDomains.length &&
        preferred.every((x) => selectedDomains.includes(x))
          ? 100
          : 0) + preferred.filter((x) => selectedDomains.includes(x)).length
      );
    };
    return score(b) - score(a) || patterns.indexOf(a) - patterns.indexOf(b);
  });
  return ranked.map((pattern, index) => {
    const scenario = scenarios[pattern.id];
    const integration = unique.map((skill) => {
      const mapping = tasks[skill.domainId ?? skill.id];
      const focus = skill.concepts
        ?.slice(0, 3)
        .map((c) => c.name)
        .join(", ");
      const domain = skill.domainId ?? skill.id;
      return {
        skillId: skill.id,
        skillTitle: skill.title,
        task: mapping
          ? `${mapping[0]} ${["ml", "dl"].includes(domain) ? `Model target: ${scenario.target}; compare with ${scenario.baseline}.` : ""} ${focus ? `For ${skill.title}, explicitly apply ${focus}.` : ""}`
          : `General practice: investigate ${skill.title}, define a testable use in this workflow and document assumptions.`,
        check: mapping
          ? `${mapping[1]} ${skill.exercise ? `Adapt the lesson lab: ${skill.exercise.brief}` : ""}`
          : "Validate the custom concept with a worked example and an edge case; this topic has no researched catalog mapping.",
        deliverable: mapping
          ? mapping[2]
          : `A worked ${skill.title} experiment and limitations note`,
        general: !mapping,
      };
    });
    return {
      id: `v1:${pattern.id}:${unique.map((s) => s.id).join("+")}`,
      patternId: pattern.id,
      title: pattern.title,
      problem: pattern.problem,
      data: `${pattern.data} Label or derive the target: ${scenario.target}. Start with ${scenario.baseline}.`,
      output: pattern.output,
      skills: unique.map((s) => s.id),
      integration,
      difficulty:
        unique.length > 3 ? "Intermediate" : "Beginner → intermediate",
      hours: 6 + unique.length * 3 + (patterns.indexOf(pattern) % 3),
      milestones: [
        "Define the problem, schema and baseline",
        ...integration.map((x) => `${x.skillTitle}: ${x.deliverable}`),
        "Integrate the components and run acceptance checks",
        "Document results and demonstrate to a teammate",
      ],
      acceptance: [
        pattern.check,
        ...integration.map((x) => `${x.skillTitle}: ${x.check}`),
        "A teammate can reproduce the demo using the README without paid credentials.",
      ],
      documentation:
        unique.length > 1
          ? [
              "README",
              "Requirements and success metric",
              "Architecture + ADR",
              "Evaluation report",
              "Deployment guide + runbook",
              "Model/system card",
            ]
          : ["README: purpose, setup, worked example, checks and limitations"],
      general: integration.some((x) => x.general),
    };
  });
}

const modelDomains = new Set(["ml", "dl"]);
const domainOf = (s) => s.domainId ?? s.id;
const canonical = (s) => s.mapping || s.id;
const executionOrder = [
  "product",
  "coding-agents",
  "engineering",
  "python",
  "math-data",
  "ml",
  "dl",
  "rag",
  "llm",
  "agents",
  "backend",
  "eval-security",
  "deployment",
];

export function libraryBrief(entry, skills) {
  const selected = [...new Map(skills.map((s) => [s.id, s])).values()].sort(
    (a, b) => a.id.localeCompare(b.id),
  );
  const integration = [...selected]
    .sort(
      (a, b) =>
        executionOrder.indexOf(domainOf(a)) -
          executionOrder.indexOf(domainOf(b)) || a.id.localeCompare(b.id),
    )
    .map((skill) => {
      const tool = toolFor(skill);
      const mapping = tasks[domainOf(skill)];
      const conceptNames = skill.concepts?.map((c) => c.name).join(", ");
      const native =
        entry.nativeSkills.includes(canonical(skill)) ||
        entry.domainId === canonical(skill);
      const lab = skill.exercise;
      const domainOverview =
        selected.length === 1 && canonical(skill) === entry.domainId;
      return {
        skillId: skill.id,
        skillTitle: skill.title,
        catalogSkillId: canonical(skill),
        task: domainOverview
          ? `Build ${entry.output} Explain the ${skill.title} concepts actually used and reproduce the acceptance experiment: ${entry.check}`
          : tool
            ? `${tool.task} Apply this to ${entry.title}: ${entry.output} ${conceptNames ? `Focus: ${conceptNames}.` : ""}`
            : mapping
              ? `${native ? "Implement" : "Extend the project with"} ${skill.title} in ${entry.title}. ${lab ? `Adapt this focused lab to the project data: ${lab.brief}` : mapping[0]} ${predictionTargets[entry.id] && modelDomains.has(domainOf(skill)) ? `Predict ${predictionTargets[entry.id]}; keep the same target and splits across model comparisons.` : ""} ${conceptNames ? `Required concepts: ${conceptNames}.` : ""}`
              : `General practice: investigate ${skill.title}, agree a testable role in ${entry.title}, and document assumptions before implementation.`,
        deliverable: domainOverview
          ? entry.output
          : (tool?.deliverable ??
            (lab
              ? `${skill.title}: ${lab.deliverables.join("; ")}`
              : (mapping?.[2] ??
                `A worked ${skill.title} example and limitations note`))),
        check: domainOverview
          ? entry.check
          : tool
            ? `${tool.check} ${lab ? lab.acceptance.join("; ") : ""}`
            : lab
              ? lab.acceptance.join("; ")
              : (mapping?.[1] ??
                "Validate a worked example and edge case; this topic has no researched catalog mapping."),
        general: !tool && !mapping,
      };
    });
  for (const part of integration) {
    part.task = part.task.trim();
    part.check = part.check.trim();
  }
  const hasModels =
    Boolean(predictionTargets[entry.id]) &&
    selected.some((s) => modelDomains.has(domainOf(s)));
  const bothModels = ["ml", "dl"].every((d) =>
    selected.some((s) => domainOf(s) === d),
  );
  const comparisons = [
    ["ml-linear", "ml-trees", "ml-neighbors", "ml-svm-kernels"],
    ["backend-sql", "backend-stores"],
    [
      "dl-sequences",
      "dl-recurrent-state",
      "dl-causal-convolutions",
      "dl-transformer-blocks",
    ],
  ]
    .map((group) => selected.filter((s) => group.includes(canonical(s))))
    .filter((group) => group.length > 1)
    .map(
      (group) =>
        `Compare ${group.map((s) => s.title).join(" versus ")} on identical project inputs, with the same correctness/quality checks and measured latency. Document when each is appropriate.`,
    );
  const source = selected.every(
    (s) =>
      entry.nativeSkills.includes(canonical(s)) ||
      entry.domainId === canonical(s),
  )
    ? "Curated match"
    : "Adapted library project";
  const stages = [
    {
      title: "MVP · problem and reproducible baseline",
      deliverable: `${entry.output} Start with the smallest deterministic reference before adding extensions.`,
      check: entry.check,
    },
    ...integration.map((i, index) => ({
      title: `${index < 3 ? "MVP" : "Extension"} · ${i.skillTitle}`,
      deliverable: i.deliverable,
      check: i.check,
    })),
    ...comparisons.map((check) => ({
      title: "Alternative-tool comparison",
      deliverable: "Side-by-side results and an architecture decision",
      check,
    })),
    {
      title: "Integrated demonstration",
      deliverable:
        "One clean-start command, connected end-to-end example and evidence report",
      check:
        "Re-run the same input through all selected components and verify the final output against the source records.",
    },
    {
      title: "Explain and hand off",
      deliverable: "README, decision notes and recorded limitations",
      check:
        "A teammate reproduces the example and you explain each selected skill without reading generated code.",
    },
  ];
  return {
    id: `v2:${entry.id}:${selected.map((s) => s.id).join("+")}`,
    patternId: entry.id,
    catalogVersion: 2,
    source,
    title: entry.title,
    problem: entry.problem,
    audience: entry.audience,
    data: `${entry.data} Use a fixed seed and keep evaluation cases separate.`,
    output: entry.output,
    resources: [
      ...new Map(
        [
          ...(entry.resources ?? []),
          ...selected.flatMap((s) => (s.resources ?? []).slice(0, 1)),
        ].map((r) => [r.url, r]),
      ).values(),
    ],
    learningGoals: [
      ...entry.learningGoals,
      ...selected.map(
        (s) =>
          `Explain the role, tradeoffs and failure modes of ${s.title} in the completed system.`,
      ),
    ],
    boundaries: [
      "Local educational prototype using fictional, generated or bundled data.",
      "No paid credentials, production deployment or collection of private personal data required.",
      "Large-model training is out of scope; use small CPU examples. Recorded responses test integration, not model quality.",
    ],
    skills: selected.map((s) => s.id),
    integration,
    general: integration.some((i) => i.general),
    prerequisiteSkills: entry.nativeSkills.filter(
      (id) =>
        !selected.some(
          (s) =>
            canonical(s) === id ||
            domainOf(s) === id ||
            (canonical(s) === entry.domainId &&
              id.startsWith(`${entry.domainId}-`)),
        ),
    ),
    difficulty:
      selected.length > 5
        ? "Advanced integration · staged scope"
        : entry.difficulty,
    hours: entry.hours + Math.max(0, selected.length - 1) * 5,
    components: integration.map((i) => `${i.skillTitle}: ${i.deliverable}`),
    dataFlow: [
      entry.data,
      "Validate source records and preserve stable IDs.",
      ...(hasModels
        ? [
            "Create a leakage-safe train/validation/test split and a simple reference predictor.",
            bothModels
              ? "Train the scikit-learn baseline and small PyTorch model on the same target and splits; compare quality and CPU latency."
              : "Fit the selected model, evaluate on held-out data and persist inference artifacts.",
          ]
        : []),
      ...integration
        .filter(
          (i) =>
            !hasModels ||
            !modelDomains.has(
              domainOf(selected.find((s) => s.id === i.skillId)),
            ),
        )
        .map(
          (i) =>
            `${i.skillTitle} consumes the project records/results and produces: ${i.deliverable}.`,
        ),
      entry.output,
      entry.check,
    ],
    stages,
    milestones: stages.map((s) => `${s.title}: ${s.deliverable}`),
    acceptance: [
      entry.check,
      ...integration.map((i) => `${i.skillTitle}: ${i.check}`),
      ...comparisons,
      ...(bothModels
        ? [
            "Compare ML and DL on the same held-out target, metric and CPU latency benchmark.",
          ]
        : []),
      "A teammate can reproduce the demo using the README without paid credentials.",
    ],
    documentation:
      selected.length > 1
        ? [
            "README and worked example",
            "Requirements and success metric",
            "Architecture, data contracts and ADR",
            "Evaluation and limitations",
            "Local deployment guide and recovery runbook",
          ]
        : ["README: purpose, setup, worked example, checks and limitations"],
  };
}

export function recommendAll(skills) {
  const selected = [...new Map(skills.map((s) => [s.id, s])).values()].sort(
    (a, b) => a.id.localeCompare(b.id),
  );
  if (!selected.length) return [];
  const domains = [...new Set(selected.map(domainOf))];
  // Only attach model training to authored prediction problems; do not invent labels for arbitrary workflows.
  const model = domains.some((d) => modelDomains.has(d));
  const crossDomainModel = model && (domains.length > 1 || selected.length > 1);
  const candidates = projectLibrary.filter(
    (p) =>
      (domains.includes(p.domainId) ||
        selected.some((s) => p.nativeSkills.includes(canonical(s)))) &&
      (!crossDomainModel || predictionTargets[p.id]),
  );
  const score = (p) => {
    const exact = selected.every(
      (s) =>
        p.nativeSkills.includes(canonical(s)) || p.domainId === canonical(s),
    );
    return (
      (exact ? 10000 : 0) +
      selected.filter((s) => p.nativeSkills.includes(canonical(s))).length *
        100 +
      (domains.includes(p.domainId) ? 10 : 0)
    );
  };
  candidates.sort((a, b) => score(b) - score(a) || a.id.localeCompare(b.id));
  const library = candidates.map((p) => libraryBrief(p, selected));
  const composed = patterns.map((p) => {
    const scenario = scenarios[p.id];
    const entry = {
      ...p,
      id: `composed-${p.id}`,
      domainId: "general",
      nativeSkills: [],
      data: `${p.data} ${model ? `For model experiments use the explicit target: ${scenario.target}; baseline: ${scenario.baseline}. Preserve deterministic validation as the authority for rule-based tasks.` : ""}`,
      audience: "A learner building a local educational prototype",
      learningGoals: [
        `Connect the selected skills in ${p.title.toLowerCase()}.`,
      ],
      difficulty: "Intermediate",
      hours: 12,
    };
    return {
      ...libraryBrief(entry, selected),
      source: "Composed practice pattern",
    };
  });
  return [...library, ...composed];
}

export function recommend(skills, offset = 0) {
  return recommendAll(skills).slice(offset, offset + 10);
}
