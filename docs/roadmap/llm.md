# LLM engineering

Build grounded, bounded language-model features with a free local path.

## Main route · Step 4 of 8

**Goal:** Choose and use language models with deliberate prompts, context and outputs.

**Stage checkpoint:** Build a structured-output assistant with schema validation, recorded-response tests and a local-model option.

Build a small assistant with a pretrained model. ML and DL are deeper branches for training and understanding models; they are not gates for this route.

Follow the modules and lessons below at your pace. Finish each exercise, save your evidence and self-assessment, then continue. Completed and Already known count as completed; Skipped is reported separately. You can move ahead at any time.

[Full pipeline](../PIPELINE.md) · [Next step: Retrieval and RAG](rag.md)

## Model foundations

<a id="llm-foundations"></a>

### Tokens, embeddings, context and transformer internals

Understand the model interface and the limitations of a finite context.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

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

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Tokens, embeddings, context and transformer internals:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tokens, embeddings, context and transformer internals, explicitly apply Tokenization, Embeddings and transformers, Pretraining and inference.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tokens, embeddings, context and transformer internals: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Tokens, embeddings, context and transformer internals: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Tokens, embeddings, context and transformer internals:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tokens, embeddings, context and transformer internals, explicitly apply Tokenization, Embeddings and transformers, Pretraining and inference.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tokens, embeddings, context and transformer internals: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Tokens, embeddings, context and transformer internals: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Tokens, embeddings, context and transformer internals:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tokens, embeddings, context and transformer internals, explicitly apply Tokenization, Embeddings and transformers, Pretraining and inference.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tokens, embeddings, context and transformer internals: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Tokens, embeddings, context and transformer internals: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Tokens, embeddings, context and transformer internals:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tokens, embeddings, context and transformer internals, explicitly apply Tokenization, Embeddings and transformers, Pretraining and inference.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tokens, embeddings, context and transformer internals: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Tokens, embeddings, context and transformer internals: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Tokens, embeddings, context and transformer internals:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tokens, embeddings, context and transformer internals, explicitly apply Tokenization, Embeddings and transformers, Pretraining and inference.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tokens, embeddings, context and transformer internals: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Tokens, embeddings, context and transformer internals: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Tokens, embeddings, context and transformer internals:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tokens, embeddings, context and transformer internals, explicitly apply Tokenization, Embeddings and transformers, Pretraining and inference.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tokens, embeddings, context and transformer internals: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Tokens, embeddings, context and transformer internals: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Tokens, embeddings, context and transformer internals:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tokens, embeddings, context and transformer internals, explicitly apply Tokenization, Embeddings and transformers, Pretraining and inference.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tokens, embeddings, context and transformer internals: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Tokens, embeddings, context and transformer internals: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Tokens, embeddings, context and transformer internals:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tokens, embeddings, context and transformer internals, explicitly apply Tokenization, Embeddings and transformers, Pretraining and inference.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tokens, embeddings, context and transformer internals: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Tokens, embeddings, context and transformer internals: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Tokens, embeddings, context and transformer internals:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tokens, embeddings, context and transformer internals, explicitly apply Tokenization, Embeddings and transformers, Pretraining and inference.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tokens, embeddings, context and transformer internals: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Tokens, embeddings, context and transformer internals: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Tokens, embeddings, context and transformer internals:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tokens, embeddings, context and transformer internals, explicitly apply Tokenization, Embeddings and transformers, Pretraining and inference.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tokens, embeddings, context and transformer internals: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Tokens, embeddings, context and transformer internals: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a toy next-token generator from a small local corpus and draw a transformer data-flow diagram with token-budget accounting; clearly label the toy model as an approximation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="llm-model-selection"></a>

### Model selection, open models and local serving

