# Project catalog

Browse the [150-project library with English mentor prompts](PROJECT_LIBRARY.md). Every lesson has ten initial project briefs in its domain document. The website supports further batches without repeating ideas. The website uses the same deterministic composer for combinations, with a named task, deliverable and check for every selected skill. Unmapped custom topics are explicitly general practice.

## Example: ML + DL + FastAPI + Docker

### Tiny digit recognition service

A learner needs to compare classical and neural classification end to end.

**Data:** Use scikit-learn bundled 8 by 8 digits; no download needed. Use a fixed seed and keep evaluation cases separate.

**Output:** A linear baseline, small PyTorch MLP, inference endpoint and container when selected.

**Effort:** 31h · Intermediate

- **Machine learning:** Implement Machine learning in Tiny digit recognition service. Train a suitable scikit-learn baseline on features derived from this project’s records. Predict digit class; keep the same target and splits across model comparisons.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics.
- **Deep learning:** Implement Deep learning in Tiny digit recognition service. Train a small PyTorch MLP or sequence model using the same target as the baseline. Predict digit class; keep the same target and splits across model comparisons.
  - Deliverable: A checkpoint, training curves and a measured ML/DL comparison
  - Check: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time.
- **FastAPI routes, validation and OpenAPI:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Tiny digit recognition service: A linear baseline, small PyTorch MLP, inference endpoint and container when selected. Focus: Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- **Docker images, containers and Dockerfiles:** Package the runnable project in Docker; define configuration, non-root execution and a health or CLI smoke check. Apply this to Tiny digit recognition service: A linear baseline, small PyTorch MLP, inference endpoint and container when selected. Focus: Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: Dockerfile, .dockerignore and reproducible run command
  - Check: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A linear baseline, small PyTorch MLP, inference endpoint and container when selected. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Machine learning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] MVP · Deep learning: A checkpoint, training curves and a measured ML/DL comparison
- [ ] MVP · FastAPI routes, validation and OpenAPI: API routes, OpenAPI examples and integration tests
- [ ] Extension · Docker images, containers and Dockerfiles: Dockerfile, .dockerignore and reproducible run command
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report held-out accuracy, confusion matrix and CPU latency for both models.
- [ ] Machine learning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics.
- [ ] Deep learning: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time.
- [ ] FastAPI routes, validation and OpenAPI: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] Docker images, containers and Dockerfiles: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] Compare ML and DL on the same held-out target, metric and CPU latency benchmark.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README and worked example; Requirements and success metric; Architecture, data contracts and ADR; Evaluation and limitations; Local deployment guide and recovery runbook.

### Support ticket model comparison

A support lead needs category suggestions with human review for ambiguity.

**Data:** Generate 180 labeled login, billing and setup tickets with paraphrases. Use a fixed seed and keep evaluation cases separate.

**Output:** A classifier comparison, error slices and a review threshold.

**Effort:** 31h · Intermediate

- **Machine learning:** Implement Machine learning in Support ticket model comparison. Train a suitable scikit-learn baseline on features derived from this project’s records. Predict ticket category (login, billing, setup); keep the same target and splits across model comparisons.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics.
- **Deep learning:** Implement Deep learning in Support ticket model comparison. Train a small PyTorch MLP or sequence model using the same target as the baseline. Predict ticket category (login, billing, setup); keep the same target and splits across model comparisons.
  - Deliverable: A checkpoint, training curves and a measured ML/DL comparison
  - Check: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time.
- **FastAPI routes, validation and OpenAPI:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Support ticket model comparison: A classifier comparison, error slices and a review threshold. Focus: Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- **Docker images, containers and Dockerfiles:** Package the runnable project in Docker; define configuration, non-root execution and a health or CLI smoke check. Apply this to Support ticket model comparison: A classifier comparison, error slices and a review threshold. Focus: Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: Dockerfile, .dockerignore and reproducible run command
  - Check: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A classifier comparison, error slices and a review threshold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Machine learning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] MVP · Deep learning: A checkpoint, training curves and a measured ML/DL comparison
- [ ] MVP · FastAPI routes, validation and OpenAPI: API routes, OpenAPI examples and integration tests
- [ ] Extension · Docker images, containers and Dockerfiles: Dockerfile, .dockerignore and reproducible run command
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Hold out templates, compare a dummy baseline and report macro F1.
- [ ] Machine learning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics.
- [ ] Deep learning: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time.
- [ ] FastAPI routes, validation and OpenAPI: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] Docker images, containers and Dockerfiles: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] Compare ML and DL on the same held-out target, metric and CPU latency benchmark.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README and worked example; Requirements and success metric; Architecture, data contracts and ADR; Evaluation and limitations; Local deployment guide and recovery runbook.

