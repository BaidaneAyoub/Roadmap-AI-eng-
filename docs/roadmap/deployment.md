# Deployment and operations

Release reproducible services and observe their real behavior.

## AI Engineering · Step 12 of 13

**Goal:** Package and operate an AI service reliably within a small budget.

**Stage checkpoint:** Run the API in Docker Compose with health checks, timeouts, logs and a documented rollback.

Containerize, monitor, recover and restore a reproducible local application.

Follow the modules and lessons below at your pace. Finish each exercise, save your evidence and self-assessment, then continue. Completed and Already known count as completed; Skipped is reported separately. You can move ahead at any time.

[Full pipeline](../PIPELINE.md) · [Next step: Product and documentation](product.md)

## Packaging and release

<a id="docker"></a>

### Docker images, containers and Dockerfiles

Package a service so its runtime can be reproduced on another machine.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

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

### Reproducible inference container

A teammate needs to start the same API on another machine.

**Data:** Use a tiny local FastAPI app and generated request fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A non-root Docker image with health check and smoke test.

**Effort:** 10h · Beginner → intermediate

- **Docker images, containers and Dockerfiles:** Package the runnable project in Docker; define configuration, non-root execution and a health or CLI smoke check. Apply this to Reproducible inference container: A non-root Docker image with health check and smoke test. Focus: Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: Dockerfile, .dockerignore and reproducible run command
  - Check: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A non-root Docker image with health check and smoke test. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Docker images, containers and Dockerfiles: Dockerfile, .dockerignore and reproducible run command
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Build cleanly, start on a configurable port and stop gracefully.
- [ ] Docker images, containers and Dockerfiles: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Release rollback rehearsal

A maintainer needs a tested escape from a broken release.

**Data:** Build two local image versions, one with a failing health endpoint. Use a fixed seed and keep evaluation cases separate.

**Output:** A rollout checklist and executable local rollback drill.

**Effort:** 10h · Beginner → intermediate

- **Docker images, containers and Dockerfiles:** Package the runnable project in Docker; define configuration, non-root execution and a health or CLI smoke check. Apply this to Release rollback rehearsal: A rollout checklist and executable local rollback drill. Focus: Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: Dockerfile, .dockerignore and reproducible run command
  - Check: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A rollout checklist and executable local rollback drill. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Docker images, containers and Dockerfiles: Dockerfile, .dockerignore and reproducible run command
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restore healthy traffic and verify data compatibility after rollback.
- [ ] Docker images, containers and Dockerfiles: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Validated prediction API

A model builder needs a reliable inference boundary.

**Data:** Use bundled digits and a small saved baseline or deterministic test predictor. Use a fixed seed and keep evaluation cases separate.

**Output:** A FastAPI service with request/response schemas and health endpoint.

**Effort:** 10h · Beginner → intermediate

- **Docker images, containers and Dockerfiles:** Package the runnable project in Docker; define configuration, non-root execution and a health or CLI smoke check. Apply this to Validated prediction API: A FastAPI service with request/response schemas and health endpoint. Focus: Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: Dockerfile, .dockerignore and reproducible run command
  - Check: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A FastAPI service with request/response schemas and health endpoint. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Docker images, containers and Dockerfiles: Dockerfile, .dockerignore and reproducible run command
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject bad shapes and test successful inference plus unavailable-model errors.
- [ ] Docker images, containers and Dockerfiles: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Tiny digit recognition service

A learner needs to compare classical and neural classification end to end.

**Data:** Use scikit-learn bundled 8 by 8 digits; no download needed. Use a fixed seed and keep evaluation cases separate.

**Output:** A linear baseline, small PyTorch MLP, inference endpoint and container when selected.

**Effort:** 16h · Intermediate

- **Docker images, containers and Dockerfiles:** Package the runnable project in Docker; define configuration, non-root execution and a health or CLI smoke check. Apply this to Tiny digit recognition service: A linear baseline, small PyTorch MLP, inference endpoint and container when selected. Focus: Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: Dockerfile, .dockerignore and reproducible run command
  - Check: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A linear baseline, small PyTorch MLP, inference endpoint and container when selected. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Docker images, containers and Dockerfiles: Dockerfile, .dockerignore and reproducible run command
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report held-out accuracy, confusion matrix and CPU latency for both models.
- [ ] Docker images, containers and Dockerfiles: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket model comparison

A support lead needs category suggestions with human review for ambiguity.

**Data:** Generate 180 labeled login, billing and setup tickets with paraphrases. Use a fixed seed and keep evaluation cases separate.

**Output:** A classifier comparison, error slices and a review threshold.

**Effort:** 16h · Intermediate

- **Docker images, containers and Dockerfiles:** Package the runnable project in Docker; define configuration, non-root execution and a health or CLI smoke check. Apply this to Support ticket model comparison: A classifier comparison, error slices and a review threshold. Focus: Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: Dockerfile, .dockerignore and reproducible run command
  - Check: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A classifier comparison, error slices and a review threshold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Docker images, containers and Dockerfiles: Dockerfile, .dockerignore and reproducible run command
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Hold out templates, compare a dummy baseline and report macro F1.
- [ ] Docker images, containers and Dockerfiles: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Offline quality pipeline

A team needs a repeatable test gate before packaging.

**Data:** Use a small project with one deliberately failing test. Use a fixed seed and keep evaluation cases separate.

**Output:** A CI configuration with local equivalent commands.

**Effort:** 10h · Beginner → intermediate

- **Docker images, containers and Dockerfiles:** Package the runnable project in Docker; define configuration, non-root execution and a health or CLI smoke check. Apply this to Offline quality pipeline: A CI configuration with local equivalent commands. Focus: Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: Dockerfile, .dockerignore and reproducible run command
  - Check: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A CI configuration with local equivalent commands. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Docker images, containers and Dockerfiles: Dockerfile, .dockerignore and reproducible run command
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The gate fails on the broken test and produces a versioned artifact only on success.
- [ ] Docker images, containers and Dockerfiles: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### API and database Compose lab

A developer needs reproducible service networking and persistence.

**Data:** Seed a local PostgreSQL database with fictional tasks. Use a fixed seed and keep evaluation cases separate.

**Output:** A Compose stack with isolated services and persistent data.

**Effort:** 10h · Beginner → intermediate

- **Docker images, containers and Dockerfiles:** Package the runnable project in Docker; define configuration, non-root execution and a health or CLI smoke check. Apply this to API and database Compose lab: A Compose stack with isolated services and persistent data. Focus: Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: Dockerfile, .dockerignore and reproducible run command
  - Check: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Compose stack with isolated services and persistent data. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Docker images, containers and Dockerfiles: Dockerfile, .dockerignore and reproducible run command
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restart containers without losing rows; API connects by service name.
- [ ] Docker images, containers and Dockerfiles: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local inference efficiency ledger

A learner needs to compare caching and batching tradeoffs.

**Data:** Use repeated generated requests and a tiny CPU model. Use a fixed seed and keep evaluation cases separate.

**Output:** A benchmark of cached, uncached and batched inference.

**Effort:** 10h · Beginner → intermediate

- **Docker images, containers and Dockerfiles:** Package the runnable project in Docker; define configuration, non-root execution and a health or CLI smoke check. Apply this to Local inference efficiency ledger: A benchmark of cached, uncached and batched inference. Focus: Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: Dockerfile, .dockerignore and reproducible run command
  - Check: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A benchmark of cached, uncached and batched inference. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Docker images, containers and Dockerfiles: Dockerfile, .dockerignore and reproducible run command
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report cache hit rate, memory and latency; verify outputs remain equivalent.
- [ ] Docker images, containers and Dockerfiles: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service capacity envelope

A builder needs to understand throughput on their own machine.

**Data:** Use a deterministic local endpoint and bounded load generator. Use a fixed seed and keep evaluation cases separate.

**Output:** A latency/throughput curve and saturation report.

**Effort:** 10h · Beginner → intermediate

- **Docker images, containers and Dockerfiles:** Package the runnable project in Docker; define configuration, non-root execution and a health or CLI smoke check. Apply this to Service capacity envelope: A latency/throughput curve and saturation report. Focus: Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: Dockerfile, .dockerignore and reproducible run command
  - Check: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A latency/throughput curve and saturation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Docker images, containers and Dockerfiles: Dockerfile, .dockerignore and reproducible run command
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report p50/p95, errors and machine specs without generalizing to production.
- [ ] Docker images, containers and Dockerfiles: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Idempotent background worker

An operator needs safe retry of failed jobs.

**Data:** Generate 50 local jobs and injected transient failures. Use a fixed seed and keep evaluation cases separate.

**Output:** A queue worker with bounded retries and dead-letter records.

**Effort:** 10h · Beginner → intermediate

- **Docker images, containers and Dockerfiles:** Package the runnable project in Docker; define configuration, non-root execution and a health or CLI smoke check. Apply this to Idempotent background worker: A queue worker with bounded retries and dead-letter records. Focus: Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: Dockerfile, .dockerignore and reproducible run command
  - Check: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A queue worker with bounded retries and dead-letter records. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Docker images, containers and Dockerfiles: Dockerfile, .dockerignore and reproducible run command
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Duplicate delivery never duplicates the final output.
- [ ] Docker images, containers and Dockerfiles: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="docker-compose"></a>

### Volumes, networks and Docker Compose

Connect services while preserving data across container replacement.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

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

### API and database Compose lab

A developer needs reproducible service networking and persistence.

**Data:** Seed a local PostgreSQL database with fictional tasks. Use a fixed seed and keep evaluation cases separate.

**Output:** A Compose stack with isolated services and persistent data.

**Effort:** 10h · Beginner → intermediate

- **Volumes, networks and Docker Compose:** Connect the project service and its local dependency through Docker Compose with service-name networking and persistent volumes. Apply this to API and database Compose lab: A Compose stack with isolated services and persistent data. Focus: Volumes, Networks, Compose.
  - Deliverable: Compose file, seed command and operational README
  - Check: Restart the stack without losing persisted records and test dependency unavailability. Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Compose stack with isolated services and persistent data. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Volumes, networks and Docker Compose: Compose file, seed command and operational README
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restart containers without losing rows; API connects by service name.
- [ ] Volumes, networks and Docker Compose: Restart the stack without losing persisted records and test dependency unavailability. Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Offline quality pipeline

A team needs a repeatable test gate before packaging.

**Data:** Use a small project with one deliberately failing test. Use a fixed seed and keep evaluation cases separate.

**Output:** A CI configuration with local equivalent commands.

**Effort:** 10h · Beginner → intermediate

- **Volumes, networks and Docker Compose:** Connect the project service and its local dependency through Docker Compose with service-name networking and persistent volumes. Apply this to Offline quality pipeline: A CI configuration with local equivalent commands. Focus: Volumes, Networks, Compose.
  - Deliverable: Compose file, seed command and operational README
  - Check: Restart the stack without losing persisted records and test dependency unavailability. Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A CI configuration with local equivalent commands. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Volumes, networks and Docker Compose: Compose file, seed command and operational README
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The gate fails on the broken test and produces a versioned artifact only on success.
- [ ] Volumes, networks and Docker Compose: Restart the stack without losing persisted records and test dependency unavailability. Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible inference container

A teammate needs to start the same API on another machine.

**Data:** Use a tiny local FastAPI app and generated request fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A non-root Docker image with health check and smoke test.

**Effort:** 10h · Beginner → intermediate

- **Volumes, networks and Docker Compose:** Connect the project service and its local dependency through Docker Compose with service-name networking and persistent volumes. Apply this to Reproducible inference container: A non-root Docker image with health check and smoke test. Focus: Volumes, Networks, Compose.
  - Deliverable: Compose file, seed command and operational README
  - Check: Restart the stack without losing persisted records and test dependency unavailability. Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A non-root Docker image with health check and smoke test. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Volumes, networks and Docker Compose: Compose file, seed command and operational README
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Build cleanly, start on a configurable port and stop gracefully.
- [ ] Volumes, networks and Docker Compose: Restart the stack without losing persisted records and test dependency unavailability. Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local inference efficiency ledger

A learner needs to compare caching and batching tradeoffs.

**Data:** Use repeated generated requests and a tiny CPU model. Use a fixed seed and keep evaluation cases separate.