Compare quality and deployment constraints before choosing a provider.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

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

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Model selection, open models and local serving:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Model selection, open models and local serving, explicitly apply Model selection, Open and closed models, Self-hosting.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Model selection, open models and local serving: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Model selection, open models and local serving: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Model selection, open models and local serving:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Model selection, open models and local serving, explicitly apply Model selection, Open and closed models, Self-hosting.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Model selection, open models and local serving: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Model selection, open models and local serving: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Model selection, open models and local serving:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Model selection, open models and local serving, explicitly apply Model selection, Open and closed models, Self-hosting.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Model selection, open models and local serving: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Model selection, open models and local serving: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Model selection, open models and local serving:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Model selection, open models and local serving, explicitly apply Model selection, Open and closed models, Self-hosting.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Model selection, open models and local serving: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Model selection, open models and local serving: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Model selection, open models and local serving:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Model selection, open models and local serving, explicitly apply Model selection, Open and closed models, Self-hosting.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Model selection, open models and local serving: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Model selection, open models and local serving: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Model selection, open models and local serving:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Model selection, open models and local serving, explicitly apply Model selection, Open and closed models, Self-hosting.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Model selection, open models and local serving: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Model selection, open models and local serving: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Model selection, open models and local serving:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Model selection, open models and local serving, explicitly apply Model selection, Open and closed models, Self-hosting.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Model selection, open models and local serving: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Model selection, open models and local serving: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Model selection, open models and local serving:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Model selection, open models and local serving, explicitly apply Model selection, Open and closed models, Self-hosting.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Model selection, open models and local serving: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Model selection, open models and local serving: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Model selection, open models and local serving:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Model selection, open models and local serving, explicitly apply Model selection, Open and closed models, Self-hosting.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Model selection, open models and local serving: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Model selection, open models and local serving: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Model selection, open models and local serving:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Model selection, open models and local serving, explicitly apply Model selection, Open and closed models, Self-hosting.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Model selection, open models and local serving: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Model selection, open models and local serving: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Create a model decision table and a mock OpenAI-compatible local endpoint; optionally compare a small Ollama model if your hardware supports it.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="llm-prompting"></a>

### Prompting, sampling and structured outputs

Constrain the task and validate responses instead of trusting fluent text.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

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

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Prompting, sampling and structured outputs:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Prompting, sampling and structured outputs, explicitly apply Prompt design, Sampling, Structured output.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompting, sampling and structured outputs: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Prompting, sampling and structured outputs: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Prompting, sampling and structured outputs:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Prompting, sampling and structured outputs, explicitly apply Prompt design, Sampling, Structured output.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompting, sampling and structured outputs: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Prompting, sampling and structured outputs: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Prompting, sampling and structured outputs:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Prompting, sampling and structured outputs, explicitly apply Prompt design, Sampling, Structured output.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompting, sampling and structured outputs: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Prompting, sampling and structured outputs: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Prompting, sampling and structured outputs:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Prompting, sampling and structured outputs, explicitly apply Prompt design, Sampling, Structured output.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompting, sampling and structured outputs: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Prompting, sampling and structured outputs: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Prompting, sampling and structured outputs:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Prompting, sampling and structured outputs, explicitly apply Prompt design, Sampling, Structured output.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompting, sampling and structured outputs: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Prompting, sampling and structured outputs: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Prompting, sampling and structured outputs:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Prompting, sampling and structured outputs, explicitly apply Prompt design, Sampling, Structured output.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompting, sampling and structured outputs: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Prompting, sampling and structured outputs: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Prompting, sampling and structured outputs:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Prompting, sampling and structured outputs, explicitly apply Prompt design, Sampling, Structured output.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompting, sampling and structured outputs: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Prompting, sampling and structured outputs: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Prompting, sampling and structured outputs:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Prompting, sampling and structured outputs, explicitly apply Prompt design, Sampling, Structured output.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompting, sampling and structured outputs: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Prompting, sampling and structured outputs: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Prompting, sampling and structured outputs:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Prompting, sampling and structured outputs, explicitly apply Prompt design, Sampling, Structured output.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompting, sampling and structured outputs: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Prompting, sampling and structured outputs: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Prompting, sampling and structured outputs:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Prompting, sampling and structured outputs, explicitly apply Prompt design, Sampling, Structured output.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompting, sampling and structured outputs: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Prompting, sampling and structured outputs: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a toy sampling experiment plus a schema-validating response parser; use local recorded responses to test malformed JSON and semantically invalid values.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Application patterns

<a id="llm-context"></a>

### Context engineering, memory and caching

