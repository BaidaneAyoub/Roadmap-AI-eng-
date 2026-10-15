# Python

Write understandable, testable programs before adding models.

## Main route · Step 1 of 8

**Goal:** Write reliable Python programs before connecting AI tools.

**Stage checkpoint:** Build a JSON-based study tracker with functions, validation, logging and tests.

Write and test a small Python program.

Follow the modules and lessons below at your pace. Finish each exercise, save your evidence and self-assessment, then continue. Completed and Already known count as completed; Skipped is reported separately. You can move ahead at any time.

[Full pipeline](../PIPELINE.md) · [Next step: Engineering foundations](engineering.md)

## Language essentials

<a id="python-values"></a>

### Types and collections

Choose data representations that make model inputs and outputs predictable.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** None; start here. Navigation is unrestricted.

#### Concepts

- [ ] **Types:** int, float, bool, str and None express different kinds of values; conversions can lose information.
  - Example: float("3.5") succeeds but int("3.5") raises ValueError.
  - Videos:
    - [CS50P 0 — Functions and variables](https://www.youtube.com/watch?v=JP7ITIXGpHk) · Harvard CS50 · David Malan · University lecture
      - Explains: Values, types, functions, parameters and return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on types. Then reproduce the lesson example: float("3.5") succeeds but int("3.5") raises ValueError.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/0/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on types. Then reproduce the lesson example: float("3.5") succeeds but int("3.5") raises ValueError.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Collections:** Lists preserve order, dictionaries map keys to values, sets deduplicate and tuples express fixed records.
  - Example: Deduplicate document IDs with set(ids), then sort for reproducible output.
  - Videos:
    - [CS50P 0 — Functions and variables](https://www.youtube.com/watch?v=JP7ITIXGpHk) · Harvard CS50 · David Malan · University lecture
      - Explains: Values, types, functions, parameters and return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on collections. Then reproduce the lesson example: Deduplicate document IDs with set(ids), then sort for reproducible output.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/0/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on collections. Then reproduce the lesson example: Deduplicate document IDs with set(ids), then sort for reproducible output.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Mutability:** Lists and dictionaries can change in place; shared references can accidentally affect callers.
  - Example: Copy a list before removing records when the original is needed for evaluation.
  - Videos:
    - [CS50P 0 — Functions and variables](https://www.youtube.com/watch?v=JP7ITIXGpHk) · Harvard CS50 · David Malan · University lecture
      - Explains: Values, types, functions, parameters and return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on mutability. Then reproduce the lesson example: Copy a list before removing records when the original is needed for evaluation.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/0/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on mutability. Then reproduce the lesson example: Copy a list before removing records when the original is needed for evaluation.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/

#### YouTube: focused explanations and full courses

- [CS50P 0 — Functions and variables](https://www.youtube.com/watch?v=JP7ITIXGpHk) · Harvard CS50 · David Malan · University lecture
  - Explains: Values, types, functions, parameters and return values.
  - Useful because: A structured explanation with live coding; pause and reproduce the examples.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/2022/weeks/0/
- [CS50P 2 — Loops](https://www.youtube.com/watch?v=-7xg8pGcP6w) · Harvard CS50 · David Malan · University lecture
  - Explains: Iteration, lists, dictionaries and nested data.
  - Useful because: A structured explanation with live coding; pause and reproduce the examples.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/2022/weeks/2/
- [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
  - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
  - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/

#### Free written resources

1. [CS50P: variables and functions](https://cs50.harvard.edu/python/2022/weeks/0/) — Free OpenCourseWare; account optional for submissions. Certificates on external platforms may cost money.
2. [Python: data structures](https://docs.python.org/3/tutorial/datastructures.html) — Free; no registration required. No paid materials required.

#### Lab: Types and collections

Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Types and collections:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Types and collections, explicitly apply Types, Collections, Mutability.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Types and collections: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Types and collections: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Types and collections:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Types and collections, explicitly apply Types, Collections, Mutability.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Types and collections: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Types and collections: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Types and collections:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Types and collections, explicitly apply Types, Collections, Mutability.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Types and collections: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Types and collections: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Types and collections:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Types and collections, explicitly apply Types, Collections, Mutability.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Types and collections: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Types and collections: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Types and collections:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Types and collections, explicitly apply Types, Collections, Mutability.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Types and collections: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Types and collections: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Types and collections:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Types and collections, explicitly apply Types, Collections, Mutability.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Types and collections: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Types and collections: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Types and collections:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Types and collections, explicitly apply Types, Collections, Mutability.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Types and collections: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Types and collections: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Types and collections:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Types and collections, explicitly apply Types, Collections, Mutability.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Types and collections: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Types and collections: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Types and collections:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Types and collections, explicitly apply Types, Collections, Mutability.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Types and collections: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Types and collections: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Types and collections:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Types and collections, explicitly apply Types, Collections, Mutability.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Types and collections: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Types and collections: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="python-control"></a>

### Control flow and functions

Turn a notebook experiment into reusable, explicit behavior.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Types and collections](python.md#python-values) Navigation is unrestricted.

#### Concepts

- [ ] **Branches and loops:** if selects behavior and for iterates over inputs; use early returns for invalid cases.
  - Example: Skip a row without text before calling the tokenizer.
  - Videos:
    - [CS50P 1 — Conditionals](https://www.youtube.com/watch?v=_b6NgY_pMdw) · Harvard CS50 · David Malan · University lecture
      - Explains: Boolean logic, comparisons and branching.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on branches and loops. Then reproduce the lesson example: Skip a row without text before calling the tokenizer.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/1/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on branches and loops. Then reproduce the lesson example: Skip a row without text before calling the tokenizer.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Functions:** Parameters, return values and scope separate a reusable transformation from its caller.
  - Example: normalize(text) returns a string instead of printing it.
  - Videos:
    - [CS50P 1 — Conditionals](https://www.youtube.com/watch?v=_b6NgY_pMdw) · Harvard CS50 · David Malan · University lecture
      - Explains: Boolean logic, comparisons and branching.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on functions. Then reproduce the lesson example: normalize(text) returns a string instead of printing it.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/1/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on functions. Then reproduce the lesson example: normalize(text) returns a string instead of printing it.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Comprehensions:** A comprehension expresses a simple mapping or filtering operation; complex branching belongs in a loop.
  - Example: [x.lower() for x in names if x] removes blank entries.
  - Videos:
    - [CS50P 1 — Conditionals](https://www.youtube.com/watch?v=_b6NgY_pMdw) · Harvard CS50 · David Malan · University lecture
      - Explains: Boolean logic, comparisons and branching.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on comprehensions. Then reproduce the lesson example: [x.lower() for x in names if x] removes blank entries.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/1/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on comprehensions. Then reproduce the lesson example: [x.lower() for x in names if x] removes blank entries.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/

#### YouTube: focused explanations and full courses

- [CS50P 1 — Conditionals](https://www.youtube.com/watch?v=_b6NgY_pMdw) · Harvard CS50 · David Malan · University lecture
  - Explains: Boolean logic, comparisons and branching.
  - Useful because: A structured explanation with live coding; pause and reproduce the examples.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/2022/weeks/1/
- [CS50P 2 — Loops](https://www.youtube.com/watch?v=-7xg8pGcP6w) · Harvard CS50 · David Malan · University lecture
  - Explains: Iteration, lists, dictionaries and nested data.
  - Useful because: A structured explanation with live coding; pause and reproduce the examples.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/2022/weeks/2/
- [CS50P 0 — Functions and variables](https://www.youtube.com/watch?v=JP7ITIXGpHk) · Harvard CS50 · David Malan · University lecture
  - Explains: Values, types, functions, parameters and return values.
  - Useful because: A structured explanation with live coding; pause and reproduce the examples.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/2022/weeks/0/
- [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
  - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
  - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/

#### Free written resources

1. [CS50P: conditionals](https://cs50.harvard.edu/python/2022/weeks/1/) — Free OpenCourseWare; account optional for submissions. Certificates on external platforms may cost money.
2. [Python: control flow](https://docs.python.org/3/tutorial/controlflow.html) — Free; no registration required. No paid materials required.

#### Lab: Control flow and functions

Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Control flow and functions:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Control flow and functions, explicitly apply Branches and loops, Functions, Comprehensions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Control flow and functions: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Control flow and functions: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Control flow and functions:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Control flow and functions, explicitly apply Branches and loops, Functions, Comprehensions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Control flow and functions: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Control flow and functions: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Control flow and functions:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Control flow and functions, explicitly apply Branches and loops, Functions, Comprehensions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Control flow and functions: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Control flow and functions: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Control flow and functions:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Control flow and functions, explicitly apply Branches and loops, Functions, Comprehensions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Control flow and functions: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Control flow and functions: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Control flow and functions:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Control flow and functions, explicitly apply Branches and loops, Functions, Comprehensions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Control flow and functions: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Control flow and functions: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Control flow and functions:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Control flow and functions, explicitly apply Branches and loops, Functions, Comprehensions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Control flow and functions: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Control flow and functions: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Control flow and functions:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Control flow and functions, explicitly apply Branches and loops, Functions, Comprehensions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Control flow and functions: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Control flow and functions: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Control flow and functions:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Control flow and functions, explicitly apply Branches and loops, Functions, Comprehensions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Control flow and functions: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Control flow and functions: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Control flow and functions:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Control flow and functions, explicitly apply Branches and loops, Functions, Comprehensions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Control flow and functions: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Control flow and functions: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Control flow and functions:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Control flow and functions, explicitly apply Branches and loops, Functions, Comprehensions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Control flow and functions: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Control flow and functions: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="python-files"></a>

### Files, JSON and exceptions

Safely load datasets and report malformed inputs instead of silently losing data.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Control flow and functions](python.md#python-control) Navigation is unrestricted.

#### Concepts

- [ ] **Context managers:** with closes a file even when an exception interrupts reading.
  - Example: with open(path, encoding="utf-8") as f reads Unicode text safely.
  - Videos:
    - [CS50P 6 — File I/O](https://www.youtube.com/watch?v=KD-Yoel6EVQ) · Harvard CS50 · David Malan · University lecture
      - Explains: Reading/writing files, CSV data and processing records.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on context managers. Then reproduce the lesson example: with open(path, encoding="utf-8") as f reads Unicode text safely.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/6/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on context managers. Then reproduce the lesson example: with open(path, encoding="utf-8") as f reads Unicode text safely.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **JSON:** JSON represents interoperable objects, arrays and scalar values, but not arbitrary Python objects.
  - Example: json.loads turns an API response body into a dictionary.
  - Videos:
    - [CS50P 6 — File I/O](https://www.youtube.com/watch?v=KD-Yoel6EVQ) · Harvard CS50 · David Malan · University lecture
      - Explains: Reading/writing files, CSV data and processing records.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on json. Then reproduce the lesson example: json.loads turns an API response body into a dictionary.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/6/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on json. Then reproduce the lesson example: json.loads turns an API response body into a dictionary.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Exceptions:** Catch specific expected errors; let unexpected programming errors remain visible.
  - Example: Catch JSONDecodeError and report the line rather than returning an empty dataset.
  - Videos:
    - [CS50P 6 — File I/O](https://www.youtube.com/watch?v=KD-Yoel6EVQ) · Harvard CS50 · David Malan · University lecture
      - Explains: Reading/writing files, CSV data and processing records.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on exceptions. Then reproduce the lesson example: Catch JSONDecodeError and report the line rather than returning an empty dataset.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/6/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on exceptions. Then reproduce the lesson example: Catch JSONDecodeError and report the line rather than returning an empty dataset.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/

#### YouTube: focused explanations and full courses

- [CS50P 6 — File I/O](https://www.youtube.com/watch?v=KD-Yoel6EVQ) · Harvard CS50 · David Malan · University lecture
  - Explains: Reading/writing files, CSV data and processing records.
  - Useful because: A structured explanation with live coding; pause and reproduce the examples.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/2022/weeks/6/
- [CS50P 3 — Exceptions](https://www.youtube.com/watch?v=LW7g1169v7w) · Harvard CS50 · David Malan · University lecture
  - Explains: Exceptions, handling invalid inputs and explicit failure behavior.
  - Useful because: A structured explanation with live coding; pause and reproduce the examples.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/2022/weeks/3/
- [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
  - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
  - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/

#### Free written resources

1. [CS50P: file I/O](https://cs50.harvard.edu/python/2022/weeks/6/) — Free OpenCourseWare; account optional for submissions. Certificates on external platforms may cost money.
2. [Python: input and output](https://docs.python.org/3/tutorial/inputoutput.html) — Free; no registration required. No paid materials required.

#### Lab: Files, JSON and exceptions

Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Files, JSON and exceptions:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Files, JSON and exceptions, explicitly apply Context managers, JSON, Exceptions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Files, JSON and exceptions: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Files, JSON and exceptions: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Files, JSON and exceptions:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Files, JSON and exceptions, explicitly apply Context managers, JSON, Exceptions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Files, JSON and exceptions: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Files, JSON and exceptions: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Files, JSON and exceptions:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Files, JSON and exceptions, explicitly apply Context managers, JSON, Exceptions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Files, JSON and exceptions: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Files, JSON and exceptions: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Files, JSON and exceptions:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Files, JSON and exceptions, explicitly apply Context managers, JSON, Exceptions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Files, JSON and exceptions: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Files, JSON and exceptions: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Files, JSON and exceptions:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Files, JSON and exceptions, explicitly apply Context managers, JSON, Exceptions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Files, JSON and exceptions: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Files, JSON and exceptions: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Files, JSON and exceptions:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Files, JSON and exceptions, explicitly apply Context managers, JSON, Exceptions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Files, JSON and exceptions: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Files, JSON and exceptions: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Files, JSON and exceptions:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Files, JSON and exceptions, explicitly apply Context managers, JSON, Exceptions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Files, JSON and exceptions: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Files, JSON and exceptions: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Files, JSON and exceptions:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Files, JSON and exceptions, explicitly apply Context managers, JSON, Exceptions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Files, JSON and exceptions: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Files, JSON and exceptions: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Files, JSON and exceptions:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Files, JSON and exceptions, explicitly apply Context managers, JSON, Exceptions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Files, JSON and exceptions: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Files, JSON and exceptions: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Files, JSON and exceptions:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Files, JSON and exceptions, explicitly apply Context managers, JSON, Exceptions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Files, JSON and exceptions: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Files, JSON and exceptions: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Production Python

<a id="python-modules"></a>

### Modules, environments and dependencies

Keep projects reproducible and imports independent of one computer.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Files, JSON and exceptions](python.md#python-files) Navigation is unrestricted.

#### Concepts

- [ ] **Modules and packages:** Modules group related functions; packages define importable directories and public interfaces.
  - Example: Import a preprocessing function instead of copying it into training and serving scripts.
  - Videos:
    - [CS50P 4 — Libraries](https://www.youtube.com/watch?v=MztLZWibctI) · Harvard CS50 · David Malan · University lecture
      - Explains: Imports, packages, command-line arguments and third-party libraries.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on modules and packages. Then reproduce the lesson example: Import a preprocessing function instead of copying it into training and serving scripts.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/4/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on modules and packages. Then reproduce the lesson example: Import a preprocessing function instead of copying it into training and serving scripts.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Virtual environments:** An isolated environment prevents unrelated projects from sharing incompatible packages.
  - Example: python -m venv .venv creates a project environment.
  - Videos:
    - [CS50P 4 — Libraries](https://www.youtube.com/watch?v=MztLZWibctI) · Harvard CS50 · David Malan · University lecture
      - Explains: Imports, packages, command-line arguments and third-party libraries.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on virtual environments. Then reproduce the lesson example: python -m venv .venv creates a project environment.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/4/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on virtual environments. Then reproduce the lesson example: python -m venv .venv creates a project environment.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Dependency versions:** Record dependencies and test a clean installation rather than trusting your current environment.
  - Example: Install pinned requirements into a new environment and rerun a small example.
  - Videos:
    - [CS50P 4 — Libraries](https://www.youtube.com/watch?v=MztLZWibctI) · Harvard CS50 · David Malan · University lecture
      - Explains: Imports, packages, command-line arguments and third-party libraries.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on dependency versions. Then reproduce the lesson example: Install pinned requirements into a new environment and rerun a small example.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/4/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on dependency versions. Then reproduce the lesson example: Install pinned requirements into a new environment and rerun a small example.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/

#### YouTube: focused explanations and full courses

- [CS50P 4 — Libraries](https://www.youtube.com/watch?v=MztLZWibctI) · Harvard CS50 · David Malan · University lecture
  - Explains: Imports, packages, command-line arguments and third-party libraries.
  - Useful because: A structured explanation with live coding; pause and reproduce the examples.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/2022/weeks/4/
- [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
  - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
  - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/

#### Free written resources

1. [Python: modules](https://docs.python.org/3/tutorial/modules.html) — Free; no registration required. No paid materials required.
2. [Python: virtual environments](https://docs.python.org/3/tutorial/venv.html) — Free; no registration required. No paid materials required.

#### Lab: Modules, environments and dependencies

Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Modules, environments and dependencies:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Modules, environments and dependencies, explicitly apply Modules and packages, Virtual environments, Dependency versions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Modules, environments and dependencies: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Modules, environments and dependencies: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Modules, environments and dependencies:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Modules, environments and dependencies, explicitly apply Modules and packages, Virtual environments, Dependency versions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Modules, environments and dependencies: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Modules, environments and dependencies: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Modules, environments and dependencies:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Modules, environments and dependencies, explicitly apply Modules and packages, Virtual environments, Dependency versions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Modules, environments and dependencies: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Modules, environments and dependencies: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Modules, environments and dependencies:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Modules, environments and dependencies, explicitly apply Modules and packages, Virtual environments, Dependency versions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Modules, environments and dependencies: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Modules, environments and dependencies: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Modules, environments and dependencies:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Modules, environments and dependencies, explicitly apply Modules and packages, Virtual environments, Dependency versions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Modules, environments and dependencies: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Modules, environments and dependencies: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Modules, environments and dependencies:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Modules, environments and dependencies, explicitly apply Modules and packages, Virtual environments, Dependency versions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Modules, environments and dependencies: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Modules, environments and dependencies: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Modules, environments and dependencies:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Modules, environments and dependencies, explicitly apply Modules and packages, Virtual environments, Dependency versions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Modules, environments and dependencies: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Modules, environments and dependencies: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Modules, environments and dependencies:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Modules, environments and dependencies, explicitly apply Modules and packages, Virtual environments, Dependency versions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Modules, environments and dependencies: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Modules, environments and dependencies: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Modules, environments and dependencies:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Modules, environments and dependencies, explicitly apply Modules and packages, Virtual environments, Dependency versions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Modules, environments and dependencies: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Modules, environments and dependencies: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Modules, environments and dependencies:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Modules, environments and dependencies, explicitly apply Modules and packages, Virtual environments, Dependency versions.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Modules, environments and dependencies: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Modules, environments and dependencies: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="python-objects"></a>

### OOP, dataclasses and typing

Express model records and interfaces without unnecessary inheritance.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Modules, environments and dependencies](python.md#python-modules) Navigation is unrestricted.

#### Concepts

- [ ] **Classes:** Objects combine state with operations when that state has a clear lifecycle.
  - Example: A DatasetReader stores its path and yields validated records.
  - Videos:
    - [CS50P 8 — Object-oriented programming](https://www.youtube.com/watch?v=e4fwY9ZsxPw) · Harvard CS50 · David Malan · University lecture
      - Explains: Classes, objects, methods, properties and inheritance.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on classes. Then reproduce the lesson example: A DatasetReader stores its path and yields validated records.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/8/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on classes. Then reproduce the lesson example: A DatasetReader stores its path and yields validated records.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Dataclasses:** Dataclasses define lightweight records with generated initialization and representation.
  - Example: A Prediction holds label, probability and model_version.
  - Videos:
    - [Why Python dataclasses are useful](https://www.youtube.com/watch?v=CvQ7e6yUtnw) · ArjanCodes · Focused tutorial
      - Explains: Dataclass records and Python 3.10 capabilities.
      - Useful because: Represent inputs/predictions with less boilerplate; still validate external data.
      - Watch for: Focus on dataclasses. Then reproduce the lesson example: A Prediction holds label, probability and model_version.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=CvQ7e6yUtnw
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on dataclasses. Then reproduce the lesson example: A Prediction holds label, probability and model_version.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Type hints:** Hints describe contracts for tools and readers; runtime validation remains necessary at external inputs.
  - Example: list[str] documents text inputs but does not validate received JSON.
  - Videos:
    - [Python type hints and typing features](https://www.youtube.com/watch?v=mvJuxowIwIc) · mCoding · Focused tutorial
      - Explains: Python typing features and clearer annotations.
      - Useful because: Make interfaces readable while distinguishing type checking from runtime validation.
      - Watch for: Focus on type hints. Then reproduce the lesson example: list[str] documents text inputs but does not validate received JSON.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=mvJuxowIwIc
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on type hints. Then reproduce the lesson example: list[str] documents text inputs but does not validate received JSON.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/

#### YouTube: focused explanations and full courses

- [CS50P 8 — Object-oriented programming](https://www.youtube.com/watch?v=e4fwY9ZsxPw) · Harvard CS50 · David Malan · University lecture
  - Explains: Classes, objects, methods, properties and inheritance.
  - Useful because: A structured explanation with live coding; pause and reproduce the examples.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/2022/weeks/8/
- [Why Python dataclasses are useful](https://www.youtube.com/watch?v=CvQ7e6yUtnw) · ArjanCodes · Focused tutorial
  - Explains: Dataclass records and Python 3.10 capabilities.
  - Useful because: Represent inputs/predictions with less boilerplate; still validate external data.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=CvQ7e6yUtnw
- [Python type hints and typing features](https://www.youtube.com/watch?v=mvJuxowIwIc) · mCoding · Focused tutorial
  - Explains: Python typing features and clearer annotations.
  - Useful because: Make interfaces readable while distinguishing type checking from runtime validation.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=mvJuxowIwIc
- [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
  - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
  - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/

#### Free written resources

1. [Python: classes](https://docs.python.org/3/tutorial/classes.html) — Free; no registration required. No paid materials required.
2. [CS50P: object-oriented programming](https://cs50.harvard.edu/python/2022/weeks/8/) — Free OpenCourseWare; account optional for submissions. Certificates on external platforms may cost money.

#### Lab: OOP, dataclasses and typing

Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **OOP, dataclasses and typing:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For OOP, dataclasses and typing, explicitly apply Classes, Dataclasses, Type hints.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] OOP, dataclasses and typing: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] OOP, dataclasses and typing: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **OOP, dataclasses and typing:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For OOP, dataclasses and typing, explicitly apply Classes, Dataclasses, Type hints.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] OOP, dataclasses and typing: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] OOP, dataclasses and typing: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **OOP, dataclasses and typing:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For OOP, dataclasses and typing, explicitly apply Classes, Dataclasses, Type hints.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] OOP, dataclasses and typing: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] OOP, dataclasses and typing: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **OOP, dataclasses and typing:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For OOP, dataclasses and typing, explicitly apply Classes, Dataclasses, Type hints.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] OOP, dataclasses and typing: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] OOP, dataclasses and typing: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **OOP, dataclasses and typing:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For OOP, dataclasses and typing, explicitly apply Classes, Dataclasses, Type hints.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] OOP, dataclasses and typing: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] OOP, dataclasses and typing: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **OOP, dataclasses and typing:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For OOP, dataclasses and typing, explicitly apply Classes, Dataclasses, Type hints.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] OOP, dataclasses and typing: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] OOP, dataclasses and typing: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **OOP, dataclasses and typing:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For OOP, dataclasses and typing, explicitly apply Classes, Dataclasses, Type hints.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] OOP, dataclasses and typing: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] OOP, dataclasses and typing: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **OOP, dataclasses and typing:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For OOP, dataclasses and typing, explicitly apply Classes, Dataclasses, Type hints.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] OOP, dataclasses and typing: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] OOP, dataclasses and typing: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **OOP, dataclasses and typing:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For OOP, dataclasses and typing, explicitly apply Classes, Dataclasses, Type hints.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] OOP, dataclasses and typing: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] OOP, dataclasses and typing: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **OOP, dataclasses and typing:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For OOP, dataclasses and typing, explicitly apply Classes, Dataclasses, Type hints.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] OOP, dataclasses and typing: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] OOP, dataclasses and typing: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="python-iteration"></a>

### Iterators and generators

Process data incrementally instead of loading everything into memory.

**Priority:** Useful next · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [OOP, dataclasses and typing](python.md#python-objects) Navigation is unrestricted.

#### Concepts

- [ ] **Iteration protocol:** An iterable produces an iterator and next retrieves one item until exhaustion.
  - Example: A file object lets a for loop consume one line at a time.
  - Videos:
    - [Python generators: how and why to use them](https://www.youtube.com/watch?v=bD05uGo_sVI) · Corey Schafer · Focused tutorial
      - Explains: Lazy iteration, yield and the memory benefits of generators.
      - Useful because: Use it before streaming a dataset or implementing batches.
      - Watch for: Focus on iteration protocol. Then reproduce the lesson example: A file object lets a for loop consume one line at a time.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=bD05uGo_sVI
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on iteration protocol. Then reproduce the lesson example: A file object lets a for loop consume one line at a time.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Generators:** yield suspends a function while preserving its state; this supports lazy pipelines.
  - Example: Yield cleaned documents from a JSONL reader.
  - Videos:
    - [Python generators: how and why to use them](https://www.youtube.com/watch?v=bD05uGo_sVI) · Corey Schafer · Focused tutorial
      - Explains: Lazy iteration, yield and the memory benefits of generators.
      - Useful because: Use it before streaming a dataset or implementing batches.
      - Watch for: Focus on generators. Then reproduce the lesson example: Yield cleaned documents from a JSONL reader.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=bD05uGo_sVI
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on generators. Then reproduce the lesson example: Yield cleaned documents from a JSONL reader.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Batching:** Bounded batches control memory and inference throughput.
  - Example: Accumulate 32 examples then flush the final partial batch.
  - Videos:
    - [Python generators: how and why to use them](https://www.youtube.com/watch?v=bD05uGo_sVI) · Corey Schafer · Focused tutorial
      - Explains: Lazy iteration, yield and the memory benefits of generators.
      - Useful because: Use it before streaming a dataset or implementing batches.
      - Watch for: Focus on batching. Then reproduce the lesson example: Accumulate 32 examples then flush the final partial batch.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=bD05uGo_sVI
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on batching. Then reproduce the lesson example: Accumulate 32 examples then flush the final partial batch.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/

#### YouTube: focused explanations and full courses

- [Python generators: how and why to use them](https://www.youtube.com/watch?v=bD05uGo_sVI) · Corey Schafer · Focused tutorial
  - Explains: Lazy iteration, yield and the memory benefits of generators.
  - Useful because: Use it before streaming a dataset or implementing batches.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=bD05uGo_sVI
- [CS50P 9 — Et cetera](https://www.youtube.com/watch?v=6pgodt1mezg) · Harvard CS50 · David Malan · University lecture
  - Explains: Comprehensions, generators and useful language features.
  - Useful because: A structured explanation with live coding; pause and reproduce the examples.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/2022/weeks/9/
- [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
  - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
  - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/

#### Free written resources

1. [Python: generators](https://docs.python.org/3/tutorial/classes.html#generators) — Free; no registration required. No paid materials required.
2. [itertools recipes](https://docs.python.org/3/library/itertools.html#itertools-recipes) — Free; no registration required. No paid materials required.

#### Lab: Iterators and generators

Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Iterators and generators:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Iterators and generators, explicitly apply Iteration protocol, Generators, Batching.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Iterators and generators: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Iterators and generators: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Iterators and generators:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Iterators and generators, explicitly apply Iteration protocol, Generators, Batching.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Iterators and generators: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Iterators and generators: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Iterators and generators:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Iterators and generators, explicitly apply Iteration protocol, Generators, Batching.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Iterators and generators: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Iterators and generators: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Iterators and generators:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Iterators and generators, explicitly apply Iteration protocol, Generators, Batching.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Iterators and generators: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Iterators and generators: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Iterators and generators:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Iterators and generators, explicitly apply Iteration protocol, Generators, Batching.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Iterators and generators: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Iterators and generators: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Iterators and generators:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Iterators and generators, explicitly apply Iteration protocol, Generators, Batching.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Iterators and generators: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Iterators and generators: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Iterators and generators:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Iterators and generators, explicitly apply Iteration protocol, Generators, Batching.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Iterators and generators: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Iterators and generators: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Iterators and generators:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Iterators and generators, explicitly apply Iteration protocol, Generators, Batching.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Iterators and generators: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Iterators and generators: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Iterators and generators:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Iterators and generators, explicitly apply Iteration protocol, Generators, Batching.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Iterators and generators: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Iterators and generators: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Iterators and generators:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Iterators and generators, explicitly apply Iteration protocol, Generators, Batching.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Iterators and generators: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Iterators and generators: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="python-async"></a>

### Async, logging, debugging and pytest

Make concurrent I/O observable and preserve confidence when changing behavior.

**Priority:** Core · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [Iterators and generators](python.md#python-iteration) Navigation is unrestricted.

#### Concepts

- [ ] **Async I/O:** async/await lets other tasks run during waiting; CPU-heavy training does not become faster merely by using async.
  - Example: Run independent mock network calls with asyncio.gather.
  - Videos:
    - [Asyncio in Python — full tutorial](https://www.youtube.com/watch?v=Qb9s3UiMSTA) · Tech With Tim · Tool tutorial
      - Explains: Coroutines, async/await and concurrent I/O patterns.
      - Useful because: Understand what happens while an application waits on tools or network requests.
      - Watch for: Focus on async i/o. Then reproduce the lesson example: Run independent mock network calls with asyncio.gather.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=Qb9s3UiMSTA
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on async i/o. Then reproduce the lesson example: Run independent mock network calls with asyncio.gather.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Logging and debugging:** Structured messages and tracebacks expose where failures occurred; avoid logging secrets or personal inputs.
  - Example: Log record count and request ID instead of entire customer messages.
  - Videos:
    - [Python logging basics](https://www.youtube.com/watch?v=-ARI4Cz-awo) · Corey Schafer · Focused tutorial
      - Explains: Log levels, formatting and logging to files.
      - Useful because: Replace scattered print statements with useful operational evidence.
      - Watch for: Focus on logging and debugging. Then reproduce the lesson example: Log record count and request ID instead of entire customer messages.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=-ARI4Cz-awo
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on logging and debugging. Then reproduce the lesson example: Log record count and request ID instead of entire customer messages.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **pytest:** Assertions, fixtures and parametrization capture expected behavior and prevent regressions.
  - Example: Parametrize normalization tests for empty and Unicode inputs.
  - Videos:
    - [CS50P 5 — Unit tests](https://www.youtube.com/watch?v=tIrcxwLqzjQ) · Harvard CS50 · David Malan · University lecture
      - Explains: Assertions, pytest, test organization and testing return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on pytest. Then reproduce the lesson example: Parametrize normalization tests for empty and Unicode inputs.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/5/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on pytest. Then reproduce the lesson example: Parametrize normalization tests for empty and Unicode inputs.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/

#### YouTube: focused explanations and full courses

- [Asyncio in Python — full tutorial](https://www.youtube.com/watch?v=Qb9s3UiMSTA) · Tech With Tim · Tool tutorial
  - Explains: Coroutines, async/await and concurrent I/O patterns.
  - Useful because: Understand what happens while an application waits on tools or network requests.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=Qb9s3UiMSTA
- [Python logging basics](https://www.youtube.com/watch?v=-ARI4Cz-awo) · Corey Schafer · Focused tutorial
  - Explains: Log levels, formatting and logging to files.
  - Useful because: Replace scattered print statements with useful operational evidence.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=-ARI4Cz-awo
- [CS50P 5 — Unit tests](https://www.youtube.com/watch?v=tIrcxwLqzjQ) · Harvard CS50 · David Malan · University lecture
  - Explains: Assertions, pytest, test organization and testing return values.
  - Useful because: A structured explanation with live coding; pause and reproduce the examples.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/2022/weeks/5/
- [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
  - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
  - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/

#### Free written resources

1. [asyncio: coroutines and tasks](https://docs.python.org/3/library/asyncio-task.html) — Free; no registration required. No paid materials required.
2. [pytest: getting started](https://docs.pytest.org/en/stable/getting-started.html) — Free; no registration required. No paid materials required.

#### Lab: Async, logging, debugging and pytest

Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Async, logging, debugging and pytest:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Async, logging, debugging and pytest, explicitly apply Async I/O, Logging and debugging, pytest.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Async, logging, debugging and pytest: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Async, logging, debugging and pytest: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Async, logging, debugging and pytest:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Async, logging, debugging and pytest, explicitly apply Async I/O, Logging and debugging, pytest.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Async, logging, debugging and pytest: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Async, logging, debugging and pytest: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Async, logging, debugging and pytest:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Async, logging, debugging and pytest, explicitly apply Async I/O, Logging and debugging, pytest.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Async, logging, debugging and pytest: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Async, logging, debugging and pytest: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Async, logging, debugging and pytest:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Async, logging, debugging and pytest, explicitly apply Async I/O, Logging and debugging, pytest.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Async, logging, debugging and pytest: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Async, logging, debugging and pytest: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Async, logging, debugging and pytest:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Async, logging, debugging and pytest, explicitly apply Async I/O, Logging and debugging, pytest.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Async, logging, debugging and pytest: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Async, logging, debugging and pytest: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Async, logging, debugging and pytest:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Async, logging, debugging and pytest, explicitly apply Async I/O, Logging and debugging, pytest.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Async, logging, debugging and pytest: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Async, logging, debugging and pytest: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Async, logging, debugging and pytest:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Async, logging, debugging and pytest, explicitly apply Async I/O, Logging and debugging, pytest.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Async, logging, debugging and pytest: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Async, logging, debugging and pytest: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Async, logging, debugging and pytest:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Async, logging, debugging and pytest, explicitly apply Async I/O, Logging and debugging, pytest.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Async, logging, debugging and pytest: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Async, logging, debugging and pytest: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Async, logging, debugging and pytest:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Async, logging, debugging and pytest, explicitly apply Async I/O, Logging and debugging, pytest.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Async, logging, debugging and pytest: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Async, logging, debugging and pytest: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Async, logging, debugging and pytest:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Async, logging, debugging and pytest, explicitly apply Async I/O, Logging and debugging, pytest.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Async, logging, debugging and pytest: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Async, logging, debugging and pytest: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Practical Python details

<a id="python-resources-context"></a>

### Context managers, paths and safe file operations

Handle files and resources predictably when an AI pipeline stops halfway through an operation.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [Files, JSON and exceptions](python.md#python-files) Navigation is unrestricted.

#### Concepts

- [ ] **Context manager lifecycle:** A with statement releases a resource when its block exits, including when an exception is raised.
  - Example: Open a temporary text file inside with, raise an error and check that the handle closes.
  - Videos:
    - [CS50P 6 — File I/O](https://www.youtube.com/watch?v=KD-Yoel6EVQ) · Harvard CS50 · David Malan · University lecture
      - Explains: Reading/writing files, CSV data and processing records.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on context manager lifecycle. Then reproduce the lesson example: Open a temporary text file inside with, raise an error and check that the handle closes.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/6/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on context manager lifecycle. Then reproduce the lesson example: Open a temporary text file inside with, raise an error and check that the handle closes.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Path resolution:** Relative paths depend on the current working directory; use explicit project or data roots for repeatable execution.
  - Example: Run a script from a different directory and demonstrate how Path(__file__) can locate a fixture.
  - Videos:
    - [CS50P 6 — File I/O](https://www.youtube.com/watch?v=KD-Yoel6EVQ) · Harvard CS50 · David Malan · University lecture
      - Explains: Reading/writing files, CSV data and processing records.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on path resolution. Then reproduce the lesson example: Run a script from a different directory and demonstrate how Path(__file__) can locate a fixture.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/6/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on path resolution. Then reproduce the lesson example: Run a script from a different directory and demonstrate how Path(__file__) can locate a fixture.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Encoding and newline contracts:** Text decoding needs an explicit encoding and a documented policy for malformed input.
  - Example: Read a UTF-8 file containing Arabic and French text without losing characters.
  - Videos:
    - [CS50P 6 — File I/O](https://www.youtube.com/watch?v=KD-Yoel6EVQ) · Harvard CS50 · David Malan · University lecture
      - Explains: Reading/writing files, CSV data and processing records.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on encoding and newline contracts. Then reproduce the lesson example: Read a UTF-8 file containing Arabic and French text without losing characters.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/6/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on encoding and newline contracts. Then reproduce the lesson example: Read a UTF-8 file containing Arabic and French text without losing characters.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Atomic replacement:** Writing to a temporary file and replacing a destination on the same filesystem can avoid partially written outputs; atomicity is not the same as crash durability.
  - Example: Simulate a failed JSON serialisation before replacement and verify the old destination remains readable.
  - Videos:
    - [CS50P 6 — File I/O](https://www.youtube.com/watch?v=KD-Yoel6EVQ) · Harvard CS50 · David Malan · University lecture
      - Explains: Reading/writing files, CSV data and processing records.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on atomic replacement. Then reproduce the lesson example: Simulate a failed JSON serialisation before replacement and verify the old destination remains readable.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/6/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on atomic replacement. Then reproduce the lesson example: Simulate a failed JSON serialisation before replacement and verify the old destination remains readable.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Bounded input handling:** Read limits and validation prevent an unexpectedly large or malformed file from exhausting memory or corrupting a dataset.
  - Example: Reject a fixture larger than a small documented byte limit before parsing its JSON.
  - Videos:
    - [CS50P 6 — File I/O](https://www.youtube.com/watch?v=KD-Yoel6EVQ) · Harvard CS50 · David Malan · University lecture
      - Explains: Reading/writing files, CSV data and processing records.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on bounded input handling. Then reproduce the lesson example: Reject a fixture larger than a small documented byte limit before parsing its JSON.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/6/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on bounded input handling. Then reproduce the lesson example: Reject a fixture larger than a small documented byte limit before parsing its JSON.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/

#### YouTube: focused explanations and full courses

- [CS50P 6 — File I/O](https://www.youtube.com/watch?v=KD-Yoel6EVQ) · Harvard CS50 · David Malan · University lecture
  - Explains: Reading/writing files, CSV data and processing records.
  - Useful because: A structured explanation with live coding; pause and reproduce the examples.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/2022/weeks/6/
- [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
  - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
  - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/

#### Free written resources

1. [Python: reading and writing files](https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files) — Free; no registration required. No paid materials required.
2. [Python: pathlib](https://docs.python.org/3/library/pathlib.html) — Free; no registration required. No paid materials required.

#### Lab: Context managers, paths and safe file operations

Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Context managers, paths and safe file operations:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Context managers, paths and safe file operations, explicitly apply Context manager lifecycle, Path resolution, Encoding and newline contracts.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Context managers, paths and safe file operations: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Context managers, paths and safe file operations: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Context managers, paths and safe file operations:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Context managers, paths and safe file operations, explicitly apply Context manager lifecycle, Path resolution, Encoding and newline contracts.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Context managers, paths and safe file operations: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Context managers, paths and safe file operations: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Context managers, paths and safe file operations:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Context managers, paths and safe file operations, explicitly apply Context manager lifecycle, Path resolution, Encoding and newline contracts.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Context managers, paths and safe file operations: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Context managers, paths and safe file operations: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Context managers, paths and safe file operations:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Context managers, paths and safe file operations, explicitly apply Context manager lifecycle, Path resolution, Encoding and newline contracts.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Context managers, paths and safe file operations: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Context managers, paths and safe file operations: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Context managers, paths and safe file operations:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Context managers, paths and safe file operations, explicitly apply Context manager lifecycle, Path resolution, Encoding and newline contracts.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Context managers, paths and safe file operations: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Context managers, paths and safe file operations: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Context managers, paths and safe file operations:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Context managers, paths and safe file operations, explicitly apply Context manager lifecycle, Path resolution, Encoding and newline contracts.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Context managers, paths and safe file operations: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Context managers, paths and safe file operations: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Context managers, paths and safe file operations:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Context managers, paths and safe file operations, explicitly apply Context manager lifecycle, Path resolution, Encoding and newline contracts.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Context managers, paths and safe file operations: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Context managers, paths and safe file operations: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Context managers, paths and safe file operations:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Context managers, paths and safe file operations, explicitly apply Context manager lifecycle, Path resolution, Encoding and newline contracts.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Context managers, paths and safe file operations: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Context managers, paths and safe file operations: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Context managers, paths and safe file operations:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Context managers, paths and safe file operations, explicitly apply Context manager lifecycle, Path resolution, Encoding and newline contracts.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Context managers, paths and safe file operations: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Context managers, paths and safe file operations: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Context managers, paths and safe file operations:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Context managers, paths and safe file operations, explicitly apply Context manager lifecycle, Path resolution, Encoding and newline contracts.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Context managers, paths and safe file operations: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Context managers, paths and safe file operations: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="python-async-testing"></a>

### Async cancellation, timeouts and test doubles

Make concurrent network-style work predictable and testable without requiring a live paid API.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [Async, logging, debugging and pytest](python.md#python-async) Navigation is unrestricted.

#### Concepts

- [ ] **Coroutine versus blocking work:** An async function can cooperate at await points but a blocking call still blocks the event loop.
  - Example: Compare asyncio.sleep with time.sleep inside two concurrent toy tasks.
  - Videos:
    - [Asyncio in Python — full tutorial](https://www.youtube.com/watch?v=Qb9s3UiMSTA) · Tech With Tim · Tool tutorial
      - Explains: Coroutines, async/await and concurrent I/O patterns.
      - Useful because: Understand what happens while an application waits on tools or network requests.
      - Watch for: Focus on coroutine versus blocking work. Then reproduce the lesson example: Compare asyncio.sleep with time.sleep inside two concurrent toy tasks.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=Qb9s3UiMSTA
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on coroutine versus blocking work. Then reproduce the lesson example: Compare asyncio.sleep with time.sleep inside two concurrent toy tasks.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Timeout boundaries:** A timeout limits a particular operation; choose whether the budget includes retries and upstream waiting.
  - Example: Give a fake model request a 50ms budget and handle a deliberately slower response.
  - Videos:
    - [Asyncio in Python — full tutorial](https://www.youtube.com/watch?v=Qb9s3UiMSTA) · Tech With Tim · Tool tutorial
      - Explains: Coroutines, async/await and concurrent I/O patterns.
      - Useful because: Understand what happens while an application waits on tools or network requests.
      - Watch for: Focus on timeout boundaries. Then reproduce the lesson example: Give a fake model request a 50ms budget and handle a deliberately slower response.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=Qb9s3UiMSTA
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on timeout boundaries. Then reproduce the lesson example: Give a fake model request a 50ms budget and handle a deliberately slower response.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Cancellation cleanup:** Cancellation is a control signal; cleanup belongs in finally and swallowed cancellation can keep unwanted work alive.
  - Example: Cancel a worker and assert that its temporary resource is released.
  - Videos:
    - [Asyncio in Python — full tutorial](https://www.youtube.com/watch?v=Qb9s3UiMSTA) · Tech With Tim · Tool tutorial
      - Explains: Coroutines, async/await and concurrent I/O patterns.
      - Useful because: Understand what happens while an application waits on tools or network requests.
      - Watch for: Focus on cancellation cleanup. Then reproduce the lesson example: Cancel a worker and assert that its temporary resource is released.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=Qb9s3UiMSTA
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on cancellation cleanup. Then reproduce the lesson example: Cancel a worker and assert that its temporary resource is released.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Bounded concurrency:** A semaphore limits simultaneous work instead of creating an unbounded number of in-flight calls.
  - Example: Run twenty fake requests with a concurrency limit of three and record peak active workers.
  - Videos:
    - [Asyncio in Python — full tutorial](https://www.youtube.com/watch?v=Qb9s3UiMSTA) · Tech With Tim · Tool tutorial
      - Explains: Coroutines, async/await and concurrent I/O patterns.
      - Useful because: Understand what happens while an application waits on tools or network requests.
      - Watch for: Focus on bounded concurrency. Then reproduce the lesson example: Run twenty fake requests with a concurrency limit of three and record peak active workers.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=Qb9s3UiMSTA
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on bounded concurrency. Then reproduce the lesson example: Run twenty fake requests with a concurrency limit of three and record peak active workers.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Dependency fakes:** Replace an external dependency at a clear boundary to simulate successful, malformed and failing responses deterministically.
  - Example: Inject a fake client returning recorded JSON instead of calling a hosted model.
  - Videos:
    - [Asyncio in Python — full tutorial](https://www.youtube.com/watch?v=Qb9s3UiMSTA) · Tech With Tim · Tool tutorial
      - Explains: Coroutines, async/await and concurrent I/O patterns.
      - Useful because: Understand what happens while an application waits on tools or network requests.
      - Watch for: Focus on dependency fakes. Then reproduce the lesson example: Inject a fake client returning recorded JSON instead of calling a hosted model.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=Qb9s3UiMSTA
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on dependency fakes. Then reproduce the lesson example: Inject a fake client returning recorded JSON instead of calling a hosted model.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/

#### YouTube: focused explanations and full courses

- [Asyncio in Python — full tutorial](https://www.youtube.com/watch?v=Qb9s3UiMSTA) · Tech With Tim · Tool tutorial
  - Explains: Coroutines, async/await and concurrent I/O patterns.
  - Useful because: Understand what happens while an application waits on tools or network requests.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=Qb9s3UiMSTA
- [CS50P 5 — Unit tests](https://www.youtube.com/watch?v=tIrcxwLqzjQ) · Harvard CS50 · David Malan · University lecture
  - Explains: Assertions, pytest, test organization and testing return values.
  - Useful because: A structured explanation with live coding; pause and reproduce the examples.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/2022/weeks/5/
- [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
  - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
  - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/

#### Free written resources

1. [Python: asyncio tasks and cancellation](https://docs.python.org/3/library/asyncio-task.html) — Free; no registration required. No paid materials required.
2. [pytest: monkeypatching](https://docs.pytest.org/en/stable/how-to/monkeypatch.html) — Free; no registration required. No paid materials required.

#### Lab: Async cancellation, timeouts and test doubles

Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Async cancellation, timeouts and test doubles:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Async cancellation, timeouts and test doubles, explicitly apply Coroutine versus blocking work, Timeout boundaries, Cancellation cleanup.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Async cancellation, timeouts and test doubles: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Async cancellation, timeouts and test doubles: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Async cancellation, timeouts and test doubles:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Async cancellation, timeouts and test doubles, explicitly apply Coroutine versus blocking work, Timeout boundaries, Cancellation cleanup.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Async cancellation, timeouts and test doubles: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Async cancellation, timeouts and test doubles: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Async cancellation, timeouts and test doubles:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Async cancellation, timeouts and test doubles, explicitly apply Coroutine versus blocking work, Timeout boundaries, Cancellation cleanup.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Async cancellation, timeouts and test doubles: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Async cancellation, timeouts and test doubles: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Async cancellation, timeouts and test doubles:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Async cancellation, timeouts and test doubles, explicitly apply Coroutine versus blocking work, Timeout boundaries, Cancellation cleanup.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Async cancellation, timeouts and test doubles: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Async cancellation, timeouts and test doubles: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Async cancellation, timeouts and test doubles:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Async cancellation, timeouts and test doubles, explicitly apply Coroutine versus blocking work, Timeout boundaries, Cancellation cleanup.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Async cancellation, timeouts and test doubles: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Async cancellation, timeouts and test doubles: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Async cancellation, timeouts and test doubles:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Async cancellation, timeouts and test doubles, explicitly apply Coroutine versus blocking work, Timeout boundaries, Cancellation cleanup.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Async cancellation, timeouts and test doubles: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Async cancellation, timeouts and test doubles: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Async cancellation, timeouts and test doubles:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Async cancellation, timeouts and test doubles, explicitly apply Coroutine versus blocking work, Timeout boundaries, Cancellation cleanup.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Async cancellation, timeouts and test doubles: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Async cancellation, timeouts and test doubles: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Async cancellation, timeouts and test doubles:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Async cancellation, timeouts and test doubles, explicitly apply Coroutine versus blocking work, Timeout boundaries, Cancellation cleanup.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Async cancellation, timeouts and test doubles: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Async cancellation, timeouts and test doubles: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Async cancellation, timeouts and test doubles:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Async cancellation, timeouts and test doubles, explicitly apply Coroutine versus blocking work, Timeout boundaries, Cancellation cleanup.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Async cancellation, timeouts and test doubles: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Async cancellation, timeouts and test doubles: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Async cancellation, timeouts and test doubles:** Implement typed, reusable ingestion and transformation functions with explicit errors.  For Async cancellation, timeouts and test doubles, explicitly apply Coroutine versus blocking work, Timeout boundaries, Cancellation cleanup.
  - Deliverable: A Python package/CLI and passing unit checks
  - Check: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Async cancellation, timeouts and test doubles: A Python package/CLI and passing unit checks
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Async cancellation, timeouts and test doubles: Run parametrized checks on empty, malformed and Unicode input. Adapt the lesson lab: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

