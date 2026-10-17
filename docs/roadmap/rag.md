# Retrieval and RAG

Connect answers to maintained evidence and evaluate retrieval independently.

## AI Engineering · Step 8 of 13

**Goal:** Retrieve useful evidence and connect answers to traceable sources.

**Stage checkpoint:** Build a document search pipeline with chunking, hybrid retrieval, citations and retrieval measurements.

Retrieve evidence, preserve citations and abstain when reliable support is missing.

Follow the modules and lessons below at your pace. Finish each exercise, save your evidence and self-assessment, then continue. Completed and Already known count as completed; Skipped is reported separately. You can move ahead at any time.

[Full pipeline](../PIPELINE.md) · [Next step: Evaluation and security](eval-security.md)

## Ingestion and search

<a id="rag-ingestion"></a>

### Document parsing, chunking and metadata

Preserve source identity and useful boundaries when preparing knowledge.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

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

### Incremental document index

A librarian needs updated documents without stale duplicate chunks.

**Data:** Create 20 versioned local documents with additions and deletions. Use a fixed seed and keep evaluation cases separate.

**Output:** An idempotent ingestion and deletion workflow.

**Effort:** 10h · Beginner → intermediate

- **Document parsing, chunking and metadata:** Implement Document parsing, chunking and metadata in Incremental document index. Adapt this focused lab to the project data: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.  Required concepts: Parsing, Chunking, Metadata and refresh.
  - Deliverable: Document parsing, chunking and metadata: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An idempotent ingestion and deletion workflow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Document parsing, chunking and metadata: Document parsing, chunking and metadata: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Re-ingest twice, delete a source and prove its chunks disappear.
- [ ] Document parsing, chunking and metadata: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Chunking experiment arena

A builder needs evidence for choosing chunk size and overlap.

**Data:** Write six documents with headings, lists and answers crossing boundaries. Use a fixed seed and keep evaluation cases separate.

**Output:** A chunking benchmark and source-offset viewer.

**Effort:** 10h · Beginner → intermediate

- **Document parsing, chunking and metadata:** Extend the project with Document parsing, chunking and metadata in Chunking experiment arena. Adapt this focused lab to the project data: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.  Required concepts: Parsing, Chunking, Metadata and refresh.
  - Deliverable: Document parsing, chunking and metadata: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chunking benchmark and source-offset viewer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Document parsing, chunking and metadata: Document parsing, chunking and metadata: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare retrieval on identical queries and preserve exact source spans.
- [ ] Document parsing, chunking and metadata: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Citation integrity checker

A reviewer needs to catch answers citing the wrong source.

**Data:** Write 30 claims, source passages and deliberately incorrect citations. Use a fixed seed and keep evaluation cases separate.

**Output:** A citation validation report and abstention interface.

**Effort:** 10h · Beginner → intermediate

- **Document parsing, chunking and metadata:** Extend the project with Document parsing, chunking and metadata in Citation integrity checker. Adapt this focused lab to the project data: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.  Required concepts: Parsing, Chunking, Metadata and refresh.
  - Deliverable: Document parsing, chunking and metadata: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A citation validation report and abstention interface. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Document parsing, chunking and metadata: Document parsing, chunking and metadata: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Flag missing IDs and unsupported spans; do not equate a valid link with support.
- [ ] Document parsing, chunking and metadata: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Embedding retrieval scorecard

A builder needs to choose representations for a small corpus.

**Data:** Use local notes and labeled paraphrases; TF-IDF is the offline baseline. Use a fixed seed and keep evaluation cases separate.

**Output:** A representation comparison with dimension and latency reports.

**Effort:** 10h · Beginner → intermediate

- **Document parsing, chunking and metadata:** Extend the project with Document parsing, chunking and metadata in Embedding retrieval scorecard. Adapt this focused lab to the project data: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.  Required concepts: Parsing, Chunking, Metadata and refresh.
  - Deliverable: Document parsing, chunking and metadata: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A representation comparison with dimension and latency reports. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Document parsing, chunking and metadata: Document parsing, chunking and metadata: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep evaluation queries separate and identify model download requirements.
- [ ] Document parsing, chunking and metadata: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Concept relationship explorer

A learner needs to navigate relationships between study notes.

**Data:** Author 25 concepts and 40 typed relationships in JSON. Use a fixed seed and keep evaluation cases separate.

**Output:** A graph traversal and provenance viewer.

**Effort:** 10h · Beginner → intermediate

- **Document parsing, chunking and metadata:** Extend the project with Document parsing, chunking and metadata in Concept relationship explorer. Adapt this focused lab to the project data: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.  Required concepts: Parsing, Chunking, Metadata and refresh.
  - Deliverable: Document parsing, chunking and metadata: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A graph traversal and provenance viewer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Document parsing, chunking and metadata: Document parsing, chunking and metadata: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Handle cycles and distinguish authored edges from inferred hypotheses.
- [ ] Document parsing, chunking and metadata: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Hybrid retrieval benchmark

An analyst needs both exact-code and paraphrase retrieval.

**Data:** Generate 80 catalog entries with product codes and prose descriptions. Use a fixed seed and keep evaluation cases separate.

**Output:** A lexical/vector fusion and reranking comparison.

**Effort:** 10h · Beginner → intermediate

- **Document parsing, chunking and metadata:** Extend the project with Document parsing, chunking and metadata in Hybrid retrieval benchmark. Adapt this focused lab to the project data: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.  Required concepts: Parsing, Chunking, Metadata and refresh.
  - Deliverable: Document parsing, chunking and metadata: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A lexical/vector fusion and reranking comparison. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Document parsing, chunking and metadata: Document parsing, chunking and metadata: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Measure exact-code and paraphrase slices separately.
- [ ] Document parsing, chunking and metadata: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Personal notes retrieval desk

A student needs answers traceable to their own notes.

**Data:** Create ten Markdown notes and 20 query/relevance judgments. Use a fixed seed and keep evaluation cases separate.

**Output:** A local search interface with passage IDs and citations.

**Effort:** 10h · Beginner → intermediate

- **Document parsing, chunking and metadata:** Extend the project with Document parsing, chunking and metadata in Personal notes retrieval desk. Adapt this focused lab to the project data: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.  Required concepts: Parsing, Chunking, Metadata and refresh.
  - Deliverable: Document parsing, chunking and metadata: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local search interface with passage IDs and citations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Document parsing, chunking and metadata: Document parsing, chunking and metadata: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report recall at five and refuse unsupported answers.
- [ ] Document parsing, chunking and metadata: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Permission-aware team search

A team needs retrieval that respects document access rights.

**Data:** Generate three fictional roles and 30 access-labeled documents. Use a fixed seed and keep evaluation cases separate.

**Output:** A retrieval filter and adversarial permission test set.

**Effort:** 10h · Beginner → intermediate

- **Document parsing, chunking and metadata:** Extend the project with Document parsing, chunking and metadata in Permission-aware team search. Adapt this focused lab to the project data: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.  Required concepts: Parsing, Chunking, Metadata and refresh.
  - Deliverable: Document parsing, chunking and metadata: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A retrieval filter and adversarial permission test set. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Document parsing, chunking and metadata: Document parsing, chunking and metadata: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Unauthorized passages never enter the retrieved context.
- [ ] Document parsing, chunking and metadata: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Retrieval failure diagnosis bench

A maintainer needs to separate retrieval and answer failures.

**Data:** Write 25 questions including missing evidence and conflicting passages. Use a fixed seed and keep evaluation cases separate.

**Output:** A retrieval/answer error taxonomy and regression report.

**Effort:** 10h · Beginner → intermediate

- **Document parsing, chunking and metadata:** Extend the project with Document parsing, chunking and metadata in Retrieval failure diagnosis bench. Adapt this focused lab to the project data: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.  Required concepts: Parsing, Chunking, Metadata and refresh.
  - Deliverable: Document parsing, chunking and metadata: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A retrieval/answer error taxonomy and regression report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Document parsing, chunking and metadata: Document parsing, chunking and metadata: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Measure retrieval recall separately from answer faithfulness.
- [ ] Document parsing, chunking and metadata: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Read-only SQL evidence assistant

An analyst needs answers grounded in tabular records.

**Data:** Use a local SQLite database of fictional orders and customers. Use a fixed seed and keep evaluation cases separate.

**Output:** A whitelisted query workflow with rows cited as evidence.

**Effort:** 10h · Beginner → intermediate

- **Document parsing, chunking and metadata:** Extend the project with Document parsing, chunking and metadata in Read-only SQL evidence assistant. Adapt this focused lab to the project data: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.  Required concepts: Parsing, Chunking, Metadata and refresh.
  - Deliverable: Document parsing, chunking and metadata: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A whitelisted query workflow with rows cited as evidence. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Document parsing, chunking and metadata: Document parsing, chunking and metadata: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject writes, bound row counts and verify join totals.
- [ ] Document parsing, chunking and metadata: Index ten local Markdown documents with heading-aware chunks, stable source IDs and versions; edit one document and prove old chunks disappear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="rag-embeddings"></a>

### Embeddings, similarity, indexes and vector databases

Choose representations and retrieval storage based on measured relevance.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

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

### Embedding retrieval scorecard

A builder needs to choose representations for a small corpus.

**Data:** Use local notes and labeled paraphrases; TF-IDF is the offline baseline. Use a fixed seed and keep evaluation cases separate.

**Output:** A representation comparison with dimension and latency reports.

**Effort:** 10h · Beginner → intermediate

- **Embeddings, similarity, indexes and vector databases:** Implement Embeddings, similarity, indexes and vector databases in Embedding retrieval scorecard. Adapt this focused lab to the project data: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.  Required concepts: Embedding selection, Similarity and indexing, Vector stores.
  - Deliverable: Embeddings, similarity, indexes and vector databases: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A representation comparison with dimension and latency reports. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Embeddings, similarity, indexes and vector databases: Embeddings, similarity, indexes and vector databases: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep evaluation queries separate and identify model download requirements.
- [ ] Embeddings, similarity, indexes and vector databases: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Vector lookup service

A search builder needs predictable similarity queries and filters.

**Data:** Generate 100 normalized vectors with source and role metadata. Use a fixed seed and keep evaluation cases separate.

**Output:** A local vector search API and metadata filter tests.

**Effort:** 10h · Beginner → intermediate

- **Embeddings, similarity, indexes and vector databases:** Implement Embeddings, similarity, indexes and vector databases in Vector lookup service. Adapt this focused lab to the project data: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.  Required concepts: Embedding selection, Similarity and indexing, Vector stores.
  - Deliverable: Embeddings, similarity, indexes and vector databases: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local vector search API and metadata filter tests. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Embeddings, similarity, indexes and vector databases: Embeddings, similarity, indexes and vector databases: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare with brute-force scores and reject unauthorized IDs.
- [ ] Embeddings, similarity, indexes and vector databases: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Chunking experiment arena

A builder needs evidence for choosing chunk size and overlap.

**Data:** Write six documents with headings, lists and answers crossing boundaries. Use a fixed seed and keep evaluation cases separate.

**Output:** A chunking benchmark and source-offset viewer.

**Effort:** 10h · Beginner → intermediate

- **Embeddings, similarity, indexes and vector databases:** Extend the project with Embeddings, similarity, indexes and vector databases in Chunking experiment arena. Adapt this focused lab to the project data: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.  Required concepts: Embedding selection, Similarity and indexing, Vector stores.
  - Deliverable: Embeddings, similarity, indexes and vector databases: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chunking benchmark and source-offset viewer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Embeddings, similarity, indexes and vector databases: Embeddings, similarity, indexes and vector databases: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare retrieval on identical queries and preserve exact source spans.
- [ ] Embeddings, similarity, indexes and vector databases: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Citation integrity checker

A reviewer needs to catch answers citing the wrong source.

**Data:** Write 30 claims, source passages and deliberately incorrect citations. Use a fixed seed and keep evaluation cases separate.

**Output:** A citation validation report and abstention interface.

**Effort:** 10h · Beginner → intermediate

- **Embeddings, similarity, indexes and vector databases:** Extend the project with Embeddings, similarity, indexes and vector databases in Citation integrity checker. Adapt this focused lab to the project data: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.  Required concepts: Embedding selection, Similarity and indexing, Vector stores.
  - Deliverable: Embeddings, similarity, indexes and vector databases: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A citation validation report and abstention interface. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Embeddings, similarity, indexes and vector databases: Embeddings, similarity, indexes and vector databases: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Flag missing IDs and unsupported spans; do not equate a valid link with support.
- [ ] Embeddings, similarity, indexes and vector databases: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Concept relationship explorer

A learner needs to navigate relationships between study notes.

**Data:** Author 25 concepts and 40 typed relationships in JSON. Use a fixed seed and keep evaluation cases separate.

**Output:** A graph traversal and provenance viewer.

**Effort:** 10h · Beginner → intermediate

- **Embeddings, similarity, indexes and vector databases:** Extend the project with Embeddings, similarity, indexes and vector databases in Concept relationship explorer. Adapt this focused lab to the project data: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.  Required concepts: Embedding selection, Similarity and indexing, Vector stores.
  - Deliverable: Embeddings, similarity, indexes and vector databases: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A graph traversal and provenance viewer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Embeddings, similarity, indexes and vector databases: Embeddings, similarity, indexes and vector databases: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Handle cycles and distinguish authored edges from inferred hypotheses.
- [ ] Embeddings, similarity, indexes and vector databases: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Hybrid retrieval benchmark

An analyst needs both exact-code and paraphrase retrieval.

**Data:** Generate 80 catalog entries with product codes and prose descriptions. Use a fixed seed and keep evaluation cases separate.

**Output:** A lexical/vector fusion and reranking comparison.

**Effort:** 10h · Beginner → intermediate

- **Embeddings, similarity, indexes and vector databases:** Extend the project with Embeddings, similarity, indexes and vector databases in Hybrid retrieval benchmark. Adapt this focused lab to the project data: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.  Required concepts: Embedding selection, Similarity and indexing, Vector stores.
  - Deliverable: Embeddings, similarity, indexes and vector databases: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A lexical/vector fusion and reranking comparison. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Embeddings, similarity, indexes and vector databases: Embeddings, similarity, indexes and vector databases: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Measure exact-code and paraphrase slices separately.
- [ ] Embeddings, similarity, indexes and vector databases: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Incremental document index

A librarian needs updated documents without stale duplicate chunks.