Supply relevant information while preventing stale, conflicting or untrusted context.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

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

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Context engineering, memory and caching:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Context engineering, memory and caching, explicitly apply Context sources, Compaction and isolation, Memory and caching.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Context engineering, memory and caching: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Context engineering, memory and caching: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Context engineering, memory and caching:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Context engineering, memory and caching, explicitly apply Context sources, Compaction and isolation, Memory and caching.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Context engineering, memory and caching: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Context engineering, memory and caching: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Context engineering, memory and caching:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Context engineering, memory and caching, explicitly apply Context sources, Compaction and isolation, Memory and caching.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Context engineering, memory and caching: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Context engineering, memory and caching: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Context engineering, memory and caching:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Context engineering, memory and caching, explicitly apply Context sources, Compaction and isolation, Memory and caching.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Context engineering, memory and caching: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Context engineering, memory and caching: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Context engineering, memory and caching:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Context engineering, memory and caching, explicitly apply Context sources, Compaction and isolation, Memory and caching.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Context engineering, memory and caching: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Context engineering, memory and caching: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Context engineering, memory and caching:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Context engineering, memory and caching, explicitly apply Context sources, Compaction and isolation, Memory and caching.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Context engineering, memory and caching: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Context engineering, memory and caching: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Context engineering, memory and caching:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Context engineering, memory and caching, explicitly apply Context sources, Compaction and isolation, Memory and caching.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Context engineering, memory and caching: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Context engineering, memory and caching: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Context engineering, memory and caching:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Context engineering, memory and caching, explicitly apply Context sources, Compaction and isolation, Memory and caching.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Context engineering, memory and caching: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Context engineering, memory and caching: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Context engineering, memory and caching:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Context engineering, memory and caching, explicitly apply Context sources, Compaction and isolation, Memory and caching.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Context engineering, memory and caching: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Context engineering, memory and caching: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Context engineering, memory and caching:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Context engineering, memory and caching, explicitly apply Context sources, Compaction and isolation, Memory and caching.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Context engineering, memory and caching: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Context engineering, memory and caching: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a context assembler with explicit token/character budget, source labels, session isolation and versioned cache keys; test conflicting and oversized inputs.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="llm-tools"></a>

### Tool calling, streaming and multimodal AI

Connect generated requests to bounded software actions and handle incremental outputs.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

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

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Tool calling, streaming and multimodal AI:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tool calling, streaming and multimodal AI, explicitly apply Tool calling, Streaming, Multimodal tasks.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tool calling, streaming and multimodal AI: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Tool calling, streaming and multimodal AI: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Tool calling, streaming and multimodal AI:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tool calling, streaming and multimodal AI, explicitly apply Tool calling, Streaming, Multimodal tasks.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tool calling, streaming and multimodal AI: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Tool calling, streaming and multimodal AI: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Tool calling, streaming and multimodal AI:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tool calling, streaming and multimodal AI, explicitly apply Tool calling, Streaming, Multimodal tasks.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tool calling, streaming and multimodal AI: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Tool calling, streaming and multimodal AI: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Tool calling, streaming and multimodal AI:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tool calling, streaming and multimodal AI, explicitly apply Tool calling, Streaming, Multimodal tasks.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tool calling, streaming and multimodal AI: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Tool calling, streaming and multimodal AI: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Tool calling, streaming and multimodal AI:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tool calling, streaming and multimodal AI, explicitly apply Tool calling, Streaming, Multimodal tasks.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tool calling, streaming and multimodal AI: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Tool calling, streaming and multimodal AI: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Tool calling, streaming and multimodal AI:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tool calling, streaming and multimodal AI, explicitly apply Tool calling, Streaming, Multimodal tasks.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tool calling, streaming and multimodal AI: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Tool calling, streaming and multimodal AI: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Tool calling, streaming and multimodal AI:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tool calling, streaming and multimodal AI, explicitly apply Tool calling, Streaming, Multimodal tasks.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tool calling, streaming and multimodal AI: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Tool calling, streaming and multimodal AI: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Tool calling, streaming and multimodal AI:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tool calling, streaming and multimodal AI, explicitly apply Tool calling, Streaming, Multimodal tasks.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tool calling, streaming and multimodal AI: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Tool calling, streaming and multimodal AI: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Tool calling, streaming and multimodal AI:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tool calling, streaming and multimodal AI, explicitly apply Tool calling, Streaming, Multimodal tasks.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tool calling, streaming and multimodal AI: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Tool calling, streaming and multimodal AI: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Tool calling, streaming and multimodal AI:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tool calling, streaming and multimodal AI, explicitly apply Tool calling, Streaming, Multimodal tasks.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tool calling, streaming and multimodal AI: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Tool calling, streaming and multimodal AI: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a fixture-driven assistant with one read-only search tool, streamed chunks and image/audio/video metadata inputs; test cancellation and invalid tool arguments.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="llm-finetuning"></a>

