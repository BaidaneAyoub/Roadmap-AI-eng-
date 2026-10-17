import { routeOrder } from './deep-route.mjs';
export const domainOrder = [...routeOrder];
const outcomes = {
  python: 'Write reliable Python with validation, explicit state and reproducible tests.',
  engineering: 'Use Git, HTTP contracts and layered tests to deliver reviewable software.',
  'math-data': 'Clean data and explain linear algebra, gradients, probability and uncertainty.',
  ml: 'Compare classical models with leakage-safe evaluation and reproducible inference.',
  dl: 'Train and diagnose neural models; complete the scientific foundation capstone.',
  llm: 'Integrate a model with bounded context, structured outputs and measured limitations.',
  backend: 'Expose validated APIs with authorization, relational data and transaction checks.',
  rag: 'Retrieve evidence, preserve citations and abstain when reliable support is missing.',
  'eval-security': 'Measure quality and enforce security boundaries before introducing autonomy.',
  agents: 'Use bounded tool workflows and versioned MCP contracts with explicit permissions.',
  'coding-agents': 'Direct coding agents through specifications, code review and verified outcomes.',
  deployment: 'Containerize, monitor, recover and restore a reproducible local application.',
  product: 'Deliver a user-tested application capstone with requirements and operational evidence.',
  'data-engineering': 'Build a replayable CDC-to-lakehouse pipeline with data contracts, lineage and quality gates.',
  'ai-data': 'Serve a measured ML or RAG consumer from your data platform and defend its system design.',
};
export const pipeline = routeOrder.map((domain)=>({id:domain,title:domain.replaceAll('-',' '),domain,choices:[],outcome:outcomes[domain]}));

// Three roadmaps. A domain listed in two roadmaps is studied once: progress is per lesson.
export const roadmaps = [
  { id: 'ai', title: 'AI Engineering', domains: routeOrder.filter((d) => !['data-engineering', 'ai-data'].includes(d)) },
  { id: 'data', title: 'Data Engineering', domains: ['python', 'engineering', 'math-data', 'backend', 'data-engineering'] },
  {
    id: 'ai-data',
    title: 'AI + Data Engineering',
    requires: 'Advanced: finish the AI Engineering or the Data Engineering roadmap first.',
    domains: ['ai-data'],
  },
];
// The teaching sequence is authored for this team; source maps describe skills, not a mandatory syllabus.
export const stageGuides = {
  python: {
    phase: "1 · Programming foundations",
    goal: "Write reliable Python programs before connecting AI tools.",
    checkpoint:
      "Build a JSON-based study tracker with functions, validation, logging and tests.",
    bridge:
      "You can now organise your code, collaborate in Git and understand HTTP requests.",
  },
  engineering: {
    phase: "1 · Programming foundations",
    goal: "Turn scripts into a maintainable, tested team repository.",
    checkpoint:
      "Open a pull request with a tested HTTP/JSON utility and reproducible setup instructions.",
    bridge:
      "Use these engineering habits while learning how data and mathematical operations work.",
  },
  "math-data": {
    phase: "1 · Programming foundations",
    goal: "Understand the data, shapes, gradients and statistics behind AI.",
    checkpoint:
      "Clean a small dataset, plot its distributions and explain a dot product and gradient calculation.",
    bridge:
      "You are ready to serve validated data and predictions through an API.",
  },
  backend: {
    phase: "1 · Programming foundations",
    goal: "Build the API and database layer that an AI application needs.",
    checkpoint:
      "Build a FastAPI service with validated inputs, a SQL query and API tests.",
    bridge:
      "Next, learn what a predictive model does so you can compare and serve its results.",
  },
  "data-engineering": {
    phase: "Data Engineering roadmap",
    goal:
      "Extend the shared Python, SQL and backend foundation into production data pipelines: Spark, Airflow, Kafka/CDC, lakehouse tables, dbt models, quality checks and cloud infrastructure.",
    checkpoint:
      "Build and explain a reproducible CDC-to-lakehouse pipeline with quality gates, lineage and a recovery test.",
    bridge:
      "Continue with the advanced AI + Data Engineering roadmap to put models and LLMs on top of this platform.",
  },
  "ai-data": {
    phase: "Advanced · AI + Data Engineering",
    goal:
      "Combine a data platform with ML and LLM systems: MLOps on lakehouse data, GenAI over governed data, and end-to-end system design.",
    checkpoint:
      "Serve a measured ML or RAG consumer from a gold-layer table and defend its system design, failure recovery and trade-offs.",
    bridge:
      "Start after finishing the AI Engineering or the Data Engineering roadmap. When a topic comes from the roadmap you did not take, open its linked lesson instead of expecting it to be repeated here.",
  },
  ml: {
    phase: "2 · Model fundamentals",
    goal: "Train and evaluate classical models without leakage.",
    checkpoint:
      "Compare a baseline and two models on a held-out test set; explain metrics and error cases.",
    bridge:
      "Use the same evaluation discipline when moving from classical models to neural networks.",
  },
  dl: {
    phase: "2 · Model fundamentals",
    goal: "Understand neural networks, backpropagation and practical optimisation.",
    checkpoint:
      "Train a small CPU PyTorch model; compare optimisers, save a checkpoint and explain tensor shapes.",
    bridge:
      "Attention and transformers prepare you to understand and use pretrained language models.",
  },
  llm: {
    phase: "3 · Build AI applications",
    goal: "Choose and use language models with deliberate prompts, context and outputs.",
    checkpoint:
      "Build a structured-output assistant with schema validation, recorded-response tests and a local-model option.",
    bridge:
      "Ground its answers in your own documents through retrieval and citations.",
  },
  rag: {
    phase: "3 · Build AI applications",
    goal: "Retrieve useful evidence and connect answers to traceable sources.",
    checkpoint:
      "Build a document search pipeline with chunking, hybrid retrieval, citations and retrieval measurements.",
    bridge:
      "Measure the complete system and test hostile inputs before giving it more autonomy.",
  },
  "eval-security": {
    phase: "3 · Build AI applications",
    goal: "Measure quality and protect the application against predictable failures.",
    checkpoint:
      "Create a golden dataset, regression report and prompt-injection tests with explicit failure handling.",
    bridge:
      "Use these checks and permission boundaries when adding tools, workflows and agents.",
  },
  agents: {
    phase: "3 · Build AI applications",
    goal: "Build bounded tool workflows with state, recovery and human approval.",
    checkpoint:
      "Implement a tool workflow with an MCP connection, approval for sensitive actions and recovery tests.",
    bridge:
      "Deploy the tested workflow with containers, monitoring and reliable operations.",
  },
  deployment: {
    phase: "4 · Ship and improve",
    goal: "Package and operate an AI service reliably within a small budget.",
    checkpoint:
      "Run the API in Docker Compose with health checks, timeouts, logs and a documented rollback.",
    bridge:
      "Use coding agents to maintain the service while keeping review and verification under your control.",
  },
  "coding-agents": {
    phase: "4 · Ship and improve",
    goal: "Direct coding agents using clear specifications and verify their work.",
    checkpoint:
      "Write AGENTS.md and a task specification; review a generated change using tests and security checks.",
    bridge:
      "Connect these engineering capabilities to user needs, product decisions and documentation.",
  },
  product: {
    phase: "4 · Ship and improve",
    goal: "Deliver a useful AI product with evidence, feedback and maintainable documentation.",
    checkpoint:
      "Ship a small capstone with requirements, architecture, evaluation, deployment instructions and a runbook.",
    bridge:
      "Choose a team capstone, gather user feedback and revisit the lessons revealed by real failures.",
  },
};