**Data:** Create 20 versioned local documents with additions and deletions. Use a fixed seed and keep evaluation cases separate.

**Output:** An idempotent ingestion and deletion workflow.

**Effort:** 10h · Beginner → intermediate

- **Embeddings, similarity, indexes and vector databases:** Extend the project with Embeddings, similarity, indexes and vector databases in Incremental document index. Adapt this focused lab to the project data: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.  Required concepts: Embedding selection, Similarity and indexing, Vector stores.
  - Deliverable: Embeddings, similarity, indexes and vector databases: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An idempotent ingestion and deletion workflow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Embeddings, similarity, indexes and vector databases: Embeddings, similarity, indexes and vector databases: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Re-ingest twice, delete a source and prove its chunks disappear.
- [ ] Embeddings, similarity, indexes and vector databases: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Personal notes retrieval desk

A student needs answers traceable to their own notes.

**Data:** Create ten Markdown notes and 20 query/relevance judgments. Use a fixed seed and keep evaluation cases separate.

**Output:** A local search interface with passage IDs and citations.

**Effort:** 10h · Beginner → intermediate

- **Embeddings, similarity, indexes and vector databases:** Extend the project with Embeddings, similarity, indexes and vector databases in Personal notes retrieval desk. Adapt this focused lab to the project data: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.  Required concepts: Embedding selection, Similarity and indexing, Vector stores.
  - Deliverable: Embeddings, similarity, indexes and vector databases: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local search interface with passage IDs and citations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Embeddings, similarity, indexes and vector databases: Embeddings, similarity, indexes and vector databases: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report recall at five and refuse unsupported answers.
- [ ] Embeddings, similarity, indexes and vector databases: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Permission-aware team search

A team needs retrieval that respects document access rights.

**Data:** Generate three fictional roles and 30 access-labeled documents. Use a fixed seed and keep evaluation cases separate.

**Output:** A retrieval filter and adversarial permission test set.

**Effort:** 10h · Beginner → intermediate

- **Embeddings, similarity, indexes and vector databases:** Extend the project with Embeddings, similarity, indexes and vector databases in Permission-aware team search. Adapt this focused lab to the project data: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.  Required concepts: Embedding selection, Similarity and indexing, Vector stores.
  - Deliverable: Embeddings, similarity, indexes and vector databases: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A retrieval filter and adversarial permission test set. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Embeddings, similarity, indexes and vector databases: Embeddings, similarity, indexes and vector databases: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Unauthorized passages never enter the retrieved context.
- [ ] Embeddings, similarity, indexes and vector databases: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Retrieval failure diagnosis bench

A maintainer needs to separate retrieval and answer failures.

**Data:** Write 25 questions including missing evidence and conflicting passages. Use a fixed seed and keep evaluation cases separate.

**Output:** A retrieval/answer error taxonomy and regression report.

**Effort:** 10h · Beginner → intermediate

- **Embeddings, similarity, indexes and vector databases:** Extend the project with Embeddings, similarity, indexes and vector databases in Retrieval failure diagnosis bench. Adapt this focused lab to the project data: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.  Required concepts: Embedding selection, Similarity and indexing, Vector stores.
  - Deliverable: Embeddings, similarity, indexes and vector databases: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A retrieval/answer error taxonomy and regression report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Embeddings, similarity, indexes and vector databases: Embeddings, similarity, indexes and vector databases: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Measure retrieval recall separately from answer faithfulness.
- [ ] Embeddings, similarity, indexes and vector databases: Build a CPU-friendly TF-IDF/cosine index as a lexical-vector baseline, label it clearly, and compare its ranking with optional local sentence embeddings.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="rag-retrieval"></a>

### Lexical, semantic and hybrid retrieval; filters and reranking

Recover relevant evidence while respecting permissions and improving result order.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

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

### Personal notes retrieval desk

A student needs answers traceable to their own notes.

**Data:** Create ten Markdown notes and 20 query/relevance judgments. Use a fixed seed and keep evaluation cases separate.

**Output:** A local search interface with passage IDs and citations.

**Effort:** 10h · Beginner → intermediate

- **Lexical, semantic and hybrid retrieval; filters and reranking:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Personal notes retrieval desk: A local search interface with passage IDs and citations. Focus: Hybrid search, Filters, Reranking.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local search interface with passage IDs and citations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Lexical, semantic and hybrid retrieval; filters and reranking: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report recall at five and refuse unsupported answers.
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Permission-aware team search

A team needs retrieval that respects document access rights.

**Data:** Generate three fictional roles and 30 access-labeled documents. Use a fixed seed and keep evaluation cases separate.

**Output:** A retrieval filter and adversarial permission test set.

**Effort:** 10h · Beginner → intermediate

- **Lexical, semantic and hybrid retrieval; filters and reranking:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Permission-aware team search: A retrieval filter and adversarial permission test set. Focus: Hybrid search, Filters, Reranking.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A retrieval filter and adversarial permission test set. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Lexical, semantic and hybrid retrieval; filters and reranking: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Unauthorized passages never enter the retrieved context.
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Chunking experiment arena

A builder needs evidence for choosing chunk size and overlap.

**Data:** Write six documents with headings, lists and answers crossing boundaries. Use a fixed seed and keep evaluation cases separate.

**Output:** A chunking benchmark and source-offset viewer.

**Effort:** 10h · Beginner → intermediate

- **Lexical, semantic and hybrid retrieval; filters and reranking:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Chunking experiment arena: A chunking benchmark and source-offset viewer. Focus: Hybrid search, Filters, Reranking.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chunking benchmark and source-offset viewer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Lexical, semantic and hybrid retrieval; filters and reranking: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare retrieval on identical queries and preserve exact source spans.
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Citation integrity checker

A reviewer needs to catch answers citing the wrong source.

**Data:** Write 30 claims, source passages and deliberately incorrect citations. Use a fixed seed and keep evaluation cases separate.

**Output:** A citation validation report and abstention interface.

**Effort:** 10h · Beginner → intermediate

- **Lexical, semantic and hybrid retrieval; filters and reranking:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Citation integrity checker: A citation validation report and abstention interface. Focus: Hybrid search, Filters, Reranking.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A citation validation report and abstention interface. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Lexical, semantic and hybrid retrieval; filters and reranking: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Flag missing IDs and unsupported spans; do not equate a valid link with support.
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Embedding retrieval scorecard

A builder needs to choose representations for a small corpus.

**Data:** Use local notes and labeled paraphrases; TF-IDF is the offline baseline. Use a fixed seed and keep evaluation cases separate.

**Output:** A representation comparison with dimension and latency reports.

**Effort:** 10h · Beginner → intermediate

- **Lexical, semantic and hybrid retrieval; filters and reranking:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Embedding retrieval scorecard: A representation comparison with dimension and latency reports. Focus: Hybrid search, Filters, Reranking.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A representation comparison with dimension and latency reports. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Lexical, semantic and hybrid retrieval; filters and reranking: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep evaluation queries separate and identify model download requirements.
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Concept relationship explorer

A learner needs to navigate relationships between study notes.

**Data:** Author 25 concepts and 40 typed relationships in JSON. Use a fixed seed and keep evaluation cases separate.

**Output:** A graph traversal and provenance viewer.

**Effort:** 10h · Beginner → intermediate

- **Lexical, semantic and hybrid retrieval; filters and reranking:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Concept relationship explorer: A graph traversal and provenance viewer. Focus: Hybrid search, Filters, Reranking.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A graph traversal and provenance viewer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Lexical, semantic and hybrid retrieval; filters and reranking: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Handle cycles and distinguish authored edges from inferred hypotheses.
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Hybrid retrieval benchmark

An analyst needs both exact-code and paraphrase retrieval.

**Data:** Generate 80 catalog entries with product codes and prose descriptions. Use a fixed seed and keep evaluation cases separate.

**Output:** A lexical/vector fusion and reranking comparison.

**Effort:** 10h · Beginner → intermediate

- **Lexical, semantic and hybrid retrieval; filters and reranking:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Hybrid retrieval benchmark: A lexical/vector fusion and reranking comparison. Focus: Hybrid search, Filters, Reranking.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A lexical/vector fusion and reranking comparison. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Lexical, semantic and hybrid retrieval; filters and reranking: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Measure exact-code and paraphrase slices separately.
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Incremental document index

A librarian needs updated documents without stale duplicate chunks.

**Data:** Create 20 versioned local documents with additions and deletions. Use a fixed seed and keep evaluation cases separate.

**Output:** An idempotent ingestion and deletion workflow.

**Effort:** 10h · Beginner → intermediate

- **Lexical, semantic and hybrid retrieval; filters and reranking:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Incremental document index: An idempotent ingestion and deletion workflow. Focus: Hybrid search, Filters, Reranking.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An idempotent ingestion and deletion workflow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Lexical, semantic and hybrid retrieval; filters and reranking: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Re-ingest twice, delete a source and prove its chunks disappear.
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Retrieval failure diagnosis bench

A maintainer needs to separate retrieval and answer failures.

**Data:** Write 25 questions including missing evidence and conflicting passages. Use a fixed seed and keep evaluation cases separate.

**Output:** A retrieval/answer error taxonomy and regression report.

**Effort:** 10h · Beginner → intermediate

- **Lexical, semantic and hybrid retrieval; filters and reranking:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Retrieval failure diagnosis bench: A retrieval/answer error taxonomy and regression report. Focus: Hybrid search, Filters, Reranking.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A retrieval/answer error taxonomy and regression report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Lexical, semantic and hybrid retrieval; filters and reranking: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Measure retrieval recall separately from answer faithfulness.
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Read-only SQL evidence assistant

An analyst needs answers grounded in tabular records.

**Data:** Use a local SQLite database of fictional orders and customers. Use a fixed seed and keep evaluation cases separate.

**Output:** A whitelisted query workflow with rows cited as evidence.

**Effort:** 10h · Beginner → intermediate

- **Lexical, semantic and hybrid retrieval; filters and reranking:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Read-only SQL evidence assistant: A whitelisted query workflow with rows cited as evidence. Focus: Hybrid search, Filters, Reranking.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A whitelisted query workflow with rows cited as evidence. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Lexical, semantic and hybrid retrieval; filters and reranking: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject writes, bound row counts and verify join totals.
- [ ] Lexical, semantic and hybrid retrieval; filters and reranking: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a hybrid retrieval fixture with keyword/vector ranks, reciprocal rank fusion, permission filters and a deterministic reranker; assert forbidden passages never appear.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Grounding and evaluation

<a id="rag-answers"></a>

### Grounded generation, citations and retrieval evaluation

Make source support testable and refuse unsupported answers.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

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

### Retrieval failure diagnosis bench

A maintainer needs to separate retrieval and answer failures.

**Data:** Write 25 questions including missing evidence and conflicting passages. Use a fixed seed and keep evaluation cases separate.

**Output:** A retrieval/answer error taxonomy and regression report.

**Effort:** 10h · Beginner → intermediate

- **Grounded generation, citations and retrieval evaluation:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Retrieval failure diagnosis bench: A retrieval/answer error taxonomy and regression report. Focus: Grounding, Citations, Retrieval metrics.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A retrieval/answer error taxonomy and regression report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Grounded generation, citations and retrieval evaluation: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Measure retrieval recall separately from answer faithfulness.
- [ ] Grounded generation, citations and retrieval evaluation: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Chunking experiment arena

A builder needs evidence for choosing chunk size and overlap.

**Data:** Write six documents with headings, lists and answers crossing boundaries. Use a fixed seed and keep evaluation cases separate.

**Output:** A chunking benchmark and source-offset viewer.

**Effort:** 10h · Beginner → intermediate

- **Grounded generation, citations and retrieval evaluation:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Chunking experiment arena: A chunking benchmark and source-offset viewer. Focus: Grounding, Citations, Retrieval metrics.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chunking benchmark and source-offset viewer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Grounded generation, citations and retrieval evaluation: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare retrieval on identical queries and preserve exact source spans.
- [ ] Grounded generation, citations and retrieval evaluation: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Citation integrity checker

A reviewer needs to catch answers citing the wrong source.

**Data:** Write 30 claims, source passages and deliberately incorrect citations. Use a fixed seed and keep evaluation cases separate.

**Output:** A citation validation report and abstention interface.

**Effort:** 10h · Beginner → intermediate

- **Grounded generation, citations and retrieval evaluation:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Citation integrity checker: A citation validation report and abstention interface. Focus: Grounding, Citations, Retrieval metrics.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A citation validation report and abstention interface. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Grounded generation, citations and retrieval evaluation: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Flag missing IDs and unsupported spans; do not equate a valid link with support.
- [ ] Grounded generation, citations and retrieval evaluation: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Embedding retrieval scorecard

A builder needs to choose representations for a small corpus.

**Data:** Use local notes and labeled paraphrases; TF-IDF is the offline baseline. Use a fixed seed and keep evaluation cases separate.

**Output:** A representation comparison with dimension and latency reports.

**Effort:** 10h · Beginner → intermediate

- **Grounded generation, citations and retrieval evaluation:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Embedding retrieval scorecard: A representation comparison with dimension and latency reports. Focus: Grounding, Citations, Retrieval metrics.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A representation comparison with dimension and latency reports. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Grounded generation, citations and retrieval evaluation: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep evaluation queries separate and identify model download requirements.
- [ ] Grounded generation, citations and retrieval evaluation: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Concept relationship explorer

A learner needs to navigate relationships between study notes.

**Data:** Author 25 concepts and 40 typed relationships in JSON. Use a fixed seed and keep evaluation cases separate.

**Output:** A graph traversal and provenance viewer.

**Effort:** 10h · Beginner → intermediate

- **Grounded generation, citations and retrieval evaluation:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Concept relationship explorer: A graph traversal and provenance viewer. Focus: Grounding, Citations, Retrieval metrics.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A graph traversal and provenance viewer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Grounded generation, citations and retrieval evaluation: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Handle cycles and distinguish authored edges from inferred hypotheses.
- [ ] Grounded generation, citations and retrieval evaluation: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Hybrid retrieval benchmark

An analyst needs both exact-code and paraphrase retrieval.

**Data:** Generate 80 catalog entries with product codes and prose descriptions. Use a fixed seed and keep evaluation cases separate.

**Output:** A lexical/vector fusion and reranking comparison.

**Effort:** 10h · Beginner → intermediate