### Fine-tuning, LoRA/QLoRA and quantization

Know when weight adaptation is justified and how it differs from retrieval.

**Priority:** Advanced · **Study:** 3h · **Practice:** 4h

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

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Fine-tuning, LoRA/QLoRA and quantization:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Fine-tuning, LoRA/QLoRA and quantization, explicitly apply Fine-tuning, LoRA and QLoRA, Quantization.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Fine-tuning, LoRA/QLoRA and quantization: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Fine-tuning, LoRA/QLoRA and quantization: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Fine-tuning, LoRA/QLoRA and quantization:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Fine-tuning, LoRA/QLoRA and quantization, explicitly apply Fine-tuning, LoRA and QLoRA, Quantization.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Fine-tuning, LoRA/QLoRA and quantization: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Fine-tuning, LoRA/QLoRA and quantization: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Fine-tuning, LoRA/QLoRA and quantization:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Fine-tuning, LoRA/QLoRA and quantization, explicitly apply Fine-tuning, LoRA and QLoRA, Quantization.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Fine-tuning, LoRA/QLoRA and quantization: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Fine-tuning, LoRA/QLoRA and quantization: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Fine-tuning, LoRA/QLoRA and quantization:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Fine-tuning, LoRA/QLoRA and quantization, explicitly apply Fine-tuning, LoRA and QLoRA, Quantization.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Fine-tuning, LoRA/QLoRA and quantization: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Fine-tuning, LoRA/QLoRA and quantization: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Fine-tuning, LoRA/QLoRA and quantization:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Fine-tuning, LoRA/QLoRA and quantization, explicitly apply Fine-tuning, LoRA and QLoRA, Quantization.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Fine-tuning, LoRA/QLoRA and quantization: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Fine-tuning, LoRA/QLoRA and quantization: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Fine-tuning, LoRA/QLoRA and quantization:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Fine-tuning, LoRA/QLoRA and quantization, explicitly apply Fine-tuning, LoRA and QLoRA, Quantization.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Fine-tuning, LoRA/QLoRA and quantization: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Fine-tuning, LoRA/QLoRA and quantization: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Fine-tuning, LoRA/QLoRA and quantization:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Fine-tuning, LoRA/QLoRA and quantization, explicitly apply Fine-tuning, LoRA and QLoRA, Quantization.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Fine-tuning, LoRA/QLoRA and quantization: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Fine-tuning, LoRA/QLoRA and quantization: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Fine-tuning, LoRA/QLoRA and quantization:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Fine-tuning, LoRA/QLoRA and quantization, explicitly apply Fine-tuning, LoRA and QLoRA, Quantization.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Fine-tuning, LoRA/QLoRA and quantization: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Fine-tuning, LoRA/QLoRA and quantization: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Fine-tuning, LoRA/QLoRA and quantization:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Fine-tuning, LoRA/QLoRA and quantization, explicitly apply Fine-tuning, LoRA and QLoRA, Quantization.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Fine-tuning, LoRA/QLoRA and quantization: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Fine-tuning, LoRA/QLoRA and quantization: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Fine-tuning, LoRA/QLoRA and quantization:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Fine-tuning, LoRA/QLoRA and quantization, explicitly apply Fine-tuning, LoRA and QLoRA, Quantization.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Fine-tuning, LoRA/QLoRA and quantization: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Fine-tuning, LoRA/QLoRA and quantization: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a tiny low-rank linear adapter on CPU and a quantization-error experiment; write a decision explaining when RAG is preferable to fine-tuning.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Inference internals and control

<a id="llm-sampling-decoding"></a>