### Household energy forecasting

A planner needs next-day demand estimates with honest validation.

**Data:** Generate 365 daily demand values with seasonality and noise. Use a fixed seed and keep evaluation cases separate.

**Output:** A chronological forecast benchmark and residual report.

**Effort:** 31h · Intermediate

- **Machine learning:** Implement Machine learning in Household energy forecasting. Train a suitable scikit-learn baseline on features derived from this project’s records. Predict next-day energy demand; keep the same target and splits across model comparisons.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics.
- **Deep learning:** Implement Deep learning in Household energy forecasting. Train a small PyTorch MLP or sequence model using the same target as the baseline. Predict next-day energy demand; keep the same target and splits across model comparisons.
  - Deliverable: A checkpoint, training curves and a measured ML/DL comparison
  - Check: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time.
- **FastAPI routes, validation and OpenAPI:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Household energy forecasting: A chronological forecast benchmark and residual report. Focus: Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- **Docker images, containers and Dockerfiles:** Package the runnable project in Docker; define configuration, non-root execution and a health or CLI smoke check. Apply this to Household energy forecasting: A chronological forecast benchmark and residual report. Focus: Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: Dockerfile, .dockerignore and reproducible run command
  - Check: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chronological forecast benchmark and residual report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Machine learning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] MVP · Deep learning: A checkpoint, training curves and a measured ML/DL comparison
- [ ] MVP · FastAPI routes, validation and OpenAPI: API routes, OpenAPI examples and integration tests
- [ ] Extension · Docker images, containers and Dockerfiles: Dockerfile, .dockerignore and reproducible run command
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Beat or explain failure against last-week demand on a future holdout.
- [ ] Machine learning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics.
- [ ] Deep learning: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time.
- [ ] FastAPI routes, validation and OpenAPI: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] Docker images, containers and Dockerfiles: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] Compare ML and DL on the same held-out target, metric and CPU latency benchmark.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README and worked example; Requirements and success metric; Architecture, data contracts and ADR; Evaluation and limitations; Local deployment guide and recovery runbook.

### Nearest example explanation service

A learner needs predictions with inspectable reference examples.

**Data:** Use scikit-learn digits with a fixed train/test split. Use a fixed seed and keep evaluation cases separate.

**Output:** A kNN classifier that returns neighbors and distance explanations.

**Effort:** 31h · Intermediate

- **Machine learning:** Implement Machine learning in Nearest example explanation service. Train a suitable scikit-learn baseline on features derived from this project’s records. Predict digit class; keep the same target and splits across model comparisons.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics.
- **Deep learning:** Extend the project with Deep learning in Nearest example explanation service. Train a small PyTorch MLP or sequence model using the same target as the baseline. Predict digit class; keep the same target and splits across model comparisons.
  - Deliverable: A checkpoint, training curves and a measured ML/DL comparison
  - Check: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time.
- **FastAPI routes, validation and OpenAPI:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Nearest example explanation service: A kNN classifier that returns neighbors and distance explanations. Focus: Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- **Docker images, containers and Dockerfiles:** Package the runnable project in Docker; define configuration, non-root execution and a health or CLI smoke check. Apply this to Nearest example explanation service: A kNN classifier that returns neighbors and distance explanations. Focus: Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: Dockerfile, .dockerignore and reproducible run command
  - Check: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A kNN classifier that returns neighbors and distance explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Machine learning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] MVP · Deep learning: A checkpoint, training curves and a measured ML/DL comparison
- [ ] MVP · FastAPI routes, validation and OpenAPI: API routes, OpenAPI examples and integration tests
- [ ] Extension · Docker images, containers and Dockerfiles: Dockerfile, .dockerignore and reproducible run command
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test scaling, ties and out-of-distribution inputs; record latency.
- [ ] Machine learning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics.
- [ ] Deep learning: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time.
- [ ] FastAPI routes, validation and OpenAPI: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] Docker images, containers and Dockerfiles: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] Compare ML and DL on the same held-out target, metric and CPU latency benchmark.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README and worked example; Requirements and success metric; Architecture, data contracts and ADR; Evaluation and limitations; Local deployment guide and recovery runbook.