**Output:** A benchmark of cached, uncached and batched inference.

**Effort:** 10h · Beginner → intermediate

- **Volumes, networks and Docker Compose:** Connect the project service and its local dependency through Docker Compose with service-name networking and persistent volumes. Apply this to Local inference efficiency ledger: A benchmark of cached, uncached and batched inference. Focus: Volumes, Networks, Compose.
  - Deliverable: Compose file, seed command and operational README
  - Check: Restart the stack without losing persisted records and test dependency unavailability. Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A benchmark of cached, uncached and batched inference. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Volumes, networks and Docker Compose: Compose file, seed command and operational README
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report cache hit rate, memory and latency; verify outputs remain equivalent.
- [ ] Volumes, networks and Docker Compose: Restart the stack without losing persisted records and test dependency unavailability. Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service capacity envelope

A builder needs to understand throughput on their own machine.

**Data:** Use a deterministic local endpoint and bounded load generator. Use a fixed seed and keep evaluation cases separate.

**Output:** A latency/throughput curve and saturation report.

**Effort:** 10h · Beginner → intermediate

- **Volumes, networks and Docker Compose:** Connect the project service and its local dependency through Docker Compose with service-name networking and persistent volumes. Apply this to Service capacity envelope: A latency/throughput curve and saturation report. Focus: Volumes, Networks, Compose.
  - Deliverable: Compose file, seed command and operational README
  - Check: Restart the stack without losing persisted records and test dependency unavailability. Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A latency/throughput curve and saturation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Volumes, networks and Docker Compose: Compose file, seed command and operational README
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report p50/p95, errors and machine specs without generalizing to production.
- [ ] Volumes, networks and Docker Compose: Restart the stack without losing persisted records and test dependency unavailability. Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Idempotent background worker

An operator needs safe retry of failed jobs.

**Data:** Generate 50 local jobs and injected transient failures. Use a fixed seed and keep evaluation cases separate.

**Output:** A queue worker with bounded retries and dead-letter records.

**Effort:** 10h · Beginner → intermediate

- **Volumes, networks and Docker Compose:** Connect the project service and its local dependency through Docker Compose with service-name networking and persistent volumes. Apply this to Idempotent background worker: A queue worker with bounded retries and dead-letter records. Focus: Volumes, Networks, Compose.
  - Deliverable: Compose file, seed command and operational README
  - Check: Restart the stack without losing persisted records and test dependency unavailability. Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A queue worker with bounded retries and dead-letter records. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Volumes, networks and Docker Compose: Compose file, seed command and operational README
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Duplicate delivery never duplicates the final output.
- [ ] Volumes, networks and Docker Compose: Restart the stack without losing persisted records and test dependency unavailability. Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Release rollback rehearsal

A maintainer needs a tested escape from a broken release.

**Data:** Build two local image versions, one with a failing health endpoint. Use a fixed seed and keep evaluation cases separate.

**Output:** A rollout checklist and executable local rollback drill.

**Effort:** 10h · Beginner → intermediate

- **Volumes, networks and Docker Compose:** Connect the project service and its local dependency through Docker Compose with service-name networking and persistent volumes. Apply this to Release rollback rehearsal: A rollout checklist and executable local rollback drill. Focus: Volumes, Networks, Compose.
  - Deliverable: Compose file, seed command and operational README
  - Check: Restart the stack without losing persisted records and test dependency unavailability. Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A rollout checklist and executable local rollback drill. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Volumes, networks and Docker Compose: Compose file, seed command and operational README
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restore healthy traffic and verify data compatibility after rollback.
- [ ] Volumes, networks and Docker Compose: Restart the stack without losing persisted records and test dependency unavailability. Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reliability budget dashboard

An operator needs meaningful availability and latency indicators.

**Data:** Generate one day of synthetic request metrics with an outage. Use a fixed seed and keep evaluation cases separate.

**Output:** An SLO report with burn-rate alerts and investigation notes.

**Effort:** 10h · Beginner → intermediate

- **Volumes, networks and Docker Compose:** Connect the project service and its local dependency through Docker Compose with service-name networking and persistent volumes. Apply this to Reliability budget dashboard: An SLO report with burn-rate alerts and investigation notes. Focus: Volumes, Networks, Compose.
  - Deliverable: Compose file, seed command and operational README
  - Check: Restart the stack without losing persisted records and test dependency unavailability. Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An SLO report with burn-rate alerts and investigation notes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Volumes, networks and Docker Compose: Compose file, seed command and operational README
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compute error budget correctly and distinguish missing telemetry from success.
- [ ] Volumes, networks and Docker Compose: Restart the stack without losing persisted records and test dependency unavailability. Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Timeout budget simulator

An engineer needs to prevent retry storms across dependent calls.

**Data:** Create three local stubs with controllable delay and failure rates. Use a fixed seed and keep evaluation cases separate.

**Output:** A timeout/retry budget experiment.

**Effort:** 10h · Beginner → intermediate

- **Volumes, networks and Docker Compose:** Connect the project service and its local dependency through Docker Compose with service-name networking and persistent volumes. Apply this to Timeout budget simulator: A timeout/retry budget experiment. Focus: Volumes, Networks, Compose.
  - Deliverable: Compose file, seed command and operational README
  - Check: Restart the stack without losing persisted records and test dependency unavailability. Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A timeout/retry budget experiment. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Volumes, networks and Docker Compose: Compose file, seed command and operational README
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Total request duration stays bounded and attempts stay below the configured cap.
- [ ] Volumes, networks and Docker Compose: Restart the stack without losing persisted records and test dependency unavailability. Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Request trace investigation

A maintainer needs to follow one request across components.

**Data:** Generate requests with correlation IDs and seeded slow dependencies. Use a fixed seed and keep evaluation cases separate.

**Output:** Structured logs and a local trace report.

**Effort:** 10h · Beginner → intermediate

- **Volumes, networks and Docker Compose:** Connect the project service and its local dependency through Docker Compose with service-name networking and persistent volumes. Apply this to Request trace investigation: Structured logs and a local trace report. Focus: Volumes, Networks, Compose.
  - Deliverable: Compose file, seed command and operational README
  - Check: Restart the stack without losing persisted records and test dependency unavailability. Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Structured logs and a local trace report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Volumes, networks and Docker Compose: Compose file, seed command and operational README
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Trace each request end to end without logging secrets or full private payloads.
- [ ] Volumes, networks and Docker Compose: Restart the stack without losing persisted records and test dependency unavailability. Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="deployment-cicd"></a>

### CI/CD, cloud deployment and rollback

Automate checks and preserve a safe path back to a working release.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

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

### Offline quality pipeline

A team needs a repeatable test gate before packaging.

**Data:** Use a small project with one deliberately failing test. Use a fixed seed and keep evaluation cases separate.

**Output:** A CI configuration with local equivalent commands.

**Effort:** 10h · Beginner → intermediate

- **CI/CD, cloud deployment and rollback:** Implement CI/CD, cloud deployment and rollback in Offline quality pipeline. Adapt this focused lab to the project data: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.  Required concepts: CI/CD, Cloud and infrastructure, Rollback and migrations.
  - Deliverable: CI/CD, cloud deployment and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A CI configuration with local equivalent commands. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · CI/CD, cloud deployment and rollback: CI/CD, cloud deployment and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The gate fails on the broken test and produces a versioned artifact only on success.
- [ ] CI/CD, cloud deployment and rollback: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Release rollback rehearsal

A maintainer needs a tested escape from a broken release.

**Data:** Build two local image versions, one with a failing health endpoint. Use a fixed seed and keep evaluation cases separate.

**Output:** A rollout checklist and executable local rollback drill.

**Effort:** 10h · Beginner → intermediate

- **CI/CD, cloud deployment and rollback:** Implement CI/CD, cloud deployment and rollback in Release rollback rehearsal. Adapt this focused lab to the project data: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.  Required concepts: CI/CD, Cloud and infrastructure, Rollback and migrations.
  - Deliverable: CI/CD, cloud deployment and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A rollout checklist and executable local rollback drill. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · CI/CD, cloud deployment and rollback: CI/CD, cloud deployment and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restore healthy traffic and verify data compatibility after rollback.
- [ ] CI/CD, cloud deployment and rollback: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### API and database Compose lab

A developer needs reproducible service networking and persistence.

**Data:** Seed a local PostgreSQL database with fictional tasks. Use a fixed seed and keep evaluation cases separate.

**Output:** A Compose stack with isolated services and persistent data.

**Effort:** 10h · Beginner → intermediate

- **CI/CD, cloud deployment and rollback:** Extend the project with CI/CD, cloud deployment and rollback in API and database Compose lab. Adapt this focused lab to the project data: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.  Required concepts: CI/CD, Cloud and infrastructure, Rollback and migrations.
  - Deliverable: CI/CD, cloud deployment and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Compose stack with isolated services and persistent data. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · CI/CD, cloud deployment and rollback: CI/CD, cloud deployment and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restart containers without losing rows; API connects by service name.
- [ ] CI/CD, cloud deployment and rollback: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible inference container

A teammate needs to start the same API on another machine.

**Data:** Use a tiny local FastAPI app and generated request fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A non-root Docker image with health check and smoke test.

**Effort:** 10h · Beginner → intermediate

- **CI/CD, cloud deployment and rollback:** Extend the project with CI/CD, cloud deployment and rollback in Reproducible inference container. Adapt this focused lab to the project data: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.  Required concepts: CI/CD, Cloud and infrastructure, Rollback and migrations.
  - Deliverable: CI/CD, cloud deployment and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A non-root Docker image with health check and smoke test. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · CI/CD, cloud deployment and rollback: CI/CD, cloud deployment and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Build cleanly, start on a configurable port and stop gracefully.
- [ ] CI/CD, cloud deployment and rollback: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local inference efficiency ledger

A learner needs to compare caching and batching tradeoffs.

**Data:** Use repeated generated requests and a tiny CPU model. Use a fixed seed and keep evaluation cases separate.

**Output:** A benchmark of cached, uncached and batched inference.

**Effort:** 10h · Beginner → intermediate

- **CI/CD, cloud deployment and rollback:** Extend the project with CI/CD, cloud deployment and rollback in Local inference efficiency ledger. Adapt this focused lab to the project data: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.  Required concepts: CI/CD, Cloud and infrastructure, Rollback and migrations.
  - Deliverable: CI/CD, cloud deployment and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A benchmark of cached, uncached and batched inference. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · CI/CD, cloud deployment and rollback: CI/CD, cloud deployment and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report cache hit rate, memory and latency; verify outputs remain equivalent.
- [ ] CI/CD, cloud deployment and rollback: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service capacity envelope

A builder needs to understand throughput on their own machine.

**Data:** Use a deterministic local endpoint and bounded load generator. Use a fixed seed and keep evaluation cases separate.

**Output:** A latency/throughput curve and saturation report.

**Effort:** 10h · Beginner → intermediate

- **CI/CD, cloud deployment and rollback:** Extend the project with CI/CD, cloud deployment and rollback in Service capacity envelope. Adapt this focused lab to the project data: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.  Required concepts: CI/CD, Cloud and infrastructure, Rollback and migrations.
  - Deliverable: CI/CD, cloud deployment and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A latency/throughput curve and saturation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · CI/CD, cloud deployment and rollback: CI/CD, cloud deployment and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report p50/p95, errors and machine specs without generalizing to production.
- [ ] CI/CD, cloud deployment and rollback: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Idempotent background worker

An operator needs safe retry of failed jobs.

**Data:** Generate 50 local jobs and injected transient failures. Use a fixed seed and keep evaluation cases separate.

**Output:** A queue worker with bounded retries and dead-letter records.

**Effort:** 10h · Beginner → intermediate

- **CI/CD, cloud deployment and rollback:** Extend the project with CI/CD, cloud deployment and rollback in Idempotent background worker. Adapt this focused lab to the project data: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.  Required concepts: CI/CD, Cloud and infrastructure, Rollback and migrations.
  - Deliverable: CI/CD, cloud deployment and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A queue worker with bounded retries and dead-letter records. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · CI/CD, cloud deployment and rollback: CI/CD, cloud deployment and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Duplicate delivery never duplicates the final output.
- [ ] CI/CD, cloud deployment and rollback: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reliability budget dashboard

