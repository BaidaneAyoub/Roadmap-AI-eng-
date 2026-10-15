# Deployment and operations

Release reproducible services and observe their real behavior.

## Main route · Step 7 of 8

**Goal:** Package and operate an AI service reliably within a small budget.

**Stage checkpoint:** Run the API in Docker Compose with health checks, timeouts, logs and a documented rollback.

Containerise the service, monitor failures and document rollback. Coding agents can help throughout the build.

Follow the modules and lessons below at your pace. Finish each exercise, save your evidence and self-assessment, then continue. Completed and Already known count as completed; Skipped is reported separately. You can move ahead at any time.

[Full pipeline](../PIPELINE.md) · [Next step: Product and documentation](product.md)

## Packaging and release

<a id="docker"></a>

### Docker images, containers and Dockerfiles

Package a service so its runtime can be reproduced on another machine.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [FastAPI routes, validation and OpenAPI](backend.md#fastapi), [Git, branches and pull requests](engineering.md#engineering-git) Navigation is unrestricted.

#### Concepts

- [ ] **Images and containers:** An image is a packaged filesystem/configuration; a container is a running isolated process using it.
  - Example: Rebuild an image after changing dependencies rather than editing a running container.
  - Videos:
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on images and containers. Then reproduce the lesson example: Rebuild an image after changing dependencies rather than editing a running container.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Dockerfile:** Layers, small base images and cache ordering affect build speed and attack surface.
  - Example: Copy dependency files before application files and run as a non-root user.
  - Videos:
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on dockerfile. Then reproduce the lesson example: Copy dependency files before application files and run as a non-root user.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Runtime configuration:** Environment variables configure deployments; secrets are not baked into images.
  - Example: Pass a configuration value at runtime and keep credentials out of build layers.
  - Videos:
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on runtime configuration. Then reproduce the lesson example: Pass a configuration value at runtime and keep credentials out of build layers.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/

#### YouTube: focused explanations and full courses

- [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
  - Explains: Images, containers, Dockerfiles and deploying containerized applications.
  - Useful because: Package the exact service you tested; keep cloud purchases optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/docker-full-course/

#### Free written resources

1. [Docker: run a container](https://docs.docker.com/get-started/tutorials/run-an-app/) — Free; no registration required. No paid materials required.
2. [Docker: writing a Dockerfile](https://docs.docker.com/get-started/docker-concepts/building-images/writing-a-dockerfile/) — Free; no registration required. No paid materials required.

#### Lab: Docker images, containers and Dockerfiles

Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Docker images, containers and Dockerfiles:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Docker images, containers and Dockerfiles, explicitly apply Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Docker images, containers and Dockerfiles: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Docker images, containers and Dockerfiles: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Docker images, containers and Dockerfiles:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Docker images, containers and Dockerfiles, explicitly apply Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Docker images, containers and Dockerfiles: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Docker images, containers and Dockerfiles: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Docker images, containers and Dockerfiles:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Docker images, containers and Dockerfiles, explicitly apply Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Docker images, containers and Dockerfiles: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Docker images, containers and Dockerfiles: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Docker images, containers and Dockerfiles:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Docker images, containers and Dockerfiles, explicitly apply Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Docker images, containers and Dockerfiles: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Docker images, containers and Dockerfiles: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Docker images, containers and Dockerfiles:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Docker images, containers and Dockerfiles, explicitly apply Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Docker images, containers and Dockerfiles: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Docker images, containers and Dockerfiles: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Docker images, containers and Dockerfiles:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Docker images, containers and Dockerfiles, explicitly apply Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Docker images, containers and Dockerfiles: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Docker images, containers and Dockerfiles: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Docker images, containers and Dockerfiles:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Docker images, containers and Dockerfiles, explicitly apply Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Docker images, containers and Dockerfiles: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Docker images, containers and Dockerfiles: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Docker images, containers and Dockerfiles:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Docker images, containers and Dockerfiles, explicitly apply Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Docker images, containers and Dockerfiles: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Docker images, containers and Dockerfiles: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Docker images, containers and Dockerfiles:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Docker images, containers and Dockerfiles, explicitly apply Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Docker images, containers and Dockerfiles: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Docker images, containers and Dockerfiles: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Docker images, containers and Dockerfiles:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Docker images, containers and Dockerfiles, explicitly apply Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Docker images, containers and Dockerfiles: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Docker images, containers and Dockerfiles: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="docker-compose"></a>

### Volumes, networks and Docker Compose

Connect services while preserving data across container replacement.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Docker images, containers and Dockerfiles](deployment.md#docker) Navigation is unrestricted.

#### Concepts

- [ ] **Volumes:** Named volumes persist data independently of a container lifecycle; deletion needs deliberate handling.
  - Example: Recreate a database container and verify the stored record remains.
  - Videos:
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on volumes. Then reproduce the lesson example: Recreate a database container and verify the stored record remains.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Networks:** Containers communicate through scoped networks and service names; exposed ports widen access.
  - Example: Connect an API to a database without exposing the database publicly.
  - Videos:
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on networks. Then reproduce the lesson example: Connect an API to a database without exposing the database publicly.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Compose:** Compose declares multi-service configuration and health checks; startup order alone does not guarantee readiness.
  - Example: Wait for a healthy database before serving requests.
  - Videos:
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on compose. Then reproduce the lesson example: Wait for a healthy database before serving requests.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/

#### YouTube: focused explanations and full courses

- [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
  - Explains: Images, containers, Dockerfiles and deploying containerized applications.
  - Useful because: Package the exact service you tested; keep cloud purchases optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/docker-full-course/

#### Free written resources

1. [Docker: Compose getting started](https://docs.docker.com/compose/gettingstarted/) — Free; no registration required. No paid materials required.
2. [Docker: volumes](https://docs.docker.com/engine/storage/volumes/) — Free; no registration required. No paid materials required.

#### Lab: Volumes, networks and Docker Compose

Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Volumes, networks and Docker Compose:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Volumes, networks and Docker Compose, explicitly apply Volumes, Networks, Compose.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Volumes, networks and Docker Compose: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Volumes, networks and Docker Compose: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Volumes, networks and Docker Compose:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Volumes, networks and Docker Compose, explicitly apply Volumes, Networks, Compose.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Volumes, networks and Docker Compose: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Volumes, networks and Docker Compose: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Volumes, networks and Docker Compose:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Volumes, networks and Docker Compose, explicitly apply Volumes, Networks, Compose.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Volumes, networks and Docker Compose: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Volumes, networks and Docker Compose: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Volumes, networks and Docker Compose:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Volumes, networks and Docker Compose, explicitly apply Volumes, Networks, Compose.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Volumes, networks and Docker Compose: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Volumes, networks and Docker Compose: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Volumes, networks and Docker Compose:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Volumes, networks and Docker Compose, explicitly apply Volumes, Networks, Compose.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Volumes, networks and Docker Compose: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Volumes, networks and Docker Compose: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Volumes, networks and Docker Compose:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Volumes, networks and Docker Compose, explicitly apply Volumes, Networks, Compose.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Volumes, networks and Docker Compose: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Volumes, networks and Docker Compose: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Volumes, networks and Docker Compose:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Volumes, networks and Docker Compose, explicitly apply Volumes, Networks, Compose.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Volumes, networks and Docker Compose: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Volumes, networks and Docker Compose: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Volumes, networks and Docker Compose:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Volumes, networks and Docker Compose, explicitly apply Volumes, Networks, Compose.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Volumes, networks and Docker Compose: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Volumes, networks and Docker Compose: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Volumes, networks and Docker Compose:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Volumes, networks and Docker Compose, explicitly apply Volumes, Networks, Compose.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Volumes, networks and Docker Compose: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Volumes, networks and Docker Compose: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Volumes, networks and Docker Compose:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Volumes, networks and Docker Compose, explicitly apply Volumes, Networks, Compose.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Volumes, networks and Docker Compose: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Volumes, networks and Docker Compose: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="deployment-cicd"></a>

### CI/CD, cloud deployment and rollback

Automate checks and preserve a safe path back to a working release.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Volumes, networks and Docker Compose](deployment.md#docker-compose) Navigation is unrestricted.

#### Concepts

- [ ] **CI/CD:** Continuous integration checks changes; deployment should use a tested immutable artifact.
  - Example: Run tests and a build before publishing a versioned image.
  - Videos:
    - [GitHub Actions — full course](https://www.youtube.com/watch?v=Tz7FsunBbfQ) · freeCodeCamp · Full tool course
      - Explains: Workflow configuration, CI/CD and automation.
      - Useful because: Build a test/build workflow; paid certification is not required.
      - Watch for: Focus on ci/cd. Then reproduce the lesson example: Run tests and a build before publishing a versioned image.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=Tz7FsunBbfQ
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on ci/cd. Then reproduce the lesson example: Run tests and a build before publishing a versioned image.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Cloud and infrastructure:** Compute, storage, networking and configuration need documented ownership and limits.
  - Example: Use a local deployment rehearsal when no free cloud runtime is available.
  - Videos:
    - [GitHub Actions — full course](https://www.youtube.com/watch?v=Tz7FsunBbfQ) · freeCodeCamp · Full tool course
      - Explains: Workflow configuration, CI/CD and automation.
      - Useful because: Build a test/build workflow; paid certification is not required.
      - Watch for: Focus on cloud and infrastructure. Then reproduce the lesson example: Use a local deployment rehearsal when no free cloud runtime is available.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=Tz7FsunBbfQ
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on cloud and infrastructure. Then reproduce the lesson example: Use a local deployment rehearsal when no free cloud runtime is available.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Rollback and migrations:** Application rollback and schema compatibility must be considered together.
  - Example: Deploy a backward-compatible field addition before clients require it.
  - Videos:
    - [GitHub Actions — full course](https://www.youtube.com/watch?v=Tz7FsunBbfQ) · freeCodeCamp · Full tool course
      - Explains: Workflow configuration, CI/CD and automation.
      - Useful because: Build a test/build workflow; paid certification is not required.
      - Watch for: Focus on rollback and migrations. Then reproduce the lesson example: Deploy a backward-compatible field addition before clients require it.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=Tz7FsunBbfQ
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on rollback and migrations. Then reproduce the lesson example: Deploy a backward-compatible field addition before clients require it.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/

#### YouTube: focused explanations and full courses

- [GitHub Actions — full course](https://www.youtube.com/watch?v=Tz7FsunBbfQ) · freeCodeCamp · Full tool course
  - Explains: Workflow configuration, CI/CD and automation.
  - Useful because: Build a test/build workflow; paid certification is not required.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=Tz7FsunBbfQ
- [CI/CD in production with Jenkins](https://www.youtube.com/watch?v=uHNOqKdqQas) · freeCodeCamp · Long tool course · approximately 17h
  - Explains: Continuous integration and delivery pipelines in a production-style workflow.
  - Useful because: An optional deeper pipeline reference; the roadmap lab uses a smaller GitHub Actions workflow.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/ci-cd-in-production-with-jenkins/
- [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
  - Explains: Images, containers, Dockerfiles and deploying containerized applications.
  - Useful because: Package the exact service you tested; keep cloud purchases optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/docker-full-course/

#### Free written resources

1. [GitHub Actions: Python build and test](https://docs.github.com/en/actions/tutorials/build-and-test-code/python) — Free; no registration required. No paid materials required.
2. [Google SRE: release engineering](https://sre.google/sre-book/release-engineering/) — Free; no registration required. No paid materials required.

#### Lab: CI/CD, cloud deployment and rollback

Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **CI/CD, cloud deployment and rollback:** Package the project’s runnable API/worker in Docker with explicit configuration.  For CI/CD, cloud deployment and rollback, explicitly apply CI/CD, Cloud and infrastructure, Rollback and migrations.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] CI/CD, cloud deployment and rollback: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] CI/CD, cloud deployment and rollback: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **CI/CD, cloud deployment and rollback:** Package the project’s runnable API/worker in Docker with explicit configuration.  For CI/CD, cloud deployment and rollback, explicitly apply CI/CD, Cloud and infrastructure, Rollback and migrations.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] CI/CD, cloud deployment and rollback: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] CI/CD, cloud deployment and rollback: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **CI/CD, cloud deployment and rollback:** Package the project’s runnable API/worker in Docker with explicit configuration.  For CI/CD, cloud deployment and rollback, explicitly apply CI/CD, Cloud and infrastructure, Rollback and migrations.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] CI/CD, cloud deployment and rollback: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] CI/CD, cloud deployment and rollback: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **CI/CD, cloud deployment and rollback:** Package the project’s runnable API/worker in Docker with explicit configuration.  For CI/CD, cloud deployment and rollback, explicitly apply CI/CD, Cloud and infrastructure, Rollback and migrations.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] CI/CD, cloud deployment and rollback: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] CI/CD, cloud deployment and rollback: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **CI/CD, cloud deployment and rollback:** Package the project’s runnable API/worker in Docker with explicit configuration.  For CI/CD, cloud deployment and rollback, explicitly apply CI/CD, Cloud and infrastructure, Rollback and migrations.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] CI/CD, cloud deployment and rollback: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] CI/CD, cloud deployment and rollback: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **CI/CD, cloud deployment and rollback:** Package the project’s runnable API/worker in Docker with explicit configuration.  For CI/CD, cloud deployment and rollback, explicitly apply CI/CD, Cloud and infrastructure, Rollback and migrations.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] CI/CD, cloud deployment and rollback: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] CI/CD, cloud deployment and rollback: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **CI/CD, cloud deployment and rollback:** Package the project’s runnable API/worker in Docker with explicit configuration.  For CI/CD, cloud deployment and rollback, explicitly apply CI/CD, Cloud and infrastructure, Rollback and migrations.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] CI/CD, cloud deployment and rollback: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] CI/CD, cloud deployment and rollback: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **CI/CD, cloud deployment and rollback:** Package the project’s runnable API/worker in Docker with explicit configuration.  For CI/CD, cloud deployment and rollback, explicitly apply CI/CD, Cloud and infrastructure, Rollback and migrations.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] CI/CD, cloud deployment and rollback: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] CI/CD, cloud deployment and rollback: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **CI/CD, cloud deployment and rollback:** Package the project’s runnable API/worker in Docker with explicit configuration.  For CI/CD, cloud deployment and rollback, explicitly apply CI/CD, Cloud and infrastructure, Rollback and migrations.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] CI/CD, cloud deployment and rollback: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] CI/CD, cloud deployment and rollback: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **CI/CD, cloud deployment and rollback:** Package the project’s runnable API/worker in Docker with explicit configuration.  For CI/CD, cloud deployment and rollback, explicitly apply CI/CD, Cloud and infrastructure, Rollback and migrations.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] CI/CD, cloud deployment and rollback: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] CI/CD, cloud deployment and rollback: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Reliability and observability

