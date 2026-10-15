import { d, m, l, ch, r } from "./curriculum.mjs";
export const advanced = [
  d(
    "dl",
    "Deep learning",
    "Understand training mechanics, architectures and practical optimization.",
    [
      m("Neural network mechanics", [
        l(
          "dl-tensors",
          "Tensors, shapes, networks and autograd",
          "Explain every dimension and gradient in a small neural network.",
          `Tensors~Tensors carry data, dtype and device; shape errors can survive broadcasting and corrupt training.~A linear layer maps a (batch, features) tensor to (batch, outputs).
Forward pass~Layers compose parameterized transformations to produce predictions.~A two-layer MLP applies linear, ReLU and linear operations.
Backpropagation and autograd~Reverse-mode differentiation accumulates gradients through a computation graph; gradients must be cleared between updates.~Call optimizer.zero_grad(), loss.backward() and optimizer.step() in order.`,
          "Build a two-layer CPU MLP on synthetic data, print layer shapes and compare one autograd derivative with a finite-difference estimate.",
          [
            ch(
              r.torch,
              "PyTorch: tensors",
              "https://docs.pytorch.org/tutorials/beginner/basics/tensorqs_tutorial.html",
            ),
            ch(
              r.dl,
              "D2L: backpropagation",
              "https://d2l.ai/chapter_multilayer-perceptrons/backprop.html",
            ),
          ],
        ),
        l(
          "dl-activations",
          "Sigmoid, tanh, ReLU, GELU and softmax",
          "Choose nonlinearities and interpret multiclass outputs correctly.",
          `Hidden activations~Sigmoid/tanh can saturate; ReLU gates negative values; GELU smoothly weights inputs and is common in transformers.~Plot values and derivatives for these activations.
Softmax~Softmax exponentiates and normalizes logits into probabilities; subtracting the maximum improves numerical stability.~Apply softmax to [1000,1001,1002] without overflow.
Logits versus probabilities~Logits are unnormalized scores; argmax selects a class and differs from training probabilities.~Pass raw logits to PyTorch CrossEntropyLoss rather than applying softmax twice.`,
          "Implement stable NumPy softmax, verify its sum and shift invariance, plot four hidden activations and compare their gradients on extreme inputs.",
          [
            ch(
              r.stat,
              "StatQuest: ArgMax and SoftMax",
              "https://www.youtube.com/watch?v=KpKog-L9veg",
            ),
            ch(
              r.dl,
              "D2L: softmax regression",
              "https://d2l.ai/chapter_linear-classification/softmax-regression.html",
            ),
          ],
        ),
        l(
          "dl-losses",
          "MSE, binary and multiclass cross-entropy",
          "Pair the target representation with the correct loss and output shape.",
          `MSE~Squared error suits continuous targets but is sensitive to outliers.~Compare a residual of 1 with a residual of 10.
Binary cross-entropy~BCEWithLogitsLoss combines sigmoid and binary cross-entropy stably; targets are floating binary values.~Use one output logit per example for a binary classifier.
Multiclass cross-entropy~CrossEntropyLoss accepts class logits and integer class targets for mutually exclusive classes.~Use outputs shaped (N,C) and targets shaped (N).`,
          "Train one regression, one binary and one three-class toy model; assert target dtypes/shapes and intentionally demonstrate an invalid target failing.",
          [
            ch(
              r.torch,
              "PyTorch: loss functions",
              "https://docs.pytorch.org/docs/stable/nn.html#loss-functions",
            ),
            ch(
              r.dl,
              "D2L: softmax implementation",
              "https://d2l.ai/chapter_linear-classification/softmax-regression-concise.html",
            ),
          ],
        ),
      ]),
      m("Optimization and stability", [
        l(
          "dl-optimizers",
          "SGD, momentum, RMSprop, Adam and AdamW",
          "Understand what optimizer state changes and why AdamW is different from Adam.",
          `SGD and momentum~SGD follows the current gradient; momentum smooths updates using accumulated direction.~Compare zigzagging with and without momentum on an elongated quadratic.
RMSprop and Adam~RMSprop rescales by running squared gradients; Adam combines first/second moments with bias correction.~Track moment estimates and epsilon during ten manual Adam updates.
AdamW~AdamW applies decoupled weight decay instead of mixing the penalty into adaptive gradients.~Compare weight norm under Adam and AdamW with otherwise equal settings.
Adam update mechanics~m and v exponentially average gradients and squared gradients using beta1/beta2; divide by 1-beta^t for bias correction, then update with m_hat/(sqrt(v_hat)+epsilon).~Calculate the first update for gradient 2, beta1=0.9, beta2=0.999 and compare it with an SGD step.`,
          "Optimize a two-dimensional quadratic using SGD, momentum, RMSprop, Adam and AdamW; plot trajectories and loss, and explain optimizer state and bias correction.",
          [
            ch(
              r.dl,
              "D2L: optimization algorithms",
              "https://d2l.ai/chapter_optimization/index.html",
            ),
            ch(
              r.torch,
              "PyTorch optimizers",
              "https://docs.pytorch.org/docs/stable/optim.html",
            ),
          ],
          "Core",
          3,
          4,
        ),
        l(
          "dl-training-settings",
          "Learning rates, schedules, batch sizes and initialization",
          "Make training stable before spending more computation on it.",
          `Learning rates and schedules~The step size balances speed and stability; warmup and decay can help but must be evaluated.~Compare fixed rate with a cosine-decay schedule.
Batch size~Batch size changes memory use and gradient noise; gradient accumulation emulates larger updates with smaller physical batches.~Accumulate four mini-batches before one optimizer step.
Initialization~Xavier/He initialization controls variance through layers; all-zero hidden weights prevent useful symmetry breaking.~Inspect activation statistics for zero versus variance-aware initialization.`,
          "Run a small CPU experiment varying learning rate, initialization and batch size one factor at a time; report loss curves and time per epoch.",
          [
            ch(
              r.dl,
              "D2L: numerical stability and initialization",
              "https://d2l.ai/chapter_multilayer-perceptrons/numerical-stability-and-init.html",
            ),
            ch(
              r.dl,
              "D2L: learning-rate scheduling",
              "https://d2l.ai/chapter_optimization/lr-scheduler.html",
            ),
          ],
        ),
        l(
          "dl-regularization",
          "Dropout, normalization, clipping and early stopping",
          "Reduce overfitting and prevent unstable updates without contaminating evaluation.",
          `Dropout and weight decay~Dropout randomly masks activations in training; weight decay shrinks parameters.~Use model.eval() so dropout stops changing predictions during validation.
Batch versus layer normalization~BatchNorm uses batch statistics and running estimates; LayerNorm normalizes within an example and suits variable batches.~Compare train/eval outputs for BatchNorm on a tiny batch.
Gradient clipping and early stopping~Clipping bounds gradient norms; early stopping preserves the best validation checkpoint.~Stop after several non-improving epochs and restore the best model.`,
          "Overfit a small MLP deliberately, then compare regularization; log gradient norms and restore the best validation checkpoint with no test-set tuning.",
          [
            ch(
              r.dl,
              "D2L: dropout",
              "https://d2l.ai/chapter_multilayer-perceptrons/dropout.html",
            ),
            ch(
              r.dl,
              "D2L: batch normalization",
              "https://d2l.ai/chapter_convolutional-modern/batch-norm.html",
            ),
          ],
        ),
        l(
          "dl-training-loop",
          "PyTorch loops, checkpoints and reproducibility",
          "Make a training run inspectable, resumable and comparable.",
          `Training loop~A loop coordinates data loading, forward pass, loss, gradients and updates; validation should disable gradient recording.~Use no_grad or inference_mode and model.eval() for validation.
Checkpoints~Save model weights, optimizer state, epoch and configuration to resume a run accurately.~Resume at the next epoch with identical scheduler state.
Reproducibility~Seeds help but hardware and kernels may remain nondeterministic; record dependencies and dataset splits.~Record the split seed and compare two CPU runs.`,
          "Train a digits MLP on CPU, interrupt and resume from a checkpoint, and compare predictions and metrics with an uninterrupted run.",
          [
            ch(
              r.torch,
              "PyTorch: optimization loop",
              "https://docs.pytorch.org/tutorials/beginner/basics/optimization_tutorial.html",
            ),
            ch(
              r.torch,
              "PyTorch: saving and loading models",
              "https://docs.pytorch.org/tutorials/beginner/basics/saveloadrun_tutorial.html",
            ),
          ],
        ),
      ]),
      m("Architectures and efficiency", [
        l(
          "dl-cnn",
          "CNNs and transfer learning",
          "Use local image structure and existing representations efficiently.",
          `Convolution and pooling~Kernels share weights across spatial positions; stride and padding determine output shapes.~Calculate the output size of a 3×3 convolution on an 8×8 image.
Transfer learning~Freeze or fine-tune a pretrained representation depending on data size and available resources.~Compare a frozen feature extractor with a small newly trained head.
Image evaluation~Augment only training inputs and avoid duplicates across splits.~Keep transformed copies of one image in the same split.`,
          "Train a tiny CNN on scikit-learn digits with CPU-sized batches; compare against an MLP and write a transfer-learning design without requiring a model download.",
          [
            ch(
              r.dl,
              "D2L: convolutions",
              "https://d2l.ai/chapter_convolutional-neural-networks/conv-layer.html",
            ),
            ch(
              r.torch,
              "PyTorch: transfer learning tutorial",
              "https://docs.pytorch.org/tutorials/beginner/transfer_learning_tutorial.html",
            ),
          ],
        ),
        l(
          "dl-sequences",
          "RNN/LSTM, attention and transformers",
          "Understand sequence state and why attention changed language modeling.",
          `RNN and LSTM~Recurrent models update hidden state sequentially; LSTM gates manage longer-term information.~Trace hidden-state updates for a three-token sequence.
Attention~Queries compare with keys, softmax normalizes scores, and values are weighted into a representation.~Calculate a tiny scaled dot-product attention example by hand.
Transformers~Multi-head attention, positional information, residuals and feed-forward blocks compose sequence representations.~Draw tensor shapes for one self-attention block and explain a causal mask.`,
          "Implement one-head causal attention on a tiny tensor; assert future-token weights are zero and compare sequence processing with an RNN diagram.",
          [
            ch(
              r.dl,
              "D2L: attention mechanisms and transformers",
              "https://d2l.ai/chapter_attention-mechanisms-and-transformers/index.html",
            ),
            ch(
              r.dl,
              "D2L: recurrent neural networks",
              "https://d2l.ai/chapter_recurrent-neural-networks/index.html",
            ),
          ],
        ),
        l(
          "dl-efficiency",
          "Mixed precision, memory and inference optimization",
          "Measure bottlenecks and know which optimizations require suitable hardware.",
          `Memory accounting~Parameters, optimizer state, activations and batches all consume memory; training needs more than inference.~Estimate bytes for float32 weights and two Adam moment buffers.
Mixed precision~Lower-precision computation can reduce memory on supported hardware; stability and supported operations matter.~Explain loss scaling and compare dtype storage sizes on CPU without promising GPU speedups.
Inference optimization~Disable gradients, batch carefully and profile before changing architecture.~Benchmark warmed-up CPU inference at batch sizes 1, 8 and 32.`,
          "Write a memory estimate and CPU inference benchmark; include an optional hardware-specific mixed-precision procedure and document unsupported paths.",
          [
            ch(
              r.torch,
              "PyTorch: automatic mixed precision",
              "https://docs.pytorch.org/docs/stable/amp.html",
            ),
            ch(
              r.torch,
              "PyTorch: benchmark utilities",
              "https://docs.pytorch.org/tutorials/recipes/recipes/benchmark.html",
            ),
          ],
          "Useful next",
        ),
      ]),
    ],
    ["ml-linear", "math-calculus"],
  ),
  d(
    "llm",
    "LLM engineering",
    "Build grounded, bounded language-model features with a free local path.",
    [
      m("Model foundations", [
        l(
          "llm-foundations",
          "Tokens, embeddings, context and transformer internals",
          "Understand the model interface and the limitations of a finite context.",
          `Tokenization~A tokenizer maps text pieces to IDs; token counts differ from word counts and depend on the model.~Compare whitespace splitting with a byte-pair tokenization example.
Embeddings and transformers~Embeddings map IDs to vectors; attention mixes token information through transformer blocks.~Trace IDs → embeddings → masked attention → next-token logits.
Pretraining and inference~Training changes weights; inference samples outputs from fixed weights, conditioned on context.~Adding a document to a prompt does not retrain the model.
Context window~Inputs and generated outputs share a finite token budget; exceeding it causes errors or truncation.~Reserve output space before adding retrieved chunks.`,
          "Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.",
          [
            r.hf,
            ch(
              r.dl,
              "D2L: transformer architecture",
              "https://d2l.ai/chapter_attention-mechanisms-and-transformers/transformer.html",
            ),
          ],
        ),
        l(
          "llm-model-selection",
          "Model selection, open models and local serving",
          "Compare quality and deployment constraints before choosing a provider.",
          `Model selection~Task quality, latency, context size, license and hardware matter more than one leaderboard.~Score candidate models against a fixed ten-question evaluation set.
Open and closed models~Available weights permit local serving, but licenses and hardware still constrain usage.~Record a model license and intended use before distributing it.
Self-hosting~Local serving needs memory budgets and operational checks; mock inference is a valid development fallback.~Use a recorded-response fixture when a laptop cannot run the selected model.`,
          "Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.",
          [
            ch(
              r.hf,
              "Hugging Face: using transformers",
              "https://huggingface.co/learn/llm-course/chapter2/1",
            ),
            ch(r.hf, "Ollama documentation", "https://docs.ollama.com/"),
          ],
        ),
        l(
          "llm-prompting",
          "Prompting, sampling and structured outputs",
          "Constrain the task and validate responses instead of trusting fluent text.",
          `Prompt design~State task, relevant context, examples and output requirements; examples must not leak test answers.~Compare zero-shot with two labeled examples on a held-out fixture set.
Sampling~Temperature rescales logits, top-k limits candidates and top-p retains a probability mass; repetition penalties affect repeated tokens.~Sample a toy logits vector at two temperatures with fixed seeds.
Structured output~JSON/schema constraints reduce formatting errors but still need semantic validation.~Reject a negative quantity even when the JSON parses correctly.
Reasoning patterns~Decomposition and ReAct alternate planning with observable tool results; verbose explanations are not evidence of correctness.~Require a cited answer and validate it rather than judging prose length.`,
          "Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.",
          [
            ch(
              r.hf,
              "Hugging Face: generation strategies",
              "https://huggingface.co/docs/transformers/generation_strategies",
            ),
            ch(
              r.hf,
              "Hugging Face: chat templates",
              "https://huggingface.co/docs/transformers/chat_templating",
            ),
          ],
        ),
      ]),
      m("Application patterns", [
        l(
          "llm-context",
          "Context engineering, memory and caching",
          "Supply relevant information while preventing stale, conflicting or untrusted context.",
          `Context sources~System instructions, user inputs, retrieval and tool results have different trust levels.~Label retrieved text as data, not as executable instructions.
Compaction and isolation~Summaries reduce context size but can lose constraints; separate user sessions and agent contexts.~Preserve task constraints explicitly when summarizing old turns.
Memory and caching~Memory persists selected facts; caches reuse prior computation and need scope and invalidation.~Key a retrieval cache by user permissions and document version.`,
          "Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.",
          [
            ch(
              r.agents,
              "Hugging Face: messages and special tokens",
              "https://huggingface.co/learn/agents-course/unit1/messages-and-special-tokens",
            ),
            ch(
              r.hf,
              "Hugging Face: KV cache strategies",
              "https://huggingface.co/docs/transformers/kv_cache",
            ),
          ],
        ),
        l(
          "llm-tools",
          "Tool calling, streaming and multimodal AI",
          "Connect generated requests to bounded software actions and handle incremental outputs.",
          `Tool calling~A model proposes a tool and arguments; application code validates and executes authorized operations.~Reject a filesystem path outside the allowed directory.
Streaming~Chunks arrive incrementally and may contain partial JSON; cancellation and final-state detection are necessary.~Buffer structured output until it is complete before parsing.
Multimodal tasks~Images, audio and video require modality-specific preprocessing and explicit privacy boundaries.~Use local image metadata, prerecorded audio fixtures and timestamped frame descriptions in a mock pipeline.`,
          "Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.",
          [
            ch(
              r.agents,
              "Hugging Face: tools",
              "https://huggingface.co/learn/agents-course/unit1/tools",
            ),
            ch(
              r.hf,
              "Hugging Face: tasks",
              "https://huggingface.co/docs/transformers/task_summary",
            ),
          ],
        ),
        l(
          "llm-finetuning",
          "Fine-tuning, LoRA/QLoRA and quantization",
          "Know when weight adaptation is justified and how it differs from retrieval.",
          `Fine-tuning~Weight updates adapt behavior; split data carefully and compare against prompting/RAG first.~Use formatting failures as a possible adaptation target, not missing current facts.
LoRA and QLoRA~LoRA trains low-rank adapters; QLoRA combines adapter training with quantized base weights and hardware-sensitive setup.~Calculate adapter parameter counts for a small linear layer.
Quantization~Lower-bit representations reduce storage with accuracy and runtime tradeoffs; hardware support differs.~Quantize a NumPy weight vector and measure reconstruction error.`,
          "Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.",
          [
            ch(
              r.hf,
              "Hugging Face PEFT: LoRA",
              "https://huggingface.co/docs/peft/conceptual_guides/lora",
            ),
            ch(
              r.hf,
              "Hugging Face: quantization overview",
              "https://huggingface.co/docs/transformers/quantization/overview",
            ),
          ],
          "Advanced",
          3,
          4,
        ),
      ]),
    ],
    ["dl-sequences"],
  ),
  d(
    "rag",
    "Retrieval and RAG",
    "Connect answers to maintained evidence and evaluate retrieval independently.",
    [
      m("Ingestion and search", [
        l(
          "rag-ingestion",
          "Document parsing, chunking and metadata",
          "Preserve source identity and useful boundaries when preparing knowledge.",
          `Parsing~Text extraction must preserve enough structure to interpret tables, headings and provenance.~Keep a document ID and section title on every extracted passage.
Chunking~Chunk size and overlap trade context completeness against retrieval precision; structure-aware splitting helps.~Split at headings and compare with fixed 400-character chunks.
Metadata and refresh~Version, source, timestamp and permissions support updates and access filters.~Re-ingest a changed document and delete its obsolete chunks.`,
          "Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.",
          [
            ch(
              r.hf,
              "Sentence Transformers: semantic search",
              "https://www.sbert.net/examples/sentence_transformer/applications/semantic-search/README.html",
            ),
            ch(
              r.hf,
              "Haystack: document splitters",
              "https://docs.haystack.deepset.ai/docs/documentsplitter",
            ),
          ],
        ),
        l(
          "rag-embeddings",
          "Embeddings, similarity, indexes and vector databases",
          "Choose representations and retrieval storage based on measured relevance.",
          `Embedding selection~An embedding model maps semantic content into vectors; language, domain and vector dimension affect suitability.~Evaluate ten query/document pairs rather than relying on model size.
Similarity and indexing~Cosine, dot product and Euclidean distance rank differently; approximate indexes trade recall for speed.~Compare brute-force cosine retrieval with an indexed search.
Vector stores~FAISS, Chroma, Qdrant, LanceDB and pgvector offer different persistence/filtering tradeoffs.~Choose an in-memory NumPy index for a ten-document prototype and explain when it becomes insufficient.`,
          "Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.",
          [
            ch(
              r.hf,
              "Sentence Transformers: semantic search",
              "https://www.sbert.net/examples/sentence_transformer/applications/semantic-search/README.html",
            ),
            ch(
              r.hf,
              "FAISS: getting started",
              "https://github.com/facebookresearch/faiss/wiki/Getting-started",
            ),
          ],
        ),
        l(
          "rag-retrieval",
          "Lexical, semantic and hybrid retrieval; filters and reranking",
          "Recover relevant evidence while respecting permissions and improving result order.",
          `Hybrid search~Lexical search captures exact terms while semantic search captures paraphrases; rank fusion combines them.~Retrieve an exact product code lexically and a paraphrased question semantically.
Filters~Apply tenant and permission constraints before exposing results, including during reranking.~A document from another user must never appear in candidates.
Reranking~A second scoring stage compares a smaller candidate set more carefully.~Rerank twenty passages and evaluate top-five relevance.`,
          "Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.",
          [
            ch(
              r.hf,
              "Sentence Transformers: retrieve and rerank",
              "https://www.sbert.net/examples/sentence_transformer/applications/retrieve_rerank/README.html",
            ),
            ch(
              r.hf,
              "Qdrant: hybrid queries",
              "https://qdrant.tech/documentation/concepts/hybrid-queries/",
            ),
          ],
        ),
      ]),
      m("Grounding and evaluation", [
        l(
          "rag-answers",
          "Grounded generation, citations and retrieval evaluation",
          "Make source support testable and refuse unsupported answers.",
          `Grounding~An answer should rely on retrieved evidence; retrieval failures and generation failures require separate diagnosis.~Return an abstention when no passage supports the question.
Citations~A citation needs a stable source and matching evidence, not merely a plausible URL.~Link the answer sentence to the document section that supports it.
Retrieval metrics~Recall@k, precision@k and reciprocal rank measure whether relevant passages were found.~Maintain twenty labeled queries and compare two chunking settings.`,
          "Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.",
          [
            ch(
              r.hf,
              "Haystack: evaluation",
              "https://docs.haystack.deepset.ai/docs/evaluation",
            ),
            ch(
              r.hf,
              "Ragas: metrics",
              "https://docs.ragas.io/en/stable/concepts/metrics/overview/",
            ),
          ],
        ),
        l(
          "rag-sql-graphs",
          "SQL retrieval and knowledge graphs",
          "Use structured relationships when vector similarity alone cannot answer the question.",
          `SQL retrieval~Aggregations and exact filters belong in validated database queries; generated SQL needs strict controls.~Answer a count question with a read-only parameterized query.
Knowledge graphs~Entities and relationships enable explicit traversal and provenance.~Find all documents describing dependencies of one service.
Retrieval choice~Graph, SQL and text retrieval solve different questions and can be combined.~Route totals to SQL and policy explanations to document search.`,
          "Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.",
          [
            ch(
              r.sql,
              "PostgreSQL: querying tables",
              "https://www.postgresql.org/docs/current/tutorial-select.html",
            ),
            ch(
              r.hf,
              "Neo4j: graph database concepts",
              "https://neo4j.com/docs/getting-started/appendix/graphdb-concepts/",
            ),
          ],
          "Useful next",
        ),
      ]),
    ],
    ["llm-context", "data-pandas"],
  ),
  d(
    "agents",
    "Agents and MCP",
    "Build bounded tool workflows before increasing autonomy.",
    [
      m("Orchestration", [
        l(
          "agents-loops",
          "Workflows, agent loops, planning and state",
          "Distinguish fixed control flow from model-directed decisions and bound execution.",
          `Workflows versus agents~A workflow follows known transitions; an agent chooses actions based on observations.~Use a fixed extract→validate→save flow when the steps are predictable.
Planning and loops~An agent alternates decisions, tool actions and observations; impose iteration/time limits.~Stop after five tool calls and return a partial result with a reason.
State and memory~State records current execution; memory persists selected knowledge across runs and needs scope.~Checkpoint task state without sharing another user's history.`,
          "Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.",
          [
            r.agents,
            ch(
              r.agents,
              "LangGraph: overview",
              "https://docs.langchain.com/oss/python/langgraph/overview",
            ),
          ],
        ),
        l(
          "agents-tools",
          "Tools, APIs, permissions and sandboxing",
          "Treat every tool argument as untrusted input and limit what an agent may change.",
          `Tool schemas~Names, descriptions and argument schemas explain supported actions; validation still occurs in software.~A search tool accepts a bounded query length and result limit.
Permissions and approval~Read access and write access are different; consequential actions require explicit authorization.~Let an agent draft a change but require a human before applying it.
Sandboxing~Restrict filesystem/network/process capabilities and enforce resource limits.~Use a temporary allowed directory and reject parent-directory traversal.`,
          "Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.",
          [
            ch(
              r.agents,
              "Hugging Face: tools",
              "https://huggingface.co/learn/agents-course/unit1/tools",
            ),
            r.security,
          ],
        ),
        l(
          "agents-recovery",
          "LangGraph, multi-agent coordination and failure recovery",
          "Make coordination explicit and preserve useful work when dependencies fail.",
          `Graph orchestration~Nodes transform state and edges select transitions; graph state schemas make assumptions visible.~Route failed retrieval to a fallback node rather than retrying indefinitely.
Multi-agent context~Each worker needs a bounded task, appropriate context and an output contract; more workers can add coordination cost.~Separate research and verification outputs with source IDs.
Recovery~Retries need bounds and idempotency; durable checkpoints avoid repeating completed side effects.~Resume after a mock tool timeout without duplicating a saved result.`,
          "Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.",
          [
            ch(
              r.agents,
              "LangGraph: persistence",
              "https://docs.langchain.com/oss/python/langgraph/persistence",
            ),
            ch(
              r.agents,
              "LangGraph: workflows and agents",
              "https://docs.langchain.com/oss/python/langgraph/workflows-agents",
            ),
          ],
          "Useful next",
        ),
      ]),
      m("Model Context Protocol", [
        l(
          "agents-mcp",
          "MCP host, client, server and transports",
          "Understand the protocol boundary independently of any coding assistant vendor.",
          `Roles~The host manages user interaction and permissions, clients connect to servers, and servers expose capabilities.~Draw one host connected to two distinct tool servers.
Capabilities~Tools perform actions, resources expose data and prompts supply reusable templates.~Expose a read-only document resource separately from a search tool.
Transports~stdio connects local processes; Streamable HTTP supports remote connections with authentication boundaries.~Keep a local stdio tool separate from a remotely reachable HTTP service.`,
          "Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.",
          [
            r.mcp,
            ch(
              r.mcp,
              "MCP: build a server",
              "https://modelcontextprotocol.io/docs/develop/build-server",
            ),
          ],
        ),
        l(
          "agents-mcp-client",
          "MCP client connections, context security and testing",
          "Prevent remote tool descriptions or results from overriding application policy.",
          `Connections~Clients discover capabilities, call tools and handle disconnects/timeouts without corrupting state.~Report an unavailable server while keeping previous results.
Context security~Tool outputs are untrusted data and can contain prompt injection; identities and permissions must survive context assembly.~Ignore a document instruction asking to expose secrets.
Protocol tests~Validate argument/output shapes, failures and transport behavior with a test harness.~Test a malformed tool response and a disconnected server.`,
          "Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.",
          [
            ch(
              r.mcp,
              "MCP: build a client",
              "https://modelcontextprotocol.io/docs/develop/build-client",
            ),
            ch(
              r.mcp,
              "MCP: security best practices",
              "https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices",
            ),
          ],
        ),
      ]),
    ],
    ["llm-tools"],
  ),
  d(
    "backend",
    "Backend and databases",
    "Expose reliable APIs and protect shared application state.",
    [
      m("FastAPI and full-stack contracts", [
        l(
          "backend-frontend",
          "Frontend essentials, state and accessible UX",
          "Understand the browser side of a full-stack AI product instead of treating it as an afterthought.",
          `HTML and CSS~Semantic HTML describes controls and structure; responsive CSS adapts layout without hiding essential functionality.~Use a labeled form, a result list and a keyboard-visible submit button.
Browser state~Inputs, pending requests, saved records and errors are distinct states; rerendering should not destroy unsaved work.~Retain the draft when the API rejects a save.
API integration and accessibility~Fetch structured data, handle status codes and announce outcomes; keyboard users need the same actions as pointer users.~Show a loading state, a cited result and an actionable error message.`,
          "Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.",
          [
            ch(
              r.http,
              "MDN: your first website",
              "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website",
            ),
            ch(
              r.http,
              "MDN: using Fetch",
              "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
            ),
          ],
        ),
        l(
          "fastapi",
          "FastAPI routes, validation and OpenAPI",
          "Build a model API with predictable input/output shapes and inspectable documentation.",
          `Routes and models~Routes map methods and paths to operations; Pydantic validates external data and response models constrain output.~Reject a missing text field with a validation response.
Dependencies and async~Dependencies provide shared resources; async suits I/O, while heavy CPU work needs suitable execution separation.~Inject a model once instead of loading it per request.
OpenAPI and errors~Document schemas and status codes; sanitized errors help clients recover.~Return a clear 503 when inference is temporarily unavailable.`,
          "Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.",
          [
            r.fastapi,
            ch(
              r.fastapi,
              "FastAPI: request bodies",
              "https://fastapi.tiangolo.com/tutorial/body/",
            ),
          ],
        ),
        l(
          "backend-auth",
          "Frontend, authentication, authorization and sessions",
          "Connect a browser to an API while enforcing access on the trusted side.",
          `Frontend and API state~Loading, error and saved states must reflect actual server outcomes.~Keep form input visible when a save fails.
Authentication versus authorization~Identity proves who a caller is; authorization decides what that caller may read or change.~A valid login cannot edit another user's progress.
Sessions and secrets~Session credentials expire and need appropriate storage; privileged secrets never belong in browser bundles.~Keep database service credentials in server configuration only.`,
          "Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.",
          [
            ch(
              r.fastapi,
              "FastAPI: security introduction",
              "https://fastapi.tiangolo.com/tutorial/security/",
            ),
            ch(
              r.http,
              "MDN: client-side web APIs",
              "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction",
            ),
          ],
        ),
      ]),
      m("Data integrity", [
        l(
          "backend-sql",
          "SQL, PostgreSQL, joins and indexes",
          "Model relationships and inspect query performance before adding infrastructure.",
          `SQL and joins~Primary/foreign keys represent identities and relationships; joins combine matching rows.~Join members to their project participation records.
Indexes~Indexes speed selected lookups but cost writes and storage; query plans reveal actual usage.~Index lesson progress by user_id and lesson_id.
Schemas and migrations~Migrations version schema changes; existing data requires compatibility and a rollback/backup plan.~Add a nullable field before requiring it in updated clients.`,
          "Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.",
          [
            ch(
              r.sql,
              "PostgreSQL: joins",
              "https://www.postgresql.org/docs/current/tutorial-join.html",
            ),
            ch(
              r.sql,
              "PostgreSQL: indexes",
              "https://www.postgresql.org/docs/current/indexes.html",
            ),
          ],
        ),
        l(
          "backend-transactions",
          "Transactions, concurrency and data quality",
          "Prevent races and partial updates in multi-user applications.",
          `Transactions~Related changes should commit together or roll back together.~Create a project and its owner participant in one transaction.
Concurrency~Unique constraints and atomic updates prevent races that client-side checks cannot.~Two simultaneous join requests should produce one membership row.
Data quality and privacy~Constraints preserve allowed values; retention and access rules govern sensitive records.~Reject invalid statuses and avoid exposing private notes in team summaries.`,
          "Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.",
          [
            ch(
              r.sql,
              "PostgreSQL: transactions",
              "https://www.postgresql.org/docs/current/tutorial-transactions.html",
            ),
            ch(
              r.sql,
              "PostgreSQL: concurrency control",
              "https://www.postgresql.org/docs/current/mvcc.html",
            ),
          ],
        ),
        l(
          "backend-stores",
          "Vector, NoSQL and graph database tradeoffs",
          "Choose the simplest store that supports your access patterns.",
          `Vector storage~Vector indexes support similarity retrieval but require consistent dimensions, versions and access filters.~Store embedding_model_version with each document vector.
NoSQL~Document/key-value stores can simplify flexible records but may change transaction and query tradeoffs.~Compare a document record with normalized SQL tables.
Graph storage~Relationship traversal can justify a graph model; many small cases work in SQL or memory.~Represent prerequisites as directed edges and detect cycles.`,
          "Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.",
          [
            ch(
              r.sql,
              "pgvector: PostgreSQL vector extension",
              "https://github.com/pgvector/pgvector",
            ),
            ch(
              r.hf,
              "Neo4j: graph database concepts",
              "https://neo4j.com/docs/getting-started/appendix/graphdb-concepts/",
            ),
          ],
          "Useful next",
        ),
      ]),
    ],
    ["engineering-http"],
  ),
  d(
    "eval-security",
    "Evaluation and security",
    "Make quality, safety and failure behavior measurable.",
    [
      m("Evaluation-driven development", [
        l(
          "eval-datasets",
          "Golden datasets and deterministic regression evaluation",
          "Make improvement claims reproducible and keep evaluation cases separate from tuning.",
          `Golden datasets~Curated inputs, expected behavior and labels define what success means; include difficult and negative cases.~Record twenty questions including unsupported requests.
Deterministic checks~Schema, citation validity and tool permissions can be tested without a judge model.~Assert every citation refers to a retrieved source.
Regression evaluation~Run the same cases after model, prompt, retrieval or tool changes and compare per-case failures.~Reject a change that breaks previously correct abstentions.`,
          "Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.",
          [
            ch(
              r.hf,
              "Haystack: evaluation",
              "https://docs.haystack.deepset.ai/docs/evaluation",
            ),
            r.testing,
          ],
        ),
        l(
          "eval-human-judge",
          "Human evaluation, LLM judges and error analysis",
          "Combine measurable checks with careful human judgment and known judge limitations.",
          `Human rubrics~Clear criteria and blinded comparisons reduce inconsistent judgments.~Score relevance and evidence support separately on a 1–3 rubric.
Model-based judging~Judges can be biased by order, verbosity or their own errors; calibrate against human labels.~Swap answer order and inspect disagreement on a small set.
Failure categories~Separate retrieval misses, unsupported generation, formatting and tool failures to choose fixes.~Fix chunking when the correct passage was never retrieved.`,
          "Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.",
          [
            ch(
              r.hf,
              "Ragas: metrics overview",
              "https://docs.ragas.io/en/stable/concepts/metrics/overview/",
            ),
            ch(
              r.product,
              "PAIR: explainability and trust",
              "https://pair.withgoogle.com/guidebook/chapters/explainability-trust/",
            ),
          ],
        ),
        l(
          "eval-metrics",
          "Faithfulness, hallucinations, task success and business metrics",
          "Measure product outcomes alongside model quality, latency and cost.",
          `Faithfulness and hallucinations~Support by provided evidence differs from truth in the wider world; define unsupported-claim rules.~Flag a correct-sounding fact absent from the retrieved sources.
Task completion~An end-to-end task may fail even when individual answers sound good.~Measure whether the user found and acted on the correct document.
Operational and business metrics~Track p95 latency, errors, cost estimates, adoption and feedback with explicit denominators.~Report successful completed tasks per 100 attempts.`,
          "Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.",
          [
            ch(
              r.product,
              "PAIR: defining success",
              "https://pair.withgoogle.com/guidebook/chapters/user-needs/",
            ),
            ch(
              r.architecture,
              "Google SRE: monitoring distributed systems",
              "https://sre.google/sre-book/monitoring-distributed-systems/",
            ),
          ],
        ),
      ]),
      m("Security and safety", [
        l(
          "security-injection",
          "Prompt injection, leakage and adversarial testing",
          "Keep retrieved content and model proposals outside trusted authorization decisions.",
          `Prompt injection~Untrusted inputs can request changes to policy; delimiters alone do not enforce security.~A retrieved page asking for secrets must remain data, not an instruction.
Leakage and privacy~Private documents, logs and cached results need consistent access control and minimization.~Prevent a cached answer for user A from being served to user B.
Adversarial tests~Test malicious tool arguments, cross-user retrieval and hidden instructions, not only friendly prompts.~Include traversal and forged identity cases in a security fixture suite.`,
          "Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.",
          [
            r.security,
            ch(
              r.mcp,
              "MCP: security best practices",
              "https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices",
            ),
          ],
        ),
        l(
          "security-guardrails",
          "Guardrails, secrets, bias/fairness and graceful failure",
          "Constrain inputs and actions while making limitations visible to users.",
          `Guardrails~Input/output validation, permissions and action limits provide layered controls; content filters alone are insufficient.~Allowlist tool names and cap requested result counts.
Secrets and rate limits~Keep credentials outside source code; enforce limits at trusted boundaries and sanitize logs.~Return a bounded retry hint when a request budget is exceeded.
Bias and fairness~Evaluate performance across relevant groups without assuming aggregate accuracy is equitable.~Compare false-negative rates across synthetic groups and report sample sizes.
Graceful failure~Explain unavailable dependencies and safe next actions instead of inventing answers.~Return a partial cited answer or abstention with a clear reason.`,
          "Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.",
          [
            r.security,
            ch(
              r.product,
              "PAIR: errors and graceful failure",
              "https://pair.withgoogle.com/guidebook/chapters/errors-failing-gracefully/",
            ),
          ],
        ),
      ]),
    ],
    ["ml-metrics", "llm-prompting"],
  ),
  d(
    "deployment",
    "Deployment and operations",
    "Release reproducible services and observe their real behavior.",
    [
      m("Packaging and release", [
        l(
          "docker",
          "Docker images, containers and Dockerfiles",
          "Package a service so its runtime can be reproduced on another machine.",
          `Images and containers~An image is a packaged filesystem/configuration; a container is a running isolated process using it.~Rebuild an image after changing dependencies rather than editing a running container.
Dockerfile~Layers, small base images and cache ordering affect build speed and attack surface.~Copy dependency files before application files and run as a non-root user.
Runtime configuration~Environment variables configure deployments; secrets are not baked into images.~Pass a configuration value at runtime and keep credentials out of build layers.`,
          "Containerize a local FastAPI health/prediction service, run as non-root and prove the image works without your local Python environment.",
          [
            r.docker,
            ch(
              r.docker,
              "Docker: writing a Dockerfile",
              "https://docs.docker.com/get-started/docker-concepts/building-images/writing-a-dockerfile/",
            ),
          ],
        ),
        l(
          "docker-compose",
          "Volumes, networks and Docker Compose",
          "Connect services while preserving data across container replacement.",
          `Volumes~Named volumes persist data independently of a container lifecycle; deletion needs deliberate handling.~Recreate a database container and verify the stored record remains.
Networks~Containers communicate through scoped networks and service names; exposed ports widen access.~Connect an API to a database without exposing the database publicly.
Compose~Compose declares multi-service configuration and health checks; startup order alone does not guarantee readiness.~Wait for a healthy database before serving requests.`,
          "Create a Compose API/database setup with a named volume and health checks; verify data persistence and document a safe teardown that preserves the volume.",
          [
            ch(
              r.docker,
              "Docker: Compose getting started",
              "https://docs.docker.com/compose/gettingstarted/",
            ),
            ch(
              r.docker,
              "Docker: volumes",
              "https://docs.docker.com/engine/storage/volumes/",
            ),
          ],
        ),
        l(
          "deployment-cicd",
          "CI/CD, cloud deployment and rollback",
          "Automate checks and preserve a safe path back to a working release.",
          `CI/CD~Continuous integration checks changes; deployment should use a tested immutable artifact.~Run tests and a build before publishing a versioned image.
Cloud and infrastructure~Compute, storage, networking and configuration need documented ownership and limits.~Use a local deployment rehearsal when no free cloud runtime is available.
Rollback and migrations~Application rollback and schema compatibility must be considered together.~Deploy a backward-compatible field addition before clients require it.`,
          "Write a GitHub Actions test/build workflow and rehearse two versioned local releases with a rollback; document free-tier deployment settings without opening a paid subscription.",
          [
            ch(
              r.git,
              "GitHub Actions: Python build and test",
              "https://docs.github.com/en/actions/tutorials/build-and-test-code/python",
            ),
            ch(
              r.architecture,
              "Google SRE: release engineering",
              "https://sre.google/sre-book/release-engineering/",
            ),
          ],
        ),
      ]),
      m("Reliability and observability", [
        l(
          "deployment-queues",
          "Queues, async processing, retries and timeouts",
          "Handle slow jobs and unreliable dependencies without duplicate work.",
          `Queues~A queue decouples submission from execution; acknowledge only after work reaches a durable state.~Return a job ID instead of holding an HTTP connection during long processing.
Retries and idempotency~At-least-once work delivery can repeat operations; deduplicate by job or request key.~Repeated processing of one document should not create duplicate chunks.
Timeouts and caching~Bound waiting and cache safe reusable results with scoped keys and expiry.~Fail a stalled dependency quickly and retain a valid previous cached result.`,
          "Implement a local SQLite-backed job queue with one worker, bounded retries, timeout handling and idempotent document processing; inject a worker restart.",
          [
            ch(
              r.architecture,
              "Google SRE: handling overload",
              "https://sre.google/sre-book/handling-overload/",
            ),
            ch(
              r.python,
              "asyncio: queues",
              "https://docs.python.org/3/library/asyncio-queue.html",
            ),
          ],
        ),
        l(
          "deployment-monitoring",
          "Logging, tracing, monitoring, alerts and incidents",
          "Find failures using evidence and define actionable recovery steps.",
          `Observability~Logs describe events, metrics aggregate behavior and traces connect spans through one request.~Attach a request ID to ingestion, retrieval and inference events.
Monitoring and alerts~Track availability, error rate, p95 latency and AI-specific quality; alerts should require action.~Alert on sustained retrieval failures rather than every single transient exception.
Runbooks and incident response~Document diagnosis, mitigation, rollback and follow-up; preserve evidence without exposing sensitive data.~Rehearse a model-unavailable incident with a safe fallback.`,
          "Instrument a local service with structured logs and latency counters; simulate an outage and follow a written incident runbook to restore service.",
          [
            ch(
              r.architecture,
              "Google SRE: monitoring distributed systems",
              "https://sre.google/sre-book/monitoring-distributed-systems/",
            ),
            ch(
              r.architecture,
              "Google SRE: managing incidents",
              "https://sre.google/sre-book/managing-incidents/",
            ),
          ],
        ),
        l(
          "deployment-scaling",
          "Architecture, load balancing, scalability and cost/latency",
          "Measure system limits before adding complexity or expensive infrastructure.",
          `Architecture and microservices~Clear boundaries matter; splitting services adds network and operational failure modes.~Keep a small API monolithic until independent scaling is justified.
Load and scalability~Concurrency, bottlenecks and queueing affect tail latency; load balancing spreads requests but does not fix slow shared state.~Compare one versus two local workers under a bounded test.
Optimization and economics~Measure latency, memory and per-task resource use; caching/batching trade freshness and responsiveness.~Estimate cost for optional paid deployment while keeping the actual lab local and free.`,
          "Run a bounded local load test, identify the first bottleneck and compare one measured optimization; record p50/p95, errors and resource limits in an ADR.",
          [
            ch(
              r.architecture,
              "Google SRE: load balancing at the frontend",
              "https://sre.google/sre-book/load-balancing-frontend/",
            ),
            ch(
              r.architecture,
              "Google SRE: addressing cascading failures",
              "https://sre.google/sre-book/addressing-cascading-failures/",
            ),
          ],
          "Useful next",
        ),
      ]),
    ],
    ["fastapi", "engineering-git"],
  ),
  d(
    "coding-agents",
    "Coding agents",
    "Direct and verify generated work with clear engineering context.",
    [
      m("Planning and directing work", [
        l(
          "coding-specifications",
          "Problem definition, research and specifications",
          "Give humans and coding tools a concrete goal and verifiable scope.",
          `Problem and research~Understand the user problem and existing implementation before proposing changes.~Read the affected code and identify its callers before fixing a bug.
Requirements and architecture~Describe behavior, interfaces, constraints and acceptance criteria without inventing extra features.~Specify invalid-input behavior for a new endpoint.
Task decomposition~Bound tasks by coherent outcomes and include integration responsibility.~Separate dataset preparation from API delivery but name who verifies their contract.`,
          "Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.",
          [r.docs, r.coding],
        ),
        l(
          "coding-context",
          "AGENTS.md, project instructions, tools, plugins and hooks",
          "Make project context explicit and keep automation within defined permissions.",
          `Project context~Repository instructions should reference requirements, conventions and important checks.~AGENTS.md links to architecture and evaluation documents.
Tools, MCP and plugins~Each integration grants capabilities and trust boundaries; only enable necessary access.~Expose read-only repository search before adding write tools.
Hooks and harnesses~A harness manages context, tools and execution; hooks run defined checks at lifecycle events.~Run a local type check after a generated edit without letting tool output redefine permissions.`,
          "Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.",
          [r.mcp, r.coding],
        ),
        l(
          "coding-autonomy",
          "Agent autonomy, subagents and long-running tasks",
          "Delegate bounded work without surrendering responsibility for integration.",
          `Autonomy boundaries~Specify permitted actions, stopping conditions and human approval for consequential changes.~Allow code drafting but require approval before external publication.
Context management~Finite context windows, summaries and retrieval can omit constraints; preserve essential requirements explicitly.~Include acceptance checks in a long-task handoff.
Delegation~Workers need distinct ownership and output contracts; parallel edits to shared files can conflict.~Assign separate modules and verify the integrated application afterward.`,
          "Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.",
          [r.agents, r.coding],
          "Useful next",
        ),
      ]),
      m("Review and verification", [
        l(
          "coding-review",
          "Read code, test, lint, type-check and review security",
          "Treat generated code as a proposal that requires evidence.",
          `Review~Read connected callers and error paths, not only the edited lines.~Check that a changed response shape still matches the frontend.
Automated checks~Tests, lint and type checking detect different faults; passing them does not prove product correctness.~Combine a unit assertion with one user-flow check.
Failure modes and evals~Hallucinated APIs, missing authorization and weak evaluation are common integration failures.~Insert a plausible but nonexistent function and verify the check catches it.`,
          "Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.",
          [r.testing, r.security],
        ),
        l(
          "coding-ci",
          "CI/CD integration, verification and iteration",
          "Keep automation tied to working user outcomes and maintainable changes.",
          `CI integration~Run the same required checks locally and in CI, with explicit failures and no privileged secrets in logs.~Fail a PR when regression fixtures change unexpectedly.
Verification~Follow the full input→API→data→response path and distinguish mock checks from live integration.~Verify a saved record survives reload and is visible to an authorized teammate.
Iteration~Use observed failures and feedback to choose the next smallest complete change.~Fix a reproducible save failure before adding more settings.`,
          "Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.",
          [
            ch(
              r.git,
              "GitHub Actions: Python build and test",
              "https://docs.github.com/en/actions/tutorials/build-and-test-code/python",
            ),
            r.docs,
          ],
        ),
      ]),
    ],
    ["engineering-design", "eval-datasets"],
  ),
  d(
    "product",
    "Product and documentation",
    "Build useful products and document only what guides real decisions.",
    [
      m("Shaping the build", [
        l(
          "product-discovery",
          "Users, problems, discovery and product decisions",
          "Decide whether AI adds value before selecting a model.",
          `Discovery~Observe the current workflow, users and constraints; distinguish a user problem from a requested technology.~Interview a teammate about time lost searching course notes.
AI suitability~A deterministic solution may solve the problem more cheaply and reliably.~Use SQL for exact progress totals and retrieval for document questions.
BRD and stakeholders~Document business goals, constraints, owners and success metrics.~Define minutes saved per search and identify who maintains the knowledge base.`,
          "Interview two teammates, write a problem statement and concise BRD, and compare an AI approach with a deterministic baseline.",
          [
            ch(
              r.product,
              "PAIR: user needs and success",
              "https://pair.withgoogle.com/guidebook/chapters/user-needs/",
            ),
            r.docs,
          ],
        ),
        l(
          "product-requirements",
          "PRD, SRS, use cases and success metrics",
          "Translate a product idea into behavior that can be accepted or rejected.",
          `PRD~Personas, journeys and priorities explain the experience and intended user value.~Describe a learner selecting skills and starting a project.
SRS~Functional and non-functional requirements define contracts, access rules and performance expectations.~State that only the owner can change personal lesson status.
AI use-case specification~Define model responsibilities, allowed/forbidden actions and escalation behavior.~An assistant may draft an answer but cannot modify accounts.`,
          "Write a short PRD, SRS and AI use-case specification for a document assistant with five functional checks and explicit safe-failure behavior.",
          [
            r.docs,
            ch(
              r.product,
              "PAIR: mental models",
              "https://pair.withgoogle.com/guidebook/chapters/mental-models/",
            ),
          ],
        ),
        l(
          "product-prototype",
          "Prototypes, MVPs, UX, feedback and A/B testing",
          "Learn from real users with the smallest useful product.",
          `Build loop~Prototype, test, measure, gather feedback and iterate; productionize only what proves useful.~Test a paper/mock search flow before building full authentication.
UX and limitations~Communicate uncertainty and give users ways to correct mistakes or see evidence.~Show citations, an abstention and a report-error action.
Experiments and business value~A/B tests need a defined outcome and appropriate sample size; tiny samples mainly provide qualitative signals.~Compare two search interfaces and report observations without claiming statistical significance.
Ownership and communication~Explain risks, costs and decisions to engineering, product, design, management, legal and users.~Write a short demo note with benefits, limitations and next steps.`,
          "Test a small prototype with two teammates, record task completion and feedback, prioritize one improvement and explain its expected user value.",
          [
            ch(
              r.product,
              "PAIR: feedback and control",
              "https://pair.withgoogle.com/guidebook/chapters/feedback-controls/",
            ),
            ch(
              r.product,
              "PAIR: errors and graceful failure",
              "https://pair.withgoogle.com/guidebook/chapters/errors-failing-gracefully/",
            ),
          ],
        ),
        l(
          "product-economics",
          "Business models, unit economics and high-agency ownership",
          "Measure real value and take responsibility for outcomes beyond a successful demo.",
          `Business model~Explain who receives value, who maintains the system and how its operation is sustained; a learning prototype need not monetize.~Compare an internal time-saving tool with a subscription product as written scenarios.
Unit economics~Estimate cost per successfully completed task, including inference, hosting and human review; cheap requests can still produce expensive failed tasks.~Divide simulated total operating cost by successful tasks and test a lower completion-rate scenario.
High-agency ownership~Notice a problem, propose and test a solution, deploy appropriately, measure results and iterate with users.~Own an improvement from interview through a measured teammate demo and follow-up feedback.`,
          "Create a spreadsheet or Python model using fictional costs and completion rates, compare two operating scenarios, and write an ownership plan for collecting real user feedback without spending money.",
          [
            ch(
              r.product,
              "PAIR: user needs and defining success",
              "https://pair.withgoogle.com/guidebook/chapters/user-needs/",
            ),
            ch(
              r.architecture,
              "Google SRE: embracing risk",
              "https://sre.google/sre-book/embracing-risk/",
            ),
          ],
          "Useful next",
        ),
      ]),
      m("Engineering documentation", [
        l(
          "docs-architecture",
          "Architecture, data requirements, schemas and ADRs",
          "Record system boundaries and the reasons behind consequential choices.",
          `Architecture and data flow~Describe components, interfaces, security boundaries and failure paths.~Draw browser→API→retrieval→model→cited response.
Data requirements~Record sources, owners, schemas, quality rules, permissions, retention and refresh strategy.~Specify document versioning and sensitive-field removal.
ADRs~Capture context, decision and consequences so later changes respect earlier tradeoffs.~Explain why a small prototype uses SQLite instead of three database services.`,
          "Write an architecture diagram, data schema and one ADR for a local RAG prototype, including permission boundaries and refresh behavior.",
          [r.adr, r.docs],
        ),
        l(
          "docs-ai",
          "Prompt specs, model decisions, API specs and evaluation plans",
          "Keep the contracts and quality criteria needed to reproduce AI behavior.",
          `Prompt and agent specs~Document role, tools, permissions, inputs, outputs, memory and failures.~Version the system instructions alongside the eval fixture.
Model/provider decisions~Compare measured quality, license, hardware, privacy and operational constraints.~Record the decision date and a local/mock fallback.
API and evaluation plans~Define request/response/error formats and datasets, metrics, thresholds and regression checks.~Include a citation-validity check and an unsupported-question test.`,
          "Document a prototype prompt/tool contract, model decision table, OpenAPI example and twenty-case evaluation plan; ensure they match the runnable demo.",
          [
            r.fastapi,
            ch(
              r.hf,
              "Haystack: evaluation",
              "https://docs.haystack.deepset.ai/docs/evaluation",
            ),
          ],
        ),
        l(
          "docs-operations",
          "Deployment guides, runbooks, model cards and change logs",
          "Enable another teammate to run, diagnose and improve the system.",
          `Deployment guide~Explain configuration, secrets, environments, migrations, release and rollback steps.~Provide a clean local setup with a health check.
Runbook and monitoring~Connect symptoms to diagnosis and safe mitigation, with owners and escalation.~Describe how to recover when retrieval returns no documents.
Model card and change log~Record intended use, limitations, known failures, evaluation, data considerations and version history.~State that a toy classifier is educational and not appropriate for medical decisions.`,
          "Deliver a deployment guide, one incident runbook, model card and change log; have a teammate follow the setup without extra verbal instructions.",
          [
            ch(
              r.architecture,
              "Google SRE: managing incidents",
              "https://sre.google/sre-book/managing-incidents/",
            ),
            r.docs,
          ],
        ),
      ]),
    ],
    ["engineering-design"],
  ),
];