### Decoding: temperature, top-k, top-p and stop rules

Understand how a model's logits become tokens and why sampling settings affect output variability rather than guaranteeing factuality.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

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

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Decoding: temperature, top-k, top-p and stop rules:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Decoding: temperature, top-k, top-p and stop rules, explicitly apply Temperature on logits, Top-k truncation, Nucleus sampling.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Decoding: temperature, top-k, top-p and stop rules: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Decoding: temperature, top-k, top-p and stop rules: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Decoding: temperature, top-k, top-p and stop rules:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Decoding: temperature, top-k, top-p and stop rules, explicitly apply Temperature on logits, Top-k truncation, Nucleus sampling.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Decoding: temperature, top-k, top-p and stop rules: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Decoding: temperature, top-k, top-p and stop rules: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Decoding: temperature, top-k, top-p and stop rules:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Decoding: temperature, top-k, top-p and stop rules, explicitly apply Temperature on logits, Top-k truncation, Nucleus sampling.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Decoding: temperature, top-k, top-p and stop rules: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Decoding: temperature, top-k, top-p and stop rules: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Decoding: temperature, top-k, top-p and stop rules:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Decoding: temperature, top-k, top-p and stop rules, explicitly apply Temperature on logits, Top-k truncation, Nucleus sampling.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Decoding: temperature, top-k, top-p and stop rules: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Decoding: temperature, top-k, top-p and stop rules: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Decoding: temperature, top-k, top-p and stop rules:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Decoding: temperature, top-k, top-p and stop rules, explicitly apply Temperature on logits, Top-k truncation, Nucleus sampling.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Decoding: temperature, top-k, top-p and stop rules: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Decoding: temperature, top-k, top-p and stop rules: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Decoding: temperature, top-k, top-p and stop rules:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Decoding: temperature, top-k, top-p and stop rules, explicitly apply Temperature on logits, Top-k truncation, Nucleus sampling.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Decoding: temperature, top-k, top-p and stop rules: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Decoding: temperature, top-k, top-p and stop rules: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Decoding: temperature, top-k, top-p and stop rules:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Decoding: temperature, top-k, top-p and stop rules, explicitly apply Temperature on logits, Top-k truncation, Nucleus sampling.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Decoding: temperature, top-k, top-p and stop rules: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Decoding: temperature, top-k, top-p and stop rules: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Decoding: temperature, top-k, top-p and stop rules:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Decoding: temperature, top-k, top-p and stop rules, explicitly apply Temperature on logits, Top-k truncation, Nucleus sampling.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Decoding: temperature, top-k, top-p and stop rules: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Decoding: temperature, top-k, top-p and stop rules: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Decoding: temperature, top-k, top-p and stop rules:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Decoding: temperature, top-k, top-p and stop rules, explicitly apply Temperature on logits, Top-k truncation, Nucleus sampling.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Decoding: temperature, top-k, top-p and stop rules: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Decoding: temperature, top-k, top-p and stop rules: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Decoding: temperature, top-k, top-p and stop rules:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Decoding: temperature, top-k, top-p and stop rules, explicitly apply Temperature on logits, Top-k truncation, Nucleus sampling.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Decoding: temperature, top-k, top-p and stop rules: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Decoding: temperature, top-k, top-p and stop rules: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement CPU sampling over five synthetic logits with temperature, top-k and top-p. Plot empirical frequencies from seeded draws and test end-token and multi-token stop handling without loading a large language model.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="llm-kv-cache-serving"></a>

### Prefill, decoding, KV cache and model memory budgets

