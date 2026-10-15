# Mathematics and data

Understand the operations and data quality behind model behavior.

## Optional branch

**Goal:** Understand the data, shapes, gradients and statistics behind AI.

**Stage checkpoint:** Clean a small dataset, plot its distributions and explain a dot product and gradient calculation.

Explore this branch when it helps your goal. Return to the main route at any time; completion is not a gate.

Follow the modules and lessons below at your pace. Finish each exercise, save your evidence and self-assessment, then continue. Completed and Already known count as completed; Skipped is reported separately. You can move ahead at any time.

[Full pipeline](../PIPELINE.md) · [Return to main route: Backend and databases](backend.md)

## Mathematical intuition

<a id="math-linear"></a>

### Vectors, matrices and dot products

Track shapes and understand features, embeddings and dense layers.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Types and collections](python.md#python-values) Navigation is unrestricted.

#### Concepts

- [ ] **Vectors and matrices:** A vector holds coordinates; a matrix transforms or stacks vectors; dimensions constrain valid multiplication.
  - Example: A batch shaped (32, 10) multiplied by weights (10, 3) yields (32, 3).
  - Videos:
    - [Linear algebra — full university course](https://www.youtube.com/watch?v=JnTa9XtvmfI) · freeCodeCamp · Long course · publisher describes 20h in two parts
      - Explains: Vectors, matrices, linear transformations and foundational linear algebra.
      - Useful because: Build the mathematical foundation for feature matrices, embeddings and neural layers.
      - Watch for: Focus on vectors and matrices. Then reproduce the lesson example: A batch shaped (32, 10) multiplied by weights (10, 3) yields (32, 3).
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/linear-algebra-full-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on vectors and matrices. Then reproduce the lesson example: A batch shaped (32, 10) multiplied by weights (10, 3) yields (32, 3).
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Dot products:** A dot product measures alignment and underlies linear predictions and attention scores.
  - Example: Compute a weighted sum of three features by hand and with NumPy.
  - Videos:
    - [Linear algebra — full university course](https://www.youtube.com/watch?v=JnTa9XtvmfI) · freeCodeCamp · Long course · publisher describes 20h in two parts
      - Explains: Vectors, matrices, linear transformations and foundational linear algebra.
      - Useful because: Build the mathematical foundation for feature matrices, embeddings and neural layers.
      - Watch for: Focus on dot products. Then reproduce the lesson example: Compute a weighted sum of three features by hand and with NumPy.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/linear-algebra-full-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on dot products. Then reproduce the lesson example: Compute a weighted sum of three features by hand and with NumPy.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Norms and cosine similarity:** A norm measures magnitude; cosine compares directions independent of scale.
  - Example: Two scaled versions of the same nonzero embedding have cosine similarity one.
  - Videos:
    - [Linear algebra — full university course](https://www.youtube.com/watch?v=JnTa9XtvmfI) · freeCodeCamp · Long course · publisher describes 20h in two parts
      - Explains: Vectors, matrices, linear transformations and foundational linear algebra.
      - Useful because: Build the mathematical foundation for feature matrices, embeddings and neural layers.
      - Watch for: Focus on norms and cosine similarity. Then reproduce the lesson example: Two scaled versions of the same nonzero embedding have cosine similarity one.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/linear-algebra-full-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on norms and cosine similarity. Then reproduce the lesson example: Two scaled versions of the same nonzero embedding have cosine similarity one.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/

#### YouTube: focused explanations and full courses

- [Linear algebra — full university course](https://www.youtube.com/watch?v=JnTa9XtvmfI) · freeCodeCamp · Long course · publisher describes 20h in two parts
  - Explains: Vectors, matrices, linear transformations and foundational linear algebra.
  - Useful because: Build the mathematical foundation for feature matrices, embeddings and neural layers.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/linear-algebra-full-course/
- [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
  - Explains: NumPy, pandas, cleaning and exploring data with Python.
  - Useful because: Work through real data transformations before building training pipelines.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/

#### Free written resources

1. [D2L: linear algebra](https://d2l.ai/chapter_preliminaries/linear-algebra.html) — Free; no registration required. No paid materials required.
2. [Mathematics for Machine Learning: free book](https://mml-book.github.io/) — Free; no registration required. No paid materials required.

#### Lab: Vectors, matrices and dot products

Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Vectors, matrices and dot products:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Vectors, matrices and dot products, explicitly apply Vectors and matrices, Dot products, Norms and cosine similarity.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Vectors, matrices and dot products: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Vectors, matrices and dot products: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Vectors, matrices and dot products:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Vectors, matrices and dot products, explicitly apply Vectors and matrices, Dot products, Norms and cosine similarity.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Vectors, matrices and dot products: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Vectors, matrices and dot products: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Vectors, matrices and dot products:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Vectors, matrices and dot products, explicitly apply Vectors and matrices, Dot products, Norms and cosine similarity.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Vectors, matrices and dot products: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Vectors, matrices and dot products: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Vectors, matrices and dot products:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Vectors, matrices and dot products, explicitly apply Vectors and matrices, Dot products, Norms and cosine similarity.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Vectors, matrices and dot products: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Vectors, matrices and dot products: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Vectors, matrices and dot products:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Vectors, matrices and dot products, explicitly apply Vectors and matrices, Dot products, Norms and cosine similarity.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Vectors, matrices and dot products: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Vectors, matrices and dot products: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Vectors, matrices and dot products:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Vectors, matrices and dot products, explicitly apply Vectors and matrices, Dot products, Norms and cosine similarity.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Vectors, matrices and dot products: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Vectors, matrices and dot products: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Vectors, matrices and dot products:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Vectors, matrices and dot products, explicitly apply Vectors and matrices, Dot products, Norms and cosine similarity.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Vectors, matrices and dot products: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Vectors, matrices and dot products: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Vectors, matrices and dot products:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Vectors, matrices and dot products, explicitly apply Vectors and matrices, Dot products, Norms and cosine similarity.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Vectors, matrices and dot products: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Vectors, matrices and dot products: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Vectors, matrices and dot products:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Vectors, matrices and dot products, explicitly apply Vectors and matrices, Dot products, Norms and cosine similarity.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Vectors, matrices and dot products: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Vectors, matrices and dot products: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Vectors, matrices and dot products:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Vectors, matrices and dot products, explicitly apply Vectors and matrices, Dot products, Norms and cosine similarity.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Vectors, matrices and dot products: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Vectors, matrices and dot products: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="math-calculus"></a>

### Derivatives, chain rule and gradients

Explain how an optimizer changes weights to reduce a loss.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Vectors, matrices and dot products](math-data.md#math-linear) Navigation is unrestricted.

#### Concepts

- [ ] **Derivatives:** A derivative measures local sensitivity of an output to an input.
  - Example: For f(x)=x² the slope at x=3 is 6.
  - Videos:
    - [The Chain Rule](https://www.youtube.com/watch?v=wl1myxrtQHQ) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on derivatives. Then reproduce the lesson example: For f(x)=x² the slope at x=3 is 6.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on derivatives. Then reproduce the lesson example: For f(x)=x² the slope at x=3 is 6.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Chain rule:** Derivatives of composed functions multiply through intermediate computations.
  - Example: Differentiate squared prediction error through a linear prediction.
  - Videos:
    - [The Chain Rule](https://www.youtube.com/watch?v=wl1myxrtQHQ) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on chain rule. Then reproduce the lesson example: Differentiate squared prediction error through a linear prediction.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on chain rule. Then reproduce the lesson example: Differentiate squared prediction error through a linear prediction.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Gradients:** A gradient collects partial derivatives for parameters; stepping against it locally reduces loss for a suitable step size.
  - Example: Update w with w - learning_rate * gradient.
  - Videos:
    - [The Chain Rule](https://www.youtube.com/watch?v=wl1myxrtQHQ) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on gradients. Then reproduce the lesson example: Update w with w - learning_rate * gradient.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on gradients. Then reproduce the lesson example: Update w with w - learning_rate * gradient.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/

#### YouTube: focused explanations and full courses

- [Gradient descent: how neural networks learn](https://www.youtube.com/watch?v=IHZwWFHWa-w) · 3Blue1Brown · Visual explanation
  - Explains: Loss landscapes, gradients and weight updates.
  - Useful because: Explain why a learning rate changes training stability.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.3blue1brown.com/lessons/gradient-descent
- [The Chain Rule](https://www.youtube.com/watch?v=wl1myxrtQHQ) · StatQuest · Josh Starmer · Focused explanation
  - Explains: A visual, step-by-step explanation of the topic named in the title.
  - Useful because: Use the worked intuition before writing the corresponding small experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://statquest.org/video_index.html
- [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
  - Explains: NumPy, pandas, cleaning and exploring data with Python.
  - Useful because: Work through real data transformations before building training pipelines.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/

#### Free written resources

1. [D2L: calculus](https://d2l.ai/chapter_preliminaries/calculus.html) — Free; no registration required. No paid materials required.
2. [D2L: automatic differentiation](https://d2l.ai/chapter_preliminaries/autograd.html) — Free; no registration required. No paid materials required.

#### Lab: Derivatives, chain rule and gradients

Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Derivatives, chain rule and gradients:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Derivatives, chain rule and gradients, explicitly apply Derivatives, Chain rule, Gradients.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Derivatives, chain rule and gradients: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Derivatives, chain rule and gradients: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Derivatives, chain rule and gradients:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Derivatives, chain rule and gradients, explicitly apply Derivatives, Chain rule, Gradients.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Derivatives, chain rule and gradients: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Derivatives, chain rule and gradients: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Derivatives, chain rule and gradients:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Derivatives, chain rule and gradients, explicitly apply Derivatives, Chain rule, Gradients.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Derivatives, chain rule and gradients: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Derivatives, chain rule and gradients: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Derivatives, chain rule and gradients:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Derivatives, chain rule and gradients, explicitly apply Derivatives, Chain rule, Gradients.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Derivatives, chain rule and gradients: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Derivatives, chain rule and gradients: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Derivatives, chain rule and gradients:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Derivatives, chain rule and gradients, explicitly apply Derivatives, Chain rule, Gradients.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Derivatives, chain rule and gradients: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Derivatives, chain rule and gradients: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Derivatives, chain rule and gradients:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Derivatives, chain rule and gradients, explicitly apply Derivatives, Chain rule, Gradients.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Derivatives, chain rule and gradients: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Derivatives, chain rule and gradients: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Derivatives, chain rule and gradients:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Derivatives, chain rule and gradients, explicitly apply Derivatives, Chain rule, Gradients.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Derivatives, chain rule and gradients: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Derivatives, chain rule and gradients: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Derivatives, chain rule and gradients:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Derivatives, chain rule and gradients, explicitly apply Derivatives, Chain rule, Gradients.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Derivatives, chain rule and gradients: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Derivatives, chain rule and gradients: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Derivatives, chain rule and gradients:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Derivatives, chain rule and gradients, explicitly apply Derivatives, Chain rule, Gradients.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Derivatives, chain rule and gradients: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Derivatives, chain rule and gradients: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Derivatives, chain rule and gradients:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Derivatives, chain rule and gradients, explicitly apply Derivatives, Chain rule, Gradients.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Derivatives, chain rule and gradients: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Derivatives, chain rule and gradients: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="math-probability"></a>

### Probability, distributions and statistics

Interpret predictions and uncertainty without confusing confidence with correctness.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Derivatives, chain rule and gradients](math-data.md#math-calculus) Navigation is unrestricted.

#### Concepts

- [ ] **Conditional probability:** P(A|B) updates an event probability given evidence; it differs from P(B|A).
  - Example: A rare-class prediction needs the class base rate, not only test sensitivity.
  - Videos:
    - [College statistics — full course](https://www.youtube.com/watch?v=xxpc-HPKN28) · freeCodeCamp · Full course · approximately 8h
      - Explains: Descriptive statistics, probability, distributions and statistical reasoning.
      - Useful because: Learn to interpret dataset summaries and uncertainty instead of trusting one metric.
      - Watch for: Focus on conditional probability. Then reproduce the lesson example: A rare-class prediction needs the class base rate, not only test sensitivity.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/free-statistics-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on conditional probability. Then reproduce the lesson example: A rare-class prediction needs the class base rate, not only test sensitivity.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Distributions:** Bernoulli describes binary events and normal distributions model continuous variation; assumptions should be checked.
  - Example: Simulate coin outcomes and compare empirical frequency with probability.
  - Videos:
    - [College statistics — full course](https://www.youtube.com/watch?v=xxpc-HPKN28) · freeCodeCamp · Full course · approximately 8h
      - Explains: Descriptive statistics, probability, distributions and statistical reasoning.
      - Useful because: Learn to interpret dataset summaries and uncertainty instead of trusting one metric.
      - Watch for: Focus on distributions. Then reproduce the lesson example: Simulate coin outcomes and compare empirical frequency with probability.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/free-statistics-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on distributions. Then reproduce the lesson example: Simulate coin outcomes and compare empirical frequency with probability.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Statistics:** Mean, median, variance and quantiles summarize data; confidence intervals describe sampling uncertainty.
  - Example: Report median and p95 latency instead of only a mean.
  - Videos:
    - [College statistics — full course](https://www.youtube.com/watch?v=xxpc-HPKN28) · freeCodeCamp · Full course · approximately 8h
      - Explains: Descriptive statistics, probability, distributions and statistical reasoning.
      - Useful because: Learn to interpret dataset summaries and uncertainty instead of trusting one metric.
      - Watch for: Focus on statistics. Then reproduce the lesson example: Report median and p95 latency instead of only a mean.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/free-statistics-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on statistics. Then reproduce the lesson example: Report median and p95 latency instead of only a mean.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/

#### YouTube: focused explanations and full courses

- [College statistics — full course](https://www.youtube.com/watch?v=xxpc-HPKN28) · freeCodeCamp · Full course · approximately 8h
  - Explains: Descriptive statistics, probability, distributions and statistical reasoning.
  - Useful because: Learn to interpret dataset summaries and uncertainty instead of trusting one metric.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/free-statistics-course/
- [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
  - Explains: NumPy, pandas, cleaning and exploring data with Python.
  - Useful because: Work through real data transformations before building training pipelines.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/

#### Free written resources

1. [D2L: probability and statistics](https://d2l.ai/chapter_preliminaries/probability.html) — Free; no registration required. No paid materials required.
2. [StatQuest: indexed free video lessons](https://statquest.org/video_index.html) — Free; no registration required. No paid materials required.

#### Lab: Probability, distributions and statistics

Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Probability, distributions and statistics:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Probability, distributions and statistics, explicitly apply Conditional probability, Distributions, Statistics.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Probability, distributions and statistics: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Probability, distributions and statistics: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Probability, distributions and statistics:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Probability, distributions and statistics, explicitly apply Conditional probability, Distributions, Statistics.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Probability, distributions and statistics: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Probability, distributions and statistics: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Probability, distributions and statistics:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Probability, distributions and statistics, explicitly apply Conditional probability, Distributions, Statistics.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Probability, distributions and statistics: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Probability, distributions and statistics: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Probability, distributions and statistics:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Probability, distributions and statistics, explicitly apply Conditional probability, Distributions, Statistics.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Probability, distributions and statistics: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Probability, distributions and statistics: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Probability, distributions and statistics:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Probability, distributions and statistics, explicitly apply Conditional probability, Distributions, Statistics.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Probability, distributions and statistics: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Probability, distributions and statistics: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Probability, distributions and statistics:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Probability, distributions and statistics, explicitly apply Conditional probability, Distributions, Statistics.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Probability, distributions and statistics: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Probability, distributions and statistics: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Probability, distributions and statistics:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Probability, distributions and statistics, explicitly apply Conditional probability, Distributions, Statistics.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Probability, distributions and statistics: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Probability, distributions and statistics: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Probability, distributions and statistics:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Probability, distributions and statistics, explicitly apply Conditional probability, Distributions, Statistics.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Probability, distributions and statistics: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Probability, distributions and statistics: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Probability, distributions and statistics:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Probability, distributions and statistics, explicitly apply Conditional probability, Distributions, Statistics.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Probability, distributions and statistics: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Probability, distributions and statistics: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Probability, distributions and statistics:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Probability, distributions and statistics, explicitly apply Conditional probability, Distributions, Statistics.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Probability, distributions and statistics: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Probability, distributions and statistics: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Practical data work

<a id="data-numpy"></a>

### NumPy arrays, shapes and broadcasting

Use vectorized transformations while detecting silent shape mistakes.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Probability, distributions and statistics](math-data.md#math-probability) Navigation is unrestricted.

#### Concepts

- [ ] **Array axes:** Axes distinguish samples from features; reductions must use the intended axis.
  - Example: mean(axis=0) computes feature means for a samples-by-features matrix.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on array axes. Then reproduce the lesson example: mean(axis=0) computes feature means for a samples-by-features matrix.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Broadcasting:** Compatible singleton dimensions are expanded logically, which can also produce unintended large outputs.
  - Example: Subtract a (features,) mean from a (samples, features) matrix.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on broadcasting. Then reproduce the lesson example: Subtract a (features,) mean from a (samples, features) matrix.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Vectorization:** Array operations avoid Python-level loops but may allocate temporary arrays.
  - Example: Use matrix multiplication rather than looping over every sample.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on vectorization. Then reproduce the lesson example: Use matrix multiplication rather than looping over every sample.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/

#### YouTube: focused explanations and full courses

- [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
  - Explains: NumPy, pandas, cleaning and exploring data with Python.
  - Useful because: Work through real data transformations before building training pipelines.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/

#### Free written resources

1. [NumPy absolute beginners](https://numpy.org/doc/stable/user/absolute_beginners.html) — Free; no registration required. No paid materials required.
2. [NumPy broadcasting](https://numpy.org/doc/stable/user/basics.broadcasting.html) — Free; no registration required. No paid materials required.

#### Lab: NumPy arrays, shapes and broadcasting

Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **NumPy arrays, shapes and broadcasting:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For NumPy arrays, shapes and broadcasting, explicitly apply Array axes, Broadcasting, Vectorization.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] NumPy arrays, shapes and broadcasting: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] NumPy arrays, shapes and broadcasting: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **NumPy arrays, shapes and broadcasting:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For NumPy arrays, shapes and broadcasting, explicitly apply Array axes, Broadcasting, Vectorization.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] NumPy arrays, shapes and broadcasting: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] NumPy arrays, shapes and broadcasting: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **NumPy arrays, shapes and broadcasting:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For NumPy arrays, shapes and broadcasting, explicitly apply Array axes, Broadcasting, Vectorization.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] NumPy arrays, shapes and broadcasting: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] NumPy arrays, shapes and broadcasting: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **NumPy arrays, shapes and broadcasting:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For NumPy arrays, shapes and broadcasting, explicitly apply Array axes, Broadcasting, Vectorization.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] NumPy arrays, shapes and broadcasting: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] NumPy arrays, shapes and broadcasting: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **NumPy arrays, shapes and broadcasting:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For NumPy arrays, shapes and broadcasting, explicitly apply Array axes, Broadcasting, Vectorization.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] NumPy arrays, shapes and broadcasting: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] NumPy arrays, shapes and broadcasting: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **NumPy arrays, shapes and broadcasting:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For NumPy arrays, shapes and broadcasting, explicitly apply Array axes, Broadcasting, Vectorization.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] NumPy arrays, shapes and broadcasting: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] NumPy arrays, shapes and broadcasting: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **NumPy arrays, shapes and broadcasting:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For NumPy arrays, shapes and broadcasting, explicitly apply Array axes, Broadcasting, Vectorization.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] NumPy arrays, shapes and broadcasting: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] NumPy arrays, shapes and broadcasting: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **NumPy arrays, shapes and broadcasting:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For NumPy arrays, shapes and broadcasting, explicitly apply Array axes, Broadcasting, Vectorization.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] NumPy arrays, shapes and broadcasting: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] NumPy arrays, shapes and broadcasting: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **NumPy arrays, shapes and broadcasting:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For NumPy arrays, shapes and broadcasting, explicitly apply Array axes, Broadcasting, Vectorization.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] NumPy arrays, shapes and broadcasting: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] NumPy arrays, shapes and broadcasting: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **NumPy arrays, shapes and broadcasting:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For NumPy arrays, shapes and broadcasting, explicitly apply Array axes, Broadcasting, Vectorization.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] NumPy arrays, shapes and broadcasting: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] NumPy arrays, shapes and broadcasting: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="data-pandas"></a>

### pandas, cleaning and missing values

Build trustworthy datasets and record what preprocessing changed.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [NumPy arrays, shapes and broadcasting](math-data.md#data-numpy) Navigation is unrestricted.

#### Concepts

- [ ] **DataFrames:** Named columns and indexes support selection, grouping and joins; indexes are not automatically unique IDs.
  - Example: Join labels using a validated record_id column.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on dataframes. Then reproduce the lesson example: Join labels using a validated record_id column.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Missing and duplicate data:** Missingness can encode information; imputation must fit only on training data.
  - Example: Report null counts and duplicate IDs before removing records.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on missing and duplicate data. Then reproduce the lesson example: Report null counts and duplicate IDs before removing records.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Data quality:** Check schema, range and consistency rules before modeling.
  - Example: Reject negative durations and labels outside the allowed set.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on data quality. Then reproduce the lesson example: Reject negative durations and labels outside the allowed set.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/

#### YouTube: focused explanations and full courses

- [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
  - Explains: NumPy, pandas, cleaning and exploring data with Python.
  - Useful because: Work through real data transformations before building training pipelines.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/

#### Free written resources

1. [pandas getting started tutorials](https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html) — Free; no registration required. No paid materials required.
2. [pandas missing data guide](https://pandas.pydata.org/docs/user_guide/missing_data.html) — Free; no registration required. No paid materials required.

#### Lab: pandas, cleaning and missing values

Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **pandas, cleaning and missing values:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For pandas, cleaning and missing values, explicitly apply DataFrames, Missing and duplicate data, Data quality.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] pandas, cleaning and missing values: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] pandas, cleaning and missing values: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **pandas, cleaning and missing values:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For pandas, cleaning and missing values, explicitly apply DataFrames, Missing and duplicate data, Data quality.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] pandas, cleaning and missing values: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] pandas, cleaning and missing values: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **pandas, cleaning and missing values:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For pandas, cleaning and missing values, explicitly apply DataFrames, Missing and duplicate data, Data quality.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] pandas, cleaning and missing values: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] pandas, cleaning and missing values: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **pandas, cleaning and missing values:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For pandas, cleaning and missing values, explicitly apply DataFrames, Missing and duplicate data, Data quality.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] pandas, cleaning and missing values: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] pandas, cleaning and missing values: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **pandas, cleaning and missing values:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For pandas, cleaning and missing values, explicitly apply DataFrames, Missing and duplicate data, Data quality.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] pandas, cleaning and missing values: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] pandas, cleaning and missing values: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **pandas, cleaning and missing values:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For pandas, cleaning and missing values, explicitly apply DataFrames, Missing and duplicate data, Data quality.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] pandas, cleaning and missing values: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] pandas, cleaning and missing values: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **pandas, cleaning and missing values:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For pandas, cleaning and missing values, explicitly apply DataFrames, Missing and duplicate data, Data quality.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] pandas, cleaning and missing values: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] pandas, cleaning and missing values: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **pandas, cleaning and missing values:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For pandas, cleaning and missing values, explicitly apply DataFrames, Missing and duplicate data, Data quality.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] pandas, cleaning and missing values: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] pandas, cleaning and missing values: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **pandas, cleaning and missing values:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For pandas, cleaning and missing values, explicitly apply DataFrames, Missing and duplicate data, Data quality.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] pandas, cleaning and missing values: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] pandas, cleaning and missing values: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **pandas, cleaning and missing values:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For pandas, cleaning and missing values, explicitly apply DataFrames, Missing and duplicate data, Data quality.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] pandas, cleaning and missing values: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] pandas, cleaning and missing values: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="data-visualization"></a>

