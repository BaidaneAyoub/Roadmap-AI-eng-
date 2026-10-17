# AI + Data Engineering

An advanced roadmap for learners who finished the AI Engineering or the Data Engineering roadmap: ML engineering and MLOps on data platforms, LLM and GenAI engineering over data, and system design with interview preparation. It does not repeat either roadmap; review the linked lessons of the roadmap you did not take when a topic is new to you.

## AI + Data Engineering · Step 1 of 1

**Goal:** Combine a data platform with ML and LLM systems: MLOps on lakehouse data, GenAI over governed data, and end-to-end system design.

**Stage checkpoint:** Serve a measured ML or RAG consumer from a gold-layer table and defend its system design, failure recovery and trade-offs.

Serve a measured ML or RAG consumer from your data platform and defend its system design. Advanced: finish the AI Engineering or the Data Engineering roadmap first.

Follow the modules and lessons below at your pace. Finish each exercise, save your evidence and self-assessment, then continue. Completed and Already known count as completed; Skipped is reported separately. You can move ahead at any time.

[Full pipeline](../PIPELINE.md) · [Choose a capstone](../PROJECTS.md)

## Phase 1

<a id="de-mlops"></a>

### Phase 1 · ML engineering and MLOps

Connect reliable data engineering to reproducible model training and serving, while making feature correctness, model lifecycle and production feedback explicit.

**Priority:** Essential · **Study:** 8h · **Practice:** 14h

