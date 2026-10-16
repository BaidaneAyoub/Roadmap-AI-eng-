export const domainOrder = [
  "python",
  "engineering",
  "math-data",
  "backend",
  "data-engineering-ai",
  "ml",
  "dl",
  "llm",
  "rag",
  "eval-security",
  "agents",
  "deployment",
  "coding-agents",
  "product",
];

export const pipeline = [
  {
    id: "code",
    title: "Start from zero",
    domain: "python",
    choices: [],
    outcome: "Write and test a small Python program.",
  },
  {
    id: "engineering",
    title: "Work like an engineer",
    domain: "engineering",
    choices: [],
    outcome: "Put your program in Git and understand HTTP + JSON.",
  },
  {
    id: "service",
    title: "Build the application shell",
    domain: "backend",
    choices: ["math-data", "data-engineering-ai"],
    outcome:
      "Create a validated API and store its data. Take the data branch when your project needs it.",
  },
  {
    id: "models",
    title: "Choose and use an AI model",
    domain: "llm",
    choices: ["ml", "dl"],
    outcome:
      "Build a small assistant with a pretrained model. ML and DL are deeper branches for training and understanding models; they are not gates for this route.",
  },
  {
    id: "knowledge",
    title: "Ground answers in your data",
    domain: "rag",
    choices: [],
    outcome:
      "Add document retrieval and citations when the application needs external knowledge.",
  },
  {
    id: "quality",
    title: "Measure quality before autonomy",
    domain: "eval-security",
    choices: ["agents"],
    outcome:
      "Test quality, privacy and hostile inputs. Add agents only when tools and multi-step workflows serve the problem.",
  },
  {
    id: "ship",
    title: "Deploy and operate",
    domain: "deployment",
    choices: ["coding-agents"],
    outcome:
      "Containerise the service, monitor failures and document rollback. Coding agents can help throughout the build.",
  },
  {
    id: "product",
    title: "Ship a useful product",
    domain: "product",
    choices: [],
    outcome:
      "Deliver a capstone with user feedback and documentation. Start user discovery from day one and revisit it here.",
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
  "data-engineering-ai": {
    phase: "Optional · Data engineering + AI",
    goal:
      "Extend the existing SQL, Python, medallion, FastAPI and introductory Airflow foundation into a production-oriented data and AI engineering sequence.",
    checkpoint:
      "Build and explain a reproducible CDC-to-lakehouse pipeline, then connect it to a measured ML or RAG workflow and a documented system design.",
    bridge:
      "This ten-phase roadmap is an optional parallel track. Phases 8–9 can overlap with Phases 5–7; begin Phase 10 after Phase 4 and keep practicing it throughout.",
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