An operator needs meaningful availability and latency indicators.

**Data:** Generate one day of synthetic request metrics with an outage. Use a fixed seed and keep evaluation cases separate.

**Output:** An SLO report with burn-rate alerts and investigation notes.

**Effort:** 10h · Beginner → intermediate

- **CI/CD, cloud deployment and rollback:** Extend the project with CI/CD, cloud deployment and rollback in Reliability budget dashboard. Adapt this focused lab to the project data: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.  Required concepts: CI/CD, Cloud and infrastructure, Rollback and migrations.
  - Deliverable: CI/CD, cloud deployment and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An SLO report with burn-rate alerts and investigation notes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · CI/CD, cloud deployment and rollback: CI/CD, cloud deployment and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compute error budget correctly and distinguish missing telemetry from success.
- [ ] CI/CD, cloud deployment and rollback: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Timeout budget simulator

An engineer needs to prevent retry storms across dependent calls.

**Data:** Create three local stubs with controllable delay and failure rates. Use a fixed seed and keep evaluation cases separate.

**Output:** A timeout/retry budget experiment.

**Effort:** 10h · Beginner → intermediate

- **CI/CD, cloud deployment and rollback:** Extend the project with CI/CD, cloud deployment and rollback in Timeout budget simulator. Adapt this focused lab to the project data: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.  Required concepts: CI/CD, Cloud and infrastructure, Rollback and migrations.
  - Deliverable: CI/CD, cloud deployment and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A timeout/retry budget experiment. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · CI/CD, cloud deployment and rollback: CI/CD, cloud deployment and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Total request duration stays bounded and attempts stay below the configured cap.
- [ ] CI/CD, cloud deployment and rollback: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Request trace investigation

A maintainer needs to follow one request across components.

**Data:** Generate requests with correlation IDs and seeded slow dependencies. Use a fixed seed and keep evaluation cases separate.

**Output:** Structured logs and a local trace report.

**Effort:** 10h · Beginner → intermediate

- **CI/CD, cloud deployment and rollback:** Extend the project with CI/CD, cloud deployment and rollback in Request trace investigation. Adapt this focused lab to the project data: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.  Required concepts: CI/CD, Cloud and infrastructure, Rollback and migrations.
  - Deliverable: CI/CD, cloud deployment and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Structured logs and a local trace report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · CI/CD, cloud deployment and rollback: CI/CD, cloud deployment and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Trace each request end to end without logging secrets or full private payloads.
- [ ] CI/CD, cloud deployment and rollback: Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Reliability and observability

<a id="deployment-queues"></a>

### Queues, async processing, retries and timeouts

Handle slow jobs and unreliable dependencies without duplicate work.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

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

### Timeout budget simulator

An engineer needs to prevent retry storms across dependent calls.

**Data:** Create three local stubs with controllable delay and failure rates. Use a fixed seed and keep evaluation cases separate.

**Output:** A timeout/retry budget experiment.

**Effort:** 10h · Beginner → intermediate

- **Queues, async processing, retries and timeouts:** Implement Queues, async processing, retries and timeouts in Timeout budget simulator. Adapt this focused lab to the project data: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.  Required concepts: Queues, Retries and idempotency, Timeouts and caching.
  - Deliverable: Queues, async processing, retries and timeouts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A timeout/retry budget experiment. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Queues, async processing, retries and timeouts: Queues, async processing, retries and timeouts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Total request duration stays bounded and attempts stay below the configured cap.
- [ ] Queues, async processing, retries and timeouts: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Offline quality pipeline

A team needs a repeatable test gate before packaging.

**Data:** Use a small project with one deliberately failing test. Use a fixed seed and keep evaluation cases separate.

**Output:** A CI configuration with local equivalent commands.

**Effort:** 10h · Beginner → intermediate

- **Queues, async processing, retries and timeouts:** Extend the project with Queues, async processing, retries and timeouts in Offline quality pipeline. Adapt this focused lab to the project data: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.  Required concepts: Queues, Retries and idempotency, Timeouts and caching.
  - Deliverable: Queues, async processing, retries and timeouts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A CI configuration with local equivalent commands. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Queues, async processing, retries and timeouts: Queues, async processing, retries and timeouts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The gate fails on the broken test and produces a versioned artifact only on success.
- [ ] Queues, async processing, retries and timeouts: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### API and database Compose lab

A developer needs reproducible service networking and persistence.

**Data:** Seed a local PostgreSQL database with fictional tasks. Use a fixed seed and keep evaluation cases separate.

**Output:** A Compose stack with isolated services and persistent data.

**Effort:** 10h · Beginner → intermediate

- **Queues, async processing, retries and timeouts:** Extend the project with Queues, async processing, retries and timeouts in API and database Compose lab. Adapt this focused lab to the project data: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.  Required concepts: Queues, Retries and idempotency, Timeouts and caching.
  - Deliverable: Queues, async processing, retries and timeouts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Compose stack with isolated services and persistent data. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Queues, async processing, retries and timeouts: Queues, async processing, retries and timeouts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restart containers without losing rows; API connects by service name.
- [ ] Queues, async processing, retries and timeouts: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible inference container

A teammate needs to start the same API on another machine.

**Data:** Use a tiny local FastAPI app and generated request fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A non-root Docker image with health check and smoke test.

**Effort:** 10h · Beginner → intermediate

- **Queues, async processing, retries and timeouts:** Extend the project with Queues, async processing, retries and timeouts in Reproducible inference container. Adapt this focused lab to the project data: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.  Required concepts: Queues, Retries and idempotency, Timeouts and caching.
  - Deliverable: Queues, async processing, retries and timeouts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A non-root Docker image with health check and smoke test. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Queues, async processing, retries and timeouts: Queues, async processing, retries and timeouts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Build cleanly, start on a configurable port and stop gracefully.
- [ ] Queues, async processing, retries and timeouts: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local inference efficiency ledger

A learner needs to compare caching and batching tradeoffs.

**Data:** Use repeated generated requests and a tiny CPU model. Use a fixed seed and keep evaluation cases separate.

**Output:** A benchmark of cached, uncached and batched inference.

**Effort:** 10h · Beginner → intermediate

- **Queues, async processing, retries and timeouts:** Extend the project with Queues, async processing, retries and timeouts in Local inference efficiency ledger. Adapt this focused lab to the project data: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.  Required concepts: Queues, Retries and idempotency, Timeouts and caching.
  - Deliverable: Queues, async processing, retries and timeouts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A benchmark of cached, uncached and batched inference. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Queues, async processing, retries and timeouts: Queues, async processing, retries and timeouts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report cache hit rate, memory and latency; verify outputs remain equivalent.
- [ ] Queues, async processing, retries and timeouts: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service capacity envelope

A builder needs to understand throughput on their own machine.

**Data:** Use a deterministic local endpoint and bounded load generator. Use a fixed seed and keep evaluation cases separate.

**Output:** A latency/throughput curve and saturation report.

**Effort:** 10h · Beginner → intermediate

- **Queues, async processing, retries and timeouts:** Extend the project with Queues, async processing, retries and timeouts in Service capacity envelope. Adapt this focused lab to the project data: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.  Required concepts: Queues, Retries and idempotency, Timeouts and caching.
  - Deliverable: Queues, async processing, retries and timeouts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A latency/throughput curve and saturation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Queues, async processing, retries and timeouts: Queues, async processing, retries and timeouts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report p50/p95, errors and machine specs without generalizing to production.
- [ ] Queues, async processing, retries and timeouts: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Idempotent background worker

An operator needs safe retry of failed jobs.

**Data:** Generate 50 local jobs and injected transient failures. Use a fixed seed and keep evaluation cases separate.

**Output:** A queue worker with bounded retries and dead-letter records.

**Effort:** 10h · Beginner → intermediate

- **Queues, async processing, retries and timeouts:** Extend the project with Queues, async processing, retries and timeouts in Idempotent background worker. Adapt this focused lab to the project data: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.  Required concepts: Queues, Retries and idempotency, Timeouts and caching.
  - Deliverable: Queues, async processing, retries and timeouts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A queue worker with bounded retries and dead-letter records. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Queues, async processing, retries and timeouts: Queues, async processing, retries and timeouts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Duplicate delivery never duplicates the final output.
- [ ] Queues, async processing, retries and timeouts: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Release rollback rehearsal

A maintainer needs a tested escape from a broken release.

**Data:** Build two local image versions, one with a failing health endpoint. Use a fixed seed and keep evaluation cases separate.

**Output:** A rollout checklist and executable local rollback drill.

**Effort:** 10h · Beginner → intermediate

- **Queues, async processing, retries and timeouts:** Extend the project with Queues, async processing, retries and timeouts in Release rollback rehearsal. Adapt this focused lab to the project data: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.  Required concepts: Queues, Retries and idempotency, Timeouts and caching.
  - Deliverable: Queues, async processing, retries and timeouts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A rollout checklist and executable local rollback drill. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Queues, async processing, retries and timeouts: Queues, async processing, retries and timeouts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restore healthy traffic and verify data compatibility after rollback.
- [ ] Queues, async processing, retries and timeouts: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reliability budget dashboard

An operator needs meaningful availability and latency indicators.

**Data:** Generate one day of synthetic request metrics with an outage. Use a fixed seed and keep evaluation cases separate.

**Output:** An SLO report with burn-rate alerts and investigation notes.

**Effort:** 10h · Beginner → intermediate

- **Queues, async processing, retries and timeouts:** Extend the project with Queues, async processing, retries and timeouts in Reliability budget dashboard. Adapt this focused lab to the project data: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.  Required concepts: Queues, Retries and idempotency, Timeouts and caching.
  - Deliverable: Queues, async processing, retries and timeouts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An SLO report with burn-rate alerts and investigation notes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Queues, async processing, retries and timeouts: Queues, async processing, retries and timeouts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compute error budget correctly and distinguish missing telemetry from success.
- [ ] Queues, async processing, retries and timeouts: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Request trace investigation

A maintainer needs to follow one request across components.

**Data:** Generate requests with correlation IDs and seeded slow dependencies. Use a fixed seed and keep evaluation cases separate.

**Output:** Structured logs and a local trace report.

**Effort:** 10h · Beginner → intermediate

- **Queues, async processing, retries and timeouts:** Extend the project with Queues, async processing, retries and timeouts in Request trace investigation. Adapt this focused lab to the project data: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.  Required concepts: Queues, Retries and idempotency, Timeouts and caching.
  - Deliverable: Queues, async processing, retries and timeouts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Structured logs and a local trace report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Queues, async processing, retries and timeouts: Queues, async processing, retries and timeouts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Trace each request end to end without logging secrets or full private payloads.
- [ ] Queues, async processing, retries and timeouts: Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="deployment-monitoring"></a>

### Logging, tracing, monitoring, alerts and incidents

Find failures using evidence and define actionable recovery steps.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

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

### Request trace investigation

A maintainer needs to follow one request across components.

**Data:** Generate requests with correlation IDs and seeded slow dependencies. Use a fixed seed and keep evaluation cases separate.

**Output:** Structured logs and a local trace report.

**Effort:** 10h · Beginner → intermediate

- **Logging, tracing, monitoring, alerts and incidents:** Implement Logging, tracing, monitoring, alerts and incidents in Request trace investigation. Adapt this focused lab to the project data: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.  Required concepts: Observability, Monitoring and alerts, Runbooks and incident response.
  - Deliverable: Logging, tracing, monitoring, alerts and incidents: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Structured logs and a local trace report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Logging, tracing, monitoring, alerts and incidents: Logging, tracing, monitoring, alerts and incidents: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Trace each request end to end without logging secrets or full private payloads.
- [ ] Logging, tracing, monitoring, alerts and incidents: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Offline quality pipeline

A team needs a repeatable test gate before packaging.

**Data:** Use a small project with one deliberately failing test. Use a fixed seed and keep evaluation cases separate.

**Output:** A CI configuration with local equivalent commands.

**Effort:** 10h · Beginner → intermediate