### Convolution shape laboratory

A vision learner needs to understand kernels, strides and padding.

**Data:** Generate 16 by 16 images of lines, crosses and circles. Use a fixed seed and keep evaluation cases separate.

**Output:** A tiny CNN classifier with receptive-field diagrams.

**Effort:** 31h · Intermediate

- **Machine learning:** Extend the project with Machine learning in Convolution shape laboratory. Train a suitable scikit-learn baseline on features derived from this project’s records. Predict synthetic shape class; keep the same target and splits across model comparisons.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics.
- **Deep learning:** Implement Deep learning in Convolution shape laboratory. Train a small PyTorch MLP or sequence model using the same target as the baseline. Predict synthetic shape class; keep the same target and splits across model comparisons.
  - Deliverable: A checkpoint, training curves and a measured ML/DL comparison
  - Check: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time.
- **FastAPI routes, validation and OpenAPI:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Convolution shape laboratory: A tiny CNN classifier with receptive-field diagrams. Focus: Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- **Docker images, containers and Dockerfiles:** Package the runnable project in Docker; define configuration, non-root execution and a health or CLI smoke check. Apply this to Convolution shape laboratory: A tiny CNN classifier with receptive-field diagrams. Focus: Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: Dockerfile, .dockerignore and reproducible run command
  - Check: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A tiny CNN classifier with receptive-field diagrams. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Machine learning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] MVP · Deep learning: A checkpoint, training curves and a measured ML/DL comparison
- [ ] MVP · FastAPI routes, validation and OpenAPI: API routes, OpenAPI examples and integration tests
- [ ] Extension · Docker images, containers and Dockerfiles: Dockerfile, .dockerignore and reproducible run command
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Calculate output shapes by hand and match actual PyTorch tensors.
- [ ] Machine learning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics.
- [ ] Deep learning: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time.
- [ ] FastAPI routes, validation and OpenAPI: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] Docker images, containers and Dockerfiles: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] Compare ML and DL on the same held-out target, metric and CPU latency benchmark.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README and worked example; Requirements and success metric; Architecture, data contracts and ADR; Evaluation and limitations; Local deployment guide and recovery runbook.

### Optimizer dynamics race

A learner needs to compare SGD, momentum and AdamW fairly.

**Data:** Generate the same small regression dataset and initial weights for every run. Use a fixed seed and keep evaluation cases separate.

**Output:** Learning curves and an optimizer-update notebook.

**Effort:** 31h · Intermediate

- **Machine learning:** Extend the project with Machine learning in Optimizer dynamics race. Train a suitable scikit-learn baseline on features derived from this project’s records. Predict generated regression response; keep the same target and splits across model comparisons.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics.
- **Deep learning:** Implement Deep learning in Optimizer dynamics race. Train a small PyTorch MLP or sequence model using the same target as the baseline. Predict generated regression response; keep the same target and splits across model comparisons.
  - Deliverable: A checkpoint, training curves and a measured ML/DL comparison
  - Check: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time.
- **FastAPI routes, validation and OpenAPI:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Optimizer dynamics race: Learning curves and an optimizer-update notebook. Focus: Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- **Docker images, containers and Dockerfiles:** Package the runnable project in Docker; define configuration, non-root execution and a health or CLI smoke check. Apply this to Optimizer dynamics race: Learning curves and an optimizer-update notebook. Focus: Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: Dockerfile, .dockerignore and reproducible run command
  - Check: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Learning curves and an optimizer-update notebook. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Machine learning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] MVP · Deep learning: A checkpoint, training curves and a measured ML/DL comparison
- [ ] MVP · FastAPI routes, validation and OpenAPI: API routes, OpenAPI examples and integration tests
- [ ] Extension · Docker images, containers and Dockerfiles: Dockerfile, .dockerignore and reproducible run command
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep seeds and update budgets equal; verify decoupled weight decay numerically.
- [ ] Machine learning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics.
- [ ] Deep learning: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time.
- [ ] FastAPI routes, validation and OpenAPI: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] Docker images, containers and Dockerfiles: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] Compare ML and DL on the same held-out target, metric and CPU latency benchmark.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README and worked example; Requirements and success metric; Architecture, data contracts and ADR; Evaluation and limitations; Local deployment guide and recovery runbook.

### Training failure diagnosis clinic

