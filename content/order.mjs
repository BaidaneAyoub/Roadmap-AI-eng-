import { routeOrder } from './deep-route.mjs';
export const domainOrder = [...routeOrder];
const outcomes = [
'Write reliable Python with validation, explicit state and reproducible tests.',
'Use Git, HTTP contracts and layered tests to deliver reviewable software.',
'Clean data and explain linear algebra, gradients, probability and uncertainty.',
'Compare classical models with leakage-safe evaluation and reproducible inference.',
'Train and diagnose neural models; complete the scientific foundation capstone.',
'Integrate a model with bounded context, structured outputs and measured limitations.',
'Expose validated APIs with authorization, relational data and transaction checks.',
'Retrieve evidence, preserve citations and abstain when reliable support is missing.',
'Measure quality and enforce security boundaries before introducing autonomy.',
'Use bounded tool workflows and versioned MCP contracts with explicit permissions.',
'Direct coding agents through specifications, code review and verified outcomes.',
'Containerize, monitor, recover and restore a reproducible local application.',
'Deliver a user-tested application capstone with requirements and operational evidence.'
];
export const pipeline = routeOrder.map((domain,i)=>({id:domain,title:domain.replaceAll('-',' '),domain,choices:[],outcome:outcomes[i]}));

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
