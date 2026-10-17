# Step-by-step AI engineering route

Based on the supplied Andrew skills map and [roadmap.sh AI Engineer](https://roadmap.sh/ai-engineer). The order is authored for this team, with a direct application-building route and optional ML/DL branches. See [the branching pipeline](PIPELINE.md) for the main route; this document expands the domain directory.

Open a pipeline node → choose relevant lessons → build each exercise → save understanding and evidence → review the checkpoint → continue along the main route or explore a branch. Skipped lessons stay separate from completed lessons.

## 1. [Python](roadmap/python.md)

1 · Programming foundations

**Goal:** Write reliable Python programs before connecting AI tools.

**Checkpoint:** Build a JSON-based study tracker with functions, validation, logging and tests.

**Transition:** You can now organise your code, collaborate in Git and understand HTTP requests.

### Module 1: Language essentials

- [ ] [Types and collections](roadmap/python.md#python-values) · 5h · Foundation
- [ ] [Control flow and functions](roadmap/python.md#python-control) · 5h · Foundation
- [ ] [Files, JSON and exceptions](roadmap/python.md#python-files) · 5h · Foundation

### Module 2: Production Python

- [ ] [Modules, environments and dependencies](roadmap/python.md#python-modules) · 5h · Foundation
- [ ] [OOP, dataclasses and typing](roadmap/python.md#python-objects) · 5h · Foundation
- [ ] [Iterators and generators](roadmap/python.md#python-iteration) · 5h · Foundation
- [ ] [Async, logging, debugging and pytest](roadmap/python.md#python-async) · 7h · Foundation

### Module 3: Practical Python details

- [ ] [Context managers, paths and safe file operations](roadmap/python.md#python-resources-context) · 7h · Foundation
- [ ] [Async cancellation, timeouts and test doubles](roadmap/python.md#python-async-testing) · 7h · Foundation

### Module 4: Mutability, copying, scope and function contracts

- [ ] [Mutability, copying, scope and function contracts](roadmap/python.md#python-mutation-scope) · 9h · Foundation

### Module 5: Stage checkpoint

- [ ] [Python reliability checkpoint](roadmap/python.md#checkpoint-python) · 7h · Foundation

↓ Next: [Engineering foundations](roadmap/engineering.md)

## 2. [Engineering foundations](roadmap/engineering.md)

1 · Programming foundations

**Goal:** Turn scripts into a maintainable, tested team repository.

**Checkpoint:** Open a pull request with a tested HTTP/JSON utility and reproducible setup instructions.

**Transition:** Use these engineering habits while learning how data and mathematical operations work.

### Module 1: Developer workflow

- [ ] [Terminal and Linux](roadmap/engineering.md#engineering-shell) · 5h · Foundation
- [ ] [Git, branches and pull requests](roadmap/engineering.md#engineering-git) · 5h · Foundation

### Module 2: Contracts and quality

- [ ] [HTTP, APIs and JSON contracts](roadmap/engineering.md#engineering-http) · 5h · Foundation
- [ ] [Complexity, code structure and testing](roadmap/engineering.md#engineering-design) · 5h · Foundation

### Module 3: Maintainable service engineering

- [ ] [HTTP contracts, pagination and idempotency](roadmap/engineering.md#engineering-api-contracts) · 7h · Foundation
- [ ] [Unit, integration and contract tests](roadmap/engineering.md#engineering-testing-layers) · 7h · Foundation

### Module 4: Stage checkpoint

- [ ] [Engineering handoff checkpoint](roadmap/engineering.md#checkpoint-engineering) · 7h · Foundation

↓ Next: [Mathematics and data](roadmap/math-data.md)

## 3. [Mathematics and data](roadmap/math-data.md)

1 · Programming foundations

**Goal:** Understand the data, shapes, gradients and statistics behind AI.

**Checkpoint:** Clean a small dataset, plot its distributions and explain a dot product and gradient calculation.

**Transition:** You are ready to serve validated data and predictions through an API.

### Module 1: Mathematical intuition

- [ ] [Vectors, matrices and dot products](roadmap/math-data.md#math-linear) · 5h · Foundation
- [ ] [Derivatives, chain rule and gradients](roadmap/math-data.md#math-calculus) · 5h · Foundation
- [ ] [Probability, distributions and statistics](roadmap/math-data.md#math-probability) · 5h · Foundation

### Module 2: Practical data work

- [ ] [NumPy arrays, shapes and broadcasting](roadmap/math-data.md#data-numpy) · 5h · Foundation
- [ ] [pandas, cleaning and missing values](roadmap/math-data.md#data-pandas) · 5h · Foundation
- [ ] [Visualization and exploratory analysis](roadmap/math-data.md#data-visualization) · 5h · Foundation

### Module 3: Mathematical tools in detail

- [ ] [Norms, projections, eigenvectors and SVD intuition](roadmap/math-data.md#math-linear-decompositions) · 7h · Foundation

### Module 4: Statistical reasoning and data contracts

- [ ] [Sampling, uncertainty, joins and dataset validation](roadmap/math-data.md#data-statistics-validation) · 7h · Foundation

### Module 5: Bayes, likelihood and decision uncertainty

- [ ] [Bayes, likelihood and decision uncertainty](roadmap/math-data.md#math-bayes-likelihood) · 9h · Foundation

### Module 6: Entropy, cross-entropy and KL divergence

- [ ] [Entropy, cross-entropy and KL divergence](roadmap/math-data.md#math-information) · 9h · Foundation

### Module 7: Partial derivatives, Jacobians and vector gradients

- [ ] [Partial derivatives, Jacobians and vector gradients](roadmap/math-data.md#math-jacobians) · 9h · Foundation

### Module 8: Confidence intervals, bootstrap and causal limits

- [ ] [Confidence intervals, bootstrap and causal limits](roadmap/math-data.md#data-inference-causality) · 9h · Foundation

### Module 9: Stage checkpoint

- [ ] [Mathematics and data checkpoint](roadmap/math-data.md#checkpoint-math-data) · 7h · Foundation

↓ Next: [Machine learning](roadmap/ml.md)

## 4. [Machine learning](roadmap/ml.md)

2 · Model fundamentals

**Goal:** Train and evaluate classical models without leakage.

**Checkpoint:** Compare a baseline and two models on a held-out test set; explain metrics and error cases.

**Transition:** Use the same evaluation discipline when moving from classical models to neural networks.

### Module 1: Learning and validation

- [ ] [Supervised learning, regression and classification](roadmap/ml.md#ml-problem) · 5h · Foundation
- [ ] [Train/validation/test, cross-validation and leakage](roadmap/ml.md#ml-splits) · 5h · Foundation
- [ ] [Preprocessing and feature engineering](roadmap/ml.md#ml-preprocessing) · 5h · Foundation

### Module 2: Models and optimization

- [ ] [Linear/logistic regression and gradient descent](roadmap/ml.md#ml-linear) · 5h · Foundation
- [ ] [Trees, random forests and boosting](roadmap/ml.md#ml-trees) · 5h · Foundation
- [ ] [kNN, SVM, clustering and PCA](roadmap/ml.md#ml-neighbors) · 5h · Foundation

### Module 3: Trustworthy results

- [ ] [Bias/variance, regularization and tuning](roadmap/ml.md#ml-generalization) · 5h · Foundation
- [ ] [Imbalance, metrics, calibration and error analysis](roadmap/ml.md#ml-metrics) · 5h · Foundation
- [ ] [Model persistence, inference and data drift](roadmap/ml.md#ml-inference) · 5h · Foundation

### Module 4: Model development in detail

- [ ] [Column transformers, nested validation and tuning budgets](roadmap/ml.md#ml-pipelines-search) · 7h · Foundation
- [ ] [Class imbalance, decision thresholds and calibration](roadmap/ml.md#ml-threshold-imbalance) · 7h · Foundation
- [ ] [Permutation importance, partial dependence and error slices](roadmap/ml.md#ml-interpretation-errors) · 7h · Foundation
- [ ] [SVM margins, kernels, C and feature scale](roadmap/ml.md#ml-svm-kernels) · 7h · Foundation

### Module 5: Time and anomaly tasks

- [ ] [Time-series validation and anomaly-detection baselines](roadmap/ml.md#ml-time-anomalies) · 7h · Foundation

### Module 6: Unsupervised learning in detail

- [ ] [K-means, density clustering and PCA diagnostics](roadmap/ml.md#ml-cluster-validation) · 7h · Foundation

### Module 7: kNN, distance weighting and dimensionality

- [ ] [kNN, distance weighting and dimensionality](roadmap/ml.md#ml-knn-distance) · 9h · Foundation

### Module 8: PCA, explained variance and reconstruction

- [ ] [PCA, explained variance and reconstruction](roadmap/ml.md#ml-pca-reconstruction) · 9h · Foundation

### Module 9: Decision trees, bagging and boosting mechanisms

- [ ] [Decision trees, bagging and boosting mechanisms](roadmap/ml.md#ml-boosting-objectives) · 9h · Foundation

### Module 10: Stage checkpoint

- [ ] [Machine learning checkpoint](roadmap/ml.md#checkpoint-ml) · 7h · Foundation

↓ Next: [Deep learning](roadmap/dl.md)

## 5. [Deep learning](roadmap/dl.md)

2 · Model fundamentals

**Goal:** Understand neural networks, backpropagation and practical optimisation.

**Checkpoint:** Train a small CPU PyTorch model; compare optimisers, save a checkpoint and explain tensor shapes.

**Transition:** Attention and transformers prepare you to understand and use pretrained language models.

### Module 1: Neural network mechanics

- [ ] [Tensors, shapes, networks and autograd](roadmap/dl.md#dl-tensors) · 5h · Foundation
- [ ] [Sigmoid, tanh, ReLU, GELU and softmax](roadmap/dl.md#dl-activations) · 5h · Foundation
- [ ] [MSE, binary and multiclass cross-entropy](roadmap/dl.md#dl-losses) · 5h · Foundation

### Module 2: Optimization and stability

- [ ] [SGD, momentum, RMSprop, Adam and AdamW](roadmap/dl.md#dl-optimizers) · 7h · Foundation
- [ ] [Learning rates, schedules, batch sizes and initialization](roadmap/dl.md#dl-training-settings) · 5h · Foundation
- [ ] [Dropout, normalization, clipping and early stopping](roadmap/dl.md#dl-regularization) · 5h · Foundation
- [ ] [PyTorch loops, checkpoints and reproducibility](roadmap/dl.md#dl-training-loop) · 5h · Foundation

### Module 3: Architectures and efficiency

- [ ] [CNNs and transfer learning](roadmap/dl.md#dl-cnn) · 5h · Foundation
- [ ] [RNN/LSTM, attention and transformers](roadmap/dl.md#dl-sequences) · 5h · Foundation
- [ ] [Mixed precision, memory and inference optimization](roadmap/dl.md#dl-efficiency) · 5h · Specialization

### Module 4: Tensor algebra and differentiation

- [ ] [Tensor indexing, broadcasting and memory layout](roadmap/dl.md#dl-shape-algebra) · 7h · Foundation
- [ ] [Gradients, computation graphs and gradient checking](roadmap/dl.md#dl-gradient-mechanics) · 7h · Foundation

### Module 5: Reliable training and optimisation

- [ ] [Initialisation, signal scale and residual connections](roadmap/dl.md#dl-initialization-depth) · 7h · Foundation
- [ ] [Datasets, DataLoader, collation and padding](roadmap/dl.md#dl-data-pipeline) · 7h · Foundation
- [ ] [SGD, Adam bias correction and decoupled weight decay](roadmap/dl.md#dl-adamw-math) · 7h · Foundation
- [ ] [Learning-rate schedules, effective batch size and experiments](roadmap/dl.md#dl-learning-rate-experiments) · 7h · Foundation
- [ ] [BatchNorm, LayerNorm, dropout and train/eval modes](roadmap/dl.md#dl-normalization-modes) · 7h · Foundation
- [ ] [Log-sum-exp, cross-entropy gradients and label semantics](roadmap/dl.md#dl-loss-derivatives) · 7h · Foundation

### Module 6: Computer vision

- [ ] [Convolutions, padding, stride, dilation and pooling](roadmap/dl.md#dl-convolution-arithmetic) · 7h · Foundation
- [ ] [Classification, detection and segmentation](roadmap/dl.md#dl-vision-tasks) · 7h · Specialization
- [ ] [Transfer learning, augmentation and frozen backbones](roadmap/dl.md#dl-transfer-augmentation) · 7h · Foundation

### Module 7: Sequences and transformers

- [ ] [RNN, LSTM, GRU and teacher forcing](roadmap/dl.md#dl-recurrent-state) · 7h · Foundation
- [ ] [Queries, keys, values, masks and multi-head attention](roadmap/dl.md#dl-attention-math) · 7h · Foundation
- [ ] [Transformer blocks, positions and encoder/decoder tasks](roadmap/dl.md#dl-transformer-blocks) · 7h · Foundation
- [ ] [Causal convolutions, dilation and hierarchical sequence models](roadmap/dl.md#dl-causal-convolutions) · 7h · Specialization

### Module 8: Representation and generative learning

- [ ] [Embeddings, contrastive learning and metric losses](roadmap/dl.md#dl-representation-learning) · 7h · Specialization
- [ ] [Autoencoders, latent spaces and variational objectives](roadmap/dl.md#dl-autoencoders-vae) · 7h · Specialization
- [ ] [GAN and diffusion mechanics on toy distributions](roadmap/dl.md#dl-gan-diffusion) · 9h · Specialization

### Module 9: Diagnostics and efficiency

- [ ] [Overfit one batch, diagnose loss and debug numerical failures](roadmap/dl.md#dl-training-diagnostics) · 7h · Foundation
- [ ] [Profiling, batching, precision and portable model artifacts](roadmap/dl.md#dl-profiling-deployment) · 7h · Specialization

### Module 10: Audio and multimodal learning

- [ ] [Audio sampling, spectrograms and multimodal fusion](roadmap/dl.md#dl-audio-multimodal) · 7h · Specialization

### Module 11: Reinforcement learning overview

- [ ] [Rewards, policies, value estimates and exploration](roadmap/dl.md#dl-reinforcement-basics) · 7h · Specialization

### Module 12: Distributed training: ranks, synchronization and effective batches

- [ ] [Distributed training: ranks, synchronization and effective batches](roadmap/dl.md#dl-distributed-training) · 9h · Specialization

### Module 13: Profiling, memory bandwidth and kernel optimization decisions

- [ ] [Profiling, memory bandwidth and kernel optimization decisions](roadmap/dl.md#dl-kernel-profiling) · 9h · Specialization

### Module 14: Stage checkpoint

- [ ] [Foundation capstone: classical versus neural models](roadmap/dl.md#checkpoint-dl) · 19h · Foundation

↓ Next: [LLM engineering](roadmap/llm.md)

## 6. [LLM engineering](roadmap/llm.md)

3 · Build AI applications

**Goal:** Choose and use language models with deliberate prompts, context and outputs.

**Checkpoint:** Build a structured-output assistant with schema validation, recorded-response tests and a local-model option.

**Transition:** Ground its answers in your own documents through retrieval and citations.

### Module 1: Model foundations

- [ ] [Tokens, embeddings, context and transformer internals](roadmap/llm.md#llm-foundations) · 5h · Essential
- [ ] [Model selection, open models and local serving](roadmap/llm.md#llm-model-selection) · 5h · Essential
- [ ] [Prompting, sampling and structured outputs](roadmap/llm.md#llm-prompting) · 5h · Essential

### Module 2: Application patterns

- [ ] [Context engineering, memory and caching](roadmap/llm.md#llm-context) · 5h · Essential
- [ ] [Tool calling, streaming and multimodal AI](roadmap/llm.md#llm-tools) · 5h · Essential
- [ ] [Fine-tuning, LoRA/QLoRA and quantization](roadmap/llm.md#llm-finetuning) · 7h · Specialization

### Module 3: Inference internals and control

- [ ] [Decoding: temperature, top-k, top-p and stop rules](roadmap/llm.md#llm-sampling-decoding) · 7h · Essential
- [ ] [Prefill, decoding, KV cache and model memory budgets](roadmap/llm.md#llm-kv-cache-serving) · 7h · Specialization
- [ ] [Tokenisation, BPE, special tokens and multilingual budgets](roadmap/llm.md#llm-tokenization-unicode) · 7h · Essential

### Module 4: Training choices and alignment

- [ ] [SFT datasets, LoRA, preference tuning and evaluation boundaries](roadmap/llm.md#llm-lora-objectives) · 7h · Specialization

### Module 5: Model cards, licences and reproducible model selection

- [ ] [Model cards, licences and reproducible model selection](roadmap/llm.md#llm-model-provenance) · 9h · Essential

### Module 6: Structured output, streaming and cancellation contracts

- [ ] [Structured output, streaming and cancellation contracts](roadmap/llm.md#llm-stream-contracts) · 9h · Essential

### Module 7: Preference data, DPO and post-training evaluation

- [ ] [Preference data, DPO and post-training evaluation](roadmap/llm.md#llm-preference-evaluation) · 9h · Specialization

### Module 8: Multimodal input contracts and uncertainty

- [ ] [Multimodal input contracts and uncertainty](roadmap/llm.md#llm-multimodal-contracts) · 9h · Essential

### Module 9: Stage checkpoint

- [ ] [Model integration checkpoint](roadmap/llm.md#checkpoint-llm) · 7h · Essential

↓ Next: [Backend and databases](roadmap/backend.md)

## 7. [Backend and databases](roadmap/backend.md)

1 · Programming foundations

**Goal:** Build the API and database layer that an AI application needs.

**Checkpoint:** Build a FastAPI service with validated inputs, a SQL query and API tests.

**Transition:** Next, learn what a predictive model does so you can compare and serve its results.

### Module 1: FastAPI and full-stack contracts

- [ ] [Frontend essentials, state and accessible UX](roadmap/backend.md#backend-frontend) · 5h · Essential
- [ ] [FastAPI routes, validation and OpenAPI](roadmap/backend.md#fastapi) · 5h · Essential
- [ ] [Frontend, authentication, authorization and sessions](roadmap/backend.md#backend-auth) · 5h · Essential

### Module 2: Data integrity

- [ ] [SQL, PostgreSQL, joins and indexes](roadmap/backend.md#backend-sql) · 5h · Essential
- [ ] [Transactions, concurrency and data quality](roadmap/backend.md#backend-transactions) · 5h · Essential
- [ ] [Vector, NoSQL and graph database tradeoffs](roadmap/backend.md#backend-stores) · 5h · Specialization

### Module 3: Service boundaries in detail

- [ ] [FastAPI dependencies, schemas and testable error boundaries](roadmap/backend.md#backend-fastapi-boundaries) · 7h · Essential
- [ ] [SQL query plans, transaction races and migrations](roadmap/backend.md#backend-sql-performance) · 7h · Essential

### Module 4: Stage checkpoint

- [ ] [Backend and data checkpoint](roadmap/backend.md#checkpoint-backend) · 7h · Essential

↓ Next: [Retrieval and RAG](roadmap/rag.md)

## 8. [Retrieval and RAG](roadmap/rag.md)

3 · Build AI applications

**Goal:** Retrieve useful evidence and connect answers to traceable sources.

**Checkpoint:** Build a document search pipeline with chunking, hybrid retrieval, citations and retrieval measurements.

**Transition:** Measure the complete system and test hostile inputs before giving it more autonomy.

### Module 1: Ingestion and search

- [ ] [Document parsing, chunking and metadata](roadmap/rag.md#rag-ingestion) · 5h · Essential
- [ ] [Embeddings, similarity, indexes and vector databases](roadmap/rag.md#rag-embeddings) · 5h · Essential
- [ ] [Lexical, semantic and hybrid retrieval; filters and reranking](roadmap/rag.md#rag-retrieval) · 5h · Essential

### Module 2: Grounding and evaluation

- [ ] [Grounded generation, citations and retrieval evaluation](roadmap/rag.md#rag-answers) · 5h · Essential
- [ ] [SQL retrieval and knowledge graphs](roadmap/rag.md#rag-sql-graphs) · 5h · Specialization

### Module 3: Retrieval systems in detail

- [ ] [Chunk boundaries, document identity and ingestion updates](roadmap/rag.md#rag-chunking-experiments) · 7h · Essential
- [ ] [BM25-style retrieval, vector fusion and reranking evaluation](roadmap/rag.md#rag-hybrid-reranking) · 7h · Specialization
- [ ] [Evidence selection, citation validation and abstention](roadmap/rag.md#rag-citations-abstention) · 7h · Essential

### Module 4: Document parsing, OCR limits and source provenance

- [ ] [Document parsing, OCR limits and source provenance](roadmap/rag.md#rag-parsing-ocr) · 9h · Essential

### Module 5: Approximate nearest neighbors and index tradeoffs

- [ ] [Approximate nearest neighbors and index tradeoffs](roadmap/rag.md#rag-ann-indexes) · 9h · Specialization

### Module 6: Graph-grounded retrieval and GraphRAG limits

- [ ] [Graph-grounded retrieval and GraphRAG limits](roadmap/rag.md#rag-graph-grounding) · 9h · Specialization

### Module 7: Stage checkpoint

- [ ] [Grounded retrieval checkpoint](roadmap/rag.md#checkpoint-rag) · 7h · Essential

↓ Next: [Evaluation and security](roadmap/eval-security.md)

## 9. [Evaluation and security](roadmap/eval-security.md)

3 · Build AI applications

**Goal:** Measure quality and protect the application against predictable failures.

**Checkpoint:** Create a golden dataset, regression report and prompt-injection tests with explicit failure handling.

**Transition:** Use these checks and permission boundaries when adding tools, workflows and agents.

### Module 1: Evaluation-driven development

- [ ] [Golden datasets and deterministic regression evaluation](roadmap/eval-security.md#eval-datasets) · 5h · Essential
- [ ] [Human evaluation, LLM judges and error analysis](roadmap/eval-security.md#eval-human-judge) · 5h · Essential
- [ ] [Faithfulness, hallucinations, task success and business metrics](roadmap/eval-security.md#eval-metrics) · 5h · Essential

### Module 2: Security and safety

- [ ] [Prompt injection, leakage and adversarial testing](roadmap/eval-security.md#security-injection) · 5h · Essential
- [ ] [Guardrails, secrets, bias/fairness and graceful failure](roadmap/eval-security.md#security-guardrails) · 5h · Essential

### Module 3: Evaluation reliability

- [ ] [Judge rubrics, disagreement and uncertain improvements](roadmap/eval-security.md#eval-judges-statistics) · 7h · Essential
- [ ] [Threat modelling, indirect injection and data minimisation](roadmap/eval-security.md#security-threat-boundaries) · 7h · Essential

### Module 4: Output handling, model supply chains and resource limits

- [ ] [Output handling, model supply chains and resource limits](roadmap/eval-security.md#security-output-supply) · 9h · Essential

### Module 5: Stage checkpoint

- [ ] [Evaluation and security checkpoint](roadmap/eval-security.md#checkpoint-eval-security) · 7h · Essential

↓ Next: [Agents and MCP](roadmap/agents.md)

## 10. [Agents and MCP](roadmap/agents.md)

3 · Build AI applications

**Goal:** Build bounded tool workflows with state, recovery and human approval.

**Checkpoint:** Implement a tool workflow with an MCP connection, approval for sensitive actions and recovery tests.

**Transition:** Deploy the tested workflow with containers, monitoring and reliable operations.

### Module 1: Orchestration

- [ ] [Workflows, agent loops, planning and state](roadmap/agents.md#agents-loops) · 5h · Essential
- [ ] [Tools, APIs, permissions and sandboxing](roadmap/agents.md#agents-tools) · 5h · Essential
- [ ] [LangGraph, multi-agent coordination and failure recovery](roadmap/agents.md#agents-recovery) · 5h · Specialization

### Module 2: Model Context Protocol

- [ ] [MCP host, client, server and transports](roadmap/agents.md#agents-mcp) · 5h · Essential
- [ ] [MCP client connections, context security and testing](roadmap/agents.md#agents-mcp-client) · 5h · Essential

### Module 3: Stateful workflows and tool boundaries

- [ ] [Typed state, checkpoints and bounded execution graphs](roadmap/agents.md#agents-state-machines) · 7h · Essential
- [ ] [MCP tool schemas, transport lifecycle and permission checks](roadmap/agents.md#agents-mcp-contracts) · 7h · Essential

### Module 4: MCP versions, discovery and authorization boundaries

- [ ] [MCP versions, discovery and authorization boundaries](roadmap/agents.md#agents-mcp-versioning) · 9h · Essential

### Module 5: Stage checkpoint

- [ ] [Bounded tools checkpoint](roadmap/agents.md#checkpoint-agents) · 7h · Essential

↓ Next: [Coding agents](roadmap/coding-agents.md)

## 11. [Coding agents](roadmap/coding-agents.md)

4 · Ship and improve

**Goal:** Direct coding agents using clear specifications and verify their work.

**Checkpoint:** Write AGENTS.md and a task specification; review a generated change using tests and security checks.

**Transition:** Connect these engineering capabilities to user needs, product decisions and documentation.

### Module 1: Planning and directing work

- [ ] [Problem definition, research and specifications](roadmap/coding-agents.md#coding-specifications) · 5h · Essential
- [ ] [AGENTS.md, project instructions, tools, plugins and hooks](roadmap/coding-agents.md#coding-context) · 5h · Essential
- [ ] [Agent autonomy, subagents and long-running tasks](roadmap/coding-agents.md#coding-autonomy) · 5h · Essential

### Module 2: Review and verification

- [ ] [Read code, test, lint, type-check and review security](roadmap/coding-agents.md#coding-review) · 5h · Essential
- [ ] [CI/CD integration, verification and iteration](roadmap/coding-agents.md#coding-ci) · 5h · Essential

### Module 3: Verifiable coding workflows

- [ ] [Acceptance tests, change scope and evidence-based review](roadmap/coding-agents.md#coding-specification-review) · 7h · Essential
- [ ] [Tool permissions, untrusted context and recoverable task steps](roadmap/coding-agents.md#coding-autonomy-controls) · 7h · Essential

### Module 4: Stage checkpoint

- [ ] [Coding-agent verification checkpoint](roadmap/coding-agents.md#checkpoint-coding-agents) · 7h · Essential

↓ Next: [Deployment and operations](roadmap/deployment.md)

## 12. [Deployment and operations](roadmap/deployment.md)

4 · Ship and improve

**Goal:** Package and operate an AI service reliably within a small budget.

**Checkpoint:** Run the API in Docker Compose with health checks, timeouts, logs and a documented rollback.

**Transition:** Use coding agents to maintain the service while keeping review and verification under your control.

### Module 1: Packaging and release

- [ ] [Docker images, containers and Dockerfiles](roadmap/deployment.md#docker) · 5h · Essential
- [ ] [Volumes, networks and Docker Compose](roadmap/deployment.md#docker-compose) · 5h · Essential
- [ ] [CI/CD, cloud deployment and rollback](roadmap/deployment.md#deployment-cicd) · 5h · Essential

### Module 2: Reliability and observability

- [ ] [Queues, async processing, retries and timeouts](roadmap/deployment.md#deployment-queues) · 5h · Essential
- [ ] [Logging, tracing, monitoring, alerts and incidents](roadmap/deployment.md#deployment-monitoring) · 5h · Essential
- [ ] [Architecture, load balancing, scalability and cost/latency](roadmap/deployment.md#deployment-scaling) · 5h · Specialization

### Module 3: Reliable operations in detail

- [ ] [Durable jobs, backoff, deduplication and overload](roadmap/deployment.md#deployment-jobs-retries) · 7h · Essential
- [ ] [Service objectives, traces, latency percentiles and rollback](roadmap/deployment.md#deployment-observability-slos) · 7h · Essential

### Module 4: Backup, restore and data recovery drills

- [ ] [Backup, restore and data recovery drills](roadmap/deployment.md#deployment-backup-restore) · 9h · Essential

### Module 5: Stage checkpoint

- [ ] [Operations checkpoint](roadmap/deployment.md#checkpoint-deployment) · 7h · Essential

↓ Next: [Product and documentation](roadmap/product.md)

## 13. [Product and documentation](roadmap/product.md)

4 · Ship and improve

**Goal:** Deliver a useful AI product with evidence, feedback and maintainable documentation.

**Checkpoint:** Ship a small capstone with requirements, architecture, evaluation, deployment instructions and a runbook.

**Transition:** Choose a team capstone, gather user feedback and revisit the lessons revealed by real failures.

### Module 1: Shaping the build

- [ ] [Users, problems, discovery and product decisions](roadmap/product.md#product-discovery) · 5h · Essential
- [ ] [PRD, SRS, use cases and success metrics](roadmap/product.md#product-requirements) · 5h · Essential
- [ ] [Prototypes, MVPs, UX, feedback and A/B testing](roadmap/product.md#product-prototype) · 5h · Essential
- [ ] [Business models, unit economics and high-agency ownership](roadmap/product.md#product-economics) · 5h · Essential

### Module 2: Engineering documentation

- [ ] [Architecture, data requirements, schemas and ADRs](roadmap/product.md#docs-architecture) · 5h · Essential
- [ ] [Prompt specs, model decisions, API specs and evaluation plans](roadmap/product.md#docs-ai) · 5h · Essential
- [ ] [Deployment guides, runbooks, model cards and change logs](roadmap/product.md#docs-operations) · 5h · Essential

### Module 3: Product decisions and documentation details

- [ ] [User interviews, baselines and measurable AI value](roadmap/product.md#product-discovery-metrics) · 7h · Essential
- [ ] [Data cards, evaluation plans and operational handover](roadmap/product.md#docs-delivery-contracts) · 7h · Essential

### Module 4: Stage checkpoint

- [ ] [Application capstone: evidence-grounded AI service](roadmap/product.md#checkpoint-product) · 19h · Essential

Build a team capstone and collect user feedback.