- **Logging, tracing, monitoring, alerts and incidents:** Extend the project with Logging, tracing, monitoring, alerts and incidents in Offline quality pipeline. Adapt this focused lab to the project data: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.  Required concepts: Observability, Monitoring and alerts, Runbooks and incident response.
  - Deliverable: Logging, tracing, monitoring, alerts and incidents: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A CI configuration with local equivalent commands. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Logging, tracing, monitoring, alerts and incidents: Logging, tracing, monitoring, alerts and incidents: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The gate fails on the broken test and produces a versioned artifact only on success.
- [ ] Logging, tracing, monitoring, alerts and incidents: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### API and database Compose lab

A developer needs reproducible service networking and persistence.

**Data:** Seed a local PostgreSQL database with fictional tasks. Use a fixed seed and keep evaluation cases separate.

**Output:** A Compose stack with isolated services and persistent data.

**Effort:** 10h · Beginner → intermediate

- **Logging, tracing, monitoring, alerts and incidents:** Extend the project with Logging, tracing, monitoring, alerts and incidents in API and database Compose lab. Adapt this focused lab to the project data: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.  Required concepts: Observability, Monitoring and alerts, Runbooks and incident response.
  - Deliverable: Logging, tracing, monitoring, alerts and incidents: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Compose stack with isolated services and persistent data. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Logging, tracing, monitoring, alerts and incidents: Logging, tracing, monitoring, alerts and incidents: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restart containers without losing rows; API connects by service name.
- [ ] Logging, tracing, monitoring, alerts and incidents: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible inference container

A teammate needs to start the same API on another machine.

**Data:** Use a tiny local FastAPI app and generated request fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A non-root Docker image with health check and smoke test.

**Effort:** 10h · Beginner → intermediate

- **Logging, tracing, monitoring, alerts and incidents:** Extend the project with Logging, tracing, monitoring, alerts and incidents in Reproducible inference container. Adapt this focused lab to the project data: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.  Required concepts: Observability, Monitoring and alerts, Runbooks and incident response.
  - Deliverable: Logging, tracing, monitoring, alerts and incidents: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A non-root Docker image with health check and smoke test. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Logging, tracing, monitoring, alerts and incidents: Logging, tracing, monitoring, alerts and incidents: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Build cleanly, start on a configurable port and stop gracefully.
- [ ] Logging, tracing, monitoring, alerts and incidents: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local inference efficiency ledger

A learner needs to compare caching and batching tradeoffs.

**Data:** Use repeated generated requests and a tiny CPU model. Use a fixed seed and keep evaluation cases separate.

**Output:** A benchmark of cached, uncached and batched inference.

**Effort:** 10h · Beginner → intermediate

- **Logging, tracing, monitoring, alerts and incidents:** Extend the project with Logging, tracing, monitoring, alerts and incidents in Local inference efficiency ledger. Adapt this focused lab to the project data: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.  Required concepts: Observability, Monitoring and alerts, Runbooks and incident response.
  - Deliverable: Logging, tracing, monitoring, alerts and incidents: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A benchmark of cached, uncached and batched inference. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Logging, tracing, monitoring, alerts and incidents: Logging, tracing, monitoring, alerts and incidents: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report cache hit rate, memory and latency; verify outputs remain equivalent.
- [ ] Logging, tracing, monitoring, alerts and incidents: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service capacity envelope

A builder needs to understand throughput on their own machine.

**Data:** Use a deterministic local endpoint and bounded load generator. Use a fixed seed and keep evaluation cases separate.

**Output:** A latency/throughput curve and saturation report.

**Effort:** 10h · Beginner → intermediate

- **Logging, tracing, monitoring, alerts and incidents:** Extend the project with Logging, tracing, monitoring, alerts and incidents in Service capacity envelope. Adapt this focused lab to the project data: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.  Required concepts: Observability, Monitoring and alerts, Runbooks and incident response.
  - Deliverable: Logging, tracing, monitoring, alerts and incidents: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A latency/throughput curve and saturation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Logging, tracing, monitoring, alerts and incidents: Logging, tracing, monitoring, alerts and incidents: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report p50/p95, errors and machine specs without generalizing to production.
- [ ] Logging, tracing, monitoring, alerts and incidents: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Idempotent background worker

An operator needs safe retry of failed jobs.

**Data:** Generate 50 local jobs and injected transient failures. Use a fixed seed and keep evaluation cases separate.

**Output:** A queue worker with bounded retries and dead-letter records.

**Effort:** 10h · Beginner → intermediate

- **Logging, tracing, monitoring, alerts and incidents:** Extend the project with Logging, tracing, monitoring, alerts and incidents in Idempotent background worker. Adapt this focused lab to the project data: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.  Required concepts: Observability, Monitoring and alerts, Runbooks and incident response.
  - Deliverable: Logging, tracing, monitoring, alerts and incidents: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A queue worker with bounded retries and dead-letter records. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Logging, tracing, monitoring, alerts and incidents: Logging, tracing, monitoring, alerts and incidents: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Duplicate delivery never duplicates the final output.
- [ ] Logging, tracing, monitoring, alerts and incidents: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Release rollback rehearsal

A maintainer needs a tested escape from a broken release.

**Data:** Build two local image versions, one with a failing health endpoint. Use a fixed seed and keep evaluation cases separate.

**Output:** A rollout checklist and executable local rollback drill.

**Effort:** 10h · Beginner → intermediate

- **Logging, tracing, monitoring, alerts and incidents:** Extend the project with Logging, tracing, monitoring, alerts and incidents in Release rollback rehearsal. Adapt this focused lab to the project data: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.  Required concepts: Observability, Monitoring and alerts, Runbooks and incident response.
  - Deliverable: Logging, tracing, monitoring, alerts and incidents: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A rollout checklist and executable local rollback drill. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Logging, tracing, monitoring, alerts and incidents: Logging, tracing, monitoring, alerts and incidents: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restore healthy traffic and verify data compatibility after rollback.
- [ ] Logging, tracing, monitoring, alerts and incidents: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reliability budget dashboard

An operator needs meaningful availability and latency indicators.

**Data:** Generate one day of synthetic request metrics with an outage. Use a fixed seed and keep evaluation cases separate.

**Output:** An SLO report with burn-rate alerts and investigation notes.

**Effort:** 10h · Beginner → intermediate

- **Logging, tracing, monitoring, alerts and incidents:** Extend the project with Logging, tracing, monitoring, alerts and incidents in Reliability budget dashboard. Adapt this focused lab to the project data: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.  Required concepts: Observability, Monitoring and alerts, Runbooks and incident response.
  - Deliverable: Logging, tracing, monitoring, alerts and incidents: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An SLO report with burn-rate alerts and investigation notes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Logging, tracing, monitoring, alerts and incidents: Logging, tracing, monitoring, alerts and incidents: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compute error budget correctly and distinguish missing telemetry from success.
- [ ] Logging, tracing, monitoring, alerts and incidents: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Timeout budget simulator

An engineer needs to prevent retry storms across dependent calls.

**Data:** Create three local stubs with controllable delay and failure rates. Use a fixed seed and keep evaluation cases separate.

**Output:** A timeout/retry budget experiment.

**Effort:** 10h · Beginner → intermediate

- **Logging, tracing, monitoring, alerts and incidents:** Extend the project with Logging, tracing, monitoring, alerts and incidents in Timeout budget simulator. Adapt this focused lab to the project data: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.  Required concepts: Observability, Monitoring and alerts, Runbooks and incident response.
  - Deliverable: Logging, tracing, monitoring, alerts and incidents: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A timeout/retry budget experiment. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Logging, tracing, monitoring, alerts and incidents: Logging, tracing, monitoring, alerts and incidents: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Total request duration stays bounded and attempts stay below the configured cap.
- [ ] Logging, tracing, monitoring, alerts and incidents: Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="deployment-scaling"></a>

### Architecture, load balancing, scalability and cost/latency

Measure system limits before adding complexity or expensive infrastructure.

**Priority:** Specialization · **Study:** 2h · **Practice:** 3h

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

### Local inference efficiency ledger

A learner needs to compare caching and batching tradeoffs.

**Data:** Use repeated generated requests and a tiny CPU model. Use a fixed seed and keep evaluation cases separate.

**Output:** A benchmark of cached, uncached and batched inference.

**Effort:** 10h · Beginner → intermediate

- **Architecture, load balancing, scalability and cost/latency:** Implement Architecture, load balancing, scalability and cost/latency in Local inference efficiency ledger. Adapt this focused lab to the project data: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.  Required concepts: Architecture and microservices, Load and scalability, Optimization and economics.
  - Deliverable: Architecture, load balancing, scalability and cost/latency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A benchmark of cached, uncached and batched inference. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Architecture, load balancing, scalability and cost/latency: Architecture, load balancing, scalability and cost/latency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report cache hit rate, memory and latency; verify outputs remain equivalent.
- [ ] Architecture, load balancing, scalability and cost/latency: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service capacity envelope

A builder needs to understand throughput on their own machine.

**Data:** Use a deterministic local endpoint and bounded load generator. Use a fixed seed and keep evaluation cases separate.

**Output:** A latency/throughput curve and saturation report.

**Effort:** 10h · Beginner → intermediate

- **Architecture, load balancing, scalability and cost/latency:** Implement Architecture, load balancing, scalability and cost/latency in Service capacity envelope. Adapt this focused lab to the project data: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.  Required concepts: Architecture and microservices, Load and scalability, Optimization and economics.
  - Deliverable: Architecture, load balancing, scalability and cost/latency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A latency/throughput curve and saturation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Architecture, load balancing, scalability and cost/latency: Architecture, load balancing, scalability and cost/latency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report p50/p95, errors and machine specs without generalizing to production.
- [ ] Architecture, load balancing, scalability and cost/latency: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Offline quality pipeline

A team needs a repeatable test gate before packaging.

**Data:** Use a small project with one deliberately failing test. Use a fixed seed and keep evaluation cases separate.

**Output:** A CI configuration with local equivalent commands.

**Effort:** 10h · Beginner → intermediate

- **Architecture, load balancing, scalability and cost/latency:** Extend the project with Architecture, load balancing, scalability and cost/latency in Offline quality pipeline. Adapt this focused lab to the project data: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.  Required concepts: Architecture and microservices, Load and scalability, Optimization and economics.
  - Deliverable: Architecture, load balancing, scalability and cost/latency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A CI configuration with local equivalent commands. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Architecture, load balancing, scalability and cost/latency: Architecture, load balancing, scalability and cost/latency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The gate fails on the broken test and produces a versioned artifact only on success.
- [ ] Architecture, load balancing, scalability and cost/latency: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### API and database Compose lab

A developer needs reproducible service networking and persistence.

**Data:** Seed a local PostgreSQL database with fictional tasks. Use a fixed seed and keep evaluation cases separate.

**Output:** A Compose stack with isolated services and persistent data.

**Effort:** 10h · Beginner → intermediate

- **Architecture, load balancing, scalability and cost/latency:** Extend the project with Architecture, load balancing, scalability and cost/latency in API and database Compose lab. Adapt this focused lab to the project data: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.  Required concepts: Architecture and microservices, Load and scalability, Optimization and economics.
  - Deliverable: Architecture, load balancing, scalability and cost/latency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Compose stack with isolated services and persistent data. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Architecture, load balancing, scalability and cost/latency: Architecture, load balancing, scalability and cost/latency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restart containers without losing rows; API connects by service name.
- [ ] Architecture, load balancing, scalability and cost/latency: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible inference container

A teammate needs to start the same API on another machine.

**Data:** Use a tiny local FastAPI app and generated request fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A non-root Docker image with health check and smoke test.

**Effort:** 10h · Beginner → intermediate

- **Architecture, load balancing, scalability and cost/latency:** Extend the project with Architecture, load balancing, scalability and cost/latency in Reproducible inference container. Adapt this focused lab to the project data: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.  Required concepts: Architecture and microservices, Load and scalability, Optimization and economics.
  - Deliverable: Architecture, load balancing, scalability and cost/latency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A non-root Docker image with health check and smoke test. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Architecture, load balancing, scalability and cost/latency: Architecture, load balancing, scalability and cost/latency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Build cleanly, start on a configurable port and stop gracefully.
- [ ] Architecture, load balancing, scalability and cost/latency: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Idempotent background worker

An operator needs safe retry of failed jobs.

**Data:** Generate 50 local jobs and injected transient failures. Use a fixed seed and keep evaluation cases separate.