- **Grounded generation, citations and retrieval evaluation:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Hybrid retrieval benchmark: A lexical/vector fusion and reranking comparison. Focus: Grounding, Citations, Retrieval metrics.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A lexical/vector fusion and reranking comparison. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Grounded generation, citations and retrieval evaluation: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Measure exact-code and paraphrase slices separately.
- [ ] Grounded generation, citations and retrieval evaluation: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Incremental document index

A librarian needs updated documents without stale duplicate chunks.

**Data:** Create 20 versioned local documents with additions and deletions. Use a fixed seed and keep evaluation cases separate.

**Output:** An idempotent ingestion and deletion workflow.

**Effort:** 10h · Beginner → intermediate

- **Grounded generation, citations and retrieval evaluation:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Incremental document index: An idempotent ingestion and deletion workflow. Focus: Grounding, Citations, Retrieval metrics.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An idempotent ingestion and deletion workflow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Grounded generation, citations and retrieval evaluation: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Re-ingest twice, delete a source and prove its chunks disappear.
- [ ] Grounded generation, citations and retrieval evaluation: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Personal notes retrieval desk

A student needs answers traceable to their own notes.

**Data:** Create ten Markdown notes and 20 query/relevance judgments. Use a fixed seed and keep evaluation cases separate.

**Output:** A local search interface with passage IDs and citations.

**Effort:** 10h · Beginner → intermediate

- **Grounded generation, citations and retrieval evaluation:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Personal notes retrieval desk: A local search interface with passage IDs and citations. Focus: Grounding, Citations, Retrieval metrics.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local search interface with passage IDs and citations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Grounded generation, citations and retrieval evaluation: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report recall at five and refuse unsupported answers.
- [ ] Grounded generation, citations and retrieval evaluation: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Permission-aware team search

A team needs retrieval that respects document access rights.

**Data:** Generate three fictional roles and 30 access-labeled documents. Use a fixed seed and keep evaluation cases separate.

**Output:** A retrieval filter and adversarial permission test set.

**Effort:** 10h · Beginner → intermediate

- **Grounded generation, citations and retrieval evaluation:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Permission-aware team search: A retrieval filter and adversarial permission test set. Focus: Grounding, Citations, Retrieval metrics.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A retrieval filter and adversarial permission test set. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Grounded generation, citations and retrieval evaluation: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Unauthorized passages never enter the retrieved context.
- [ ] Grounded generation, citations and retrieval evaluation: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Read-only SQL evidence assistant

An analyst needs answers grounded in tabular records.

**Data:** Use a local SQLite database of fictional orders and customers. Use a fixed seed and keep evaluation cases separate.

**Output:** A whitelisted query workflow with rows cited as evidence.

**Effort:** 10h · Beginner → intermediate

- **Grounded generation, citations and retrieval evaluation:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Read-only SQL evidence assistant: A whitelisted query workflow with rows cited as evidence. Focus: Grounding, Citations, Retrieval metrics.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A whitelisted query workflow with rows cited as evidence. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Grounded generation, citations and retrieval evaluation: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject writes, bound row counts and verify join totals.
- [ ] Grounded generation, citations and retrieval evaluation: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Build an extractive local Q&A system with citations and abstentions; evaluate twenty queries for retrieval recall and evidence-supported answers.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="rag-sql-graphs"></a>

### SQL retrieval and knowledge graphs

Use structured relationships when vector similarity alone cannot answer the question.

**Priority:** Specialization · **Study:** 2h · **Practice:** 3h

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

### Concept relationship explorer

A learner needs to navigate relationships between study notes.

**Data:** Author 25 concepts and 40 typed relationships in JSON. Use a fixed seed and keep evaluation cases separate.

**Output:** A graph traversal and provenance viewer.

**Effort:** 10h · Beginner → intermediate

- **SQL retrieval and knowledge graphs:** Implement SQL retrieval and knowledge graphs in Concept relationship explorer. Adapt this focused lab to the project data: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.  Required concepts: SQL retrieval, Knowledge graphs, Retrieval choice.
  - Deliverable: SQL retrieval and knowledge graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A graph traversal and provenance viewer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL retrieval and knowledge graphs: SQL retrieval and knowledge graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Handle cycles and distinguish authored edges from inferred hypotheses.
- [ ] SQL retrieval and knowledge graphs: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Read-only SQL evidence assistant

An analyst needs answers grounded in tabular records.

**Data:** Use a local SQLite database of fictional orders and customers. Use a fixed seed and keep evaluation cases separate.

**Output:** A whitelisted query workflow with rows cited as evidence.

**Effort:** 10h · Beginner → intermediate

- **SQL retrieval and knowledge graphs:** Implement SQL retrieval and knowledge graphs in Read-only SQL evidence assistant. Adapt this focused lab to the project data: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.  Required concepts: SQL retrieval, Knowledge graphs, Retrieval choice.
  - Deliverable: SQL retrieval and knowledge graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A whitelisted query workflow with rows cited as evidence. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL retrieval and knowledge graphs: SQL retrieval and knowledge graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject writes, bound row counts and verify join totals.
- [ ] SQL retrieval and knowledge graphs: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Chunking experiment arena

A builder needs evidence for choosing chunk size and overlap.

**Data:** Write six documents with headings, lists and answers crossing boundaries. Use a fixed seed and keep evaluation cases separate.

**Output:** A chunking benchmark and source-offset viewer.

**Effort:** 10h · Beginner → intermediate

- **SQL retrieval and knowledge graphs:** Extend the project with SQL retrieval and knowledge graphs in Chunking experiment arena. Adapt this focused lab to the project data: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.  Required concepts: SQL retrieval, Knowledge graphs, Retrieval choice.
  - Deliverable: SQL retrieval and knowledge graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chunking benchmark and source-offset viewer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL retrieval and knowledge graphs: SQL retrieval and knowledge graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare retrieval on identical queries and preserve exact source spans.
- [ ] SQL retrieval and knowledge graphs: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Citation integrity checker

A reviewer needs to catch answers citing the wrong source.

**Data:** Write 30 claims, source passages and deliberately incorrect citations. Use a fixed seed and keep evaluation cases separate.

**Output:** A citation validation report and abstention interface.

**Effort:** 10h · Beginner → intermediate

- **SQL retrieval and knowledge graphs:** Extend the project with SQL retrieval and knowledge graphs in Citation integrity checker. Adapt this focused lab to the project data: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.  Required concepts: SQL retrieval, Knowledge graphs, Retrieval choice.
  - Deliverable: SQL retrieval and knowledge graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A citation validation report and abstention interface. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL retrieval and knowledge graphs: SQL retrieval and knowledge graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Flag missing IDs and unsupported spans; do not equate a valid link with support.
- [ ] SQL retrieval and knowledge graphs: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Embedding retrieval scorecard

A builder needs to choose representations for a small corpus.

**Data:** Use local notes and labeled paraphrases; TF-IDF is the offline baseline. Use a fixed seed and keep evaluation cases separate.

**Output:** A representation comparison with dimension and latency reports.

**Effort:** 10h · Beginner → intermediate

- **SQL retrieval and knowledge graphs:** Extend the project with SQL retrieval and knowledge graphs in Embedding retrieval scorecard. Adapt this focused lab to the project data: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.  Required concepts: SQL retrieval, Knowledge graphs, Retrieval choice.
  - Deliverable: SQL retrieval and knowledge graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A representation comparison with dimension and latency reports. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL retrieval and knowledge graphs: SQL retrieval and knowledge graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep evaluation queries separate and identify model download requirements.
- [ ] SQL retrieval and knowledge graphs: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Hybrid retrieval benchmark

An analyst needs both exact-code and paraphrase retrieval.

**Data:** Generate 80 catalog entries with product codes and prose descriptions. Use a fixed seed and keep evaluation cases separate.

**Output:** A lexical/vector fusion and reranking comparison.

**Effort:** 10h · Beginner → intermediate

- **SQL retrieval and knowledge graphs:** Extend the project with SQL retrieval and knowledge graphs in Hybrid retrieval benchmark. Adapt this focused lab to the project data: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.  Required concepts: SQL retrieval, Knowledge graphs, Retrieval choice.
  - Deliverable: SQL retrieval and knowledge graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A lexical/vector fusion and reranking comparison. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL retrieval and knowledge graphs: SQL retrieval and knowledge graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Measure exact-code and paraphrase slices separately.
- [ ] SQL retrieval and knowledge graphs: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Incremental document index

A librarian needs updated documents without stale duplicate chunks.

**Data:** Create 20 versioned local documents with additions and deletions. Use a fixed seed and keep evaluation cases separate.

**Output:** An idempotent ingestion and deletion workflow.

**Effort:** 10h · Beginner → intermediate

- **SQL retrieval and knowledge graphs:** Extend the project with SQL retrieval and knowledge graphs in Incremental document index. Adapt this focused lab to the project data: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.  Required concepts: SQL retrieval, Knowledge graphs, Retrieval choice.
  - Deliverable: SQL retrieval and knowledge graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An idempotent ingestion and deletion workflow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL retrieval and knowledge graphs: SQL retrieval and knowledge graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Re-ingest twice, delete a source and prove its chunks disappear.
- [ ] SQL retrieval and knowledge graphs: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Personal notes retrieval desk

A student needs answers traceable to their own notes.

**Data:** Create ten Markdown notes and 20 query/relevance judgments. Use a fixed seed and keep evaluation cases separate.

**Output:** A local search interface with passage IDs and citations.

**Effort:** 10h · Beginner → intermediate

- **SQL retrieval and knowledge graphs:** Extend the project with SQL retrieval and knowledge graphs in Personal notes retrieval desk. Adapt this focused lab to the project data: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.  Required concepts: SQL retrieval, Knowledge graphs, Retrieval choice.
  - Deliverable: SQL retrieval and knowledge graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local search interface with passage IDs and citations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL retrieval and knowledge graphs: SQL retrieval and knowledge graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report recall at five and refuse unsupported answers.
- [ ] SQL retrieval and knowledge graphs: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Permission-aware team search

A team needs retrieval that respects document access rights.

**Data:** Generate three fictional roles and 30 access-labeled documents. Use a fixed seed and keep evaluation cases separate.

**Output:** A retrieval filter and adversarial permission test set.

**Effort:** 10h · Beginner → intermediate

- **SQL retrieval and knowledge graphs:** Extend the project with SQL retrieval and knowledge graphs in Permission-aware team search. Adapt this focused lab to the project data: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.  Required concepts: SQL retrieval, Knowledge graphs, Retrieval choice.
  - Deliverable: SQL retrieval and knowledge graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A retrieval filter and adversarial permission test set. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL retrieval and knowledge graphs: SQL retrieval and knowledge graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Unauthorized passages never enter the retrieved context.
- [ ] SQL retrieval and knowledge graphs: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Retrieval failure diagnosis bench

A maintainer needs to separate retrieval and answer failures.

**Data:** Write 25 questions including missing evidence and conflicting passages. Use a fixed seed and keep evaluation cases separate.

**Output:** A retrieval/answer error taxonomy and regression report.

**Effort:** 10h · Beginner → intermediate

- **SQL retrieval and knowledge graphs:** Extend the project with SQL retrieval and knowledge graphs in Retrieval failure diagnosis bench. Adapt this focused lab to the project data: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.  Required concepts: SQL retrieval, Knowledge graphs, Retrieval choice.
  - Deliverable: SQL retrieval and knowledge graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A retrieval/answer error taxonomy and regression report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL retrieval and knowledge graphs: SQL retrieval and knowledge graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Measure retrieval recall separately from answer faithfulness.
- [ ] SQL retrieval and knowledge graphs: Create a small SQLite database and an in-memory entity graph; route three question types to SQL, graph traversal or text retrieval and cite each result.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Retrieval systems in detail

<a id="rag-chunking-experiments"></a>

### Chunk boundaries, document identity and ingestion updates

Make retrieval reproducible when documents are parsed, edited, deleted or ingested more than once.

**Priority:** Essential · **Study:** 3h · **Practice:** 4h

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

### Chunking experiment arena

A builder needs evidence for choosing chunk size and overlap.

**Data:** Write six documents with headings, lists and answers crossing boundaries. Use a fixed seed and keep evaluation cases separate.

**Output:** A chunking benchmark and source-offset viewer.

**Effort:** 10h · Beginner → intermediate

- **Chunk boundaries, document identity and ingestion updates:** Implement Chunk boundaries, document identity and ingestion updates in Chunking experiment arena. Adapt this focused lab to the project data: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.  Required concepts: Parsing fidelity, Chunk boundaries and overlap, Stable document and chunk IDs, Upserts and deletions, Metadata and access filters.
  - Deliverable: Chunk boundaries, document identity and ingestion updates: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chunking benchmark and source-offset viewer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Chunk boundaries, document identity and ingestion updates: Chunk boundaries, document identity and ingestion updates: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare retrieval on identical queries and preserve exact source spans.
- [ ] Chunk boundaries, document identity and ingestion updates: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Citation integrity checker

A reviewer needs to catch answers citing the wrong source.

**Data:** Write 30 claims, source passages and deliberately incorrect citations. Use a fixed seed and keep evaluation cases separate.

**Output:** A citation validation report and abstention interface.

**Effort:** 10h · Beginner → intermediate

- **Chunk boundaries, document identity and ingestion updates:** Extend the project with Chunk boundaries, document identity and ingestion updates in Citation integrity checker. Adapt this focused lab to the project data: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.  Required concepts: Parsing fidelity, Chunk boundaries and overlap, Stable document and chunk IDs, Upserts and deletions, Metadata and access filters.
  - Deliverable: Chunk boundaries, document identity and ingestion updates: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A citation validation report and abstention interface. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Chunk boundaries, document identity and ingestion updates: Chunk boundaries, document identity and ingestion updates: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Flag missing IDs and unsupported spans; do not equate a valid link with support.
- [ ] Chunk boundaries, document identity and ingestion updates: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Embedding retrieval scorecard

A builder needs to choose representations for a small corpus.

**Data:** Use local notes and labeled paraphrases; TF-IDF is the offline baseline. Use a fixed seed and keep evaluation cases separate.

**Output:** A representation comparison with dimension and latency reports.

**Effort:** 10h · Beginner → intermediate