A developer needs a systematic way to find unstable training.

**Data:** Inject bad learning rates, wrong modes and shuffled labels into a tiny digit model. Use a fixed seed and keep evaluation cases separate.

**Output:** A reproducible diagnostic report and repaired training loop.

**Effort:** 31h · Intermediate

- **Machine learning:** Extend the project with Machine learning in Training failure diagnosis clinic. Train a suitable scikit-learn baseline on features derived from this project’s records. Predict digit class after repairing seeded training failures; keep the same target and splits across model comparisons.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics.
- **Deep learning:** Implement Deep learning in Training failure diagnosis clinic. Train a small PyTorch MLP or sequence model using the same target as the baseline. Predict digit class after repairing seeded training failures; keep the same target and splits across model comparisons.
  - Deliverable: A checkpoint, training curves and a measured ML/DL comparison
  - Check: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time.
- **FastAPI routes, validation and OpenAPI:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Training failure diagnosis clinic: A reproducible diagnostic report and repaired training loop. Focus: Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- **Docker images, containers and Dockerfiles:** Package the runnable project in Docker; define configuration, non-root execution and a health or CLI smoke check. Apply this to Training failure diagnosis clinic: A reproducible diagnostic report and repaired training loop. Focus: Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: Dockerfile, .dockerignore and reproducible run command
  - Check: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A reproducible diagnostic report and repaired training loop. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Machine learning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] MVP · Deep learning: A checkpoint, training curves and a measured ML/DL comparison
- [ ] MVP · FastAPI routes, validation and OpenAPI: API routes, OpenAPI examples and integration tests
- [ ] Extension · Docker images, containers and Dockerfiles: Dockerfile, .dockerignore and reproducible run command
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reproduce each fault, overfit one batch and verify checkpoint reload.
- [ ] Machine learning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics.
- [ ] Deep learning: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time.
- [ ] FastAPI routes, validation and OpenAPI: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] Docker images, containers and Dockerfiles: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] Compare ML and DL on the same held-out target, metric and CPU latency benchmark.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README and worked example; Requirements and success metric; Architecture, data contracts and ADR; Evaluation and limitations; Local deployment guide and recovery runbook.

### Subscription retention baseline

An analyst needs an educational estimate of likely account cancellation.

**Data:** Generate 500 fictional accounts with a binary cancellation label. Use a fixed seed and keep evaluation cases separate.

**Output:** A leakage-safe preprocessing and classification pipeline.

**Effort:** 31h · Intermediate

- **Machine learning:** Implement Machine learning in Subscription retention baseline. Train a suitable scikit-learn baseline on features derived from this project’s records. Predict fictional cancellation label; keep the same target and splits across model comparisons.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics.
- **Deep learning:** Extend the project with Deep learning in Subscription retention baseline. Train a small PyTorch MLP or sequence model using the same target as the baseline. Predict fictional cancellation label; keep the same target and splits across model comparisons.
  - Deliverable: A checkpoint, training curves and a measured ML/DL comparison
  - Check: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time.
- **FastAPI routes, validation and OpenAPI:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Subscription retention baseline: A leakage-safe preprocessing and classification pipeline. Focus: Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- **Docker images, containers and Dockerfiles:** Package the runnable project in Docker; define configuration, non-root execution and a health or CLI smoke check. Apply this to Subscription retention baseline: A leakage-safe preprocessing and classification pipeline. Focus: Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: Dockerfile, .dockerignore and reproducible run command
  - Check: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A leakage-safe preprocessing and classification pipeline. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Machine learning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] MVP · Deep learning: A checkpoint, training curves and a measured ML/DL comparison
- [ ] MVP · FastAPI routes, validation and OpenAPI: API routes, OpenAPI examples and integration tests
- [ ] Extension · Docker images, containers and Dockerfiles: Dockerfile, .dockerignore and reproducible run command
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude post-cancellation fields and report PR AUC plus calibration.
- [ ] Machine learning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics.
- [ ] Deep learning: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time.
- [ ] FastAPI routes, validation and OpenAPI: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] Docker images, containers and Dockerfiles: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] Compare ML and DL on the same held-out target, metric and CPU latency benchmark.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README and worked example; Requirements and success metric; Architecture, data contracts and ADR; Evaluation and limitations; Local deployment guide and recovery runbook.

### Feature contribution audit

A reviewer needs to investigate reliance on a suspicious feature.