Estimate whether a local model and its context fit available memory and distinguish throughput from response latency.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

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

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Prefill, decoding, KV cache and model memory budgets:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Prefill, decoding, KV cache and model memory budgets, explicitly apply Prefill versus token decoding, KV cache role, Weight and activation memory.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prefill, decoding, KV cache and model memory budgets: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Prefill, decoding, KV cache and model memory budgets: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Prefill, decoding, KV cache and model memory budgets:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Prefill, decoding, KV cache and model memory budgets, explicitly apply Prefill versus token decoding, KV cache role, Weight and activation memory.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prefill, decoding, KV cache and model memory budgets: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Prefill, decoding, KV cache and model memory budgets: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Prefill, decoding, KV cache and model memory budgets:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Prefill, decoding, KV cache and model memory budgets, explicitly apply Prefill versus token decoding, KV cache role, Weight and activation memory.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prefill, decoding, KV cache and model memory budgets: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Prefill, decoding, KV cache and model memory budgets: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Prefill, decoding, KV cache and model memory budgets:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Prefill, decoding, KV cache and model memory budgets, explicitly apply Prefill versus token decoding, KV cache role, Weight and activation memory.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prefill, decoding, KV cache and model memory budgets: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Prefill, decoding, KV cache and model memory budgets: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Prefill, decoding, KV cache and model memory budgets:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Prefill, decoding, KV cache and model memory budgets, explicitly apply Prefill versus token decoding, KV cache role, Weight and activation memory.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prefill, decoding, KV cache and model memory budgets: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Prefill, decoding, KV cache and model memory budgets: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Prefill, decoding, KV cache and model memory budgets:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Prefill, decoding, KV cache and model memory budgets, explicitly apply Prefill versus token decoding, KV cache role, Weight and activation memory.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prefill, decoding, KV cache and model memory budgets: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Prefill, decoding, KV cache and model memory budgets: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Prefill, decoding, KV cache and model memory budgets:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Prefill, decoding, KV cache and model memory budgets, explicitly apply Prefill versus token decoding, KV cache role, Weight and activation memory.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prefill, decoding, KV cache and model memory budgets: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Prefill, decoding, KV cache and model memory budgets: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Prefill, decoding, KV cache and model memory budgets:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Prefill, decoding, KV cache and model memory budgets, explicitly apply Prefill versus token decoding, KV cache role, Weight and activation memory.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prefill, decoding, KV cache and model memory budgets: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Prefill, decoding, KV cache and model memory budgets: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Prefill, decoding, KV cache and model memory budgets:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Prefill, decoding, KV cache and model memory budgets, explicitly apply Prefill versus token decoding, KV cache role, Weight and activation memory.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prefill, decoding, KV cache and model memory budgets: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Prefill, decoding, KV cache and model memory budgets: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Prefill, decoding, KV cache and model memory budgets:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Prefill, decoding, KV cache and model memory budgets, explicitly apply Prefill versus token decoding, KV cache role, Weight and activation memory.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prefill, decoding, KV cache and model memory budgets: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Prefill, decoding, KV cache and model memory budgets: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Build a CPU memory-budget calculator for toy transformer configurations and a fake streaming server with recorded prefill/decode timings. Add tenant-aware response-cache tests and document which estimates are not real hardware benchmarks.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="llm-tokenization-unicode"></a>

### Tokenisation, BPE, special tokens and multilingual budgets

Make token budgets and dataset preparation correct for code, Arabic, French and mixed-language prompts.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

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

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Tokenisation, BPE, special tokens and multilingual budgets:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tokenisation, BPE, special tokens and multilingual budgets, explicitly apply Bytes, code points and tokens, Byte-pair merges, Special-token contracts.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Tokenisation, BPE, special tokens and multilingual budgets:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tokenisation, BPE, special tokens and multilingual budgets, explicitly apply Bytes, code points and tokens, Byte-pair merges, Special-token contracts.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Tokenisation, BPE, special tokens and multilingual budgets:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tokenisation, BPE, special tokens and multilingual budgets, explicitly apply Bytes, code points and tokens, Byte-pair merges, Special-token contracts.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Tokenisation, BPE, special tokens and multilingual budgets:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tokenisation, BPE, special tokens and multilingual budgets, explicitly apply Bytes, code points and tokens, Byte-pair merges, Special-token contracts.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Tokenisation, BPE, special tokens and multilingual budgets:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tokenisation, BPE, special tokens and multilingual budgets, explicitly apply Bytes, code points and tokens, Byte-pair merges, Special-token contracts.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Tokenisation, BPE, special tokens and multilingual budgets:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tokenisation, BPE, special tokens and multilingual budgets, explicitly apply Bytes, code points and tokens, Byte-pair merges, Special-token contracts.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Tokenisation, BPE, special tokens and multilingual budgets:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tokenisation, BPE, special tokens and multilingual budgets, explicitly apply Bytes, code points and tokens, Byte-pair merges, Special-token contracts.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Tokenisation, BPE, special tokens and multilingual budgets:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tokenisation, BPE, special tokens and multilingual budgets, explicitly apply Bytes, code points and tokens, Byte-pair merges, Special-token contracts.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Tokenisation, BPE, special tokens and multilingual budgets:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tokenisation, BPE, special tokens and multilingual budgets, explicitly apply Bytes, code points and tokens, Byte-pair merges, Special-token contracts.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Tokenisation, BPE, special tokens and multilingual budgets:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For Tokenisation, BPE, special tokens and multilingual budgets, explicitly apply Bytes, code points and tokens, Byte-pair merges, Special-token contracts.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Tokenisation, BPE, special tokens and multilingual budgets: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a small BPE trainer over local multilingual fixtures and document its encode/decode contract. Compare byte, character and token counts, test a chat-template boundary and show that round-trip decoding preserves the supported input representation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Training choices and alignment