### Visualization and exploratory analysis

Detect imbalance, outliers and misleading aggregates before training.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [pandas, cleaning and missing values](math-data.md#data-pandas) Navigation is unrestricted.

#### Concepts

- [ ] **Distributions:** Histograms and boxplots reveal spread and extreme values that averages hide.
  - Example: Plot document length before choosing a chunk size.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on distributions. Then reproduce the lesson example: Plot document length before choosing a chunk size.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Relationships:** Scatterplots and grouped summaries suggest associations, not causality.
  - Example: Compare error rate across document-length buckets.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on relationships. Then reproduce the lesson example: Compare error rate across document-length buckets.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Communication:** Label axes, units and sample counts; choose accessible colors and preserve uncertainty.
  - Example: Show a confusion matrix with numeric annotations.
  - Videos:
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on communication. Then reproduce the lesson example: Show a confusion matrix with numeric annotations.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/

#### YouTube: focused explanations and full courses

- [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
  - Explains: NumPy, pandas, cleaning and exploring data with Python.
  - Useful because: Work through real data transformations before building training pipelines.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/

#### Free written resources

1. [pandas: plot data](https://pandas.pydata.org/docs/getting_started/intro_tutorials/04_plotting.html) — Free; no registration required. No paid materials required.
2. [scikit-learn: inspection](https://scikit-learn.org/stable/inspection.html) — Free; no registration required. No paid materials required.

#### Lab: Visualization and exploratory analysis

Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Visualization and exploratory analysis:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Visualization and exploratory analysis, explicitly apply Distributions, Relationships, Communication.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Visualization and exploratory analysis: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Visualization and exploratory analysis: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Visualization and exploratory analysis:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Visualization and exploratory analysis, explicitly apply Distributions, Relationships, Communication.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Visualization and exploratory analysis: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Visualization and exploratory analysis: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Visualization and exploratory analysis:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Visualization and exploratory analysis, explicitly apply Distributions, Relationships, Communication.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Visualization and exploratory analysis: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Visualization and exploratory analysis: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Visualization and exploratory analysis:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Visualization and exploratory analysis, explicitly apply Distributions, Relationships, Communication.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Visualization and exploratory analysis: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Visualization and exploratory analysis: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Visualization and exploratory analysis:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Visualization and exploratory analysis, explicitly apply Distributions, Relationships, Communication.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Visualization and exploratory analysis: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Visualization and exploratory analysis: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Visualization and exploratory analysis:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Visualization and exploratory analysis, explicitly apply Distributions, Relationships, Communication.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Visualization and exploratory analysis: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Visualization and exploratory analysis: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Visualization and exploratory analysis:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Visualization and exploratory analysis, explicitly apply Distributions, Relationships, Communication.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Visualization and exploratory analysis: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Visualization and exploratory analysis: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Visualization and exploratory analysis:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Visualization and exploratory analysis, explicitly apply Distributions, Relationships, Communication.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Visualization and exploratory analysis: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Visualization and exploratory analysis: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Visualization and exploratory analysis:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Visualization and exploratory analysis, explicitly apply Distributions, Relationships, Communication.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Visualization and exploratory analysis: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Visualization and exploratory analysis: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Visualization and exploratory analysis:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Visualization and exploratory analysis, explicitly apply Distributions, Relationships, Communication.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Visualization and exploratory analysis: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Visualization and exploratory analysis: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Mathematical tools in detail

<a id="math-linear-decompositions"></a>

### Norms, projections, eigenvectors and SVD intuition

Connect vector operations to embeddings, dimensionality reduction and stable numerical code.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [Vectors, matrices and dot products](math-data.md#math-linear) Navigation is unrestricted.

#### Concepts

- [ ] **Vector norms:** A norm measures vector size; normalisation requires handling the zero vector explicitly.
  - Example: Compute L1 and L2 norms for [3,4] and reject division by zero when normalising [0,0].
  - Videos:
    - [Linear algebra — full university course](https://www.youtube.com/watch?v=JnTa9XtvmfI) · freeCodeCamp · Long course · publisher describes 20h in two parts
      - Explains: Vectors, matrices, linear transformations and foundational linear algebra.
      - Useful because: Build the mathematical foundation for feature matrices, embeddings and neural layers.
      - Watch for: Focus on vector norms. Then reproduce the lesson example: Compute L1 and L2 norms for [3,4] and reject division by zero when normalising [0,0].
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/linear-algebra-full-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on vector norms. Then reproduce the lesson example: Compute L1 and L2 norms for [3,4] and reject division by zero when normalising [0,0].
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Projection geometry:** Projecting one vector onto another measures its component in that direction and underlies many similarity calculations.
  - Example: Project [2,2] onto the x axis and compare the remaining orthogonal component.
  - Videos:
    - [Linear algebra — full university course](https://www.youtube.com/watch?v=JnTa9XtvmfI) · freeCodeCamp · Long course · publisher describes 20h in two parts
      - Explains: Vectors, matrices, linear transformations and foundational linear algebra.
      - Useful because: Build the mathematical foundation for feature matrices, embeddings and neural layers.
      - Watch for: Focus on projection geometry. Then reproduce the lesson example: Project [2,2] onto the x axis and compare the remaining orthogonal component.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/linear-algebra-full-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on projection geometry. Then reproduce the lesson example: Project [2,2] onto the x axis and compare the remaining orthogonal component.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Eigenvector intuition:** For a square matrix, an eigenvector keeps its direction under the transformation up to scaling.
  - Example: Apply a diagonal matrix to its coordinate-axis vectors and identify the scale factors.
  - Videos:
    - [Linear algebra — full university course](https://www.youtube.com/watch?v=JnTa9XtvmfI) · freeCodeCamp · Long course · publisher describes 20h in two parts
      - Explains: Vectors, matrices, linear transformations and foundational linear algebra.
      - Useful because: Build the mathematical foundation for feature matrices, embeddings and neural layers.
      - Watch for: Focus on eigenvector intuition. Then reproduce the lesson example: Apply a diagonal matrix to its coordinate-axis vectors and identify the scale factors.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/linear-algebra-full-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on eigenvector intuition. Then reproduce the lesson example: Apply a diagonal matrix to its coordinate-axis vectors and identify the scale factors.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **SVD and low rank:** Singular value decomposition represents a matrix using orthogonal directions and singular values; truncation approximates it with fewer components.
  - Example: Reconstruct a small matrix with one singular component and measure the remaining error.
  - Videos:
    - [Linear algebra — full university course](https://www.youtube.com/watch?v=JnTa9XtvmfI) · freeCodeCamp · Long course · publisher describes 20h in two parts
      - Explains: Vectors, matrices, linear transformations and foundational linear algebra.
      - Useful because: Build the mathematical foundation for feature matrices, embeddings and neural layers.
      - Watch for: Focus on svd and low rank. Then reproduce the lesson example: Reconstruct a small matrix with one singular component and measure the remaining error.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/linear-algebra-full-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on svd and low rank. Then reproduce the lesson example: Reconstruct a small matrix with one singular component and measure the remaining error.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Numerical conditioning:** Nearly dependent inputs can amplify numerical error; solving a system is preferable to explicitly forming an inverse when possible.
  - Example: Compare solve(A,b) on a well-conditioned and a nearly singular two-by-two system.
  - Videos:
    - [Linear algebra — full university course](https://www.youtube.com/watch?v=JnTa9XtvmfI) · freeCodeCamp · Long course · publisher describes 20h in two parts
      - Explains: Vectors, matrices, linear transformations and foundational linear algebra.
      - Useful because: Build the mathematical foundation for feature matrices, embeddings and neural layers.
      - Watch for: Focus on numerical conditioning. Then reproduce the lesson example: Compare solve(A,b) on a well-conditioned and a nearly singular two-by-two system.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/linear-algebra-full-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on numerical conditioning. Then reproduce the lesson example: Compare solve(A,b) on a well-conditioned and a nearly singular two-by-two system.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/

#### YouTube: focused explanations and full courses

- [Linear algebra — full university course](https://www.youtube.com/watch?v=JnTa9XtvmfI) · freeCodeCamp · Long course · publisher describes 20h in two parts
  - Explains: Vectors, matrices, linear transformations and foundational linear algebra.
  - Useful because: Build the mathematical foundation for feature matrices, embeddings and neural layers.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/linear-algebra-full-course/
- [Principal Component Analysis (PCA) Step-by-Step](https://www.youtube.com/watch?v=FgakZw6K1QQ) · StatQuest · Josh Starmer · Focused explanation
  - Explains: A visual, step-by-step explanation of the topic named in the title.
  - Useful because: Use the worked intuition before writing the corresponding small experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://statquest.org/video_index.html
- [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
  - Explains: NumPy, pandas, cleaning and exploring data with Python.
  - Useful because: Work through real data transformations before building training pipelines.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/

#### Free written resources

1. [NumPy: linear algebra](https://numpy.org/doc/stable/reference/routines.linalg.html) — Free; no registration required. No paid materials required.
2. [scikit-learn: PCA](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html) — Free; no registration required. No paid materials required.

#### Lab: Norms, projections, eigenvectors and SVD intuition

Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Norms, projections, eigenvectors and SVD intuition:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Norms, projections, eigenvectors and SVD intuition, explicitly apply Vector norms, Projection geometry, Eigenvector intuition.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Norms, projections, eigenvectors and SVD intuition: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Norms, projections, eigenvectors and SVD intuition: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Norms, projections, eigenvectors and SVD intuition:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Norms, projections, eigenvectors and SVD intuition, explicitly apply Vector norms, Projection geometry, Eigenvector intuition.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Norms, projections, eigenvectors and SVD intuition: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Norms, projections, eigenvectors and SVD intuition: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Norms, projections, eigenvectors and SVD intuition:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Norms, projections, eigenvectors and SVD intuition, explicitly apply Vector norms, Projection geometry, Eigenvector intuition.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Norms, projections, eigenvectors and SVD intuition: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Norms, projections, eigenvectors and SVD intuition: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Norms, projections, eigenvectors and SVD intuition:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Norms, projections, eigenvectors and SVD intuition, explicitly apply Vector norms, Projection geometry, Eigenvector intuition.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Norms, projections, eigenvectors and SVD intuition: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Norms, projections, eigenvectors and SVD intuition: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Norms, projections, eigenvectors and SVD intuition:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Norms, projections, eigenvectors and SVD intuition, explicitly apply Vector norms, Projection geometry, Eigenvector intuition.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Norms, projections, eigenvectors and SVD intuition: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Norms, projections, eigenvectors and SVD intuition: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Norms, projections, eigenvectors and SVD intuition:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Norms, projections, eigenvectors and SVD intuition, explicitly apply Vector norms, Projection geometry, Eigenvector intuition.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Norms, projections, eigenvectors and SVD intuition: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Norms, projections, eigenvectors and SVD intuition: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Norms, projections, eigenvectors and SVD intuition:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Norms, projections, eigenvectors and SVD intuition, explicitly apply Vector norms, Projection geometry, Eigenvector intuition.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Norms, projections, eigenvectors and SVD intuition: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Norms, projections, eigenvectors and SVD intuition: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Norms, projections, eigenvectors and SVD intuition:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Norms, projections, eigenvectors and SVD intuition, explicitly apply Vector norms, Projection geometry, Eigenvector intuition.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Norms, projections, eigenvectors and SVD intuition: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Norms, projections, eigenvectors and SVD intuition: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Norms, projections, eigenvectors and SVD intuition:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Norms, projections, eigenvectors and SVD intuition, explicitly apply Vector norms, Projection geometry, Eigenvector intuition.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Norms, projections, eigenvectors and SVD intuition: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Norms, projections, eigenvectors and SVD intuition: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Norms, projections, eigenvectors and SVD intuition:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Norms, projections, eigenvectors and SVD intuition, explicitly apply Vector norms, Projection geometry, Eigenvector intuition.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Norms, projections, eigenvectors and SVD intuition: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Norms, projections, eigenvectors and SVD intuition: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Statistical reasoning and data contracts

<a id="data-statistics-validation"></a>

### Sampling, uncertainty, joins and dataset validation

Recognise misleading metrics and data transformations before fitting an AI model.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [pandas, cleaning and missing values](math-data.md#data-pandas) Navigation is unrestricted.

#### Concepts

- [ ] **Sampling unit:** The unit being sampled may be a person, document or time period rather than one row; uncertainty depends on that independence assumption.
  - Example: Keep repeated records from one customer together when resampling a customer-level metric.
  - Videos:
    - [College statistics — full course](https://www.youtube.com/watch?v=xxpc-HPKN28) · freeCodeCamp · Full course · approximately 8h
      - Explains: Descriptive statistics, probability, distributions and statistical reasoning.
      - Useful because: Learn to interpret dataset summaries and uncertainty instead of trusting one metric.
      - Watch for: Focus on sampling unit. Then reproduce the lesson example: Keep repeated records from one customer together when resampling a customer-level metric.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/free-statistics-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on sampling unit. Then reproduce the lesson example: Keep repeated records from one customer together when resampling a customer-level metric.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Bootstrap intervals:** Resampling observed units estimates variability under assumptions; an interval is not a guarantee about unseen distribution shift.
  - Example: Bootstrap the mean of fifty generated values and compare interval widths for smaller samples.
  - Videos:
    - [College statistics — full course](https://www.youtube.com/watch?v=xxpc-HPKN28) · freeCodeCamp · Full course · approximately 8h
      - Explains: Descriptive statistics, probability, distributions and statistical reasoning.
      - Useful because: Learn to interpret dataset summaries and uncertainty instead of trusting one metric.
      - Watch for: Focus on bootstrap intervals. Then reproduce the lesson example: Bootstrap the mean of fifty generated values and compare interval widths for smaller samples.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/free-statistics-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on bootstrap intervals. Then reproduce the lesson example: Bootstrap the mean of fifty generated values and compare interval widths for smaller samples.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Join cardinality:** Joining duplicate keys can multiply rows and silently change model weighting.
  - Example: Join two tables with repeated customer IDs, predict the row count and use merge validation to catch a mistaken one-to-one assumption.
  - Videos:
    - [College statistics — full course](https://www.youtube.com/watch?v=xxpc-HPKN28) · freeCodeCamp · Full course · approximately 8h
      - Explains: Descriptive statistics, probability, distributions and statistical reasoning.
      - Useful because: Learn to interpret dataset summaries and uncertainty instead of trusting one metric.
      - Watch for: Focus on join cardinality. Then reproduce the lesson example: Join two tables with repeated customer IDs, predict the row count and use merge validation to catch a mistaken one-to-one assumption.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/free-statistics-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on join cardinality. Then reproduce the lesson example: Join two tables with repeated customer IDs, predict the row count and use merge validation to catch a mistaken one-to-one assumption.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Schema and range checks:** Types alone do not establish valid data; enforce required columns, units, allowed values and missingness limits.
  - Example: Reject a negative duration and distinguish milliseconds from seconds in a service log dataset.
  - Videos:
    - [College statistics — full course](https://www.youtube.com/watch?v=xxpc-HPKN28) · freeCodeCamp · Full course · approximately 8h
      - Explains: Descriptive statistics, probability, distributions and statistical reasoning.
      - Useful because: Learn to interpret dataset summaries and uncertainty instead of trusting one metric.
      - Watch for: Focus on schema and range checks. Then reproduce the lesson example: Reject a negative duration and distinguish milliseconds from seconds in a service log dataset.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/free-statistics-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on schema and range checks. Then reproduce the lesson example: Reject a negative duration and distinguish milliseconds from seconds in a service log dataset.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Missingness and provenance:** Missing values can encode how data was collected; record source and transformation decisions before imputation.
  - Example: Compare missing values by source system and preserve a missingness flag for downstream analysis.
  - Videos:
    - [College statistics — full course](https://www.youtube.com/watch?v=xxpc-HPKN28) · freeCodeCamp · Full course · approximately 8h
      - Explains: Descriptive statistics, probability, distributions and statistical reasoning.
      - Useful because: Learn to interpret dataset summaries and uncertainty instead of trusting one metric.
      - Watch for: Focus on missingness and provenance. Then reproduce the lesson example: Compare missing values by source system and preserve a missingness flag for downstream analysis.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/free-statistics-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on missingness and provenance. Then reproduce the lesson example: Compare missing values by source system and preserve a missingness flag for downstream analysis.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/

#### YouTube: focused explanations and full courses

- [College statistics — full course](https://www.youtube.com/watch?v=xxpc-HPKN28) · freeCodeCamp · Full course · approximately 8h
  - Explains: Descriptive statistics, probability, distributions and statistical reasoning.
  - Useful because: Learn to interpret dataset summaries and uncertainty instead of trusting one metric.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/free-statistics-course/
- [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
  - Explains: NumPy, pandas, cleaning and exploring data with Python.
  - Useful because: Work through real data transformations before building training pipelines.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/

#### Free written resources

1. [pandas: merge and join](https://pandas.pydata.org/docs/user_guide/merging.html) — Free; no registration required. No paid materials required.
2. [NumPy: random sampling](https://numpy.org/doc/stable/reference/random/index.html) — Free; no registration required. No paid materials required.

#### Lab: Sampling, uncertainty, joins and dataset validation

Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Sampling, uncertainty, joins and dataset validation:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Sampling, uncertainty, joins and dataset validation, explicitly apply Sampling unit, Bootstrap intervals, Join cardinality.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Sampling, uncertainty, joins and dataset validation: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Sampling, uncertainty, joins and dataset validation: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Sampling, uncertainty, joins and dataset validation:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Sampling, uncertainty, joins and dataset validation, explicitly apply Sampling unit, Bootstrap intervals, Join cardinality.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Sampling, uncertainty, joins and dataset validation: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Sampling, uncertainty, joins and dataset validation: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Sampling, uncertainty, joins and dataset validation:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Sampling, uncertainty, joins and dataset validation, explicitly apply Sampling unit, Bootstrap intervals, Join cardinality.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Sampling, uncertainty, joins and dataset validation: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Sampling, uncertainty, joins and dataset validation: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Sampling, uncertainty, joins and dataset validation:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Sampling, uncertainty, joins and dataset validation, explicitly apply Sampling unit, Bootstrap intervals, Join cardinality.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Sampling, uncertainty, joins and dataset validation: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Sampling, uncertainty, joins and dataset validation: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Sampling, uncertainty, joins and dataset validation:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Sampling, uncertainty, joins and dataset validation, explicitly apply Sampling unit, Bootstrap intervals, Join cardinality.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Sampling, uncertainty, joins and dataset validation: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Sampling, uncertainty, joins and dataset validation: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Sampling, uncertainty, joins and dataset validation:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Sampling, uncertainty, joins and dataset validation, explicitly apply Sampling unit, Bootstrap intervals, Join cardinality.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Sampling, uncertainty, joins and dataset validation: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Sampling, uncertainty, joins and dataset validation: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Sampling, uncertainty, joins and dataset validation:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Sampling, uncertainty, joins and dataset validation, explicitly apply Sampling unit, Bootstrap intervals, Join cardinality.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Sampling, uncertainty, joins and dataset validation: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Sampling, uncertainty, joins and dataset validation: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Sampling, uncertainty, joins and dataset validation:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Sampling, uncertainty, joins and dataset validation, explicitly apply Sampling unit, Bootstrap intervals, Join cardinality.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Sampling, uncertainty, joins and dataset validation: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Sampling, uncertainty, joins and dataset validation: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Sampling, uncertainty, joins and dataset validation:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Sampling, uncertainty, joins and dataset validation, explicitly apply Sampling unit, Bootstrap intervals, Join cardinality.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Sampling, uncertainty, joins and dataset validation: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Sampling, uncertainty, joins and dataset validation: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Sampling, uncertainty, joins and dataset validation:** Analyze feature shapes, distributions, missingness and similarity where relevant.  For Sampling, uncertainty, joins and dataset validation, explicitly apply Sampling unit, Bootstrap intervals, Join cardinality.
  - Deliverable: A reproducible data audit notebook with mathematical explanations
  - Check: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Sampling, uncertainty, joins and dataset validation: A reproducible data audit notebook with mathematical explanations
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Sampling, uncertainty, joins and dataset validation: Create numeric sanity checks and a labeled three-chart data report. Adapt the lesson lab: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