**Output:** A queue worker with bounded retries and dead-letter records.

**Effort:** 10h · Beginner → intermediate

- **Architecture, load balancing, scalability and cost/latency:** Extend the project with Architecture, load balancing, scalability and cost/latency in Idempotent background worker. Adapt this focused lab to the project data: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.  Required concepts: Architecture and microservices, Load and scalability, Optimization and economics.
  - Deliverable: Architecture, load balancing, scalability and cost/latency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A queue worker with bounded retries and dead-letter records. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Architecture, load balancing, scalability and cost/latency: Architecture, load balancing, scalability and cost/latency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Duplicate delivery never duplicates the final output.
- [ ] Architecture, load balancing, scalability and cost/latency: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Release rollback rehearsal

A maintainer needs a tested escape from a broken release.

**Data:** Build two local image versions, one with a failing health endpoint. Use a fixed seed and keep evaluation cases separate.

**Output:** A rollout checklist and executable local rollback drill.

**Effort:** 10h · Beginner → intermediate

- **Architecture, load balancing, scalability and cost/latency:** Extend the project with Architecture, load balancing, scalability and cost/latency in Release rollback rehearsal. Adapt this focused lab to the project data: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.  Required concepts: Architecture and microservices, Load and scalability, Optimization and economics.
  - Deliverable: Architecture, load balancing, scalability and cost/latency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A rollout checklist and executable local rollback drill. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Architecture, load balancing, scalability and cost/latency: Architecture, load balancing, scalability and cost/latency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restore healthy traffic and verify data compatibility after rollback.
- [ ] Architecture, load balancing, scalability and cost/latency: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reliability budget dashboard

An operator needs meaningful availability and latency indicators.

**Data:** Generate one day of synthetic request metrics with an outage. Use a fixed seed and keep evaluation cases separate.

**Output:** An SLO report with burn-rate alerts and investigation notes.

**Effort:** 10h · Beginner → intermediate

- **Architecture, load balancing, scalability and cost/latency:** Extend the project with Architecture, load balancing, scalability and cost/latency in Reliability budget dashboard. Adapt this focused lab to the project data: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.  Required concepts: Architecture and microservices, Load and scalability, Optimization and economics.
  - Deliverable: Architecture, load balancing, scalability and cost/latency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An SLO report with burn-rate alerts and investigation notes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Architecture, load balancing, scalability and cost/latency: Architecture, load balancing, scalability and cost/latency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compute error budget correctly and distinguish missing telemetry from success.
- [ ] Architecture, load balancing, scalability and cost/latency: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Timeout budget simulator

An engineer needs to prevent retry storms across dependent calls.

**Data:** Create three local stubs with controllable delay and failure rates. Use a fixed seed and keep evaluation cases separate.

**Output:** A timeout/retry budget experiment.

**Effort:** 10h · Beginner → intermediate

- **Architecture, load balancing, scalability and cost/latency:** Extend the project with Architecture, load balancing, scalability and cost/latency in Timeout budget simulator. Adapt this focused lab to the project data: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.  Required concepts: Architecture and microservices, Load and scalability, Optimization and economics.
  - Deliverable: Architecture, load balancing, scalability and cost/latency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A timeout/retry budget experiment. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Architecture, load balancing, scalability and cost/latency: Architecture, load balancing, scalability and cost/latency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Total request duration stays bounded and attempts stay below the configured cap.
- [ ] Architecture, load balancing, scalability and cost/latency: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Request trace investigation

A maintainer needs to follow one request across components.

**Data:** Generate requests with correlation IDs and seeded slow dependencies. Use a fixed seed and keep evaluation cases separate.

**Output:** Structured logs and a local trace report.

**Effort:** 10h · Beginner → intermediate

- **Architecture, load balancing, scalability and cost/latency:** Extend the project with Architecture, load balancing, scalability and cost/latency in Request trace investigation. Adapt this focused lab to the project data: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.  Required concepts: Architecture and microservices, Load and scalability, Optimization and economics.
  - Deliverable: Architecture, load balancing, scalability and cost/latency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Structured logs and a local trace report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Architecture, load balancing, scalability and cost/latency: Architecture, load balancing, scalability and cost/latency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Trace each request end to end without logging secrets or full private payloads.
- [ ] Architecture, load balancing, scalability and cost/latency: Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Reliable operations in detail

<a id="deployment-jobs-retries"></a>

### Durable jobs, backoff, deduplication and overload

Make background ingestion recover from retries without duplicate effects or unlimited work.

**Priority:** Essential · **Study:** 3h · **Practice:** 4h

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

### Idempotent background worker

An operator needs safe retry of failed jobs.

**Data:** Generate 50 local jobs and injected transient failures. Use a fixed seed and keep evaluation cases separate.

**Output:** A queue worker with bounded retries and dead-letter records.

**Effort:** 10h · Beginner → intermediate

- **Durable jobs, backoff, deduplication and overload:** Implement Durable jobs, backoff, deduplication and overload in Idempotent background worker. Adapt this focused lab to the project data: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.  Required concepts: At-least-once delivery, Exponential backoff and jitter, Transient versus permanent errors, Deduplication transaction, Backpressure and capacity.
  - Deliverable: Durable jobs, backoff, deduplication and overload: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A queue worker with bounded retries and dead-letter records. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Durable jobs, backoff, deduplication and overload: Durable jobs, backoff, deduplication and overload: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Duplicate delivery never duplicates the final output.
- [ ] Durable jobs, backoff, deduplication and overload: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Offline quality pipeline

A team needs a repeatable test gate before packaging.

**Data:** Use a small project with one deliberately failing test. Use a fixed seed and keep evaluation cases separate.

**Output:** A CI configuration with local equivalent commands.

**Effort:** 10h · Beginner → intermediate

- **Durable jobs, backoff, deduplication and overload:** Extend the project with Durable jobs, backoff, deduplication and overload in Offline quality pipeline. Adapt this focused lab to the project data: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.  Required concepts: At-least-once delivery, Exponential backoff and jitter, Transient versus permanent errors, Deduplication transaction, Backpressure and capacity.
  - Deliverable: Durable jobs, backoff, deduplication and overload: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A CI configuration with local equivalent commands. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Durable jobs, backoff, deduplication and overload: Durable jobs, backoff, deduplication and overload: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The gate fails on the broken test and produces a versioned artifact only on success.
- [ ] Durable jobs, backoff, deduplication and overload: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### API and database Compose lab

A developer needs reproducible service networking and persistence.

**Data:** Seed a local PostgreSQL database with fictional tasks. Use a fixed seed and keep evaluation cases separate.

**Output:** A Compose stack with isolated services and persistent data.

**Effort:** 10h · Beginner → intermediate

- **Durable jobs, backoff, deduplication and overload:** Extend the project with Durable jobs, backoff, deduplication and overload in API and database Compose lab. Adapt this focused lab to the project data: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.  Required concepts: At-least-once delivery, Exponential backoff and jitter, Transient versus permanent errors, Deduplication transaction, Backpressure and capacity.
  - Deliverable: Durable jobs, backoff, deduplication and overload: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Compose stack with isolated services and persistent data. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Durable jobs, backoff, deduplication and overload: Durable jobs, backoff, deduplication and overload: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restart containers without losing rows; API connects by service name.
- [ ] Durable jobs, backoff, deduplication and overload: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible inference container

A teammate needs to start the same API on another machine.

**Data:** Use a tiny local FastAPI app and generated request fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A non-root Docker image with health check and smoke test.

**Effort:** 10h · Beginner → intermediate

- **Durable jobs, backoff, deduplication and overload:** Extend the project with Durable jobs, backoff, deduplication and overload in Reproducible inference container. Adapt this focused lab to the project data: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.  Required concepts: At-least-once delivery, Exponential backoff and jitter, Transient versus permanent errors, Deduplication transaction, Backpressure and capacity.
  - Deliverable: Durable jobs, backoff, deduplication and overload: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A non-root Docker image with health check and smoke test. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Durable jobs, backoff, deduplication and overload: Durable jobs, backoff, deduplication and overload: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Build cleanly, start on a configurable port and stop gracefully.
- [ ] Durable jobs, backoff, deduplication and overload: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local inference efficiency ledger

A learner needs to compare caching and batching tradeoffs.

**Data:** Use repeated generated requests and a tiny CPU model. Use a fixed seed and keep evaluation cases separate.

**Output:** A benchmark of cached, uncached and batched inference.

**Effort:** 10h · Beginner → intermediate

- **Durable jobs, backoff, deduplication and overload:** Extend the project with Durable jobs, backoff, deduplication and overload in Local inference efficiency ledger. Adapt this focused lab to the project data: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.  Required concepts: At-least-once delivery, Exponential backoff and jitter, Transient versus permanent errors, Deduplication transaction, Backpressure and capacity.
  - Deliverable: Durable jobs, backoff, deduplication and overload: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A benchmark of cached, uncached and batched inference. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Durable jobs, backoff, deduplication and overload: Durable jobs, backoff, deduplication and overload: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report cache hit rate, memory and latency; verify outputs remain equivalent.
- [ ] Durable jobs, backoff, deduplication and overload: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service capacity envelope

A builder needs to understand throughput on their own machine.

**Data:** Use a deterministic local endpoint and bounded load generator. Use a fixed seed and keep evaluation cases separate.

**Output:** A latency/throughput curve and saturation report.

**Effort:** 10h · Beginner → intermediate

- **Durable jobs, backoff, deduplication and overload:** Extend the project with Durable jobs, backoff, deduplication and overload in Service capacity envelope. Adapt this focused lab to the project data: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.  Required concepts: At-least-once delivery, Exponential backoff and jitter, Transient versus permanent errors, Deduplication transaction, Backpressure and capacity.
  - Deliverable: Durable jobs, backoff, deduplication and overload: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A latency/throughput curve and saturation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Durable jobs, backoff, deduplication and overload: Durable jobs, backoff, deduplication and overload: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report p50/p95, errors and machine specs without generalizing to production.
- [ ] Durable jobs, backoff, deduplication and overload: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Release rollback rehearsal

A maintainer needs a tested escape from a broken release.

**Data:** Build two local image versions, one with a failing health endpoint. Use a fixed seed and keep evaluation cases separate.

**Output:** A rollout checklist and executable local rollback drill.

**Effort:** 10h · Beginner → intermediate

- **Durable jobs, backoff, deduplication and overload:** Extend the project with Durable jobs, backoff, deduplication and overload in Release rollback rehearsal. Adapt this focused lab to the project data: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.  Required concepts: At-least-once delivery, Exponential backoff and jitter, Transient versus permanent errors, Deduplication transaction, Backpressure and capacity.
  - Deliverable: Durable jobs, backoff, deduplication and overload: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A rollout checklist and executable local rollback drill. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Durable jobs, backoff, deduplication and overload: Durable jobs, backoff, deduplication and overload: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restore healthy traffic and verify data compatibility after rollback.
- [ ] Durable jobs, backoff, deduplication and overload: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reliability budget dashboard

An operator needs meaningful availability and latency indicators.

**Data:** Generate one day of synthetic request metrics with an outage. Use a fixed seed and keep evaluation cases separate.

**Output:** An SLO report with burn-rate alerts and investigation notes.

**Effort:** 10h · Beginner → intermediate

- **Durable jobs, backoff, deduplication and overload:** Extend the project with Durable jobs, backoff, deduplication and overload in Reliability budget dashboard. Adapt this focused lab to the project data: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.  Required concepts: At-least-once delivery, Exponential backoff and jitter, Transient versus permanent errors, Deduplication transaction, Backpressure and capacity.
  - Deliverable: Durable jobs, backoff, deduplication and overload: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An SLO report with burn-rate alerts and investigation notes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Durable jobs, backoff, deduplication and overload: Durable jobs, backoff, deduplication and overload: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compute error budget correctly and distinguish missing telemetry from success.
- [ ] Durable jobs, backoff, deduplication and overload: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Timeout budget simulator

An engineer needs to prevent retry storms across dependent calls.

**Data:** Create three local stubs with controllable delay and failure rates. Use a fixed seed and keep evaluation cases separate.

**Output:** A timeout/retry budget experiment.