<a id="llm-lora-objectives"></a>

### SFT datasets, LoRA, preference tuning and evaluation boundaries

Choose adaptation only when it addresses a measured failure and understand what is actually being trained.

**Priority:** Advanced · **Study:** 3h · **Practice:** 4h

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

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **SFT datasets, LoRA, preference tuning and evaluation boundaries:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For SFT datasets, LoRA, preference tuning and evaluation boundaries, explicitly apply Supervised fine-tuning targets, Low-rank adapters, Adapter configuration.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **SFT datasets, LoRA, preference tuning and evaluation boundaries:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For SFT datasets, LoRA, preference tuning and evaluation boundaries, explicitly apply Supervised fine-tuning targets, Low-rank adapters, Adapter configuration.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **SFT datasets, LoRA, preference tuning and evaluation boundaries:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For SFT datasets, LoRA, preference tuning and evaluation boundaries, explicitly apply Supervised fine-tuning targets, Low-rank adapters, Adapter configuration.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **SFT datasets, LoRA, preference tuning and evaluation boundaries:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For SFT datasets, LoRA, preference tuning and evaluation boundaries, explicitly apply Supervised fine-tuning targets, Low-rank adapters, Adapter configuration.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **SFT datasets, LoRA, preference tuning and evaluation boundaries:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For SFT datasets, LoRA, preference tuning and evaluation boundaries, explicitly apply Supervised fine-tuning targets, Low-rank adapters, Adapter configuration.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **SFT datasets, LoRA, preference tuning and evaluation boundaries:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For SFT datasets, LoRA, preference tuning and evaluation boundaries, explicitly apply Supervised fine-tuning targets, Low-rank adapters, Adapter configuration.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **SFT datasets, LoRA, preference tuning and evaluation boundaries:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For SFT datasets, LoRA, preference tuning and evaluation boundaries, explicitly apply Supervised fine-tuning targets, Low-rank adapters, Adapter configuration.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **SFT datasets, LoRA, preference tuning and evaluation boundaries:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For SFT datasets, LoRA, preference tuning and evaluation boundaries, explicitly apply Supervised fine-tuning targets, Low-rank adapters, Adapter configuration.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **SFT datasets, LoRA, preference tuning and evaluation boundaries:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For SFT datasets, LoRA, preference tuning and evaluation boundaries, explicitly apply Supervised fine-tuning targets, Low-rank adapters, Adapter configuration.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **SFT datasets, LoRA, preference tuning and evaluation boundaries:** Add a schema-validated explanation or summarization layer using local/recorded responses.  For SFT datasets, LoRA, preference tuning and evaluation boundaries, explicitly apply Supervised fine-tuning targets, Low-rank adapters, Adapter configuration.
  - Deliverable: A context builder, response fixtures and output-validation suite
  - Check: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: A context builder, response fixtures and output-validation suite
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] SFT datasets, LoRA, preference tuning and evaluation boundaries: Budget context, validate cited evidence and test malformed output and abstention. Adapt the lesson lab: Implement a low-rank adapter for a tiny CPU linear model, verify only adapter parameters update and compare reconstruction against full tuning. Write synthetic SFT/preference records and a contamination check; full LLM fine-tuning is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

