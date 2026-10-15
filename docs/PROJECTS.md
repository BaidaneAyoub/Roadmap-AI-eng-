# Project catalog

Every lesson has ten project briefs in its domain document. The website uses the same deterministic composer for combinations, with a named task, deliverable and check for every selected skill. Unmapped custom topics are explicitly general practice.

## Example: ML + DL + FastAPI + Docker

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 18h · Intermediate

- **Deep learning:** Train a small PyTorch MLP or sequence model using the same target as the baseline. Model target: ticket category: login, billing or account setup; compare with a majority-class predictor and keyword rules. 
  - Deliverable: A checkpoint, training curves and a measured ML/DL comparison
  - Check: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time. 
- **Docker images, containers and Dockerfiles:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Docker images, containers and Dockerfiles, explicitly apply Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- **FastAPI routes, validation and OpenAPI:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI routes, validation and OpenAPI, explicitly apply Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- **Machine learning:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: ticket category: login, billing or account setup; compare with a majority-class predictor and keyword rules. 
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. 

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Deep learning: A checkpoint, training curves and a measured ML/DL comparison
- [ ] Docker images, containers and Dockerfiles: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] FastAPI routes, validation and OpenAPI: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Machine learning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Deep learning: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time. 
- [ ] Docker images, containers and Dockerfiles: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- [ ] FastAPI routes, validation and OpenAPI: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- [ ] Machine learning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. 
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README; Requirements and success metric; Architecture + ADR; Evaluation report; Deployment guide + runbook; Model/system card.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 20h · Intermediate

- **Deep learning:** Train a small PyTorch MLP or sequence model using the same target as the baseline. Model target: whether a stock movement is an injected anomaly; compare with explicit quantity limits and rolling statistics. 
  - Deliverable: A checkpoint, training curves and a measured ML/DL comparison
  - Check: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time. 
- **Docker images, containers and Dockerfiles:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Docker images, containers and Dockerfiles, explicitly apply Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- **FastAPI routes, validation and OpenAPI:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI routes, validation and OpenAPI, explicitly apply Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- **Machine learning:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a stock movement is an injected anomaly; compare with explicit quantity limits and rolling statistics. 
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. 

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Deep learning: A checkpoint, training curves and a measured ML/DL comparison
- [ ] Docker images, containers and Dockerfiles: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] FastAPI routes, validation and OpenAPI: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Machine learning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Deep learning: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time. 
- [ ] Docker images, containers and Dockerfiles: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- [ ] FastAPI routes, validation and OpenAPI: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- [ ] Machine learning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. 
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README; Requirements and success metric; Architecture + ADR; Evaluation report; Deployment guide + runbook; Model/system card.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 20h · Intermediate

- **Deep learning:** Train a small PyTorch MLP or sequence model using the same target as the baseline. Model target: next-day task count; compare with the count on the same weekday in the previous week. 
  - Deliverable: A checkpoint, training curves and a measured ML/DL comparison
  - Check: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time. 
- **Docker images, containers and Dockerfiles:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Docker images, containers and Dockerfiles, explicitly apply Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- **FastAPI routes, validation and OpenAPI:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI routes, validation and OpenAPI, explicitly apply Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- **Machine learning:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: next-day task count; compare with the count on the same weekday in the previous week. 
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. 

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Deep learning: A checkpoint, training curves and a measured ML/DL comparison
- [ ] Docker images, containers and Dockerfiles: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] FastAPI routes, validation and OpenAPI: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Machine learning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Deep learning: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time. 
- [ ] Docker images, containers and Dockerfiles: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- [ ] FastAPI routes, validation and OpenAPI: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- [ ] Machine learning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. 
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README; Requirements and success metric; Architecture + ADR; Evaluation report; Deployment guide + runbook; Model/system card.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 18h · Intermediate

- **Deep learning:** Train a small PyTorch MLP or sequence model using the same target as the baseline. Model target: the digit class or generated dataset label; compare with a dummy predictor and a simple fitted estimator. 
  - Deliverable: A checkpoint, training curves and a measured ML/DL comparison
  - Check: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time. 