- **Chunk boundaries, document identity and ingestion updates:** Extend the project with Chunk boundaries, document identity and ingestion updates in Embedding retrieval scorecard. Adapt this focused lab to the project data: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.  Required concepts: Parsing fidelity, Chunk boundaries and overlap, Stable document and chunk IDs, Upserts and deletions, Metadata and access filters.
  - Deliverable: Chunk boundaries, document identity and ingestion updates: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A representation comparison with dimension and latency reports. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Chunk boundaries, document identity and ingestion updates: Chunk boundaries, document identity and ingestion updates: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep evaluation queries separate and identify model download requirements.
- [ ] Chunk boundaries, document identity and ingestion updates: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Concept relationship explorer

A learner needs to navigate relationships between study notes.

**Data:** Author 25 concepts and 40 typed relationships in JSON. Use a fixed seed and keep evaluation cases separate.

**Output:** A graph traversal and provenance viewer.

**Effort:** 10h · Beginner → intermediate

- **Chunk boundaries, document identity and ingestion updates:** Extend the project with Chunk boundaries, document identity and ingestion updates in Concept relationship explorer. Adapt this focused lab to the project data: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.  Required concepts: Parsing fidelity, Chunk boundaries and overlap, Stable document and chunk IDs, Upserts and deletions, Metadata and access filters.
  - Deliverable: Chunk boundaries, document identity and ingestion updates: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A graph traversal and provenance viewer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Chunk boundaries, document identity and ingestion updates: Chunk boundaries, document identity and ingestion updates: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Handle cycles and distinguish authored edges from inferred hypotheses.
- [ ] Chunk boundaries, document identity and ingestion updates: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Hybrid retrieval benchmark

An analyst needs both exact-code and paraphrase retrieval.

**Data:** Generate 80 catalog entries with product codes and prose descriptions. Use a fixed seed and keep evaluation cases separate.

**Output:** A lexical/vector fusion and reranking comparison.

**Effort:** 10h · Beginner → intermediate

- **Chunk boundaries, document identity and ingestion updates:** Extend the project with Chunk boundaries, document identity and ingestion updates in Hybrid retrieval benchmark. Adapt this focused lab to the project data: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.  Required concepts: Parsing fidelity, Chunk boundaries and overlap, Stable document and chunk IDs, Upserts and deletions, Metadata and access filters.
  - Deliverable: Chunk boundaries, document identity and ingestion updates: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A lexical/vector fusion and reranking comparison. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Chunk boundaries, document identity and ingestion updates: Chunk boundaries, document identity and ingestion updates: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Measure exact-code and paraphrase slices separately.
- [ ] Chunk boundaries, document identity and ingestion updates: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Incremental document index

A librarian needs updated documents without stale duplicate chunks.

**Data:** Create 20 versioned local documents with additions and deletions. Use a fixed seed and keep evaluation cases separate.

**Output:** An idempotent ingestion and deletion workflow.

**Effort:** 10h · Beginner → intermediate

- **Chunk boundaries, document identity and ingestion updates:** Extend the project with Chunk boundaries, document identity and ingestion updates in Incremental document index. Adapt this focused lab to the project data: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.  Required concepts: Parsing fidelity, Chunk boundaries and overlap, Stable document and chunk IDs, Upserts and deletions, Metadata and access filters.
  - Deliverable: Chunk boundaries, document identity and ingestion updates: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An idempotent ingestion and deletion workflow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Chunk boundaries, document identity and ingestion updates: Chunk boundaries, document identity and ingestion updates: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Re-ingest twice, delete a source and prove its chunks disappear.
- [ ] Chunk boundaries, document identity and ingestion updates: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Personal notes retrieval desk

A student needs answers traceable to their own notes.

**Data:** Create ten Markdown notes and 20 query/relevance judgments. Use a fixed seed and keep evaluation cases separate.

**Output:** A local search interface with passage IDs and citations.

**Effort:** 10h · Beginner → intermediate

- **Chunk boundaries, document identity and ingestion updates:** Extend the project with Chunk boundaries, document identity and ingestion updates in Personal notes retrieval desk. Adapt this focused lab to the project data: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.  Required concepts: Parsing fidelity, Chunk boundaries and overlap, Stable document and chunk IDs, Upserts and deletions, Metadata and access filters.
  - Deliverable: Chunk boundaries, document identity and ingestion updates: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local search interface with passage IDs and citations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Chunk boundaries, document identity and ingestion updates: Chunk boundaries, document identity and ingestion updates: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report recall at five and refuse unsupported answers.
- [ ] Chunk boundaries, document identity and ingestion updates: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Permission-aware team search

A team needs retrieval that respects document access rights.

**Data:** Generate three fictional roles and 30 access-labeled documents. Use a fixed seed and keep evaluation cases separate.

**Output:** A retrieval filter and adversarial permission test set.

**Effort:** 10h · Beginner → intermediate

- **Chunk boundaries, document identity and ingestion updates:** Extend the project with Chunk boundaries, document identity and ingestion updates in Permission-aware team search. Adapt this focused lab to the project data: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.  Required concepts: Parsing fidelity, Chunk boundaries and overlap, Stable document and chunk IDs, Upserts and deletions, Metadata and access filters.
  - Deliverable: Chunk boundaries, document identity and ingestion updates: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A retrieval filter and adversarial permission test set. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Chunk boundaries, document identity and ingestion updates: Chunk boundaries, document identity and ingestion updates: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Unauthorized passages never enter the retrieved context.
- [ ] Chunk boundaries, document identity and ingestion updates: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Retrieval failure diagnosis bench

A maintainer needs to separate retrieval and answer failures.

**Data:** Write 25 questions including missing evidence and conflicting passages. Use a fixed seed and keep evaluation cases separate.

**Output:** A retrieval/answer error taxonomy and regression report.

**Effort:** 10h · Beginner → intermediate

- **Chunk boundaries, document identity and ingestion updates:** Extend the project with Chunk boundaries, document identity and ingestion updates in Retrieval failure diagnosis bench. Adapt this focused lab to the project data: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.  Required concepts: Parsing fidelity, Chunk boundaries and overlap, Stable document and chunk IDs, Upserts and deletions, Metadata and access filters.
  - Deliverable: Chunk boundaries, document identity and ingestion updates: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A retrieval/answer error taxonomy and regression report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Chunk boundaries, document identity and ingestion updates: Chunk boundaries, document identity and ingestion updates: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Measure retrieval recall separately from answer faithfulness.
- [ ] Chunk boundaries, document identity and ingestion updates: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Read-only SQL evidence assistant

An analyst needs answers grounded in tabular records.

**Data:** Use a local SQLite database of fictional orders and customers. Use a fixed seed and keep evaluation cases separate.

**Output:** A whitelisted query workflow with rows cited as evidence.

**Effort:** 10h · Beginner → intermediate

- **Chunk boundaries, document identity and ingestion updates:** Extend the project with Chunk boundaries, document identity and ingestion updates in Read-only SQL evidence assistant. Adapt this focused lab to the project data: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.  Required concepts: Parsing fidelity, Chunk boundaries and overlap, Stable document and chunk IDs, Upserts and deletions, Metadata and access filters.
  - Deliverable: Chunk boundaries, document identity and ingestion updates: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A whitelisted query workflow with rows cited as evidence. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Chunk boundaries, document identity and ingestion updates: Chunk boundaries, document identity and ingestion updates: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject writes, bound row counts and verify join totals.
- [ ] Chunk boundaries, document identity and ingestion updates: Build a CPU text-ingestion index over five local Markdown fixtures with deterministic IDs and versioned chunks. Compare two chunking methods, test repeated ingestion, updates and deletion, and add an access-filter regression test.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="rag-hybrid-reranking"></a>

### BM25-style retrieval, vector fusion and reranking evaluation

Measure which retrieval stage improves relevance rather than assuming that adding a reranker always helps.

**Priority:** Specialization · **Study:** 3h · **Practice:** 4h

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

### Hybrid retrieval benchmark

An analyst needs both exact-code and paraphrase retrieval.

**Data:** Generate 80 catalog entries with product codes and prose descriptions. Use a fixed seed and keep evaluation cases separate.

**Output:** A lexical/vector fusion and reranking comparison.

**Effort:** 10h · Beginner → intermediate

- **BM25-style retrieval, vector fusion and reranking evaluation:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Hybrid retrieval benchmark: A lexical/vector fusion and reranking comparison. Focus: Lexical versus semantic signals, Score-scale mismatch, Reciprocal rank fusion, Cross-encoder reranking, Stage-by-stage metrics.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A lexical/vector fusion and reranking comparison. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · BM25-style retrieval, vector fusion and reranking evaluation: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Measure exact-code and paraphrase slices separately.
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Chunking experiment arena

A builder needs evidence for choosing chunk size and overlap.

**Data:** Write six documents with headings, lists and answers crossing boundaries. Use a fixed seed and keep evaluation cases separate.

**Output:** A chunking benchmark and source-offset viewer.

**Effort:** 10h · Beginner → intermediate

- **BM25-style retrieval, vector fusion and reranking evaluation:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Chunking experiment arena: A chunking benchmark and source-offset viewer. Focus: Lexical versus semantic signals, Score-scale mismatch, Reciprocal rank fusion, Cross-encoder reranking, Stage-by-stage metrics.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chunking benchmark and source-offset viewer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · BM25-style retrieval, vector fusion and reranking evaluation: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare retrieval on identical queries and preserve exact source spans.
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Citation integrity checker

A reviewer needs to catch answers citing the wrong source.

**Data:** Write 30 claims, source passages and deliberately incorrect citations. Use a fixed seed and keep evaluation cases separate.

**Output:** A citation validation report and abstention interface.

**Effort:** 10h · Beginner → intermediate

- **BM25-style retrieval, vector fusion and reranking evaluation:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Citation integrity checker: A citation validation report and abstention interface. Focus: Lexical versus semantic signals, Score-scale mismatch, Reciprocal rank fusion, Cross-encoder reranking, Stage-by-stage metrics.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A citation validation report and abstention interface. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · BM25-style retrieval, vector fusion and reranking evaluation: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Flag missing IDs and unsupported spans; do not equate a valid link with support.
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Embedding retrieval scorecard

A builder needs to choose representations for a small corpus.

**Data:** Use local notes and labeled paraphrases; TF-IDF is the offline baseline. Use a fixed seed and keep evaluation cases separate.

**Output:** A representation comparison with dimension and latency reports.

**Effort:** 10h · Beginner → intermediate

- **BM25-style retrieval, vector fusion and reranking evaluation:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Embedding retrieval scorecard: A representation comparison with dimension and latency reports. Focus: Lexical versus semantic signals, Score-scale mismatch, Reciprocal rank fusion, Cross-encoder reranking, Stage-by-stage metrics.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A representation comparison with dimension and latency reports. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · BM25-style retrieval, vector fusion and reranking evaluation: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep evaluation queries separate and identify model download requirements.
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Concept relationship explorer

A learner needs to navigate relationships between study notes.

**Data:** Author 25 concepts and 40 typed relationships in JSON. Use a fixed seed and keep evaluation cases separate.

**Output:** A graph traversal and provenance viewer.

**Effort:** 10h · Beginner → intermediate

- **BM25-style retrieval, vector fusion and reranking evaluation:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Concept relationship explorer: A graph traversal and provenance viewer. Focus: Lexical versus semantic signals, Score-scale mismatch, Reciprocal rank fusion, Cross-encoder reranking, Stage-by-stage metrics.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A graph traversal and provenance viewer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · BM25-style retrieval, vector fusion and reranking evaluation: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Handle cycles and distinguish authored edges from inferred hypotheses.
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Incremental document index

A librarian needs updated documents without stale duplicate chunks.

**Data:** Create 20 versioned local documents with additions and deletions. Use a fixed seed and keep evaluation cases separate.

**Output:** An idempotent ingestion and deletion workflow.

**Effort:** 10h · Beginner → intermediate

- **BM25-style retrieval, vector fusion and reranking evaluation:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Incremental document index: An idempotent ingestion and deletion workflow. Focus: Lexical versus semantic signals, Score-scale mismatch, Reciprocal rank fusion, Cross-encoder reranking, Stage-by-stage metrics.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An idempotent ingestion and deletion workflow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · BM25-style retrieval, vector fusion and reranking evaluation: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Re-ingest twice, delete a source and prove its chunks disappear.
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Personal notes retrieval desk

A student needs answers traceable to their own notes.

**Data:** Create ten Markdown notes and 20 query/relevance judgments. Use a fixed seed and keep evaluation cases separate.

**Output:** A local search interface with passage IDs and citations.

**Effort:** 10h · Beginner → intermediate

- **BM25-style retrieval, vector fusion and reranking evaluation:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Personal notes retrieval desk: A local search interface with passage IDs and citations. Focus: Lexical versus semantic signals, Score-scale mismatch, Reciprocal rank fusion, Cross-encoder reranking, Stage-by-stage metrics.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local search interface with passage IDs and citations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · BM25-style retrieval, vector fusion and reranking evaluation: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report recall at five and refuse unsupported answers.
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Permission-aware team search

A team needs retrieval that respects document access rights.

**Data:** Generate three fictional roles and 30 access-labeled documents. Use a fixed seed and keep evaluation cases separate.

**Output:** A retrieval filter and adversarial permission test set.

**Effort:** 10h · Beginner → intermediate

- **BM25-style retrieval, vector fusion and reranking evaluation:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Permission-aware team search: A retrieval filter and adversarial permission test set. Focus: Lexical versus semantic signals, Score-scale mismatch, Reciprocal rank fusion, Cross-encoder reranking, Stage-by-stage metrics.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A retrieval filter and adversarial permission test set. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · BM25-style retrieval, vector fusion and reranking evaluation: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Unauthorized passages never enter the retrieved context.
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Retrieval failure diagnosis bench

A maintainer needs to separate retrieval and answer failures.

**Data:** Write 25 questions including missing evidence and conflicting passages. Use a fixed seed and keep evaluation cases separate.

**Output:** A retrieval/answer error taxonomy and regression report.

**Effort:** 10h · Beginner → intermediate

- **BM25-style retrieval, vector fusion and reranking evaluation:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Retrieval failure diagnosis bench: A retrieval/answer error taxonomy and regression report. Focus: Lexical versus semantic signals, Score-scale mismatch, Reciprocal rank fusion, Cross-encoder reranking, Stage-by-stage metrics.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A retrieval/answer error taxonomy and regression report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · BM25-style retrieval, vector fusion and reranking evaluation: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Measure retrieval recall separately from answer faithfulness.
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Read-only SQL evidence assistant

