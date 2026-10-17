// Exact tool roles take precedence over domain-level defaults.
export const projectTools = {
  fastapi: {
    title: "FastAPI",
    lessons: ["fastapi", "backend-fastapi-boundaries"],
    task: "Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint.",
    deliverable: "API routes, OpenAPI examples and integration tests",
    check:
      "Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access.",
  },
  postgres: {
    title: "SQL / PostgreSQL",
    lessons: ["backend-sql", "backend-sql-performance", "backend-transactions"],
    task: "Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement.",
    deliverable: "Schema, seed script, queries and rollback-safe migration",
    check:
      "Verify foreign keys, duplicate rejection, join totals and rollback after a failed write.",
  },
  docker: {
    title: "Docker",
    lessons: ["docker"],
    task: "Package the runnable project in Docker; define configuration, non-root execution and a health or CLI smoke check.",
    deliverable: "Dockerfile, .dockerignore and reproducible run command",
    check:
      "Build from a clean checkout, execute the smoke test and verify graceful shutdown.",
  },
  compose: {
    title: "Docker Compose",
    lessons: ["docker-compose"],
    task: "Connect the project service and its local dependency through Docker Compose with service-name networking and persistent volumes.",
    deliverable: "Compose file, seed command and operational README",
    check:
      "Restart the stack without losing persisted records and test dependency unavailability.",
  },
  pytorch: {
    title: "PyTorch",
    lessons: ["dl-training-loop", "dl-profiling-deployment"],
    task: "Implement a small PyTorch model, explicit training loop and CPU checkpoint inference using the same target and split as any selected ML baseline.",
    deliverable:
      "Training script, checkpoint, learning curves and inference benchmark",
    check:
      "Overfit a tiny batch, reproduce seeded evaluation and compare predictions before and after reload.",
  },
  numpy: {
    title: "NumPy",
    lessons: ["data-numpy", "math-linear"],
    task: "Implement the project numeric transformations with explicit NumPy shapes and vectorized operations; explain the relevant matrix calculations.",
    deliverable: "Array transformation module and hand-calculated examples",
    check:
      "Compare vectorized results with a simple reference loop and test empty and incompatible shapes.",
  },
  pandas: {
    title: "pandas",
    lessons: ["data-pandas"],
    task: "Load and clean project tables with explicit dtypes, missing-value rules, duplicate checks and validated joins.",
    deliverable: "Reproducible cleaning pipeline and rejected-row report",
    check:
      "Reconcile row counts and totals and verify repeated cleaning is idempotent.",
  },
  mcp: {
    title: "MCP",
    lessons: ["agents-mcp", "agents-mcp-contracts", "agents-mcp-client"],
    task: "Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses.",
    deliverable: "Local MCP server/client, schema and example transcript",
    check:
      "Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope.",
  },
  rag: {
    title: "Retrieval / RAG",
    lessons: ["rag-retrieval", "rag-hybrid-reranking", "rag-answers"],
    task: "Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available.",
    deliverable:
      "Index, labeled query set, retrieval report and citation examples",
    check:
      "Measure recall at five and reject unsupported citations; explicitly label fixture-only responses.",
  },
};

export function toolFor(skill) {
  const id = skill.mapping || skill.id;
  return (
    projectTools[id] ||
    Object.values(projectTools).find((t) => t.lessons.includes(id))
  );
}