- **Docker images, containers and Dockerfiles:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Docker images, containers and Dockerfiles, explicitly apply Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- **FastAPI routes, validation and OpenAPI:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI routes, validation and OpenAPI, explicitly apply Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- **Machine learning:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the digit class or generated dataset label; compare with a dummy predictor and a simple fitted estimator. 
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. 

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Deep learning: A checkpoint, training curves and a measured ML/DL comparison
- [ ] Docker images, containers and Dockerfiles: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] FastAPI routes, validation and OpenAPI: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Machine learning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Deep learning: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time. 
- [ ] Docker images, containers and Dockerfiles: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- [ ] FastAPI routes, validation and OpenAPI: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- [ ] Machine learning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. 
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README; Requirements and success metric; Architecture + ADR; Evaluation report; Deployment guide + runbook; Model/system card.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 19h · Intermediate

- **Deep learning:** Train a small PyTorch MLP or sequence model using the same target as the baseline. Model target: whether a query/passage pair is relevant; compare with keyword overlap and a TF-IDF retriever. 
  - Deliverable: A checkpoint, training curves and a measured ML/DL comparison
  - Check: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time. 
- **Docker images, containers and Dockerfiles:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Docker images, containers and Dockerfiles, explicitly apply Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- **FastAPI routes, validation and OpenAPI:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI routes, validation and OpenAPI, explicitly apply Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- **Machine learning:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a query/passage pair is relevant; compare with keyword overlap and a TF-IDF retriever. 
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. 

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Deep learning: A checkpoint, training curves and a measured ML/DL comparison
- [ ] Docker images, containers and Dockerfiles: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] FastAPI routes, validation and OpenAPI: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Machine learning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Deep learning: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time. 
- [ ] Docker images, containers and Dockerfiles: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- [ ] FastAPI routes, validation and OpenAPI: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- [ ] Machine learning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. 
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README; Requirements and success metric; Architecture + ADR; Evaluation report; Deployment guide + runbook; Model/system card.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 18h · Intermediate

- **Deep learning:** Train a small PyTorch MLP or sequence model using the same target as the baseline. Model target: the review topic and rating-consistency flag; compare with topic keywords and explicit rating rules. 
  - Deliverable: A checkpoint, training curves and a measured ML/DL comparison
  - Check: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time. 
- **Docker images, containers and Dockerfiles:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Docker images, containers and Dockerfiles, explicitly apply Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- **FastAPI routes, validation and OpenAPI:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI routes, validation and OpenAPI, explicitly apply Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- **Machine learning:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the review topic and rating-consistency flag; compare with topic keywords and explicit rating rules. 
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. 

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Deep learning: A checkpoint, training curves and a measured ML/DL comparison
- [ ] Docker images, containers and Dockerfiles: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] FastAPI routes, validation and OpenAPI: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Machine learning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Deep learning: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time. 
- [ ] Docker images, containers and Dockerfiles: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- [ ] FastAPI routes, validation and OpenAPI: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- [ ] Machine learning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. 
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README; Requirements and success metric; Architecture + ADR; Evaluation report; Deployment guide + runbook; Model/system card.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 19h · Intermediate

- **Deep learning:** Train a small PyTorch MLP or sequence model using the same target as the baseline. Model target: the next weak concept requiring practice; compare with the lowest-score eligible prerequisite-aware concept. 
  - Deliverable: A checkpoint, training curves and a measured ML/DL comparison
  - Check: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time. 
- **Docker images, containers and Dockerfiles:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Docker images, containers and Dockerfiles, explicitly apply Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- **FastAPI routes, validation and OpenAPI:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI routes, validation and OpenAPI, explicitly apply Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- **Machine learning:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the next weak concept requiring practice; compare with the lowest-score eligible prerequisite-aware concept. 
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. 

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Deep learning: A checkpoint, training curves and a measured ML/DL comparison
- [ ] Docker images, containers and Dockerfiles: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] FastAPI routes, validation and OpenAPI: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Machine learning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Deep learning: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time. 
- [ ] Docker images, containers and Dockerfiles: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- [ ] FastAPI routes, validation and OpenAPI: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- [ ] Machine learning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. 
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README; Requirements and success metric; Architecture + ADR; Evaluation report; Deployment guide + runbook; Model/system card.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 20h · Intermediate