**Prerequisites:** [Phase 4 · Lakehouse formats and storage internals](data-engineering.md#de-lakehouse) Navigation is unrestricted.

#### Concepts

- [ ] **Feature engineering pipelines:** Feature pipelines are data pipelines with an ML consumer. Batch and online/real-time feature computation differ in latency and freshness. Feature stores support reuse but must address training-serving skew and point-in-time correctness. Feast models entities and feature views over offline and online stores; point-in-time joins prevent future information leaking into training.
  - Example: Build a point-in-time feature join and show how a future event would create leakage.
  - Videos:
    - [MLOps: a production-grade project](https://www.youtube.com/watch?v=-dJPoLm_gtE) · freeCodeCamp · Project course · approximately 3h
      - Explains: Ingestion, experiment management and deploying a model workflow.
      - Useful because: Connect evaluation, model artifacts and operations; use local alternatives to optional services.
      - Watch for: Focus on feature engineering pipelines. Then reproduce the lesson example: Build a point-in-time feature join and show how a future event would create leakage.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/mlops-course-learn-to-build-machine-learning-production-grade-projects/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on feature engineering pipelines. Then reproduce the lesson example: Build a point-in-time feature join and show how a future event would create leakage.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Model training pipelines:** Structure training as extraction, features, train, evaluate and register steps. Reproducibility pins data, code and hyperparameters together. Grid/random search provide baselines; Bayesian optimization may be worth the extra complexity for expensive searches. Cross-validation should be represented in the pipeline, not hidden in an ad hoc notebook.
  - Example: Build a versioned training DAG with a fixed data snapshot and compare a small grid search with one baseline.
  - Videos:
    - [MLOps: a production-grade project](https://www.youtube.com/watch?v=-dJPoLm_gtE) · freeCodeCamp · Project course · approximately 3h
      - Explains: Ingestion, experiment management and deploying a model workflow.
      - Useful because: Connect evaluation, model artifacts and operations; use local alternatives to optional services.
      - Watch for: Focus on model training pipelines. Then reproduce the lesson example: Build a versioned training DAG with a fixed data snapshot and compare a small grid search with one baseline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/mlops-course-learn-to-build-machine-learning-production-grade-projects/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on model training pipelines. Then reproduce the lesson example: Build a versioned training DAG with a fixed data snapshot and compare a small grid search with one baseline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Experiment tracking and registry:** MLflow Tracking stores parameters, metrics and artifacts; its Model Registry supports lifecycle states such as staging, production and archived. Record metrics, hyperparameters, data version/hash and environment so a run can be compared and reproduced.
  - Example: Log two training runs with data hashes and promote only the evaluated artifact through explicit registry stages.
  - Videos:
    - [MLOps: a production-grade project](https://www.youtube.com/watch?v=-dJPoLm_gtE) · freeCodeCamp · Project course · approximately 3h
      - Explains: Ingestion, experiment management and deploying a model workflow.
      - Useful because: Connect evaluation, model artifacts and operations; use local alternatives to optional services.
      - Watch for: Focus on experiment tracking and registry. Then reproduce the lesson example: Log two training runs with data hashes and promote only the evaluated artifact through explicit registry stages.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/mlops-course-learn-to-build-machine-learning-production-grade-projects/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on experiment tracking and registry. Then reproduce the lesson example: Log two training runs with data hashes and promote only the evaluated artifact through explicit registry stages.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Deployment patterns:** Batch inference processes a scheduled dataset; online inference serves requests with tighter latency needs. Serve through FastAPI and a container when appropriate. Shadow and canary deployments compare or gradually expose a model before full rollout.
  - Example: Deploy a local model endpoint and compare batch output with a shadow request path before routing traffic.
  - Videos:
    - [MLOps: a production-grade project](https://www.youtube.com/watch?v=-dJPoLm_gtE) · freeCodeCamp · Project course · approximately 3h
      - Explains: Ingestion, experiment management and deploying a model workflow.
      - Useful because: Connect evaluation, model artifacts and operations; use local alternatives to optional services.
      - Watch for: Focus on deployment patterns. Then reproduce the lesson example: Deploy a local model endpoint and compare batch output with a shadow request path before routing traffic.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/mlops-course-learn-to-build-machine-learning-production-grade-projects/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on deployment patterns. Then reproduce the lesson example: Deploy a local model endpoint and compare batch output with a shadow request path before routing traffic.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Monitoring and drift:** Data drift changes input distributions; concept drift changes the relationship between inputs and outcomes. Monitor prediction distributions as well as uptime and latency. Retraining may be scheduled or triggered by drift, but requires a verified policy. Capture ground truth to evaluate real-world performance and avoid unsafe feedback loops.
  - Example: Simulate a distribution shift, report prediction changes, then compare a scheduled retrain trigger with a ground-truth-confirmed trigger.
  - Videos:
    - [MLOps: a production-grade project](https://www.youtube.com/watch?v=-dJPoLm_gtE) · freeCodeCamp · Project course · approximately 3h
      - Explains: Ingestion, experiment management and deploying a model workflow.
      - Useful because: Connect evaluation, model artifacts and operations; use local alternatives to optional services.
      - Watch for: Focus on monitoring and drift. Then reproduce the lesson example: Simulate a distribution shift, report prediction changes, then compare a scheduled retrain trigger with a ground-truth-confirmed trigger.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/mlops-course-learn-to-build-machine-learning-production-grade-projects/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on monitoring and drift. Then reproduce the lesson example: Simulate a distribution shift, report prediction changes, then compare a scheduled retrain trigger with a ground-truth-confirmed trigger.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Integration back into DE:** Airflow can orchestrate retrain, evaluate, register and deploy. Predictions can return to a gold-layer table in the medallion architecture. Version data, features, model and code as one reproducible unit.
  - Example: Orchestrate a local train/evaluate/register flow and write versioned predictions to a gold table with lineage back to its feature and model versions.
  - Videos:
    - [MLOps: a production-grade project](https://www.youtube.com/watch?v=-dJPoLm_gtE) · freeCodeCamp · Project course · approximately 3h
      - Explains: Ingestion, experiment management and deploying a model workflow.
      - Useful because: Connect evaluation, model artifacts and operations; use local alternatives to optional services.
      - Watch for: Focus on integration back into de. Then reproduce the lesson example: Orchestrate a local train/evaluate/register flow and write versioned predictions to a gold table with lineage back to its feature and model versions.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/mlops-course-learn-to-build-machine-learning-production-grade-projects/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on integration back into de. Then reproduce the lesson example: Orchestrate a local train/evaluate/register flow and write versioned predictions to a gold table with lineage back to its feature and model versions.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### YouTube: focused explanations and full courses

- [MLOps: a production-grade project](https://www.youtube.com/watch?v=-dJPoLm_gtE) · freeCodeCamp · Project course · approximately 3h
  - Explains: Ingestion, experiment management and deploying a model workflow.
  - Useful because: Connect evaluation, model artifacts and operations; use local alternatives to optional services.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/mlops-course-learn-to-build-machine-learning-production-grade-projects/
- [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
  - Explains: Scalability, reliability, storage and architecture tradeoffs.
  - Useful because: Explain why a queue, index or cache is useful before adding one.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### Free written resources

1. [MLflow: tracking](https://mlflow.org/docs/latest/ml/tracking/) — Free; no registration required. No paid materials required.
2. [Feast: feature store concepts](https://docs.feast.dev/getting-started/concepts) — Free; no registration required. No paid materials required.

#### Lab: Phase 1 · ML engineering and MLOps

Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Nightly batch scoring job

A retention team needs fresh risk scores each morning without a live API.

**Data:** Generate a daily partition of fictional accounts and a registered model. Use a fixed seed and keep evaluation cases separate.

**Output:** A Spark job that loads the registered model, scores the partition and writes to gold.

**Effort:** 16h · Intermediate

- **Phase 1 · ML engineering and MLOps:** Implement Phase 1 · ML engineering and MLOps in Nightly batch scoring job. Adapt this focused lab to the project data: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.  Required concepts: Feature engineering pipelines, Model training pipelines, Experiment tracking and registry, Deployment patterns, Monitoring and drift, Integration back into DE.
  - Deliverable: Phase 1 · ML engineering and MLOps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Spark job that loads the registered model, scores the partition and writes to gold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 1 · ML engineering and MLOps: Phase 1 · ML engineering and MLOps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Rerunning a night gives identical scores, and a schema-mismatched partition fails before anything is written.
- [ ] Phase 1 · ML engineering and MLOps: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data drift retraining trigger

An ML owner needs retraining only when input data really changes.

**Data:** Generate twelve weekly batches with drift injected in weeks 8 and 11. Use a fixed seed and keep evaluation cases separate.

**Output:** An orchestrated drift check that starts a tracked retraining run from its data snapshot.

**Effort:** 16h · Intermediate

- **Phase 1 · ML engineering and MLOps:** Implement Phase 1 · ML engineering and MLOps in Data drift retraining trigger. Adapt this focused lab to the project data: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.  Required concepts: Feature engineering pipelines, Model training pipelines, Experiment tracking and registry, Deployment patterns, Monitoring and drift, Integration back into DE.
  - Deliverable: Phase 1 · ML engineering and MLOps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An orchestrated drift check that starts a tracked retraining run from its data snapshot. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 1 · ML engineering and MLOps: Phase 1 · ML engineering and MLOps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Trigger exactly on the two drifted weeks and record which features moved and by how much.
- [ ] Phase 1 · ML engineering and MLOps: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature store to prediction loop

An analyst needs churn scores written back next to the source data.

**Data:** Generate fictional accounts and a gold-layer feature table. Use a fixed seed and keep evaluation cases separate.

**Output:** A versioned training run tracked in MLflow, a served model and scores written to gold.

**Effort:** 16h · Intermediate

- **Phase 1 · ML engineering and MLOps:** Implement Phase 1 · ML engineering and MLOps in Feature store to prediction loop. Adapt this focused lab to the project data: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.  Required concepts: Feature engineering pipelines, Model training pipelines, Experiment tracking and registry, Deployment patterns, Monitoring and drift, Integration back into DE.
  - Deliverable: Phase 1 · ML engineering and MLOps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A versioned training run tracked in MLflow, a served model and scores written to gold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 1 · ML engineering and MLOps: Phase 1 · ML engineering and MLOps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reproduce the run from its logged data snapshot and flag a simulated feature drift.
- [ ] Phase 1 · ML engineering and MLOps: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Point-in-time feature builder

A data scientist needs training features that never use data from after the prediction date.

**Data:** Generate 1000 fictional accounts with timestamped events and a cancellation label. Use a fixed seed and keep evaluation cases separate.

**Output:** A point-in-time correct feature table and a model trained on it.

**Effort:** 16h · Intermediate

- **Phase 1 · ML engineering and MLOps:** Extend the project with Phase 1 · ML engineering and MLOps in Point-in-time feature builder. Adapt this focused lab to the project data: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.  Required concepts: Feature engineering pipelines, Model training pipelines, Experiment tracking and registry, Deployment patterns, Monitoring and drift, Integration back into DE.
  - Deliverable: Phase 1 · ML engineering and MLOps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A point-in-time correct feature table and a model trained on it. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 1 · ML engineering and MLOps: Phase 1 · ML engineering and MLOps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show a leakage test where the as-of join excludes future events, then compare metrics against a naive join.
- [ ] Phase 1 · ML engineering and MLOps: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Pipeline documentation assistant

An on-call engineer needs cited answers about pipeline behavior.

**Data:** Use the project's own README, runbook and dbt docs plus 20 labeled questions. Use a fixed seed and keep evaluation cases separate.

**Output:** A local RAG assistant with citations and one read-only metadata tool.

**Effort:** 16h · Intermediate

- **Phase 1 · ML engineering and MLOps:** Extend the project with Phase 1 · ML engineering and MLOps in Pipeline documentation assistant. Adapt this focused lab to the project data: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.  Required concepts: Feature engineering pipelines, Model training pipelines, Experiment tracking and registry, Deployment patterns, Monitoring and drift, Integration back into DE.
  - Deliverable: Phase 1 · ML engineering and MLOps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local RAG assistant with citations and one read-only metadata tool. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 1 · ML engineering and MLOps: Phase 1 · ML engineering and MLOps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report recall@k on the question set and abstain on questions the docs do not answer.
- [ ] Phase 1 · ML engineering and MLOps: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### LLM evaluation warehouse

A team needs every assistant answer logged and comparable across prompt versions.

**Data:** Record 200 fictional question, answer and citation runs across two prompt versions. Use a fixed seed and keep evaluation cases separate.

**Output:** A modeled evaluation table with per-version quality and latency views.

**Effort:** 16h · Intermediate

- **Phase 1 · ML engineering and MLOps:** Extend the project with Phase 1 · ML engineering and MLOps in LLM evaluation warehouse. Adapt this focused lab to the project data: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.  Required concepts: Feature engineering pipelines, Model training pipelines, Experiment tracking and registry, Deployment patterns, Monitoring and drift, Integration back into DE.
  - Deliverable: Phase 1 · ML engineering and MLOps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A modeled evaluation table with per-version quality and latency views. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 1 · ML engineering and MLOps: Phase 1 · ML engineering and MLOps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compute groundedness and latency per version from the table and reproduce one regression found in it.
- [ ] Phase 1 · ML engineering and MLOps: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### PII-safe training data gate

A data owner needs personal data removed before any model or LLM sees it.

**Data:** Generate 500 fictional support tickets with seeded emails, phone numbers and names. Use a fixed seed and keep evaluation cases separate.

**Output:** A quality-gated redaction step between bronze and the training and embedding inputs.

**Effort:** 16h · Intermediate

- **Phase 1 · ML engineering and MLOps:** Extend the project with Phase 1 · ML engineering and MLOps in PII-safe training data gate. Adapt this focused lab to the project data: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.  Required concepts: Feature engineering pipelines, Model training pipelines, Experiment tracking and registry, Deployment patterns, Monitoring and drift, Integration back into DE.
  - Deliverable: Phase 1 · ML engineering and MLOps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A quality-gated redaction step between bronze and the training and embedding inputs. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 1 · ML engineering and MLOps: Phase 1 · ML engineering and MLOps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] No seeded identifier reaches the gold table or the vector index, and the gate fails on an unredacted batch.
- [ ] Phase 1 · ML engineering and MLOps: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### AI data platform design review

A hiring panel needs a defensible end-to-end design for an ML and RAG platform.

**Data:** Describe the platform built in the other AI + Data projects; no new data is required. Use a fixed seed and keep evaluation cases separate.

**Output:** An architecture document, ADRs and a capacity and cost estimate.

**Effort:** 16h · Intermediate

- **Phase 1 · ML engineering and MLOps:** Extend the project with Phase 1 · ML engineering and MLOps in AI data platform design review. Adapt this focused lab to the project data: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.  Required concepts: Feature engineering pipelines, Model training pipelines, Experiment tracking and registry, Deployment patterns, Monitoring and drift, Integration back into DE.
  - Deliverable: Phase 1 · ML engineering and MLOps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An architecture document, ADRs and a capacity and cost estimate. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 1 · ML engineering and MLOps: Phase 1 · ML engineering and MLOps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Defend three failure scenarios with recovery steps and justify one trade-off against a simpler design.
- [ ] Phase 1 · ML engineering and MLOps: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### CDC-fed retrieval index

A support assistant must stop citing help articles after they are edited or deleted.

**Data:** Use a disposable PostgreSQL table of 30 help articles with scripted edits and deletes. Use a fixed seed and keep evaluation cases separate.

**Output:** An incremental embedding index fed by CDC events, with citations.

**Effort:** 16h · Intermediate

- **Phase 1 · ML engineering and MLOps:** Extend the project with Phase 1 · ML engineering and MLOps in CDC-fed retrieval index. Adapt this focused lab to the project data: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.  Required concepts: Feature engineering pipelines, Model training pipelines, Experiment tracking and registry, Deployment patterns, Monitoring and drift, Integration back into DE.
  - Deliverable: Phase 1 · ML engineering and MLOps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An incremental embedding index fed by CDC events, with citations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 1 · ML engineering and MLOps: Phase 1 · ML engineering and MLOps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] After each edit or delete the next query cites only the current version and never a removed article.
- [ ] Phase 1 · ML engineering and MLOps: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Governed text-to-SQL assistant

An analyst needs warehouse answers without writing SQL or touching restricted columns.

**Data:** Use the star-schema tables from a dbt project with one column marked sensitive. Use a fixed seed and keep evaluation cases separate.

**Output:** A read-only SQL generation tool with schema context, query validation and an evaluation set.

**Effort:** 16h · Intermediate

- **Phase 1 · ML engineering and MLOps:** Extend the project with Phase 1 · ML engineering and MLOps in Governed text-to-SQL assistant. Adapt this focused lab to the project data: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.  Required concepts: Feature engineering pipelines, Model training pipelines, Experiment tracking and registry, Deployment patterns, Monitoring and drift, Integration back into DE.
  - Deliverable: Phase 1 · ML engineering and MLOps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A read-only SQL generation tool with schema context, query validation and an evaluation set. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 1 · ML engineering and MLOps: Phase 1 · ML engineering and MLOps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Answer 20 labeled questions, reject every query on the sensitive column and never run a write statement.
- [ ] Phase 1 · ML engineering and MLOps: Build a reproducible local ML lifecycle using versioned features, a training pipeline, MLflow tracking, a FastAPI container, a simulated drift check and predictions written back to a gold-layer table. No hosted model or paid API is required.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Phase 2

<a id="de-llm-genai"></a>

### Phase 2 · LLM and GenAI engineering

Understand enough model architecture and evaluation to build grounded language-model systems that fit into a data platform, without treating a model response as proof of correctness.

**Priority:** Essential · **Study:** 9h · **Practice:** 14h

**Prerequisites:** [Phase 1 · ML engineering and MLOps](ai-data.md#de-mlops) Navigation is unrestricted.

#### Concepts

- [ ] **Deep learning foundations:** Perceptrons, activation functions, backpropagation and gradient descent provide conceptual fluency without derivation-heavy mathematics. CNNs and RNNs address image and sequence tasks; transformers largely replaced RNNs for many sequence workloads. Batch size, learning rate, Adam/SGD, dropout and weight decay shape training.
  - Example: Explain a forward pass and gradient update in a tiny network, then identify when a CNN, RNN or transformer is a reasonable architecture.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on deep learning foundations. Then reproduce the lesson example: Explain a forward pass and gradient update in a tiny network, then identify when a CNN, RNN or transformer is a reasonable architecture.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on deep learning foundations. Then reproduce the lesson example: Explain a forward pass and gradient update in a tiny network, then identify when a CNN, RNN or transformer is a reasonable architecture.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Transformer architecture:** Self-attention is the core interaction mechanism. Encoder, decoder and encoder-decoder designs correspond broadly to BERT-, GPT- and T5-style tasks. Positional encoding and multi-head attention help represent order and multiple relation patterns; this vocabulary helps interpret model cards.
  - Example: Trace input tokens through positional information and multi-head self-attention, and identify the model family in a model card.
  - Videos:
    - [Neural Networks Part 14: Transformers](https://www.youtube.com/watch?v=zxQyTK8quyY) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on transformer architecture. Then reproduce the lesson example: Trace input tokens through positional information and multi-head self-attention, and identify the model family in a model card.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on transformer architecture. Then reproduce the lesson example: Trace input tokens through positional information and multi-head self-attention, and identify the model family in a model card.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **LLM-specific skills:** Pretraining, fine-tuning and instruction tuning change different parts of model behavior. LoRA/QLoRA adapt fewer parameters than full fine-tuning; prompting may be preferable when data, cost or maintenance do not justify training. Few-shot and structured-output prompts are practical tools. In-context learning uses examples in the prompt without changing model weights.
  - Example: Compare a prompt-only baseline with a small structured-output and few-shot evaluation; explain when adaptation would be justified.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on llm-specific skills. Then reproduce the lesson example: Compare a prompt-only baseline with a small structured-output and few-shot evaluation; explain when adaptation would be justified.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on llm-specific skills. Then reproduce the lesson example: Compare a prompt-only baseline with a small structured-output and few-shot evaluation; explain when adaptation would be justified.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Evaluation and responsible AI:** Benchmark suites, LLM-as-judge and human evaluation measure different properties; plausible prose is not evaluation. Hallucination can be mitigated with grounded retrieval and calibrated uncertainty signals, but not eliminated by a single prompt. Discuss bias and safety at a practical level and set clear product limits.
  - Example: Create a small golden set, score grounded answers and unsupported questions, and review failures with a human rubric.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on evaluation and responsible ai. Then reproduce the lesson example: Create a small golden set, score grounded answers and unsupported questions, and review failures with a human rubric.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on evaluation and responsible ai. Then reproduce the lesson example: Create a small golden set, score grounded answers and unsupported questions, and review failures with a human rubric.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **LLM and RAG stack:** Embeddings map text to vectors; cosine similarity and dot product rank candidates. pgvector, Qdrant and Weaviate are vector-storage options. Fixed-size, semantic and overlapping chunks have different context trade-offs. Dense, hybrid dense+BM25 and reranked retrieval are alternatives. A RAG pipeline ingests, chunks, embeds, stores, retrieves and generates; evaluate recall@k separately from answer quality.
  - Example: Build a local RAG baseline and compare retrieval recall@k with grounded answer quality on the same held-out questions.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on llm and rag stack. Then reproduce the lesson example: Build a local RAG baseline and compare retrieval recall@k with grounded answer quality on the same held-out questions.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on llm and rag stack. Then reproduce the lesson example: Build a local RAG baseline and compare retrieval recall@k with grounded answer quality on the same held-out questions.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Agents, lighter touch:** Tools use function calling to invoke bounded actions. A single agent with tools differs from multi-agent handoff in complexity and coordination. Identify practical DE/AI uses before adopting agents; LangChain/LangGraph are options, as is a lean custom workflow.
  - Example: Add one read-only data-quality tool to a bounded assistant, require approval for changes and explain why a simple workflow may be safer than a multi-agent system.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on agents, lighter touch. Then reproduce the lesson example: Add one read-only data-quality tool to a bounded assistant, require approval for changes and explain why a simple workflow may be safer than a multi-agent system.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on agents, lighter touch. Then reproduce the lesson example: Add one read-only data-quality tool to a bounded assistant, require approval for changes and explain why a simple workflow may be safer than a multi-agent system.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### YouTube: focused explanations and full courses

- [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
  - Explains: Ingestion, retrieval and techniques for grounding model answers.
  - Useful because: Follow the pipeline, then test chunking and retrieval separately.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
  - Explains: Scalability, reliability, storage and architecture tradeoffs.
  - Useful because: Explain why a queue, index or cache is useful before adding one.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### Free written resources

1. [Hugging Face: LLM course](https://huggingface.co/learn/llm-course/chapter1/1) — Free; no registration required. No paid materials required.
2. [OWASP: Top 10 for LLM applications](https://genai.owasp.org/llm-top-10/) — Free; no registration required. No paid materials required.

#### Lab: Phase 2 · LLM and GenAI engineering

Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Pipeline documentation assistant

An on-call engineer needs cited answers about pipeline behavior.

**Data:** Use the project's own README, runbook and dbt docs plus 20 labeled questions. Use a fixed seed and keep evaluation cases separate.

**Output:** A local RAG assistant with citations and one read-only metadata tool.

**Effort:** 16h · Intermediate

- **Phase 2 · LLM and GenAI engineering:** Implement Phase 2 · LLM and GenAI engineering in Pipeline documentation assistant. Adapt this focused lab to the project data: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.  Required concepts: Deep learning foundations, Transformer architecture, LLM-specific skills, Evaluation and responsible AI, LLM and RAG stack, Agents, lighter touch.
  - Deliverable: Phase 2 · LLM and GenAI engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local RAG assistant with citations and one read-only metadata tool. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 2 · LLM and GenAI engineering: Phase 2 · LLM and GenAI engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report recall@k on the question set and abstain on questions the docs do not answer.
- [ ] Phase 2 · LLM and GenAI engineering: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### PII-safe training data gate

A data owner needs personal data removed before any model or LLM sees it.

**Data:** Generate 500 fictional support tickets with seeded emails, phone numbers and names. Use a fixed seed and keep evaluation cases separate.

**Output:** A quality-gated redaction step between bronze and the training and embedding inputs.

**Effort:** 16h · Intermediate

- **Phase 2 · LLM and GenAI engineering:** Implement Phase 2 · LLM and GenAI engineering in PII-safe training data gate. Adapt this focused lab to the project data: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.  Required concepts: Deep learning foundations, Transformer architecture, LLM-specific skills, Evaluation and responsible AI, LLM and RAG stack, Agents, lighter touch.
  - Deliverable: Phase 2 · LLM and GenAI engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A quality-gated redaction step between bronze and the training and embedding inputs. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 2 · LLM and GenAI engineering: Phase 2 · LLM and GenAI engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] No seeded identifier reaches the gold table or the vector index, and the gate fails on an unredacted batch.
- [ ] Phase 2 · LLM and GenAI engineering: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### CDC-fed retrieval index

A support assistant must stop citing help articles after they are edited or deleted.

**Data:** Use a disposable PostgreSQL table of 30 help articles with scripted edits and deletes. Use a fixed seed and keep evaluation cases separate.

**Output:** An incremental embedding index fed by CDC events, with citations.

**Effort:** 16h · Intermediate

- **Phase 2 · LLM and GenAI engineering:** Implement Phase 2 · LLM and GenAI engineering in CDC-fed retrieval index. Adapt this focused lab to the project data: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.  Required concepts: Deep learning foundations, Transformer architecture, LLM-specific skills, Evaluation and responsible AI, LLM and RAG stack, Agents, lighter touch.
  - Deliverable: Phase 2 · LLM and GenAI engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An incremental embedding index fed by CDC events, with citations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 2 · LLM and GenAI engineering: Phase 2 · LLM and GenAI engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] After each edit or delete the next query cites only the current version and never a removed article.
- [ ] Phase 2 · LLM and GenAI engineering: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Governed text-to-SQL assistant

An analyst needs warehouse answers without writing SQL or touching restricted columns.

**Data:** Use the star-schema tables from a dbt project with one column marked sensitive. Use a fixed seed and keep evaluation cases separate.

**Output:** A read-only SQL generation tool with schema context, query validation and an evaluation set.

**Effort:** 16h · Intermediate

- **Phase 2 · LLM and GenAI engineering:** Implement Phase 2 · LLM and GenAI engineering in Governed text-to-SQL assistant. Adapt this focused lab to the project data: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.  Required concepts: Deep learning foundations, Transformer architecture, LLM-specific skills, Evaluation and responsible AI, LLM and RAG stack, Agents, lighter touch.
  - Deliverable: Phase 2 · LLM and GenAI engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A read-only SQL generation tool with schema context, query validation and an evaluation set. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 2 · LLM and GenAI engineering: Phase 2 · LLM and GenAI engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Answer 20 labeled questions, reject every query on the sensitive column and never run a write statement.
- [ ] Phase 2 · LLM and GenAI engineering: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Nightly batch scoring job

A retention team needs fresh risk scores each morning without a live API.

**Data:** Generate a daily partition of fictional accounts and a registered model. Use a fixed seed and keep evaluation cases separate.

**Output:** A Spark job that loads the registered model, scores the partition and writes to gold.

**Effort:** 16h · Intermediate

- **Phase 2 · LLM and GenAI engineering:** Extend the project with Phase 2 · LLM and GenAI engineering in Nightly batch scoring job. Adapt this focused lab to the project data: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.  Required concepts: Deep learning foundations, Transformer architecture, LLM-specific skills, Evaluation and responsible AI, LLM and RAG stack, Agents, lighter touch.
  - Deliverable: Phase 2 · LLM and GenAI engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Spark job that loads the registered model, scores the partition and writes to gold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 2 · LLM and GenAI engineering: Phase 2 · LLM and GenAI engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Rerunning a night gives identical scores, and a schema-mismatched partition fails before anything is written.
- [ ] Phase 2 · LLM and GenAI engineering: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Point-in-time feature builder

A data scientist needs training features that never use data from after the prediction date.

**Data:** Generate 1000 fictional accounts with timestamped events and a cancellation label. Use a fixed seed and keep evaluation cases separate.

**Output:** A point-in-time correct feature table and a model trained on it.

**Effort:** 16h · Intermediate

- **Phase 2 · LLM and GenAI engineering:** Extend the project with Phase 2 · LLM and GenAI engineering in Point-in-time feature builder. Adapt this focused lab to the project data: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.  Required concepts: Deep learning foundations, Transformer architecture, LLM-specific skills, Evaluation and responsible AI, LLM and RAG stack, Agents, lighter touch.
  - Deliverable: Phase 2 · LLM and GenAI engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A point-in-time correct feature table and a model trained on it. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 2 · LLM and GenAI engineering: Phase 2 · LLM and GenAI engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show a leakage test where the as-of join excludes future events, then compare metrics against a naive join.
- [ ] Phase 2 · LLM and GenAI engineering: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data drift retraining trigger

An ML owner needs retraining only when input data really changes.

**Data:** Generate twelve weekly batches with drift injected in weeks 8 and 11. Use a fixed seed and keep evaluation cases separate.

**Output:** An orchestrated drift check that starts a tracked retraining run from its data snapshot.

**Effort:** 16h · Intermediate

- **Phase 2 · LLM and GenAI engineering:** Extend the project with Phase 2 · LLM and GenAI engineering in Data drift retraining trigger. Adapt this focused lab to the project data: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.  Required concepts: Deep learning foundations, Transformer architecture, LLM-specific skills, Evaluation and responsible AI, LLM and RAG stack, Agents, lighter touch.
  - Deliverable: Phase 2 · LLM and GenAI engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An orchestrated drift check that starts a tracked retraining run from its data snapshot. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 2 · LLM and GenAI engineering: Phase 2 · LLM and GenAI engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Trigger exactly on the two drifted weeks and record which features moved and by how much.
- [ ] Phase 2 · LLM and GenAI engineering: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### LLM evaluation warehouse

A team needs every assistant answer logged and comparable across prompt versions.

**Data:** Record 200 fictional question, answer and citation runs across two prompt versions. Use a fixed seed and keep evaluation cases separate.

**Output:** A modeled evaluation table with per-version quality and latency views.

**Effort:** 16h · Intermediate

- **Phase 2 · LLM and GenAI engineering:** Extend the project with Phase 2 · LLM and GenAI engineering in LLM evaluation warehouse. Adapt this focused lab to the project data: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.  Required concepts: Deep learning foundations, Transformer architecture, LLM-specific skills, Evaluation and responsible AI, LLM and RAG stack, Agents, lighter touch.
  - Deliverable: Phase 2 · LLM and GenAI engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A modeled evaluation table with per-version quality and latency views. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 2 · LLM and GenAI engineering: Phase 2 · LLM and GenAI engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compute groundedness and latency per version from the table and reproduce one regression found in it.
- [ ] Phase 2 · LLM and GenAI engineering: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature store to prediction loop

An analyst needs churn scores written back next to the source data.

**Data:** Generate fictional accounts and a gold-layer feature table. Use a fixed seed and keep evaluation cases separate.

**Output:** A versioned training run tracked in MLflow, a served model and scores written to gold.

**Effort:** 16h · Intermediate

- **Phase 2 · LLM and GenAI engineering:** Extend the project with Phase 2 · LLM and GenAI engineering in Feature store to prediction loop. Adapt this focused lab to the project data: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.  Required concepts: Deep learning foundations, Transformer architecture, LLM-specific skills, Evaluation and responsible AI, LLM and RAG stack, Agents, lighter touch.
  - Deliverable: Phase 2 · LLM and GenAI engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A versioned training run tracked in MLflow, a served model and scores written to gold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 2 · LLM and GenAI engineering: Phase 2 · LLM and GenAI engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reproduce the run from its logged data snapshot and flag a simulated feature drift.
- [ ] Phase 2 · LLM and GenAI engineering: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### AI data platform design review

A hiring panel needs a defensible end-to-end design for an ML and RAG platform.

**Data:** Describe the platform built in the other AI + Data projects; no new data is required. Use a fixed seed and keep evaluation cases separate.

**Output:** An architecture document, ADRs and a capacity and cost estimate.

**Effort:** 16h · Intermediate

- **Phase 2 · LLM and GenAI engineering:** Extend the project with Phase 2 · LLM and GenAI engineering in AI data platform design review. Adapt this focused lab to the project data: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.  Required concepts: Deep learning foundations, Transformer architecture, LLM-specific skills, Evaluation and responsible AI, LLM and RAG stack, Agents, lighter touch.
  - Deliverable: Phase 2 · LLM and GenAI engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An architecture document, ADRs and a capacity and cost estimate. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 2 · LLM and GenAI engineering: Phase 2 · LLM and GenAI engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Defend three failure scenarios with recovery steps and justify one trade-off against a simpler design.
- [ ] Phase 2 · LLM and GenAI engineering: Build a local RAG assistant over pipeline documentation, with citations, a retrieval evaluation set, structured output and one bounded read-only data tool. Record unsupported questions, model limitations and the conditions under which an agent should not be used.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Phase 3

<a id="de-system-design-interviews"></a>

### Phase 3 · System design and interview preparation

Use the earlier phases and your own projects to communicate architecture trade-offs, solve practical data-engineering exercises and prepare for DE or AI engineering interviews.

**Priority:** Essential · **Study:** 8h · **Practice:** 12h

**Prerequisites:** [Phase 4 · Lakehouse formats and storage internals](data-engineering.md#de-lakehouse) Navigation is unrestricted.

#### Concepts

- [ ] **System design framework:** Clarify requirements, estimate scale, sketch a high-level design, deep-dive into the critical path and explain trade-offs. Batch and streaming choices depend on throughput, latency and correctness; push back on requirements when the constraints conflict. Practice back-of-envelope data-volume estimates aloud.
  - Example: Estimate daily event volume and storage for a CDC service, state assumptions, and revise the design when latency requirements change.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on system design framework. Then reproduce the lesson example: Estimate daily event volume and storage for a CDC service, state assumptions, and revise the design when latency requirements change.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Case studies:** Practice a CDC path from Postgres through Kafka into a lake; a real-time analytics dashboard; a domain data warehouse; a feature store/ML pipeline; a data-quality and observability service; and multi-source ingestion into a medallion architecture.
  - Example: Draw one end-to-end design and include failure recovery, idempotency, ownership and measurable acceptance criteria.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on case studies. Then reproduce the lesson example: Draw one end-to-end design and include failure recovery, idempotency, ownership and measurable acceptance criteria.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Trade-off articulation:** CAP theorem is a practical vocabulary for consistency and availability under partitions, not a universal product label. Discuss cost, performance and complexity; managed service versus custom build; and resolve “it depends” by naming the workload and decision criteria.
  - Example: Compare managed Kafka with a self-managed cluster for a stated team size, throughput, availability target and budget.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on trade-off articulation. Then reproduce the lesson example: Compare managed Kafka with a self-managed cluster for a stated team size, throughput, availability target and budget.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **SQL interview fluency:** Use window functions, CTEs and complex joins under time pressure. Explain query optimization by identifying scans, cardinality and indexes or layout; practice through StrataScratch, DataLemur or LeetCode database exercises.
  - Example: Solve a window-function query from a small fixture and explain why an intentionally slow version scans too much data.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on sql interview fluency. Then reproduce the lesson example: Solve a window-function query from a small fixture and explain why an intentionally slow version scans too much data.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Python interview fluency:** Manipulate records without relying on pandas, refresh OOP in interview language and write readable code on a shared document or whiteboard without autocomplete.
  - Example: Implement a streaming aggregation with standard Python, tests and clear handling for empty and malformed input.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on python interview fluency. Then reproduce the lesson example: Implement a streaming aggregation with standard Python, tests and clear handling for empty and malformed input.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Pipeline design coding:** Practice implementing a simple ETL script, answering idempotency and error-handling questions, and completing documented take-home-style exercises end to end.
  - Example: Build a small restartable ETL function with validation, retry-safe writes, tests and a concise README.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on pipeline design coding. Then reproduce the lesson example: Build a small restartable ETL function with validation, retry-safe writes, tests and a concise README.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Behavioral preparation:** Prepare STAR stories for three or four strong projects: production failure, a design decision you would change and learning quickly. Explain why decisions were made, not only what you built, and prepare thoughtful questions for interviewers.
  - Example: Write three project stories with situation, task, action, result and one reflection; support each with evidence from the project.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on behavioral preparation. Then reproduce the lesson example: Write three project stories with situation, task, action, result and one reflection; support each with evidence from the project.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Mock interviews:** Practice with a peer, mentor or recorded self-explanation across SQL, live coding, system design and behavioral formats. Run a specific retrospective after each mock for fumbles, over-explaining and missed clarification questions.
  - Example: Record a short mock design, score it with a rubric and turn the two largest gaps into follow-up exercises.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on mock interviews. Then reproduce the lesson example: Record a short mock design, score it with a rubric and turn the two largest gaps into follow-up exercises.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Company and role-specific preparation:** Research target-company technology stacks from job postings and engineering blogs; map current skills to role expectations and flag gaps early. Tailor project explanations to DE depth or AI/RAG depth without overstating experience.
  - Example: Choose a real role description, map evidence-backed skills to requirements, and prepare two versions of a project walkthrough.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on company and role-specific preparation. Then reproduce the lesson example: Choose a real role description, map evidence-backed skills to requirements, and prepare two versions of a project walkthrough.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### YouTube: focused explanations and full courses

- [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
  - Explains: Scalability, reliability, storage and architecture tradeoffs.
  - Useful because: Explain why a queue, index or cache is useful before adding one.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### Free written resources

1. [System Design Primer](https://github.com/donnemartin/system-design-primer) — Free; no registration required. No paid materials required.
2. [DataLemur: SQL interview questions](https://datalemur.com/questions) — Free; no registration required. No paid materials required.

#### Lab: Phase 3 · System design and interview preparation

Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### AI data platform design review

A hiring panel needs a defensible end-to-end design for an ML and RAG platform.

**Data:** Describe the platform built in the other AI + Data projects; no new data is required. Use a fixed seed and keep evaluation cases separate.

**Output:** An architecture document, ADRs and a capacity and cost estimate.

**Effort:** 16h · Intermediate

- **Phase 3 · System design and interview preparation:** Implement Phase 3 · System design and interview preparation in AI data platform design review. Adapt this focused lab to the project data: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.  Required concepts: System design framework, Case studies, Trade-off articulation, SQL interview fluency, Python interview fluency, Pipeline design coding, Behavioral preparation, Mock interviews, Company and role-specific preparation.
  - Deliverable: Phase 3 · System design and interview preparation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An architecture document, ADRs and a capacity and cost estimate. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 3 · System design and interview preparation: Phase 3 · System design and interview preparation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Defend three failure scenarios with recovery steps and justify one trade-off against a simpler design.
- [ ] Phase 3 · System design and interview preparation: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Nightly batch scoring job

A retention team needs fresh risk scores each morning without a live API.

**Data:** Generate a daily partition of fictional accounts and a registered model. Use a fixed seed and keep evaluation cases separate.

**Output:** A Spark job that loads the registered model, scores the partition and writes to gold.

**Effort:** 16h · Intermediate

- **Phase 3 · System design and interview preparation:** Extend the project with Phase 3 · System design and interview preparation in Nightly batch scoring job. Adapt this focused lab to the project data: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.  Required concepts: System design framework, Case studies, Trade-off articulation, SQL interview fluency, Python interview fluency, Pipeline design coding, Behavioral preparation, Mock interviews, Company and role-specific preparation.
  - Deliverable: Phase 3 · System design and interview preparation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Spark job that loads the registered model, scores the partition and writes to gold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 3 · System design and interview preparation: Phase 3 · System design and interview preparation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Rerunning a night gives identical scores, and a schema-mismatched partition fails before anything is written.
- [ ] Phase 3 · System design and interview preparation: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Point-in-time feature builder

A data scientist needs training features that never use data from after the prediction date.

**Data:** Generate 1000 fictional accounts with timestamped events and a cancellation label. Use a fixed seed and keep evaluation cases separate.

**Output:** A point-in-time correct feature table and a model trained on it.

**Effort:** 16h · Intermediate

- **Phase 3 · System design and interview preparation:** Extend the project with Phase 3 · System design and interview preparation in Point-in-time feature builder. Adapt this focused lab to the project data: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.  Required concepts: System design framework, Case studies, Trade-off articulation, SQL interview fluency, Python interview fluency, Pipeline design coding, Behavioral preparation, Mock interviews, Company and role-specific preparation.
  - Deliverable: Phase 3 · System design and interview preparation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A point-in-time correct feature table and a model trained on it. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 3 · System design and interview preparation: Phase 3 · System design and interview preparation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show a leakage test where the as-of join excludes future events, then compare metrics against a naive join.
- [ ] Phase 3 · System design and interview preparation: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Pipeline documentation assistant

An on-call engineer needs cited answers about pipeline behavior.

**Data:** Use the project's own README, runbook and dbt docs plus 20 labeled questions. Use a fixed seed and keep evaluation cases separate.

**Output:** A local RAG assistant with citations and one read-only metadata tool.

**Effort:** 16h · Intermediate

- **Phase 3 · System design and interview preparation:** Extend the project with Phase 3 · System design and interview preparation in Pipeline documentation assistant. Adapt this focused lab to the project data: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.  Required concepts: System design framework, Case studies, Trade-off articulation, SQL interview fluency, Python interview fluency, Pipeline design coding, Behavioral preparation, Mock interviews, Company and role-specific preparation.
  - Deliverable: Phase 3 · System design and interview preparation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local RAG assistant with citations and one read-only metadata tool. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 3 · System design and interview preparation: Phase 3 · System design and interview preparation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report recall@k on the question set and abstain on questions the docs do not answer.
- [ ] Phase 3 · System design and interview preparation: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data drift retraining trigger

An ML owner needs retraining only when input data really changes.

**Data:** Generate twelve weekly batches with drift injected in weeks 8 and 11. Use a fixed seed and keep evaluation cases separate.

**Output:** An orchestrated drift check that starts a tracked retraining run from its data snapshot.

**Effort:** 16h · Intermediate

- **Phase 3 · System design and interview preparation:** Extend the project with Phase 3 · System design and interview preparation in Data drift retraining trigger. Adapt this focused lab to the project data: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.  Required concepts: System design framework, Case studies, Trade-off articulation, SQL interview fluency, Python interview fluency, Pipeline design coding, Behavioral preparation, Mock interviews, Company and role-specific preparation.
  - Deliverable: Phase 3 · System design and interview preparation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An orchestrated drift check that starts a tracked retraining run from its data snapshot. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 3 · System design and interview preparation: Phase 3 · System design and interview preparation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Trigger exactly on the two drifted weeks and record which features moved and by how much.
- [ ] Phase 3 · System design and interview preparation: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### LLM evaluation warehouse

A team needs every assistant answer logged and comparable across prompt versions.

**Data:** Record 200 fictional question, answer and citation runs across two prompt versions. Use a fixed seed and keep evaluation cases separate.

**Output:** A modeled evaluation table with per-version quality and latency views.

**Effort:** 16h · Intermediate

- **Phase 3 · System design and interview preparation:** Extend the project with Phase 3 · System design and interview preparation in LLM evaluation warehouse. Adapt this focused lab to the project data: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.  Required concepts: System design framework, Case studies, Trade-off articulation, SQL interview fluency, Python interview fluency, Pipeline design coding, Behavioral preparation, Mock interviews, Company and role-specific preparation.
  - Deliverable: Phase 3 · System design and interview preparation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A modeled evaluation table with per-version quality and latency views. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 3 · System design and interview preparation: Phase 3 · System design and interview preparation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compute groundedness and latency per version from the table and reproduce one regression found in it.
- [ ] Phase 3 · System design and interview preparation: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature store to prediction loop

An analyst needs churn scores written back next to the source data.

**Data:** Generate fictional accounts and a gold-layer feature table. Use a fixed seed and keep evaluation cases separate.

**Output:** A versioned training run tracked in MLflow, a served model and scores written to gold.

**Effort:** 16h · Intermediate

- **Phase 3 · System design and interview preparation:** Extend the project with Phase 3 · System design and interview preparation in Feature store to prediction loop. Adapt this focused lab to the project data: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.  Required concepts: System design framework, Case studies, Trade-off articulation, SQL interview fluency, Python interview fluency, Pipeline design coding, Behavioral preparation, Mock interviews, Company and role-specific preparation.
  - Deliverable: Phase 3 · System design and interview preparation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A versioned training run tracked in MLflow, a served model and scores written to gold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 3 · System design and interview preparation: Phase 3 · System design and interview preparation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reproduce the run from its logged data snapshot and flag a simulated feature drift.
- [ ] Phase 3 · System design and interview preparation: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### PII-safe training data gate

A data owner needs personal data removed before any model or LLM sees it.

**Data:** Generate 500 fictional support tickets with seeded emails, phone numbers and names. Use a fixed seed and keep evaluation cases separate.

**Output:** A quality-gated redaction step between bronze and the training and embedding inputs.

**Effort:** 16h · Intermediate

- **Phase 3 · System design and interview preparation:** Extend the project with Phase 3 · System design and interview preparation in PII-safe training data gate. Adapt this focused lab to the project data: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.  Required concepts: System design framework, Case studies, Trade-off articulation, SQL interview fluency, Python interview fluency, Pipeline design coding, Behavioral preparation, Mock interviews, Company and role-specific preparation.
  - Deliverable: Phase 3 · System design and interview preparation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A quality-gated redaction step between bronze and the training and embedding inputs. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 3 · System design and interview preparation: Phase 3 · System design and interview preparation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] No seeded identifier reaches the gold table or the vector index, and the gate fails on an unredacted batch.
- [ ] Phase 3 · System design and interview preparation: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### CDC-fed retrieval index

A support assistant must stop citing help articles after they are edited or deleted.

**Data:** Use a disposable PostgreSQL table of 30 help articles with scripted edits and deletes. Use a fixed seed and keep evaluation cases separate.

**Output:** An incremental embedding index fed by CDC events, with citations.

**Effort:** 16h · Intermediate

- **Phase 3 · System design and interview preparation:** Extend the project with Phase 3 · System design and interview preparation in CDC-fed retrieval index. Adapt this focused lab to the project data: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.  Required concepts: System design framework, Case studies, Trade-off articulation, SQL interview fluency, Python interview fluency, Pipeline design coding, Behavioral preparation, Mock interviews, Company and role-specific preparation.
  - Deliverable: Phase 3 · System design and interview preparation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An incremental embedding index fed by CDC events, with citations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 3 · System design and interview preparation: Phase 3 · System design and interview preparation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] After each edit or delete the next query cites only the current version and never a removed article.
- [ ] Phase 3 · System design and interview preparation: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Governed text-to-SQL assistant

An analyst needs warehouse answers without writing SQL or touching restricted columns.

**Data:** Use the star-schema tables from a dbt project with one column marked sensitive. Use a fixed seed and keep evaluation cases separate.

**Output:** A read-only SQL generation tool with schema context, query validation and an evaluation set.

**Effort:** 16h · Intermediate

- **Phase 3 · System design and interview preparation:** Extend the project with Phase 3 · System design and interview preparation in Governed text-to-SQL assistant. Adapt this focused lab to the project data: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.  Required concepts: System design framework, Case studies, Trade-off articulation, SQL interview fluency, Python interview fluency, Pipeline design coding, Behavioral preparation, Mock interviews, Company and role-specific preparation.
  - Deliverable: Phase 3 · System design and interview preparation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A read-only SQL generation tool with schema context, query validation and an evaluation set. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Phase 3 · System design and interview preparation: Phase 3 · System design and interview preparation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Answer 20 labeled questions, reject every query on the sensitive column and never run a write statement.
- [ ] Phase 3 · System design and interview preparation: Present a capstone built from Phases 1–9, then complete a mock interview pack: one SQL exercise, one Python ETL exercise, one CDC or warehouse design, three STAR stories and a role-specific skills map. Phase 10 is continuous—begin case studies and behavioral preparation once Phase 4 is solid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Stage checkpoint

<a id="checkpoint-ai-data"></a>

### AI + data capstone

Demonstrate readiness through a reproducible practical handoff. Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.

**Priority:** Essential · **Study:** 1h · **Practice:** 6h

**Prerequisites:** [Phase 1 · ML engineering and MLOps](ai-data.md#de-mlops), [Phase 2 · LLM and GenAI engineering](ai-data.md#de-llm-genai), [Phase 3 · System design and interview preparation](ai-data.md#de-system-design-interviews) Navigation is unrestricted.

#### Concepts

- [ ] **Define the success contract:** Write observable checks before implementation so success is not just a plausible demonstration.
  - Example: Turn this task into a numbered acceptance checklist: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on define the success contract. Then reproduce the lesson example: Turn this task into a numbered acceptance checklist: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Reproduce the baseline:** Keep a simple reference output and deterministic inputs so changes can be compared honestly.
  - Example: Run a fixed input twice and compare saved outputs with the documented baseline.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on reproduce the baseline. Then reproduce the lesson example: Run a fixed input twice and compare saved outputs with the documented baseline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Test a failure boundary:** A working happy path does not establish robustness to malformed data or dependency failures.
  - Example: Inject one malformed input and one controlled failure, then record the resulting state.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on test a failure boundary. Then reproduce the lesson example: Inject one malformed input and one controlled failure, then record the resulting state.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Explain the decisions:** Describe why each technique was chosen and what evidence would make you choose differently.
  - Example: Write a short decision note comparing the chosen approach with one simpler alternative.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on explain the decisions. Then reproduce the lesson example: Write a short decision note comparing the chosen approach with one simpler alternative.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Hand off the evidence:** Another learner must be able to reproduce the result from your instructions and supplied inputs.
  - Example: Ask a teammate to run the README commands in a clean environment and record missing steps.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on hand off the evidence. Then reproduce the lesson example: Ask a teammate to run the README commands in a clean environment and record missing steps.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### YouTube: focused explanations and full courses

- [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
  - Explains: Scalability, reliability, storage and architecture tradeoffs.
  - Useful because: Explain why a queue, index or cache is useful before adding one.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### Free written resources

1. [System Design Primer](https://github.com/donnemartin/system-design-primer) — Free; no registration required. No paid materials required.
2. [DataLemur: SQL interview questions](https://datalemur.com/questions) — Free; no registration required. No paid materials required.

#### AI + data capstone

Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.

**Deliverables**

- Runnable project and reproducible input fixtures
- README, results and decision notes
- Failure evidence and clean-start instructions

**Completion checks**

- [ ] Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.
- [ ] Explain the code and results without relying on an AI-generated summary.
- [ ] A teammate can reproduce the demo without paid credentials.

#### Ten project recommendations

### Nightly batch scoring job

A retention team needs fresh risk scores each morning without a live API.

**Data:** Generate a daily partition of fictional accounts and a registered model. Use a fixed seed and keep evaluation cases separate.

**Output:** A Spark job that loads the registered model, scores the partition and writes to gold.

**Effort:** 16h · Intermediate

- **AI + data capstone:** Extend the project with AI + data capstone in Nightly batch scoring job. Adapt this focused lab to the project data: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: AI + data capstone: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Spark job that loads the registered model, scores the partition and writes to gold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · AI + data capstone: AI + data capstone: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Rerunning a night gives identical scores, and a schema-mismatched partition fails before anything is written.
- [ ] AI + data capstone: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Point-in-time feature builder

A data scientist needs training features that never use data from after the prediction date.

**Data:** Generate 1000 fictional accounts with timestamped events and a cancellation label. Use a fixed seed and keep evaluation cases separate.

**Output:** A point-in-time correct feature table and a model trained on it.

**Effort:** 16h · Intermediate

- **AI + data capstone:** Extend the project with AI + data capstone in Point-in-time feature builder. Adapt this focused lab to the project data: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: AI + data capstone: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A point-in-time correct feature table and a model trained on it. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · AI + data capstone: AI + data capstone: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show a leakage test where the as-of join excludes future events, then compare metrics against a naive join.
- [ ] AI + data capstone: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Pipeline documentation assistant

An on-call engineer needs cited answers about pipeline behavior.

**Data:** Use the project's own README, runbook and dbt docs plus 20 labeled questions. Use a fixed seed and keep evaluation cases separate.

**Output:** A local RAG assistant with citations and one read-only metadata tool.

**Effort:** 16h · Intermediate

- **AI + data capstone:** Extend the project with AI + data capstone in Pipeline documentation assistant. Adapt this focused lab to the project data: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: AI + data capstone: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local RAG assistant with citations and one read-only metadata tool. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · AI + data capstone: AI + data capstone: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report recall@k on the question set and abstain on questions the docs do not answer.
- [ ] AI + data capstone: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data drift retraining trigger

An ML owner needs retraining only when input data really changes.

**Data:** Generate twelve weekly batches with drift injected in weeks 8 and 11. Use a fixed seed and keep evaluation cases separate.

**Output:** An orchestrated drift check that starts a tracked retraining run from its data snapshot.

**Effort:** 16h · Intermediate

- **AI + data capstone:** Extend the project with AI + data capstone in Data drift retraining trigger. Adapt this focused lab to the project data: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: AI + data capstone: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An orchestrated drift check that starts a tracked retraining run from its data snapshot. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · AI + data capstone: AI + data capstone: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Trigger exactly on the two drifted weeks and record which features moved and by how much.
- [ ] AI + data capstone: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### LLM evaluation warehouse

A team needs every assistant answer logged and comparable across prompt versions.

**Data:** Record 200 fictional question, answer and citation runs across two prompt versions. Use a fixed seed and keep evaluation cases separate.

**Output:** A modeled evaluation table with per-version quality and latency views.

**Effort:** 16h · Intermediate

- **AI + data capstone:** Extend the project with AI + data capstone in LLM evaluation warehouse. Adapt this focused lab to the project data: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: AI + data capstone: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A modeled evaluation table with per-version quality and latency views. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · AI + data capstone: AI + data capstone: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compute groundedness and latency per version from the table and reproduce one regression found in it.
- [ ] AI + data capstone: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature store to prediction loop

An analyst needs churn scores written back next to the source data.

**Data:** Generate fictional accounts and a gold-layer feature table. Use a fixed seed and keep evaluation cases separate.

**Output:** A versioned training run tracked in MLflow, a served model and scores written to gold.

**Effort:** 16h · Intermediate

- **AI + data capstone:** Extend the project with AI + data capstone in Feature store to prediction loop. Adapt this focused lab to the project data: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: AI + data capstone: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A versioned training run tracked in MLflow, a served model and scores written to gold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · AI + data capstone: AI + data capstone: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reproduce the run from its logged data snapshot and flag a simulated feature drift.
- [ ] AI + data capstone: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### PII-safe training data gate

A data owner needs personal data removed before any model or LLM sees it.

**Data:** Generate 500 fictional support tickets with seeded emails, phone numbers and names. Use a fixed seed and keep evaluation cases separate.

**Output:** A quality-gated redaction step between bronze and the training and embedding inputs.

**Effort:** 16h · Intermediate

- **AI + data capstone:** Extend the project with AI + data capstone in PII-safe training data gate. Adapt this focused lab to the project data: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: AI + data capstone: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A quality-gated redaction step between bronze and the training and embedding inputs. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · AI + data capstone: AI + data capstone: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] No seeded identifier reaches the gold table or the vector index, and the gate fails on an unredacted batch.
- [ ] AI + data capstone: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### AI data platform design review

A hiring panel needs a defensible end-to-end design for an ML and RAG platform.

**Data:** Describe the platform built in the other AI + Data projects; no new data is required. Use a fixed seed and keep evaluation cases separate.

**Output:** An architecture document, ADRs and a capacity and cost estimate.

**Effort:** 16h · Intermediate

- **AI + data capstone:** Extend the project with AI + data capstone in AI data platform design review. Adapt this focused lab to the project data: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: AI + data capstone: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An architecture document, ADRs and a capacity and cost estimate. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · AI + data capstone: AI + data capstone: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Defend three failure scenarios with recovery steps and justify one trade-off against a simpler design.
- [ ] AI + data capstone: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### CDC-fed retrieval index

A support assistant must stop citing help articles after they are edited or deleted.

**Data:** Use a disposable PostgreSQL table of 30 help articles with scripted edits and deletes. Use a fixed seed and keep evaluation cases separate.

**Output:** An incremental embedding index fed by CDC events, with citations.

**Effort:** 16h · Intermediate

- **AI + data capstone:** Extend the project with AI + data capstone in CDC-fed retrieval index. Adapt this focused lab to the project data: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: AI + data capstone: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An incremental embedding index fed by CDC events, with citations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · AI + data capstone: AI + data capstone: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] After each edit or delete the next query cites only the current version and never a removed article.
- [ ] AI + data capstone: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Governed text-to-SQL assistant

An analyst needs warehouse answers without writing SQL or touching restricted columns.

**Data:** Use the star-schema tables from a dbt project with one column marked sensitive. Use a fixed seed and keep evaluation cases separate.

**Output:** A read-only SQL generation tool with schema context, query validation and an evaluation set.

**Effort:** 16h · Intermediate

- **AI + data capstone:** Extend the project with AI + data capstone in Governed text-to-SQL assistant. Adapt this focused lab to the project data: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: AI + data capstone: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A read-only SQL generation tool with schema context, query validation and an evaluation set. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · AI + data capstone: AI + data capstone: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Answer 20 labeled questions, reject every query on the sensitive column and never run a write statement.
- [ ] AI + data capstone: Connect a gold-layer table to a tracked ML model or a cited RAG assistant, serve it locally and measure it against a baseline. Document the end-to-end system design, its failure recovery and the trade-offs you would defend in an interview.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