**Effort:** 10h · Beginner → intermediate

- **Durable jobs, backoff, deduplication and overload:** Extend the project with Durable jobs, backoff, deduplication and overload in Timeout budget simulator. Adapt this focused lab to the project data: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.  Required concepts: At-least-once delivery, Exponential backoff and jitter, Transient versus permanent errors, Deduplication transaction, Backpressure and capacity.
  - Deliverable: Durable jobs, backoff, deduplication and overload: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A timeout/retry budget experiment. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Durable jobs, backoff, deduplication and overload: Durable jobs, backoff, deduplication and overload: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Total request duration stays bounded and attempts stay below the configured cap.
- [ ] Durable jobs, backoff, deduplication and overload: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Request trace investigation

A maintainer needs to follow one request across components.

**Data:** Generate requests with correlation IDs and seeded slow dependencies. Use a fixed seed and keep evaluation cases separate.

**Output:** Structured logs and a local trace report.

**Effort:** 10h · Beginner → intermediate

- **Durable jobs, backoff, deduplication and overload:** Extend the project with Durable jobs, backoff, deduplication and overload in Request trace investigation. Adapt this focused lab to the project data: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.  Required concepts: At-least-once delivery, Exponential backoff and jitter, Transient versus permanent errors, Deduplication transaction, Backpressure and capacity.
  - Deliverable: Durable jobs, backoff, deduplication and overload: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Structured logs and a local trace report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Durable jobs, backoff, deduplication and overload: Durable jobs, backoff, deduplication and overload: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Trace each request end to end without logging secrets or full private payloads.
- [ ] Durable jobs, backoff, deduplication and overload: Build a CPU worker using a local SQLite job table or a bounded Python queue. Inject duplicate deliveries, transient failures and a crash; record retry delays and prove that one ingestion key produces one logical result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="deployment-observability-slos"></a>

### Service objectives, traces, latency percentiles and rollback

Turn operational telemetry into concrete user-facing reliability decisions rather than collecting logs without a purpose.

**Priority:** Essential · **Study:** 3h · **Practice:** 4h

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

### Reliability budget dashboard

An operator needs meaningful availability and latency indicators.

**Data:** Generate one day of synthetic request metrics with an outage. Use a fixed seed and keep evaluation cases separate.

**Output:** An SLO report with burn-rate alerts and investigation notes.

**Effort:** 10h · Beginner → intermediate

- **Service objectives, traces, latency percentiles and rollback:** Implement Service objectives, traces, latency percentiles and rollback in Reliability budget dashboard. Adapt this focused lab to the project data: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.  Required concepts: SLI versus SLO, Latency percentiles, Trace correlation, Low-cardinality labels, Release and rollback criteria.
  - Deliverable: Service objectives, traces, latency percentiles and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An SLO report with burn-rate alerts and investigation notes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Service objectives, traces, latency percentiles and rollback: Service objectives, traces, latency percentiles and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compute error budget correctly and distinguish missing telemetry from success.
- [ ] Service objectives, traces, latency percentiles and rollback: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Offline quality pipeline

A team needs a repeatable test gate before packaging.

**Data:** Use a small project with one deliberately failing test. Use a fixed seed and keep evaluation cases separate.

**Output:** A CI configuration with local equivalent commands.

**Effort:** 10h · Beginner → intermediate

- **Service objectives, traces, latency percentiles and rollback:** Extend the project with Service objectives, traces, latency percentiles and rollback in Offline quality pipeline. Adapt this focused lab to the project data: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.  Required concepts: SLI versus SLO, Latency percentiles, Trace correlation, Low-cardinality labels, Release and rollback criteria.
  - Deliverable: Service objectives, traces, latency percentiles and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A CI configuration with local equivalent commands. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Service objectives, traces, latency percentiles and rollback: Service objectives, traces, latency percentiles and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The gate fails on the broken test and produces a versioned artifact only on success.
- [ ] Service objectives, traces, latency percentiles and rollback: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### API and database Compose lab

A developer needs reproducible service networking and persistence.

**Data:** Seed a local PostgreSQL database with fictional tasks. Use a fixed seed and keep evaluation cases separate.

**Output:** A Compose stack with isolated services and persistent data.

**Effort:** 10h · Beginner → intermediate

- **Service objectives, traces, latency percentiles and rollback:** Extend the project with Service objectives, traces, latency percentiles and rollback in API and database Compose lab. Adapt this focused lab to the project data: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.  Required concepts: SLI versus SLO, Latency percentiles, Trace correlation, Low-cardinality labels, Release and rollback criteria.
  - Deliverable: Service objectives, traces, latency percentiles and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Compose stack with isolated services and persistent data. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Service objectives, traces, latency percentiles and rollback: Service objectives, traces, latency percentiles and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restart containers without losing rows; API connects by service name.
- [ ] Service objectives, traces, latency percentiles and rollback: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible inference container

A teammate needs to start the same API on another machine.

**Data:** Use a tiny local FastAPI app and generated request fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A non-root Docker image with health check and smoke test.

**Effort:** 10h · Beginner → intermediate

- **Service objectives, traces, latency percentiles and rollback:** Extend the project with Service objectives, traces, latency percentiles and rollback in Reproducible inference container. Adapt this focused lab to the project data: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.  Required concepts: SLI versus SLO, Latency percentiles, Trace correlation, Low-cardinality labels, Release and rollback criteria.
  - Deliverable: Service objectives, traces, latency percentiles and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A non-root Docker image with health check and smoke test. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Service objectives, traces, latency percentiles and rollback: Service objectives, traces, latency percentiles and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Build cleanly, start on a configurable port and stop gracefully.
- [ ] Service objectives, traces, latency percentiles and rollback: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local inference efficiency ledger

A learner needs to compare caching and batching tradeoffs.

**Data:** Use repeated generated requests and a tiny CPU model. Use a fixed seed and keep evaluation cases separate.

**Output:** A benchmark of cached, uncached and batched inference.

**Effort:** 10h · Beginner → intermediate

- **Service objectives, traces, latency percentiles and rollback:** Extend the project with Service objectives, traces, latency percentiles and rollback in Local inference efficiency ledger. Adapt this focused lab to the project data: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.  Required concepts: SLI versus SLO, Latency percentiles, Trace correlation, Low-cardinality labels, Release and rollback criteria.
  - Deliverable: Service objectives, traces, latency percentiles and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A benchmark of cached, uncached and batched inference. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Service objectives, traces, latency percentiles and rollback: Service objectives, traces, latency percentiles and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report cache hit rate, memory and latency; verify outputs remain equivalent.
- [ ] Service objectives, traces, latency percentiles and rollback: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service capacity envelope

A builder needs to understand throughput on their own machine.

**Data:** Use a deterministic local endpoint and bounded load generator. Use a fixed seed and keep evaluation cases separate.

**Output:** A latency/throughput curve and saturation report.

**Effort:** 10h · Beginner → intermediate

- **Service objectives, traces, latency percentiles and rollback:** Extend the project with Service objectives, traces, latency percentiles and rollback in Service capacity envelope. Adapt this focused lab to the project data: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.  Required concepts: SLI versus SLO, Latency percentiles, Trace correlation, Low-cardinality labels, Release and rollback criteria.
  - Deliverable: Service objectives, traces, latency percentiles and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A latency/throughput curve and saturation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Service objectives, traces, latency percentiles and rollback: Service objectives, traces, latency percentiles and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report p50/p95, errors and machine specs without generalizing to production.
- [ ] Service objectives, traces, latency percentiles and rollback: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Idempotent background worker

An operator needs safe retry of failed jobs.

**Data:** Generate 50 local jobs and injected transient failures. Use a fixed seed and keep evaluation cases separate.

**Output:** A queue worker with bounded retries and dead-letter records.

**Effort:** 10h · Beginner → intermediate

- **Service objectives, traces, latency percentiles and rollback:** Extend the project with Service objectives, traces, latency percentiles and rollback in Idempotent background worker. Adapt this focused lab to the project data: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.  Required concepts: SLI versus SLO, Latency percentiles, Trace correlation, Low-cardinality labels, Release and rollback criteria.
  - Deliverable: Service objectives, traces, latency percentiles and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A queue worker with bounded retries and dead-letter records. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Service objectives, traces, latency percentiles and rollback: Service objectives, traces, latency percentiles and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Duplicate delivery never duplicates the final output.
- [ ] Service objectives, traces, latency percentiles and rollback: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Release rollback rehearsal

A maintainer needs a tested escape from a broken release.

**Data:** Build two local image versions, one with a failing health endpoint. Use a fixed seed and keep evaluation cases separate.

**Output:** A rollout checklist and executable local rollback drill.

**Effort:** 10h · Beginner → intermediate

- **Service objectives, traces, latency percentiles and rollback:** Extend the project with Service objectives, traces, latency percentiles and rollback in Release rollback rehearsal. Adapt this focused lab to the project data: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.  Required concepts: SLI versus SLO, Latency percentiles, Trace correlation, Low-cardinality labels, Release and rollback criteria.
  - Deliverable: Service objectives, traces, latency percentiles and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A rollout checklist and executable local rollback drill. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Service objectives, traces, latency percentiles and rollback: Service objectives, traces, latency percentiles and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restore healthy traffic and verify data compatibility after rollback.
- [ ] Service objectives, traces, latency percentiles and rollback: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Timeout budget simulator

An engineer needs to prevent retry storms across dependent calls.

**Data:** Create three local stubs with controllable delay and failure rates. Use a fixed seed and keep evaluation cases separate.

**Output:** A timeout/retry budget experiment.

**Effort:** 10h · Beginner → intermediate

- **Service objectives, traces, latency percentiles and rollback:** Extend the project with Service objectives, traces, latency percentiles and rollback in Timeout budget simulator. Adapt this focused lab to the project data: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.  Required concepts: SLI versus SLO, Latency percentiles, Trace correlation, Low-cardinality labels, Release and rollback criteria.
  - Deliverable: Service objectives, traces, latency percentiles and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A timeout/retry budget experiment. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Service objectives, traces, latency percentiles and rollback: Service objectives, traces, latency percentiles and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Total request duration stays bounded and attempts stay below the configured cap.
- [ ] Service objectives, traces, latency percentiles and rollback: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Request trace investigation

A maintainer needs to follow one request across components.

**Data:** Generate requests with correlation IDs and seeded slow dependencies. Use a fixed seed and keep evaluation cases separate.

**Output:** Structured logs and a local trace report.

**Effort:** 10h · Beginner → intermediate

- **Service objectives, traces, latency percentiles and rollback:** Extend the project with Service objectives, traces, latency percentiles and rollback in Request trace investigation. Adapt this focused lab to the project data: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.  Required concepts: SLI versus SLO, Latency percentiles, Trace correlation, Low-cardinality labels, Release and rollback criteria.
  - Deliverable: Service objectives, traces, latency percentiles and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Structured logs and a local trace report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Service objectives, traces, latency percentiles and rollback: Service objectives, traces, latency percentiles and rollback: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Trace each request end to end without logging secrets or full private payloads.
- [ ] Service objectives, traces, latency percentiles and rollback: Instrument a local fake inference service with request IDs, stage timings and error counters. Analyse generated latency records, define an SLO with clear scope and write a tested rollback decision using recorded release metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Backup, restore and data recovery drills

<a id="deployment-backup-restore"></a>

### Backup, restore and data recovery drills

Backup, restore and data recovery drills helps you make explainable engineering decisions and test failure cases. Build the experiment below before relying on the concept in an AI system.

**Priority:** Essential · **Study:** 4h · **Practice:** 5h

