# LLM engineering

Build grounded, bounded language-model features with a free local path.

## AI Engineering · Step 6 of 13

**Goal:** Choose and use language models with deliberate prompts, context and outputs.

**Stage checkpoint:** Build a structured-output assistant with schema validation, recorded-response tests and a local-model option.

Integrate a model with bounded context, structured outputs and measured limitations.

Follow the modules and lessons below at your pace. Finish each exercise, save your evidence and self-assessment, then continue. Completed and Already known count as completed; Skipped is reported separately. You can move ahead at any time.

[Full pipeline](../PIPELINE.md) · [Next step: Backend and databases](backend.md)

## Model foundations

<a id="llm-foundations"></a>

### Tokens, embeddings, context and transformer internals

Understand the model interface and the limitations of a finite context.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [RNN/LSTM, attention and transformers](dl.md#dl-sequences) Navigation is unrestricted.

#### Concepts

- [ ] **Tokenization:** A tokenizer maps text pieces to IDs; token counts differ from word counts and depend on the model.
  - Example: Compare whitespace splitting with a byte-pair tokenization example.
  - Videos:
    - [Build the GPT tokenizer](https://www.youtube.com/watch?v=zduSFxRajkE) · Andrej Karpathy · From-scratch lecture
      - Explains: Tokenization, byte-pair encoding and the consequences of token boundaries.
      - Useful because: Understand why context size and token counts differ from word counts.
      - Watch for: Focus on tokenization. Then reproduce the lesson example: Compare whitespace splitting with a byte-pair tokenization example.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://karpathy.ai/zero-to-hero.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on tokenization. Then reproduce the lesson example: Compare whitespace splitting with a byte-pair tokenization example.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Embeddings and transformers:** Embeddings map IDs to vectors; attention mixes token information through transformer blocks.
  - Example: Trace IDs → embeddings → masked attention → next-token logits.
  - Videos:
    - [Neural Networks Part 11: Word Embedding and Word2Vec](https://www.youtube.com/watch?v=viZrOnJclY0) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on embeddings and transformers. Then reproduce the lesson example: Trace IDs → embeddings → masked attention → next-token logits.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on embeddings and transformers. Then reproduce the lesson example: Trace IDs → embeddings → masked attention → next-token logits.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Pretraining and inference:** Training changes weights; inference samples outputs from fixed weights, conditioned on context.
  - Example: Adding a document to a prompt does not retrain the model.
  - Videos:
    - [Build the GPT tokenizer](https://www.youtube.com/watch?v=zduSFxRajkE) · Andrej Karpathy · From-scratch lecture
      - Explains: Tokenization, byte-pair encoding and the consequences of token boundaries.
      - Useful because: Understand why context size and token counts differ from word counts.
      - Watch for: Focus on pretraining and inference. Then reproduce the lesson example: Adding a document to a prompt does not retrain the model.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://karpathy.ai/zero-to-hero.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on pretraining and inference. Then reproduce the lesson example: Adding a document to a prompt does not retrain the model.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Context window:** Inputs and generated outputs share a finite token budget; exceeding it causes errors or truncation.
  - Example: Reserve output space before adding retrieved chunks.
  - Videos:
    - [Build the GPT tokenizer](https://www.youtube.com/watch?v=zduSFxRajkE) · Andrej Karpathy · From-scratch lecture
      - Explains: Tokenization, byte-pair encoding and the consequences of token boundaries.
      - Useful because: Understand why context size and token counts differ from word counts.
      - Watch for: Focus on context window. Then reproduce the lesson example: Reserve output space before adding retrieved chunks.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://karpathy.ai/zero-to-hero.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on context window. Then reproduce the lesson example: Reserve output space before adding retrieved chunks.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### YouTube: focused explanations and full courses

- [Build the GPT tokenizer](https://www.youtube.com/watch?v=zduSFxRajkE) · Andrej Karpathy · From-scratch lecture
  - Explains: Tokenization, byte-pair encoding and the consequences of token boundaries.
  - Useful because: Understand why context size and token counts differ from word counts.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://karpathy.ai/zero-to-hero.html
- [Build GPT from scratch, in code](https://www.youtube.com/watch?v=kCc8FmEb1nY) · Andrej Karpathy · From-scratch lecture
  - Explains: Language modeling, embeddings, causal attention, transformer blocks and sampling.
  - Useful because: Trace token IDs to logits and understand a small end-to-end transformer.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://karpathy.ai/zero-to-hero.html
- [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
  - Explains: A PyTorch language-model pipeline and the stages of language-model development.
  - Useful because: Connect model internals to application decisions; large training runs are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### Free written resources

1. [Hugging Face LLM course](https://huggingface.co/learn/llm-course/chapter1/1) — Free reading; Hugging Face account optional for sharing models. No paid materials required.
2. [D2L: transformer architecture](https://d2l.ai/chapter_attention-mechanisms-and-transformers/transformer.html) — Free; no registration required. No paid materials required.

#### Lab: Tokens, embeddings, context and transformer internals

Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### KV cache memory simulator

A serving learner needs to understand cache growth and eviction.

**Data:** Generate request lengths and toy key/value tensors. Use a fixed seed and keep evaluation cases separate.

**Output:** A cache size calculator and equivalent cached/uncached toy attention outputs.

**Effort:** 10h · Beginner → intermediate

- **Tokens, embeddings, context and transformer internals:** Extend the project with Tokens, embeddings, context and transformer internals in KV cache memory simulator. Adapt this focused lab to the project data: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.  Required concepts: Tokenization, Embeddings and transformers, Pretraining and inference, Context window.
  - Deliverable: Tokens, embeddings, context and transformer internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cache size calculator and equivalent cached/uncached toy attention outputs. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tokens, embeddings, context and transformer internals: Tokens, embeddings, context and transformer internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match outputs and document memory assumptions, batch sizes and dtypes.
- [ ] Tokens, embeddings, context and transformer internals: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Context assembly laboratory

A developer needs relevant context within a fixed budget.

**Data:** Use ten Markdown notes with IDs, priorities and contradictory statements. Use a fixed seed and keep evaluation cases separate.

**Output:** A context packer with source traceability.

**Effort:** 10h · Beginner → intermediate

- **Tokens, embeddings, context and transformer internals:** Extend the project with Tokens, embeddings, context and transformer internals in Context assembly laboratory. Adapt this focused lab to the project data: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.  Required concepts: Tokenization, Embeddings and transformers, Pretraining and inference, Context window.
  - Deliverable: Tokens, embeddings, context and transformer internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A context packer with source traceability. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tokens, embeddings, context and transformer internals: Tokens, embeddings, context and transformer internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Always retain required constraints and explain every dropped passage.
- [ ] Tokens, embeddings, context and transformer internals: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Low-rank adaptation microscope

A learner needs to see what LoRA changes in a frozen model.

**Data:** Generate input/target matrices for a small frozen linear layer. Use a fixed seed and keep evaluation cases separate.

**Output:** A low-rank adapter training experiment and parameter count report.

**Effort:** 10h · Beginner → intermediate

- **Tokens, embeddings, context and transformer internals:** Extend the project with Tokens, embeddings, context and transformer internals in Low-rank adaptation microscope. Adapt this focused lab to the project data: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.  Required concepts: Tokenization, Embeddings and transformers, Pretraining and inference, Context window.
  - Deliverable: Tokens, embeddings, context and transformer internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A low-rank adapter training experiment and parameter count report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tokens, embeddings, context and transformer internals: Tokens, embeddings, context and transformer internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Only adapters receive gradients; compare rank settings under the same budget.
- [ ] Tokens, embeddings, context and transformer internals: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local model selection scorecard

A developer needs a defensible model choice under laptop constraints.

**Data:** Use 20 local evaluation prompts; recorded outputs are the offline fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A quality, memory and latency scorecard with provenance per run.

**Effort:** 10h · Beginner → intermediate

- **Tokens, embeddings, context and transformer internals:** Extend the project with Tokens, embeddings, context and transformer internals in Local model selection scorecard. Adapt this focused lab to the project data: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.  Required concepts: Tokenization, Embeddings and transformers, Pretraining and inference, Context window.
  - Deliverable: Tokens, embeddings, context and transformer internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A quality, memory and latency scorecard with provenance per run. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tokens, embeddings, context and transformer internals: Tokens, embeddings, context and transformer internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Separate measured local runs from fixtures and state untested capabilities.
- [ ] Tokens, embeddings, context and transformer internals: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Prompt regression workbench

A support writer needs repeatable checks before changing instructions.

**Data:** Author 30 requests with expected structured responses and recorded fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A prompt version comparison harness.

**Effort:** 10h · Beginner → intermediate

- **Tokens, embeddings, context and transformer internals:** Extend the project with Tokens, embeddings, context and transformer internals in Prompt regression workbench. Adapt this focused lab to the project data: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.  Required concepts: Tokenization, Embeddings and transformers, Pretraining and inference, Context window.
  - Deliverable: Tokens, embeddings, context and transformer internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A prompt version comparison harness. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tokens, embeddings, context and transformer internals: Tokens, embeddings, context and transformer internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect malformed JSON, unsupported claims and changed required fields.
- [ ] Tokens, embeddings, context and transformer internals: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Quantization error explorer

A learner needs to measure compression tradeoffs before choosing a format.

**Data:** Use generated linear-layer weights and calibration vectors. Use a fixed seed and keep evaluation cases separate.

**Output:** An int8 quantize/dequantize notebook with size and output-error plots.

**Effort:** 10h · Beginner → intermediate

- **Tokens, embeddings, context and transformer internals:** Extend the project with Tokens, embeddings, context and transformer internals in Quantization error explorer. Adapt this focused lab to the project data: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.  Required concepts: Tokenization, Embeddings and transformers, Pretraining and inference, Context window.
  - Deliverable: Tokens, embeddings, context and transformer internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An int8 quantize/dequantize notebook with size and output-error plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tokens, embeddings, context and transformer internals: Tokens, embeddings, context and transformer internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare per-tensor and per-channel scales and test outlier sensitivity.
- [ ] Tokens, embeddings, context and transformer internals: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Streaming response assembler

An interface builder needs correct partial structured-response handling.

**Data:** Create fixtures of chunked JSON and text with disconnects. Use a fixed seed and keep evaluation cases separate.

**Output:** A stream assembler and cancellation demo.

**Effort:** 10h · Beginner → intermediate

- **Tokens, embeddings, context and transformer internals:** Extend the project with Tokens, embeddings, context and transformer internals in Streaming response assembler. Adapt this focused lab to the project data: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.  Required concepts: Tokenization, Embeddings and transformers, Pretraining and inference, Context window.
  - Deliverable: Tokens, embeddings, context and transformer internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A stream assembler and cancellation demo. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tokens, embeddings, context and transformer internals: Tokens, embeddings, context and transformer internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Never parse incomplete JSON as final; recover cleanly from a dropped stream.
- [ ] Tokens, embeddings, context and transformer internals: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Decoding distribution explorer

A learner needs to understand temperature, top-k and top-p.

**Data:** Use fixed vocabulary logits and seeded sampling on CPU. Use a fixed seed and keep evaluation cases separate.

**Output:** A probability visualizer and sampling experiment.

**Effort:** 10h · Beginner → intermediate

- **Tokens, embeddings, context and transformer internals:** Extend the project with Tokens, embeddings, context and transformer internals in Decoding distribution explorer. Adapt this focused lab to the project data: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.  Required concepts: Tokenization, Embeddings and transformers, Pretraining and inference, Context window.
  - Deliverable: Tokens, embeddings, context and transformer internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A probability visualizer and sampling experiment. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tokens, embeddings, context and transformer internals: Tokens, embeddings, context and transformer internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify normalization, deterministic seed behavior and nucleus boundaries.
- [ ] Tokens, embeddings, context and transformer internals: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Token budget planner

An app builder needs to estimate what fits in a context window.

**Data:** Use 20 local multilingual prompts and a downloadable small tokenizer or documented byte fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A tokenizer comparison and truncation report.

**Effort:** 10h · Beginner → intermediate

- **Tokens, embeddings, context and transformer internals:** Extend the project with Tokens, embeddings, context and transformer internals in Token budget planner. Adapt this focused lab to the project data: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.  Required concepts: Tokenization, Embeddings and transformers, Pretraining and inference, Context window.
  - Deliverable: Tokens, embeddings, context and transformer internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A tokenizer comparison and truncation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tokens, embeddings, context and transformer internals: Tokens, embeddings, context and transformer internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Preserve required instructions and label byte estimates as estimates, not exact token counts.
- [ ] Tokens, embeddings, context and transformer internals: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Structured tool-call validator

An app builder needs safe interpretation of proposed tool arguments.

**Data:** Write 25 valid and invalid recorded tool-call responses. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema validator and read-only dispatch simulator.

**Effort:** 10h · Beginner → intermediate

- **Tokens, embeddings, context and transformer internals:** Extend the project with Tokens, embeddings, context and transformer internals in Structured tool-call validator. Adapt this focused lab to the project data: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.  Required concepts: Tokenization, Embeddings and transformers, Pretraining and inference, Context window.
  - Deliverable: Tokens, embeddings, context and transformer internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema validator and read-only dispatch simulator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tokens, embeddings, context and transformer internals: Tokens, embeddings, context and transformer internals: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject unknown tools, extra dangerous fields and invalid argument types.
- [ ] Tokens, embeddings, context and transformer internals: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="llm-model-selection"></a>

### Model selection, open models and local serving

Compare quality and deployment constraints before choosing a provider.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Tokens, embeddings, context and transformer internals](llm.md#llm-foundations) Navigation is unrestricted.

#### Concepts

- [ ] **Model selection:** Task quality, latency, context size, license and hardware matter more than one leaderboard.
  - Example: Score candidate models against a fixed ten-question evaluation set.
  - Videos:
    - [Local AI development with Ollama](https://www.youtube.com/watch?v=GWB9ApTPTv4) · freeCodeCamp · Tool course
      - Explains: Local model serving and integrating local inference with applications.
      - Useful because: Useful for a free local model path when your machine meets hardware requirements.
      - Watch for: Focus on model selection. Then reproduce the lesson example: Score candidate models against a fixed ten-question evaluation set.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/local-ai-development-with-ollama-course/
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on model selection. Then reproduce the lesson example: Score candidate models against a fixed ten-question evaluation set.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Open and closed models:** Available weights permit local serving, but licenses and hardware still constrain usage.
  - Example: Record a model license and intended use before distributing it.
  - Videos:
    - [Local AI development with Ollama](https://www.youtube.com/watch?v=GWB9ApTPTv4) · freeCodeCamp · Tool course
      - Explains: Local model serving and integrating local inference with applications.
      - Useful because: Useful for a free local model path when your machine meets hardware requirements.
      - Watch for: Focus on open and closed models. Then reproduce the lesson example: Record a model license and intended use before distributing it.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/local-ai-development-with-ollama-course/
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on open and closed models. Then reproduce the lesson example: Record a model license and intended use before distributing it.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Self-hosting:** Local serving needs memory budgets and operational checks; mock inference is a valid development fallback.
  - Example: Use a recorded-response fixture when a laptop cannot run the selected model.
  - Videos:
    - [Local AI development with Ollama](https://www.youtube.com/watch?v=GWB9ApTPTv4) · freeCodeCamp · Tool course
      - Explains: Local model serving and integrating local inference with applications.
      - Useful because: Useful for a free local model path when your machine meets hardware requirements.
      - Watch for: Focus on self-hosting. Then reproduce the lesson example: Use a recorded-response fixture when a laptop cannot run the selected model.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/local-ai-development-with-ollama-course/
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on self-hosting. Then reproduce the lesson example: Use a recorded-response fixture when a laptop cannot run the selected model.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### YouTube: focused explanations and full courses

- [Local AI development with Ollama](https://www.youtube.com/watch?v=GWB9ApTPTv4) · freeCodeCamp · Tool course
  - Explains: Local model serving and integrating local inference with applications.
  - Useful because: Useful for a free local model path when your machine meets hardware requirements.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/local-ai-development-with-ollama-course/
- [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
  - Explains: A PyTorch language-model pipeline and the stages of language-model development.
  - Useful because: Connect model internals to application decisions; large training runs are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### Free written resources

1. [Hugging Face: using transformers](https://huggingface.co/learn/llm-course/chapter2/1) — Free reading; Hugging Face account optional for sharing models. No paid materials required.
2. [Ollama documentation](https://docs.ollama.com/) — Free reading; Hugging Face account optional for sharing models. No paid materials required.

#### Lab: Model selection, open models and local serving

Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Local model selection scorecard

A developer needs a defensible model choice under laptop constraints.

**Data:** Use 20 local evaluation prompts; recorded outputs are the offline fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A quality, memory and latency scorecard with provenance per run.

**Effort:** 10h · Beginner → intermediate

- **Model selection, open models and local serving:** Implement Model selection, open models and local serving in Local model selection scorecard. Adapt this focused lab to the project data: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.  Required concepts: Model selection, Open and closed models, Self-hosting.
  - Deliverable: Model selection, open models and local serving: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A quality, memory and latency scorecard with provenance per run. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model selection, open models and local serving: Model selection, open models and local serving: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Separate measured local runs from fixtures and state untested capabilities.
- [ ] Model selection, open models and local serving: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Quantization error explorer

A learner needs to measure compression tradeoffs before choosing a format.

**Data:** Use generated linear-layer weights and calibration vectors. Use a fixed seed and keep evaluation cases separate.

**Output:** An int8 quantize/dequantize notebook with size and output-error plots.

**Effort:** 10h · Beginner → intermediate

- **Model selection, open models and local serving:** Implement Model selection, open models and local serving in Quantization error explorer. Adapt this focused lab to the project data: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.  Required concepts: Model selection, Open and closed models, Self-hosting.
  - Deliverable: Model selection, open models and local serving: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An int8 quantize/dequantize notebook with size and output-error plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model selection, open models and local serving: Model selection, open models and local serving: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare per-tensor and per-channel scales and test outlier sensitivity.
- [ ] Model selection, open models and local serving: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### KV cache memory simulator

A serving learner needs to understand cache growth and eviction.

**Data:** Generate request lengths and toy key/value tensors. Use a fixed seed and keep evaluation cases separate.

**Output:** A cache size calculator and equivalent cached/uncached toy attention outputs.

**Effort:** 10h · Beginner → intermediate

- **Model selection, open models and local serving:** Extend the project with Model selection, open models and local serving in KV cache memory simulator. Adapt this focused lab to the project data: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.  Required concepts: Model selection, Open and closed models, Self-hosting.
  - Deliverable: Model selection, open models and local serving: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cache size calculator and equivalent cached/uncached toy attention outputs. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model selection, open models and local serving: Model selection, open models and local serving: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match outputs and document memory assumptions, batch sizes and dtypes.
- [ ] Model selection, open models and local serving: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Context assembly laboratory

A developer needs relevant context within a fixed budget.

**Data:** Use ten Markdown notes with IDs, priorities and contradictory statements. Use a fixed seed and keep evaluation cases separate.

**Output:** A context packer with source traceability.

**Effort:** 10h · Beginner → intermediate

- **Model selection, open models and local serving:** Extend the project with Model selection, open models and local serving in Context assembly laboratory. Adapt this focused lab to the project data: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.  Required concepts: Model selection, Open and closed models, Self-hosting.
  - Deliverable: Model selection, open models and local serving: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A context packer with source traceability. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model selection, open models and local serving: Model selection, open models and local serving: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Always retain required constraints and explain every dropped passage.
- [ ] Model selection, open models and local serving: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Low-rank adaptation microscope

A learner needs to see what LoRA changes in a frozen model.

**Data:** Generate input/target matrices for a small frozen linear layer. Use a fixed seed and keep evaluation cases separate.

**Output:** A low-rank adapter training experiment and parameter count report.

**Effort:** 10h · Beginner → intermediate

- **Model selection, open models and local serving:** Extend the project with Model selection, open models and local serving in Low-rank adaptation microscope. Adapt this focused lab to the project data: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.  Required concepts: Model selection, Open and closed models, Self-hosting.
  - Deliverable: Model selection, open models and local serving: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A low-rank adapter training experiment and parameter count report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model selection, open models and local serving: Model selection, open models and local serving: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Only adapters receive gradients; compare rank settings under the same budget.
- [ ] Model selection, open models and local serving: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Prompt regression workbench

A support writer needs repeatable checks before changing instructions.

**Data:** Author 30 requests with expected structured responses and recorded fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A prompt version comparison harness.

**Effort:** 10h · Beginner → intermediate

- **Model selection, open models and local serving:** Extend the project with Model selection, open models and local serving in Prompt regression workbench. Adapt this focused lab to the project data: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.  Required concepts: Model selection, Open and closed models, Self-hosting.
  - Deliverable: Model selection, open models and local serving: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A prompt version comparison harness. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model selection, open models and local serving: Model selection, open models and local serving: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect malformed JSON, unsupported claims and changed required fields.
- [ ] Model selection, open models and local serving: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Streaming response assembler

An interface builder needs correct partial structured-response handling.

**Data:** Create fixtures of chunked JSON and text with disconnects. Use a fixed seed and keep evaluation cases separate.

**Output:** A stream assembler and cancellation demo.

**Effort:** 10h · Beginner → intermediate

- **Model selection, open models and local serving:** Extend the project with Model selection, open models and local serving in Streaming response assembler. Adapt this focused lab to the project data: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.  Required concepts: Model selection, Open and closed models, Self-hosting.
  - Deliverable: Model selection, open models and local serving: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A stream assembler and cancellation demo. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model selection, open models and local serving: Model selection, open models and local serving: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Never parse incomplete JSON as final; recover cleanly from a dropped stream.
- [ ] Model selection, open models and local serving: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Decoding distribution explorer

A learner needs to understand temperature, top-k and top-p.

**Data:** Use fixed vocabulary logits and seeded sampling on CPU. Use a fixed seed and keep evaluation cases separate.

**Output:** A probability visualizer and sampling experiment.

**Effort:** 10h · Beginner → intermediate

- **Model selection, open models and local serving:** Extend the project with Model selection, open models and local serving in Decoding distribution explorer. Adapt this focused lab to the project data: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.  Required concepts: Model selection, Open and closed models, Self-hosting.
  - Deliverable: Model selection, open models and local serving: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A probability visualizer and sampling experiment. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model selection, open models and local serving: Model selection, open models and local serving: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify normalization, deterministic seed behavior and nucleus boundaries.
- [ ] Model selection, open models and local serving: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Token budget planner

An app builder needs to estimate what fits in a context window.

**Data:** Use 20 local multilingual prompts and a downloadable small tokenizer or documented byte fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A tokenizer comparison and truncation report.

**Effort:** 10h · Beginner → intermediate

- **Model selection, open models and local serving:** Extend the project with Model selection, open models and local serving in Token budget planner. Adapt this focused lab to the project data: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.  Required concepts: Model selection, Open and closed models, Self-hosting.
  - Deliverable: Model selection, open models and local serving: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A tokenizer comparison and truncation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model selection, open models and local serving: Model selection, open models and local serving: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Preserve required instructions and label byte estimates as estimates, not exact token counts.
- [ ] Model selection, open models and local serving: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Structured tool-call validator

An app builder needs safe interpretation of proposed tool arguments.

**Data:** Write 25 valid and invalid recorded tool-call responses. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema validator and read-only dispatch simulator.

**Effort:** 10h · Beginner → intermediate

- **Model selection, open models and local serving:** Extend the project with Model selection, open models and local serving in Structured tool-call validator. Adapt this focused lab to the project data: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.  Required concepts: Model selection, Open and closed models, Self-hosting.
  - Deliverable: Model selection, open models and local serving: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema validator and read-only dispatch simulator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model selection, open models and local serving: Model selection, open models and local serving: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject unknown tools, extra dangerous fields and invalid argument types.
- [ ] Model selection, open models and local serving: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="llm-prompting"></a>

### Prompting, sampling and structured outputs

Constrain the task and validate responses instead of trusting fluent text.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Model selection, open models and local serving](llm.md#llm-model-selection) Navigation is unrestricted.

#### Concepts

- [ ] **Prompt design:** State task, relevant context, examples and output requirements; examples must not leak test answers.
  - Example: Compare zero-shot with two labeled examples on a held-out fixture set.
  - Videos:
    - [Build GPT from scratch, in code](https://www.youtube.com/watch?v=kCc8FmEb1nY) · Andrej Karpathy · From-scratch lecture
      - Explains: Language modeling, embeddings, causal attention, transformer blocks and sampling.
      - Useful because: Trace token IDs to logits and understand a small end-to-end transformer.
      - Watch for: Focus on prompt design. Then reproduce the lesson example: Compare zero-shot with two labeled examples on a held-out fixture set.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://karpathy.ai/zero-to-hero.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on prompt design. Then reproduce the lesson example: Compare zero-shot with two labeled examples on a held-out fixture set.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Sampling:** Temperature rescales logits, top-k limits candidates and top-p retains a probability mass; repetition penalties affect repeated tokens.
  - Example: Sample a toy logits vector at two temperatures with fixed seeds.
  - Videos:
    - [Build GPT from scratch, in code](https://www.youtube.com/watch?v=kCc8FmEb1nY) · Andrej Karpathy · From-scratch lecture
      - Explains: Language modeling, embeddings, causal attention, transformer blocks and sampling.
      - Useful because: Trace token IDs to logits and understand a small end-to-end transformer.
      - Watch for: Focus on sampling. Then reproduce the lesson example: Sample a toy logits vector at two temperatures with fixed seeds.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://karpathy.ai/zero-to-hero.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on sampling. Then reproduce the lesson example: Sample a toy logits vector at two temperatures with fixed seeds.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Structured output:** JSON/schema constraints reduce formatting errors but still need semantic validation.
  - Example: Reject a negative quantity even when the JSON parses correctly.
  - Videos:
    - [Build GPT from scratch, in code](https://www.youtube.com/watch?v=kCc8FmEb1nY) · Andrej Karpathy · From-scratch lecture
      - Explains: Language modeling, embeddings, causal attention, transformer blocks and sampling.
      - Useful because: Trace token IDs to logits and understand a small end-to-end transformer.
      - Watch for: Focus on structured output. Then reproduce the lesson example: Reject a negative quantity even when the JSON parses correctly.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://karpathy.ai/zero-to-hero.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on structured output. Then reproduce the lesson example: Reject a negative quantity even when the JSON parses correctly.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Reasoning patterns:** Decomposition and ReAct alternate planning with observable tool results; verbose explanations are not evidence of correctness.
  - Example: Require a cited answer and validate it rather than judging prose length.
  - Videos:
    - [Build GPT from scratch, in code](https://www.youtube.com/watch?v=kCc8FmEb1nY) · Andrej Karpathy · From-scratch lecture
      - Explains: Language modeling, embeddings, causal attention, transformer blocks and sampling.
      - Useful because: Trace token IDs to logits and understand a small end-to-end transformer.
      - Watch for: Focus on reasoning patterns. Then reproduce the lesson example: Require a cited answer and validate it rather than judging prose length.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://karpathy.ai/zero-to-hero.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on reasoning patterns. Then reproduce the lesson example: Require a cited answer and validate it rather than judging prose length.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### YouTube: focused explanations and full courses

- [Build GPT from scratch, in code](https://www.youtube.com/watch?v=kCc8FmEb1nY) · Andrej Karpathy · From-scratch lecture
  - Explains: Language modeling, embeddings, causal attention, transformer blocks and sampling.
  - Useful because: Trace token IDs to logits and understand a small end-to-end transformer.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://karpathy.ai/zero-to-hero.html
- [Prompt engineering for developers — course introduction](https://www.youtube.com/watch?v=H4YK_7MAckk) · DeepLearning.AI · Andrew Ng and Isa Fulford · Course introduction
  - Explains: The motivation and scope of structured developer prompting.
  - Useful because: A starting overview; the linked free fixtures and documentation provide the actual lab.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=H4YK_7MAckk
- [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
  - Explains: A PyTorch language-model pipeline and the stages of language-model development.
  - Useful because: Connect model internals to application decisions; large training runs are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### Free written resources

1. [Hugging Face: generation strategies](https://huggingface.co/docs/transformers/generation_strategies) — Free reading; Hugging Face account optional for sharing models. No paid materials required.
2. [Hugging Face: chat templates](https://huggingface.co/docs/transformers/chat_templating) — Free reading; Hugging Face account optional for sharing models. No paid materials required.

#### Lab: Prompting, sampling and structured outputs

Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Prompt regression workbench

A support writer needs repeatable checks before changing instructions.

**Data:** Author 30 requests with expected structured responses and recorded fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A prompt version comparison harness.

**Effort:** 10h · Beginner → intermediate

- **Prompting, sampling and structured outputs:** Implement Prompting, sampling and structured outputs in Prompt regression workbench. Adapt this focused lab to the project data: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.  Required concepts: Prompt design, Sampling, Structured output, Reasoning patterns.
  - Deliverable: Prompting, sampling and structured outputs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A prompt version comparison harness. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prompting, sampling and structured outputs: Prompting, sampling and structured outputs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect malformed JSON, unsupported claims and changed required fields.
- [ ] Prompting, sampling and structured outputs: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### KV cache memory simulator

A serving learner needs to understand cache growth and eviction.

**Data:** Generate request lengths and toy key/value tensors. Use a fixed seed and keep evaluation cases separate.

**Output:** A cache size calculator and equivalent cached/uncached toy attention outputs.

**Effort:** 10h · Beginner → intermediate

- **Prompting, sampling and structured outputs:** Extend the project with Prompting, sampling and structured outputs in KV cache memory simulator. Adapt this focused lab to the project data: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.  Required concepts: Prompt design, Sampling, Structured output, Reasoning patterns.
  - Deliverable: Prompting, sampling and structured outputs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cache size calculator and equivalent cached/uncached toy attention outputs. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prompting, sampling and structured outputs: Prompting, sampling and structured outputs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match outputs and document memory assumptions, batch sizes and dtypes.
- [ ] Prompting, sampling and structured outputs: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Context assembly laboratory

A developer needs relevant context within a fixed budget.

**Data:** Use ten Markdown notes with IDs, priorities and contradictory statements. Use a fixed seed and keep evaluation cases separate.

**Output:** A context packer with source traceability.

**Effort:** 10h · Beginner → intermediate

- **Prompting, sampling and structured outputs:** Extend the project with Prompting, sampling and structured outputs in Context assembly laboratory. Adapt this focused lab to the project data: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.  Required concepts: Prompt design, Sampling, Structured output, Reasoning patterns.
  - Deliverable: Prompting, sampling and structured outputs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A context packer with source traceability. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prompting, sampling and structured outputs: Prompting, sampling and structured outputs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Always retain required constraints and explain every dropped passage.
- [ ] Prompting, sampling and structured outputs: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Low-rank adaptation microscope

A learner needs to see what LoRA changes in a frozen model.

**Data:** Generate input/target matrices for a small frozen linear layer. Use a fixed seed and keep evaluation cases separate.

**Output:** A low-rank adapter training experiment and parameter count report.

**Effort:** 10h · Beginner → intermediate

- **Prompting, sampling and structured outputs:** Extend the project with Prompting, sampling and structured outputs in Low-rank adaptation microscope. Adapt this focused lab to the project data: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.  Required concepts: Prompt design, Sampling, Structured output, Reasoning patterns.
  - Deliverable: Prompting, sampling and structured outputs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A low-rank adapter training experiment and parameter count report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prompting, sampling and structured outputs: Prompting, sampling and structured outputs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Only adapters receive gradients; compare rank settings under the same budget.
- [ ] Prompting, sampling and structured outputs: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local model selection scorecard

A developer needs a defensible model choice under laptop constraints.

**Data:** Use 20 local evaluation prompts; recorded outputs are the offline fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A quality, memory and latency scorecard with provenance per run.

**Effort:** 10h · Beginner → intermediate

- **Prompting, sampling and structured outputs:** Extend the project with Prompting, sampling and structured outputs in Local model selection scorecard. Adapt this focused lab to the project data: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.  Required concepts: Prompt design, Sampling, Structured output, Reasoning patterns.
  - Deliverable: Prompting, sampling and structured outputs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A quality, memory and latency scorecard with provenance per run. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prompting, sampling and structured outputs: Prompting, sampling and structured outputs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Separate measured local runs from fixtures and state untested capabilities.
- [ ] Prompting, sampling and structured outputs: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Quantization error explorer

A learner needs to measure compression tradeoffs before choosing a format.

**Data:** Use generated linear-layer weights and calibration vectors. Use a fixed seed and keep evaluation cases separate.

**Output:** An int8 quantize/dequantize notebook with size and output-error plots.

**Effort:** 10h · Beginner → intermediate

- **Prompting, sampling and structured outputs:** Extend the project with Prompting, sampling and structured outputs in Quantization error explorer. Adapt this focused lab to the project data: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.  Required concepts: Prompt design, Sampling, Structured output, Reasoning patterns.
  - Deliverable: Prompting, sampling and structured outputs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An int8 quantize/dequantize notebook with size and output-error plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prompting, sampling and structured outputs: Prompting, sampling and structured outputs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare per-tensor and per-channel scales and test outlier sensitivity.
- [ ] Prompting, sampling and structured outputs: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Streaming response assembler

An interface builder needs correct partial structured-response handling.

**Data:** Create fixtures of chunked JSON and text with disconnects. Use a fixed seed and keep evaluation cases separate.

**Output:** A stream assembler and cancellation demo.

**Effort:** 10h · Beginner → intermediate

- **Prompting, sampling and structured outputs:** Extend the project with Prompting, sampling and structured outputs in Streaming response assembler. Adapt this focused lab to the project data: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.  Required concepts: Prompt design, Sampling, Structured output, Reasoning patterns.
  - Deliverable: Prompting, sampling and structured outputs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A stream assembler and cancellation demo. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prompting, sampling and structured outputs: Prompting, sampling and structured outputs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Never parse incomplete JSON as final; recover cleanly from a dropped stream.
- [ ] Prompting, sampling and structured outputs: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Decoding distribution explorer

A learner needs to understand temperature, top-k and top-p.

**Data:** Use fixed vocabulary logits and seeded sampling on CPU. Use a fixed seed and keep evaluation cases separate.

**Output:** A probability visualizer and sampling experiment.

**Effort:** 10h · Beginner → intermediate

- **Prompting, sampling and structured outputs:** Extend the project with Prompting, sampling and structured outputs in Decoding distribution explorer. Adapt this focused lab to the project data: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.  Required concepts: Prompt design, Sampling, Structured output, Reasoning patterns.
  - Deliverable: Prompting, sampling and structured outputs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A probability visualizer and sampling experiment. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prompting, sampling and structured outputs: Prompting, sampling and structured outputs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify normalization, deterministic seed behavior and nucleus boundaries.
- [ ] Prompting, sampling and structured outputs: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Token budget planner

An app builder needs to estimate what fits in a context window.

**Data:** Use 20 local multilingual prompts and a downloadable small tokenizer or documented byte fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A tokenizer comparison and truncation report.

**Effort:** 10h · Beginner → intermediate

- **Prompting, sampling and structured outputs:** Extend the project with Prompting, sampling and structured outputs in Token budget planner. Adapt this focused lab to the project data: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.  Required concepts: Prompt design, Sampling, Structured output, Reasoning patterns.
  - Deliverable: Prompting, sampling and structured outputs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A tokenizer comparison and truncation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prompting, sampling and structured outputs: Prompting, sampling and structured outputs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Preserve required instructions and label byte estimates as estimates, not exact token counts.
- [ ] Prompting, sampling and structured outputs: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Structured tool-call validator

An app builder needs safe interpretation of proposed tool arguments.

**Data:** Write 25 valid and invalid recorded tool-call responses. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema validator and read-only dispatch simulator.

**Effort:** 10h · Beginner → intermediate

- **Prompting, sampling and structured outputs:** Extend the project with Prompting, sampling and structured outputs in Structured tool-call validator. Adapt this focused lab to the project data: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.  Required concepts: Prompt design, Sampling, Structured output, Reasoning patterns.
  - Deliverable: Prompting, sampling and structured outputs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema validator and read-only dispatch simulator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prompting, sampling and structured outputs: Prompting, sampling and structured outputs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject unknown tools, extra dangerous fields and invalid argument types.
- [ ] Prompting, sampling and structured outputs: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Application patterns

<a id="llm-context"></a>

### Context engineering, memory and caching

Supply relevant information while preventing stale, conflicting or untrusted context.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Prompting, sampling and structured outputs](llm.md#llm-prompting) Navigation is unrestricted.

#### Concepts

- [ ] **Context sources:** System instructions, user inputs, retrieval and tool results have different trust levels.
  - Example: Label retrieved text as data, not as executable instructions.
  - Videos:
    - [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
      - Explains: Retrieval, MCP coordination and caching integration.
      - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
      - Watch for: Focus on context sources. Then reproduce the lesson example: Label retrieved text as data, not as executable instructions.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on context sources. Then reproduce the lesson example: Label retrieved text as data, not as executable instructions.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Compaction and isolation:** Summaries reduce context size but can lose constraints; separate user sessions and agent contexts.
  - Example: Preserve task constraints explicitly when summarizing old turns.
  - Videos:
    - [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
      - Explains: Retrieval, MCP coordination and caching integration.
      - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
      - Watch for: Focus on compaction and isolation. Then reproduce the lesson example: Preserve task constraints explicitly when summarizing old turns.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on compaction and isolation. Then reproduce the lesson example: Preserve task constraints explicitly when summarizing old turns.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Memory and caching:** Memory persists selected facts; caches reuse prior computation and need scope and invalidation.
  - Example: Key a retrieval cache by user permissions and document version.
  - Videos:
    - [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
      - Explains: Retrieval, MCP coordination and caching integration.
      - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
      - Watch for: Focus on memory and caching. Then reproduce the lesson example: Key a retrieval cache by user permissions and document version.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on memory and caching. Then reproduce the lesson example: Key a retrieval cache by user permissions and document version.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### YouTube: focused explanations and full courses

- [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
  - Explains: Retrieval, MCP coordination and caching integration.
  - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/
- [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
  - Explains: Graph state, nodes, workflows and agent applications.
  - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
  - Explains: A PyTorch language-model pipeline and the stages of language-model development.
  - Useful because: Connect model internals to application decisions; large training runs are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### Free written resources

1. [Hugging Face: messages and special tokens](https://huggingface.co/learn/agents-course/unit1/messages-and-special-tokens) — Free reading; optional account for course activities. No paid materials required.
2. [Hugging Face: KV cache strategies](https://huggingface.co/docs/transformers/kv_cache) — Free reading; Hugging Face account optional for sharing models. No paid materials required.

#### Lab: Context engineering, memory and caching

Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Context assembly laboratory

A developer needs relevant context within a fixed budget.

**Data:** Use ten Markdown notes with IDs, priorities and contradictory statements. Use a fixed seed and keep evaluation cases separate.

**Output:** A context packer with source traceability.

**Effort:** 10h · Beginner → intermediate

- **Context engineering, memory and caching:** Implement Context engineering, memory and caching in Context assembly laboratory. Adapt this focused lab to the project data: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.  Required concepts: Context sources, Compaction and isolation, Memory and caching.
  - Deliverable: Context engineering, memory and caching: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A context packer with source traceability. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Context engineering, memory and caching: Context engineering, memory and caching: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Always retain required constraints and explain every dropped passage.
- [ ] Context engineering, memory and caching: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### KV cache memory simulator

A serving learner needs to understand cache growth and eviction.

**Data:** Generate request lengths and toy key/value tensors. Use a fixed seed and keep evaluation cases separate.

**Output:** A cache size calculator and equivalent cached/uncached toy attention outputs.

**Effort:** 10h · Beginner → intermediate

- **Context engineering, memory and caching:** Extend the project with Context engineering, memory and caching in KV cache memory simulator. Adapt this focused lab to the project data: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.  Required concepts: Context sources, Compaction and isolation, Memory and caching.
  - Deliverable: Context engineering, memory and caching: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cache size calculator and equivalent cached/uncached toy attention outputs. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Context engineering, memory and caching: Context engineering, memory and caching: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match outputs and document memory assumptions, batch sizes and dtypes.
- [ ] Context engineering, memory and caching: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Low-rank adaptation microscope

A learner needs to see what LoRA changes in a frozen model.

**Data:** Generate input/target matrices for a small frozen linear layer. Use a fixed seed and keep evaluation cases separate.

**Output:** A low-rank adapter training experiment and parameter count report.

**Effort:** 10h · Beginner → intermediate

- **Context engineering, memory and caching:** Extend the project with Context engineering, memory and caching in Low-rank adaptation microscope. Adapt this focused lab to the project data: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.  Required concepts: Context sources, Compaction and isolation, Memory and caching.
  - Deliverable: Context engineering, memory and caching: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A low-rank adapter training experiment and parameter count report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Context engineering, memory and caching: Context engineering, memory and caching: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Only adapters receive gradients; compare rank settings under the same budget.
- [ ] Context engineering, memory and caching: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local model selection scorecard

A developer needs a defensible model choice under laptop constraints.

**Data:** Use 20 local evaluation prompts; recorded outputs are the offline fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A quality, memory and latency scorecard with provenance per run.

**Effort:** 10h · Beginner → intermediate

- **Context engineering, memory and caching:** Extend the project with Context engineering, memory and caching in Local model selection scorecard. Adapt this focused lab to the project data: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.  Required concepts: Context sources, Compaction and isolation, Memory and caching.
  - Deliverable: Context engineering, memory and caching: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A quality, memory and latency scorecard with provenance per run. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Context engineering, memory and caching: Context engineering, memory and caching: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Separate measured local runs from fixtures and state untested capabilities.
- [ ] Context engineering, memory and caching: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Prompt regression workbench

A support writer needs repeatable checks before changing instructions.

**Data:** Author 30 requests with expected structured responses and recorded fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A prompt version comparison harness.

**Effort:** 10h · Beginner → intermediate

- **Context engineering, memory and caching:** Extend the project with Context engineering, memory and caching in Prompt regression workbench. Adapt this focused lab to the project data: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.  Required concepts: Context sources, Compaction and isolation, Memory and caching.
  - Deliverable: Context engineering, memory and caching: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A prompt version comparison harness. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Context engineering, memory and caching: Context engineering, memory and caching: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect malformed JSON, unsupported claims and changed required fields.
- [ ] Context engineering, memory and caching: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Quantization error explorer

A learner needs to measure compression tradeoffs before choosing a format.

**Data:** Use generated linear-layer weights and calibration vectors. Use a fixed seed and keep evaluation cases separate.

**Output:** An int8 quantize/dequantize notebook with size and output-error plots.

**Effort:** 10h · Beginner → intermediate

- **Context engineering, memory and caching:** Extend the project with Context engineering, memory and caching in Quantization error explorer. Adapt this focused lab to the project data: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.  Required concepts: Context sources, Compaction and isolation, Memory and caching.
  - Deliverable: Context engineering, memory and caching: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An int8 quantize/dequantize notebook with size and output-error plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Context engineering, memory and caching: Context engineering, memory and caching: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare per-tensor and per-channel scales and test outlier sensitivity.
- [ ] Context engineering, memory and caching: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Streaming response assembler

An interface builder needs correct partial structured-response handling.

**Data:** Create fixtures of chunked JSON and text with disconnects. Use a fixed seed and keep evaluation cases separate.

**Output:** A stream assembler and cancellation demo.

**Effort:** 10h · Beginner → intermediate

- **Context engineering, memory and caching:** Extend the project with Context engineering, memory and caching in Streaming response assembler. Adapt this focused lab to the project data: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.  Required concepts: Context sources, Compaction and isolation, Memory and caching.
  - Deliverable: Context engineering, memory and caching: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A stream assembler and cancellation demo. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Context engineering, memory and caching: Context engineering, memory and caching: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Never parse incomplete JSON as final; recover cleanly from a dropped stream.
- [ ] Context engineering, memory and caching: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Decoding distribution explorer

A learner needs to understand temperature, top-k and top-p.

**Data:** Use fixed vocabulary logits and seeded sampling on CPU. Use a fixed seed and keep evaluation cases separate.

**Output:** A probability visualizer and sampling experiment.

**Effort:** 10h · Beginner → intermediate

- **Context engineering, memory and caching:** Extend the project with Context engineering, memory and caching in Decoding distribution explorer. Adapt this focused lab to the project data: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.  Required concepts: Context sources, Compaction and isolation, Memory and caching.
  - Deliverable: Context engineering, memory and caching: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A probability visualizer and sampling experiment. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Context engineering, memory and caching: Context engineering, memory and caching: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify normalization, deterministic seed behavior and nucleus boundaries.
- [ ] Context engineering, memory and caching: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Token budget planner

An app builder needs to estimate what fits in a context window.

**Data:** Use 20 local multilingual prompts and a downloadable small tokenizer or documented byte fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A tokenizer comparison and truncation report.

**Effort:** 10h · Beginner → intermediate

- **Context engineering, memory and caching:** Extend the project with Context engineering, memory and caching in Token budget planner. Adapt this focused lab to the project data: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.  Required concepts: Context sources, Compaction and isolation, Memory and caching.
  - Deliverable: Context engineering, memory and caching: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A tokenizer comparison and truncation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Context engineering, memory and caching: Context engineering, memory and caching: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Preserve required instructions and label byte estimates as estimates, not exact token counts.
- [ ] Context engineering, memory and caching: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Structured tool-call validator

An app builder needs safe interpretation of proposed tool arguments.

**Data:** Write 25 valid and invalid recorded tool-call responses. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema validator and read-only dispatch simulator.

**Effort:** 10h · Beginner → intermediate

- **Context engineering, memory and caching:** Extend the project with Context engineering, memory and caching in Structured tool-call validator. Adapt this focused lab to the project data: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.  Required concepts: Context sources, Compaction and isolation, Memory and caching.
  - Deliverable: Context engineering, memory and caching: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema validator and read-only dispatch simulator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Context engineering, memory and caching: Context engineering, memory and caching: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject unknown tools, extra dangerous fields and invalid argument types.
- [ ] Context engineering, memory and caching: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="llm-tools"></a>

### Tool calling, streaming and multimodal AI

Connect generated requests to bounded software actions and handle incremental outputs.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Context engineering, memory and caching](llm.md#llm-context) Navigation is unrestricted.

#### Concepts

- [ ] **Tool calling:** A model proposes a tool and arguments; application code validates and executes authorized operations.
  - Example: Reject a filesystem path outside the allowed directory.
  - Videos:
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on tool calling. Then reproduce the lesson example: Reject a filesystem path outside the allowed directory.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on tool calling. Then reproduce the lesson example: Reject a filesystem path outside the allowed directory.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Streaming:** Chunks arrive incrementally and may contain partial JSON; cancellation and final-state detection are necessary.
  - Example: Buffer structured output until it is complete before parsing.
  - Videos:
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on streaming. Then reproduce the lesson example: Buffer structured output until it is complete before parsing.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on streaming. Then reproduce the lesson example: Buffer structured output until it is complete before parsing.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Multimodal tasks:** Images, audio and video require modality-specific preprocessing and explicit privacy boundaries.
  - Example: Use local image metadata, prerecorded audio fixtures and timestamped frame descriptions in a mock pipeline.
  - Videos:
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on multimodal tasks. Then reproduce the lesson example: Use local image metadata, prerecorded audio fixtures and timestamped frame descriptions in a mock pipeline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on multimodal tasks. Then reproduce the lesson example: Use local image metadata, prerecorded audio fixtures and timestamped frame descriptions in a mock pipeline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### YouTube: focused explanations and full courses

- [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
  - Explains: Graph state, nodes, workflows and agent applications.
  - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
  - Explains: A PyTorch language-model pipeline and the stages of language-model development.
  - Useful because: Connect model internals to application decisions; large training runs are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### Free written resources

1. [Hugging Face: tools](https://huggingface.co/learn/agents-course/unit1/tools) — Free reading; optional account for course activities. No paid materials required.
2. [Hugging Face: tasks](https://huggingface.co/docs/transformers/task_summary) — Free reading; Hugging Face account optional for sharing models. No paid materials required.

#### Lab: Tool calling, streaming and multimodal AI

Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Streaming response assembler

An interface builder needs correct partial structured-response handling.

**Data:** Create fixtures of chunked JSON and text with disconnects. Use a fixed seed and keep evaluation cases separate.

**Output:** A stream assembler and cancellation demo.

**Effort:** 10h · Beginner → intermediate

- **Tool calling, streaming and multimodal AI:** Implement Tool calling, streaming and multimodal AI in Streaming response assembler. Adapt this focused lab to the project data: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.  Required concepts: Tool calling, Streaming, Multimodal tasks.
  - Deliverable: Tool calling, streaming and multimodal AI: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A stream assembler and cancellation demo. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tool calling, streaming and multimodal AI: Tool calling, streaming and multimodal AI: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Never parse incomplete JSON as final; recover cleanly from a dropped stream.
- [ ] Tool calling, streaming and multimodal AI: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Structured tool-call validator

An app builder needs safe interpretation of proposed tool arguments.

**Data:** Write 25 valid and invalid recorded tool-call responses. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema validator and read-only dispatch simulator.

**Effort:** 10h · Beginner → intermediate

- **Tool calling, streaming and multimodal AI:** Implement Tool calling, streaming and multimodal AI in Structured tool-call validator. Adapt this focused lab to the project data: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.  Required concepts: Tool calling, Streaming, Multimodal tasks.
  - Deliverable: Tool calling, streaming and multimodal AI: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema validator and read-only dispatch simulator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tool calling, streaming and multimodal AI: Tool calling, streaming and multimodal AI: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject unknown tools, extra dangerous fields and invalid argument types.
- [ ] Tool calling, streaming and multimodal AI: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### KV cache memory simulator

A serving learner needs to understand cache growth and eviction.

**Data:** Generate request lengths and toy key/value tensors. Use a fixed seed and keep evaluation cases separate.

**Output:** A cache size calculator and equivalent cached/uncached toy attention outputs.

**Effort:** 10h · Beginner → intermediate

- **Tool calling, streaming and multimodal AI:** Extend the project with Tool calling, streaming and multimodal AI in KV cache memory simulator. Adapt this focused lab to the project data: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.  Required concepts: Tool calling, Streaming, Multimodal tasks.
  - Deliverable: Tool calling, streaming and multimodal AI: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cache size calculator and equivalent cached/uncached toy attention outputs. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tool calling, streaming and multimodal AI: Tool calling, streaming and multimodal AI: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match outputs and document memory assumptions, batch sizes and dtypes.
- [ ] Tool calling, streaming and multimodal AI: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Context assembly laboratory

A developer needs relevant context within a fixed budget.

**Data:** Use ten Markdown notes with IDs, priorities and contradictory statements. Use a fixed seed and keep evaluation cases separate.

**Output:** A context packer with source traceability.

**Effort:** 10h · Beginner → intermediate

- **Tool calling, streaming and multimodal AI:** Extend the project with Tool calling, streaming and multimodal AI in Context assembly laboratory. Adapt this focused lab to the project data: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.  Required concepts: Tool calling, Streaming, Multimodal tasks.
  - Deliverable: Tool calling, streaming and multimodal AI: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A context packer with source traceability. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tool calling, streaming and multimodal AI: Tool calling, streaming and multimodal AI: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Always retain required constraints and explain every dropped passage.
- [ ] Tool calling, streaming and multimodal AI: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Low-rank adaptation microscope

A learner needs to see what LoRA changes in a frozen model.

**Data:** Generate input/target matrices for a small frozen linear layer. Use a fixed seed and keep evaluation cases separate.

**Output:** A low-rank adapter training experiment and parameter count report.

**Effort:** 10h · Beginner → intermediate

- **Tool calling, streaming and multimodal AI:** Extend the project with Tool calling, streaming and multimodal AI in Low-rank adaptation microscope. Adapt this focused lab to the project data: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.  Required concepts: Tool calling, Streaming, Multimodal tasks.
  - Deliverable: Tool calling, streaming and multimodal AI: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A low-rank adapter training experiment and parameter count report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tool calling, streaming and multimodal AI: Tool calling, streaming and multimodal AI: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Only adapters receive gradients; compare rank settings under the same budget.
- [ ] Tool calling, streaming and multimodal AI: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local model selection scorecard

A developer needs a defensible model choice under laptop constraints.

**Data:** Use 20 local evaluation prompts; recorded outputs are the offline fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A quality, memory and latency scorecard with provenance per run.

**Effort:** 10h · Beginner → intermediate

- **Tool calling, streaming and multimodal AI:** Extend the project with Tool calling, streaming and multimodal AI in Local model selection scorecard. Adapt this focused lab to the project data: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.  Required concepts: Tool calling, Streaming, Multimodal tasks.
  - Deliverable: Tool calling, streaming and multimodal AI: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A quality, memory and latency scorecard with provenance per run. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tool calling, streaming and multimodal AI: Tool calling, streaming and multimodal AI: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Separate measured local runs from fixtures and state untested capabilities.
- [ ] Tool calling, streaming and multimodal AI: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Prompt regression workbench

A support writer needs repeatable checks before changing instructions.

**Data:** Author 30 requests with expected structured responses and recorded fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A prompt version comparison harness.

**Effort:** 10h · Beginner → intermediate

- **Tool calling, streaming and multimodal AI:** Extend the project with Tool calling, streaming and multimodal AI in Prompt regression workbench. Adapt this focused lab to the project data: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.  Required concepts: Tool calling, Streaming, Multimodal tasks.
  - Deliverable: Tool calling, streaming and multimodal AI: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A prompt version comparison harness. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tool calling, streaming and multimodal AI: Tool calling, streaming and multimodal AI: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect malformed JSON, unsupported claims and changed required fields.
- [ ] Tool calling, streaming and multimodal AI: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Quantization error explorer

A learner needs to measure compression tradeoffs before choosing a format.

**Data:** Use generated linear-layer weights and calibration vectors. Use a fixed seed and keep evaluation cases separate.

**Output:** An int8 quantize/dequantize notebook with size and output-error plots.

**Effort:** 10h · Beginner → intermediate

- **Tool calling, streaming and multimodal AI:** Extend the project with Tool calling, streaming and multimodal AI in Quantization error explorer. Adapt this focused lab to the project data: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.  Required concepts: Tool calling, Streaming, Multimodal tasks.
  - Deliverable: Tool calling, streaming and multimodal AI: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An int8 quantize/dequantize notebook with size and output-error plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tool calling, streaming and multimodal AI: Tool calling, streaming and multimodal AI: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare per-tensor and per-channel scales and test outlier sensitivity.
- [ ] Tool calling, streaming and multimodal AI: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Decoding distribution explorer

A learner needs to understand temperature, top-k and top-p.

**Data:** Use fixed vocabulary logits and seeded sampling on CPU. Use a fixed seed and keep evaluation cases separate.

**Output:** A probability visualizer and sampling experiment.

**Effort:** 10h · Beginner → intermediate

- **Tool calling, streaming and multimodal AI:** Extend the project with Tool calling, streaming and multimodal AI in Decoding distribution explorer. Adapt this focused lab to the project data: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.  Required concepts: Tool calling, Streaming, Multimodal tasks.
  - Deliverable: Tool calling, streaming and multimodal AI: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A probability visualizer and sampling experiment. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tool calling, streaming and multimodal AI: Tool calling, streaming and multimodal AI: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify normalization, deterministic seed behavior and nucleus boundaries.
- [ ] Tool calling, streaming and multimodal AI: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Token budget planner

An app builder needs to estimate what fits in a context window.

**Data:** Use 20 local multilingual prompts and a downloadable small tokenizer or documented byte fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A tokenizer comparison and truncation report.

**Effort:** 10h · Beginner → intermediate

- **Tool calling, streaming and multimodal AI:** Extend the project with Tool calling, streaming and multimodal AI in Token budget planner. Adapt this focused lab to the project data: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.  Required concepts: Tool calling, Streaming, Multimodal tasks.
  - Deliverable: Tool calling, streaming and multimodal AI: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A tokenizer comparison and truncation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tool calling, streaming and multimodal AI: Tool calling, streaming and multimodal AI: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Preserve required instructions and label byte estimates as estimates, not exact token counts.
- [ ] Tool calling, streaming and multimodal AI: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="llm-finetuning"></a>

### Fine-tuning, LoRA/QLoRA and quantization

Know when weight adaptation is justified and how it differs from retrieval.

**Priority:** Specialization · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [Tool calling, streaming and multimodal AI](llm.md#llm-tools) Navigation is unrestricted.

#### Concepts

- [ ] **Fine-tuning:** Weight updates adapt behavior; split data carefully and compare against prompting/RAG first.
  - Example: Use formatting failures as a possible adaptation target, not missing current facts.
  - Videos:
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on fine-tuning. Then reproduce the lesson example: Use formatting failures as a possible adaptation target, not missing current facts.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **LoRA and QLoRA:** LoRA trains low-rank adapters; QLoRA combines adapter training with quantized base weights and hardware-sensitive setup.
  - Example: Calculate adapter parameter counts for a small linear layer.
  - Videos:
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on lora and qlora. Then reproduce the lesson example: Calculate adapter parameter counts for a small linear layer.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Quantization:** Lower-bit representations reduce storage with accuracy and runtime tradeoffs; hardware support differs.
  - Example: Quantize a NumPy weight vector and measure reconstruction error.
  - Videos:
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on quantization. Then reproduce the lesson example: Quantize a NumPy weight vector and measure reconstruction error.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### YouTube: focused explanations and full courses

- [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
  - Explains: A PyTorch language-model pipeline and the stages of language-model development.
  - Useful because: Connect model internals to application decisions; large training runs are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### Free written resources

1. [Hugging Face PEFT: LoRA](https://huggingface.co/docs/peft/conceptual_guides/lora) — Free reading; Hugging Face account optional for sharing models. No paid materials required.
2. [Hugging Face: quantization overview](https://huggingface.co/docs/transformers/quantization/overview) — Free reading; Hugging Face account optional for sharing models. No paid materials required.

#### Lab: Fine-tuning, LoRA/QLoRA and quantization

Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### KV cache memory simulator

A serving learner needs to understand cache growth and eviction.

**Data:** Generate request lengths and toy key/value tensors. Use a fixed seed and keep evaluation cases separate.

**Output:** A cache size calculator and equivalent cached/uncached toy attention outputs.

**Effort:** 10h · Beginner → intermediate

- **Fine-tuning, LoRA/QLoRA and quantization:** Extend the project with Fine-tuning, LoRA/QLoRA and quantization in KV cache memory simulator. Adapt this focused lab to the project data: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.  Required concepts: Fine-tuning, LoRA and QLoRA, Quantization.
  - Deliverable: Fine-tuning, LoRA/QLoRA and quantization: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cache size calculator and equivalent cached/uncached toy attention outputs. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Fine-tuning, LoRA/QLoRA and quantization: Fine-tuning, LoRA/QLoRA and quantization: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match outputs and document memory assumptions, batch sizes and dtypes.
- [ ] Fine-tuning, LoRA/QLoRA and quantization: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Context assembly laboratory

A developer needs relevant context within a fixed budget.

**Data:** Use ten Markdown notes with IDs, priorities and contradictory statements. Use a fixed seed and keep evaluation cases separate.

**Output:** A context packer with source traceability.

**Effort:** 10h · Beginner → intermediate

- **Fine-tuning, LoRA/QLoRA and quantization:** Extend the project with Fine-tuning, LoRA/QLoRA and quantization in Context assembly laboratory. Adapt this focused lab to the project data: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.  Required concepts: Fine-tuning, LoRA and QLoRA, Quantization.
  - Deliverable: Fine-tuning, LoRA/QLoRA and quantization: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A context packer with source traceability. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Fine-tuning, LoRA/QLoRA and quantization: Fine-tuning, LoRA/QLoRA and quantization: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Always retain required constraints and explain every dropped passage.
- [ ] Fine-tuning, LoRA/QLoRA and quantization: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Low-rank adaptation microscope

A learner needs to see what LoRA changes in a frozen model.

**Data:** Generate input/target matrices for a small frozen linear layer. Use a fixed seed and keep evaluation cases separate.

**Output:** A low-rank adapter training experiment and parameter count report.

**Effort:** 10h · Beginner → intermediate

- **Fine-tuning, LoRA/QLoRA and quantization:** Extend the project with Fine-tuning, LoRA/QLoRA and quantization in Low-rank adaptation microscope. Adapt this focused lab to the project data: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.  Required concepts: Fine-tuning, LoRA and QLoRA, Quantization.
  - Deliverable: Fine-tuning, LoRA/QLoRA and quantization: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A low-rank adapter training experiment and parameter count report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Fine-tuning, LoRA/QLoRA and quantization: Fine-tuning, LoRA/QLoRA and quantization: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Only adapters receive gradients; compare rank settings under the same budget.
- [ ] Fine-tuning, LoRA/QLoRA and quantization: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local model selection scorecard

A developer needs a defensible model choice under laptop constraints.

**Data:** Use 20 local evaluation prompts; recorded outputs are the offline fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A quality, memory and latency scorecard with provenance per run.

**Effort:** 10h · Beginner → intermediate

- **Fine-tuning, LoRA/QLoRA and quantization:** Extend the project with Fine-tuning, LoRA/QLoRA and quantization in Local model selection scorecard. Adapt this focused lab to the project data: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.  Required concepts: Fine-tuning, LoRA and QLoRA, Quantization.
  - Deliverable: Fine-tuning, LoRA/QLoRA and quantization: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A quality, memory and latency scorecard with provenance per run. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Fine-tuning, LoRA/QLoRA and quantization: Fine-tuning, LoRA/QLoRA and quantization: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Separate measured local runs from fixtures and state untested capabilities.
- [ ] Fine-tuning, LoRA/QLoRA and quantization: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Prompt regression workbench

A support writer needs repeatable checks before changing instructions.

**Data:** Author 30 requests with expected structured responses and recorded fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A prompt version comparison harness.

**Effort:** 10h · Beginner → intermediate

- **Fine-tuning, LoRA/QLoRA and quantization:** Extend the project with Fine-tuning, LoRA/QLoRA and quantization in Prompt regression workbench. Adapt this focused lab to the project data: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.  Required concepts: Fine-tuning, LoRA and QLoRA, Quantization.
  - Deliverable: Fine-tuning, LoRA/QLoRA and quantization: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A prompt version comparison harness. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Fine-tuning, LoRA/QLoRA and quantization: Fine-tuning, LoRA/QLoRA and quantization: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect malformed JSON, unsupported claims and changed required fields.
- [ ] Fine-tuning, LoRA/QLoRA and quantization: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Quantization error explorer

A learner needs to measure compression tradeoffs before choosing a format.

**Data:** Use generated linear-layer weights and calibration vectors. Use a fixed seed and keep evaluation cases separate.

**Output:** An int8 quantize/dequantize notebook with size and output-error plots.

**Effort:** 10h · Beginner → intermediate

- **Fine-tuning, LoRA/QLoRA and quantization:** Extend the project with Fine-tuning, LoRA/QLoRA and quantization in Quantization error explorer. Adapt this focused lab to the project data: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.  Required concepts: Fine-tuning, LoRA and QLoRA, Quantization.
  - Deliverable: Fine-tuning, LoRA/QLoRA and quantization: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An int8 quantize/dequantize notebook with size and output-error plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Fine-tuning, LoRA/QLoRA and quantization: Fine-tuning, LoRA/QLoRA and quantization: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare per-tensor and per-channel scales and test outlier sensitivity.
- [ ] Fine-tuning, LoRA/QLoRA and quantization: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Streaming response assembler

An interface builder needs correct partial structured-response handling.

**Data:** Create fixtures of chunked JSON and text with disconnects. Use a fixed seed and keep evaluation cases separate.

**Output:** A stream assembler and cancellation demo.

**Effort:** 10h · Beginner → intermediate

- **Fine-tuning, LoRA/QLoRA and quantization:** Extend the project with Fine-tuning, LoRA/QLoRA and quantization in Streaming response assembler. Adapt this focused lab to the project data: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.  Required concepts: Fine-tuning, LoRA and QLoRA, Quantization.
  - Deliverable: Fine-tuning, LoRA/QLoRA and quantization: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A stream assembler and cancellation demo. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Fine-tuning, LoRA/QLoRA and quantization: Fine-tuning, LoRA/QLoRA and quantization: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Never parse incomplete JSON as final; recover cleanly from a dropped stream.
- [ ] Fine-tuning, LoRA/QLoRA and quantization: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Decoding distribution explorer

A learner needs to understand temperature, top-k and top-p.

**Data:** Use fixed vocabulary logits and seeded sampling on CPU. Use a fixed seed and keep evaluation cases separate.

**Output:** A probability visualizer and sampling experiment.

**Effort:** 10h · Beginner → intermediate

- **Fine-tuning, LoRA/QLoRA and quantization:** Extend the project with Fine-tuning, LoRA/QLoRA and quantization in Decoding distribution explorer. Adapt this focused lab to the project data: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.  Required concepts: Fine-tuning, LoRA and QLoRA, Quantization.
  - Deliverable: Fine-tuning, LoRA/QLoRA and quantization: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A probability visualizer and sampling experiment. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Fine-tuning, LoRA/QLoRA and quantization: Fine-tuning, LoRA/QLoRA and quantization: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify normalization, deterministic seed behavior and nucleus boundaries.
- [ ] Fine-tuning, LoRA/QLoRA and quantization: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Token budget planner

An app builder needs to estimate what fits in a context window.

**Data:** Use 20 local multilingual prompts and a downloadable small tokenizer or documented byte fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A tokenizer comparison and truncation report.

**Effort:** 10h · Beginner → intermediate

- **Fine-tuning, LoRA/QLoRA and quantization:** Extend the project with Fine-tuning, LoRA/QLoRA and quantization in Token budget planner. Adapt this focused lab to the project data: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.  Required concepts: Fine-tuning, LoRA and QLoRA, Quantization.
  - Deliverable: Fine-tuning, LoRA/QLoRA and quantization: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A tokenizer comparison and truncation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Fine-tuning, LoRA/QLoRA and quantization: Fine-tuning, LoRA/QLoRA and quantization: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Preserve required instructions and label byte estimates as estimates, not exact token counts.
- [ ] Fine-tuning, LoRA/QLoRA and quantization: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Structured tool-call validator

An app builder needs safe interpretation of proposed tool arguments.

**Data:** Write 25 valid and invalid recorded tool-call responses. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema validator and read-only dispatch simulator.

**Effort:** 10h · Beginner → intermediate

- **Fine-tuning, LoRA/QLoRA and quantization:** Extend the project with Fine-tuning, LoRA/QLoRA and quantization in Structured tool-call validator. Adapt this focused lab to the project data: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.  Required concepts: Fine-tuning, LoRA and QLoRA, Quantization.
  - Deliverable: Fine-tuning, LoRA/QLoRA and quantization: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema validator and read-only dispatch simulator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Fine-tuning, LoRA/QLoRA and quantization: Fine-tuning, LoRA/QLoRA and quantization: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject unknown tools, extra dangerous fields and invalid argument types.
- [ ] Fine-tuning, LoRA/QLoRA and quantization: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Inference internals and control

<a id="llm-sampling-decoding"></a>

### Decoding: temperature, top-k, top-p and stop rules

Understand how a model's logits become tokens and why sampling settings affect output variability rather than guaranteeing factuality.

**Priority:** Essential · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [Tokens, embeddings, context and transformer internals](llm.md#llm-foundations) Navigation is unrestricted.

#### Concepts

- [ ] **Temperature on logits:** Temperature rescales logits before sampling; implementations may use a separate greedy mode instead of accepting a literal zero temperature.
  - Example: Compare probabilities from logits [1,2,3] at temperatures 0.5 and 1.5.
  - Videos:
    - [Karpathy — Building makemore](https://www.youtube.com/watch?v=PaCmpygFfXo) · Andrej Karpathy · From-scratch lecture · 1h57m
      - Explains: A character-level bigram language model, tensor operations, likelihood and sampling.
      - Useful because: Reproduce the tiny model locally and inspect shapes and probabilities at each step.
      - Watch for: Focus on temperature on logits. Then reproduce the lesson example: Compare probabilities from logits [1,2,3] at temperatures 0.5 and 1.5.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://karpathy.ai/zero-to-hero.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on temperature on logits. Then reproduce the lesson example: Compare probabilities from logits [1,2,3] at temperatures 0.5 and 1.5.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Top-k truncation:** Top-k samples only among the k largest-scoring candidates and renormalises their probabilities.
  - Example: Filter a five-token distribution to two tokens and show which candidates become impossible.
  - Videos:
    - [Karpathy — Building makemore](https://www.youtube.com/watch?v=PaCmpygFfXo) · Andrej Karpathy · From-scratch lecture · 1h57m
      - Explains: A character-level bigram language model, tensor operations, likelihood and sampling.
      - Useful because: Reproduce the tiny model locally and inspect shapes and probabilities at each step.
      - Watch for: Focus on top-k truncation. Then reproduce the lesson example: Filter a five-token distribution to two tokens and show which candidates become impossible.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://karpathy.ai/zero-to-hero.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on top-k truncation. Then reproduce the lesson example: Filter a five-token distribution to two tokens and show which candidates become impossible.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Nucleus sampling:** Top-p retains a probability-mass prefix, so the candidate count changes with distribution shape.
  - Example: Compare the retained count for a peaked and a nearly uniform token distribution at p=0.9.
  - Videos:
    - [Karpathy — Building makemore](https://www.youtube.com/watch?v=PaCmpygFfXo) · Andrej Karpathy · From-scratch lecture · 1h57m
      - Explains: A character-level bigram language model, tensor operations, likelihood and sampling.
      - Useful because: Reproduce the tiny model locally and inspect shapes and probabilities at each step.
      - Watch for: Focus on nucleus sampling. Then reproduce the lesson example: Compare the retained count for a peaked and a nearly uniform token distribution at p=0.9.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://karpathy.ai/zero-to-hero.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on nucleus sampling. Then reproduce the lesson example: Compare the retained count for a peaked and a nearly uniform token distribution at p=0.9.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Stop conditions:** End tokens, maximum new tokens and explicit stop sequences are different termination mechanisms.
  - Example: Generate from a fake token stream and test that a multi-token stop marker is not leaked into the answer.
  - Videos:
    - [Karpathy — Building makemore](https://www.youtube.com/watch?v=PaCmpygFfXo) · Andrej Karpathy · From-scratch lecture · 1h57m
      - Explains: A character-level bigram language model, tensor operations, likelihood and sampling.
      - Useful because: Reproduce the tiny model locally and inspect shapes and probabilities at each step.
      - Watch for: Focus on stop conditions. Then reproduce the lesson example: Generate from a fake token stream and test that a multi-token stop marker is not leaked into the answer.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://karpathy.ai/zero-to-hero.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on stop conditions. Then reproduce the lesson example: Generate from a fake token stream and test that a multi-token stop marker is not leaked into the answer.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Sampling and correctness:** Low randomness does not establish truth, and reproducibility can depend on seed, hardware and runtime settings.
  - Example: Evaluate a fixed set of toy prompts with repeated seeded sampling and document the limits of the comparison.
  - Videos:
    - [Karpathy — Building makemore](https://www.youtube.com/watch?v=PaCmpygFfXo) · Andrej Karpathy · From-scratch lecture · 1h57m
      - Explains: A character-level bigram language model, tensor operations, likelihood and sampling.
      - Useful because: Reproduce the tiny model locally and inspect shapes and probabilities at each step.
      - Watch for: Focus on sampling and correctness. Then reproduce the lesson example: Evaluate a fixed set of toy prompts with repeated seeded sampling and document the limits of the comparison.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://karpathy.ai/zero-to-hero.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on sampling and correctness. Then reproduce the lesson example: Evaluate a fixed set of toy prompts with repeated seeded sampling and document the limits of the comparison.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### YouTube: focused explanations and full courses

- [Karpathy — Building makemore](https://www.youtube.com/watch?v=PaCmpygFfXo) · Andrej Karpathy · From-scratch lecture · 1h57m
  - Explains: A character-level bigram language model, tensor operations, likelihood and sampling.
  - Useful because: Reproduce the tiny model locally and inspect shapes and probabilities at each step.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://karpathy.ai/zero-to-hero.html
- [Build GPT from scratch, in code](https://www.youtube.com/watch?v=kCc8FmEb1nY) · Andrej Karpathy · From-scratch lecture
  - Explains: Language modeling, embeddings, causal attention, transformer blocks and sampling.
  - Useful because: Trace token IDs to logits and understand a small end-to-end transformer.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://karpathy.ai/zero-to-hero.html
- [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
  - Explains: A PyTorch language-model pipeline and the stages of language-model development.
  - Useful because: Connect model internals to application decisions; large training runs are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### Free written resources

1. [Hugging Face: generation strategies](https://huggingface.co/docs/transformers/generation_strategies) — Free; no registration required. No paid materials required.
2. [Hugging Face: generation configuration](https://huggingface.co/docs/transformers/main_classes/text_generation) — Free; no registration required. No paid materials required.

#### Lab: Decoding: temperature, top-k, top-p and stop rules

Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Decoding distribution explorer

A learner needs to understand temperature, top-k and top-p.

**Data:** Use fixed vocabulary logits and seeded sampling on CPU. Use a fixed seed and keep evaluation cases separate.

**Output:** A probability visualizer and sampling experiment.

**Effort:** 10h · Beginner → intermediate

- **Decoding: temperature, top-k, top-p and stop rules:** Implement Decoding: temperature, top-k, top-p and stop rules in Decoding distribution explorer. Adapt this focused lab to the project data: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.  Required concepts: Temperature on logits, Top-k truncation, Nucleus sampling, Stop conditions, Sampling and correctness.
  - Deliverable: Decoding: temperature, top-k, top-p and stop rules: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A probability visualizer and sampling experiment. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Decoding: temperature, top-k, top-p and stop rules: Decoding: temperature, top-k, top-p and stop rules: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify normalization, deterministic seed behavior and nucleus boundaries.
- [ ] Decoding: temperature, top-k, top-p and stop rules: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### KV cache memory simulator

A serving learner needs to understand cache growth and eviction.

**Data:** Generate request lengths and toy key/value tensors. Use a fixed seed and keep evaluation cases separate.

**Output:** A cache size calculator and equivalent cached/uncached toy attention outputs.

**Effort:** 10h · Beginner → intermediate

- **Decoding: temperature, top-k, top-p and stop rules:** Extend the project with Decoding: temperature, top-k, top-p and stop rules in KV cache memory simulator. Adapt this focused lab to the project data: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.  Required concepts: Temperature on logits, Top-k truncation, Nucleus sampling, Stop conditions, Sampling and correctness.
  - Deliverable: Decoding: temperature, top-k, top-p and stop rules: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cache size calculator and equivalent cached/uncached toy attention outputs. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Decoding: temperature, top-k, top-p and stop rules: Decoding: temperature, top-k, top-p and stop rules: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match outputs and document memory assumptions, batch sizes and dtypes.
- [ ] Decoding: temperature, top-k, top-p and stop rules: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Context assembly laboratory

A developer needs relevant context within a fixed budget.

**Data:** Use ten Markdown notes with IDs, priorities and contradictory statements. Use a fixed seed and keep evaluation cases separate.

**Output:** A context packer with source traceability.

**Effort:** 10h · Beginner → intermediate

- **Decoding: temperature, top-k, top-p and stop rules:** Extend the project with Decoding: temperature, top-k, top-p and stop rules in Context assembly laboratory. Adapt this focused lab to the project data: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.  Required concepts: Temperature on logits, Top-k truncation, Nucleus sampling, Stop conditions, Sampling and correctness.
  - Deliverable: Decoding: temperature, top-k, top-p and stop rules: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A context packer with source traceability. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Decoding: temperature, top-k, top-p and stop rules: Decoding: temperature, top-k, top-p and stop rules: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Always retain required constraints and explain every dropped passage.
- [ ] Decoding: temperature, top-k, top-p and stop rules: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Low-rank adaptation microscope

A learner needs to see what LoRA changes in a frozen model.

**Data:** Generate input/target matrices for a small frozen linear layer. Use a fixed seed and keep evaluation cases separate.

**Output:** A low-rank adapter training experiment and parameter count report.

**Effort:** 10h · Beginner → intermediate

- **Decoding: temperature, top-k, top-p and stop rules:** Extend the project with Decoding: temperature, top-k, top-p and stop rules in Low-rank adaptation microscope. Adapt this focused lab to the project data: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.  Required concepts: Temperature on logits, Top-k truncation, Nucleus sampling, Stop conditions, Sampling and correctness.
  - Deliverable: Decoding: temperature, top-k, top-p and stop rules: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A low-rank adapter training experiment and parameter count report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Decoding: temperature, top-k, top-p and stop rules: Decoding: temperature, top-k, top-p and stop rules: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Only adapters receive gradients; compare rank settings under the same budget.
- [ ] Decoding: temperature, top-k, top-p and stop rules: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local model selection scorecard

A developer needs a defensible model choice under laptop constraints.

**Data:** Use 20 local evaluation prompts; recorded outputs are the offline fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A quality, memory and latency scorecard with provenance per run.

**Effort:** 10h · Beginner → intermediate

- **Decoding: temperature, top-k, top-p and stop rules:** Extend the project with Decoding: temperature, top-k, top-p and stop rules in Local model selection scorecard. Adapt this focused lab to the project data: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.  Required concepts: Temperature on logits, Top-k truncation, Nucleus sampling, Stop conditions, Sampling and correctness.
  - Deliverable: Decoding: temperature, top-k, top-p and stop rules: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A quality, memory and latency scorecard with provenance per run. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Decoding: temperature, top-k, top-p and stop rules: Decoding: temperature, top-k, top-p and stop rules: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Separate measured local runs from fixtures and state untested capabilities.
- [ ] Decoding: temperature, top-k, top-p and stop rules: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Prompt regression workbench

A support writer needs repeatable checks before changing instructions.

**Data:** Author 30 requests with expected structured responses and recorded fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A prompt version comparison harness.

**Effort:** 10h · Beginner → intermediate

- **Decoding: temperature, top-k, top-p and stop rules:** Extend the project with Decoding: temperature, top-k, top-p and stop rules in Prompt regression workbench. Adapt this focused lab to the project data: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.  Required concepts: Temperature on logits, Top-k truncation, Nucleus sampling, Stop conditions, Sampling and correctness.
  - Deliverable: Decoding: temperature, top-k, top-p and stop rules: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A prompt version comparison harness. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Decoding: temperature, top-k, top-p and stop rules: Decoding: temperature, top-k, top-p and stop rules: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect malformed JSON, unsupported claims and changed required fields.
- [ ] Decoding: temperature, top-k, top-p and stop rules: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Quantization error explorer

A learner needs to measure compression tradeoffs before choosing a format.

**Data:** Use generated linear-layer weights and calibration vectors. Use a fixed seed and keep evaluation cases separate.

**Output:** An int8 quantize/dequantize notebook with size and output-error plots.

**Effort:** 10h · Beginner → intermediate

- **Decoding: temperature, top-k, top-p and stop rules:** Extend the project with Decoding: temperature, top-k, top-p and stop rules in Quantization error explorer. Adapt this focused lab to the project data: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.  Required concepts: Temperature on logits, Top-k truncation, Nucleus sampling, Stop conditions, Sampling and correctness.
  - Deliverable: Decoding: temperature, top-k, top-p and stop rules: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An int8 quantize/dequantize notebook with size and output-error plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Decoding: temperature, top-k, top-p and stop rules: Decoding: temperature, top-k, top-p and stop rules: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare per-tensor and per-channel scales and test outlier sensitivity.
- [ ] Decoding: temperature, top-k, top-p and stop rules: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Streaming response assembler

An interface builder needs correct partial structured-response handling.

**Data:** Create fixtures of chunked JSON and text with disconnects. Use a fixed seed and keep evaluation cases separate.

**Output:** A stream assembler and cancellation demo.

**Effort:** 10h · Beginner → intermediate

- **Decoding: temperature, top-k, top-p and stop rules:** Extend the project with Decoding: temperature, top-k, top-p and stop rules in Streaming response assembler. Adapt this focused lab to the project data: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.  Required concepts: Temperature on logits, Top-k truncation, Nucleus sampling, Stop conditions, Sampling and correctness.
  - Deliverable: Decoding: temperature, top-k, top-p and stop rules: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A stream assembler and cancellation demo. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Decoding: temperature, top-k, top-p and stop rules: Decoding: temperature, top-k, top-p and stop rules: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Never parse incomplete JSON as final; recover cleanly from a dropped stream.
- [ ] Decoding: temperature, top-k, top-p and stop rules: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Token budget planner

An app builder needs to estimate what fits in a context window.

**Data:** Use 20 local multilingual prompts and a downloadable small tokenizer or documented byte fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A tokenizer comparison and truncation report.

**Effort:** 10h · Beginner → intermediate

- **Decoding: temperature, top-k, top-p and stop rules:** Extend the project with Decoding: temperature, top-k, top-p and stop rules in Token budget planner. Adapt this focused lab to the project data: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.  Required concepts: Temperature on logits, Top-k truncation, Nucleus sampling, Stop conditions, Sampling and correctness.
  - Deliverable: Decoding: temperature, top-k, top-p and stop rules: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A tokenizer comparison and truncation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Decoding: temperature, top-k, top-p and stop rules: Decoding: temperature, top-k, top-p and stop rules: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Preserve required instructions and label byte estimates as estimates, not exact token counts.
- [ ] Decoding: temperature, top-k, top-p and stop rules: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Structured tool-call validator

An app builder needs safe interpretation of proposed tool arguments.

**Data:** Write 25 valid and invalid recorded tool-call responses. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema validator and read-only dispatch simulator.

**Effort:** 10h · Beginner → intermediate

- **Decoding: temperature, top-k, top-p and stop rules:** Extend the project with Decoding: temperature, top-k, top-p and stop rules in Structured tool-call validator. Adapt this focused lab to the project data: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.  Required concepts: Temperature on logits, Top-k truncation, Nucleus sampling, Stop conditions, Sampling and correctness.
  - Deliverable: Decoding: temperature, top-k, top-p and stop rules: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema validator and read-only dispatch simulator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Decoding: temperature, top-k, top-p and stop rules: Decoding: temperature, top-k, top-p and stop rules: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject unknown tools, extra dangerous fields and invalid argument types.
- [ ] Decoding: temperature, top-k, top-p and stop rules: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="llm-kv-cache-serving"></a>

### Prefill, decoding, KV cache and model memory budgets

Estimate whether a local model and its context fit available memory and distinguish throughput from response latency.

**Priority:** Specialization · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [Context engineering, memory and caching](llm.md#llm-context) Navigation is unrestricted.

#### Concepts

- [ ] **Prefill versus token decoding:** Prefill processes the prompt; decoding repeatedly extends it, so long prompts and long answers stress different parts of serving.
  - Example: Use recorded timings to separate time to first token from time per subsequent token.
  - Videos:
    - [Build GPT from scratch, in code](https://www.youtube.com/watch?v=kCc8FmEb1nY) · Andrej Karpathy · From-scratch lecture
      - Explains: Language modeling, embeddings, causal attention, transformer blocks and sampling.
      - Useful because: Trace token IDs to logits and understand a small end-to-end transformer.
      - Watch for: Focus on prefill versus token decoding. Then reproduce the lesson example: Use recorded timings to separate time to first token from time per subsequent token.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://karpathy.ai/zero-to-hero.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on prefill versus token decoding. Then reproduce the lesson example: Use recorded timings to separate time to first token from time per subsequent token.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **KV cache role:** Cached keys and values avoid recomputing previous token representations in standard autoregressive attention, at a memory cost that grows with context and batch size.
  - Example: Calculate how doubling a cached sequence length changes the stored key/value element count for a fixed toy model.
  - Videos:
    - [Build GPT from scratch, in code](https://www.youtube.com/watch?v=kCc8FmEb1nY) · Andrej Karpathy · From-scratch lecture
      - Explains: Language modeling, embeddings, causal attention, transformer blocks and sampling.
      - Useful because: Trace token IDs to logits and understand a small end-to-end transformer.
      - Watch for: Focus on kv cache role. Then reproduce the lesson example: Calculate how doubling a cached sequence length changes the stored key/value element count for a fixed toy model.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://karpathy.ai/zero-to-hero.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on kv cache role. Then reproduce the lesson example: Calculate how doubling a cached sequence length changes the stored key/value element count for a fixed toy model.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Weight and activation memory:** Model weights are only one part of memory usage; runtime buffers, activations and caches also matter.
  - Example: Estimate float32 parameter bytes separately from a small simulated cache and add an explicit overhead allowance.
  - Videos:
    - [Build GPT from scratch, in code](https://www.youtube.com/watch?v=kCc8FmEb1nY) · Andrej Karpathy · From-scratch lecture
      - Explains: Language modeling, embeddings, causal attention, transformer blocks and sampling.
      - Useful because: Trace token IDs to logits and understand a small end-to-end transformer.
      - Watch for: Focus on weight and activation memory. Then reproduce the lesson example: Estimate float32 parameter bytes separately from a small simulated cache and add an explicit overhead allowance.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://karpathy.ai/zero-to-hero.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on weight and activation memory. Then reproduce the lesson example: Estimate float32 parameter bytes separately from a small simulated cache and add an explicit overhead allowance.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Quantisation tradeoffs:** Reduced-bit weights may lower memory use but require compatible kernels and quality checks; they do not automatically reduce every runtime cost.
  - Example: Compare stored sizes and reconstruction errors for a tiny weight vector quantised to a small integer range.
  - Videos:
    - [Build GPT from scratch, in code](https://www.youtube.com/watch?v=kCc8FmEb1nY) · Andrej Karpathy · From-scratch lecture
      - Explains: Language modeling, embeddings, causal attention, transformer blocks and sampling.
      - Useful because: Trace token IDs to logits and understand a small end-to-end transformer.
      - Watch for: Focus on quantisation tradeoffs. Then reproduce the lesson example: Compare stored sizes and reconstruction errors for a tiny weight vector quantised to a small integer range.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://karpathy.ai/zero-to-hero.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on quantisation tradeoffs. Then reproduce the lesson example: Compare stored sizes and reconstruction errors for a tiny weight vector quantised to a small integer range.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Caching boundaries and privacy:** Response caching needs keys that capture relevant input/configuration and permission context; shared caches can leak private content.
  - Example: Test that identical prompts from different tenants do not hit a shared private-response cache.
  - Videos:
    - [Build GPT from scratch, in code](https://www.youtube.com/watch?v=kCc8FmEb1nY) · Andrej Karpathy · From-scratch lecture
      - Explains: Language modeling, embeddings, causal attention, transformer blocks and sampling.
      - Useful because: Trace token IDs to logits and understand a small end-to-end transformer.
      - Watch for: Focus on caching boundaries and privacy. Then reproduce the lesson example: Test that identical prompts from different tenants do not hit a shared private-response cache.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://karpathy.ai/zero-to-hero.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on caching boundaries and privacy. Then reproduce the lesson example: Test that identical prompts from different tenants do not hit a shared private-response cache.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### YouTube: focused explanations and full courses

- [Build GPT from scratch, in code](https://www.youtube.com/watch?v=kCc8FmEb1nY) · Andrej Karpathy · From-scratch lecture
  - Explains: Language modeling, embeddings, causal attention, transformer blocks and sampling.
  - Useful because: Trace token IDs to logits and understand a small end-to-end transformer.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://karpathy.ai/zero-to-hero.html
- [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
  - Explains: A PyTorch language-model pipeline and the stages of language-model development.
  - Useful because: Connect model internals to application decisions; large training runs are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### Free written resources

1. [Hugging Face: KV cache strategies](https://huggingface.co/docs/transformers/kv_cache) — Free; no registration required. No paid materials required.
2. [Hugging Face: quantisation overview](https://huggingface.co/docs/transformers/quantization/overview) — Free; no registration required. No paid materials required.

#### Lab: Prefill, decoding, KV cache and model memory budgets

Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### KV cache memory simulator

A serving learner needs to understand cache growth and eviction.

**Data:** Generate request lengths and toy key/value tensors. Use a fixed seed and keep evaluation cases separate.

**Output:** A cache size calculator and equivalent cached/uncached toy attention outputs.

**Effort:** 10h · Beginner → intermediate

- **Prefill, decoding, KV cache and model memory budgets:** Implement Prefill, decoding, KV cache and model memory budgets in KV cache memory simulator. Adapt this focused lab to the project data: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.  Required concepts: Prefill versus token decoding, KV cache role, Weight and activation memory, Quantisation tradeoffs, Caching boundaries and privacy.
  - Deliverable: Prefill, decoding, KV cache and model memory budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cache size calculator and equivalent cached/uncached toy attention outputs. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prefill, decoding, KV cache and model memory budgets: Prefill, decoding, KV cache and model memory budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match outputs and document memory assumptions, batch sizes and dtypes.
- [ ] Prefill, decoding, KV cache and model memory budgets: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Context assembly laboratory

A developer needs relevant context within a fixed budget.

**Data:** Use ten Markdown notes with IDs, priorities and contradictory statements. Use a fixed seed and keep evaluation cases separate.

**Output:** A context packer with source traceability.

**Effort:** 10h · Beginner → intermediate

- **Prefill, decoding, KV cache and model memory budgets:** Extend the project with Prefill, decoding, KV cache and model memory budgets in Context assembly laboratory. Adapt this focused lab to the project data: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.  Required concepts: Prefill versus token decoding, KV cache role, Weight and activation memory, Quantisation tradeoffs, Caching boundaries and privacy.
  - Deliverable: Prefill, decoding, KV cache and model memory budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A context packer with source traceability. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prefill, decoding, KV cache and model memory budgets: Prefill, decoding, KV cache and model memory budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Always retain required constraints and explain every dropped passage.
- [ ] Prefill, decoding, KV cache and model memory budgets: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Low-rank adaptation microscope

A learner needs to see what LoRA changes in a frozen model.

**Data:** Generate input/target matrices for a small frozen linear layer. Use a fixed seed and keep evaluation cases separate.

**Output:** A low-rank adapter training experiment and parameter count report.

**Effort:** 10h · Beginner → intermediate

- **Prefill, decoding, KV cache and model memory budgets:** Extend the project with Prefill, decoding, KV cache and model memory budgets in Low-rank adaptation microscope. Adapt this focused lab to the project data: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.  Required concepts: Prefill versus token decoding, KV cache role, Weight and activation memory, Quantisation tradeoffs, Caching boundaries and privacy.
  - Deliverable: Prefill, decoding, KV cache and model memory budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A low-rank adapter training experiment and parameter count report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prefill, decoding, KV cache and model memory budgets: Prefill, decoding, KV cache and model memory budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Only adapters receive gradients; compare rank settings under the same budget.
- [ ] Prefill, decoding, KV cache and model memory budgets: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local model selection scorecard

A developer needs a defensible model choice under laptop constraints.

**Data:** Use 20 local evaluation prompts; recorded outputs are the offline fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A quality, memory and latency scorecard with provenance per run.

**Effort:** 10h · Beginner → intermediate

- **Prefill, decoding, KV cache and model memory budgets:** Extend the project with Prefill, decoding, KV cache and model memory budgets in Local model selection scorecard. Adapt this focused lab to the project data: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.  Required concepts: Prefill versus token decoding, KV cache role, Weight and activation memory, Quantisation tradeoffs, Caching boundaries and privacy.
  - Deliverable: Prefill, decoding, KV cache and model memory budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A quality, memory and latency scorecard with provenance per run. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prefill, decoding, KV cache and model memory budgets: Prefill, decoding, KV cache and model memory budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Separate measured local runs from fixtures and state untested capabilities.
- [ ] Prefill, decoding, KV cache and model memory budgets: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Prompt regression workbench

A support writer needs repeatable checks before changing instructions.

**Data:** Author 30 requests with expected structured responses and recorded fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A prompt version comparison harness.

**Effort:** 10h · Beginner → intermediate

- **Prefill, decoding, KV cache and model memory budgets:** Extend the project with Prefill, decoding, KV cache and model memory budgets in Prompt regression workbench. Adapt this focused lab to the project data: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.  Required concepts: Prefill versus token decoding, KV cache role, Weight and activation memory, Quantisation tradeoffs, Caching boundaries and privacy.
  - Deliverable: Prefill, decoding, KV cache and model memory budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A prompt version comparison harness. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prefill, decoding, KV cache and model memory budgets: Prefill, decoding, KV cache and model memory budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect malformed JSON, unsupported claims and changed required fields.
- [ ] Prefill, decoding, KV cache and model memory budgets: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Quantization error explorer

A learner needs to measure compression tradeoffs before choosing a format.

**Data:** Use generated linear-layer weights and calibration vectors. Use a fixed seed and keep evaluation cases separate.

**Output:** An int8 quantize/dequantize notebook with size and output-error plots.

**Effort:** 10h · Beginner → intermediate

- **Prefill, decoding, KV cache and model memory budgets:** Extend the project with Prefill, decoding, KV cache and model memory budgets in Quantization error explorer. Adapt this focused lab to the project data: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.  Required concepts: Prefill versus token decoding, KV cache role, Weight and activation memory, Quantisation tradeoffs, Caching boundaries and privacy.
  - Deliverable: Prefill, decoding, KV cache and model memory budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An int8 quantize/dequantize notebook with size and output-error plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prefill, decoding, KV cache and model memory budgets: Prefill, decoding, KV cache and model memory budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare per-tensor and per-channel scales and test outlier sensitivity.
- [ ] Prefill, decoding, KV cache and model memory budgets: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Streaming response assembler

An interface builder needs correct partial structured-response handling.

**Data:** Create fixtures of chunked JSON and text with disconnects. Use a fixed seed and keep evaluation cases separate.

**Output:** A stream assembler and cancellation demo.

**Effort:** 10h · Beginner → intermediate

- **Prefill, decoding, KV cache and model memory budgets:** Extend the project with Prefill, decoding, KV cache and model memory budgets in Streaming response assembler. Adapt this focused lab to the project data: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.  Required concepts: Prefill versus token decoding, KV cache role, Weight and activation memory, Quantisation tradeoffs, Caching boundaries and privacy.
  - Deliverable: Prefill, decoding, KV cache and model memory budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A stream assembler and cancellation demo. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prefill, decoding, KV cache and model memory budgets: Prefill, decoding, KV cache and model memory budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Never parse incomplete JSON as final; recover cleanly from a dropped stream.
- [ ] Prefill, decoding, KV cache and model memory budgets: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Decoding distribution explorer

A learner needs to understand temperature, top-k and top-p.

**Data:** Use fixed vocabulary logits and seeded sampling on CPU. Use a fixed seed and keep evaluation cases separate.

**Output:** A probability visualizer and sampling experiment.

**Effort:** 10h · Beginner → intermediate

- **Prefill, decoding, KV cache and model memory budgets:** Extend the project with Prefill, decoding, KV cache and model memory budgets in Decoding distribution explorer. Adapt this focused lab to the project data: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.  Required concepts: Prefill versus token decoding, KV cache role, Weight and activation memory, Quantisation tradeoffs, Caching boundaries and privacy.
  - Deliverable: Prefill, decoding, KV cache and model memory budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A probability visualizer and sampling experiment. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prefill, decoding, KV cache and model memory budgets: Prefill, decoding, KV cache and model memory budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify normalization, deterministic seed behavior and nucleus boundaries.
- [ ] Prefill, decoding, KV cache and model memory budgets: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Token budget planner

An app builder needs to estimate what fits in a context window.

**Data:** Use 20 local multilingual prompts and a downloadable small tokenizer or documented byte fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A tokenizer comparison and truncation report.

**Effort:** 10h · Beginner → intermediate

- **Prefill, decoding, KV cache and model memory budgets:** Extend the project with Prefill, decoding, KV cache and model memory budgets in Token budget planner. Adapt this focused lab to the project data: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.  Required concepts: Prefill versus token decoding, KV cache role, Weight and activation memory, Quantisation tradeoffs, Caching boundaries and privacy.
  - Deliverable: Prefill, decoding, KV cache and model memory budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A tokenizer comparison and truncation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prefill, decoding, KV cache and model memory budgets: Prefill, decoding, KV cache and model memory budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Preserve required instructions and label byte estimates as estimates, not exact token counts.
- [ ] Prefill, decoding, KV cache and model memory budgets: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Structured tool-call validator

An app builder needs safe interpretation of proposed tool arguments.

**Data:** Write 25 valid and invalid recorded tool-call responses. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema validator and read-only dispatch simulator.

**Effort:** 10h · Beginner → intermediate

- **Prefill, decoding, KV cache and model memory budgets:** Extend the project with Prefill, decoding, KV cache and model memory budgets in Structured tool-call validator. Adapt this focused lab to the project data: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.  Required concepts: Prefill versus token decoding, KV cache role, Weight and activation memory, Quantisation tradeoffs, Caching boundaries and privacy.
  - Deliverable: Prefill, decoding, KV cache and model memory budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema validator and read-only dispatch simulator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prefill, decoding, KV cache and model memory budgets: Prefill, decoding, KV cache and model memory budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject unknown tools, extra dangerous fields and invalid argument types.
- [ ] Prefill, decoding, KV cache and model memory budgets: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="llm-tokenization-unicode"></a>

### Tokenisation, BPE, special tokens and multilingual budgets

Make token budgets and dataset preparation correct for code, Arabic, French and mixed-language prompts.

**Priority:** Essential · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [Tokens, embeddings, context and transformer internals](llm.md#llm-foundations) Navigation is unrestricted.

#### Concepts

- [ ] **Bytes, code points and tokens:** String length, UTF-8 byte length and model-token count describe different representations and are not interchangeable.
  - Example: Compare lengths for an English word, an Arabic word and an emoji sequence before using any model tokenizer.
  - Videos:
    - [Build the GPT tokenizer](https://www.youtube.com/watch?v=zduSFxRajkE) · Andrej Karpathy · From-scratch lecture
      - Explains: Tokenization, byte-pair encoding and the consequences of token boundaries.
      - Useful because: Understand why context size and token counts differ from word counts.
      - Watch for: Focus on bytes, code points and tokens. Then reproduce the lesson example: Compare lengths for an English word, an Arabic word and an emoji sequence before using any model tokenizer.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://karpathy.ai/zero-to-hero.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on bytes, code points and tokens. Then reproduce the lesson example: Compare lengths for an English word, an Arabic word and an emoji sequence before using any model tokenizer.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Byte-pair merges:** BPE repeatedly merges common symbol pairs under a learned vocabulary; a toy implementation makes the merge process inspectable.
  - Example: Learn three merges from a tiny text corpus and print the vocabulary after each merge.
  - Videos:
    - [Build the GPT tokenizer](https://www.youtube.com/watch?v=zduSFxRajkE) · Andrej Karpathy · From-scratch lecture
      - Explains: Tokenization, byte-pair encoding and the consequences of token boundaries.
      - Useful because: Understand why context size and token counts differ from word counts.
      - Watch for: Focus on byte-pair merges. Then reproduce the lesson example: Learn three merges from a tiny text corpus and print the vocabulary after each merge.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://karpathy.ai/zero-to-hero.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on byte-pair merges. Then reproduce the lesson example: Learn three merges from a tiny text corpus and print the vocabulary after each merge.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Special-token contracts:** Chat formatting may add role, boundary or end tokens; incorrect duplication changes the actual model input.
  - Example: Construct a toy chat template once and test that applying it twice is rejected or clearly detected.
  - Videos:
    - [Build the GPT tokenizer](https://www.youtube.com/watch?v=zduSFxRajkE) · Andrej Karpathy · From-scratch lecture
      - Explains: Tokenization, byte-pair encoding and the consequences of token boundaries.
      - Useful because: Understand why context size and token counts differ from word counts.
      - Watch for: Focus on special-token contracts. Then reproduce the lesson example: Construct a toy chat template once and test that applying it twice is rejected or clearly detected.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://karpathy.ai/zero-to-hero.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on special-token contracts. Then reproduce the lesson example: Construct a toy chat template once and test that applying it twice is rejected or clearly detected.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Truncation and padding:** Truncation removes content while padding adds masked positions; their side and maximum length affect model behaviour.
  - Example: Keep a required instruction within a small budget and mark which document text is truncated.
  - Videos:
    - [Build the GPT tokenizer](https://www.youtube.com/watch?v=zduSFxRajkE) · Andrej Karpathy · From-scratch lecture
      - Explains: Tokenization, byte-pair encoding and the consequences of token boundaries.
      - Useful because: Understand why context size and token counts differ from word counts.
      - Watch for: Focus on truncation and padding. Then reproduce the lesson example: Keep a required instruction within a small budget and mark which document text is truncated.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://karpathy.ai/zero-to-hero.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on truncation and padding. Then reproduce the lesson example: Keep a required instruction within a small budget and mark which document text is truncated.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Multilingual budget evaluation:** Token cost depends on the tokenizer and text distribution, so one characters-per-token rule is not reliable across languages.
  - Example: Compare token counts on equivalent synthetic English, French and Arabic prompts using an optional downloaded tokenizer or a labelled byte-level baseline.
  - Videos:
    - [Build the GPT tokenizer](https://www.youtube.com/watch?v=zduSFxRajkE) · Andrej Karpathy · From-scratch lecture
      - Explains: Tokenization, byte-pair encoding and the consequences of token boundaries.
      - Useful because: Understand why context size and token counts differ from word counts.
      - Watch for: Focus on multilingual budget evaluation. Then reproduce the lesson example: Compare token counts on equivalent synthetic English, French and Arabic prompts using an optional downloaded tokenizer or a labelled byte-level baseline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://karpathy.ai/zero-to-hero.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on multilingual budget evaluation. Then reproduce the lesson example: Compare token counts on equivalent synthetic English, French and Arabic prompts using an optional downloaded tokenizer or a labelled byte-level baseline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### YouTube: focused explanations and full courses

- [Build the GPT tokenizer](https://www.youtube.com/watch?v=zduSFxRajkE) · Andrej Karpathy · From-scratch lecture
  - Explains: Tokenization, byte-pair encoding and the consequences of token boundaries.
  - Useful because: Understand why context size and token counts differ from word counts.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://karpathy.ai/zero-to-hero.html
- [Karpathy — Building makemore](https://www.youtube.com/watch?v=PaCmpygFfXo) · Andrej Karpathy · From-scratch lecture · 1h57m
  - Explains: A character-level bigram language model, tensor operations, likelihood and sampling.
  - Useful because: Reproduce the tiny model locally and inspect shapes and probabilities at each step.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://karpathy.ai/zero-to-hero.html
- [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
  - Explains: A PyTorch language-model pipeline and the stages of language-model development.
  - Useful because: Connect model internals to application decisions; large training runs are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### Free written resources

1. [Hugging Face LLM course: byte-pair encoding](https://huggingface.co/learn/llm-course/chapter6/5) — Free; no registration required. No paid materials required.
2. [Python: Unicode HOWTO](https://docs.python.org/3/howto/unicode.html) — Free; no registration required. No paid materials required.

#### Lab: Tokenisation, BPE, special tokens and multilingual budgets

Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Token budget planner

An app builder needs to estimate what fits in a context window.

**Data:** Use 20 local multilingual prompts and a downloadable small tokenizer or documented byte fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A tokenizer comparison and truncation report.

**Effort:** 10h · Beginner → intermediate

- **Tokenisation, BPE, special tokens and multilingual budgets:** Implement Tokenisation, BPE, special tokens and multilingual budgets in Token budget planner. Adapt this focused lab to the project data: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.  Required concepts: Bytes, code points and tokens, Byte-pair merges, Special-token contracts, Truncation and padding, Multilingual budget evaluation.
  - Deliverable: Tokenisation, BPE, special tokens and multilingual budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A tokenizer comparison and truncation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tokenisation, BPE, special tokens and multilingual budgets: Tokenisation, BPE, special tokens and multilingual budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Preserve required instructions and label byte estimates as estimates, not exact token counts.
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### KV cache memory simulator

A serving learner needs to understand cache growth and eviction.

**Data:** Generate request lengths and toy key/value tensors. Use a fixed seed and keep evaluation cases separate.

**Output:** A cache size calculator and equivalent cached/uncached toy attention outputs.

**Effort:** 10h · Beginner → intermediate

- **Tokenisation, BPE, special tokens and multilingual budgets:** Extend the project with Tokenisation, BPE, special tokens and multilingual budgets in KV cache memory simulator. Adapt this focused lab to the project data: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.  Required concepts: Bytes, code points and tokens, Byte-pair merges, Special-token contracts, Truncation and padding, Multilingual budget evaluation.
  - Deliverable: Tokenisation, BPE, special tokens and multilingual budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cache size calculator and equivalent cached/uncached toy attention outputs. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tokenisation, BPE, special tokens and multilingual budgets: Tokenisation, BPE, special tokens and multilingual budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match outputs and document memory assumptions, batch sizes and dtypes.
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Context assembly laboratory

A developer needs relevant context within a fixed budget.

**Data:** Use ten Markdown notes with IDs, priorities and contradictory statements. Use a fixed seed and keep evaluation cases separate.

**Output:** A context packer with source traceability.

**Effort:** 10h · Beginner → intermediate

- **Tokenisation, BPE, special tokens and multilingual budgets:** Extend the project with Tokenisation, BPE, special tokens and multilingual budgets in Context assembly laboratory. Adapt this focused lab to the project data: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.  Required concepts: Bytes, code points and tokens, Byte-pair merges, Special-token contracts, Truncation and padding, Multilingual budget evaluation.
  - Deliverable: Tokenisation, BPE, special tokens and multilingual budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A context packer with source traceability. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tokenisation, BPE, special tokens and multilingual budgets: Tokenisation, BPE, special tokens and multilingual budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Always retain required constraints and explain every dropped passage.
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Low-rank adaptation microscope

A learner needs to see what LoRA changes in a frozen model.

**Data:** Generate input/target matrices for a small frozen linear layer. Use a fixed seed and keep evaluation cases separate.

**Output:** A low-rank adapter training experiment and parameter count report.

**Effort:** 10h · Beginner → intermediate

- **Tokenisation, BPE, special tokens and multilingual budgets:** Extend the project with Tokenisation, BPE, special tokens and multilingual budgets in Low-rank adaptation microscope. Adapt this focused lab to the project data: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.  Required concepts: Bytes, code points and tokens, Byte-pair merges, Special-token contracts, Truncation and padding, Multilingual budget evaluation.
  - Deliverable: Tokenisation, BPE, special tokens and multilingual budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A low-rank adapter training experiment and parameter count report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tokenisation, BPE, special tokens and multilingual budgets: Tokenisation, BPE, special tokens and multilingual budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Only adapters receive gradients; compare rank settings under the same budget.
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local model selection scorecard

A developer needs a defensible model choice under laptop constraints.

**Data:** Use 20 local evaluation prompts; recorded outputs are the offline fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A quality, memory and latency scorecard with provenance per run.

**Effort:** 10h · Beginner → intermediate

- **Tokenisation, BPE, special tokens and multilingual budgets:** Extend the project with Tokenisation, BPE, special tokens and multilingual budgets in Local model selection scorecard. Adapt this focused lab to the project data: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.  Required concepts: Bytes, code points and tokens, Byte-pair merges, Special-token contracts, Truncation and padding, Multilingual budget evaluation.
  - Deliverable: Tokenisation, BPE, special tokens and multilingual budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A quality, memory and latency scorecard with provenance per run. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tokenisation, BPE, special tokens and multilingual budgets: Tokenisation, BPE, special tokens and multilingual budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Separate measured local runs from fixtures and state untested capabilities.
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Prompt regression workbench

A support writer needs repeatable checks before changing instructions.

**Data:** Author 30 requests with expected structured responses and recorded fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A prompt version comparison harness.

**Effort:** 10h · Beginner → intermediate

- **Tokenisation, BPE, special tokens and multilingual budgets:** Extend the project with Tokenisation, BPE, special tokens and multilingual budgets in Prompt regression workbench. Adapt this focused lab to the project data: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.  Required concepts: Bytes, code points and tokens, Byte-pair merges, Special-token contracts, Truncation and padding, Multilingual budget evaluation.
  - Deliverable: Tokenisation, BPE, special tokens and multilingual budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A prompt version comparison harness. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tokenisation, BPE, special tokens and multilingual budgets: Tokenisation, BPE, special tokens and multilingual budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect malformed JSON, unsupported claims and changed required fields.
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Quantization error explorer

A learner needs to measure compression tradeoffs before choosing a format.

**Data:** Use generated linear-layer weights and calibration vectors. Use a fixed seed and keep evaluation cases separate.

**Output:** An int8 quantize/dequantize notebook with size and output-error plots.

**Effort:** 10h · Beginner → intermediate

- **Tokenisation, BPE, special tokens and multilingual budgets:** Extend the project with Tokenisation, BPE, special tokens and multilingual budgets in Quantization error explorer. Adapt this focused lab to the project data: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.  Required concepts: Bytes, code points and tokens, Byte-pair merges, Special-token contracts, Truncation and padding, Multilingual budget evaluation.
  - Deliverable: Tokenisation, BPE, special tokens and multilingual budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An int8 quantize/dequantize notebook with size and output-error plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tokenisation, BPE, special tokens and multilingual budgets: Tokenisation, BPE, special tokens and multilingual budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare per-tensor and per-channel scales and test outlier sensitivity.
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Streaming response assembler

An interface builder needs correct partial structured-response handling.

**Data:** Create fixtures of chunked JSON and text with disconnects. Use a fixed seed and keep evaluation cases separate.

**Output:** A stream assembler and cancellation demo.

**Effort:** 10h · Beginner → intermediate

- **Tokenisation, BPE, special tokens and multilingual budgets:** Extend the project with Tokenisation, BPE, special tokens and multilingual budgets in Streaming response assembler. Adapt this focused lab to the project data: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.  Required concepts: Bytes, code points and tokens, Byte-pair merges, Special-token contracts, Truncation and padding, Multilingual budget evaluation.
  - Deliverable: Tokenisation, BPE, special tokens and multilingual budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A stream assembler and cancellation demo. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tokenisation, BPE, special tokens and multilingual budgets: Tokenisation, BPE, special tokens and multilingual budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Never parse incomplete JSON as final; recover cleanly from a dropped stream.
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Decoding distribution explorer

A learner needs to understand temperature, top-k and top-p.

**Data:** Use fixed vocabulary logits and seeded sampling on CPU. Use a fixed seed and keep evaluation cases separate.

**Output:** A probability visualizer and sampling experiment.

**Effort:** 10h · Beginner → intermediate

- **Tokenisation, BPE, special tokens and multilingual budgets:** Extend the project with Tokenisation, BPE, special tokens and multilingual budgets in Decoding distribution explorer. Adapt this focused lab to the project data: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.  Required concepts: Bytes, code points and tokens, Byte-pair merges, Special-token contracts, Truncation and padding, Multilingual budget evaluation.
  - Deliverable: Tokenisation, BPE, special tokens and multilingual budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A probability visualizer and sampling experiment. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tokenisation, BPE, special tokens and multilingual budgets: Tokenisation, BPE, special tokens and multilingual budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify normalization, deterministic seed behavior and nucleus boundaries.
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Structured tool-call validator

An app builder needs safe interpretation of proposed tool arguments.

**Data:** Write 25 valid and invalid recorded tool-call responses. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema validator and read-only dispatch simulator.

**Effort:** 10h · Beginner → intermediate

- **Tokenisation, BPE, special tokens and multilingual budgets:** Extend the project with Tokenisation, BPE, special tokens and multilingual budgets in Structured tool-call validator. Adapt this focused lab to the project data: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.  Required concepts: Bytes, code points and tokens, Byte-pair merges, Special-token contracts, Truncation and padding, Multilingual budget evaluation.
  - Deliverable: Tokenisation, BPE, special tokens and multilingual budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema validator and read-only dispatch simulator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tokenisation, BPE, special tokens and multilingual budgets: Tokenisation, BPE, special tokens and multilingual budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject unknown tools, extra dangerous fields and invalid argument types.
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Training choices and alignment

<a id="llm-lora-objectives"></a>

### SFT datasets, LoRA, preference tuning and evaluation boundaries

Choose adaptation only when it addresses a measured failure and understand what is actually being trained.

**Priority:** Specialization · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [Fine-tuning, LoRA/QLoRA and quantization](llm.md#llm-finetuning) Navigation is unrestricted.

#### Concepts

- [ ] **Supervised fine-tuning targets:** SFT learns from example completions under an explicit formatting and label-masking contract; poor examples can teach undesirable patterns.
  - Example: Construct ten synthetic instruction/answer pairs and mark which tokens contribute to the training objective.
  - Videos:
    - [MIT 6.S191 (2025) — Introduction to LLM Post-Training](https://www.youtube.com/watch?v=_HfdncCbMOE) · MIT · Maxime Labonne · University guest lecture
      - Explains: Adaptation data, supervised tuning and preference-based post-training.
      - Useful because: Compare adaptation choices against a held-out task evaluation before proposing a training run.
      - Watch for: Focus on supervised fine-tuning targets. Then reproduce the lesson example: Construct ten synthetic instruction/answer pairs and mark which tokens contribute to the training objective.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://introtodeeplearning.com/2025/index.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on supervised fine-tuning targets. Then reproduce the lesson example: Construct ten synthetic instruction/answer pairs and mark which tokens contribute to the training objective.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Low-rank adapters:** LoRA represents a weight update using a product of smaller matrices while the chosen base weights remain frozen.
  - Example: For a 16x16 toy weight, compare a rank-two adapter parameter count with a full update.
  - Videos:
    - [MIT 6.S191 (2025) — Introduction to LLM Post-Training](https://www.youtube.com/watch?v=_HfdncCbMOE) · MIT · Maxime Labonne · University guest lecture
      - Explains: Adaptation data, supervised tuning and preference-based post-training.
      - Useful because: Compare adaptation choices against a held-out task evaluation before proposing a training run.
      - Watch for: Focus on low-rank adapters. Then reproduce the lesson example: For a 16x16 toy weight, compare a rank-two adapter parameter count with a full update.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://introtodeeplearning.com/2025/index.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on low-rank adapters. Then reproduce the lesson example: For a 16x16 toy weight, compare a rank-two adapter parameter count with a full update.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Adapter configuration:** Target modules, rank, scaling and dropout change what can be adapted and must be recorded with the base-model version.
  - Example: Save a configuration specifying which toy linear layers have trainable adapters.
  - Videos:
    - [MIT 6.S191 (2025) — Introduction to LLM Post-Training](https://www.youtube.com/watch?v=_HfdncCbMOE) · MIT · Maxime Labonne · University guest lecture
      - Explains: Adaptation data, supervised tuning and preference-based post-training.
      - Useful because: Compare adaptation choices against a held-out task evaluation before proposing a training run.
      - Watch for: Focus on adapter configuration. Then reproduce the lesson example: Save a configuration specifying which toy linear layers have trainable adapters.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://introtodeeplearning.com/2025/index.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on adapter configuration. Then reproduce the lesson example: Save a configuration specifying which toy linear layers have trainable adapters.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Preference optimisation:** Preference methods train from comparative feedback under a specific objective and do not remove the need for task evaluation.
  - Example: Create chosen/rejected synthetic response pairs and identify pairs with ambiguous or inconsistent preferences.
  - Videos:
    - [MIT 6.S191 (2025) — Introduction to LLM Post-Training](https://www.youtube.com/watch?v=_HfdncCbMOE) · MIT · Maxime Labonne · University guest lecture
      - Explains: Adaptation data, supervised tuning and preference-based post-training.
      - Useful because: Compare adaptation choices against a held-out task evaluation before proposing a training run.
      - Watch for: Focus on preference optimisation. Then reproduce the lesson example: Create chosen/rejected synthetic response pairs and identify pairs with ambiguous or inconsistent preferences.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://introtodeeplearning.com/2025/index.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on preference optimisation. Then reproduce the lesson example: Create chosen/rejected synthetic response pairs and identify pairs with ambiguous or inconsistent preferences.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Contamination and regression:** Adaptation data must be separated from evaluation examples; measure regressions in general behaviour as well as target-task improvement.
  - Example: Hash and deduplicate a toy training set against a held-out evaluation set before computing metrics.
  - Videos:
    - [MIT 6.S191 (2025) — Introduction to LLM Post-Training](https://www.youtube.com/watch?v=_HfdncCbMOE) · MIT · Maxime Labonne · University guest lecture
      - Explains: Adaptation data, supervised tuning and preference-based post-training.
      - Useful because: Compare adaptation choices against a held-out task evaluation before proposing a training run.
      - Watch for: Focus on contamination and regression. Then reproduce the lesson example: Hash and deduplicate a toy training set against a held-out evaluation set before computing metrics.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://introtodeeplearning.com/2025/index.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on contamination and regression. Then reproduce the lesson example: Hash and deduplicate a toy training set against a held-out evaluation set before computing metrics.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### YouTube: focused explanations and full courses

- [MIT 6.S191 (2025) — Introduction to LLM Post-Training](https://www.youtube.com/watch?v=_HfdncCbMOE) · MIT · Maxime Labonne · University guest lecture
  - Explains: Adaptation data, supervised tuning and preference-based post-training.
  - Useful because: Compare adaptation choices against a held-out task evaluation before proposing a training run.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://introtodeeplearning.com/2025/index.html
- [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
  - Explains: A PyTorch language-model pipeline and the stages of language-model development.
  - Useful because: Connect model internals to application decisions; large training runs are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### Free written resources

1. [Hugging Face PEFT: LoRA](https://huggingface.co/docs/peft/conceptual_guides/lora) — Free; no registration required. No paid materials required.
2. [Hugging Face TRL: supervised fine-tuning](https://huggingface.co/docs/trl/sft_trainer) — Free; no registration required. No paid materials required.

#### Lab: SFT datasets, LoRA, preference tuning and evaluation boundaries

Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Low-rank adaptation microscope

A learner needs to see what LoRA changes in a frozen model.

**Data:** Generate input/target matrices for a small frozen linear layer. Use a fixed seed and keep evaluation cases separate.

**Output:** A low-rank adapter training experiment and parameter count report.

**Effort:** 10h · Beginner → intermediate

- **SFT datasets, LoRA, preference tuning and evaluation boundaries:** Implement SFT datasets, LoRA, preference tuning and evaluation boundaries in Low-rank adaptation microscope. Adapt this focused lab to the project data: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.  Required concepts: Supervised fine-tuning targets, Low-rank adapters, Adapter configuration, Preference optimisation, Contamination and regression.
  - Deliverable: SFT datasets, LoRA, preference tuning and evaluation boundaries: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A low-rank adapter training experiment and parameter count report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SFT datasets, LoRA, preference tuning and evaluation boundaries: SFT datasets, LoRA, preference tuning and evaluation boundaries: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Only adapters receive gradients; compare rank settings under the same budget.
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### KV cache memory simulator

A serving learner needs to understand cache growth and eviction.

**Data:** Generate request lengths and toy key/value tensors. Use a fixed seed and keep evaluation cases separate.

**Output:** A cache size calculator and equivalent cached/uncached toy attention outputs.

**Effort:** 10h · Beginner → intermediate

- **SFT datasets, LoRA, preference tuning and evaluation boundaries:** Extend the project with SFT datasets, LoRA, preference tuning and evaluation boundaries in KV cache memory simulator. Adapt this focused lab to the project data: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.  Required concepts: Supervised fine-tuning targets, Low-rank adapters, Adapter configuration, Preference optimisation, Contamination and regression.
  - Deliverable: SFT datasets, LoRA, preference tuning and evaluation boundaries: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cache size calculator and equivalent cached/uncached toy attention outputs. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SFT datasets, LoRA, preference tuning and evaluation boundaries: SFT datasets, LoRA, preference tuning and evaluation boundaries: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match outputs and document memory assumptions, batch sizes and dtypes.
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Context assembly laboratory

A developer needs relevant context within a fixed budget.

**Data:** Use ten Markdown notes with IDs, priorities and contradictory statements. Use a fixed seed and keep evaluation cases separate.

**Output:** A context packer with source traceability.

**Effort:** 10h · Beginner → intermediate

- **SFT datasets, LoRA, preference tuning and evaluation boundaries:** Extend the project with SFT datasets, LoRA, preference tuning and evaluation boundaries in Context assembly laboratory. Adapt this focused lab to the project data: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.  Required concepts: Supervised fine-tuning targets, Low-rank adapters, Adapter configuration, Preference optimisation, Contamination and regression.
  - Deliverable: SFT datasets, LoRA, preference tuning and evaluation boundaries: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A context packer with source traceability. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SFT datasets, LoRA, preference tuning and evaluation boundaries: SFT datasets, LoRA, preference tuning and evaluation boundaries: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Always retain required constraints and explain every dropped passage.
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local model selection scorecard

A developer needs a defensible model choice under laptop constraints.

**Data:** Use 20 local evaluation prompts; recorded outputs are the offline fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A quality, memory and latency scorecard with provenance per run.

**Effort:** 10h · Beginner → intermediate

- **SFT datasets, LoRA, preference tuning and evaluation boundaries:** Extend the project with SFT datasets, LoRA, preference tuning and evaluation boundaries in Local model selection scorecard. Adapt this focused lab to the project data: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.  Required concepts: Supervised fine-tuning targets, Low-rank adapters, Adapter configuration, Preference optimisation, Contamination and regression.
  - Deliverable: SFT datasets, LoRA, preference tuning and evaluation boundaries: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A quality, memory and latency scorecard with provenance per run. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SFT datasets, LoRA, preference tuning and evaluation boundaries: SFT datasets, LoRA, preference tuning and evaluation boundaries: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Separate measured local runs from fixtures and state untested capabilities.
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Prompt regression workbench

A support writer needs repeatable checks before changing instructions.

**Data:** Author 30 requests with expected structured responses and recorded fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A prompt version comparison harness.

**Effort:** 10h · Beginner → intermediate

- **SFT datasets, LoRA, preference tuning and evaluation boundaries:** Extend the project with SFT datasets, LoRA, preference tuning and evaluation boundaries in Prompt regression workbench. Adapt this focused lab to the project data: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.  Required concepts: Supervised fine-tuning targets, Low-rank adapters, Adapter configuration, Preference optimisation, Contamination and regression.
  - Deliverable: SFT datasets, LoRA, preference tuning and evaluation boundaries: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A prompt version comparison harness. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SFT datasets, LoRA, preference tuning and evaluation boundaries: SFT datasets, LoRA, preference tuning and evaluation boundaries: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect malformed JSON, unsupported claims and changed required fields.
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Quantization error explorer

A learner needs to measure compression tradeoffs before choosing a format.

**Data:** Use generated linear-layer weights and calibration vectors. Use a fixed seed and keep evaluation cases separate.

**Output:** An int8 quantize/dequantize notebook with size and output-error plots.

**Effort:** 10h · Beginner → intermediate

- **SFT datasets, LoRA, preference tuning and evaluation boundaries:** Extend the project with SFT datasets, LoRA, preference tuning and evaluation boundaries in Quantization error explorer. Adapt this focused lab to the project data: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.  Required concepts: Supervised fine-tuning targets, Low-rank adapters, Adapter configuration, Preference optimisation, Contamination and regression.
  - Deliverable: SFT datasets, LoRA, preference tuning and evaluation boundaries: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An int8 quantize/dequantize notebook with size and output-error plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SFT datasets, LoRA, preference tuning and evaluation boundaries: SFT datasets, LoRA, preference tuning and evaluation boundaries: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare per-tensor and per-channel scales and test outlier sensitivity.
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Streaming response assembler

An interface builder needs correct partial structured-response handling.

**Data:** Create fixtures of chunked JSON and text with disconnects. Use a fixed seed and keep evaluation cases separate.

**Output:** A stream assembler and cancellation demo.

**Effort:** 10h · Beginner → intermediate

- **SFT datasets, LoRA, preference tuning and evaluation boundaries:** Extend the project with SFT datasets, LoRA, preference tuning and evaluation boundaries in Streaming response assembler. Adapt this focused lab to the project data: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.  Required concepts: Supervised fine-tuning targets, Low-rank adapters, Adapter configuration, Preference optimisation, Contamination and regression.
  - Deliverable: SFT datasets, LoRA, preference tuning and evaluation boundaries: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A stream assembler and cancellation demo. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SFT datasets, LoRA, preference tuning and evaluation boundaries: SFT datasets, LoRA, preference tuning and evaluation boundaries: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Never parse incomplete JSON as final; recover cleanly from a dropped stream.
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Decoding distribution explorer

A learner needs to understand temperature, top-k and top-p.

**Data:** Use fixed vocabulary logits and seeded sampling on CPU. Use a fixed seed and keep evaluation cases separate.

**Output:** A probability visualizer and sampling experiment.

**Effort:** 10h · Beginner → intermediate

- **SFT datasets, LoRA, preference tuning and evaluation boundaries:** Extend the project with SFT datasets, LoRA, preference tuning and evaluation boundaries in Decoding distribution explorer. Adapt this focused lab to the project data: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.  Required concepts: Supervised fine-tuning targets, Low-rank adapters, Adapter configuration, Preference optimisation, Contamination and regression.
  - Deliverable: SFT datasets, LoRA, preference tuning and evaluation boundaries: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A probability visualizer and sampling experiment. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SFT datasets, LoRA, preference tuning and evaluation boundaries: SFT datasets, LoRA, preference tuning and evaluation boundaries: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify normalization, deterministic seed behavior and nucleus boundaries.
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Token budget planner

An app builder needs to estimate what fits in a context window.

**Data:** Use 20 local multilingual prompts and a downloadable small tokenizer or documented byte fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A tokenizer comparison and truncation report.

**Effort:** 10h · Beginner → intermediate

- **SFT datasets, LoRA, preference tuning and evaluation boundaries:** Extend the project with SFT datasets, LoRA, preference tuning and evaluation boundaries in Token budget planner. Adapt this focused lab to the project data: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.  Required concepts: Supervised fine-tuning targets, Low-rank adapters, Adapter configuration, Preference optimisation, Contamination and regression.
  - Deliverable: SFT datasets, LoRA, preference tuning and evaluation boundaries: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A tokenizer comparison and truncation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SFT datasets, LoRA, preference tuning and evaluation boundaries: SFT datasets, LoRA, preference tuning and evaluation boundaries: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Preserve required instructions and label byte estimates as estimates, not exact token counts.
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Structured tool-call validator

An app builder needs safe interpretation of proposed tool arguments.

**Data:** Write 25 valid and invalid recorded tool-call responses. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema validator and read-only dispatch simulator.

**Effort:** 10h · Beginner → intermediate

- **SFT datasets, LoRA, preference tuning and evaluation boundaries:** Extend the project with SFT datasets, LoRA, preference tuning and evaluation boundaries in Structured tool-call validator. Adapt this focused lab to the project data: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.  Required concepts: Supervised fine-tuning targets, Low-rank adapters, Adapter configuration, Preference optimisation, Contamination and regression.
  - Deliverable: SFT datasets, LoRA, preference tuning and evaluation boundaries: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema validator and read-only dispatch simulator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SFT datasets, LoRA, preference tuning and evaluation boundaries: SFT datasets, LoRA, preference tuning and evaluation boundaries: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject unknown tools, extra dangerous fields and invalid argument types.
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Model cards, licences and reproducible model selection

<a id="llm-model-provenance"></a>

### Model cards, licences and reproducible model selection

Model cards, licences and reproducible model selection helps you make explainable engineering decisions and test failure cases. Build the experiment below before relying on the concept in an AI system.

**Priority:** Essential · **Study:** 4h · **Practice:** 5h

**Prerequisites:** [Model selection, open models and local serving](llm.md#llm-model-selection) Navigation is unrestricted.

#### Concepts

- [ ] **Model identity:** A model name alone does not identify the exact weights, tokenizer or revision used.
  - Example: Record repository, revision and tokenizer revision in a local manifest.
  - Videos:
    - [Local AI development with Ollama](https://www.youtube.com/watch?v=GWB9ApTPTv4) · freeCodeCamp · Tool course
      - Explains: Local model serving and integrating local inference with applications.
      - Useful because: Useful for a free local model path when your machine meets hardware requirements.
      - Watch for: Focus on model identity. Then reproduce the lesson example: Record repository, revision and tokenizer revision in a local manifest.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/local-ai-development-with-ollama-course/
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on model identity. Then reproduce the lesson example: Record repository, revision and tokenizer revision in a local manifest.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Model cards:** A card describes intended use, training information and known limits but does not replace your own evaluation.
  - Example: Extract supported tasks and limitations into a comparison table.
  - Videos:
    - [Local AI development with Ollama](https://www.youtube.com/watch?v=GWB9ApTPTv4) · freeCodeCamp · Tool course
      - Explains: Local model serving and integrating local inference with applications.
      - Useful because: Useful for a free local model path when your machine meets hardware requirements.
      - Watch for: Focus on model cards. Then reproduce the lesson example: Extract supported tasks and limitations into a comparison table.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/local-ai-development-with-ollama-course/
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on model cards. Then reproduce the lesson example: Extract supported tasks and limitations into a comparison table.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Licence review:** Weight, code and dataset licences may impose different conditions and should be recorded separately.
  - Example: List each relevant licence link without assuming open weights means unrestricted use.
  - Videos:
    - [Local AI development with Ollama](https://www.youtube.com/watch?v=GWB9ApTPTv4) · freeCodeCamp · Tool course
      - Explains: Local model serving and integrating local inference with applications.
      - Useful because: Useful for a free local model path when your machine meets hardware requirements.
      - Watch for: Focus on licence review. Then reproduce the lesson example: List each relevant licence link without assuming open weights means unrestricted use.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/local-ai-development-with-ollama-course/
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on licence review. Then reproduce the lesson example: List each relevant licence link without assuming open weights means unrestricted use.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Trusted loading:** Model packages can contain executable code or unsafe serialization formats.
  - Example: Prefer supported tensor formats and inspect any request to execute remote code.
  - Videos:
    - [Local AI development with Ollama](https://www.youtube.com/watch?v=GWB9ApTPTv4) · freeCodeCamp · Tool course
      - Explains: Local model serving and integrating local inference with applications.
      - Useful because: Useful for a free local model path when your machine meets hardware requirements.
      - Watch for: Focus on trusted loading. Then reproduce the lesson example: Prefer supported tensor formats and inspect any request to execute remote code.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/local-ai-development-with-ollama-course/
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on trusted loading. Then reproduce the lesson example: Prefer supported tensor formats and inspect any request to execute remote code.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Selection evidence:** Quality, latency, memory and deployment constraints jointly determine suitability.
  - Example: Compare two models on the same 20 tasks and hardware or explicitly mark an unmeasured cell.
  - Videos:
    - [Local AI development with Ollama](https://www.youtube.com/watch?v=GWB9ApTPTv4) · freeCodeCamp · Tool course
      - Explains: Local model serving and integrating local inference with applications.
      - Useful because: Useful for a free local model path when your machine meets hardware requirements.
      - Watch for: Focus on selection evidence. Then reproduce the lesson example: Compare two models on the same 20 tasks and hardware or explicitly mark an unmeasured cell.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/local-ai-development-with-ollama-course/
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on selection evidence. Then reproduce the lesson example: Compare two models on the same 20 tasks and hardware or explicitly mark an unmeasured cell.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### YouTube: focused explanations and full courses

- [Local AI development with Ollama](https://www.youtube.com/watch?v=GWB9ApTPTv4) · freeCodeCamp · Tool course
  - Explains: Local model serving and integrating local inference with applications.
  - Useful because: Useful for a free local model path when your machine meets hardware requirements.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/local-ai-development-with-ollama-course/
- [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
  - Explains: A PyTorch language-model pipeline and the stages of language-model development.
  - Useful because: Connect model internals to application decisions; large training runs are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### Free written resources

1. [Official reference: Model cards, licences and reproducible model selection](https://huggingface.co/docs/hub/model-cards) — Free reading; no registration required. Use the local CPU exercise; optional hosted services and downloads are not required..
2. [Hugging Face: using transformers](https://huggingface.co/learn/llm-course/chapter2/1) — Free reading; Hugging Face account optional for sharing models. No paid materials required.

#### Lab: Model cards, licences and reproducible model selection

Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.

**Deliverables**

- Runnable CPU notebook or script with deterministic fixtures
- Measured outputs, failure cases and a README explaining decisions

**Completion checks**

- [ ] Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.
- [ ] Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

#### Ten project recommendations

### KV cache memory simulator

A serving learner needs to understand cache growth and eviction.

**Data:** Generate request lengths and toy key/value tensors. Use a fixed seed and keep evaluation cases separate.

**Output:** A cache size calculator and equivalent cached/uncached toy attention outputs.

**Effort:** 10h · Beginner → intermediate

- **Model cards, licences and reproducible model selection:** Extend the project with Model cards, licences and reproducible model selection in KV cache memory simulator. Adapt this focused lab to the project data: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.  Required concepts: Model identity, Model cards, Licence review, Trusted loading, Selection evidence.
  - Deliverable: Model cards, licences and reproducible model selection: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cache size calculator and equivalent cached/uncached toy attention outputs. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model cards, licences and reproducible model selection: Model cards, licences and reproducible model selection: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match outputs and document memory assumptions, batch sizes and dtypes.
- [ ] Model cards, licences and reproducible model selection: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Context assembly laboratory

A developer needs relevant context within a fixed budget.

**Data:** Use ten Markdown notes with IDs, priorities and contradictory statements. Use a fixed seed and keep evaluation cases separate.

**Output:** A context packer with source traceability.

**Effort:** 10h · Beginner → intermediate

- **Model cards, licences and reproducible model selection:** Extend the project with Model cards, licences and reproducible model selection in Context assembly laboratory. Adapt this focused lab to the project data: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.  Required concepts: Model identity, Model cards, Licence review, Trusted loading, Selection evidence.
  - Deliverable: Model cards, licences and reproducible model selection: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A context packer with source traceability. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model cards, licences and reproducible model selection: Model cards, licences and reproducible model selection: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Always retain required constraints and explain every dropped passage.
- [ ] Model cards, licences and reproducible model selection: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Low-rank adaptation microscope

A learner needs to see what LoRA changes in a frozen model.

**Data:** Generate input/target matrices for a small frozen linear layer. Use a fixed seed and keep evaluation cases separate.

**Output:** A low-rank adapter training experiment and parameter count report.

**Effort:** 10h · Beginner → intermediate

- **Model cards, licences and reproducible model selection:** Extend the project with Model cards, licences and reproducible model selection in Low-rank adaptation microscope. Adapt this focused lab to the project data: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.  Required concepts: Model identity, Model cards, Licence review, Trusted loading, Selection evidence.
  - Deliverable: Model cards, licences and reproducible model selection: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A low-rank adapter training experiment and parameter count report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model cards, licences and reproducible model selection: Model cards, licences and reproducible model selection: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Only adapters receive gradients; compare rank settings under the same budget.
- [ ] Model cards, licences and reproducible model selection: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local model selection scorecard

A developer needs a defensible model choice under laptop constraints.

**Data:** Use 20 local evaluation prompts; recorded outputs are the offline fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A quality, memory and latency scorecard with provenance per run.

**Effort:** 10h · Beginner → intermediate

- **Model cards, licences and reproducible model selection:** Extend the project with Model cards, licences and reproducible model selection in Local model selection scorecard. Adapt this focused lab to the project data: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.  Required concepts: Model identity, Model cards, Licence review, Trusted loading, Selection evidence.
  - Deliverable: Model cards, licences and reproducible model selection: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A quality, memory and latency scorecard with provenance per run. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model cards, licences and reproducible model selection: Model cards, licences and reproducible model selection: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Separate measured local runs from fixtures and state untested capabilities.
- [ ] Model cards, licences and reproducible model selection: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Prompt regression workbench

A support writer needs repeatable checks before changing instructions.

**Data:** Author 30 requests with expected structured responses and recorded fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A prompt version comparison harness.

**Effort:** 10h · Beginner → intermediate

- **Model cards, licences and reproducible model selection:** Extend the project with Model cards, licences and reproducible model selection in Prompt regression workbench. Adapt this focused lab to the project data: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.  Required concepts: Model identity, Model cards, Licence review, Trusted loading, Selection evidence.
  - Deliverable: Model cards, licences and reproducible model selection: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A prompt version comparison harness. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model cards, licences and reproducible model selection: Model cards, licences and reproducible model selection: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect malformed JSON, unsupported claims and changed required fields.
- [ ] Model cards, licences and reproducible model selection: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Quantization error explorer

A learner needs to measure compression tradeoffs before choosing a format.

**Data:** Use generated linear-layer weights and calibration vectors. Use a fixed seed and keep evaluation cases separate.

**Output:** An int8 quantize/dequantize notebook with size and output-error plots.

**Effort:** 10h · Beginner → intermediate

- **Model cards, licences and reproducible model selection:** Extend the project with Model cards, licences and reproducible model selection in Quantization error explorer. Adapt this focused lab to the project data: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.  Required concepts: Model identity, Model cards, Licence review, Trusted loading, Selection evidence.
  - Deliverable: Model cards, licences and reproducible model selection: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An int8 quantize/dequantize notebook with size and output-error plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model cards, licences and reproducible model selection: Model cards, licences and reproducible model selection: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare per-tensor and per-channel scales and test outlier sensitivity.
- [ ] Model cards, licences and reproducible model selection: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Streaming response assembler

An interface builder needs correct partial structured-response handling.

**Data:** Create fixtures of chunked JSON and text with disconnects. Use a fixed seed and keep evaluation cases separate.

**Output:** A stream assembler and cancellation demo.

**Effort:** 10h · Beginner → intermediate

- **Model cards, licences and reproducible model selection:** Extend the project with Model cards, licences and reproducible model selection in Streaming response assembler. Adapt this focused lab to the project data: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.  Required concepts: Model identity, Model cards, Licence review, Trusted loading, Selection evidence.
  - Deliverable: Model cards, licences and reproducible model selection: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A stream assembler and cancellation demo. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model cards, licences and reproducible model selection: Model cards, licences and reproducible model selection: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Never parse incomplete JSON as final; recover cleanly from a dropped stream.
- [ ] Model cards, licences and reproducible model selection: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Decoding distribution explorer

A learner needs to understand temperature, top-k and top-p.

**Data:** Use fixed vocabulary logits and seeded sampling on CPU. Use a fixed seed and keep evaluation cases separate.

**Output:** A probability visualizer and sampling experiment.

**Effort:** 10h · Beginner → intermediate

- **Model cards, licences and reproducible model selection:** Extend the project with Model cards, licences and reproducible model selection in Decoding distribution explorer. Adapt this focused lab to the project data: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.  Required concepts: Model identity, Model cards, Licence review, Trusted loading, Selection evidence.
  - Deliverable: Model cards, licences and reproducible model selection: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A probability visualizer and sampling experiment. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model cards, licences and reproducible model selection: Model cards, licences and reproducible model selection: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify normalization, deterministic seed behavior and nucleus boundaries.
- [ ] Model cards, licences and reproducible model selection: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Token budget planner

An app builder needs to estimate what fits in a context window.

**Data:** Use 20 local multilingual prompts and a downloadable small tokenizer or documented byte fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A tokenizer comparison and truncation report.

**Effort:** 10h · Beginner → intermediate

- **Model cards, licences and reproducible model selection:** Extend the project with Model cards, licences and reproducible model selection in Token budget planner. Adapt this focused lab to the project data: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.  Required concepts: Model identity, Model cards, Licence review, Trusted loading, Selection evidence.
  - Deliverable: Model cards, licences and reproducible model selection: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A tokenizer comparison and truncation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model cards, licences and reproducible model selection: Model cards, licences and reproducible model selection: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Preserve required instructions and label byte estimates as estimates, not exact token counts.
- [ ] Model cards, licences and reproducible model selection: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Structured tool-call validator

An app builder needs safe interpretation of proposed tool arguments.

**Data:** Write 25 valid and invalid recorded tool-call responses. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema validator and read-only dispatch simulator.

**Effort:** 10h · Beginner → intermediate

- **Model cards, licences and reproducible model selection:** Extend the project with Model cards, licences and reproducible model selection in Structured tool-call validator. Adapt this focused lab to the project data: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.  Required concepts: Model identity, Model cards, Licence review, Trusted loading, Selection evidence.
  - Deliverable: Model cards, licences and reproducible model selection: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema validator and read-only dispatch simulator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model cards, licences and reproducible model selection: Model cards, licences and reproducible model selection: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject unknown tools, extra dangerous fields and invalid argument types.
- [ ] Model cards, licences and reproducible model selection: Create a scorecard for two openly documented small models. Record model revision, task, licence, tokenizer, memory estimate and evaluation limitations; use recorded outputs only when clearly labeled as fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Structured output, streaming and cancellation contracts

<a id="llm-stream-contracts"></a>

### Structured output, streaming and cancellation contracts

Structured output, streaming and cancellation contracts helps you make explainable engineering decisions and test failure cases. Build the experiment below before relying on the concept in an AI system.

**Priority:** Essential · **Study:** 4h · **Practice:** 5h

**Prerequisites:** [Tool calling, streaming and multimodal AI](llm.md#llm-tools) Navigation is unrestricted.

#### Concepts

- [ ] **Schema enforcement:** Syntactically valid JSON may still violate your application schema.
  - Example: Reject a response with a string price where a numeric field is required.
  - Videos:
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on schema enforcement. Then reproduce the lesson example: Reject a response with a string price where a numeric field is required.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on schema enforcement. Then reproduce the lesson example: Reject a response with a string price where a numeric field is required.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Partial streams:** Chunks may split tokens, Unicode sequences or JSON structures before a complete response exists.
  - Example: Split a JSON string at every position and reconstruct before validating.
  - Videos:
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on partial streams. Then reproduce the lesson example: Split a JSON string at every position and reconstruct before validating.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on partial streams. Then reproduce the lesson example: Split a JSON string at every position and reconstruct before validating.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Cancellation:** A user cancellation must propagate to pending work and prevent stale updates.
  - Example: Cancel a delayed local stream and verify later chunks do not overwrite the UI.
  - Videos:
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on cancellation. Then reproduce the lesson example: Cancel a delayed local stream and verify later chunks do not overwrite the UI.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on cancellation. Then reproduce the lesson example: Cancel a delayed local stream and verify later chunks do not overwrite the UI.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Repair bounds:** Retries or schema-repair calls must have a finite budget and preserve original evidence.
  - Example: Allow one deterministic repair attempt, then surface a validation failure.
  - Videos:
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on repair bounds. Then reproduce the lesson example: Allow one deterministic repair attempt, then surface a validation failure.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on repair bounds. Then reproduce the lesson example: Allow one deterministic repair attempt, then surface a validation failure.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Output trust:** Generated strings remain untrusted when passed into HTML, SQL, shell commands or tools.
  - Example: Render a generated script tag as text and reject a proposed shell operation.
  - Videos:
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on output trust. Then reproduce the lesson example: Render a generated script tag as text and reject a proposed shell operation.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on output trust. Then reproduce the lesson example: Render a generated script tag as text and reject a proposed shell operation.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### YouTube: focused explanations and full courses

- [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
  - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
  - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
  - Explains: A PyTorch language-model pipeline and the stages of language-model development.
  - Useful because: Connect model internals to application decisions; large training runs are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### Free written resources

1. [Official reference: Structured output, streaming and cancellation contracts](https://docs.pydantic.dev/latest/concepts/json/) — Free reading; no registration required. Use the local CPU exercise; optional hosted services and downloads are not required..
2. [Hugging Face: tools](https://huggingface.co/learn/agents-course/unit1/tools) — Free reading; optional account for course activities. No paid materials required.

#### Lab: Structured output, streaming and cancellation contracts

Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.

**Deliverables**

- Runnable CPU notebook or script with deterministic fixtures
- Measured outputs, failure cases and a README explaining decisions

**Completion checks**

- [ ] Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.
- [ ] Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

#### Ten project recommendations

### KV cache memory simulator

A serving learner needs to understand cache growth and eviction.

**Data:** Generate request lengths and toy key/value tensors. Use a fixed seed and keep evaluation cases separate.

**Output:** A cache size calculator and equivalent cached/uncached toy attention outputs.

**Effort:** 10h · Beginner → intermediate

- **Structured output, streaming and cancellation contracts:** Extend the project with Structured output, streaming and cancellation contracts in KV cache memory simulator. Adapt this focused lab to the project data: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.  Required concepts: Schema enforcement, Partial streams, Cancellation, Repair bounds, Output trust.
  - Deliverable: Structured output, streaming and cancellation contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cache size calculator and equivalent cached/uncached toy attention outputs. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Structured output, streaming and cancellation contracts: Structured output, streaming and cancellation contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match outputs and document memory assumptions, batch sizes and dtypes.
- [ ] Structured output, streaming and cancellation contracts: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Context assembly laboratory

A developer needs relevant context within a fixed budget.

**Data:** Use ten Markdown notes with IDs, priorities and contradictory statements. Use a fixed seed and keep evaluation cases separate.

**Output:** A context packer with source traceability.

**Effort:** 10h · Beginner → intermediate

- **Structured output, streaming and cancellation contracts:** Extend the project with Structured output, streaming and cancellation contracts in Context assembly laboratory. Adapt this focused lab to the project data: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.  Required concepts: Schema enforcement, Partial streams, Cancellation, Repair bounds, Output trust.
  - Deliverable: Structured output, streaming and cancellation contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A context packer with source traceability. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Structured output, streaming and cancellation contracts: Structured output, streaming and cancellation contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Always retain required constraints and explain every dropped passage.
- [ ] Structured output, streaming and cancellation contracts: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Low-rank adaptation microscope

A learner needs to see what LoRA changes in a frozen model.

**Data:** Generate input/target matrices for a small frozen linear layer. Use a fixed seed and keep evaluation cases separate.

**Output:** A low-rank adapter training experiment and parameter count report.

**Effort:** 10h · Beginner → intermediate

- **Structured output, streaming and cancellation contracts:** Extend the project with Structured output, streaming and cancellation contracts in Low-rank adaptation microscope. Adapt this focused lab to the project data: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.  Required concepts: Schema enforcement, Partial streams, Cancellation, Repair bounds, Output trust.
  - Deliverable: Structured output, streaming and cancellation contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A low-rank adapter training experiment and parameter count report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Structured output, streaming and cancellation contracts: Structured output, streaming and cancellation contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Only adapters receive gradients; compare rank settings under the same budget.
- [ ] Structured output, streaming and cancellation contracts: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local model selection scorecard

A developer needs a defensible model choice under laptop constraints.

**Data:** Use 20 local evaluation prompts; recorded outputs are the offline fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A quality, memory and latency scorecard with provenance per run.

**Effort:** 10h · Beginner → intermediate

- **Structured output, streaming and cancellation contracts:** Extend the project with Structured output, streaming and cancellation contracts in Local model selection scorecard. Adapt this focused lab to the project data: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.  Required concepts: Schema enforcement, Partial streams, Cancellation, Repair bounds, Output trust.
  - Deliverable: Structured output, streaming and cancellation contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A quality, memory and latency scorecard with provenance per run. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Structured output, streaming and cancellation contracts: Structured output, streaming and cancellation contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Separate measured local runs from fixtures and state untested capabilities.
- [ ] Structured output, streaming and cancellation contracts: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Prompt regression workbench

A support writer needs repeatable checks before changing instructions.

**Data:** Author 30 requests with expected structured responses and recorded fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A prompt version comparison harness.

**Effort:** 10h · Beginner → intermediate

- **Structured output, streaming and cancellation contracts:** Extend the project with Structured output, streaming and cancellation contracts in Prompt regression workbench. Adapt this focused lab to the project data: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.  Required concepts: Schema enforcement, Partial streams, Cancellation, Repair bounds, Output trust.
  - Deliverable: Structured output, streaming and cancellation contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A prompt version comparison harness. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Structured output, streaming and cancellation contracts: Structured output, streaming and cancellation contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect malformed JSON, unsupported claims and changed required fields.
- [ ] Structured output, streaming and cancellation contracts: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Quantization error explorer

A learner needs to measure compression tradeoffs before choosing a format.

**Data:** Use generated linear-layer weights and calibration vectors. Use a fixed seed and keep evaluation cases separate.

**Output:** An int8 quantize/dequantize notebook with size and output-error plots.

**Effort:** 10h · Beginner → intermediate

- **Structured output, streaming and cancellation contracts:** Extend the project with Structured output, streaming and cancellation contracts in Quantization error explorer. Adapt this focused lab to the project data: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.  Required concepts: Schema enforcement, Partial streams, Cancellation, Repair bounds, Output trust.
  - Deliverable: Structured output, streaming and cancellation contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An int8 quantize/dequantize notebook with size and output-error plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Structured output, streaming and cancellation contracts: Structured output, streaming and cancellation contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare per-tensor and per-channel scales and test outlier sensitivity.
- [ ] Structured output, streaming and cancellation contracts: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Streaming response assembler

An interface builder needs correct partial structured-response handling.

**Data:** Create fixtures of chunked JSON and text with disconnects. Use a fixed seed and keep evaluation cases separate.

**Output:** A stream assembler and cancellation demo.

**Effort:** 10h · Beginner → intermediate

- **Structured output, streaming and cancellation contracts:** Extend the project with Structured output, streaming and cancellation contracts in Streaming response assembler. Adapt this focused lab to the project data: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.  Required concepts: Schema enforcement, Partial streams, Cancellation, Repair bounds, Output trust.
  - Deliverable: Structured output, streaming and cancellation contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A stream assembler and cancellation demo. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Structured output, streaming and cancellation contracts: Structured output, streaming and cancellation contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Never parse incomplete JSON as final; recover cleanly from a dropped stream.
- [ ] Structured output, streaming and cancellation contracts: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Decoding distribution explorer

A learner needs to understand temperature, top-k and top-p.

**Data:** Use fixed vocabulary logits and seeded sampling on CPU. Use a fixed seed and keep evaluation cases separate.

**Output:** A probability visualizer and sampling experiment.

**Effort:** 10h · Beginner → intermediate

- **Structured output, streaming and cancellation contracts:** Extend the project with Structured output, streaming and cancellation contracts in Decoding distribution explorer. Adapt this focused lab to the project data: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.  Required concepts: Schema enforcement, Partial streams, Cancellation, Repair bounds, Output trust.
  - Deliverable: Structured output, streaming and cancellation contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A probability visualizer and sampling experiment. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Structured output, streaming and cancellation contracts: Structured output, streaming and cancellation contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify normalization, deterministic seed behavior and nucleus boundaries.
- [ ] Structured output, streaming and cancellation contracts: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Token budget planner

An app builder needs to estimate what fits in a context window.

**Data:** Use 20 local multilingual prompts and a downloadable small tokenizer or documented byte fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A tokenizer comparison and truncation report.

**Effort:** 10h · Beginner → intermediate

- **Structured output, streaming and cancellation contracts:** Extend the project with Structured output, streaming and cancellation contracts in Token budget planner. Adapt this focused lab to the project data: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.  Required concepts: Schema enforcement, Partial streams, Cancellation, Repair bounds, Output trust.
  - Deliverable: Structured output, streaming and cancellation contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A tokenizer comparison and truncation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Structured output, streaming and cancellation contracts: Structured output, streaming and cancellation contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Preserve required instructions and label byte estimates as estimates, not exact token counts.
- [ ] Structured output, streaming and cancellation contracts: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Structured tool-call validator

An app builder needs safe interpretation of proposed tool arguments.

**Data:** Write 25 valid and invalid recorded tool-call responses. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema validator and read-only dispatch simulator.

**Effort:** 10h · Beginner → intermediate

- **Structured output, streaming and cancellation contracts:** Extend the project with Structured output, streaming and cancellation contracts in Structured tool-call validator. Adapt this focused lab to the project data: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.  Required concepts: Schema enforcement, Partial streams, Cancellation, Repair bounds, Output trust.
  - Deliverable: Structured output, streaming and cancellation contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema validator and read-only dispatch simulator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Structured output, streaming and cancellation contracts: Structured output, streaming and cancellation contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject unknown tools, extra dangerous fields and invalid argument types.
- [ ] Structured output, streaming and cancellation contracts: Build a local stream consumer from recorded chunks with malformed JSON, disconnects and cancellation. Validate only completed structured outputs and test a bounded repair attempt.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Preference data, DPO and post-training evaluation

<a id="llm-preference-evaluation"></a>

### Preference data, DPO and post-training evaluation

Preference data, DPO and post-training evaluation helps you make explainable engineering decisions and test failure cases. Build the experiment below before relying on the concept in an AI system.

**Priority:** Specialization · **Study:** 4h · **Practice:** 5h

**Prerequisites:** [SFT datasets, LoRA, preference tuning and evaluation boundaries](llm.md#llm-lora-objectives) Navigation is unrestricted.

#### Concepts

- [ ] **Preference pairs:** A chosen and rejected response encode a relative judgment for a specific prompt and rubric.
  - Example: Write two responses differing in factual support while keeping style comparable.
  - Videos:
    - [MIT 6.S191 (2025) — Introduction to LLM Post-Training](https://www.youtube.com/watch?v=_HfdncCbMOE) · MIT · Maxime Labonne · University guest lecture
      - Explains: Adaptation data, supervised tuning and preference-based post-training.
      - Useful because: Compare adaptation choices against a held-out task evaluation before proposing a training run.
      - Watch for: Focus on preference pairs. Then reproduce the lesson example: Write two responses differing in factual support while keeping style comparable.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://introtodeeplearning.com/2025/index.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on preference pairs. Then reproduce the lesson example: Write two responses differing in factual support while keeping style comparable.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Label quality:** Ambiguous or inconsistent pairs can teach undesired shortcuts.
  - Example: Blind-review five conflicting pairs and record disagreements.
  - Videos:
    - [MIT 6.S191 (2025) — Introduction to LLM Post-Training](https://www.youtube.com/watch?v=_HfdncCbMOE) · MIT · Maxime Labonne · University guest lecture
      - Explains: Adaptation data, supervised tuning and preference-based post-training.
      - Useful because: Compare adaptation choices against a held-out task evaluation before proposing a training run.
      - Watch for: Focus on label quality. Then reproduce the lesson example: Blind-review five conflicting pairs and record disagreements.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://introtodeeplearning.com/2025/index.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on label quality. Then reproduce the lesson example: Blind-review five conflicting pairs and record disagreements.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Reference policy:** Preference objectives may compare a trained policy with a reference to constrain changes.
  - Example: Compare chosen/rejected log-probability ratios for two toy policies.
  - Videos:
    - [MIT 6.S191 (2025) — Introduction to LLM Post-Training](https://www.youtube.com/watch?v=_HfdncCbMOE) · MIT · Maxime Labonne · University guest lecture
      - Explains: Adaptation data, supervised tuning and preference-based post-training.
      - Useful because: Compare adaptation choices against a held-out task evaluation before proposing a training run.
      - Watch for: Focus on reference policy. Then reproduce the lesson example: Compare chosen/rejected log-probability ratios for two toy policies.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://introtodeeplearning.com/2025/index.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on reference policy. Then reproduce the lesson example: Compare chosen/rejected log-probability ratios for two toy policies.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Overoptimization:** Improvement on a preference proxy can worsen real task performance.
  - Example: Construct a pairwise judge that rewards verbosity and inspect its failure cases.
  - Videos:
    - [MIT 6.S191 (2025) — Introduction to LLM Post-Training](https://www.youtube.com/watch?v=_HfdncCbMOE) · MIT · Maxime Labonne · University guest lecture
      - Explains: Adaptation data, supervised tuning and preference-based post-training.
      - Useful because: Compare adaptation choices against a held-out task evaluation before proposing a training run.
      - Watch for: Focus on overoptimization. Then reproduce the lesson example: Construct a pairwise judge that rewards verbosity and inspect its failure cases.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://introtodeeplearning.com/2025/index.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on overoptimization. Then reproduce the lesson example: Construct a pairwise judge that rewards verbosity and inspect its failure cases.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Holdout evaluation:** Post-training requires untouched tasks, contamination checks and capability regressions.
  - Example: Evaluate a candidate on factuality, format and refusal fixtures not used in training.
  - Videos:
    - [MIT 6.S191 (2025) — Introduction to LLM Post-Training](https://www.youtube.com/watch?v=_HfdncCbMOE) · MIT · Maxime Labonne · University guest lecture
      - Explains: Adaptation data, supervised tuning and preference-based post-training.
      - Useful because: Compare adaptation choices against a held-out task evaluation before proposing a training run.
      - Watch for: Focus on holdout evaluation. Then reproduce the lesson example: Evaluate a candidate on factuality, format and refusal fixtures not used in training.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://introtodeeplearning.com/2025/index.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on holdout evaluation. Then reproduce the lesson example: Evaluate a candidate on factuality, format and refusal fixtures not used in training.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### YouTube: focused explanations and full courses

- [MIT 6.S191 (2025) — Introduction to LLM Post-Training](https://www.youtube.com/watch?v=_HfdncCbMOE) · MIT · Maxime Labonne · University guest lecture
  - Explains: Adaptation data, supervised tuning and preference-based post-training.
  - Useful because: Compare adaptation choices against a held-out task evaluation before proposing a training run.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://introtodeeplearning.com/2025/index.html
- [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
  - Explains: A PyTorch language-model pipeline and the stages of language-model development.
  - Useful because: Connect model internals to application decisions; large training runs are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### Free written resources

1. [Official reference: Preference data, DPO and post-training evaluation](https://huggingface.co/docs/trl/dpo_trainer) — Free reading; no registration required. Use the local CPU exercise; optional hosted services and downloads are not required..
2. [Hugging Face PEFT: LoRA](https://huggingface.co/docs/peft/conceptual_guides/lora) — Free; no registration required. No paid materials required.

#### Lab: Preference data, DPO and post-training evaluation

Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.

**Deliverables**

- Runnable CPU notebook or script with deterministic fixtures
- Measured outputs, failure cases and a README explaining decisions

**Completion checks**

- [ ] Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.
- [ ] Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

#### Ten project recommendations

### KV cache memory simulator

A serving learner needs to understand cache growth and eviction.

**Data:** Generate request lengths and toy key/value tensors. Use a fixed seed and keep evaluation cases separate.

**Output:** A cache size calculator and equivalent cached/uncached toy attention outputs.

**Effort:** 10h · Beginner → intermediate

- **Preference data, DPO and post-training evaluation:** Extend the project with Preference data, DPO and post-training evaluation in KV cache memory simulator. Adapt this focused lab to the project data: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.  Required concepts: Preference pairs, Label quality, Reference policy, Overoptimization, Holdout evaluation.
  - Deliverable: Preference data, DPO and post-training evaluation: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cache size calculator and equivalent cached/uncached toy attention outputs. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Preference data, DPO and post-training evaluation: Preference data, DPO and post-training evaluation: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match outputs and document memory assumptions, batch sizes and dtypes.
- [ ] Preference data, DPO and post-training evaluation: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Context assembly laboratory

A developer needs relevant context within a fixed budget.

**Data:** Use ten Markdown notes with IDs, priorities and contradictory statements. Use a fixed seed and keep evaluation cases separate.

**Output:** A context packer with source traceability.

**Effort:** 10h · Beginner → intermediate

- **Preference data, DPO and post-training evaluation:** Extend the project with Preference data, DPO and post-training evaluation in Context assembly laboratory. Adapt this focused lab to the project data: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.  Required concepts: Preference pairs, Label quality, Reference policy, Overoptimization, Holdout evaluation.
  - Deliverable: Preference data, DPO and post-training evaluation: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A context packer with source traceability. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Preference data, DPO and post-training evaluation: Preference data, DPO and post-training evaluation: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Always retain required constraints and explain every dropped passage.
- [ ] Preference data, DPO and post-training evaluation: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Low-rank adaptation microscope

A learner needs to see what LoRA changes in a frozen model.

**Data:** Generate input/target matrices for a small frozen linear layer. Use a fixed seed and keep evaluation cases separate.

**Output:** A low-rank adapter training experiment and parameter count report.

**Effort:** 10h · Beginner → intermediate

- **Preference data, DPO and post-training evaluation:** Extend the project with Preference data, DPO and post-training evaluation in Low-rank adaptation microscope. Adapt this focused lab to the project data: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.  Required concepts: Preference pairs, Label quality, Reference policy, Overoptimization, Holdout evaluation.
  - Deliverable: Preference data, DPO and post-training evaluation: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A low-rank adapter training experiment and parameter count report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Preference data, DPO and post-training evaluation: Preference data, DPO and post-training evaluation: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Only adapters receive gradients; compare rank settings under the same budget.
- [ ] Preference data, DPO and post-training evaluation: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local model selection scorecard

A developer needs a defensible model choice under laptop constraints.

**Data:** Use 20 local evaluation prompts; recorded outputs are the offline fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A quality, memory and latency scorecard with provenance per run.

**Effort:** 10h · Beginner → intermediate

- **Preference data, DPO and post-training evaluation:** Extend the project with Preference data, DPO and post-training evaluation in Local model selection scorecard. Adapt this focused lab to the project data: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.  Required concepts: Preference pairs, Label quality, Reference policy, Overoptimization, Holdout evaluation.
  - Deliverable: Preference data, DPO and post-training evaluation: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A quality, memory and latency scorecard with provenance per run. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Preference data, DPO and post-training evaluation: Preference data, DPO and post-training evaluation: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Separate measured local runs from fixtures and state untested capabilities.
- [ ] Preference data, DPO and post-training evaluation: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Prompt regression workbench

A support writer needs repeatable checks before changing instructions.

**Data:** Author 30 requests with expected structured responses and recorded fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A prompt version comparison harness.

**Effort:** 10h · Beginner → intermediate

- **Preference data, DPO and post-training evaluation:** Extend the project with Preference data, DPO and post-training evaluation in Prompt regression workbench. Adapt this focused lab to the project data: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.  Required concepts: Preference pairs, Label quality, Reference policy, Overoptimization, Holdout evaluation.
  - Deliverable: Preference data, DPO and post-training evaluation: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A prompt version comparison harness. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Preference data, DPO and post-training evaluation: Preference data, DPO and post-training evaluation: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect malformed JSON, unsupported claims and changed required fields.
- [ ] Preference data, DPO and post-training evaluation: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Quantization error explorer

A learner needs to measure compression tradeoffs before choosing a format.

**Data:** Use generated linear-layer weights and calibration vectors. Use a fixed seed and keep evaluation cases separate.

**Output:** An int8 quantize/dequantize notebook with size and output-error plots.

**Effort:** 10h · Beginner → intermediate

- **Preference data, DPO and post-training evaluation:** Extend the project with Preference data, DPO and post-training evaluation in Quantization error explorer. Adapt this focused lab to the project data: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.  Required concepts: Preference pairs, Label quality, Reference policy, Overoptimization, Holdout evaluation.
  - Deliverable: Preference data, DPO and post-training evaluation: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An int8 quantize/dequantize notebook with size and output-error plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Preference data, DPO and post-training evaluation: Preference data, DPO and post-training evaluation: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare per-tensor and per-channel scales and test outlier sensitivity.
- [ ] Preference data, DPO and post-training evaluation: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Streaming response assembler

An interface builder needs correct partial structured-response handling.

**Data:** Create fixtures of chunked JSON and text with disconnects. Use a fixed seed and keep evaluation cases separate.

**Output:** A stream assembler and cancellation demo.

**Effort:** 10h · Beginner → intermediate

- **Preference data, DPO and post-training evaluation:** Extend the project with Preference data, DPO and post-training evaluation in Streaming response assembler. Adapt this focused lab to the project data: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.  Required concepts: Preference pairs, Label quality, Reference policy, Overoptimization, Holdout evaluation.
  - Deliverable: Preference data, DPO and post-training evaluation: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A stream assembler and cancellation demo. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Preference data, DPO and post-training evaluation: Preference data, DPO and post-training evaluation: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Never parse incomplete JSON as final; recover cleanly from a dropped stream.
- [ ] Preference data, DPO and post-training evaluation: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Decoding distribution explorer

A learner needs to understand temperature, top-k and top-p.

**Data:** Use fixed vocabulary logits and seeded sampling on CPU. Use a fixed seed and keep evaluation cases separate.

**Output:** A probability visualizer and sampling experiment.

**Effort:** 10h · Beginner → intermediate

- **Preference data, DPO and post-training evaluation:** Extend the project with Preference data, DPO and post-training evaluation in Decoding distribution explorer. Adapt this focused lab to the project data: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.  Required concepts: Preference pairs, Label quality, Reference policy, Overoptimization, Holdout evaluation.
  - Deliverable: Preference data, DPO and post-training evaluation: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A probability visualizer and sampling experiment. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Preference data, DPO and post-training evaluation: Preference data, DPO and post-training evaluation: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify normalization, deterministic seed behavior and nucleus boundaries.
- [ ] Preference data, DPO and post-training evaluation: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Token budget planner

An app builder needs to estimate what fits in a context window.

**Data:** Use 20 local multilingual prompts and a downloadable small tokenizer or documented byte fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A tokenizer comparison and truncation report.

**Effort:** 10h · Beginner → intermediate

- **Preference data, DPO and post-training evaluation:** Extend the project with Preference data, DPO and post-training evaluation in Token budget planner. Adapt this focused lab to the project data: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.  Required concepts: Preference pairs, Label quality, Reference policy, Overoptimization, Holdout evaluation.
  - Deliverable: Preference data, DPO and post-training evaluation: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A tokenizer comparison and truncation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Preference data, DPO and post-training evaluation: Preference data, DPO and post-training evaluation: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Preserve required instructions and label byte estimates as estimates, not exact token counts.
- [ ] Preference data, DPO and post-training evaluation: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Structured tool-call validator

An app builder needs safe interpretation of proposed tool arguments.

**Data:** Write 25 valid and invalid recorded tool-call responses. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema validator and read-only dispatch simulator.

**Effort:** 10h · Beginner → intermediate

- **Preference data, DPO and post-training evaluation:** Extend the project with Preference data, DPO and post-training evaluation in Structured tool-call validator. Adapt this focused lab to the project data: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.  Required concepts: Preference pairs, Label quality, Reference policy, Overoptimization, Holdout evaluation.
  - Deliverable: Preference data, DPO and post-training evaluation: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema validator and read-only dispatch simulator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Preference data, DPO and post-training evaluation: Preference data, DPO and post-training evaluation: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject unknown tools, extra dangerous fields and invalid argument types.
- [ ] Preference data, DPO and post-training evaluation: Create twenty fictional prompt/chosen/rejected records, audit their quality and calculate a toy preference objective on fixed log probabilities. Separate training preference accuracy from held-out usefulness and safety checks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Multimodal input contracts and uncertainty

<a id="llm-multimodal-contracts"></a>

### Multimodal input contracts and uncertainty

Multimodal input contracts and uncertainty helps you make explainable engineering decisions and test failure cases. Build the experiment below before relying on the concept in an AI system.

**Priority:** Essential · **Study:** 4h · **Practice:** 5h

**Prerequisites:** [Tool calling, streaming and multimodal AI](llm.md#llm-tools) Navigation is unrestricted.

#### Concepts

- [ ] **Modality preprocessing:** Images, audio and text need different preprocessing contracts before a model consumes them.
  - Example: Record image dimensions, color channels and normalization alongside a caption.
  - Videos:
    - [MIT 6.S191 (2025) — Deep Computer Vision](https://www.youtube.com/watch?v=oGpzWAlP5p0) · MIT · Alexander Amini · University lecture
      - Explains: Convolutional models and vision tasks.
      - Useful because: Compare the task families before implementing a tiny image experiment.
      - Watch for: Focus on modality preprocessing. Then reproduce the lesson example: Record image dimensions, color channels and normalization alongside a caption.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://introtodeeplearning.com/2025/index.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on modality preprocessing. Then reproduce the lesson example: Record image dimensions, color channels and normalization alongside a caption.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Alignment:** Cross-modal inputs must refer to the same example and compatible time or spatial units.
  - Example: Pair a generated image with a caption using a stable example ID.
  - Videos:
    - [MIT 6.S191 (2025) — Deep Computer Vision](https://www.youtube.com/watch?v=oGpzWAlP5p0) · MIT · Alexander Amini · University lecture
      - Explains: Convolutional models and vision tasks.
      - Useful because: Compare the task families before implementing a tiny image experiment.
      - Watch for: Focus on alignment. Then reproduce the lesson example: Pair a generated image with a caption using a stable example ID.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://introtodeeplearning.com/2025/index.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on alignment. Then reproduce the lesson example: Pair a generated image with a caption using a stable example ID.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Budget accounting:** Image patches and audio duration can consume context or compute differently from text.
  - Example: Set explicit image dimensions and duration limits in a request validator.
  - Videos:
    - [MIT 6.S191 (2025) — Deep Computer Vision](https://www.youtube.com/watch?v=oGpzWAlP5p0) · MIT · Alexander Amini · University lecture
      - Explains: Convolutional models and vision tasks.
      - Useful because: Compare the task families before implementing a tiny image experiment.
      - Watch for: Focus on budget accounting. Then reproduce the lesson example: Set explicit image dimensions and duration limits in a request validator.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://introtodeeplearning.com/2025/index.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on budget accounting. Then reproduce the lesson example: Set explicit image dimensions and duration limits in a request validator.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Grounding limits:** A generated description may claim details not visible in the input.
  - Example: Flag a fixture caption claiming a hidden object that the image does not contain.
  - Videos:
    - [MIT 6.S191 (2025) — Deep Computer Vision](https://www.youtube.com/watch?v=oGpzWAlP5p0) · MIT · Alexander Amini · University lecture
      - Explains: Convolutional models and vision tasks.
      - Useful because: Compare the task families before implementing a tiny image experiment.
      - Watch for: Focus on grounding limits. Then reproduce the lesson example: Flag a fixture caption claiming a hidden object that the image does not contain.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://introtodeeplearning.com/2025/index.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on grounding limits. Then reproduce the lesson example: Flag a fixture caption claiming a hidden object that the image does not contain.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Evaluation slices:** OCR, object descriptions and temporal audio tasks require different acceptance tests.
  - Example: Separate count, transcription and spatial-relation fixtures.
  - Videos:
    - [MIT 6.S191 (2025) — Deep Computer Vision](https://www.youtube.com/watch?v=oGpzWAlP5p0) · MIT · Alexander Amini · University lecture
      - Explains: Convolutional models and vision tasks.
      - Useful because: Compare the task families before implementing a tiny image experiment.
      - Watch for: Focus on evaluation slices. Then reproduce the lesson example: Separate count, transcription and spatial-relation fixtures.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://introtodeeplearning.com/2025/index.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on evaluation slices. Then reproduce the lesson example: Separate count, transcription and spatial-relation fixtures.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### YouTube: focused explanations and full courses

- [MIT 6.S191 (2025) — Deep Computer Vision](https://www.youtube.com/watch?v=oGpzWAlP5p0) · MIT · Alexander Amini · University lecture
  - Explains: Convolutional models and vision tasks.
  - Useful because: Compare the task families before implementing a tiny image experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://introtodeeplearning.com/2025/index.html
- [MIT 6.S191 (2025) — Deep Sequence Modeling](https://www.youtube.com/watch?v=GvezxUdLrEk) · MIT · Alexander Amini · University lecture
  - Explains: Sequence representations and neural architectures for ordered inputs.
  - Useful because: Use the sequence-model framing alongside the recurrent and attention implementation exercises.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://introtodeeplearning.com/2025/index.html
- [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
  - Explains: A PyTorch language-model pipeline and the stages of language-model development.
  - Useful because: Connect model internals to application decisions; large training runs are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### Free written resources

1. [Official reference: Multimodal input contracts and uncertainty](https://huggingface.co/docs/transformers/tasks/image_text_to_text) — Free reading; no registration required. Use the local CPU exercise; optional hosted services and downloads are not required..
2. [Hugging Face: tools](https://huggingface.co/learn/agents-course/unit1/tools) — Free reading; optional account for course activities. No paid materials required.

#### Lab: Multimodal input contracts and uncertainty

Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.

**Deliverables**

- Runnable CPU notebook or script with deterministic fixtures
- Measured outputs, failure cases and a README explaining decisions

**Completion checks**

- [ ] Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.
- [ ] Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

#### Ten project recommendations

### KV cache memory simulator

A serving learner needs to understand cache growth and eviction.

**Data:** Generate request lengths and toy key/value tensors. Use a fixed seed and keep evaluation cases separate.

**Output:** A cache size calculator and equivalent cached/uncached toy attention outputs.

**Effort:** 10h · Beginner → intermediate

- **Multimodal input contracts and uncertainty:** Extend the project with Multimodal input contracts and uncertainty in KV cache memory simulator. Adapt this focused lab to the project data: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.  Required concepts: Modality preprocessing, Alignment, Budget accounting, Grounding limits, Evaluation slices.
  - Deliverable: Multimodal input contracts and uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cache size calculator and equivalent cached/uncached toy attention outputs. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Multimodal input contracts and uncertainty: Multimodal input contracts and uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match outputs and document memory assumptions, batch sizes and dtypes.
- [ ] Multimodal input contracts and uncertainty: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Context assembly laboratory

A developer needs relevant context within a fixed budget.

**Data:** Use ten Markdown notes with IDs, priorities and contradictory statements. Use a fixed seed and keep evaluation cases separate.

**Output:** A context packer with source traceability.

**Effort:** 10h · Beginner → intermediate

- **Multimodal input contracts and uncertainty:** Extend the project with Multimodal input contracts and uncertainty in Context assembly laboratory. Adapt this focused lab to the project data: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.  Required concepts: Modality preprocessing, Alignment, Budget accounting, Grounding limits, Evaluation slices.
  - Deliverable: Multimodal input contracts and uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A context packer with source traceability. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Multimodal input contracts and uncertainty: Multimodal input contracts and uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Always retain required constraints and explain every dropped passage.
- [ ] Multimodal input contracts and uncertainty: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Low-rank adaptation microscope

A learner needs to see what LoRA changes in a frozen model.

**Data:** Generate input/target matrices for a small frozen linear layer. Use a fixed seed and keep evaluation cases separate.

**Output:** A low-rank adapter training experiment and parameter count report.

**Effort:** 10h · Beginner → intermediate

- **Multimodal input contracts and uncertainty:** Extend the project with Multimodal input contracts and uncertainty in Low-rank adaptation microscope. Adapt this focused lab to the project data: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.  Required concepts: Modality preprocessing, Alignment, Budget accounting, Grounding limits, Evaluation slices.
  - Deliverable: Multimodal input contracts and uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A low-rank adapter training experiment and parameter count report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Multimodal input contracts and uncertainty: Multimodal input contracts and uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Only adapters receive gradients; compare rank settings under the same budget.
- [ ] Multimodal input contracts and uncertainty: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local model selection scorecard

A developer needs a defensible model choice under laptop constraints.

**Data:** Use 20 local evaluation prompts; recorded outputs are the offline fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A quality, memory and latency scorecard with provenance per run.

**Effort:** 10h · Beginner → intermediate

- **Multimodal input contracts and uncertainty:** Extend the project with Multimodal input contracts and uncertainty in Local model selection scorecard. Adapt this focused lab to the project data: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.  Required concepts: Modality preprocessing, Alignment, Budget accounting, Grounding limits, Evaluation slices.
  - Deliverable: Multimodal input contracts and uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A quality, memory and latency scorecard with provenance per run. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Multimodal input contracts and uncertainty: Multimodal input contracts and uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Separate measured local runs from fixtures and state untested capabilities.
- [ ] Multimodal input contracts and uncertainty: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Prompt regression workbench

A support writer needs repeatable checks before changing instructions.

**Data:** Author 30 requests with expected structured responses and recorded fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A prompt version comparison harness.

**Effort:** 10h · Beginner → intermediate

- **Multimodal input contracts and uncertainty:** Extend the project with Multimodal input contracts and uncertainty in Prompt regression workbench. Adapt this focused lab to the project data: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.  Required concepts: Modality preprocessing, Alignment, Budget accounting, Grounding limits, Evaluation slices.
  - Deliverable: Multimodal input contracts and uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A prompt version comparison harness. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Multimodal input contracts and uncertainty: Multimodal input contracts and uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect malformed JSON, unsupported claims and changed required fields.
- [ ] Multimodal input contracts and uncertainty: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Quantization error explorer

A learner needs to measure compression tradeoffs before choosing a format.

**Data:** Use generated linear-layer weights and calibration vectors. Use a fixed seed and keep evaluation cases separate.

**Output:** An int8 quantize/dequantize notebook with size and output-error plots.

**Effort:** 10h · Beginner → intermediate

- **Multimodal input contracts and uncertainty:** Extend the project with Multimodal input contracts and uncertainty in Quantization error explorer. Adapt this focused lab to the project data: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.  Required concepts: Modality preprocessing, Alignment, Budget accounting, Grounding limits, Evaluation slices.
  - Deliverable: Multimodal input contracts and uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An int8 quantize/dequantize notebook with size and output-error plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Multimodal input contracts and uncertainty: Multimodal input contracts and uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare per-tensor and per-channel scales and test outlier sensitivity.
- [ ] Multimodal input contracts and uncertainty: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Streaming response assembler

An interface builder needs correct partial structured-response handling.

**Data:** Create fixtures of chunked JSON and text with disconnects. Use a fixed seed and keep evaluation cases separate.

**Output:** A stream assembler and cancellation demo.

**Effort:** 10h · Beginner → intermediate

- **Multimodal input contracts and uncertainty:** Extend the project with Multimodal input contracts and uncertainty in Streaming response assembler. Adapt this focused lab to the project data: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.  Required concepts: Modality preprocessing, Alignment, Budget accounting, Grounding limits, Evaluation slices.
  - Deliverable: Multimodal input contracts and uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A stream assembler and cancellation demo. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Multimodal input contracts and uncertainty: Multimodal input contracts and uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Never parse incomplete JSON as final; recover cleanly from a dropped stream.
- [ ] Multimodal input contracts and uncertainty: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Decoding distribution explorer

A learner needs to understand temperature, top-k and top-p.

**Data:** Use fixed vocabulary logits and seeded sampling on CPU. Use a fixed seed and keep evaluation cases separate.

**Output:** A probability visualizer and sampling experiment.

**Effort:** 10h · Beginner → intermediate

- **Multimodal input contracts and uncertainty:** Extend the project with Multimodal input contracts and uncertainty in Decoding distribution explorer. Adapt this focused lab to the project data: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.  Required concepts: Modality preprocessing, Alignment, Budget accounting, Grounding limits, Evaluation slices.
  - Deliverable: Multimodal input contracts and uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A probability visualizer and sampling experiment. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Multimodal input contracts and uncertainty: Multimodal input contracts and uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify normalization, deterministic seed behavior and nucleus boundaries.
- [ ] Multimodal input contracts and uncertainty: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Token budget planner

An app builder needs to estimate what fits in a context window.

**Data:** Use 20 local multilingual prompts and a downloadable small tokenizer or documented byte fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A tokenizer comparison and truncation report.

**Effort:** 10h · Beginner → intermediate

- **Multimodal input contracts and uncertainty:** Extend the project with Multimodal input contracts and uncertainty in Token budget planner. Adapt this focused lab to the project data: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.  Required concepts: Modality preprocessing, Alignment, Budget accounting, Grounding limits, Evaluation slices.
  - Deliverable: Multimodal input contracts and uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A tokenizer comparison and truncation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Multimodal input contracts and uncertainty: Multimodal input contracts and uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Preserve required instructions and label byte estimates as estimates, not exact token counts.
- [ ] Multimodal input contracts and uncertainty: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Structured tool-call validator

An app builder needs safe interpretation of proposed tool arguments.

**Data:** Write 25 valid and invalid recorded tool-call responses. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema validator and read-only dispatch simulator.

**Effort:** 10h · Beginner → intermediate

- **Multimodal input contracts and uncertainty:** Extend the project with Multimodal input contracts and uncertainty in Structured tool-call validator. Adapt this focused lab to the project data: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.  Required concepts: Modality preprocessing, Alignment, Budget accounting, Grounding limits, Evaluation slices.
  - Deliverable: Multimodal input contracts and uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema validator and read-only dispatch simulator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Multimodal input contracts and uncertainty: Multimodal input contracts and uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject unknown tools, extra dangerous fields and invalid argument types.
- [ ] Multimodal input contracts and uncertainty: Design a local image-and-text request schema using generated shapes and caption fixtures. Validate dimensions, formats, size limits and evidence references; label recorded model outputs explicitly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Stage checkpoint

<a id="checkpoint-llm"></a>

### Model integration checkpoint

Demonstrate readiness through a reproducible practical handoff. Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.

**Priority:** Essential · **Study:** 1h · **Practice:** 6h

**Prerequisites:** [Tokens, embeddings, context and transformer internals](llm.md#llm-foundations), [Model selection, open models and local serving](llm.md#llm-model-selection), [Prompting, sampling and structured outputs](llm.md#llm-prompting), [Context engineering, memory and caching](llm.md#llm-context), [Tool calling, streaming and multimodal AI](llm.md#llm-tools), [Decoding: temperature, top-k, top-p and stop rules](llm.md#llm-sampling-decoding), [Tokenisation, BPE, special tokens and multilingual budgets](llm.md#llm-tokenization-unicode), [Model cards, licences and reproducible model selection](llm.md#llm-model-provenance), [Structured output, streaming and cancellation contracts](llm.md#llm-stream-contracts), [Multimodal input contracts and uncertainty](llm.md#llm-multimodal-contracts) Navigation is unrestricted.

#### Concepts

- [ ] **Define the success contract:** Write observable checks before implementation so success is not just a plausible demonstration.
  - Example: Turn this task into a numbered acceptance checklist: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.
  - Videos:
    - [MIT 6.S191 (2025) — Deep Computer Vision](https://www.youtube.com/watch?v=oGpzWAlP5p0) · MIT · Alexander Amini · University lecture
      - Explains: Convolutional models and vision tasks.
      - Useful because: Compare the task families before implementing a tiny image experiment.
      - Watch for: Focus on define the success contract. Then reproduce the lesson example: Turn this task into a numbered acceptance checklist: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://introtodeeplearning.com/2025/index.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on define the success contract. Then reproduce the lesson example: Turn this task into a numbered acceptance checklist: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Reproduce the baseline:** Keep a simple reference output and deterministic inputs so changes can be compared honestly.
  - Example: Run a fixed input twice and compare saved outputs with the documented baseline.
  - Videos:
    - [MIT 6.S191 (2025) — Deep Computer Vision](https://www.youtube.com/watch?v=oGpzWAlP5p0) · MIT · Alexander Amini · University lecture
      - Explains: Convolutional models and vision tasks.
      - Useful because: Compare the task families before implementing a tiny image experiment.
      - Watch for: Focus on reproduce the baseline. Then reproduce the lesson example: Run a fixed input twice and compare saved outputs with the documented baseline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://introtodeeplearning.com/2025/index.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on reproduce the baseline. Then reproduce the lesson example: Run a fixed input twice and compare saved outputs with the documented baseline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Test a failure boundary:** A working happy path does not establish robustness to malformed data or dependency failures.
  - Example: Inject one malformed input and one controlled failure, then record the resulting state.
  - Videos:
    - [MIT 6.S191 (2025) — Deep Computer Vision](https://www.youtube.com/watch?v=oGpzWAlP5p0) · MIT · Alexander Amini · University lecture
      - Explains: Convolutional models and vision tasks.
      - Useful because: Compare the task families before implementing a tiny image experiment.
      - Watch for: Focus on test a failure boundary. Then reproduce the lesson example: Inject one malformed input and one controlled failure, then record the resulting state.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://introtodeeplearning.com/2025/index.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on test a failure boundary. Then reproduce the lesson example: Inject one malformed input and one controlled failure, then record the resulting state.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Explain the decisions:** Describe why each technique was chosen and what evidence would make you choose differently.
  - Example: Write a short decision note comparing the chosen approach with one simpler alternative.
  - Videos:
    - [MIT 6.S191 (2025) — Deep Computer Vision](https://www.youtube.com/watch?v=oGpzWAlP5p0) · MIT · Alexander Amini · University lecture
      - Explains: Convolutional models and vision tasks.
      - Useful because: Compare the task families before implementing a tiny image experiment.
      - Watch for: Focus on explain the decisions. Then reproduce the lesson example: Write a short decision note comparing the chosen approach with one simpler alternative.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://introtodeeplearning.com/2025/index.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on explain the decisions. Then reproduce the lesson example: Write a short decision note comparing the chosen approach with one simpler alternative.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/
- [ ] **Hand off the evidence:** Another learner must be able to reproduce the result from your instructions and supplied inputs.
  - Example: Ask a teammate to run the README commands in a clean environment and record missing steps.
  - Videos:
    - [MIT 6.S191 (2025) — Deep Computer Vision](https://www.youtube.com/watch?v=oGpzWAlP5p0) · MIT · Alexander Amini · University lecture
      - Explains: Convolutional models and vision tasks.
      - Useful because: Compare the task families before implementing a tiny image experiment.
      - Watch for: Focus on hand off the evidence. Then reproduce the lesson example: Ask a teammate to run the README commands in a clean environment and record missing steps.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://introtodeeplearning.com/2025/index.html
    - [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
      - Explains: A PyTorch language-model pipeline and the stages of language-model development.
      - Useful because: Connect model internals to application decisions; large training runs are optional.
      - Watch for: Focus on hand off the evidence. Then reproduce the lesson example: Ask a teammate to run the README commands in a clean environment and record missing steps.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### YouTube: focused explanations and full courses

- [MIT 6.S191 (2025) — Deep Computer Vision](https://www.youtube.com/watch?v=oGpzWAlP5p0) · MIT · Alexander Amini · University lecture
  - Explains: Convolutional models and vision tasks.
  - Useful because: Compare the task families before implementing a tiny image experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://introtodeeplearning.com/2025/index.html
- [MIT 6.S191 (2025) — Deep Sequence Modeling](https://www.youtube.com/watch?v=GvezxUdLrEk) · MIT · Alexander Amini · University lecture
  - Explains: Sequence representations and neural architectures for ordered inputs.
  - Useful because: Use the sequence-model framing alongside the recurrent and attention implementation exercises.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://introtodeeplearning.com/2025/index.html
- [Code an LLM from scratch — theory to RLHF](https://www.youtube.com/watch?v=p3sij8QzONQ) · freeCodeCamp · Full course · approximately 6h
  - Explains: A PyTorch language-model pipeline and the stages of language-model development.
  - Useful because: Connect model internals to application decisions; large training runs are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/code-an-llm-from-scratch-theory-to-rlhf/

#### Free written resources

1. [Official reference: Multimodal input contracts and uncertainty](https://huggingface.co/docs/transformers/tasks/image_text_to_text) — Free reading; no registration required. Use the local CPU exercise; optional hosted services and downloads are not required..
2. [Hugging Face: tools](https://huggingface.co/learn/agents-course/unit1/tools) — Free reading; optional account for course activities. No paid materials required.

#### Model integration checkpoint

Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.

**Deliverables**

- Runnable project and reproducible input fixtures
- README, results and decision notes
- Failure evidence and clean-start instructions

**Completion checks**

- [ ] Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.
- [ ] Explain the code and results without relying on an AI-generated summary.
- [ ] A teammate can reproduce the demo without paid credentials.

#### Ten project recommendations

### KV cache memory simulator

A serving learner needs to understand cache growth and eviction.

**Data:** Generate request lengths and toy key/value tensors. Use a fixed seed and keep evaluation cases separate.

**Output:** A cache size calculator and equivalent cached/uncached toy attention outputs.

**Effort:** 10h · Beginner → intermediate

- **Model integration checkpoint:** Extend the project with Model integration checkpoint in KV cache memory simulator. Adapt this focused lab to the project data: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Model integration checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cache size calculator and equivalent cached/uncached toy attention outputs. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model integration checkpoint: Model integration checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match outputs and document memory assumptions, batch sizes and dtypes.
- [ ] Model integration checkpoint: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Context assembly laboratory

A developer needs relevant context within a fixed budget.

**Data:** Use ten Markdown notes with IDs, priorities and contradictory statements. Use a fixed seed and keep evaluation cases separate.

**Output:** A context packer with source traceability.

**Effort:** 10h · Beginner → intermediate

- **Model integration checkpoint:** Extend the project with Model integration checkpoint in Context assembly laboratory. Adapt this focused lab to the project data: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Model integration checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A context packer with source traceability. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model integration checkpoint: Model integration checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Always retain required constraints and explain every dropped passage.
- [ ] Model integration checkpoint: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Low-rank adaptation microscope

A learner needs to see what LoRA changes in a frozen model.

**Data:** Generate input/target matrices for a small frozen linear layer. Use a fixed seed and keep evaluation cases separate.

**Output:** A low-rank adapter training experiment and parameter count report.

**Effort:** 10h · Beginner → intermediate

- **Model integration checkpoint:** Extend the project with Model integration checkpoint in Low-rank adaptation microscope. Adapt this focused lab to the project data: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Model integration checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A low-rank adapter training experiment and parameter count report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model integration checkpoint: Model integration checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Only adapters receive gradients; compare rank settings under the same budget.
- [ ] Model integration checkpoint: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local model selection scorecard

A developer needs a defensible model choice under laptop constraints.

**Data:** Use 20 local evaluation prompts; recorded outputs are the offline fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A quality, memory and latency scorecard with provenance per run.

**Effort:** 10h · Beginner → intermediate

- **Model integration checkpoint:** Extend the project with Model integration checkpoint in Local model selection scorecard. Adapt this focused lab to the project data: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Model integration checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A quality, memory and latency scorecard with provenance per run. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model integration checkpoint: Model integration checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Separate measured local runs from fixtures and state untested capabilities.
- [ ] Model integration checkpoint: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Prompt regression workbench

A support writer needs repeatable checks before changing instructions.

**Data:** Author 30 requests with expected structured responses and recorded fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A prompt version comparison harness.

**Effort:** 10h · Beginner → intermediate

- **Model integration checkpoint:** Extend the project with Model integration checkpoint in Prompt regression workbench. Adapt this focused lab to the project data: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Model integration checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A prompt version comparison harness. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model integration checkpoint: Model integration checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect malformed JSON, unsupported claims and changed required fields.
- [ ] Model integration checkpoint: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Quantization error explorer

A learner needs to measure compression tradeoffs before choosing a format.

**Data:** Use generated linear-layer weights and calibration vectors. Use a fixed seed and keep evaluation cases separate.

**Output:** An int8 quantize/dequantize notebook with size and output-error plots.

**Effort:** 10h · Beginner → intermediate

- **Model integration checkpoint:** Extend the project with Model integration checkpoint in Quantization error explorer. Adapt this focused lab to the project data: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Model integration checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An int8 quantize/dequantize notebook with size and output-error plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model integration checkpoint: Model integration checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare per-tensor and per-channel scales and test outlier sensitivity.
- [ ] Model integration checkpoint: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Streaming response assembler

An interface builder needs correct partial structured-response handling.

**Data:** Create fixtures of chunked JSON and text with disconnects. Use a fixed seed and keep evaluation cases separate.

**Output:** A stream assembler and cancellation demo.

**Effort:** 10h · Beginner → intermediate

- **Model integration checkpoint:** Extend the project with Model integration checkpoint in Streaming response assembler. Adapt this focused lab to the project data: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Model integration checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A stream assembler and cancellation demo. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model integration checkpoint: Model integration checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Never parse incomplete JSON as final; recover cleanly from a dropped stream.
- [ ] Model integration checkpoint: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Decoding distribution explorer

A learner needs to understand temperature, top-k and top-p.

**Data:** Use fixed vocabulary logits and seeded sampling on CPU. Use a fixed seed and keep evaluation cases separate.

**Output:** A probability visualizer and sampling experiment.

**Effort:** 10h · Beginner → intermediate

- **Model integration checkpoint:** Extend the project with Model integration checkpoint in Decoding distribution explorer. Adapt this focused lab to the project data: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Model integration checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A probability visualizer and sampling experiment. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model integration checkpoint: Model integration checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify normalization, deterministic seed behavior and nucleus boundaries.
- [ ] Model integration checkpoint: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Token budget planner

An app builder needs to estimate what fits in a context window.

**Data:** Use 20 local multilingual prompts and a downloadable small tokenizer or documented byte fallback. Use a fixed seed and keep evaluation cases separate.

**Output:** A tokenizer comparison and truncation report.

**Effort:** 10h · Beginner → intermediate

- **Model integration checkpoint:** Extend the project with Model integration checkpoint in Token budget planner. Adapt this focused lab to the project data: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Model integration checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A tokenizer comparison and truncation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model integration checkpoint: Model integration checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Preserve required instructions and label byte estimates as estimates, not exact token counts.
- [ ] Model integration checkpoint: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Structured tool-call validator

An app builder needs safe interpretation of proposed tool arguments.

**Data:** Write 25 valid and invalid recorded tool-call responses. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema validator and read-only dispatch simulator.

**Effort:** 10h · Beginner → intermediate

- **Model integration checkpoint:** Extend the project with Model integration checkpoint in Structured tool-call validator. Adapt this focused lab to the project data: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Model integration checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema validator and read-only dispatch simulator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model integration checkpoint: Model integration checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject unknown tools, extra dangerous fields and invalid argument types.
- [ ] Model integration checkpoint: Implement a local or fixture-backed model adapter with token budgeting, a model manifest, schema validation, cancellation and bounded failures. Distinguish real model-quality measurements from fixture-only integration tests.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