<a id="deployment-queues"></a>

### Queues, async processing, retries and timeouts

Handle slow jobs and unreliable dependencies without duplicate work.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [CI/CD, cloud deployment and rollback](deployment.md#deployment-cicd) Navigation is unrestricted.

#### Concepts

- [ ] **Queues:** A queue decouples submission from execution; acknowledge only after work reaches a durable state.
  - Example: Return a job ID instead of holding an HTTP connection during long processing.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on queues. Then reproduce the lesson example: Return a job ID instead of holding an HTTP connection during long processing.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on queues. Then reproduce the lesson example: Return a job ID instead of holding an HTTP connection during long processing.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Retries and idempotency:** At-least-once work delivery can repeat operations; deduplicate by job or request key.
  - Example: Repeated processing of one document should not create duplicate chunks.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on retries and idempotency. Then reproduce the lesson example: Repeated processing of one document should not create duplicate chunks.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on retries and idempotency. Then reproduce the lesson example: Repeated processing of one document should not create duplicate chunks.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Timeouts and caching:** Bound waiting and cache safe reusable results with scoped keys and expiry.
  - Example: Fail a stalled dependency quickly and retain a valid previous cached result.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on timeouts and caching. Then reproduce the lesson example: Fail a stalled dependency quickly and retain a valid previous cached result.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on timeouts and caching. Then reproduce the lesson example: Fail a stalled dependency quickly and retain a valid previous cached result.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/

#### YouTube: focused explanations and full courses

- [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
  - Explains: Scalability, reliability, storage and architecture tradeoffs.
  - Useful because: Explain why a queue, index or cache is useful before adding one.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [Asyncio in Python — full tutorial](https://www.youtube.com/watch?v=Qb9s3UiMSTA) · Tech With Tim · Tool tutorial
  - Explains: Coroutines, async/await and concurrent I/O patterns.
  - Useful because: Understand what happens while an application waits on tools or network requests.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=Qb9s3UiMSTA
- [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
  - Explains: Images, containers, Dockerfiles and deploying containerized applications.
  - Useful because: Package the exact service you tested; keep cloud purchases optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/docker-full-course/

#### Free written resources

1. [Google SRE: handling overload](https://sre.google/sre-book/handling-overload/) — Free; no registration required. No paid materials required.
2. [asyncio: queues](https://docs.python.org/3/library/asyncio-queue.html) — Free; no registration required. No paid materials required.

#### Lab: Queues, async processing, retries and timeouts

Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Queues, async processing, retries and timeouts:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Queues, async processing, retries and timeouts, explicitly apply Queues, Retries and idempotency, Timeouts and caching.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Queues, async processing, retries and timeouts: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Queues, async processing, retries and timeouts: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Queues, async processing, retries and timeouts:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Queues, async processing, retries and timeouts, explicitly apply Queues, Retries and idempotency, Timeouts and caching.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Queues, async processing, retries and timeouts: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Queues, async processing, retries and timeouts: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Queues, async processing, retries and timeouts:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Queues, async processing, retries and timeouts, explicitly apply Queues, Retries and idempotency, Timeouts and caching.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Queues, async processing, retries and timeouts: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Queues, async processing, retries and timeouts: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Queues, async processing, retries and timeouts:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Queues, async processing, retries and timeouts, explicitly apply Queues, Retries and idempotency, Timeouts and caching.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Queues, async processing, retries and timeouts: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Queues, async processing, retries and timeouts: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Queues, async processing, retries and timeouts:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Queues, async processing, retries and timeouts, explicitly apply Queues, Retries and idempotency, Timeouts and caching.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Queues, async processing, retries and timeouts: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Queues, async processing, retries and timeouts: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Queues, async processing, retries and timeouts:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Queues, async processing, retries and timeouts, explicitly apply Queues, Retries and idempotency, Timeouts and caching.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Queues, async processing, retries and timeouts: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Queues, async processing, retries and timeouts: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Queues, async processing, retries and timeouts:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Queues, async processing, retries and timeouts, explicitly apply Queues, Retries and idempotency, Timeouts and caching.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Queues, async processing, retries and timeouts: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Queues, async processing, retries and timeouts: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Queues, async processing, retries and timeouts:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Queues, async processing, retries and timeouts, explicitly apply Queues, Retries and idempotency, Timeouts and caching.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Queues, async processing, retries and timeouts: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Queues, async processing, retries and timeouts: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Queues, async processing, retries and timeouts:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Queues, async processing, retries and timeouts, explicitly apply Queues, Retries and idempotency, Timeouts and caching.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Queues, async processing, retries and timeouts: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Queues, async processing, retries and timeouts: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Queues, async processing, retries and timeouts:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Queues, async processing, retries and timeouts, explicitly apply Queues, Retries and idempotency, Timeouts and caching.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Queues, async processing, retries and timeouts: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Queues, async processing, retries and timeouts: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="deployment-monitoring"></a>

### Logging, tracing, monitoring, alerts and incidents

Find failures using evidence and define actionable recovery steps.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Queues, async processing, retries and timeouts](deployment.md#deployment-queues) Navigation is unrestricted.

#### Concepts

- [ ] **Observability:** Logs describe events, metrics aggregate behavior and traces connect spans through one request.
  - Example: Attach a request ID to ingestion, retrieval and inference events.
  - Videos:
    - [Site reliability engineering fundamentals](https://www.youtube.com/watch?v=eopc_ijIfLg) · Google Cloud Events · Technical session
      - Explains: Service objectives, error budgets, monitoring, alerting and emergency response.
      - Useful because: Write actionable monitoring and recovery steps instead of collecting logs without a plan.
      - Watch for: Focus on observability. Then reproduce the lesson example: Attach a request ID to ingestion, retrieval and inference events.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=eopc_ijIfLg
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on observability. Then reproduce the lesson example: Attach a request ID to ingestion, retrieval and inference events.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Monitoring and alerts:** Track availability, error rate, p95 latency and AI-specific quality; alerts should require action.
  - Example: Alert on sustained retrieval failures rather than every single transient exception.
  - Videos:
    - [Site reliability engineering fundamentals](https://www.youtube.com/watch?v=eopc_ijIfLg) · Google Cloud Events · Technical session
      - Explains: Service objectives, error budgets, monitoring, alerting and emergency response.
      - Useful because: Write actionable monitoring and recovery steps instead of collecting logs without a plan.
      - Watch for: Focus on monitoring and alerts. Then reproduce the lesson example: Alert on sustained retrieval failures rather than every single transient exception.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=eopc_ijIfLg
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on monitoring and alerts. Then reproduce the lesson example: Alert on sustained retrieval failures rather than every single transient exception.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Runbooks and incident response:** Document diagnosis, mitigation, rollback and follow-up; preserve evidence without exposing sensitive data.
  - Example: Rehearse a model-unavailable incident with a safe fallback.
  - Videos:
    - [Incident management: SRE implements DevOps](https://www.youtube.com/watch?v=n4y9dwinPBQ) · Google Cloud Tech · Focused lecture
      - Explains: Incident roles, response process and learning after failures.
      - Useful because: Rehearse your runbook on a local outage and document what changed.
      - Watch for: Focus on runbooks and incident response. Then reproduce the lesson example: Rehearse a model-unavailable incident with a safe fallback.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=n4y9dwinPBQ
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on runbooks and incident response. Then reproduce the lesson example: Rehearse a model-unavailable incident with a safe fallback.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/

#### YouTube: focused explanations and full courses

- [Site reliability engineering fundamentals](https://www.youtube.com/watch?v=eopc_ijIfLg) · Google Cloud Events · Technical session
  - Explains: Service objectives, error budgets, monitoring, alerting and emergency response.
  - Useful because: Write actionable monitoring and recovery steps instead of collecting logs without a plan.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=eopc_ijIfLg
- [Incident management: SRE implements DevOps](https://www.youtube.com/watch?v=n4y9dwinPBQ) · Google Cloud Tech · Focused lecture
  - Explains: Incident roles, response process and learning after failures.
  - Useful because: Rehearse your runbook on a local outage and document what changed.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=n4y9dwinPBQ
- [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
  - Explains: Images, containers, Dockerfiles and deploying containerized applications.
  - Useful because: Package the exact service you tested; keep cloud purchases optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/docker-full-course/

#### Free written resources

1. [Google SRE: monitoring distributed systems](https://sre.google/sre-book/monitoring-distributed-systems/) — Free; no registration required. No paid materials required.
2. [Google SRE: managing incidents](https://sre.google/sre-book/managing-incidents/) — Free; no registration required. No paid materials required.

#### Lab: Logging, tracing, monitoring, alerts and incidents

Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Logging, tracing, monitoring, alerts and incidents:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Logging, tracing, monitoring, alerts and incidents, explicitly apply Observability, Monitoring and alerts, Runbooks and incident response.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Logging, tracing, monitoring, alerts and incidents: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Logging, tracing, monitoring, alerts and incidents: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Logging, tracing, monitoring, alerts and incidents:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Logging, tracing, monitoring, alerts and incidents, explicitly apply Observability, Monitoring and alerts, Runbooks and incident response.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Logging, tracing, monitoring, alerts and incidents: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Logging, tracing, monitoring, alerts and incidents: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Logging, tracing, monitoring, alerts and incidents:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Logging, tracing, monitoring, alerts and incidents, explicitly apply Observability, Monitoring and alerts, Runbooks and incident response.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Logging, tracing, monitoring, alerts and incidents: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Logging, tracing, monitoring, alerts and incidents: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Logging, tracing, monitoring, alerts and incidents:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Logging, tracing, monitoring, alerts and incidents, explicitly apply Observability, Monitoring and alerts, Runbooks and incident response.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Logging, tracing, monitoring, alerts and incidents: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Logging, tracing, monitoring, alerts and incidents: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Logging, tracing, monitoring, alerts and incidents:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Logging, tracing, monitoring, alerts and incidents, explicitly apply Observability, Monitoring and alerts, Runbooks and incident response.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Logging, tracing, monitoring, alerts and incidents: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Logging, tracing, monitoring, alerts and incidents: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Logging, tracing, monitoring, alerts and incidents:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Logging, tracing, monitoring, alerts and incidents, explicitly apply Observability, Monitoring and alerts, Runbooks and incident response.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Logging, tracing, monitoring, alerts and incidents: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Logging, tracing, monitoring, alerts and incidents: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Logging, tracing, monitoring, alerts and incidents:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Logging, tracing, monitoring, alerts and incidents, explicitly apply Observability, Monitoring and alerts, Runbooks and incident response.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Logging, tracing, monitoring, alerts and incidents: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Logging, tracing, monitoring, alerts and incidents: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Logging, tracing, monitoring, alerts and incidents:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Logging, tracing, monitoring, alerts and incidents, explicitly apply Observability, Monitoring and alerts, Runbooks and incident response.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Logging, tracing, monitoring, alerts and incidents: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Logging, tracing, monitoring, alerts and incidents: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Logging, tracing, monitoring, alerts and incidents:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Logging, tracing, monitoring, alerts and incidents, explicitly apply Observability, Monitoring and alerts, Runbooks and incident response.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Logging, tracing, monitoring, alerts and incidents: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Logging, tracing, monitoring, alerts and incidents: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Logging, tracing, monitoring, alerts and incidents:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Logging, tracing, monitoring, alerts and incidents, explicitly apply Observability, Monitoring and alerts, Runbooks and incident response.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Logging, tracing, monitoring, alerts and incidents: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Logging, tracing, monitoring, alerts and incidents: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="deployment-scaling"></a>

### Architecture, load balancing, scalability and cost/latency

Measure system limits before adding complexity or expensive infrastructure.

**Priority:** Useful next · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Logging, tracing, monitoring, alerts and incidents](deployment.md#deployment-monitoring) Navigation is unrestricted.

#### Concepts

- [ ] **Architecture and microservices:** Clear boundaries matter; splitting services adds network and operational failure modes.
  - Example: Keep a small API monolithic until independent scaling is justified.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on architecture and microservices. Then reproduce the lesson example: Keep a small API monolithic until independent scaling is justified.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on architecture and microservices. Then reproduce the lesson example: Keep a small API monolithic until independent scaling is justified.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Load and scalability:** Concurrency, bottlenecks and queueing affect tail latency; load balancing spreads requests but does not fix slow shared state.
  - Example: Compare one versus two local workers under a bounded test.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on load and scalability. Then reproduce the lesson example: Compare one versus two local workers under a bounded test.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on load and scalability. Then reproduce the lesson example: Compare one versus two local workers under a bounded test.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Optimization and economics:** Measure latency, memory and per-task resource use; caching/batching trade freshness and responsiveness.
  - Example: Estimate cost for optional paid deployment while keeping the actual lab local and free.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on optimization and economics. Then reproduce the lesson example: Estimate cost for optional paid deployment while keeping the actual lab local and free.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on optimization and economics. Then reproduce the lesson example: Estimate cost for optional paid deployment while keeping the actual lab local and free.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/

#### YouTube: focused explanations and full courses

- [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
  - Explains: Scalability, reliability, storage and architecture tradeoffs.
  - Useful because: Explain why a queue, index or cache is useful before adding one.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [Site reliability engineering fundamentals](https://www.youtube.com/watch?v=eopc_ijIfLg) · Google Cloud Events · Technical session
  - Explains: Service objectives, error budgets, monitoring, alerting and emergency response.
  - Useful because: Write actionable monitoring and recovery steps instead of collecting logs without a plan.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=eopc_ijIfLg
- [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
  - Explains: Images, containers, Dockerfiles and deploying containerized applications.
  - Useful because: Package the exact service you tested; keep cloud purchases optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/docker-full-course/

#### Free written resources

1. [Google SRE: load balancing at the frontend](https://sre.google/sre-book/load-balancing-frontend/) — Free; no registration required. No paid materials required.
2. [Google SRE: addressing cascading failures](https://sre.google/sre-book/addressing-cascading-failures/) — Free; no registration required. No paid materials required.

#### Lab: Architecture, load balancing, scalability and cost/latency

Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Architecture, load balancing, scalability and cost/latency:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Architecture, load balancing, scalability and cost/latency, explicitly apply Architecture and microservices, Load and scalability, Optimization and economics.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Architecture, load balancing, scalability and cost/latency: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Architecture, load balancing, scalability and cost/latency: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Architecture, load balancing, scalability and cost/latency:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Architecture, load balancing, scalability and cost/latency, explicitly apply Architecture and microservices, Load and scalability, Optimization and economics.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Architecture, load balancing, scalability and cost/latency: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Architecture, load balancing, scalability and cost/latency: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Architecture, load balancing, scalability and cost/latency:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Architecture, load balancing, scalability and cost/latency, explicitly apply Architecture and microservices, Load and scalability, Optimization and economics.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Architecture, load balancing, scalability and cost/latency: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Architecture, load balancing, scalability and cost/latency: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Architecture, load balancing, scalability and cost/latency:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Architecture, load balancing, scalability and cost/latency, explicitly apply Architecture and microservices, Load and scalability, Optimization and economics.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Architecture, load balancing, scalability and cost/latency: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Architecture, load balancing, scalability and cost/latency: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Architecture, load balancing, scalability and cost/latency:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Architecture, load balancing, scalability and cost/latency, explicitly apply Architecture and microservices, Load and scalability, Optimization and economics.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Architecture, load balancing, scalability and cost/latency: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Architecture, load balancing, scalability and cost/latency: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Architecture, load balancing, scalability and cost/latency:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Architecture, load balancing, scalability and cost/latency, explicitly apply Architecture and microservices, Load and scalability, Optimization and economics.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Architecture, load balancing, scalability and cost/latency: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Architecture, load balancing, scalability and cost/latency: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Architecture, load balancing, scalability and cost/latency:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Architecture, load balancing, scalability and cost/latency, explicitly apply Architecture and microservices, Load and scalability, Optimization and economics.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Architecture, load balancing, scalability and cost/latency: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Architecture, load balancing, scalability and cost/latency: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Architecture, load balancing, scalability and cost/latency:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Architecture, load balancing, scalability and cost/latency, explicitly apply Architecture and microservices, Load and scalability, Optimization and economics.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Architecture, load balancing, scalability and cost/latency: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Architecture, load balancing, scalability and cost/latency: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Architecture, load balancing, scalability and cost/latency:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Architecture, load balancing, scalability and cost/latency, explicitly apply Architecture and microservices, Load and scalability, Optimization and economics.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Architecture, load balancing, scalability and cost/latency: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Architecture, load balancing, scalability and cost/latency: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Architecture, load balancing, scalability and cost/latency:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Architecture, load balancing, scalability and cost/latency, explicitly apply Architecture and microservices, Load and scalability, Optimization and economics.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Architecture, load balancing, scalability and cost/latency: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Architecture, load balancing, scalability and cost/latency: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Reliable operations in detail

<a id="deployment-jobs-retries"></a>

### Durable jobs, backoff, deduplication and overload

Make background ingestion recover from retries without duplicate effects or unlimited work.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [Queues, async processing, retries and timeouts](deployment.md#deployment-queues) Navigation is unrestricted.

#### Concepts

- [ ] **At-least-once delivery:** A queue can deliver a job more than once, so receiving a message does not prove its side effect has not already happened.
  - Example: Process the same ingestion ID twice and assert one logical document version is created.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on at-least-once delivery. Then reproduce the lesson example: Process the same ingestion ID twice and assert one logical document version is created.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on at-least-once delivery. Then reproduce the lesson example: Process the same ingestion ID twice and assert one logical document version is created.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Exponential backoff and jitter:** Retries should be spaced and randomised to avoid synchronised retry bursts, with a cap and attempt budget.
  - Example: Compute retry delays for five fake failures using a seeded random source.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on exponential backoff and jitter. Then reproduce the lesson example: Compute retry delays for five fake failures using a seeded random source.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on exponential backoff and jitter. Then reproduce the lesson example: Compute retry delays for five fake failures using a seeded random source.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Transient versus permanent errors:** A temporary timeout may warrant retry while an invalid input usually needs correction rather than repeated execution.
  - Example: Retry a fake network timeout but send a malformed-document job directly to a terminal failure state.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on transient versus permanent errors. Then reproduce the lesson example: Retry a fake network timeout but send a malformed-document job directly to a terminal failure state.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on transient versus permanent errors. Then reproduce the lesson example: Retry a fake network timeout but send a malformed-document job directly to a terminal failure state.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Deduplication transaction:** Deduplication and the protected state change must be coordinated to avoid a crash between effect and acknowledgement.
  - Example: Simulate a crash after a write but before acknowledgement and verify replay remains safe.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on deduplication transaction. Then reproduce the lesson example: Simulate a crash after a write but before acknowledgement and verify replay remains safe.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on deduplication transaction. Then reproduce the lesson example: Simulate a crash after a write but before acknowledgement and verify replay remains safe.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Backpressure and capacity:** A bounded queue and explicit rejection or waiting policy prevent overload from consuming all memory.
  - Example: Submit more jobs than a toy queue can hold and verify the chosen full-queue behaviour.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on backpressure and capacity. Then reproduce the lesson example: Submit more jobs than a toy queue can hold and verify the chosen full-queue behaviour.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on backpressure and capacity. Then reproduce the lesson example: Submit more jobs than a toy queue can hold and verify the chosen full-queue behaviour.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/

#### YouTube: focused explanations and full courses

- [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
  - Explains: Scalability, reliability, storage and architecture tradeoffs.
  - Useful because: Explain why a queue, index or cache is useful before adding one.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [Asyncio in Python — full tutorial](https://www.youtube.com/watch?v=Qb9s3UiMSTA) · Tech With Tim · Tool tutorial
  - Explains: Coroutines, async/await and concurrent I/O patterns.
  - Useful because: Understand what happens while an application waits on tools or network requests.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=Qb9s3UiMSTA
- [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
  - Explains: Images, containers, Dockerfiles and deploying containerized applications.
  - Useful because: Package the exact service you tested; keep cloud purchases optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/docker-full-course/

#### Free written resources

1. [AWS Builders Library: timeouts, retries and jitter](https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/) — Free; no registration required. No paid materials required.
2. [Python: queue](https://docs.python.org/3/library/queue.html) — Free; no registration required. No paid materials required.

#### Lab: Durable jobs, backoff, deduplication and overload

Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Durable jobs, backoff, deduplication and overload:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Durable jobs, backoff, deduplication and overload, explicitly apply At-least-once delivery, Exponential backoff and jitter, Transient versus permanent errors.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Durable jobs, backoff, deduplication and overload: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Durable jobs, backoff, deduplication and overload: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Durable jobs, backoff, deduplication and overload:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Durable jobs, backoff, deduplication and overload, explicitly apply At-least-once delivery, Exponential backoff and jitter, Transient versus permanent errors.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Durable jobs, backoff, deduplication and overload: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Durable jobs, backoff, deduplication and overload: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Durable jobs, backoff, deduplication and overload:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Durable jobs, backoff, deduplication and overload, explicitly apply At-least-once delivery, Exponential backoff and jitter, Transient versus permanent errors.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Durable jobs, backoff, deduplication and overload: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Durable jobs, backoff, deduplication and overload: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Durable jobs, backoff, deduplication and overload:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Durable jobs, backoff, deduplication and overload, explicitly apply At-least-once delivery, Exponential backoff and jitter, Transient versus permanent errors.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Durable jobs, backoff, deduplication and overload: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Durable jobs, backoff, deduplication and overload: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Durable jobs, backoff, deduplication and overload:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Durable jobs, backoff, deduplication and overload, explicitly apply At-least-once delivery, Exponential backoff and jitter, Transient versus permanent errors.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Durable jobs, backoff, deduplication and overload: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Durable jobs, backoff, deduplication and overload: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Durable jobs, backoff, deduplication and overload:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Durable jobs, backoff, deduplication and overload, explicitly apply At-least-once delivery, Exponential backoff and jitter, Transient versus permanent errors.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Durable jobs, backoff, deduplication and overload: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Durable jobs, backoff, deduplication and overload: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Durable jobs, backoff, deduplication and overload:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Durable jobs, backoff, deduplication and overload, explicitly apply At-least-once delivery, Exponential backoff and jitter, Transient versus permanent errors.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Durable jobs, backoff, deduplication and overload: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Durable jobs, backoff, deduplication and overload: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Durable jobs, backoff, deduplication and overload:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Durable jobs, backoff, deduplication and overload, explicitly apply At-least-once delivery, Exponential backoff and jitter, Transient versus permanent errors.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Durable jobs, backoff, deduplication and overload: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Durable jobs, backoff, deduplication and overload: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Durable jobs, backoff, deduplication and overload:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Durable jobs, backoff, deduplication and overload, explicitly apply At-least-once delivery, Exponential backoff and jitter, Transient versus permanent errors.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Durable jobs, backoff, deduplication and overload: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Durable jobs, backoff, deduplication and overload: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Durable jobs, backoff, deduplication and overload:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Durable jobs, backoff, deduplication and overload, explicitly apply At-least-once delivery, Exponential backoff and jitter, Transient versus permanent errors.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Durable jobs, backoff, deduplication and overload: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Durable jobs, backoff, deduplication and overload: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="deployment-observability-slos"></a>

### Service objectives, traces, latency percentiles and rollback

Turn operational telemetry into concrete user-facing reliability decisions rather than collecting logs without a purpose.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [Logging, tracing, monitoring, alerts and incidents](deployment.md#deployment-monitoring) Navigation is unrestricted.

#### Concepts

- [ ] **SLI versus SLO:** An indicator measures a service property while an objective sets a target over a declared population and time window.
  - Example: Define successful-request fraction and a latency target for the local inference API without treating fake traffic as a real production guarantee.
  - Videos:
    - [Site reliability engineering fundamentals](https://www.youtube.com/watch?v=eopc_ijIfLg) · Google Cloud Events · Technical session
      - Explains: Service objectives, error budgets, monitoring, alerting and emergency response.
      - Useful because: Write actionable monitoring and recovery steps instead of collecting logs without a plan.
      - Watch for: Focus on sli versus slo. Then reproduce the lesson example: Define successful-request fraction and a latency target for the local inference API without treating fake traffic as a real production guarantee.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=eopc_ijIfLg
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on sli versus slo. Then reproduce the lesson example: Define successful-request fraction and a latency target for the local inference API without treating fake traffic as a real production guarantee.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Latency percentiles:** Averages can hide slow-tail requests; percentiles depend on sample count and aggregation method.
  - Example: Compute median and p95 from a generated latency list containing a few large outliers.
  - Videos:
    - [Site reliability engineering fundamentals](https://www.youtube.com/watch?v=eopc_ijIfLg) · Google Cloud Events · Technical session
      - Explains: Service objectives, error budgets, monitoring, alerting and emergency response.
      - Useful because: Write actionable monitoring and recovery steps instead of collecting logs without a plan.
      - Watch for: Focus on latency percentiles. Then reproduce the lesson example: Compute median and p95 from a generated latency list containing a few large outliers.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=eopc_ijIfLg
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on latency percentiles. Then reproduce the lesson example: Compute median and p95 from a generated latency list containing a few large outliers.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Trace correlation:** A trace links work across request handling, retrieval and model calls so delays can be attributed to stages.
  - Example: Pass a trace ID through a fake ingestion, retrieval and answer flow and display stage durations.
  - Videos:
    - [Site reliability engineering fundamentals](https://www.youtube.com/watch?v=eopc_ijIfLg) · Google Cloud Events · Technical session
      - Explains: Service objectives, error budgets, monitoring, alerting and emergency response.
      - Useful because: Write actionable monitoring and recovery steps instead of collecting logs without a plan.
      - Watch for: Focus on trace correlation. Then reproduce the lesson example: Pass a trace ID through a fake ingestion, retrieval and answer flow and display stage durations.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=eopc_ijIfLg
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on trace correlation. Then reproduce the lesson example: Pass a trace ID through a fake ingestion, retrieval and answer flow and display stage durations.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Low-cardinality labels:** Unbounded labels such as raw prompt text or unique user IDs can increase cost and leak data.
  - Example: Use route and result-category metrics while keeping per-request IDs in controlled logs.
  - Videos:
    - [Site reliability engineering fundamentals](https://www.youtube.com/watch?v=eopc_ijIfLg) · Google Cloud Events · Technical session
      - Explains: Service objectives, error budgets, monitoring, alerting and emergency response.
      - Useful because: Write actionable monitoring and recovery steps instead of collecting logs without a plan.
      - Watch for: Focus on low-cardinality labels. Then reproduce the lesson example: Use route and result-category metrics while keeping per-request IDs in controlled logs.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=eopc_ijIfLg
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on low-cardinality labels. Then reproduce the lesson example: Use route and result-category metrics while keeping per-request IDs in controlled logs.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Release and rollback criteria:** A release needs an observable success/failure rule and a way to restore a compatible previous artifact.
  - Example: Compare two recorded release windows and trigger a simulated rollback when a documented error-rate threshold is exceeded.
  - Videos:
    - [Site reliability engineering fundamentals](https://www.youtube.com/watch?v=eopc_ijIfLg) · Google Cloud Events · Technical session
      - Explains: Service objectives, error budgets, monitoring, alerting and emergency response.
      - Useful because: Write actionable monitoring and recovery steps instead of collecting logs without a plan.
      - Watch for: Focus on release and rollback criteria. Then reproduce the lesson example: Compare two recorded release windows and trigger a simulated rollback when a documented error-rate threshold is exceeded.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=eopc_ijIfLg
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on release and rollback criteria. Then reproduce the lesson example: Compare two recorded release windows and trigger a simulated rollback when a documented error-rate threshold is exceeded.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/

#### YouTube: focused explanations and full courses

- [Site reliability engineering fundamentals](https://www.youtube.com/watch?v=eopc_ijIfLg) · Google Cloud Events · Technical session
  - Explains: Service objectives, error budgets, monitoring, alerting and emergency response.
  - Useful because: Write actionable monitoring and recovery steps instead of collecting logs without a plan.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=eopc_ijIfLg
- [Incident management: SRE implements DevOps](https://www.youtube.com/watch?v=n4y9dwinPBQ) · Google Cloud Tech · Focused lecture
  - Explains: Incident roles, response process and learning after failures.
  - Useful because: Rehearse your runbook on a local outage and document what changed.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=n4y9dwinPBQ
- [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
  - Explains: Images, containers, Dockerfiles and deploying containerized applications.
  - Useful because: Package the exact service you tested; keep cloud purchases optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/docker-full-course/

#### Free written resources

1. [Google SRE: service level objectives](https://sre.google/sre-book/service-level-objectives/) — Free; no registration required. No paid materials required.
2. [OpenTelemetry: signals](https://opentelemetry.io/docs/concepts/signals/) — Free; no registration required. No paid materials required.

#### Lab: Service objectives, traces, latency percentiles and rollback

Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Service objectives, traces, latency percentiles and rollback:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Service objectives, traces, latency percentiles and rollback, explicitly apply SLI versus SLO, Latency percentiles, Trace correlation.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Service objectives, traces, latency percentiles and rollback: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Service objectives, traces, latency percentiles and rollback: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Service objectives, traces, latency percentiles and rollback:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Service objectives, traces, latency percentiles and rollback, explicitly apply SLI versus SLO, Latency percentiles, Trace correlation.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Service objectives, traces, latency percentiles and rollback: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Service objectives, traces, latency percentiles and rollback: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Service objectives, traces, latency percentiles and rollback:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Service objectives, traces, latency percentiles and rollback, explicitly apply SLI versus SLO, Latency percentiles, Trace correlation.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Service objectives, traces, latency percentiles and rollback: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Service objectives, traces, latency percentiles and rollback: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Service objectives, traces, latency percentiles and rollback:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Service objectives, traces, latency percentiles and rollback, explicitly apply SLI versus SLO, Latency percentiles, Trace correlation.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Service objectives, traces, latency percentiles and rollback: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Service objectives, traces, latency percentiles and rollback: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Service objectives, traces, latency percentiles and rollback:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Service objectives, traces, latency percentiles and rollback, explicitly apply SLI versus SLO, Latency percentiles, Trace correlation.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Service objectives, traces, latency percentiles and rollback: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Service objectives, traces, latency percentiles and rollback: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Service objectives, traces, latency percentiles and rollback:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Service objectives, traces, latency percentiles and rollback, explicitly apply SLI versus SLO, Latency percentiles, Trace correlation.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Service objectives, traces, latency percentiles and rollback: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Service objectives, traces, latency percentiles and rollback: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Service objectives, traces, latency percentiles and rollback:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Service objectives, traces, latency percentiles and rollback, explicitly apply SLI versus SLO, Latency percentiles, Trace correlation.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Service objectives, traces, latency percentiles and rollback: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Service objectives, traces, latency percentiles and rollback: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Service objectives, traces, latency percentiles and rollback:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Service objectives, traces, latency percentiles and rollback, explicitly apply SLI versus SLO, Latency percentiles, Trace correlation.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Service objectives, traces, latency percentiles and rollback: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Service objectives, traces, latency percentiles and rollback: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Service objectives, traces, latency percentiles and rollback:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Service objectives, traces, latency percentiles and rollback, explicitly apply SLI versus SLO, Latency percentiles, Trace correlation.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Service objectives, traces, latency percentiles and rollback: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Service objectives, traces, latency percentiles and rollback: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Service objectives, traces, latency percentiles and rollback:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Service objectives, traces, latency percentiles and rollback, explicitly apply SLI versus SLO, Latency percentiles, Trace correlation.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Service objectives, traces, latency percentiles and rollback: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Service objectives, traces, latency percentiles and rollback: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