- **Deep learning:** Train a small PyTorch MLP or sequence model using the same target as the baseline. Model target: validity of a document record; compare with a deterministic schema validator; keep it authoritative. 
  - Deliverable: A checkpoint, training curves and a measured ML/DL comparison
  - Check: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time. 
- **Docker images, containers and Dockerfiles:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Docker images, containers and Dockerfiles, explicitly apply Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- **FastAPI routes, validation and OpenAPI:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI routes, validation and OpenAPI, explicitly apply Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- **Machine learning:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: validity of a document record; compare with a deterministic schema validator; keep it authoritative. 
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. 

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Deep learning: A checkpoint, training curves and a measured ML/DL comparison
- [ ] Docker images, containers and Dockerfiles: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] FastAPI routes, validation and OpenAPI: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Machine learning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Deep learning: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time. 
- [ ] Docker images, containers and Dockerfiles: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- [ ] FastAPI routes, validation and OpenAPI: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- [ ] Machine learning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. 
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README; Requirements and success metric; Architecture + ADR; Evaluation report; Deployment guide + runbook; Model/system card.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 18h · Intermediate

- **Deep learning:** Train a small PyTorch MLP or sequence model using the same target as the baseline. Model target: the incident category/severity from a log window; compare with error counts and a keyword-to-runbook mapping. 
  - Deliverable: A checkpoint, training curves and a measured ML/DL comparison
  - Check: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time. 
- **Docker images, containers and Dockerfiles:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Docker images, containers and Dockerfiles, explicitly apply Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- **FastAPI routes, validation and OpenAPI:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI routes, validation and OpenAPI, explicitly apply Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- **Machine learning:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the incident category/severity from a log window; compare with error counts and a keyword-to-runbook mapping. 
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. 

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Deep learning: A checkpoint, training curves and a measured ML/DL comparison
- [ ] Docker images, containers and Dockerfiles: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] FastAPI routes, validation and OpenAPI: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Machine learning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Deep learning: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time. 
- [ ] Docker images, containers and Dockerfiles: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- [ ] FastAPI routes, validation and OpenAPI: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- [ ] Machine learning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. 
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README; Requirements and success metric; Architecture + ADR; Evaluation report; Deployment guide + runbook; Model/system card.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 19h · Intermediate

- **Deep learning:** Train a small PyTorch MLP or sequence model using the same target as the baseline. Model target: query/item relevance; compare with keyword search and a simple ranker. 
  - Deliverable: A checkpoint, training curves and a measured ML/DL comparison
  - Check: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time. 
- **Docker images, containers and Dockerfiles:** Package the project’s runnable API/worker in Docker with explicit configuration.  For Docker images, containers and Dockerfiles, explicitly apply Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: A Dockerfile/Compose setup, health check and deployment runbook
  - Check: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- **FastAPI routes, validation and OpenAPI:** Expose project-specific records, predictions or analysis through validated FastAPI routes.  For FastAPI routes, validation and OpenAPI, explicitly apply Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: An OpenAPI contract, API checks and a browser/API interaction
  - Check: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- **Machine learning:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: query/item relevance; compare with keyword search and a simple ranker. 
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. 

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Deep learning: A checkpoint, training curves and a measured ML/DL comparison
- [ ] Docker images, containers and Dockerfiles: A Dockerfile/Compose setup, health check and deployment runbook
- [ ] FastAPI routes, validation and OpenAPI: An OpenAPI contract, API checks and a browser/API interaction
- [ ] Machine learning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Deep learning: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time. 
- [ ] Docker images, containers and Dockerfiles: Use non-root execution, persist necessary data, add health checks and rehearse rollback. Adapt the lesson lab: Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.
- [ ] FastAPI routes, validation and OpenAPI: Keep user authorization in trusted code and test invalid input and cross-user access. Adapt the lesson lab: Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- [ ] Machine learning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. 
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README; Requirements and success metric; Architecture + ADR; Evaluation report; Deployment guide + runbook; Model/system card.

