# Retrieval and RAG

Connect answers to maintained evidence and evaluate retrieval independently.

## Main route · Step 5 of 8

**Goal:** Retrieve useful evidence and connect answers to traceable sources.

**Stage checkpoint:** Build a document search pipeline with chunking, hybrid retrieval, citations and retrieval measurements.

Add document retrieval and citations when the application needs external knowledge.

Follow the modules and lessons below at your pace. Finish each exercise, save your evidence and self-assessment, then continue. Completed and Already known count as completed; Skipped is reported separately. You can move ahead at any time.

[Full pipeline](../PIPELINE.md) · [Next step: Evaluation and security](eval-security.md)

## Ingestion and search

<a id="rag-ingestion"></a>

### Document parsing, chunking and metadata

Preserve source identity and useful boundaries when preparing knowledge.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Context engineering, memory and caching](llm.md#llm-context), [pandas, cleaning and missing values](math-data.md#data-pandas) Navigation is unrestricted.

#### Concepts

- [ ] **Parsing:** Text extraction must preserve enough structure to interpret tables, headings and provenance.
  - Example: Keep a document ID and section title on every extracted passage.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on parsing. Then reproduce the lesson example: Keep a document ID and section title on every extracted passage.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Chunking:** Chunk size and overlap trade context completeness against retrieval precision; structure-aware splitting helps.
  - Example: Split at headings and compare with fixed 400-character chunks.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on chunking. Then reproduce the lesson example: Split at headings and compare with fixed 400-character chunks.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Metadata and refresh:** Version, source, timestamp and permissions support updates and access filters.
  - Example: Re-ingest a changed document and delete its obsolete chunks.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on metadata and refresh. Then reproduce the lesson example: Re-ingest a changed document and delete its obsolete chunks.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/

#### YouTube: focused explanations and full courses

- [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
  - Explains: Ingestion, retrieval and techniques for grounding model answers.
  - Useful because: Follow the pipeline, then test chunking and retrieval separately.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/

#### Free written resources

1. [Sentence Transformers: semantic search](https://www.sbert.net/examples/sentence_transformer/applications/semantic-search/README.html) — Free reading; Hugging Face account optional for sharing models. No paid materials required.
2. [Haystack: document splitters](https://docs.haystack.deepset.ai/docs/documentsplitter) — Free reading; Hugging Face account optional for sharing models. No paid materials required.

#### Lab: Document parsing, chunking and metadata

Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Document parsing, chunking and metadata:** Index the project’s records and notes with source IDs and permission metadata.  For Document parsing, chunking and metadata, explicitly apply Parsing, Chunking, Metadata and refresh.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Document parsing, chunking and metadata: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Document parsing, chunking and metadata: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Document parsing, chunking and metadata:** Index the project’s records and notes with source IDs and permission metadata.  For Document parsing, chunking and metadata, explicitly apply Parsing, Chunking, Metadata and refresh.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Document parsing, chunking and metadata: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Document parsing, chunking and metadata: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Document parsing, chunking and metadata:** Index the project’s records and notes with source IDs and permission metadata.  For Document parsing, chunking and metadata, explicitly apply Parsing, Chunking, Metadata and refresh.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Document parsing, chunking and metadata: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Document parsing, chunking and metadata: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Document parsing, chunking and metadata:** Index the project’s records and notes with source IDs and permission metadata.  For Document parsing, chunking and metadata, explicitly apply Parsing, Chunking, Metadata and refresh.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Document parsing, chunking and metadata: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Document parsing, chunking and metadata: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Document parsing, chunking and metadata:** Index the project’s records and notes with source IDs and permission metadata.  For Document parsing, chunking and metadata, explicitly apply Parsing, Chunking, Metadata and refresh.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Document parsing, chunking and metadata: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Document parsing, chunking and metadata: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Document parsing, chunking and metadata:** Index the project’s records and notes with source IDs and permission metadata.  For Document parsing, chunking and metadata, explicitly apply Parsing, Chunking, Metadata and refresh.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Document parsing, chunking and metadata: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Document parsing, chunking and metadata: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Document parsing, chunking and metadata:** Index the project’s records and notes with source IDs and permission metadata.  For Document parsing, chunking and metadata, explicitly apply Parsing, Chunking, Metadata and refresh.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Document parsing, chunking and metadata: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Document parsing, chunking and metadata: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Document parsing, chunking and metadata:** Index the project’s records and notes with source IDs and permission metadata.  For Document parsing, chunking and metadata, explicitly apply Parsing, Chunking, Metadata and refresh.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Document parsing, chunking and metadata: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Document parsing, chunking and metadata: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Document parsing, chunking and metadata:** Index the project’s records and notes with source IDs and permission metadata.  For Document parsing, chunking and metadata, explicitly apply Parsing, Chunking, Metadata and refresh.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Document parsing, chunking and metadata: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Document parsing, chunking and metadata: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Document parsing, chunking and metadata:** Index the project’s records and notes with source IDs and permission metadata.  For Document parsing, chunking and metadata, explicitly apply Parsing, Chunking, Metadata and refresh.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Document parsing, chunking and metadata: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Document parsing, chunking and metadata: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="rag-embeddings"></a>

### Embeddings, similarity, indexes and vector databases

Choose representations and retrieval storage based on measured relevance.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Document parsing, chunking and metadata](rag.md#rag-ingestion) Navigation is unrestricted.

#### Concepts

- [ ] **Embedding selection:** An embedding model maps semantic content into vectors; language, domain and vector dimension affect suitability.
  - Example: Evaluate ten query/document pairs rather than relying on model size.
  - Videos:
    - [Neural Networks Part 11: Word Embedding and Word2Vec](https://www.youtube.com/watch?v=viZrOnJclY0) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on embedding selection. Then reproduce the lesson example: Evaluate ten query/document pairs rather than relying on model size.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on embedding selection. Then reproduce the lesson example: Evaluate ten query/document pairs rather than relying on model size.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Similarity and indexing:** Cosine, dot product and Euclidean distance rank differently; approximate indexes trade recall for speed.
  - Example: Compare brute-force cosine retrieval with an indexed search.
  - Videos:
    - [Neural Networks Part 11: Word Embedding and Word2Vec](https://www.youtube.com/watch?v=viZrOnJclY0) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on similarity and indexing. Then reproduce the lesson example: Compare brute-force cosine retrieval with an indexed search.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on similarity and indexing. Then reproduce the lesson example: Compare brute-force cosine retrieval with an indexed search.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Vector stores:** FAISS, Chroma, Qdrant, LanceDB and pgvector offer different persistence/filtering tradeoffs.
  - Example: Choose an in-memory NumPy index for a ten-document prototype and explain when it becomes insufficient.
  - Videos:
    - [Neural Networks Part 11: Word Embedding and Word2Vec](https://www.youtube.com/watch?v=viZrOnJclY0) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on vector stores. Then reproduce the lesson example: Choose an in-memory NumPy index for a ten-document prototype and explain when it becomes insufficient.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on vector stores. Then reproduce the lesson example: Choose an in-memory NumPy index for a ten-document prototype and explain when it becomes insufficient.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/

#### YouTube: focused explanations and full courses

- [Neural Networks Part 11: Word Embedding and Word2Vec](https://www.youtube.com/watch?v=viZrOnJclY0) · StatQuest · Josh Starmer · Focused explanation
  - Explains: A visual, step-by-step explanation of the topic named in the title.
  - Useful because: Use the worked intuition before writing the corresponding small experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://statquest.org/video_index.html
- [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
  - Explains: Ingestion, retrieval and techniques for grounding model answers.
  - Useful because: Follow the pipeline, then test chunking and retrieval separately.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/

#### Free written resources

1. [Sentence Transformers: semantic search](https://www.sbert.net/examples/sentence_transformer/applications/semantic-search/README.html) — Free reading; Hugging Face account optional for sharing models. No paid materials required.
2. [FAISS: getting started](https://github.com/facebookresearch/faiss/wiki/Getting-started) — Free reading; Hugging Face account optional for sharing models. No paid materials required.

#### Lab: Embeddings, similarity, indexes and vector databases

Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Embeddings, similarity, indexes and vector databases:** Index the project’s records and notes with source IDs and permission metadata.  For Embeddings, similarity, indexes and vector databases, explicitly apply Embedding selection, Similarity and indexing, Vector stores.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Embeddings, similarity, indexes and vector databases: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Embeddings, similarity, indexes and vector databases: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Embeddings, similarity, indexes and vector databases:** Index the project’s records and notes with source IDs and permission metadata.  For Embeddings, similarity, indexes and vector databases, explicitly apply Embedding selection, Similarity and indexing, Vector stores.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Embeddings, similarity, indexes and vector databases: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Embeddings, similarity, indexes and vector databases: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Embeddings, similarity, indexes and vector databases:** Index the project’s records and notes with source IDs and permission metadata.  For Embeddings, similarity, indexes and vector databases, explicitly apply Embedding selection, Similarity and indexing, Vector stores.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Embeddings, similarity, indexes and vector databases: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Embeddings, similarity, indexes and vector databases: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Embeddings, similarity, indexes and vector databases:** Index the project’s records and notes with source IDs and permission metadata.  For Embeddings, similarity, indexes and vector databases, explicitly apply Embedding selection, Similarity and indexing, Vector stores.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Embeddings, similarity, indexes and vector databases: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Embeddings, similarity, indexes and vector databases: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Embeddings, similarity, indexes and vector databases:** Index the project’s records and notes with source IDs and permission metadata.  For Embeddings, similarity, indexes and vector databases, explicitly apply Embedding selection, Similarity and indexing, Vector stores.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Embeddings, similarity, indexes and vector databases: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Embeddings, similarity, indexes and vector databases: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Embeddings, similarity, indexes and vector databases:** Index the project’s records and notes with source IDs and permission metadata.  For Embeddings, similarity, indexes and vector databases, explicitly apply Embedding selection, Similarity and indexing, Vector stores.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Embeddings, similarity, indexes and vector databases: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Embeddings, similarity, indexes and vector databases: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Embeddings, similarity, indexes and vector databases:** Index the project’s records and notes with source IDs and permission metadata.  For Embeddings, similarity, indexes and vector databases, explicitly apply Embedding selection, Similarity and indexing, Vector stores.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Embeddings, similarity, indexes and vector databases: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Embeddings, similarity, indexes and vector databases: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Embeddings, similarity, indexes and vector databases:** Index the project’s records and notes with source IDs and permission metadata.  For Embeddings, similarity, indexes and vector databases, explicitly apply Embedding selection, Similarity and indexing, Vector stores.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Embeddings, similarity, indexes and vector databases: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Embeddings, similarity, indexes and vector databases: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Embeddings, similarity, indexes and vector databases:** Index the project’s records and notes with source IDs and permission metadata.  For Embeddings, similarity, indexes and vector databases, explicitly apply Embedding selection, Similarity and indexing, Vector stores.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Embeddings, similarity, indexes and vector databases: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Embeddings, similarity, indexes and vector databases: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Embeddings, similarity, indexes and vector databases:** Index the project’s records and notes with source IDs and permission metadata.  For Embeddings, similarity, indexes and vector databases, explicitly apply Embedding selection, Similarity and indexing, Vector stores.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Embeddings, similarity, indexes and vector databases: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Embeddings, similarity, indexes and vector databases: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="rag-retrieval"></a>

### Lexical, semantic and hybrid retrieval; filters and reranking

Recover relevant evidence while respecting permissions and improving result order.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Embeddings, similarity, indexes and vector databases](rag.md#rag-embeddings) Navigation is unrestricted.

#### Concepts

- [ ] **Hybrid search:** Lexical search captures exact terms while semantic search captures paraphrases; rank fusion combines them.
  - Example: Retrieve an exact product code lexically and a paraphrased question semantically.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on hybrid search. Then reproduce the lesson example: Retrieve an exact product code lexically and a paraphrased question semantically.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Filters:** Apply tenant and permission constraints before exposing results, including during reranking.
  - Example: A document from another user must never appear in candidates.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on filters. Then reproduce the lesson example: A document from another user must never appear in candidates.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Reranking:** A second scoring stage compares a smaller candidate set more carefully.
  - Example: Rerank twenty passages and evaluate top-five relevance.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on reranking. Then reproduce the lesson example: Rerank twenty passages and evaluate top-five relevance.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/

#### YouTube: focused explanations and full courses

- [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
  - Explains: Ingestion, retrieval and techniques for grounding model answers.
  - Useful because: Follow the pipeline, then test chunking and retrieval separately.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/

#### Free written resources

1. [Sentence Transformers: retrieve and rerank](https://www.sbert.net/examples/sentence_transformer/applications/retrieve_rerank/README.html) — Free reading; Hugging Face account optional for sharing models. No paid materials required.
2. [Qdrant: hybrid queries](https://qdrant.tech/documentation/concepts/hybrid-queries/) — Free reading; Hugging Face account optional for sharing models. No paid materials required.

#### Lab: Lexical, semantic and hybrid retrieval; filters and reranking

Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Lexical, semantic and hybrid retrieval; filters and reranking:** Index the project’s records and notes with source IDs and permission metadata.  For Lexical, semantic and hybrid retrieval; filters and reranking, explicitly apply Hybrid search, Filters, Reranking.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Lexical, semantic and hybrid retrieval; filters and reranking:** Index the project’s records and notes with source IDs and permission metadata.  For Lexical, semantic and hybrid retrieval; filters and reranking, explicitly apply Hybrid search, Filters, Reranking.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Lexical, semantic and hybrid retrieval; filters and reranking:** Index the project’s records and notes with source IDs and permission metadata.  For Lexical, semantic and hybrid retrieval; filters and reranking, explicitly apply Hybrid search, Filters, Reranking.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Lexical, semantic and hybrid retrieval; filters and reranking:** Index the project’s records and notes with source IDs and permission metadata.  For Lexical, semantic and hybrid retrieval; filters and reranking, explicitly apply Hybrid search, Filters, Reranking.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Lexical, semantic and hybrid retrieval; filters and reranking:** Index the project’s records and notes with source IDs and permission metadata.  For Lexical, semantic and hybrid retrieval; filters and reranking, explicitly apply Hybrid search, Filters, Reranking.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Lexical, semantic and hybrid retrieval; filters and reranking:** Index the project’s records and notes with source IDs and permission metadata.  For Lexical, semantic and hybrid retrieval; filters and reranking, explicitly apply Hybrid search, Filters, Reranking.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Lexical, semantic and hybrid retrieval; filters and reranking:** Index the project’s records and notes with source IDs and permission metadata.  For Lexical, semantic and hybrid retrieval; filters and reranking, explicitly apply Hybrid search, Filters, Reranking.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Lexical, semantic and hybrid retrieval; filters and reranking:** Index the project’s records and notes with source IDs and permission metadata.  For Lexical, semantic and hybrid retrieval; filters and reranking, explicitly apply Hybrid search, Filters, Reranking.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Lexical, semantic and hybrid retrieval; filters and reranking:** Index the project’s records and notes with source IDs and permission metadata.  For Lexical, semantic and hybrid retrieval; filters and reranking, explicitly apply Hybrid search, Filters, Reranking.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Lexical, semantic and hybrid retrieval; filters and reranking:** Index the project’s records and notes with source IDs and permission metadata.  For Lexical, semantic and hybrid retrieval; filters and reranking, explicitly apply Hybrid search, Filters, Reranking.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Grounding and evaluation

<a id="rag-answers"></a>

### Grounded generation, citations and retrieval evaluation

Make source support testable and refuse unsupported answers.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Lexical, semantic and hybrid retrieval; filters and reranking](rag.md#rag-retrieval) Navigation is unrestricted.

#### Concepts

- [ ] **Grounding:** An answer should rely on retrieved evidence; retrieval failures and generation failures require separate diagnosis.
  - Example: Return an abstention when no passage supports the question.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on grounding. Then reproduce the lesson example: Return an abstention when no passage supports the question.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Citations:** A citation needs a stable source and matching evidence, not merely a plausible URL.
  - Example: Link the answer sentence to the document section that supports it.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on citations. Then reproduce the lesson example: Link the answer sentence to the document section that supports it.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Retrieval metrics:** Recall@k, precision@k and reciprocal rank measure whether relevant passages were found.
  - Example: Maintain twenty labeled queries and compare two chunking settings.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on retrieval metrics. Then reproduce the lesson example: Maintain twenty labeled queries and compare two chunking settings.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/

#### YouTube: focused explanations and full courses

- [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
  - Explains: Ingestion, retrieval and techniques for grounding model answers.
  - Useful because: Follow the pipeline, then test chunking and retrieval separately.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
  - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
  - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8

#### Free written resources

1. [Haystack: evaluation](https://docs.haystack.deepset.ai/docs/evaluation) — Free reading; Hugging Face account optional for sharing models. No paid materials required.
2. [Ragas: metrics](https://docs.ragas.io/en/stable/concepts/metrics/overview/) — Free reading; Hugging Face account optional for sharing models. No paid materials required.

#### Lab: Grounded generation, citations and retrieval evaluation

Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Grounded generation, citations and retrieval evaluation:** Index the project’s records and notes with source IDs and permission metadata.  For Grounded generation, citations and retrieval evaluation, explicitly apply Grounding, Citations, Retrieval metrics.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Grounded generation, citations and retrieval evaluation: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Grounded generation, citations and retrieval evaluation: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Grounded generation, citations and retrieval evaluation:** Index the project’s records and notes with source IDs and permission metadata.  For Grounded generation, citations and retrieval evaluation, explicitly apply Grounding, Citations, Retrieval metrics.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Grounded generation, citations and retrieval evaluation: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Grounded generation, citations and retrieval evaluation: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Grounded generation, citations and retrieval evaluation:** Index the project’s records and notes with source IDs and permission metadata.  For Grounded generation, citations and retrieval evaluation, explicitly apply Grounding, Citations, Retrieval metrics.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Grounded generation, citations and retrieval evaluation: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Grounded generation, citations and retrieval evaluation: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Grounded generation, citations and retrieval evaluation:** Index the project’s records and notes with source IDs and permission metadata.  For Grounded generation, citations and retrieval evaluation, explicitly apply Grounding, Citations, Retrieval metrics.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Grounded generation, citations and retrieval evaluation: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Grounded generation, citations and retrieval evaluation: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Grounded generation, citations and retrieval evaluation:** Index the project’s records and notes with source IDs and permission metadata.  For Grounded generation, citations and retrieval evaluation, explicitly apply Grounding, Citations, Retrieval metrics.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Grounded generation, citations and retrieval evaluation: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Grounded generation, citations and retrieval evaluation: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Grounded generation, citations and retrieval evaluation:** Index the project’s records and notes with source IDs and permission metadata.  For Grounded generation, citations and retrieval evaluation, explicitly apply Grounding, Citations, Retrieval metrics.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Grounded generation, citations and retrieval evaluation: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Grounded generation, citations and retrieval evaluation: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Grounded generation, citations and retrieval evaluation:** Index the project’s records and notes with source IDs and permission metadata.  For Grounded generation, citations and retrieval evaluation, explicitly apply Grounding, Citations, Retrieval metrics.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Grounded generation, citations and retrieval evaluation: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Grounded generation, citations and retrieval evaluation: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Grounded generation, citations and retrieval evaluation:** Index the project’s records and notes with source IDs and permission metadata.  For Grounded generation, citations and retrieval evaluation, explicitly apply Grounding, Citations, Retrieval metrics.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Grounded generation, citations and retrieval evaluation: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Grounded generation, citations and retrieval evaluation: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Grounded generation, citations and retrieval evaluation:** Index the project’s records and notes with source IDs and permission metadata.  For Grounded generation, citations and retrieval evaluation, explicitly apply Grounding, Citations, Retrieval metrics.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Grounded generation, citations and retrieval evaluation: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Grounded generation, citations and retrieval evaluation: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Grounded generation, citations and retrieval evaluation:** Index the project’s records and notes with source IDs and permission metadata.  For Grounded generation, citations and retrieval evaluation, explicitly apply Grounding, Citations, Retrieval metrics.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Grounded generation, citations and retrieval evaluation: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Grounded generation, citations and retrieval evaluation: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="rag-sql-graphs"></a>

### SQL retrieval and knowledge graphs

Use structured relationships when vector similarity alone cannot answer the question.

**Priority:** Useful next · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Grounded generation, citations and retrieval evaluation](rag.md#rag-answers) Navigation is unrestricted.

#### Concepts

- [ ] **SQL retrieval:** Aggregations and exact filters belong in validated database queries; generated SQL needs strict controls.
  - Example: Answer a count question with a read-only parameterized query.
  - Videos:
    - [Neo4j: building a knowledge graph](https://www.youtube.com/watch?v=1ogNyPWUP7g) · Neo4j · Vendor teaching session
      - Explains: Modeling entities, querying relationships and growing a knowledge graph.
      - Useful because: Compare relationship traversal with vector similarity before selecting a database.
      - Watch for: Focus on sql retrieval. Then reproduce the lesson example: Answer a count question with a read-only parameterized query.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=1ogNyPWUP7g
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on sql retrieval. Then reproduce the lesson example: Answer a count question with a read-only parameterized query.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Knowledge graphs:** Entities and relationships enable explicit traversal and provenance.
  - Example: Find all documents describing dependencies of one service.
  - Videos:
    - [Neo4j: building a knowledge graph](https://www.youtube.com/watch?v=1ogNyPWUP7g) · Neo4j · Vendor teaching session
      - Explains: Modeling entities, querying relationships and growing a knowledge graph.
      - Useful because: Compare relationship traversal with vector similarity before selecting a database.
      - Watch for: Focus on knowledge graphs. Then reproduce the lesson example: Find all documents describing dependencies of one service.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=1ogNyPWUP7g
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on knowledge graphs. Then reproduce the lesson example: Find all documents describing dependencies of one service.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Retrieval choice:** Graph, SQL and text retrieval solve different questions and can be combined.
  - Example: Route totals to SQL and policy explanations to document search.
  - Videos:
    - [Neo4j: building a knowledge graph](https://www.youtube.com/watch?v=1ogNyPWUP7g) · Neo4j · Vendor teaching session
      - Explains: Modeling entities, querying relationships and growing a knowledge graph.
      - Useful because: Compare relationship traversal with vector similarity before selecting a database.
      - Watch for: Focus on retrieval choice. Then reproduce the lesson example: Route totals to SQL and policy explanations to document search.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=1ogNyPWUP7g
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on retrieval choice. Then reproduce the lesson example: Route totals to SQL and policy explanations to document search.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/

#### YouTube: focused explanations and full courses

- [Neo4j: building a knowledge graph](https://www.youtube.com/watch?v=1ogNyPWUP7g) · Neo4j · Vendor teaching session
  - Explains: Modeling entities, querying relationships and growing a knowledge graph.
  - Useful because: Compare relationship traversal with vector similarity before selecting a database.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=1ogNyPWUP7g
- [PostgreSQL — course for beginners](https://www.youtube.com/watch?v=SpfIwlAYaKk) · freeCodeCamp · Full tool course
  - Explains: SQL tables, querying and PostgreSQL fundamentals.
  - Useful because: Use local PostgreSQL/SQLite practice rather than a paid database service.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/posgresql-course-for-beginners/
- [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
  - Explains: Ingestion, retrieval and techniques for grounding model answers.
  - Useful because: Follow the pipeline, then test chunking and retrieval separately.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/

#### Free written resources

1. [PostgreSQL: querying tables](https://www.postgresql.org/docs/current/tutorial-select.html) — Free; no registration required. No paid materials required.
2. [Neo4j: graph database concepts](https://neo4j.com/docs/getting-started/appendix/graphdb-concepts/) — Free reading; Hugging Face account optional for sharing models. No paid materials required.

#### Lab: SQL retrieval and knowledge graphs

Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **SQL retrieval and knowledge graphs:** Index the project’s records and notes with source IDs and permission metadata.  For SQL retrieval and knowledge graphs, explicitly apply SQL retrieval, Knowledge graphs, Retrieval choice.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL retrieval and knowledge graphs: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] SQL retrieval and knowledge graphs: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **SQL retrieval and knowledge graphs:** Index the project’s records and notes with source IDs and permission metadata.  For SQL retrieval and knowledge graphs, explicitly apply SQL retrieval, Knowledge graphs, Retrieval choice.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL retrieval and knowledge graphs: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] SQL retrieval and knowledge graphs: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **SQL retrieval and knowledge graphs:** Index the project’s records and notes with source IDs and permission metadata.  For SQL retrieval and knowledge graphs, explicitly apply SQL retrieval, Knowledge graphs, Retrieval choice.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL retrieval and knowledge graphs: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] SQL retrieval and knowledge graphs: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **SQL retrieval and knowledge graphs:** Index the project’s records and notes with source IDs and permission metadata.  For SQL retrieval and knowledge graphs, explicitly apply SQL retrieval, Knowledge graphs, Retrieval choice.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL retrieval and knowledge graphs: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] SQL retrieval and knowledge graphs: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **SQL retrieval and knowledge graphs:** Index the project’s records and notes with source IDs and permission metadata.  For SQL retrieval and knowledge graphs, explicitly apply SQL retrieval, Knowledge graphs, Retrieval choice.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL retrieval and knowledge graphs: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] SQL retrieval and knowledge graphs: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **SQL retrieval and knowledge graphs:** Index the project’s records and notes with source IDs and permission metadata.  For SQL retrieval and knowledge graphs, explicitly apply SQL retrieval, Knowledge graphs, Retrieval choice.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL retrieval and knowledge graphs: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] SQL retrieval and knowledge graphs: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **SQL retrieval and knowledge graphs:** Index the project’s records and notes with source IDs and permission metadata.  For SQL retrieval and knowledge graphs, explicitly apply SQL retrieval, Knowledge graphs, Retrieval choice.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL retrieval and knowledge graphs: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] SQL retrieval and knowledge graphs: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **SQL retrieval and knowledge graphs:** Index the project’s records and notes with source IDs and permission metadata.  For SQL retrieval and knowledge graphs, explicitly apply SQL retrieval, Knowledge graphs, Retrieval choice.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL retrieval and knowledge graphs: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] SQL retrieval and knowledge graphs: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **SQL retrieval and knowledge graphs:** Index the project’s records and notes with source IDs and permission metadata.  For SQL retrieval and knowledge graphs, explicitly apply SQL retrieval, Knowledge graphs, Retrieval choice.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL retrieval and knowledge graphs: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] SQL retrieval and knowledge graphs: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **SQL retrieval and knowledge graphs:** Index the project’s records and notes with source IDs and permission metadata.  For SQL retrieval and knowledge graphs, explicitly apply SQL retrieval, Knowledge graphs, Retrieval choice.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SQL retrieval and knowledge graphs: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] SQL retrieval and knowledge graphs: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Retrieval systems in detail

<a id="rag-chunking-experiments"></a>

### Chunk boundaries, document identity and ingestion updates

Make retrieval reproducible when documents are parsed, edited, deleted or ingested more than once.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [Document parsing, chunking and metadata](rag.md#rag-ingestion) Navigation is unrestricted.

#### Concepts

- [ ] **Parsing fidelity:** A parser may lose reading order, tables or headings; inspect extracted text before embedding it.
  - Example: Create a two-column text fixture and detect whether its extracted sentence order is sensible.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on parsing fidelity. Then reproduce the lesson example: Create a two-column text fixture and detect whether its extracted sentence order is sensible.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Chunk boundaries and overlap:** Chunk size and overlap trade context continuity against duplication and retrieval cost; compare choices on actual questions.
  - Example: Split the same document by fixed length and headings and inspect which method keeps a definition with its conditions.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on chunk boundaries and overlap. Then reproduce the lesson example: Split the same document by fixed length and headings and inspect which method keeps a definition with its conditions.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Stable document and chunk IDs:** Identity should distinguish a logical document from one version and its chunks, allowing updates without orphaning records.
  - Example: Use a document ID plus version/content hash and deterministic chunk positions.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on stable document and chunk ids. Then reproduce the lesson example: Use a document ID plus version/content hash and deterministic chunk positions.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Upserts and deletions:** A repeated ingestion should not duplicate unchanged content, while a new version should replace outdated chunks and remove stale ones.
  - Example: Ingest one document twice, then edit it and verify no previous-version chunks remain searchable.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on upserts and deletions. Then reproduce the lesson example: Ingest one document twice, then edit it and verify no previous-version chunks remain searchable.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Metadata and access filters:** Store provenance, timestamps and access scope so retrieval can enforce the same permissions as source data.
  - Example: Index two users' notes and assert a query with one user's filter never returns the other user's chunks.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on metadata and access filters. Then reproduce the lesson example: Index two users' notes and assert a query with one user's filter never returns the other user's chunks.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/

#### YouTube: focused explanations and full courses

- [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
  - Explains: Ingestion, retrieval and techniques for grounding model answers.
  - Useful because: Follow the pipeline, then test chunking and retrieval separately.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
  - Explains: NumPy, pandas, cleaning and exploring data with Python.
  - Useful because: Work through real data transformations before building training pipelines.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/

#### Free written resources

1. [Hugging Face: advanced RAG](https://huggingface.co/learn/cookbook/advanced_rag) — Free; no registration required. No paid materials required.
2. [Python: hashlib content hashes](https://docs.python.org/3/library/hashlib.html) — Free; no registration required. No paid materials required.

#### Lab: Chunk boundaries, document identity and ingestion updates

Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Chunk boundaries, document identity and ingestion updates:** Index the project’s records and notes with source IDs and permission metadata.  For Chunk boundaries, document identity and ingestion updates, explicitly apply Parsing fidelity, Chunk boundaries and overlap, Stable document and chunk IDs.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Chunk boundaries, document identity and ingestion updates: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Chunk boundaries, document identity and ingestion updates: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Chunk boundaries, document identity and ingestion updates:** Index the project’s records and notes with source IDs and permission metadata.  For Chunk boundaries, document identity and ingestion updates, explicitly apply Parsing fidelity, Chunk boundaries and overlap, Stable document and chunk IDs.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Chunk boundaries, document identity and ingestion updates: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Chunk boundaries, document identity and ingestion updates: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Chunk boundaries, document identity and ingestion updates:** Index the project’s records and notes with source IDs and permission metadata.  For Chunk boundaries, document identity and ingestion updates, explicitly apply Parsing fidelity, Chunk boundaries and overlap, Stable document and chunk IDs.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Chunk boundaries, document identity and ingestion updates: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Chunk boundaries, document identity and ingestion updates: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Chunk boundaries, document identity and ingestion updates:** Index the project’s records and notes with source IDs and permission metadata.  For Chunk boundaries, document identity and ingestion updates, explicitly apply Parsing fidelity, Chunk boundaries and overlap, Stable document and chunk IDs.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Chunk boundaries, document identity and ingestion updates: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Chunk boundaries, document identity and ingestion updates: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Chunk boundaries, document identity and ingestion updates:** Index the project’s records and notes with source IDs and permission metadata.  For Chunk boundaries, document identity and ingestion updates, explicitly apply Parsing fidelity, Chunk boundaries and overlap, Stable document and chunk IDs.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Chunk boundaries, document identity and ingestion updates: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Chunk boundaries, document identity and ingestion updates: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Chunk boundaries, document identity and ingestion updates:** Index the project’s records and notes with source IDs and permission metadata.  For Chunk boundaries, document identity and ingestion updates, explicitly apply Parsing fidelity, Chunk boundaries and overlap, Stable document and chunk IDs.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Chunk boundaries, document identity and ingestion updates: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Chunk boundaries, document identity and ingestion updates: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Chunk boundaries, document identity and ingestion updates:** Index the project’s records and notes with source IDs and permission metadata.  For Chunk boundaries, document identity and ingestion updates, explicitly apply Parsing fidelity, Chunk boundaries and overlap, Stable document and chunk IDs.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Chunk boundaries, document identity and ingestion updates: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Chunk boundaries, document identity and ingestion updates: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Chunk boundaries, document identity and ingestion updates:** Index the project’s records and notes with source IDs and permission metadata.  For Chunk boundaries, document identity and ingestion updates, explicitly apply Parsing fidelity, Chunk boundaries and overlap, Stable document and chunk IDs.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Chunk boundaries, document identity and ingestion updates: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Chunk boundaries, document identity and ingestion updates: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Chunk boundaries, document identity and ingestion updates:** Index the project’s records and notes with source IDs and permission metadata.  For Chunk boundaries, document identity and ingestion updates, explicitly apply Parsing fidelity, Chunk boundaries and overlap, Stable document and chunk IDs.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Chunk boundaries, document identity and ingestion updates: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Chunk boundaries, document identity and ingestion updates: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Chunk boundaries, document identity and ingestion updates:** Index the project’s records and notes with source IDs and permission metadata.  For Chunk boundaries, document identity and ingestion updates, explicitly apply Parsing fidelity, Chunk boundaries and overlap, Stable document and chunk IDs.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Chunk boundaries, document identity and ingestion updates: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Chunk boundaries, document identity and ingestion updates: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="rag-hybrid-reranking"></a>

### BM25-style retrieval, vector fusion and reranking evaluation

Measure which retrieval stage improves relevance rather than assuming that adding a reranker always helps.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [Lexical, semantic and hybrid retrieval; filters and reranking](rag.md#rag-retrieval) Navigation is unrestricted.

#### Concepts

- [ ] **Lexical versus semantic signals:** Lexical matching preserves exact names and identifiers while embedding similarity can connect paraphrases.
  - Example: Compare queries for an exact error code and a paraphrased policy question over the same small corpus.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on lexical versus semantic signals. Then reproduce the lesson example: Compare queries for an exact error code and a paraphrased policy question over the same small corpus.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Score-scale mismatch:** Lexical and vector scores have different scales; adding their raw numbers may create arbitrary rankings.
  - Example: Multiply one retriever's scores by 100 and observe how naive score addition changes the result.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on score-scale mismatch. Then reproduce the lesson example: Multiply one retriever's scores by 100 and observe how naive score addition changes the result.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Reciprocal rank fusion:** Rank fusion combines ranked lists using reciprocal rank contributions with a chosen stabilising constant.
  - Example: Fuse two five-document lists and show how a document present in both lists gains support.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on reciprocal rank fusion. Then reproduce the lesson example: Fuse two five-document lists and show how a document present in both lists gains support.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Cross-encoder reranking:** A reranker scores query-document pairs jointly and usually runs after a cheaper candidate retriever.
  - Example: Rerank only the best ten candidates and compare with scoring every document using a recorded score fixture.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on cross-encoder reranking. Then reproduce the lesson example: Rerank only the best ten candidates and compare with scoring every document using a recorded score fixture.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Stage-by-stage metrics:** Measure candidate recall before reranking and ranking quality after it, alongside latency and cost.
  - Example: Report recall@10 and reciprocal rank@3 on ten hand-labelled queries before and after fusion/reranking.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on stage-by-stage metrics. Then reproduce the lesson example: Report recall@10 and reciprocal rank@3 on ten hand-labelled queries before and after fusion/reranking.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/

#### YouTube: focused explanations and full courses

- [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
  - Explains: Ingestion, retrieval and techniques for grounding model answers.
  - Useful because: Follow the pipeline, then test chunking and retrieval separately.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [Neural Networks Part 11: Word Embedding and Word2Vec](https://www.youtube.com/watch?v=viZrOnJclY0) · StatQuest · Josh Starmer · Focused explanation
  - Explains: A visual, step-by-step explanation of the topic named in the title.
  - Useful because: Use the worked intuition before writing the corresponding small experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://statquest.org/video_index.html

#### Free written resources

1. [Hugging Face: advanced RAG and reranking](https://huggingface.co/learn/cookbook/advanced_rag) — Free; no registration required. No paid materials required.
2. [Sentence Transformers: retrieve and rerank](https://sbert.net/examples/sentence_transformer/applications/retrieve_rerank/README.html) — Free; no registration required. No paid materials required.

#### Lab: BM25-style retrieval, vector fusion and reranking evaluation

Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **BM25-style retrieval, vector fusion and reranking evaluation:** Index the project’s records and notes with source IDs and permission metadata.  For BM25-style retrieval, vector fusion and reranking evaluation, explicitly apply Lexical versus semantic signals, Score-scale mismatch, Reciprocal rank fusion.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **BM25-style retrieval, vector fusion and reranking evaluation:** Index the project’s records and notes with source IDs and permission metadata.  For BM25-style retrieval, vector fusion and reranking evaluation, explicitly apply Lexical versus semantic signals, Score-scale mismatch, Reciprocal rank fusion.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **BM25-style retrieval, vector fusion and reranking evaluation:** Index the project’s records and notes with source IDs and permission metadata.  For BM25-style retrieval, vector fusion and reranking evaluation, explicitly apply Lexical versus semantic signals, Score-scale mismatch, Reciprocal rank fusion.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **BM25-style retrieval, vector fusion and reranking evaluation:** Index the project’s records and notes with source IDs and permission metadata.  For BM25-style retrieval, vector fusion and reranking evaluation, explicitly apply Lexical versus semantic signals, Score-scale mismatch, Reciprocal rank fusion.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **BM25-style retrieval, vector fusion and reranking evaluation:** Index the project’s records and notes with source IDs and permission metadata.  For BM25-style retrieval, vector fusion and reranking evaluation, explicitly apply Lexical versus semantic signals, Score-scale mismatch, Reciprocal rank fusion.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **BM25-style retrieval, vector fusion and reranking evaluation:** Index the project’s records and notes with source IDs and permission metadata.  For BM25-style retrieval, vector fusion and reranking evaluation, explicitly apply Lexical versus semantic signals, Score-scale mismatch, Reciprocal rank fusion.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **BM25-style retrieval, vector fusion and reranking evaluation:** Index the project’s records and notes with source IDs and permission metadata.  For BM25-style retrieval, vector fusion and reranking evaluation, explicitly apply Lexical versus semantic signals, Score-scale mismatch, Reciprocal rank fusion.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **BM25-style retrieval, vector fusion and reranking evaluation:** Index the project’s records and notes with source IDs and permission metadata.  For BM25-style retrieval, vector fusion and reranking evaluation, explicitly apply Lexical versus semantic signals, Score-scale mismatch, Reciprocal rank fusion.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **BM25-style retrieval, vector fusion and reranking evaluation:** Index the project’s records and notes with source IDs and permission metadata.  For BM25-style retrieval, vector fusion and reranking evaluation, explicitly apply Lexical versus semantic signals, Score-scale mismatch, Reciprocal rank fusion.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **BM25-style retrieval, vector fusion and reranking evaluation:** Index the project’s records and notes with source IDs and permission metadata.  For BM25-style retrieval, vector fusion and reranking evaluation, explicitly apply Lexical versus semantic signals, Score-scale mismatch, Reciprocal rank fusion.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="rag-citations-abstention"></a>

### Evidence selection, citation validation and abstention

Make grounded answers traceable and explicitly handle questions whose evidence is missing or conflicting.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [Grounded generation, citations and retrieval evaluation](rag.md#rag-answers) Navigation is unrestricted.

#### Concepts

- [ ] **Evidence budget:** Select evidence within a token budget while preserving useful passages and source identity rather than truncating arbitrary text.
  - Example: Pack three passages into a toy budget and keep the quoted span beside its document ID.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on evidence budget. Then reproduce the lesson example: Pack three passages into a toy budget and keep the quoted span beside its document ID.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Claim-level support:** One citation attached to a whole paragraph does not automatically support every claim inside it.
  - Example: Break a generated answer into two factual claims and map each to the passage that actually supports it.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on claim-level support. Then reproduce the lesson example: Break a generated answer into two factual claims and map each to the passage that actually supports it.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Citation validity versus faithfulness:** A source ID can exist while its content fails to support an answer; both checks are needed.
  - Example: Create a response citing a real but irrelevant source and show why ID validation alone passes incorrectly.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on citation validity versus faithfulness. Then reproduce the lesson example: Create a response citing a real but irrelevant source and show why ID validation alone passes incorrectly.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Conflicting or stale evidence:** A retrieved corpus may contain several versions or contradictory statements; preserve dates and surface unresolved conflicts.
  - Example: Retrieve two dated policy fixtures and report the newer rule with its version rather than merging them silently.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on conflicting or stale evidence. Then reproduce the lesson example: Retrieve two dated policy fixtures and report the newer rule with its version rather than merging them silently.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Abstention and escalation:** A system needs an explicit path when evidence is missing, insufficient or forbidden; a confident unsupported answer is not a successful completion.
  - Example: Include out-of-corpus questions and verify a deterministic insufficient-evidence response.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on abstention and escalation. Then reproduce the lesson example: Include out-of-corpus questions and verify a deterministic insufficient-evidence response.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/

#### YouTube: focused explanations and full courses

- [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
  - Explains: Ingestion, retrieval and techniques for grounding model answers.
  - Useful because: Follow the pipeline, then test chunking and retrieval separately.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
  - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
  - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8

#### Free written resources

1. [Hugging Face: RAG evaluation](https://huggingface.co/learn/cookbook/rag_evaluation) — Free; no registration required. No paid materials required.
2. [Google PAIR: explainability and trust](https://pair.withgoogle.com/guidebook/chapters/explainability-trust/) — Free; no registration required. No paid materials required.

#### Lab: Evidence selection, citation validation and abstention

Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Evidence selection, citation validation and abstention:** Index the project’s records and notes with source IDs and permission metadata.  For Evidence selection, citation validation and abstention, explicitly apply Evidence budget, Claim-level support, Citation validity versus faithfulness.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Evidence selection, citation validation and abstention: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Evidence selection, citation validation and abstention: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Evidence selection, citation validation and abstention:** Index the project’s records and notes with source IDs and permission metadata.  For Evidence selection, citation validation and abstention, explicitly apply Evidence budget, Claim-level support, Citation validity versus faithfulness.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Evidence selection, citation validation and abstention: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Evidence selection, citation validation and abstention: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Evidence selection, citation validation and abstention:** Index the project’s records and notes with source IDs and permission metadata.  For Evidence selection, citation validation and abstention, explicitly apply Evidence budget, Claim-level support, Citation validity versus faithfulness.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Evidence selection, citation validation and abstention: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Evidence selection, citation validation and abstention: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Evidence selection, citation validation and abstention:** Index the project’s records and notes with source IDs and permission metadata.  For Evidence selection, citation validation and abstention, explicitly apply Evidence budget, Claim-level support, Citation validity versus faithfulness.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Evidence selection, citation validation and abstention: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Evidence selection, citation validation and abstention: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Evidence selection, citation validation and abstention:** Index the project’s records and notes with source IDs and permission metadata.  For Evidence selection, citation validation and abstention, explicitly apply Evidence budget, Claim-level support, Citation validity versus faithfulness.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Evidence selection, citation validation and abstention: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Evidence selection, citation validation and abstention: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Evidence selection, citation validation and abstention:** Index the project’s records and notes with source IDs and permission metadata.  For Evidence selection, citation validation and abstention, explicitly apply Evidence budget, Claim-level support, Citation validity versus faithfulness.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Evidence selection, citation validation and abstention: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Evidence selection, citation validation and abstention: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Evidence selection, citation validation and abstention:** Index the project’s records and notes with source IDs and permission metadata.  For Evidence selection, citation validation and abstention, explicitly apply Evidence budget, Claim-level support, Citation validity versus faithfulness.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Evidence selection, citation validation and abstention: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Evidence selection, citation validation and abstention: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Evidence selection, citation validation and abstention:** Index the project’s records and notes with source IDs and permission metadata.  For Evidence selection, citation validation and abstention, explicitly apply Evidence budget, Claim-level support, Citation validity versus faithfulness.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Evidence selection, citation validation and abstention: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Evidence selection, citation validation and abstention: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Evidence selection, citation validation and abstention:** Index the project’s records and notes with source IDs and permission metadata.  For Evidence selection, citation validation and abstention, explicitly apply Evidence budget, Claim-level support, Citation validity versus faithfulness.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Evidence selection, citation validation and abstention: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Evidence selection, citation validation and abstention: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Evidence selection, citation validation and abstention:** Index the project’s records and notes with source IDs and permission metadata.  For Evidence selection, citation validation and abstention, explicitly apply Evidence budget, Claim-level support, Citation validity versus faithfulness.
  - Deliverable: A local retrieval index, twenty query fixtures and grounded answers
  - Check: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Evidence selection, citation validation and abstention: A local retrieval index, twenty query fixtures and grounded answers
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Evidence selection, citation validation and abstention: Compare lexical/vector retrieval and evaluate citations with labeled queries. Adapt the lesson lab: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