An analyst needs answers grounded in tabular records.

**Data:** Use a local SQLite database of fictional orders and customers. Use a fixed seed and keep evaluation cases separate.

**Output:** A whitelisted query workflow with rows cited as evidence.

**Effort:** 10h · Beginner → intermediate

- **BM25-style retrieval, vector fusion and reranking evaluation:** Retrieve project records by stable source IDs and assemble evidence-grounded responses; compare lexical and vector retrieval when a local embedding model is available. Apply this to Read-only SQL evidence assistant: A whitelisted query workflow with rows cited as evidence. Focus: Lexical versus semantic signals, Score-scale mismatch, Reciprocal rank fusion, Cross-encoder reranking, Stage-by-stage metrics.
  - Deliverable: Index, labeled query set, retrieval report and citation examples
  - Check: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A whitelisted query workflow with rows cited as evidence. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · BM25-style retrieval, vector fusion and reranking evaluation: Index, labeled query set, retrieval report and citation examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject writes, bound row counts and verify join totals.
- [ ] BM25-style retrieval, vector fusion and reranking evaluation: Measure recall at five and reject unsupported citations; explicitly label fixture-only responses. Create a 30-passage local corpus with ten relevance-labelled queries. Compare a lexical baseline, toy or local vector retrieval and rank fusion; use deterministic recorded reranker scores for the free CPU path and report stage-wise metrics.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="rag-citations-abstention"></a>

### Evidence selection, citation validation and abstention

Make grounded answers traceable and explicitly handle questions whose evidence is missing or conflicting.

**Priority:** Essential · **Study:** 3h · **Practice:** 4h

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

### Citation integrity checker

A reviewer needs to catch answers citing the wrong source.

**Data:** Write 30 claims, source passages and deliberately incorrect citations. Use a fixed seed and keep evaluation cases separate.

**Output:** A citation validation report and abstention interface.

**Effort:** 10h · Beginner → intermediate

- **Evidence selection, citation validation and abstention:** Implement Evidence selection, citation validation and abstention in Citation integrity checker. Adapt this focused lab to the project data: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.  Required concepts: Evidence budget, Claim-level support, Citation validity versus faithfulness, Conflicting or stale evidence, Abstention and escalation.
  - Deliverable: Evidence selection, citation validation and abstention: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A citation validation report and abstention interface. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Evidence selection, citation validation and abstention: Evidence selection, citation validation and abstention: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Flag missing IDs and unsupported spans; do not equate a valid link with support.
- [ ] Evidence selection, citation validation and abstention: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Chunking experiment arena

A builder needs evidence for choosing chunk size and overlap.

**Data:** Write six documents with headings, lists and answers crossing boundaries. Use a fixed seed and keep evaluation cases separate.

**Output:** A chunking benchmark and source-offset viewer.

**Effort:** 10h · Beginner → intermediate

- **Evidence selection, citation validation and abstention:** Extend the project with Evidence selection, citation validation and abstention in Chunking experiment arena. Adapt this focused lab to the project data: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.  Required concepts: Evidence budget, Claim-level support, Citation validity versus faithfulness, Conflicting or stale evidence, Abstention and escalation.
  - Deliverable: Evidence selection, citation validation and abstention: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chunking benchmark and source-offset viewer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Evidence selection, citation validation and abstention: Evidence selection, citation validation and abstention: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare retrieval on identical queries and preserve exact source spans.
- [ ] Evidence selection, citation validation and abstention: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Embedding retrieval scorecard

A builder needs to choose representations for a small corpus.

**Data:** Use local notes and labeled paraphrases; TF-IDF is the offline baseline. Use a fixed seed and keep evaluation cases separate.

**Output:** A representation comparison with dimension and latency reports.

**Effort:** 10h · Beginner → intermediate

- **Evidence selection, citation validation and abstention:** Extend the project with Evidence selection, citation validation and abstention in Embedding retrieval scorecard. Adapt this focused lab to the project data: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.  Required concepts: Evidence budget, Claim-level support, Citation validity versus faithfulness, Conflicting or stale evidence, Abstention and escalation.
  - Deliverable: Evidence selection, citation validation and abstention: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A representation comparison with dimension and latency reports. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Evidence selection, citation validation and abstention: Evidence selection, citation validation and abstention: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep evaluation queries separate and identify model download requirements.
- [ ] Evidence selection, citation validation and abstention: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Concept relationship explorer

A learner needs to navigate relationships between study notes.

**Data:** Author 25 concepts and 40 typed relationships in JSON. Use a fixed seed and keep evaluation cases separate.

**Output:** A graph traversal and provenance viewer.

**Effort:** 10h · Beginner → intermediate

- **Evidence selection, citation validation and abstention:** Extend the project with Evidence selection, citation validation and abstention in Concept relationship explorer. Adapt this focused lab to the project data: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.  Required concepts: Evidence budget, Claim-level support, Citation validity versus faithfulness, Conflicting or stale evidence, Abstention and escalation.
  - Deliverable: Evidence selection, citation validation and abstention: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A graph traversal and provenance viewer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Evidence selection, citation validation and abstention: Evidence selection, citation validation and abstention: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Handle cycles and distinguish authored edges from inferred hypotheses.
- [ ] Evidence selection, citation validation and abstention: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Hybrid retrieval benchmark

An analyst needs both exact-code and paraphrase retrieval.

**Data:** Generate 80 catalog entries with product codes and prose descriptions. Use a fixed seed and keep evaluation cases separate.

**Output:** A lexical/vector fusion and reranking comparison.

**Effort:** 10h · Beginner → intermediate

- **Evidence selection, citation validation and abstention:** Extend the project with Evidence selection, citation validation and abstention in Hybrid retrieval benchmark. Adapt this focused lab to the project data: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.  Required concepts: Evidence budget, Claim-level support, Citation validity versus faithfulness, Conflicting or stale evidence, Abstention and escalation.
  - Deliverable: Evidence selection, citation validation and abstention: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A lexical/vector fusion and reranking comparison. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Evidence selection, citation validation and abstention: Evidence selection, citation validation and abstention: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Measure exact-code and paraphrase slices separately.
- [ ] Evidence selection, citation validation and abstention: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Incremental document index

A librarian needs updated documents without stale duplicate chunks.

**Data:** Create 20 versioned local documents with additions and deletions. Use a fixed seed and keep evaluation cases separate.

**Output:** An idempotent ingestion and deletion workflow.

**Effort:** 10h · Beginner → intermediate

- **Evidence selection, citation validation and abstention:** Extend the project with Evidence selection, citation validation and abstention in Incremental document index. Adapt this focused lab to the project data: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.  Required concepts: Evidence budget, Claim-level support, Citation validity versus faithfulness, Conflicting or stale evidence, Abstention and escalation.
  - Deliverable: Evidence selection, citation validation and abstention: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An idempotent ingestion and deletion workflow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Evidence selection, citation validation and abstention: Evidence selection, citation validation and abstention: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Re-ingest twice, delete a source and prove its chunks disappear.
- [ ] Evidence selection, citation validation and abstention: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Personal notes retrieval desk

A student needs answers traceable to their own notes.

**Data:** Create ten Markdown notes and 20 query/relevance judgments. Use a fixed seed and keep evaluation cases separate.

**Output:** A local search interface with passage IDs and citations.

**Effort:** 10h · Beginner → intermediate

- **Evidence selection, citation validation and abstention:** Extend the project with Evidence selection, citation validation and abstention in Personal notes retrieval desk. Adapt this focused lab to the project data: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.  Required concepts: Evidence budget, Claim-level support, Citation validity versus faithfulness, Conflicting or stale evidence, Abstention and escalation.
  - Deliverable: Evidence selection, citation validation and abstention: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local search interface with passage IDs and citations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Evidence selection, citation validation and abstention: Evidence selection, citation validation and abstention: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report recall at five and refuse unsupported answers.
- [ ] Evidence selection, citation validation and abstention: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Permission-aware team search

A team needs retrieval that respects document access rights.

**Data:** Generate three fictional roles and 30 access-labeled documents. Use a fixed seed and keep evaluation cases separate.

**Output:** A retrieval filter and adversarial permission test set.

**Effort:** 10h · Beginner → intermediate

- **Evidence selection, citation validation and abstention:** Extend the project with Evidence selection, citation validation and abstention in Permission-aware team search. Adapt this focused lab to the project data: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.  Required concepts: Evidence budget, Claim-level support, Citation validity versus faithfulness, Conflicting or stale evidence, Abstention and escalation.
  - Deliverable: Evidence selection, citation validation and abstention: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A retrieval filter and adversarial permission test set. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Evidence selection, citation validation and abstention: Evidence selection, citation validation and abstention: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Unauthorized passages never enter the retrieved context.
- [ ] Evidence selection, citation validation and abstention: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Retrieval failure diagnosis bench

A maintainer needs to separate retrieval and answer failures.

**Data:** Write 25 questions including missing evidence and conflicting passages. Use a fixed seed and keep evaluation cases separate.

**Output:** A retrieval/answer error taxonomy and regression report.

**Effort:** 10h · Beginner → intermediate

- **Evidence selection, citation validation and abstention:** Extend the project with Evidence selection, citation validation and abstention in Retrieval failure diagnosis bench. Adapt this focused lab to the project data: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.  Required concepts: Evidence budget, Claim-level support, Citation validity versus faithfulness, Conflicting or stale evidence, Abstention and escalation.
  - Deliverable: Evidence selection, citation validation and abstention: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A retrieval/answer error taxonomy and regression report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Evidence selection, citation validation and abstention: Evidence selection, citation validation and abstention: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Measure retrieval recall separately from answer faithfulness.
- [ ] Evidence selection, citation validation and abstention: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Read-only SQL evidence assistant

An analyst needs answers grounded in tabular records.

**Data:** Use a local SQLite database of fictional orders and customers. Use a fixed seed and keep evaluation cases separate.

**Output:** A whitelisted query workflow with rows cited as evidence.

**Effort:** 10h · Beginner → intermediate

- **Evidence selection, citation validation and abstention:** Extend the project with Evidence selection, citation validation and abstention in Read-only SQL evidence assistant. Adapt this focused lab to the project data: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.  Required concepts: Evidence budget, Claim-level support, Citation validity versus faithfulness, Conflicting or stale evidence, Abstention and escalation.
  - Deliverable: Evidence selection, citation validation and abstention: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A whitelisted query workflow with rows cited as evidence. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Evidence selection, citation validation and abstention: Evidence selection, citation validation and abstention: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject writes, bound row counts and verify join totals.
- [ ] Evidence selection, citation validation and abstention: Build an answer-validation harness using recorded answers over a small Markdown corpus. Check source existence, quoted support and stale versions; include answerable, conflicting and unanswerable questions with an explicit abstention rule.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Document parsing, OCR limits and source provenance

<a id="rag-parsing-ocr"></a>

### Document parsing, OCR limits and source provenance

Document parsing, OCR limits and source provenance helps you make explainable engineering decisions and test failure cases. Build the experiment below before relying on the concept in an AI system.

**Priority:** Essential · **Study:** 4h · **Practice:** 5h

