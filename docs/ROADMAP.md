# AI Engineering Team Roadmap

Version 1 · 14 domains · 144 lessons · 595 concept checks.

Follow [the branching AI application pipeline](PIPELINE.md). The list below is a domain directory, not a requirement to complete every topic before continuing. Mark already-known lessons explicitly; skipped lessons do not count as completed. Weekly effort is individual. All required labs can run locally on CPU with generated/built-in data or recorded responses.

1. [Python](roadmap/python.md) — Write understandable, testable programs before adding models.
2. [Engineering foundations](roadmap/engineering.md) — Use the tools and contracts that make a team project maintainable.
3. [Mathematics and data](roadmap/math-data.md) — Understand the operations and data quality behind model behavior.
4. [Backend and databases](roadmap/backend.md) — Expose reliable APIs and protect shared application state.
5. [Data Engineering + AI](roadmap/data-engineering-ai.md) — A distinct 10-phase roadmap: the data engineering backbone, AI/ML and LLM engineering, and a capstone for system design and interviews. It assumes SQL, Python, medallion warehousing, FastAPI and introductory Airflow are already familiar. Phases 1–7 build the DE backbone; Phases 8–9 can run alongside Phases 5–7 once the foundation is comfortable. Start Phase 10 after Phase 4 and keep it active throughout the rest of the roadmap. The two-year framing is a pace estimate, not a calendar schedule.
6. [Machine learning](roadmap/ml.md) — Train reliable baselines and understand what their evaluation actually measures.
7. [Deep learning](roadmap/dl.md) — Understand training mechanics, architectures and practical optimization.
8. [LLM engineering](roadmap/llm.md) — Build grounded, bounded language-model features with a free local path.
9. [Retrieval and RAG](roadmap/rag.md) — Connect answers to maintained evidence and evaluate retrieval independently.
10. [Evaluation and security](roadmap/eval-security.md) — Make quality, safety and failure behavior measurable.
11. [Agents and MCP](roadmap/agents.md) — Build bounded tool workflows before increasing autonomy.
12. [Deployment and operations](roadmap/deployment.md) — Release reproducible services and observe their real behavior.
13. [Coding agents](roadmap/coding-agents.md) — Direct and verify generated work with clear engineering context.
14. [Product and documentation](roadmap/product.md) — Build useful products and document only what guides real decisions.

## Recommended learning loop

Read the concept → reproduce the example → finish the lab → run checks → explain results → choose a project → share evidence. Do not wait to finish every domain before building. Python/FastAPI/Docker and ML/DL are selectable independently in the project builder.

## Documentation

Prototype: README, problem statement, AI use case, architecture and evaluation. MVP: add requirements, data/API/prompt specifications and deployment. Production: add model card, monitoring, security, rollback and incident runbook. Follow the supplied AI_PROJECT_DOCUMENTATION_GUIDE (1).md.

## Understanding versus completion

Open a numbered stage (Python first), then a module and a lesson. Rate each concept and the overall lesson/tool from 0–100%. This is your self-assessment, not a quiz score. Ratings never mark a lesson completed. Domain understanding averages rated lessons, using the overall rating when supplied or the mean of its rated concepts; unrated lessons are reported separately.

See [videos](VIDEOS.md), [resources](RESOURCES.md), [projects](PROJECTS.md), [coverage](COVERAGE.md) and [setup](SETUP.md).