**Data:** Generate 400 labeled rows with one leakage feature and correlated proxies. Use a fixed seed and keep evaluation cases separate.

**Output:** An ablation and permutation-importance report.

**Effort:** 31h · Intermediate

- **Machine learning:** Implement Machine learning in Feature contribution audit. Train a suitable scikit-learn baseline on features derived from this project’s records. Predict generated binary outcome with the leakage field excluded; keep the same target and splits across model comparisons.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics.
- **Deep learning:** Extend the project with Deep learning in Feature contribution audit. Train a small PyTorch MLP or sequence model using the same target as the baseline. Predict generated binary outcome with the leakage field excluded; keep the same target and splits across model comparisons.
  - Deliverable: A checkpoint, training curves and a measured ML/DL comparison
  - Check: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time.
- **FastAPI routes, validation and OpenAPI:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Feature contribution audit: An ablation and permutation-importance report. Focus: Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- **Docker images, containers and Dockerfiles:** Package the runnable project in Docker; define configuration, non-root execution and a health or CLI smoke check. Apply this to Feature contribution audit: An ablation and permutation-importance report. Focus: Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: Dockerfile, .dockerignore and reproducible run command
  - Check: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An ablation and permutation-importance report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Machine learning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] MVP · Deep learning: A checkpoint, training curves and a measured ML/DL comparison
- [ ] MVP · FastAPI routes, validation and OpenAPI: API routes, OpenAPI examples and integration tests
- [ ] Extension · Docker images, containers and Dockerfiles: Dockerfile, .dockerignore and reproducible run command
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare held-out performance before/after leakage removal and explain correlation caveats.
- [ ] Machine learning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics.
- [ ] Deep learning: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time.
- [ ] FastAPI routes, validation and OpenAPI: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] Docker images, containers and Dockerfiles: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] Compare ML and DL on the same held-out target, metric and CPU latency benchmark.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README and worked example; Requirements and success metric; Architecture, data contracts and ADR; Evaluation and limitations; Local deployment guide and recovery runbook.

### Inventory movement anomaly detector

A stock manager needs unusual movements flagged for review.

**Data:** Generate 500 movements with 30 labeled injected anomalies. Use a fixed seed and keep evaluation cases separate.

**Output:** An anomaly ranking and threshold investigation notebook.

**Effort:** 31h · Intermediate

- **Machine learning:** Implement Machine learning in Inventory movement anomaly detector. Train a suitable scikit-learn baseline on features derived from this project’s records. Predict injected anomaly flag; keep the same target and splits across model comparisons.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics.
- **Deep learning:** Extend the project with Deep learning in Inventory movement anomaly detector. Train a small PyTorch MLP or sequence model using the same target as the baseline. Predict injected anomaly flag; keep the same target and splits across model comparisons.
  - Deliverable: A checkpoint, training curves and a measured ML/DL comparison
  - Check: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time.
- **FastAPI routes, validation and OpenAPI:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Inventory movement anomaly detector: An anomaly ranking and threshold investigation notebook. Focus: Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- **Docker images, containers and Dockerfiles:** Package the runnable project in Docker; define configuration, non-root execution and a health or CLI smoke check. Apply this to Inventory movement anomaly detector: An anomaly ranking and threshold investigation notebook. Focus: Images and containers, Dockerfile, Runtime configuration.
  - Deliverable: Dockerfile, .dockerignore and reproducible run command
  - Check: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An anomaly ranking and threshold investigation notebook. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Machine learning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] MVP · Deep learning: A checkpoint, training curves and a measured ML/DL comparison
- [ ] MVP · FastAPI routes, validation and OpenAPI: API routes, OpenAPI examples and integration tests
- [ ] Extension · Docker images, containers and Dockerfiles: Dockerfile, .dockerignore and reproducible run command
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report precision at a fixed review budget and inspect false alerts.
- [ ] Machine learning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics.
- [ ] Deep learning: Explain tensor shapes, activation/loss choice and optimizer; compare validation quality and CPU inference time.
- [ ] FastAPI routes, validation and OpenAPI: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] Docker images, containers and Dockerfiles: Build from a clean checkout, execute the smoke test and verify graceful shutdown. Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] Compare ML and DL on the same held-out target, metric and CPU latency benchmark.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README and worked example; Requirements and success metric; Architecture, data contracts and ADR; Evaluation and limitations; Local deployment guide and recovery runbook.