**Prerequisites:** [Document parsing, chunking and metadata](rag.md#rag-ingestion) Navigation is unrestricted.

#### Concepts

- [ ] **Extraction versus interpretation:** Parsing extracts representations while OCR estimates text from pixels; neither guarantees correct meaning.
  - Example: Compare text extracted from a digital page with a deliberately corrupted OCR fixture.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on extraction versus interpretation. Then reproduce the lesson example: Compare text extracted from a digital page with a deliberately corrupted OCR fixture.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Reading order:** Columns, headers and tables can be flattened into misleading token sequences.
  - Example: Reconstruct a two-column fixture and retain section boundaries.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on reading order. Then reproduce the lesson example: Reconstruct a two-column fixture and retain section boundaries.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Table semantics:** Cells require row and column context to remain meaningful.
  - Example: Serialize a price table with headers repeated in each row record.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on table semantics. Then reproduce the lesson example: Serialize a price table with headers repeated in each row record.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Provenance:** Stable source IDs, offsets and version hashes let answers be traced back after ingestion.
  - Example: Store source ID, page, extraction version and content hash per chunk.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on provenance. Then reproduce the lesson example: Store source ID, page, extraction version and content hash per chunk.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Extraction quality:** Missing text and low-confidence spans need warnings or rejection before retrieval.
  - Example: Seed five unreadable spans and test the ingestion rejection report.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on extraction quality. Then reproduce the lesson example: Seed five unreadable spans and test the ingestion rejection report.
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

1. [Official reference: Document parsing, OCR limits and source provenance](https://pymupdf.readthedocs.io/en/latest/recipes-text.html) — Free reading; no registration required. Use the local CPU exercise; optional hosted services and downloads are not required..
2. [Sentence Transformers: semantic search](https://www.sbert.net/examples/sentence_transformer/applications/semantic-search/README.html) — Free reading; Hugging Face account optional for sharing models. No paid materials required.

#### Lab: Document parsing, OCR limits and source provenance

Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.

**Deliverables**

- Runnable CPU notebook or script with deterministic fixtures
- Measured outputs, failure cases and a README explaining decisions

**Completion checks**

- [ ] Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.
- [ ] Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

#### Ten project recommendations

### Chunking experiment arena

A builder needs evidence for choosing chunk size and overlap.

**Data:** Write six documents with headings, lists and answers crossing boundaries. Use a fixed seed and keep evaluation cases separate.

**Output:** A chunking benchmark and source-offset viewer.

**Effort:** 10h · Beginner → intermediate

- **Document parsing, OCR limits and source provenance:** Extend the project with Document parsing, OCR limits and source provenance in Chunking experiment arena. Adapt this focused lab to the project data: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.  Required concepts: Extraction versus interpretation, Reading order, Table semantics, Provenance, Extraction quality.
  - Deliverable: Document parsing, OCR limits and source provenance: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chunking benchmark and source-offset viewer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Document parsing, OCR limits and source provenance: Document parsing, OCR limits and source provenance: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare retrieval on identical queries and preserve exact source spans.
- [ ] Document parsing, OCR limits and source provenance: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Citation integrity checker

A reviewer needs to catch answers citing the wrong source.

**Data:** Write 30 claims, source passages and deliberately incorrect citations. Use a fixed seed and keep evaluation cases separate.

**Output:** A citation validation report and abstention interface.

**Effort:** 10h · Beginner → intermediate

- **Document parsing, OCR limits and source provenance:** Extend the project with Document parsing, OCR limits and source provenance in Citation integrity checker. Adapt this focused lab to the project data: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.  Required concepts: Extraction versus interpretation, Reading order, Table semantics, Provenance, Extraction quality.
  - Deliverable: Document parsing, OCR limits and source provenance: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A citation validation report and abstention interface. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Document parsing, OCR limits and source provenance: Document parsing, OCR limits and source provenance: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Flag missing IDs and unsupported spans; do not equate a valid link with support.
- [ ] Document parsing, OCR limits and source provenance: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Embedding retrieval scorecard

A builder needs to choose representations for a small corpus.

**Data:** Use local notes and labeled paraphrases; TF-IDF is the offline baseline. Use a fixed seed and keep evaluation cases separate.

**Output:** A representation comparison with dimension and latency reports.

**Effort:** 10h · Beginner → intermediate

- **Document parsing, OCR limits and source provenance:** Extend the project with Document parsing, OCR limits and source provenance in Embedding retrieval scorecard. Adapt this focused lab to the project data: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.  Required concepts: Extraction versus interpretation, Reading order, Table semantics, Provenance, Extraction quality.
  - Deliverable: Document parsing, OCR limits and source provenance: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A representation comparison with dimension and latency reports. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Document parsing, OCR limits and source provenance: Document parsing, OCR limits and source provenance: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep evaluation queries separate and identify model download requirements.
- [ ] Document parsing, OCR limits and source provenance: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Concept relationship explorer

A learner needs to navigate relationships between study notes.

**Data:** Author 25 concepts and 40 typed relationships in JSON. Use a fixed seed and keep evaluation cases separate.

**Output:** A graph traversal and provenance viewer.

**Effort:** 10h · Beginner → intermediate

- **Document parsing, OCR limits and source provenance:** Extend the project with Document parsing, OCR limits and source provenance in Concept relationship explorer. Adapt this focused lab to the project data: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.  Required concepts: Extraction versus interpretation, Reading order, Table semantics, Provenance, Extraction quality.
  - Deliverable: Document parsing, OCR limits and source provenance: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A graph traversal and provenance viewer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Document parsing, OCR limits and source provenance: Document parsing, OCR limits and source provenance: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Handle cycles and distinguish authored edges from inferred hypotheses.
- [ ] Document parsing, OCR limits and source provenance: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Hybrid retrieval benchmark

An analyst needs both exact-code and paraphrase retrieval.

**Data:** Generate 80 catalog entries with product codes and prose descriptions. Use a fixed seed and keep evaluation cases separate.

**Output:** A lexical/vector fusion and reranking comparison.

**Effort:** 10h · Beginner → intermediate

- **Document parsing, OCR limits and source provenance:** Extend the project with Document parsing, OCR limits and source provenance in Hybrid retrieval benchmark. Adapt this focused lab to the project data: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.  Required concepts: Extraction versus interpretation, Reading order, Table semantics, Provenance, Extraction quality.
  - Deliverable: Document parsing, OCR limits and source provenance: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A lexical/vector fusion and reranking comparison. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Document parsing, OCR limits and source provenance: Document parsing, OCR limits and source provenance: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Measure exact-code and paraphrase slices separately.
- [ ] Document parsing, OCR limits and source provenance: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Incremental document index

A librarian needs updated documents without stale duplicate chunks.

**Data:** Create 20 versioned local documents with additions and deletions. Use a fixed seed and keep evaluation cases separate.

**Output:** An idempotent ingestion and deletion workflow.

**Effort:** 10h · Beginner → intermediate

- **Document parsing, OCR limits and source provenance:** Extend the project with Document parsing, OCR limits and source provenance in Incremental document index. Adapt this focused lab to the project data: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.  Required concepts: Extraction versus interpretation, Reading order, Table semantics, Provenance, Extraction quality.
  - Deliverable: Document parsing, OCR limits and source provenance: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An idempotent ingestion and deletion workflow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Document parsing, OCR limits and source provenance: Document parsing, OCR limits and source provenance: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Re-ingest twice, delete a source and prove its chunks disappear.
- [ ] Document parsing, OCR limits and source provenance: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Personal notes retrieval desk

A student needs answers traceable to their own notes.

**Data:** Create ten Markdown notes and 20 query/relevance judgments. Use a fixed seed and keep evaluation cases separate.

**Output:** A local search interface with passage IDs and citations.

**Effort:** 10h · Beginner → intermediate

- **Document parsing, OCR limits and source provenance:** Extend the project with Document parsing, OCR limits and source provenance in Personal notes retrieval desk. Adapt this focused lab to the project data: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.  Required concepts: Extraction versus interpretation, Reading order, Table semantics, Provenance, Extraction quality.
  - Deliverable: Document parsing, OCR limits and source provenance: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local search interface with passage IDs and citations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Document parsing, OCR limits and source provenance: Document parsing, OCR limits and source provenance: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report recall at five and refuse unsupported answers.
- [ ] Document parsing, OCR limits and source provenance: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Permission-aware team search

A team needs retrieval that respects document access rights.

**Data:** Generate three fictional roles and 30 access-labeled documents. Use a fixed seed and keep evaluation cases separate.

**Output:** A retrieval filter and adversarial permission test set.

**Effort:** 10h · Beginner → intermediate

- **Document parsing, OCR limits and source provenance:** Extend the project with Document parsing, OCR limits and source provenance in Permission-aware team search. Adapt this focused lab to the project data: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.  Required concepts: Extraction versus interpretation, Reading order, Table semantics, Provenance, Extraction quality.
  - Deliverable: Document parsing, OCR limits and source provenance: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A retrieval filter and adversarial permission test set. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Document parsing, OCR limits and source provenance: Document parsing, OCR limits and source provenance: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Unauthorized passages never enter the retrieved context.
- [ ] Document parsing, OCR limits and source provenance: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Retrieval failure diagnosis bench

A maintainer needs to separate retrieval and answer failures.

**Data:** Write 25 questions including missing evidence and conflicting passages. Use a fixed seed and keep evaluation cases separate.

**Output:** A retrieval/answer error taxonomy and regression report.

**Effort:** 10h · Beginner → intermediate

- **Document parsing, OCR limits and source provenance:** Extend the project with Document parsing, OCR limits and source provenance in Retrieval failure diagnosis bench. Adapt this focused lab to the project data: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.  Required concepts: Extraction versus interpretation, Reading order, Table semantics, Provenance, Extraction quality.
  - Deliverable: Document parsing, OCR limits and source provenance: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A retrieval/answer error taxonomy and regression report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Document parsing, OCR limits and source provenance: Document parsing, OCR limits and source provenance: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Measure retrieval recall separately from answer faithfulness.
- [ ] Document parsing, OCR limits and source provenance: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Read-only SQL evidence assistant

An analyst needs answers grounded in tabular records.

**Data:** Use a local SQLite database of fictional orders and customers. Use a fixed seed and keep evaluation cases separate.

**Output:** A whitelisted query workflow with rows cited as evidence.

**Effort:** 10h · Beginner → intermediate

- **Document parsing, OCR limits and source provenance:** Extend the project with Document parsing, OCR limits and source provenance in Read-only SQL evidence assistant. Adapt this focused lab to the project data: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.  Required concepts: Extraction versus interpretation, Reading order, Table semantics, Provenance, Extraction quality.
  - Deliverable: Document parsing, OCR limits and source provenance: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A whitelisted query workflow with rows cited as evidence. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Document parsing, OCR limits and source provenance: Document parsing, OCR limits and source provenance: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject writes, bound row counts and verify join totals.
- [ ] Document parsing, OCR limits and source provenance: Create Markdown, HTML and scanned-text fixtures with tables and broken reading order. Produce a normalized document schema with page/section IDs and explicit extraction warnings; keep OCR optional with supplied text fixtures.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Approximate nearest neighbors and index tradeoffs

<a id="rag-ann-indexes"></a>

### Approximate nearest neighbors and index tradeoffs

Approximate nearest neighbors and index tradeoffs helps you make explainable engineering decisions and test failure cases. Build the experiment below before relying on the concept in an AI system.

**Priority:** Specialization · **Study:** 4h · **Practice:** 5h

**Prerequisites:** [Embeddings, similarity, indexes and vector databases](rag.md#rag-embeddings) Navigation is unrestricted.

#### Concepts

- [ ] **Exact search baseline:** A brute-force reference is needed to measure approximation error.
  - Example: Compute every cosine score for twenty fixed queries.
  - Videos:
    - [Neural Networks Part 11: Word Embedding and Word2Vec](https://www.youtube.com/watch?v=viZrOnJclY0) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on exact search baseline. Then reproduce the lesson example: Compute every cosine score for twenty fixed queries.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on exact search baseline. Then reproduce the lesson example: Compute every cosine score for twenty fixed queries.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Candidate search:** Approximate methods reduce search work by exploring a subset of candidates.
  - Example: Search a fixed subset and compare top-five results with exhaustive scoring.
  - Videos:
    - [Neural Networks Part 11: Word Embedding and Word2Vec](https://www.youtube.com/watch?v=viZrOnJclY0) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on candidate search. Then reproduce the lesson example: Search a fixed subset and compare top-five results with exhaustive scoring.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on candidate search. Then reproduce the lesson example: Search a fixed subset and compare top-five results with exhaustive scoring.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Index parameters:** Construction and query parameters trade memory, build time and query recall.
  - Example: Record settings beside measurements rather than comparing unnamed defaults.
  - Videos:
    - [Neural Networks Part 11: Word Embedding and Word2Vec](https://www.youtube.com/watch?v=viZrOnJclY0) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on index parameters. Then reproduce the lesson example: Record settings beside measurements rather than comparing unnamed defaults.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on index parameters. Then reproduce the lesson example: Record settings beside measurements rather than comparing unnamed defaults.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Filtering:** Filtering before versus after candidate retrieval can change recall and permission guarantees.
  - Example: Query a small authorized subset and compare prefilter with postfilter behavior.
  - Videos:
    - [Neural Networks Part 11: Word Embedding and Word2Vec](https://www.youtube.com/watch?v=viZrOnJclY0) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on filtering. Then reproduce the lesson example: Query a small authorized subset and compare prefilter with postfilter behavior.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on filtering. Then reproduce the lesson example: Query a small authorized subset and compare prefilter with postfilter behavior.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Updates and freshness:** Deletion and replacement semantics determine whether stale records remain retrievable.
  - Example: Delete ten source IDs and verify none appear after an index update.
  - Videos:
    - [Neural Networks Part 11: Word Embedding and Word2Vec](https://www.youtube.com/watch?v=viZrOnJclY0) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on updates and freshness. Then reproduce the lesson example: Delete ten source IDs and verify none appear after an index update.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on updates and freshness. Then reproduce the lesson example: Delete ten source IDs and verify none appear after an index update.
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

1. [Official reference: Approximate nearest neighbors and index tradeoffs](https://github.com/facebookresearch/faiss/wiki) — Free reading; no registration required. Use the local CPU exercise; optional hosted services and downloads are not required..
2. [Sentence Transformers: semantic search](https://www.sbert.net/examples/sentence_transformer/applications/semantic-search/README.html) — Free reading; Hugging Face account optional for sharing models. No paid materials required.

#### Lab: Approximate nearest neighbors and index tradeoffs

Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.

**Deliverables**

- Runnable CPU notebook or script with deterministic fixtures
- Measured outputs, failure cases and a README explaining decisions

**Completion checks**

- [ ] Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.
- [ ] Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

#### Ten project recommendations

### Chunking experiment arena

A builder needs evidence for choosing chunk size and overlap.

**Data:** Write six documents with headings, lists and answers crossing boundaries. Use a fixed seed and keep evaluation cases separate.

**Output:** A chunking benchmark and source-offset viewer.

**Effort:** 10h · Beginner → intermediate

- **Approximate nearest neighbors and index tradeoffs:** Extend the project with Approximate nearest neighbors and index tradeoffs in Chunking experiment arena. Adapt this focused lab to the project data: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.  Required concepts: Exact search baseline, Candidate search, Index parameters, Filtering, Updates and freshness.
  - Deliverable: Approximate nearest neighbors and index tradeoffs: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chunking benchmark and source-offset viewer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Approximate nearest neighbors and index tradeoffs: Approximate nearest neighbors and index tradeoffs: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare retrieval on identical queries and preserve exact source spans.
- [ ] Approximate nearest neighbors and index tradeoffs: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Citation integrity checker

A reviewer needs to catch answers citing the wrong source.

**Data:** Write 30 claims, source passages and deliberately incorrect citations. Use a fixed seed and keep evaluation cases separate.

**Output:** A citation validation report and abstention interface.

**Effort:** 10h · Beginner → intermediate

- **Approximate nearest neighbors and index tradeoffs:** Extend the project with Approximate nearest neighbors and index tradeoffs in Citation integrity checker. Adapt this focused lab to the project data: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.  Required concepts: Exact search baseline, Candidate search, Index parameters, Filtering, Updates and freshness.
  - Deliverable: Approximate nearest neighbors and index tradeoffs: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A citation validation report and abstention interface. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Approximate nearest neighbors and index tradeoffs: Approximate nearest neighbors and index tradeoffs: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Flag missing IDs and unsupported spans; do not equate a valid link with support.
- [ ] Approximate nearest neighbors and index tradeoffs: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Embedding retrieval scorecard

A builder needs to choose representations for a small corpus.

**Data:** Use local notes and labeled paraphrases; TF-IDF is the offline baseline. Use a fixed seed and keep evaluation cases separate.

**Output:** A representation comparison with dimension and latency reports.

**Effort:** 10h · Beginner → intermediate

- **Approximate nearest neighbors and index tradeoffs:** Extend the project with Approximate nearest neighbors and index tradeoffs in Embedding retrieval scorecard. Adapt this focused lab to the project data: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.  Required concepts: Exact search baseline, Candidate search, Index parameters, Filtering, Updates and freshness.
  - Deliverable: Approximate nearest neighbors and index tradeoffs: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A representation comparison with dimension and latency reports. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Approximate nearest neighbors and index tradeoffs: Approximate nearest neighbors and index tradeoffs: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep evaluation queries separate and identify model download requirements.
- [ ] Approximate nearest neighbors and index tradeoffs: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Concept relationship explorer

A learner needs to navigate relationships between study notes.

**Data:** Author 25 concepts and 40 typed relationships in JSON. Use a fixed seed and keep evaluation cases separate.

**Output:** A graph traversal and provenance viewer.

**Effort:** 10h · Beginner → intermediate

- **Approximate nearest neighbors and index tradeoffs:** Extend the project with Approximate nearest neighbors and index tradeoffs in Concept relationship explorer. Adapt this focused lab to the project data: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.  Required concepts: Exact search baseline, Candidate search, Index parameters, Filtering, Updates and freshness.
  - Deliverable: Approximate nearest neighbors and index tradeoffs: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A graph traversal and provenance viewer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Approximate nearest neighbors and index tradeoffs: Approximate nearest neighbors and index tradeoffs: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Handle cycles and distinguish authored edges from inferred hypotheses.
- [ ] Approximate nearest neighbors and index tradeoffs: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Hybrid retrieval benchmark

An analyst needs both exact-code and paraphrase retrieval.

**Data:** Generate 80 catalog entries with product codes and prose descriptions. Use a fixed seed and keep evaluation cases separate.

**Output:** A lexical/vector fusion and reranking comparison.

**Effort:** 10h · Beginner → intermediate

- **Approximate nearest neighbors and index tradeoffs:** Extend the project with Approximate nearest neighbors and index tradeoffs in Hybrid retrieval benchmark. Adapt this focused lab to the project data: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.  Required concepts: Exact search baseline, Candidate search, Index parameters, Filtering, Updates and freshness.
  - Deliverable: Approximate nearest neighbors and index tradeoffs: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A lexical/vector fusion and reranking comparison. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Approximate nearest neighbors and index tradeoffs: Approximate nearest neighbors and index tradeoffs: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Measure exact-code and paraphrase slices separately.
- [ ] Approximate nearest neighbors and index tradeoffs: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Incremental document index

A librarian needs updated documents without stale duplicate chunks.

**Data:** Create 20 versioned local documents with additions and deletions. Use a fixed seed and keep evaluation cases separate.

**Output:** An idempotent ingestion and deletion workflow.

**Effort:** 10h · Beginner → intermediate

- **Approximate nearest neighbors and index tradeoffs:** Extend the project with Approximate nearest neighbors and index tradeoffs in Incremental document index. Adapt this focused lab to the project data: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.  Required concepts: Exact search baseline, Candidate search, Index parameters, Filtering, Updates and freshness.
  - Deliverable: Approximate nearest neighbors and index tradeoffs: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An idempotent ingestion and deletion workflow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Approximate nearest neighbors and index tradeoffs: Approximate nearest neighbors and index tradeoffs: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Re-ingest twice, delete a source and prove its chunks disappear.
- [ ] Approximate nearest neighbors and index tradeoffs: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Personal notes retrieval desk

A student needs answers traceable to their own notes.

**Data:** Create ten Markdown notes and 20 query/relevance judgments. Use a fixed seed and keep evaluation cases separate.

**Output:** A local search interface with passage IDs and citations.

**Effort:** 10h · Beginner → intermediate

- **Approximate nearest neighbors and index tradeoffs:** Extend the project with Approximate nearest neighbors and index tradeoffs in Personal notes retrieval desk. Adapt this focused lab to the project data: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.  Required concepts: Exact search baseline, Candidate search, Index parameters, Filtering, Updates and freshness.
  - Deliverable: Approximate nearest neighbors and index tradeoffs: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local search interface with passage IDs and citations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Approximate nearest neighbors and index tradeoffs: Approximate nearest neighbors and index tradeoffs: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report recall at five and refuse unsupported answers.
- [ ] Approximate nearest neighbors and index tradeoffs: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Permission-aware team search

A team needs retrieval that respects document access rights.

**Data:** Generate three fictional roles and 30 access-labeled documents. Use a fixed seed and keep evaluation cases separate.

**Output:** A retrieval filter and adversarial permission test set.

**Effort:** 10h · Beginner → intermediate

- **Approximate nearest neighbors and index tradeoffs:** Extend the project with Approximate nearest neighbors and index tradeoffs in Permission-aware team search. Adapt this focused lab to the project data: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.  Required concepts: Exact search baseline, Candidate search, Index parameters, Filtering, Updates and freshness.
  - Deliverable: Approximate nearest neighbors and index tradeoffs: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A retrieval filter and adversarial permission test set. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Approximate nearest neighbors and index tradeoffs: Approximate nearest neighbors and index tradeoffs: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Unauthorized passages never enter the retrieved context.
- [ ] Approximate nearest neighbors and index tradeoffs: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Retrieval failure diagnosis bench

A maintainer needs to separate retrieval and answer failures.

**Data:** Write 25 questions including missing evidence and conflicting passages. Use a fixed seed and keep evaluation cases separate.

**Output:** A retrieval/answer error taxonomy and regression report.

**Effort:** 10h · Beginner → intermediate

- **Approximate nearest neighbors and index tradeoffs:** Extend the project with Approximate nearest neighbors and index tradeoffs in Retrieval failure diagnosis bench. Adapt this focused lab to the project data: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.  Required concepts: Exact search baseline, Candidate search, Index parameters, Filtering, Updates and freshness.
  - Deliverable: Approximate nearest neighbors and index tradeoffs: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A retrieval/answer error taxonomy and regression report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Approximate nearest neighbors and index tradeoffs: Approximate nearest neighbors and index tradeoffs: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Measure retrieval recall separately from answer faithfulness.
- [ ] Approximate nearest neighbors and index tradeoffs: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Read-only SQL evidence assistant

An analyst needs answers grounded in tabular records.

**Data:** Use a local SQLite database of fictional orders and customers. Use a fixed seed and keep evaluation cases separate.

**Output:** A whitelisted query workflow with rows cited as evidence.

**Effort:** 10h · Beginner → intermediate

- **Approximate nearest neighbors and index tradeoffs:** Extend the project with Approximate nearest neighbors and index tradeoffs in Read-only SQL evidence assistant. Adapt this focused lab to the project data: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.  Required concepts: Exact search baseline, Candidate search, Index parameters, Filtering, Updates and freshness.
  - Deliverable: Approximate nearest neighbors and index tradeoffs: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A whitelisted query workflow with rows cited as evidence. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Approximate nearest neighbors and index tradeoffs: Approximate nearest neighbors and index tradeoffs: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject writes, bound row counts and verify join totals.
- [ ] Approximate nearest neighbors and index tradeoffs: Create 1000 normalized vectors and a brute-force reference. Compare a bounded candidate-search simulation or optional local index against exact recall, latency and memory; test updates and filtered queries.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Graph-grounded retrieval and GraphRAG limits

<a id="rag-graph-grounding"></a>

### Graph-grounded retrieval and GraphRAG limits

Graph-grounded retrieval and GraphRAG limits helps you make explainable engineering decisions and test failure cases. Build the experiment below before relying on the concept in an AI system.

**Priority:** Specialization · **Study:** 4h · **Practice:** 5h

**Prerequisites:** [SQL retrieval and knowledge graphs](rag.md#rag-sql-graphs) Navigation is unrestricted.

#### Concepts

- [ ] **Entity resolution:** Different names may refer to one entity while identical names may refer to different entities.
  - Example: Resolve two aliases using explicit source metadata and preserve an ambiguous name.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on entity resolution. Then reproduce the lesson example: Resolve two aliases using explicit source metadata and preserve an ambiguous name.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Typed edges:** Relations need direction, type and provenance to support meaningful traversal.
  - Example: Store prerequisite-of and related-to as separate edge types.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on typed edges. Then reproduce the lesson example: Store prerequisite-of and related-to as separate edge types.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Multi-hop retrieval:** Following several edges can expose connected evidence but compounds extraction mistakes.
  - Example: Trace a two-edge path and show the source for each edge.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on multi-hop retrieval. Then reproduce the lesson example: Trace a two-edge path and show the source for each edge.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Extraction confidence:** Model-extracted relations are hypotheses until supported and checked.
  - Example: Mark an unsupported extracted edge and exclude it from an evidence answer.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on extraction confidence. Then reproduce the lesson example: Mark an unsupported extracted edge and exclude it from an evidence answer.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Graph value test:** A graph is justified when it improves a measured task compared with simpler retrieval.
  - Example: Compare answers on ten relational and ten direct-lookup questions.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on graph value test. Then reproduce the lesson example: Compare answers on ten relational and ten direct-lookup questions.
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

1. [Official reference: Graph-grounded retrieval and GraphRAG limits](https://microsoft.github.io/graphrag/) — Free reading; no registration required. Use the local CPU exercise; optional hosted services and downloads are not required..
2. [PostgreSQL: querying tables](https://www.postgresql.org/docs/current/tutorial-select.html) — Free; no registration required. No paid materials required.

#### Lab: Graph-grounded retrieval and GraphRAG limits

Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.

**Deliverables**

- Runnable CPU notebook or script with deterministic fixtures
- Measured outputs, failure cases and a README explaining decisions

**Completion checks**

- [ ] Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.
- [ ] Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

#### Ten project recommendations

### Chunking experiment arena

A builder needs evidence for choosing chunk size and overlap.

**Data:** Write six documents with headings, lists and answers crossing boundaries. Use a fixed seed and keep evaluation cases separate.

**Output:** A chunking benchmark and source-offset viewer.

**Effort:** 10h · Beginner → intermediate

- **Graph-grounded retrieval and GraphRAG limits:** Extend the project with Graph-grounded retrieval and GraphRAG limits in Chunking experiment arena. Adapt this focused lab to the project data: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.  Required concepts: Entity resolution, Typed edges, Multi-hop retrieval, Extraction confidence, Graph value test.
  - Deliverable: Graph-grounded retrieval and GraphRAG limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chunking benchmark and source-offset viewer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Graph-grounded retrieval and GraphRAG limits: Graph-grounded retrieval and GraphRAG limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare retrieval on identical queries and preserve exact source spans.
- [ ] Graph-grounded retrieval and GraphRAG limits: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Citation integrity checker

A reviewer needs to catch answers citing the wrong source.

**Data:** Write 30 claims, source passages and deliberately incorrect citations. Use a fixed seed and keep evaluation cases separate.

**Output:** A citation validation report and abstention interface.

**Effort:** 10h · Beginner → intermediate

- **Graph-grounded retrieval and GraphRAG limits:** Extend the project with Graph-grounded retrieval and GraphRAG limits in Citation integrity checker. Adapt this focused lab to the project data: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.  Required concepts: Entity resolution, Typed edges, Multi-hop retrieval, Extraction confidence, Graph value test.
  - Deliverable: Graph-grounded retrieval and GraphRAG limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A citation validation report and abstention interface. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Graph-grounded retrieval and GraphRAG limits: Graph-grounded retrieval and GraphRAG limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Flag missing IDs and unsupported spans; do not equate a valid link with support.
- [ ] Graph-grounded retrieval and GraphRAG limits: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Embedding retrieval scorecard

A builder needs to choose representations for a small corpus.

**Data:** Use local notes and labeled paraphrases; TF-IDF is the offline baseline. Use a fixed seed and keep evaluation cases separate.

**Output:** A representation comparison with dimension and latency reports.

**Effort:** 10h · Beginner → intermediate

- **Graph-grounded retrieval and GraphRAG limits:** Extend the project with Graph-grounded retrieval and GraphRAG limits in Embedding retrieval scorecard. Adapt this focused lab to the project data: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.  Required concepts: Entity resolution, Typed edges, Multi-hop retrieval, Extraction confidence, Graph value test.
  - Deliverable: Graph-grounded retrieval and GraphRAG limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A representation comparison with dimension and latency reports. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Graph-grounded retrieval and GraphRAG limits: Graph-grounded retrieval and GraphRAG limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep evaluation queries separate and identify model download requirements.
- [ ] Graph-grounded retrieval and GraphRAG limits: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Concept relationship explorer

A learner needs to navigate relationships between study notes.

**Data:** Author 25 concepts and 40 typed relationships in JSON. Use a fixed seed and keep evaluation cases separate.

**Output:** A graph traversal and provenance viewer.

**Effort:** 10h · Beginner → intermediate

- **Graph-grounded retrieval and GraphRAG limits:** Extend the project with Graph-grounded retrieval and GraphRAG limits in Concept relationship explorer. Adapt this focused lab to the project data: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.  Required concepts: Entity resolution, Typed edges, Multi-hop retrieval, Extraction confidence, Graph value test.
  - Deliverable: Graph-grounded retrieval and GraphRAG limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A graph traversal and provenance viewer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Graph-grounded retrieval and GraphRAG limits: Graph-grounded retrieval and GraphRAG limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Handle cycles and distinguish authored edges from inferred hypotheses.
- [ ] Graph-grounded retrieval and GraphRAG limits: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Hybrid retrieval benchmark

An analyst needs both exact-code and paraphrase retrieval.

**Data:** Generate 80 catalog entries with product codes and prose descriptions. Use a fixed seed and keep evaluation cases separate.

**Output:** A lexical/vector fusion and reranking comparison.

**Effort:** 10h · Beginner → intermediate

- **Graph-grounded retrieval and GraphRAG limits:** Extend the project with Graph-grounded retrieval and GraphRAG limits in Hybrid retrieval benchmark. Adapt this focused lab to the project data: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.  Required concepts: Entity resolution, Typed edges, Multi-hop retrieval, Extraction confidence, Graph value test.
  - Deliverable: Graph-grounded retrieval and GraphRAG limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A lexical/vector fusion and reranking comparison. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Graph-grounded retrieval and GraphRAG limits: Graph-grounded retrieval and GraphRAG limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Measure exact-code and paraphrase slices separately.
- [ ] Graph-grounded retrieval and GraphRAG limits: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Incremental document index

A librarian needs updated documents without stale duplicate chunks.

**Data:** Create 20 versioned local documents with additions and deletions. Use a fixed seed and keep evaluation cases separate.

**Output:** An idempotent ingestion and deletion workflow.

**Effort:** 10h · Beginner → intermediate

- **Graph-grounded retrieval and GraphRAG limits:** Extend the project with Graph-grounded retrieval and GraphRAG limits in Incremental document index. Adapt this focused lab to the project data: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.  Required concepts: Entity resolution, Typed edges, Multi-hop retrieval, Extraction confidence, Graph value test.
  - Deliverable: Graph-grounded retrieval and GraphRAG limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An idempotent ingestion and deletion workflow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Graph-grounded retrieval and GraphRAG limits: Graph-grounded retrieval and GraphRAG limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Re-ingest twice, delete a source and prove its chunks disappear.
- [ ] Graph-grounded retrieval and GraphRAG limits: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Personal notes retrieval desk

A student needs answers traceable to their own notes.

**Data:** Create ten Markdown notes and 20 query/relevance judgments. Use a fixed seed and keep evaluation cases separate.

**Output:** A local search interface with passage IDs and citations.

**Effort:** 10h · Beginner → intermediate

- **Graph-grounded retrieval and GraphRAG limits:** Extend the project with Graph-grounded retrieval and GraphRAG limits in Personal notes retrieval desk. Adapt this focused lab to the project data: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.  Required concepts: Entity resolution, Typed edges, Multi-hop retrieval, Extraction confidence, Graph value test.
  - Deliverable: Graph-grounded retrieval and GraphRAG limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local search interface with passage IDs and citations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Graph-grounded retrieval and GraphRAG limits: Graph-grounded retrieval and GraphRAG limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report recall at five and refuse unsupported answers.
- [ ] Graph-grounded retrieval and GraphRAG limits: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Permission-aware team search

A team needs retrieval that respects document access rights.

**Data:** Generate three fictional roles and 30 access-labeled documents. Use a fixed seed and keep evaluation cases separate.

**Output:** A retrieval filter and adversarial permission test set.

**Effort:** 10h · Beginner → intermediate

- **Graph-grounded retrieval and GraphRAG limits:** Extend the project with Graph-grounded retrieval and GraphRAG limits in Permission-aware team search. Adapt this focused lab to the project data: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.  Required concepts: Entity resolution, Typed edges, Multi-hop retrieval, Extraction confidence, Graph value test.
  - Deliverable: Graph-grounded retrieval and GraphRAG limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A retrieval filter and adversarial permission test set. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Graph-grounded retrieval and GraphRAG limits: Graph-grounded retrieval and GraphRAG limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Unauthorized passages never enter the retrieved context.
- [ ] Graph-grounded retrieval and GraphRAG limits: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Retrieval failure diagnosis bench

A maintainer needs to separate retrieval and answer failures.

**Data:** Write 25 questions including missing evidence and conflicting passages. Use a fixed seed and keep evaluation cases separate.

**Output:** A retrieval/answer error taxonomy and regression report.

**Effort:** 10h · Beginner → intermediate

- **Graph-grounded retrieval and GraphRAG limits:** Extend the project with Graph-grounded retrieval and GraphRAG limits in Retrieval failure diagnosis bench. Adapt this focused lab to the project data: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.  Required concepts: Entity resolution, Typed edges, Multi-hop retrieval, Extraction confidence, Graph value test.
  - Deliverable: Graph-grounded retrieval and GraphRAG limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A retrieval/answer error taxonomy and regression report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Graph-grounded retrieval and GraphRAG limits: Graph-grounded retrieval and GraphRAG limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Measure retrieval recall separately from answer faithfulness.
- [ ] Graph-grounded retrieval and GraphRAG limits: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Read-only SQL evidence assistant

An analyst needs answers grounded in tabular records.

**Data:** Use a local SQLite database of fictional orders and customers. Use a fixed seed and keep evaluation cases separate.

**Output:** A whitelisted query workflow with rows cited as evidence.

**Effort:** 10h · Beginner → intermediate

- **Graph-grounded retrieval and GraphRAG limits:** Extend the project with Graph-grounded retrieval and GraphRAG limits in Read-only SQL evidence assistant. Adapt this focused lab to the project data: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.  Required concepts: Entity resolution, Typed edges, Multi-hop retrieval, Extraction confidence, Graph value test.
  - Deliverable: Graph-grounded retrieval and GraphRAG limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A whitelisted query workflow with rows cited as evidence. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Graph-grounded retrieval and GraphRAG limits: Graph-grounded retrieval and GraphRAG limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject writes, bound row counts and verify join totals.
- [ ] Graph-grounded retrieval and GraphRAG limits: Build a small authored graph of 25 concepts with source-backed edges. Compare graph traversal with lexical retrieval on multi-hop questions; report extraction errors and do not fabricate evidence for missing edges.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Stage checkpoint

<a id="checkpoint-rag"></a>

### Grounded retrieval checkpoint

Demonstrate readiness through a reproducible practical handoff. Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.

**Priority:** Essential · **Study:** 1h · **Practice:** 6h

**Prerequisites:** [Document parsing, chunking and metadata](rag.md#rag-ingestion), [Embeddings, similarity, indexes and vector databases](rag.md#rag-embeddings), [Lexical, semantic and hybrid retrieval; filters and reranking](rag.md#rag-retrieval), [Grounded generation, citations and retrieval evaluation](rag.md#rag-answers), [Chunk boundaries, document identity and ingestion updates](rag.md#rag-chunking-experiments), [Evidence selection, citation validation and abstention](rag.md#rag-citations-abstention), [Document parsing, OCR limits and source provenance](rag.md#rag-parsing-ocr) Navigation is unrestricted.

#### Concepts

- [ ] **Define the success contract:** Write observable checks before implementation so success is not just a plausible demonstration.
  - Example: Turn this task into a numbered acceptance checklist: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on define the success contract. Then reproduce the lesson example: Turn this task into a numbered acceptance checklist: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Reproduce the baseline:** Keep a simple reference output and deterministic inputs so changes can be compared honestly.
  - Example: Run a fixed input twice and compare saved outputs with the documented baseline.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on reproduce the baseline. Then reproduce the lesson example: Run a fixed input twice and compare saved outputs with the documented baseline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Test a failure boundary:** A working happy path does not establish robustness to malformed data or dependency failures.
  - Example: Inject one malformed input and one controlled failure, then record the resulting state.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on test a failure boundary. Then reproduce the lesson example: Inject one malformed input and one controlled failure, then record the resulting state.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Explain the decisions:** Describe why each technique was chosen and what evidence would make you choose differently.
  - Example: Write a short decision note comparing the chosen approach with one simpler alternative.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on explain the decisions. Then reproduce the lesson example: Write a short decision note comparing the chosen approach with one simpler alternative.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [ ] **Hand off the evidence:** Another learner must be able to reproduce the result from your instructions and supplied inputs.
  - Example: Ask a teammate to run the README commands in a clean environment and record missing steps.
  - Videos:
    - [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
      - Explains: Ingestion, retrieval and techniques for grounding model answers.
      - Useful because: Follow the pipeline, then test chunking and retrieval separately.
      - Watch for: Focus on hand off the evidence. Then reproduce the lesson example: Ask a teammate to run the README commands in a clean environment and record missing steps.
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

1. [Official reference: Document parsing, OCR limits and source provenance](https://pymupdf.readthedocs.io/en/latest/recipes-text.html) — Free reading; no registration required. Use the local CPU exercise; optional hosted services and downloads are not required..
2. [Sentence Transformers: semantic search](https://www.sbert.net/examples/sentence_transformer/applications/semantic-search/README.html) — Free reading; Hugging Face account optional for sharing models. No paid materials required.

#### Grounded retrieval checkpoint

Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.

**Deliverables**

- Runnable project and reproducible input fixtures
- README, results and decision notes
- Failure evidence and clean-start instructions

**Completion checks**

- [ ] Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.
- [ ] Explain the code and results without relying on an AI-generated summary.
- [ ] A teammate can reproduce the demo without paid credentials.

#### Ten project recommendations

### Chunking experiment arena

A builder needs evidence for choosing chunk size and overlap.

**Data:** Write six documents with headings, lists and answers crossing boundaries. Use a fixed seed and keep evaluation cases separate.

**Output:** A chunking benchmark and source-offset viewer.

**Effort:** 10h · Beginner → intermediate

- **Grounded retrieval checkpoint:** Extend the project with Grounded retrieval checkpoint in Chunking experiment arena. Adapt this focused lab to the project data: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Grounded retrieval checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chunking benchmark and source-offset viewer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Grounded retrieval checkpoint: Grounded retrieval checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare retrieval on identical queries and preserve exact source spans.
- [ ] Grounded retrieval checkpoint: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Citation integrity checker

A reviewer needs to catch answers citing the wrong source.

**Data:** Write 30 claims, source passages and deliberately incorrect citations. Use a fixed seed and keep evaluation cases separate.

**Output:** A citation validation report and abstention interface.

**Effort:** 10h · Beginner → intermediate

- **Grounded retrieval checkpoint:** Extend the project with Grounded retrieval checkpoint in Citation integrity checker. Adapt this focused lab to the project data: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Grounded retrieval checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A citation validation report and abstention interface. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Grounded retrieval checkpoint: Grounded retrieval checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Flag missing IDs and unsupported spans; do not equate a valid link with support.
- [ ] Grounded retrieval checkpoint: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Embedding retrieval scorecard

A builder needs to choose representations for a small corpus.

**Data:** Use local notes and labeled paraphrases; TF-IDF is the offline baseline. Use a fixed seed and keep evaluation cases separate.

**Output:** A representation comparison with dimension and latency reports.

**Effort:** 10h · Beginner → intermediate

- **Grounded retrieval checkpoint:** Extend the project with Grounded retrieval checkpoint in Embedding retrieval scorecard. Adapt this focused lab to the project data: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Grounded retrieval checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A representation comparison with dimension and latency reports. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Grounded retrieval checkpoint: Grounded retrieval checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep evaluation queries separate and identify model download requirements.
- [ ] Grounded retrieval checkpoint: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Concept relationship explorer

A learner needs to navigate relationships between study notes.

**Data:** Author 25 concepts and 40 typed relationships in JSON. Use a fixed seed and keep evaluation cases separate.

**Output:** A graph traversal and provenance viewer.

**Effort:** 10h · Beginner → intermediate

- **Grounded retrieval checkpoint:** Extend the project with Grounded retrieval checkpoint in Concept relationship explorer. Adapt this focused lab to the project data: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Grounded retrieval checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A graph traversal and provenance viewer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Grounded retrieval checkpoint: Grounded retrieval checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Handle cycles and distinguish authored edges from inferred hypotheses.
- [ ] Grounded retrieval checkpoint: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Hybrid retrieval benchmark

An analyst needs both exact-code and paraphrase retrieval.

**Data:** Generate 80 catalog entries with product codes and prose descriptions. Use a fixed seed and keep evaluation cases separate.

**Output:** A lexical/vector fusion and reranking comparison.

**Effort:** 10h · Beginner → intermediate

- **Grounded retrieval checkpoint:** Extend the project with Grounded retrieval checkpoint in Hybrid retrieval benchmark. Adapt this focused lab to the project data: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Grounded retrieval checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A lexical/vector fusion and reranking comparison. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Grounded retrieval checkpoint: Grounded retrieval checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Measure exact-code and paraphrase slices separately.
- [ ] Grounded retrieval checkpoint: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Incremental document index

A librarian needs updated documents without stale duplicate chunks.

**Data:** Create 20 versioned local documents with additions and deletions. Use a fixed seed and keep evaluation cases separate.

**Output:** An idempotent ingestion and deletion workflow.

**Effort:** 10h · Beginner → intermediate

- **Grounded retrieval checkpoint:** Extend the project with Grounded retrieval checkpoint in Incremental document index. Adapt this focused lab to the project data: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Grounded retrieval checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An idempotent ingestion and deletion workflow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Grounded retrieval checkpoint: Grounded retrieval checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Re-ingest twice, delete a source and prove its chunks disappear.
- [ ] Grounded retrieval checkpoint: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Personal notes retrieval desk

A student needs answers traceable to their own notes.

**Data:** Create ten Markdown notes and 20 query/relevance judgments. Use a fixed seed and keep evaluation cases separate.

**Output:** A local search interface with passage IDs and citations.

**Effort:** 10h · Beginner → intermediate

- **Grounded retrieval checkpoint:** Extend the project with Grounded retrieval checkpoint in Personal notes retrieval desk. Adapt this focused lab to the project data: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Grounded retrieval checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local search interface with passage IDs and citations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Grounded retrieval checkpoint: Grounded retrieval checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report recall at five and refuse unsupported answers.
- [ ] Grounded retrieval checkpoint: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Permission-aware team search

A team needs retrieval that respects document access rights.

**Data:** Generate three fictional roles and 30 access-labeled documents. Use a fixed seed and keep evaluation cases separate.

**Output:** A retrieval filter and adversarial permission test set.

**Effort:** 10h · Beginner → intermediate

- **Grounded retrieval checkpoint:** Extend the project with Grounded retrieval checkpoint in Permission-aware team search. Adapt this focused lab to the project data: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Grounded retrieval checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A retrieval filter and adversarial permission test set. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Grounded retrieval checkpoint: Grounded retrieval checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Unauthorized passages never enter the retrieved context.
- [ ] Grounded retrieval checkpoint: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Retrieval failure diagnosis bench

A maintainer needs to separate retrieval and answer failures.

**Data:** Write 25 questions including missing evidence and conflicting passages. Use a fixed seed and keep evaluation cases separate.

**Output:** A retrieval/answer error taxonomy and regression report.

**Effort:** 10h · Beginner → intermediate

- **Grounded retrieval checkpoint:** Extend the project with Grounded retrieval checkpoint in Retrieval failure diagnosis bench. Adapt this focused lab to the project data: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Grounded retrieval checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A retrieval/answer error taxonomy and regression report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Grounded retrieval checkpoint: Grounded retrieval checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Measure retrieval recall separately from answer faithfulness.
- [ ] Grounded retrieval checkpoint: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Read-only SQL evidence assistant

An analyst needs answers grounded in tabular records.

**Data:** Use a local SQLite database of fictional orders and customers. Use a fixed seed and keep evaluation cases separate.

**Output:** A whitelisted query workflow with rows cited as evidence.

**Effort:** 10h · Beginner → intermediate

- **Grounded retrieval checkpoint:** Extend the project with Grounded retrieval checkpoint in Read-only SQL evidence assistant. Adapt this focused lab to the project data: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Grounded retrieval checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A whitelisted query workflow with rows cited as evidence. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Grounded retrieval checkpoint: Grounded retrieval checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject writes, bound row counts and verify join totals.
- [ ] Grounded retrieval checkpoint: Index ten source-controlled documents, evaluate twenty labeled queries and return traceable citations. Demonstrate source updates, deletion, permission filtering and abstention when evidence is missing.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