**Prerequisites:** [Volumes, networks and Docker Compose](deployment.md#docker-compose) Navigation is unrestricted.

#### Concepts

- [ ] **Recovery point objective:** RPO describes the tolerated loss window, not the time needed to restart a process.
  - Example: Compare hourly and daily backups against a two-hour loss tolerance.
  - Videos:
    - [Incident management: SRE implements DevOps](https://www.youtube.com/watch?v=n4y9dwinPBQ) · Google Cloud Tech · Focused lecture
      - Explains: Incident roles, response process and learning after failures.
      - Useful because: Rehearse your runbook on a local outage and document what changed.
      - Watch for: Focus on recovery point objective. Then reproduce the lesson example: Compare hourly and daily backups against a two-hour loss tolerance.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=n4y9dwinPBQ
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on recovery point objective. Then reproduce the lesson example: Compare hourly and daily backups against a two-hour loss tolerance.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Recovery time objective:** RTO bounds acceptable restoration duration including validation.
  - Example: Time a restore into a clean local database and run a query smoke test.
  - Videos:
    - [Incident management: SRE implements DevOps](https://www.youtube.com/watch?v=n4y9dwinPBQ) · Google Cloud Tech · Focused lecture
      - Explains: Incident roles, response process and learning after failures.
      - Useful because: Rehearse your runbook on a local outage and document what changed.
      - Watch for: Focus on recovery time objective. Then reproduce the lesson example: Time a restore into a clean local database and run a query smoke test.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=n4y9dwinPBQ
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on recovery time objective. Then reproduce the lesson example: Time a restore into a clean local database and run a query smoke test.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Consistent backups:** A backup must represent a recoverable database state rather than an arbitrary copy during writes.
  - Example: Use the database backup mechanism and compare with a naive live file copy.
  - Videos:
    - [Incident management: SRE implements DevOps](https://www.youtube.com/watch?v=n4y9dwinPBQ) · Google Cloud Tech · Focused lecture
      - Explains: Incident roles, response process and learning after failures.
      - Useful because: Rehearse your runbook on a local outage and document what changed.
      - Watch for: Focus on consistent backups. Then reproduce the lesson example: Use the database backup mechanism and compare with a naive live file copy.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=n4y9dwinPBQ
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on consistent backups. Then reproduce the lesson example: Use the database backup mechanism and compare with a naive live file copy.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Restore verification:** A backup is useful only if it can be restored and checked.
  - Example: Verify expected rows, constraints and application queries after restoration.
  - Videos:
    - [Incident management: SRE implements DevOps](https://www.youtube.com/watch?v=n4y9dwinPBQ) · Google Cloud Tech · Focused lecture
      - Explains: Incident roles, response process and learning after failures.
      - Useful because: Rehearse your runbook on a local outage and document what changed.
      - Watch for: Focus on restore verification. Then reproduce the lesson example: Verify expected rows, constraints and application queries after restoration.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=n4y9dwinPBQ
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on restore verification. Then reproduce the lesson example: Verify expected rows, constraints and application queries after restoration.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Retention and access:** Backup retention and permissions should match data sensitivity and recovery needs.
  - Example: Keep two disposable generations and restrict access to the test backup folder.
  - Videos:
    - [Incident management: SRE implements DevOps](https://www.youtube.com/watch?v=n4y9dwinPBQ) · Google Cloud Tech · Focused lecture
      - Explains: Incident roles, response process and learning after failures.
      - Useful because: Rehearse your runbook on a local outage and document what changed.
      - Watch for: Focus on retention and access. Then reproduce the lesson example: Keep two disposable generations and restrict access to the test backup folder.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=n4y9dwinPBQ
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on retention and access. Then reproduce the lesson example: Keep two disposable generations and restrict access to the test backup folder.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/

#### YouTube: focused explanations and full courses

- [Incident management: SRE implements DevOps](https://www.youtube.com/watch?v=n4y9dwinPBQ) · Google Cloud Tech · Focused lecture
  - Explains: Incident roles, response process and learning after failures.
  - Useful because: Rehearse your runbook on a local outage and document what changed.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=n4y9dwinPBQ
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

1. [Official reference: Backup, restore and data recovery drills](https://www.postgresql.org/docs/current/backup.html) — Free reading; no registration required. Use the local CPU exercise; optional hosted services and downloads are not required..
2. [Docker: Compose getting started](https://docs.docker.com/compose/gettingstarted/) — Free; no registration required. No paid materials required.

#### Lab: Backup, restore and data recovery drills

Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.

**Deliverables**

- Runnable CPU notebook or script with deterministic fixtures
- Measured outputs, failure cases and a README explaining decisions

**Completion checks**

- [ ] Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.
- [ ] Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

#### Ten project recommendations

### Offline quality pipeline

A team needs a repeatable test gate before packaging.

**Data:** Use a small project with one deliberately failing test. Use a fixed seed and keep evaluation cases separate.

**Output:** A CI configuration with local equivalent commands.

**Effort:** 10h · Beginner → intermediate

- **Backup, restore and data recovery drills:** Extend the project with Backup, restore and data recovery drills in Offline quality pipeline. Adapt this focused lab to the project data: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.  Required concepts: Recovery point objective, Recovery time objective, Consistent backups, Restore verification, Retention and access.
  - Deliverable: Backup, restore and data recovery drills: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A CI configuration with local equivalent commands. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Backup, restore and data recovery drills: Backup, restore and data recovery drills: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The gate fails on the broken test and produces a versioned artifact only on success.
- [ ] Backup, restore and data recovery drills: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### API and database Compose lab

A developer needs reproducible service networking and persistence.

**Data:** Seed a local PostgreSQL database with fictional tasks. Use a fixed seed and keep evaluation cases separate.

**Output:** A Compose stack with isolated services and persistent data.

**Effort:** 10h · Beginner → intermediate

- **Backup, restore and data recovery drills:** Extend the project with Backup, restore and data recovery drills in API and database Compose lab. Adapt this focused lab to the project data: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.  Required concepts: Recovery point objective, Recovery time objective, Consistent backups, Restore verification, Retention and access.
  - Deliverable: Backup, restore and data recovery drills: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Compose stack with isolated services and persistent data. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Backup, restore and data recovery drills: Backup, restore and data recovery drills: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restart containers without losing rows; API connects by service name.
- [ ] Backup, restore and data recovery drills: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible inference container

A teammate needs to start the same API on another machine.

**Data:** Use a tiny local FastAPI app and generated request fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A non-root Docker image with health check and smoke test.

**Effort:** 10h · Beginner → intermediate

- **Backup, restore and data recovery drills:** Extend the project with Backup, restore and data recovery drills in Reproducible inference container. Adapt this focused lab to the project data: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.  Required concepts: Recovery point objective, Recovery time objective, Consistent backups, Restore verification, Retention and access.
  - Deliverable: Backup, restore and data recovery drills: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A non-root Docker image with health check and smoke test. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Backup, restore and data recovery drills: Backup, restore and data recovery drills: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Build cleanly, start on a configurable port and stop gracefully.
- [ ] Backup, restore and data recovery drills: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local inference efficiency ledger

A learner needs to compare caching and batching tradeoffs.

**Data:** Use repeated generated requests and a tiny CPU model. Use a fixed seed and keep evaluation cases separate.

**Output:** A benchmark of cached, uncached and batched inference.

**Effort:** 10h · Beginner → intermediate

- **Backup, restore and data recovery drills:** Extend the project with Backup, restore and data recovery drills in Local inference efficiency ledger. Adapt this focused lab to the project data: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.  Required concepts: Recovery point objective, Recovery time objective, Consistent backups, Restore verification, Retention and access.
  - Deliverable: Backup, restore and data recovery drills: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A benchmark of cached, uncached and batched inference. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Backup, restore and data recovery drills: Backup, restore and data recovery drills: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report cache hit rate, memory and latency; verify outputs remain equivalent.
- [ ] Backup, restore and data recovery drills: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service capacity envelope

A builder needs to understand throughput on their own machine.

**Data:** Use a deterministic local endpoint and bounded load generator. Use a fixed seed and keep evaluation cases separate.

**Output:** A latency/throughput curve and saturation report.

**Effort:** 10h · Beginner → intermediate

- **Backup, restore and data recovery drills:** Extend the project with Backup, restore and data recovery drills in Service capacity envelope. Adapt this focused lab to the project data: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.  Required concepts: Recovery point objective, Recovery time objective, Consistent backups, Restore verification, Retention and access.
  - Deliverable: Backup, restore and data recovery drills: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A latency/throughput curve and saturation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Backup, restore and data recovery drills: Backup, restore and data recovery drills: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report p50/p95, errors and machine specs without generalizing to production.
- [ ] Backup, restore and data recovery drills: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Idempotent background worker

An operator needs safe retry of failed jobs.

**Data:** Generate 50 local jobs and injected transient failures. Use a fixed seed and keep evaluation cases separate.

**Output:** A queue worker with bounded retries and dead-letter records.

**Effort:** 10h · Beginner → intermediate

- **Backup, restore and data recovery drills:** Extend the project with Backup, restore and data recovery drills in Idempotent background worker. Adapt this focused lab to the project data: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.  Required concepts: Recovery point objective, Recovery time objective, Consistent backups, Restore verification, Retention and access.
  - Deliverable: Backup, restore and data recovery drills: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A queue worker with bounded retries and dead-letter records. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Backup, restore and data recovery drills: Backup, restore and data recovery drills: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Duplicate delivery never duplicates the final output.
- [ ] Backup, restore and data recovery drills: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Release rollback rehearsal

A maintainer needs a tested escape from a broken release.

**Data:** Build two local image versions, one with a failing health endpoint. Use a fixed seed and keep evaluation cases separate.

**Output:** A rollout checklist and executable local rollback drill.

**Effort:** 10h · Beginner → intermediate

- **Backup, restore and data recovery drills:** Extend the project with Backup, restore and data recovery drills in Release rollback rehearsal. Adapt this focused lab to the project data: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.  Required concepts: Recovery point objective, Recovery time objective, Consistent backups, Restore verification, Retention and access.
  - Deliverable: Backup, restore and data recovery drills: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A rollout checklist and executable local rollback drill. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Backup, restore and data recovery drills: Backup, restore and data recovery drills: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restore healthy traffic and verify data compatibility after rollback.
- [ ] Backup, restore and data recovery drills: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reliability budget dashboard

An operator needs meaningful availability and latency indicators.

**Data:** Generate one day of synthetic request metrics with an outage. Use a fixed seed and keep evaluation cases separate.

**Output:** An SLO report with burn-rate alerts and investigation notes.

**Effort:** 10h · Beginner → intermediate

- **Backup, restore and data recovery drills:** Extend the project with Backup, restore and data recovery drills in Reliability budget dashboard. Adapt this focused lab to the project data: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.  Required concepts: Recovery point objective, Recovery time objective, Consistent backups, Restore verification, Retention and access.
  - Deliverable: Backup, restore and data recovery drills: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An SLO report with burn-rate alerts and investigation notes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Backup, restore and data recovery drills: Backup, restore and data recovery drills: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compute error budget correctly and distinguish missing telemetry from success.
- [ ] Backup, restore and data recovery drills: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Timeout budget simulator

An engineer needs to prevent retry storms across dependent calls.

**Data:** Create three local stubs with controllable delay and failure rates. Use a fixed seed and keep evaluation cases separate.

**Output:** A timeout/retry budget experiment.

**Effort:** 10h · Beginner → intermediate

- **Backup, restore and data recovery drills:** Extend the project with Backup, restore and data recovery drills in Timeout budget simulator. Adapt this focused lab to the project data: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.  Required concepts: Recovery point objective, Recovery time objective, Consistent backups, Restore verification, Retention and access.
  - Deliverable: Backup, restore and data recovery drills: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A timeout/retry budget experiment. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Backup, restore and data recovery drills: Backup, restore and data recovery drills: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Total request duration stays bounded and attempts stay below the configured cap.
- [ ] Backup, restore and data recovery drills: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Request trace investigation

A maintainer needs to follow one request across components.

**Data:** Generate requests with correlation IDs and seeded slow dependencies. Use a fixed seed and keep evaluation cases separate.

**Output:** Structured logs and a local trace report.

**Effort:** 10h · Beginner → intermediate

- **Backup, restore and data recovery drills:** Extend the project with Backup, restore and data recovery drills in Request trace investigation. Adapt this focused lab to the project data: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.  Required concepts: Recovery point objective, Recovery time objective, Consistent backups, Restore verification, Retention and access.
  - Deliverable: Backup, restore and data recovery drills: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Structured logs and a local trace report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Backup, restore and data recovery drills: Backup, restore and data recovery drills: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Trace each request end to end without logging secrets or full private payloads.
- [ ] Backup, restore and data recovery drills: Back up a small local database, deliberately remove a disposable copy, restore into a fresh instance and verify row counts plus checksums. Record recovery time and the maximum tolerable data-loss window.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Stage checkpoint

<a id="checkpoint-deployment"></a>

### Operations checkpoint

Demonstrate readiness through a reproducible practical handoff. Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.

**Priority:** Essential · **Study:** 1h · **Practice:** 6h

**Prerequisites:** [Docker images, containers and Dockerfiles](deployment.md#docker), [Volumes, networks and Docker Compose](deployment.md#docker-compose), [CI/CD, cloud deployment and rollback](deployment.md#deployment-cicd), [Queues, async processing, retries and timeouts](deployment.md#deployment-queues), [Logging, tracing, monitoring, alerts and incidents](deployment.md#deployment-monitoring), [Durable jobs, backoff, deduplication and overload](deployment.md#deployment-jobs-retries), [Service objectives, traces, latency percentiles and rollback](deployment.md#deployment-observability-slos), [Backup, restore and data recovery drills](deployment.md#deployment-backup-restore) Navigation is unrestricted.

#### Concepts

- [ ] **Define the success contract:** Write observable checks before implementation so success is not just a plausible demonstration.
  - Example: Turn this task into a numbered acceptance checklist: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.
  - Videos:
    - [Incident management: SRE implements DevOps](https://www.youtube.com/watch?v=n4y9dwinPBQ) · Google Cloud Tech · Focused lecture
      - Explains: Incident roles, response process and learning after failures.
      - Useful because: Rehearse your runbook on a local outage and document what changed.
      - Watch for: Focus on define the success contract. Then reproduce the lesson example: Turn this task into a numbered acceptance checklist: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=n4y9dwinPBQ
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on define the success contract. Then reproduce the lesson example: Turn this task into a numbered acceptance checklist: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Reproduce the baseline:** Keep a simple reference output and deterministic inputs so changes can be compared honestly.
  - Example: Run a fixed input twice and compare saved outputs with the documented baseline.
  - Videos:
    - [Incident management: SRE implements DevOps](https://www.youtube.com/watch?v=n4y9dwinPBQ) · Google Cloud Tech · Focused lecture
      - Explains: Incident roles, response process and learning after failures.
      - Useful because: Rehearse your runbook on a local outage and document what changed.
      - Watch for: Focus on reproduce the baseline. Then reproduce the lesson example: Run a fixed input twice and compare saved outputs with the documented baseline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=n4y9dwinPBQ
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on reproduce the baseline. Then reproduce the lesson example: Run a fixed input twice and compare saved outputs with the documented baseline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Test a failure boundary:** A working happy path does not establish robustness to malformed data or dependency failures.
  - Example: Inject one malformed input and one controlled failure, then record the resulting state.
  - Videos:
    - [Incident management: SRE implements DevOps](https://www.youtube.com/watch?v=n4y9dwinPBQ) · Google Cloud Tech · Focused lecture
      - Explains: Incident roles, response process and learning after failures.
      - Useful because: Rehearse your runbook on a local outage and document what changed.
      - Watch for: Focus on test a failure boundary. Then reproduce the lesson example: Inject one malformed input and one controlled failure, then record the resulting state.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=n4y9dwinPBQ
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on test a failure boundary. Then reproduce the lesson example: Inject one malformed input and one controlled failure, then record the resulting state.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Explain the decisions:** Describe why each technique was chosen and what evidence would make you choose differently.
  - Example: Write a short decision note comparing the chosen approach with one simpler alternative.
  - Videos:
    - [Incident management: SRE implements DevOps](https://www.youtube.com/watch?v=n4y9dwinPBQ) · Google Cloud Tech · Focused lecture
      - Explains: Incident roles, response process and learning after failures.
      - Useful because: Rehearse your runbook on a local outage and document what changed.
      - Watch for: Focus on explain the decisions. Then reproduce the lesson example: Write a short decision note comparing the chosen approach with one simpler alternative.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=n4y9dwinPBQ
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on explain the decisions. Then reproduce the lesson example: Write a short decision note comparing the chosen approach with one simpler alternative.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/
- [ ] **Hand off the evidence:** Another learner must be able to reproduce the result from your instructions and supplied inputs.
  - Example: Ask a teammate to run the README commands in a clean environment and record missing steps.
  - Videos:
    - [Incident management: SRE implements DevOps](https://www.youtube.com/watch?v=n4y9dwinPBQ) · Google Cloud Tech · Focused lecture
      - Explains: Incident roles, response process and learning after failures.
      - Useful because: Rehearse your runbook on a local outage and document what changed.
      - Watch for: Focus on hand off the evidence. Then reproduce the lesson example: Ask a teammate to run the README commands in a clean environment and record missing steps.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=n4y9dwinPBQ
    - [Docker — full DevOps course](https://www.youtube.com/watch?v=rjjES5IsPdg) · freeCodeCamp · Long tool course · approximately 8h
      - Explains: Images, containers, Dockerfiles and deploying containerized applications.
      - Useful because: Package the exact service you tested; keep cloud purchases optional.
      - Watch for: Focus on hand off the evidence. Then reproduce the lesson example: Ask a teammate to run the README commands in a clean environment and record missing steps.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/docker-full-course/

#### YouTube: focused explanations and full courses

- [Incident management: SRE implements DevOps](https://www.youtube.com/watch?v=n4y9dwinPBQ) · Google Cloud Tech · Focused lecture
  - Explains: Incident roles, response process and learning after failures.
  - Useful because: Rehearse your runbook on a local outage and document what changed.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=n4y9dwinPBQ
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

1. [Official reference: Backup, restore and data recovery drills](https://www.postgresql.org/docs/current/backup.html) — Free reading; no registration required. Use the local CPU exercise; optional hosted services and downloads are not required..
2. [Docker: Compose getting started](https://docs.docker.com/compose/gettingstarted/) — Free; no registration required. No paid materials required.

#### Operations checkpoint

Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.

**Deliverables**

- Runnable project and reproducible input fixtures
- README, results and decision notes
- Failure evidence and clean-start instructions

**Completion checks**

- [ ] Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.
- [ ] Explain the code and results without relying on an AI-generated summary.
- [ ] A teammate can reproduce the demo without paid credentials.

#### Ten project recommendations

### Offline quality pipeline

A team needs a repeatable test gate before packaging.

**Data:** Use a small project with one deliberately failing test. Use a fixed seed and keep evaluation cases separate.

**Output:** A CI configuration with local equivalent commands.

**Effort:** 10h · Beginner → intermediate

- **Operations checkpoint:** Extend the project with Operations checkpoint in Offline quality pipeline. Adapt this focused lab to the project data: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Operations checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A CI configuration with local equivalent commands. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Operations checkpoint: Operations checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The gate fails on the broken test and produces a versioned artifact only on success.
- [ ] Operations checkpoint: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### API and database Compose lab

A developer needs reproducible service networking and persistence.

**Data:** Seed a local PostgreSQL database with fictional tasks. Use a fixed seed and keep evaluation cases separate.

**Output:** A Compose stack with isolated services and persistent data.

**Effort:** 10h · Beginner → intermediate

- **Operations checkpoint:** Extend the project with Operations checkpoint in API and database Compose lab. Adapt this focused lab to the project data: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Operations checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Compose stack with isolated services and persistent data. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Operations checkpoint: Operations checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restart containers without losing rows; API connects by service name.
- [ ] Operations checkpoint: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible inference container

A teammate needs to start the same API on another machine.

**Data:** Use a tiny local FastAPI app and generated request fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A non-root Docker image with health check and smoke test.

**Effort:** 10h · Beginner → intermediate

- **Operations checkpoint:** Extend the project with Operations checkpoint in Reproducible inference container. Adapt this focused lab to the project data: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Operations checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A non-root Docker image with health check and smoke test. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Operations checkpoint: Operations checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Build cleanly, start on a configurable port and stop gracefully.
- [ ] Operations checkpoint: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local inference efficiency ledger

A learner needs to compare caching and batching tradeoffs.

**Data:** Use repeated generated requests and a tiny CPU model. Use a fixed seed and keep evaluation cases separate.

**Output:** A benchmark of cached, uncached and batched inference.

**Effort:** 10h · Beginner → intermediate

- **Operations checkpoint:** Extend the project with Operations checkpoint in Local inference efficiency ledger. Adapt this focused lab to the project data: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Operations checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A benchmark of cached, uncached and batched inference. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Operations checkpoint: Operations checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report cache hit rate, memory and latency; verify outputs remain equivalent.
- [ ] Operations checkpoint: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service capacity envelope

A builder needs to understand throughput on their own machine.

**Data:** Use a deterministic local endpoint and bounded load generator. Use a fixed seed and keep evaluation cases separate.

**Output:** A latency/throughput curve and saturation report.

**Effort:** 10h · Beginner → intermediate

- **Operations checkpoint:** Extend the project with Operations checkpoint in Service capacity envelope. Adapt this focused lab to the project data: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Operations checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A latency/throughput curve and saturation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Operations checkpoint: Operations checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report p50/p95, errors and machine specs without generalizing to production.
- [ ] Operations checkpoint: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Idempotent background worker

An operator needs safe retry of failed jobs.

**Data:** Generate 50 local jobs and injected transient failures. Use a fixed seed and keep evaluation cases separate.

**Output:** A queue worker with bounded retries and dead-letter records.

**Effort:** 10h · Beginner → intermediate

- **Operations checkpoint:** Extend the project with Operations checkpoint in Idempotent background worker. Adapt this focused lab to the project data: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Operations checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A queue worker with bounded retries and dead-letter records. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Operations checkpoint: Operations checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Duplicate delivery never duplicates the final output.
- [ ] Operations checkpoint: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Release rollback rehearsal

A maintainer needs a tested escape from a broken release.

**Data:** Build two local image versions, one with a failing health endpoint. Use a fixed seed and keep evaluation cases separate.

**Output:** A rollout checklist and executable local rollback drill.

**Effort:** 10h · Beginner → intermediate

- **Operations checkpoint:** Extend the project with Operations checkpoint in Release rollback rehearsal. Adapt this focused lab to the project data: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Operations checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A rollout checklist and executable local rollback drill. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Operations checkpoint: Operations checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restore healthy traffic and verify data compatibility after rollback.
- [ ] Operations checkpoint: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reliability budget dashboard

An operator needs meaningful availability and latency indicators.

**Data:** Generate one day of synthetic request metrics with an outage. Use a fixed seed and keep evaluation cases separate.

**Output:** An SLO report with burn-rate alerts and investigation notes.

**Effort:** 10h · Beginner → intermediate

- **Operations checkpoint:** Extend the project with Operations checkpoint in Reliability budget dashboard. Adapt this focused lab to the project data: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Operations checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An SLO report with burn-rate alerts and investigation notes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Operations checkpoint: Operations checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compute error budget correctly and distinguish missing telemetry from success.
- [ ] Operations checkpoint: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Timeout budget simulator

An engineer needs to prevent retry storms across dependent calls.

**Data:** Create three local stubs with controllable delay and failure rates. Use a fixed seed and keep evaluation cases separate.

**Output:** A timeout/retry budget experiment.

**Effort:** 10h · Beginner → intermediate

- **Operations checkpoint:** Extend the project with Operations checkpoint in Timeout budget simulator. Adapt this focused lab to the project data: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Operations checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A timeout/retry budget experiment. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Operations checkpoint: Operations checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Total request duration stays bounded and attempts stay below the configured cap.
- [ ] Operations checkpoint: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Request trace investigation

A maintainer needs to follow one request across components.

**Data:** Generate requests with correlation IDs and seeded slow dependencies. Use a fixed seed and keep evaluation cases separate.

**Output:** Structured logs and a local trace report.

**Effort:** 10h · Beginner → intermediate

- **Operations checkpoint:** Extend the project with Operations checkpoint in Request trace investigation. Adapt this focused lab to the project data: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Operations checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Structured logs and a local trace report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Operations checkpoint: Operations checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Trace each request end to end without logging secrets or full private payloads.
- [ ] Operations checkpoint: Run the assistant and its data store locally using Docker Compose. Demonstrate health checks, bounded retries, correlated logs, a rollback and a tested database restore; document how a teammate repeats each drill.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

