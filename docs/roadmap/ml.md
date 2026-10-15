# Machine learning

Train reliable baselines and understand what their evaluation actually measures.

## Optional branch

**Goal:** Train and evaluate classical models without leakage.

**Stage checkpoint:** Compare a baseline and two models on a held-out test set; explain metrics and error cases.

Explore this branch when it helps your goal. Return to the main route at any time; completion is not a gate.

Follow the modules and lessons below at your pace. Finish each exercise, save your evidence and self-assessment, then continue. Completed and Already known count as completed; Skipped is reported separately. You can move ahead at any time.

[Full pipeline](../PIPELINE.md) · [Return to main route: LLM engineering](llm.md)

## Learning and validation

<a id="ml-problem"></a>

### Supervised learning, regression and classification

Match the learning objective to the user problem and target data.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [NumPy arrays, shapes and broadcasting](math-data.md#data-numpy), [Probability, distributions and statistics](math-data.md#math-probability) Navigation is unrestricted.

#### Concepts

- [ ] **Supervised learning:** Learn a mapping from features to known targets; labels define the task and can contain errors.
  - Example: Predict a category from labeled support messages.
  - Videos:
    - [Stanford CS229 — Lecture 1](https://www.youtube.com/watch?v=jGwO_UgTS7I) · Stanford Online · Andrew Ng · University lecture
      - Explains: The machine-learning problem setup, supervised learning and initial regression concepts.
      - Useful because: Use it for mathematical framing after basic Python and algebra.
      - Watch for: Focus on supervised learning. Then reproduce the lesson example: Predict a category from labeled support messages.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=jGwO_UgTS7I
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on supervised learning. Then reproduce the lesson example: Predict a category from labeled support messages.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Regression versus classification:** Regression predicts a numeric quantity; classification predicts discrete categories.
  - Example: Predict delivery duration versus whether a delivery is late.
  - Videos:
    - [Stanford CS229 — Lecture 1](https://www.youtube.com/watch?v=jGwO_UgTS7I) · Stanford Online · Andrew Ng · University lecture
      - Explains: The machine-learning problem setup, supervised learning and initial regression concepts.
      - Useful because: Use it for mathematical framing after basic Python and algebra.
      - Watch for: Focus on regression versus classification. Then reproduce the lesson example: Predict delivery duration versus whether a delivery is late.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=jGwO_UgTS7I
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on regression versus classification. Then reproduce the lesson example: Predict delivery duration versus whether a delivery is late.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Baselines and losses:** A baseline establishes minimum useful performance; a training loss provides an optimizable objective.
  - Example: Compare a majority-class baseline with logistic regression.
  - Videos:
    - [Stanford CS229 — Lecture 1](https://www.youtube.com/watch?v=jGwO_UgTS7I) · Stanford Online · Andrew Ng · University lecture
      - Explains: The machine-learning problem setup, supervised learning and initial regression concepts.
      - Useful because: Use it for mathematical framing after basic Python and algebra.
      - Watch for: Focus on baselines and losses. Then reproduce the lesson example: Compare a majority-class baseline with logistic regression.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=jGwO_UgTS7I
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on baselines and losses. Then reproduce the lesson example: Compare a majority-class baseline with logistic regression.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### YouTube: focused explanations and full courses

- [Stanford CS229 — Lecture 1](https://www.youtube.com/watch?v=jGwO_UgTS7I) · Stanford Online · Andrew Ng · University lecture
  - Explains: The machine-learning problem setup, supervised learning and initial regression concepts.
  - Useful because: Use it for mathematical framing after basic Python and algebra.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=jGwO_UgTS7I
- [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
  - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
  - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### Free written resources

1. [Inria: predictive modeling pipeline](https://inria.github.io/scikit-learn-mooc/python_scripts/02_numerical_pipeline_introduction.html) — Free; no registration required. No paid materials required.
2. [scikit-learn: dummy estimators](https://scikit-learn.org/stable/modules/model_evaluation.html#dummy-estimators) — Free; no registration required. No paid materials required.

#### Lab: Supervised learning, regression and classification

Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Supervised learning, regression and classification:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: ticket category: login, billing or account setup; compare with a majority-class predictor and keyword rules. For Supervised learning, regression and classification, explicitly apply Supervised learning, Regression versus classification, Baselines and losses.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Supervised learning, regression and classification: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Supervised learning, regression and classification: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Supervised learning, regression and classification:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a stock movement is an injected anomaly; compare with explicit quantity limits and rolling statistics. For Supervised learning, regression and classification, explicitly apply Supervised learning, Regression versus classification, Baselines and losses.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Supervised learning, regression and classification: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Supervised learning, regression and classification: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Supervised learning, regression and classification:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the review topic and rating-consistency flag; compare with topic keywords and explicit rating rules. For Supervised learning, regression and classification, explicitly apply Supervised learning, Regression versus classification, Baselines and losses.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Supervised learning, regression and classification: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Supervised learning, regression and classification: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Supervised learning, regression and classification:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the next weak concept requiring practice; compare with the lowest-score eligible prerequisite-aware concept. For Supervised learning, regression and classification, explicitly apply Supervised learning, Regression versus classification, Baselines and losses.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Supervised learning, regression and classification: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Supervised learning, regression and classification: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Supervised learning, regression and classification:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: query/item relevance; compare with keyword search and a simple ranker. For Supervised learning, regression and classification, explicitly apply Supervised learning, Regression versus classification, Baselines and losses.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Supervised learning, regression and classification: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Supervised learning, regression and classification: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Supervised learning, regression and classification:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: next-day task count; compare with the count on the same weekday in the previous week. For Supervised learning, regression and classification, explicitly apply Supervised learning, Regression versus classification, Baselines and losses.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Supervised learning, regression and classification: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Supervised learning, regression and classification: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Supervised learning, regression and classification:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the digit class or generated dataset label; compare with a dummy predictor and a simple fitted estimator. For Supervised learning, regression and classification, explicitly apply Supervised learning, Regression versus classification, Baselines and losses.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Supervised learning, regression and classification: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Supervised learning, regression and classification: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Supervised learning, regression and classification:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a query/passage pair is relevant; compare with keyword overlap and a TF-IDF retriever. For Supervised learning, regression and classification, explicitly apply Supervised learning, Regression versus classification, Baselines and losses.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Supervised learning, regression and classification: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Supervised learning, regression and classification: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Supervised learning, regression and classification:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: validity of a document record; compare with a deterministic schema validator; keep it authoritative. For Supervised learning, regression and classification, explicitly apply Supervised learning, Regression versus classification, Baselines and losses.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Supervised learning, regression and classification: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Supervised learning, regression and classification: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Supervised learning, regression and classification:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the incident category/severity from a log window; compare with error counts and a keyword-to-runbook mapping. For Supervised learning, regression and classification, explicitly apply Supervised learning, Regression versus classification, Baselines and losses.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Supervised learning, regression and classification: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Supervised learning, regression and classification: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="ml-splits"></a>

### Train/validation/test, cross-validation and leakage

Measure generalization using data the model and preprocessing have not seen.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Supervised learning, regression and classification](ml.md#ml-problem) Navigation is unrestricted.

#### Concepts

- [ ] **Splits:** Training fits parameters, validation chooses designs and testing estimates final performance.
  - Example: Reserve a test set before choosing the regularization strength.
  - Videos:
    - [Machine Learning Fundamentals: Cross Validation](https://www.youtube.com/watch?v=fSytzGwwBVw) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on splits. Then reproduce the lesson example: Reserve a test set before choosing the regularization strength.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on splits. Then reproduce the lesson example: Reserve a test set before choosing the regularization strength.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Cross-validation:** Repeated train/validation folds estimate variability; groups and time ordering may require special splitters.
  - Example: Keep records from one customer in the same fold.
  - Videos:
    - [Machine Learning Fundamentals: Cross Validation](https://www.youtube.com/watch?v=fSytzGwwBVw) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on cross-validation. Then reproduce the lesson example: Keep records from one customer in the same fold.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on cross-validation. Then reproduce the lesson example: Keep records from one customer in the same fold.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Leakage:** Information from evaluation data or future events can inflate scores.
  - Example: Fit a scaler inside a Pipeline on training folds only.
  - Videos:
    - [Machine Learning Fundamentals: Cross Validation](https://www.youtube.com/watch?v=fSytzGwwBVw) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on leakage. Then reproduce the lesson example: Fit a scaler inside a Pipeline on training folds only.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on leakage. Then reproduce the lesson example: Fit a scaler inside a Pipeline on training folds only.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### YouTube: focused explanations and full courses

- [Machine Learning Fundamentals: Cross Validation](https://www.youtube.com/watch?v=fSytzGwwBVw) · StatQuest · Josh Starmer · Focused explanation
  - Explains: A visual, step-by-step explanation of the topic named in the title.
  - Useful because: Use the worked intuition before writing the corresponding small experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://statquest.org/video_index.html
- [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
  - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
  - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### Free written resources

1. [scikit-learn: cross-validation](https://scikit-learn.org/stable/modules/cross_validation.html) — Free; no registration required. No paid materials required.
2. [scikit-learn: common pitfalls](https://scikit-learn.org/stable/common_pitfalls.html) — Free; no registration required. No paid materials required.

#### Lab: Train/validation/test, cross-validation and leakage

Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Train/validation/test, cross-validation and leakage:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: ticket category: login, billing or account setup; compare with a majority-class predictor and keyword rules. For Train/validation/test, cross-validation and leakage, explicitly apply Splits, Cross-validation, Leakage.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Train/validation/test, cross-validation and leakage: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Train/validation/test, cross-validation and leakage: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Train/validation/test, cross-validation and leakage:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a stock movement is an injected anomaly; compare with explicit quantity limits and rolling statistics. For Train/validation/test, cross-validation and leakage, explicitly apply Splits, Cross-validation, Leakage.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Train/validation/test, cross-validation and leakage: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Train/validation/test, cross-validation and leakage: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Train/validation/test, cross-validation and leakage:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the review topic and rating-consistency flag; compare with topic keywords and explicit rating rules. For Train/validation/test, cross-validation and leakage, explicitly apply Splits, Cross-validation, Leakage.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Train/validation/test, cross-validation and leakage: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Train/validation/test, cross-validation and leakage: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Train/validation/test, cross-validation and leakage:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the next weak concept requiring practice; compare with the lowest-score eligible prerequisite-aware concept. For Train/validation/test, cross-validation and leakage, explicitly apply Splits, Cross-validation, Leakage.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Train/validation/test, cross-validation and leakage: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Train/validation/test, cross-validation and leakage: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Train/validation/test, cross-validation and leakage:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: query/item relevance; compare with keyword search and a simple ranker. For Train/validation/test, cross-validation and leakage, explicitly apply Splits, Cross-validation, Leakage.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Train/validation/test, cross-validation and leakage: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Train/validation/test, cross-validation and leakage: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Train/validation/test, cross-validation and leakage:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: next-day task count; compare with the count on the same weekday in the previous week. For Train/validation/test, cross-validation and leakage, explicitly apply Splits, Cross-validation, Leakage.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Train/validation/test, cross-validation and leakage: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Train/validation/test, cross-validation and leakage: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Train/validation/test, cross-validation and leakage:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the digit class or generated dataset label; compare with a dummy predictor and a simple fitted estimator. For Train/validation/test, cross-validation and leakage, explicitly apply Splits, Cross-validation, Leakage.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Train/validation/test, cross-validation and leakage: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Train/validation/test, cross-validation and leakage: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Train/validation/test, cross-validation and leakage:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a query/passage pair is relevant; compare with keyword overlap and a TF-IDF retriever. For Train/validation/test, cross-validation and leakage, explicitly apply Splits, Cross-validation, Leakage.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Train/validation/test, cross-validation and leakage: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Train/validation/test, cross-validation and leakage: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Train/validation/test, cross-validation and leakage:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: validity of a document record; compare with a deterministic schema validator; keep it authoritative. For Train/validation/test, cross-validation and leakage, explicitly apply Splits, Cross-validation, Leakage.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Train/validation/test, cross-validation and leakage: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Train/validation/test, cross-validation and leakage: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Train/validation/test, cross-validation and leakage:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the incident category/severity from a log window; compare with error counts and a keyword-to-runbook mapping. For Train/validation/test, cross-validation and leakage, explicitly apply Splits, Cross-validation, Leakage.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Train/validation/test, cross-validation and leakage: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Train/validation/test, cross-validation and leakage: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="ml-preprocessing"></a>

### Preprocessing and feature engineering

Convert messy records into features consistently during training and inference.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Train/validation/test, cross-validation and leakage](ml.md#ml-splits) Navigation is unrestricted.

#### Concepts

- [ ] **Scaling and encoding:** Numeric scaling and categorical encoding depend on the estimator and data.
  - Example: Standardize numeric features and one-hot encode categories with unknown-category handling.
  - Videos:
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on scaling and encoding. Then reproduce the lesson example: Standardize numeric features and one-hot encode categories with unknown-category handling.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Feature engineering:** Transformations capture useful information but should respect availability at prediction time.
  - Example: Extract weekday from a timestamp known before a prediction.
  - Videos:
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on feature engineering. Then reproduce the lesson example: Extract weekday from a timestamp known before a prediction.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Pipelines:** ColumnTransformer and Pipeline bundle transformations with the estimator to prevent drift and leakage.
  - Example: Save one fitted pipeline instead of separate manually applied transformations.
  - Videos:
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on pipelines. Then reproduce the lesson example: Save one fitted pipeline instead of separate manually applied transformations.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### YouTube: focused explanations and full courses

- [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
  - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
  - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
  - Explains: NumPy, pandas, cleaning and exploring data with Python.
  - Useful because: Work through real data transformations before building training pipelines.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/

#### Free written resources

1. [Inria: categorical variables](https://inria.github.io/scikit-learn-mooc/python_scripts/03_categorical_pipeline.html) — Free; no registration required. No paid materials required.
2. [scikit-learn: composite estimators](https://scikit-learn.org/stable/modules/compose.html) — Free; no registration required. No paid materials required.

#### Lab: Preprocessing and feature engineering

Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Preprocessing and feature engineering:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: ticket category: login, billing or account setup; compare with a majority-class predictor and keyword rules. For Preprocessing and feature engineering, explicitly apply Scaling and encoding, Feature engineering, Pipelines.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Preprocessing and feature engineering: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Preprocessing and feature engineering: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Preprocessing and feature engineering:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a stock movement is an injected anomaly; compare with explicit quantity limits and rolling statistics. For Preprocessing and feature engineering, explicitly apply Scaling and encoding, Feature engineering, Pipelines.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Preprocessing and feature engineering: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Preprocessing and feature engineering: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Preprocessing and feature engineering:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the review topic and rating-consistency flag; compare with topic keywords and explicit rating rules. For Preprocessing and feature engineering, explicitly apply Scaling and encoding, Feature engineering, Pipelines.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Preprocessing and feature engineering: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Preprocessing and feature engineering: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Preprocessing and feature engineering:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the next weak concept requiring practice; compare with the lowest-score eligible prerequisite-aware concept. For Preprocessing and feature engineering, explicitly apply Scaling and encoding, Feature engineering, Pipelines.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Preprocessing and feature engineering: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Preprocessing and feature engineering: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Preprocessing and feature engineering:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: query/item relevance; compare with keyword search and a simple ranker. For Preprocessing and feature engineering, explicitly apply Scaling and encoding, Feature engineering, Pipelines.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Preprocessing and feature engineering: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Preprocessing and feature engineering: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Preprocessing and feature engineering:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: next-day task count; compare with the count on the same weekday in the previous week. For Preprocessing and feature engineering, explicitly apply Scaling and encoding, Feature engineering, Pipelines.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Preprocessing and feature engineering: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Preprocessing and feature engineering: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Preprocessing and feature engineering:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the digit class or generated dataset label; compare with a dummy predictor and a simple fitted estimator. For Preprocessing and feature engineering, explicitly apply Scaling and encoding, Feature engineering, Pipelines.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Preprocessing and feature engineering: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Preprocessing and feature engineering: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Preprocessing and feature engineering:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a query/passage pair is relevant; compare with keyword overlap and a TF-IDF retriever. For Preprocessing and feature engineering, explicitly apply Scaling and encoding, Feature engineering, Pipelines.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Preprocessing and feature engineering: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Preprocessing and feature engineering: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Preprocessing and feature engineering:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: validity of a document record; compare with a deterministic schema validator; keep it authoritative. For Preprocessing and feature engineering, explicitly apply Scaling and encoding, Feature engineering, Pipelines.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Preprocessing and feature engineering: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Preprocessing and feature engineering: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Preprocessing and feature engineering:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the incident category/severity from a log window; compare with error counts and a keyword-to-runbook mapping. For Preprocessing and feature engineering, explicitly apply Scaling and encoding, Feature engineering, Pipelines.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Preprocessing and feature engineering: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Preprocessing and feature engineering: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Models and optimization

<a id="ml-linear"></a>

### Linear/logistic regression and gradient descent

Understand simple models before relying on complex ones.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Preprocessing and feature engineering](ml.md#ml-preprocessing) Navigation is unrestricted.

#### Concepts

- [ ] **Linear regression:** A weighted feature sum predicts a continuous value; squared error penalizes large residuals.
  - Example: Fit y≈3x+2 with noisy generated points.
  - Videos:
    - [Stanford CS229 — Linear regression and gradient descent](https://www.youtube.com/watch?v=4b4MUYve_U8) · Stanford Online · Andrew Ng · University lecture
      - Explains: Linear regression objectives and gradient-based parameter updates.
      - Useful because: Connect a mathematical loss to your hand-written optimization loop.
      - Watch for: Focus on linear regression. Then reproduce the lesson example: Fit y≈3x+2 with noisy generated points.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=4b4MUYve_U8
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on linear regression. Then reproduce the lesson example: Fit y≈3x+2 with noisy generated points.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Logistic regression:** A sigmoid or softmax converts linear scores into class probabilities; cross-entropy trains the classifier.
  - Example: Predict a binary label from two numeric features.
  - Videos:
    - [Stanford CS229 — Linear regression and gradient descent](https://www.youtube.com/watch?v=4b4MUYve_U8) · Stanford Online · Andrew Ng · University lecture
      - Explains: Linear regression objectives and gradient-based parameter updates.
      - Useful because: Connect a mathematical loss to your hand-written optimization loop.
      - Watch for: Focus on logistic regression. Then reproduce the lesson example: Predict a binary label from two numeric features.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=4b4MUYve_U8
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on logistic regression. Then reproduce the lesson example: Predict a binary label from two numeric features.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Gradient descent:** Learning rate controls update size; an excessive rate can diverge.
  - Example: Plot loss for small and excessive step sizes on the same dataset.
  - Videos:
    - [The Chain Rule](https://www.youtube.com/watch?v=wl1myxrtQHQ) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on gradient descent. Then reproduce the lesson example: Plot loss for small and excessive step sizes on the same dataset.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on gradient descent. Then reproduce the lesson example: Plot loss for small and excessive step sizes on the same dataset.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### YouTube: focused explanations and full courses

- [Stanford CS229 — Linear regression and gradient descent](https://www.youtube.com/watch?v=4b4MUYve_U8) · Stanford Online · Andrew Ng · University lecture
  - Explains: Linear regression objectives and gradient-based parameter updates.
  - Useful because: Connect a mathematical loss to your hand-written optimization loop.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=4b4MUYve_U8
- [Logistic Regression](https://www.youtube.com/watch?v=yIYKR4sgzI8) · StatQuest · Josh Starmer · Focused explanation
  - Explains: A visual, step-by-step explanation of the topic named in the title.
  - Useful because: Use the worked intuition before writing the corresponding small experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://statquest.org/video_index.html
- [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
  - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
  - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### Free written resources

1. [scikit-learn: linear models](https://scikit-learn.org/stable/modules/linear_model.html) — Free; no registration required. No paid materials required.
2. [D2L: linear regression from scratch](https://d2l.ai/chapter_linear-regression/linear-regression-scratch.html) — Free; no registration required. No paid materials required.

#### Lab: Linear/logistic regression and gradient descent

Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Linear/logistic regression and gradient descent:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: ticket category: login, billing or account setup; compare with a majority-class predictor and keyword rules. For Linear/logistic regression and gradient descent, explicitly apply Linear regression, Logistic regression, Gradient descent.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Linear/logistic regression and gradient descent: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Linear/logistic regression and gradient descent: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Linear/logistic regression and gradient descent:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a stock movement is an injected anomaly; compare with explicit quantity limits and rolling statistics. For Linear/logistic regression and gradient descent, explicitly apply Linear regression, Logistic regression, Gradient descent.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Linear/logistic regression and gradient descent: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Linear/logistic regression and gradient descent: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Linear/logistic regression and gradient descent:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the review topic and rating-consistency flag; compare with topic keywords and explicit rating rules. For Linear/logistic regression and gradient descent, explicitly apply Linear regression, Logistic regression, Gradient descent.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Linear/logistic regression and gradient descent: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Linear/logistic regression and gradient descent: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Linear/logistic regression and gradient descent:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the next weak concept requiring practice; compare with the lowest-score eligible prerequisite-aware concept. For Linear/logistic regression and gradient descent, explicitly apply Linear regression, Logistic regression, Gradient descent.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Linear/logistic regression and gradient descent: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Linear/logistic regression and gradient descent: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Linear/logistic regression and gradient descent:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: query/item relevance; compare with keyword search and a simple ranker. For Linear/logistic regression and gradient descent, explicitly apply Linear regression, Logistic regression, Gradient descent.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Linear/logistic regression and gradient descent: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Linear/logistic regression and gradient descent: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Linear/logistic regression and gradient descent:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: next-day task count; compare with the count on the same weekday in the previous week. For Linear/logistic regression and gradient descent, explicitly apply Linear regression, Logistic regression, Gradient descent.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Linear/logistic regression and gradient descent: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Linear/logistic regression and gradient descent: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Linear/logistic regression and gradient descent:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the digit class or generated dataset label; compare with a dummy predictor and a simple fitted estimator. For Linear/logistic regression and gradient descent, explicitly apply Linear regression, Logistic regression, Gradient descent.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Linear/logistic regression and gradient descent: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Linear/logistic regression and gradient descent: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Linear/logistic regression and gradient descent:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a query/passage pair is relevant; compare with keyword overlap and a TF-IDF retriever. For Linear/logistic regression and gradient descent, explicitly apply Linear regression, Logistic regression, Gradient descent.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Linear/logistic regression and gradient descent: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Linear/logistic regression and gradient descent: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Linear/logistic regression and gradient descent:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: validity of a document record; compare with a deterministic schema validator; keep it authoritative. For Linear/logistic regression and gradient descent, explicitly apply Linear regression, Logistic regression, Gradient descent.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Linear/logistic regression and gradient descent: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Linear/logistic regression and gradient descent: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Linear/logistic regression and gradient descent:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the incident category/severity from a log window; compare with error counts and a keyword-to-runbook mapping. For Linear/logistic regression and gradient descent, explicitly apply Linear regression, Logistic regression, Gradient descent.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Linear/logistic regression and gradient descent: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Linear/logistic regression and gradient descent: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="ml-trees"></a>

### Trees, random forests and boosting

Compare nonlinear baselines and recognize how ensembles reduce different errors.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Linear/logistic regression and gradient descent](ml.md#ml-linear) Navigation is unrestricted.

#### Concepts

- [ ] **Decision trees:** Trees partition feature space using split rules and can overfit deeply.
  - Example: Limit max_depth and compare training with validation accuracy.
  - Videos:
    - [Decision and Classification Trees, Clearly Explained!!!](https://www.youtube.com/watch?v=_L39rN6gz7Y) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on decision trees. Then reproduce the lesson example: Limit max_depth and compare training with validation accuracy.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on decision trees. Then reproduce the lesson example: Limit max_depth and compare training with validation accuracy.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Random forests:** Bootstrap sampling and randomized features diversify trees before averaging.
  - Example: Compare a single tree and a forest across random seeds.
  - Videos:
    - [Random Forests Part 1: Building, using and evaluating](https://www.youtube.com/watch?v=J4Wdy0Wc_xQ) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on random forests. Then reproduce the lesson example: Compare a single tree and a forest across random seeds.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on random forests. Then reproduce the lesson example: Compare a single tree and a forest across random seeds.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Boosting:** Sequential weak learners focus on remaining error; learning rate and tree size control complexity.
  - Example: Evaluate HistGradientBoosting on a small tabular dataset.
  - Videos:
    - [Gradient Boost Part 1: Regression Main Ideas](https://www.youtube.com/watch?v=3CC4N4z3GJc) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on boosting. Then reproduce the lesson example: Evaluate HistGradientBoosting on a small tabular dataset.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on boosting. Then reproduce the lesson example: Evaluate HistGradientBoosting on a small tabular dataset.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### YouTube: focused explanations and full courses

- [Decision and Classification Trees, Clearly Explained!!!](https://www.youtube.com/watch?v=_L39rN6gz7Y) · StatQuest · Josh Starmer · Focused explanation
  - Explains: A visual, step-by-step explanation of the topic named in the title.
  - Useful because: Use the worked intuition before writing the corresponding small experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://statquest.org/video_index.html
- [Random Forests Part 1: Building, using and evaluating](https://www.youtube.com/watch?v=J4Wdy0Wc_xQ) · StatQuest · Josh Starmer · Focused explanation
  - Explains: A visual, step-by-step explanation of the topic named in the title.
  - Useful because: Use the worked intuition before writing the corresponding small experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://statquest.org/video_index.html
- [Gradient Boost Part 1: Regression Main Ideas](https://www.youtube.com/watch?v=3CC4N4z3GJc) · StatQuest · Josh Starmer · Focused explanation
  - Explains: A visual, step-by-step explanation of the topic named in the title.
  - Useful because: Use the worked intuition before writing the corresponding small experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://statquest.org/video_index.html
- [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
  - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
  - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### Free written resources

1. [scikit-learn: decision trees](https://scikit-learn.org/stable/modules/tree.html) — Free; no registration required. No paid materials required.
2. [scikit-learn: ensembles](https://scikit-learn.org/stable/modules/ensemble.html) — Free; no registration required. No paid materials required.

#### Lab: Trees, random forests and boosting

Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Trees, random forests and boosting:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: ticket category: login, billing or account setup; compare with a majority-class predictor and keyword rules. For Trees, random forests and boosting, explicitly apply Decision trees, Random forests, Boosting.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Trees, random forests and boosting: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Trees, random forests and boosting: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Trees, random forests and boosting:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a stock movement is an injected anomaly; compare with explicit quantity limits and rolling statistics. For Trees, random forests and boosting, explicitly apply Decision trees, Random forests, Boosting.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Trees, random forests and boosting: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Trees, random forests and boosting: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Trees, random forests and boosting:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the review topic and rating-consistency flag; compare with topic keywords and explicit rating rules. For Trees, random forests and boosting, explicitly apply Decision trees, Random forests, Boosting.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Trees, random forests and boosting: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Trees, random forests and boosting: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Trees, random forests and boosting:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the next weak concept requiring practice; compare with the lowest-score eligible prerequisite-aware concept. For Trees, random forests and boosting, explicitly apply Decision trees, Random forests, Boosting.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Trees, random forests and boosting: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Trees, random forests and boosting: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Trees, random forests and boosting:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: query/item relevance; compare with keyword search and a simple ranker. For Trees, random forests and boosting, explicitly apply Decision trees, Random forests, Boosting.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Trees, random forests and boosting: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Trees, random forests and boosting: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Trees, random forests and boosting:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: next-day task count; compare with the count on the same weekday in the previous week. For Trees, random forests and boosting, explicitly apply Decision trees, Random forests, Boosting.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Trees, random forests and boosting: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Trees, random forests and boosting: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Trees, random forests and boosting:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the digit class or generated dataset label; compare with a dummy predictor and a simple fitted estimator. For Trees, random forests and boosting, explicitly apply Decision trees, Random forests, Boosting.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Trees, random forests and boosting: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Trees, random forests and boosting: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Trees, random forests and boosting:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a query/passage pair is relevant; compare with keyword overlap and a TF-IDF retriever. For Trees, random forests and boosting, explicitly apply Decision trees, Random forests, Boosting.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Trees, random forests and boosting: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Trees, random forests and boosting: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Trees, random forests and boosting:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: validity of a document record; compare with a deterministic schema validator; keep it authoritative. For Trees, random forests and boosting, explicitly apply Decision trees, Random forests, Boosting.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Trees, random forests and boosting: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Trees, random forests and boosting: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Trees, random forests and boosting:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the incident category/severity from a log window; compare with error counts and a keyword-to-runbook mapping. For Trees, random forests and boosting, explicitly apply Decision trees, Random forests, Boosting.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Trees, random forests and boosting: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Trees, random forests and boosting: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="ml-neighbors"></a>

### kNN, SVM, clustering and PCA

Choose methods based on geometry, labels and dimensionality.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Trees, random forests and boosting](ml.md#ml-trees) Navigation is unrestricted.

#### Concepts

- [ ] **kNN and SVM:** Neighbors depend on distance and scaling; SVM seeks a separating margin and may use kernels.
  - Example: Compare scaled and unscaled kNN on the same features.
  - Videos:
    - [K-Nearest Neighbors](https://www.youtube.com/watch?v=HVXime0nQeI) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on knn and svm. Then reproduce the lesson example: Compare scaled and unscaled kNN on the same features.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on knn and svm. Then reproduce the lesson example: Compare scaled and unscaled kNN on the same features.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Clustering:** Unsupervised grouping finds structure without targets; cluster IDs are not ground-truth labels.
  - Example: Run k-means on synthetic blobs and inspect sensitivity to k.
  - Videos:
    - [K-Means Clustering](https://www.youtube.com/watch?v=4b5d3muPQmA) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on clustering. Then reproduce the lesson example: Run k-means on synthetic blobs and inspect sensitivity to k.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on clustering. Then reproduce the lesson example: Run k-means on synthetic blobs and inspect sensitivity to k.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **PCA:** Principal components compress directions of variance; high variance is not necessarily predictive information.
  - Example: Project standardized digits features to two components for visualization.
  - Videos:
    - [Principal Component Analysis (PCA) Step-by-Step](https://www.youtube.com/watch?v=FgakZw6K1QQ) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on pca. Then reproduce the lesson example: Project standardized digits features to two components for visualization.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on pca. Then reproduce the lesson example: Project standardized digits features to two components for visualization.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### YouTube: focused explanations and full courses

- [K-Nearest Neighbors](https://www.youtube.com/watch?v=HVXime0nQeI) · StatQuest · Josh Starmer · Focused explanation
  - Explains: A visual, step-by-step explanation of the topic named in the title.
  - Useful because: Use the worked intuition before writing the corresponding small experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://statquest.org/video_index.html
- [Support Vector Machines (SVM)](https://www.youtube.com/watch?v=efR1C6CvhmE) · StatQuest · Josh Starmer · Focused explanation
  - Explains: A visual, step-by-step explanation of the topic named in the title.
  - Useful because: Use the worked intuition before writing the corresponding small experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://statquest.org/video_index.html
- [K-Means Clustering](https://www.youtube.com/watch?v=4b5d3muPQmA) · StatQuest · Josh Starmer · Focused explanation
  - Explains: A visual, step-by-step explanation of the topic named in the title.
  - Useful because: Use the worked intuition before writing the corresponding small experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://statquest.org/video_index.html
- [Principal Component Analysis (PCA) Step-by-Step](https://www.youtube.com/watch?v=FgakZw6K1QQ) · StatQuest · Josh Starmer · Focused explanation
  - Explains: A visual, step-by-step explanation of the topic named in the title.
  - Useful because: Use the worked intuition before writing the corresponding small experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://statquest.org/video_index.html
- [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
  - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
  - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### Free written resources

1. [scikit-learn: neighbors](https://scikit-learn.org/stable/modules/neighbors.html) — Free; no registration required. No paid materials required.
2. [scikit-learn: clustering](https://scikit-learn.org/stable/modules/clustering.html) — Free; no registration required. No paid materials required.
3. [scikit-learn: PCA](https://scikit-learn.org/stable/modules/decomposition.html#pca) — Free; no registration required. No paid materials required.

#### Lab: kNN, SVM, clustering and PCA

Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **kNN, SVM, clustering and PCA:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: ticket category: login, billing or account setup; compare with a majority-class predictor and keyword rules. For kNN, SVM, clustering and PCA, explicitly apply kNN and SVM, Clustering, PCA.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] kNN, SVM, clustering and PCA: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] kNN, SVM, clustering and PCA: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **kNN, SVM, clustering and PCA:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a stock movement is an injected anomaly; compare with explicit quantity limits and rolling statistics. For kNN, SVM, clustering and PCA, explicitly apply kNN and SVM, Clustering, PCA.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] kNN, SVM, clustering and PCA: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] kNN, SVM, clustering and PCA: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **kNN, SVM, clustering and PCA:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the review topic and rating-consistency flag; compare with topic keywords and explicit rating rules. For kNN, SVM, clustering and PCA, explicitly apply kNN and SVM, Clustering, PCA.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] kNN, SVM, clustering and PCA: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] kNN, SVM, clustering and PCA: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **kNN, SVM, clustering and PCA:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the next weak concept requiring practice; compare with the lowest-score eligible prerequisite-aware concept. For kNN, SVM, clustering and PCA, explicitly apply kNN and SVM, Clustering, PCA.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] kNN, SVM, clustering and PCA: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] kNN, SVM, clustering and PCA: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **kNN, SVM, clustering and PCA:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: query/item relevance; compare with keyword search and a simple ranker. For kNN, SVM, clustering and PCA, explicitly apply kNN and SVM, Clustering, PCA.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] kNN, SVM, clustering and PCA: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] kNN, SVM, clustering and PCA: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **kNN, SVM, clustering and PCA:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: next-day task count; compare with the count on the same weekday in the previous week. For kNN, SVM, clustering and PCA, explicitly apply kNN and SVM, Clustering, PCA.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] kNN, SVM, clustering and PCA: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] kNN, SVM, clustering and PCA: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **kNN, SVM, clustering and PCA:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the digit class or generated dataset label; compare with a dummy predictor and a simple fitted estimator. For kNN, SVM, clustering and PCA, explicitly apply kNN and SVM, Clustering, PCA.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] kNN, SVM, clustering and PCA: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] kNN, SVM, clustering and PCA: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **kNN, SVM, clustering and PCA:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a query/passage pair is relevant; compare with keyword overlap and a TF-IDF retriever. For kNN, SVM, clustering and PCA, explicitly apply kNN and SVM, Clustering, PCA.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] kNN, SVM, clustering and PCA: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] kNN, SVM, clustering and PCA: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **kNN, SVM, clustering and PCA:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: validity of a document record; compare with a deterministic schema validator; keep it authoritative. For kNN, SVM, clustering and PCA, explicitly apply kNN and SVM, Clustering, PCA.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] kNN, SVM, clustering and PCA: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] kNN, SVM, clustering and PCA: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **kNN, SVM, clustering and PCA:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the incident category/severity from a log window; compare with error counts and a keyword-to-runbook mapping. For kNN, SVM, clustering and PCA, explicitly apply kNN and SVM, Clustering, PCA.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] kNN, SVM, clustering and PCA: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] kNN, SVM, clustering and PCA: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Trustworthy results

<a id="ml-generalization"></a>

### Bias/variance, regularization and tuning

Improve validation behavior rather than merely maximizing training scores.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [kNN, SVM, clustering and PCA](ml.md#ml-neighbors) Navigation is unrestricted.

#### Concepts

- [ ] **Bias and variance:** Underfitting misses useful structure; overfitting captures noise and unstable patterns.
  - Example: Compare learning curves for shallow and deep trees.
  - Videos:
    - [Machine Learning Fundamentals: Bias and Variance](https://www.youtube.com/watch?v=EuBBz3bI-aA) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on bias and variance. Then reproduce the lesson example: Compare learning curves for shallow and deep trees.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on bias and variance. Then reproduce the lesson example: Compare learning curves for shallow and deep trees.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Regularization:** Penalties or structural constraints restrict complexity; stronger regularization is not always better.
  - Example: Sweep logistic regression C across a small logarithmic grid.
  - Videos:
    - [Regularization Part 1: L2, Ridge Regression](https://www.youtube.com/watch?v=Q81RR3yKn30) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on regularization. Then reproduce the lesson example: Sweep logistic regression C across a small logarithmic grid.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on regularization. Then reproduce the lesson example: Sweep logistic regression C across a small logarithmic grid.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Hyperparameter tuning:** Search uses validation folds, never repeatedly exposed test data.
  - Example: Compare three candidate settings with cross-validation then evaluate once.
  - Videos:
    - [Machine Learning Fundamentals: Bias and Variance](https://www.youtube.com/watch?v=EuBBz3bI-aA) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on hyperparameter tuning. Then reproduce the lesson example: Compare three candidate settings with cross-validation then evaluate once.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on hyperparameter tuning. Then reproduce the lesson example: Compare three candidate settings with cross-validation then evaluate once.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### YouTube: focused explanations and full courses

- [Machine Learning Fundamentals: Bias and Variance](https://www.youtube.com/watch?v=EuBBz3bI-aA) · StatQuest · Josh Starmer · Focused explanation
  - Explains: A visual, step-by-step explanation of the topic named in the title.
  - Useful because: Use the worked intuition before writing the corresponding small experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://statquest.org/video_index.html
- [Regularization Part 1: L2, Ridge Regression](https://www.youtube.com/watch?v=Q81RR3yKn30) · StatQuest · Josh Starmer · Focused explanation
  - Explains: A visual, step-by-step explanation of the topic named in the title.
  - Useful because: Use the worked intuition before writing the corresponding small experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://statquest.org/video_index.html
- [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
  - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
  - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### Free written resources

1. [scikit-learn: validation curves](https://scikit-learn.org/stable/modules/learning_curve.html) — Free; no registration required. No paid materials required.
2. [scikit-learn: parameter tuning](https://scikit-learn.org/stable/modules/grid_search.html) — Free; no registration required. No paid materials required.

#### Lab: Bias/variance, regularization and tuning

Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Bias/variance, regularization and tuning:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: ticket category: login, billing or account setup; compare with a majority-class predictor and keyword rules. For Bias/variance, regularization and tuning, explicitly apply Bias and variance, Regularization, Hyperparameter tuning.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Bias/variance, regularization and tuning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Bias/variance, regularization and tuning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Bias/variance, regularization and tuning:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a stock movement is an injected anomaly; compare with explicit quantity limits and rolling statistics. For Bias/variance, regularization and tuning, explicitly apply Bias and variance, Regularization, Hyperparameter tuning.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Bias/variance, regularization and tuning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Bias/variance, regularization and tuning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Bias/variance, regularization and tuning:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the review topic and rating-consistency flag; compare with topic keywords and explicit rating rules. For Bias/variance, regularization and tuning, explicitly apply Bias and variance, Regularization, Hyperparameter tuning.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Bias/variance, regularization and tuning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Bias/variance, regularization and tuning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Bias/variance, regularization and tuning:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the next weak concept requiring practice; compare with the lowest-score eligible prerequisite-aware concept. For Bias/variance, regularization and tuning, explicitly apply Bias and variance, Regularization, Hyperparameter tuning.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Bias/variance, regularization and tuning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Bias/variance, regularization and tuning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Bias/variance, regularization and tuning:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: query/item relevance; compare with keyword search and a simple ranker. For Bias/variance, regularization and tuning, explicitly apply Bias and variance, Regularization, Hyperparameter tuning.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Bias/variance, regularization and tuning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Bias/variance, regularization and tuning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Bias/variance, regularization and tuning:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: next-day task count; compare with the count on the same weekday in the previous week. For Bias/variance, regularization and tuning, explicitly apply Bias and variance, Regularization, Hyperparameter tuning.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Bias/variance, regularization and tuning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Bias/variance, regularization and tuning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Bias/variance, regularization and tuning:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the digit class or generated dataset label; compare with a dummy predictor and a simple fitted estimator. For Bias/variance, regularization and tuning, explicitly apply Bias and variance, Regularization, Hyperparameter tuning.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Bias/variance, regularization and tuning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Bias/variance, regularization and tuning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Bias/variance, regularization and tuning:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a query/passage pair is relevant; compare with keyword overlap and a TF-IDF retriever. For Bias/variance, regularization and tuning, explicitly apply Bias and variance, Regularization, Hyperparameter tuning.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Bias/variance, regularization and tuning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Bias/variance, regularization and tuning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Bias/variance, regularization and tuning:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: validity of a document record; compare with a deterministic schema validator; keep it authoritative. For Bias/variance, regularization and tuning, explicitly apply Bias and variance, Regularization, Hyperparameter tuning.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Bias/variance, regularization and tuning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Bias/variance, regularization and tuning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Bias/variance, regularization and tuning:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the incident category/severity from a log window; compare with error counts and a keyword-to-runbook mapping. For Bias/variance, regularization and tuning, explicitly apply Bias and variance, Regularization, Hyperparameter tuning.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Bias/variance, regularization and tuning: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Bias/variance, regularization and tuning: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="ml-metrics"></a>

### Imbalance, metrics, calibration and error analysis

Measure the mistakes that matter and distinguish probability quality from label accuracy.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Bias/variance, regularization and tuning](ml.md#ml-generalization) Navigation is unrestricted.

#### Concepts

- [ ] **Classification metrics:** Precision, recall, F1, ROC-AUC and PR-AUC answer different questions; accuracy hides rare-class failures.
  - Example: A classifier predicting only the majority class can still have high accuracy.
  - Videos:
    - [Machine Learning Fundamentals: The Confusion Matrix](https://www.youtube.com/watch?v=Kdsp6soqA7o) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on classification metrics. Then reproduce the lesson example: A classifier predicting only the majority class can still have high accuracy.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on classification metrics. Then reproduce the lesson example: A classifier predicting only the majority class can still have high accuracy.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Calibration and thresholds:** Calibration compares probabilities with frequencies; thresholds trade false positives against false negatives.
  - Example: Choose a threshold on validation data and evaluate its confusion matrix.
  - Videos:
    - [Model calibration, Brier score and Platt scaling](https://www.youtube.com/watch?v=rG2EfFOXyg0) · Data science teaching tutorial · Focused explanation
      - Explains: Calibration plots, probability quality and calibration methods.
      - Useful because: Distinguish a confident probability from an accurate classifier.
      - Watch for: Focus on calibration and thresholds. Then reproduce the lesson example: Choose a threshold on validation data and evaluate its confusion matrix.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=rG2EfFOXyg0
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on calibration and thresholds. Then reproduce the lesson example: Choose a threshold on validation data and evaluate its confusion matrix.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Error analysis:** Inspect error slices and mislabeled samples; metrics alone do not reveal causes.
  - Example: Group errors by feature range and compare class-weighted training.
  - Videos:
    - [Machine Learning Fundamentals: The Confusion Matrix](https://www.youtube.com/watch?v=Kdsp6soqA7o) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on error analysis. Then reproduce the lesson example: Group errors by feature range and compare class-weighted training.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on error analysis. Then reproduce the lesson example: Group errors by feature range and compare class-weighted training.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### YouTube: focused explanations and full courses

- [Machine Learning Fundamentals: The Confusion Matrix](https://www.youtube.com/watch?v=Kdsp6soqA7o) · StatQuest · Josh Starmer · Focused explanation
  - Explains: A visual, step-by-step explanation of the topic named in the title.
  - Useful because: Use the worked intuition before writing the corresponding small experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://statquest.org/video_index.html
- [Model calibration, Brier score and Platt scaling](https://www.youtube.com/watch?v=rG2EfFOXyg0) · Data science teaching tutorial · Focused explanation
  - Explains: Calibration plots, probability quality and calibration methods.
  - Useful because: Distinguish a confident probability from an accurate classifier.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=rG2EfFOXyg0
- [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
  - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
  - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### Free written resources

1. [scikit-learn: model evaluation](https://scikit-learn.org/stable/modules/model_evaluation.html) — Free; no registration required. No paid materials required.
2. [scikit-learn: probability calibration](https://scikit-learn.org/stable/modules/calibration.html) — Free; no registration required. No paid materials required.

#### Lab: Imbalance, metrics, calibration and error analysis

Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Imbalance, metrics, calibration and error analysis:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: ticket category: login, billing or account setup; compare with a majority-class predictor and keyword rules. For Imbalance, metrics, calibration and error analysis, explicitly apply Classification metrics, Calibration and thresholds, Error analysis.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Imbalance, metrics, calibration and error analysis: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Imbalance, metrics, calibration and error analysis: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Imbalance, metrics, calibration and error analysis:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a stock movement is an injected anomaly; compare with explicit quantity limits and rolling statistics. For Imbalance, metrics, calibration and error analysis, explicitly apply Classification metrics, Calibration and thresholds, Error analysis.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Imbalance, metrics, calibration and error analysis: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Imbalance, metrics, calibration and error analysis: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Imbalance, metrics, calibration and error analysis:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the review topic and rating-consistency flag; compare with topic keywords and explicit rating rules. For Imbalance, metrics, calibration and error analysis, explicitly apply Classification metrics, Calibration and thresholds, Error analysis.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Imbalance, metrics, calibration and error analysis: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Imbalance, metrics, calibration and error analysis: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Imbalance, metrics, calibration and error analysis:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the next weak concept requiring practice; compare with the lowest-score eligible prerequisite-aware concept. For Imbalance, metrics, calibration and error analysis, explicitly apply Classification metrics, Calibration and thresholds, Error analysis.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Imbalance, metrics, calibration and error analysis: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Imbalance, metrics, calibration and error analysis: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Imbalance, metrics, calibration and error analysis:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: query/item relevance; compare with keyword search and a simple ranker. For Imbalance, metrics, calibration and error analysis, explicitly apply Classification metrics, Calibration and thresholds, Error analysis.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Imbalance, metrics, calibration and error analysis: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Imbalance, metrics, calibration and error analysis: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Imbalance, metrics, calibration and error analysis:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: next-day task count; compare with the count on the same weekday in the previous week. For Imbalance, metrics, calibration and error analysis, explicitly apply Classification metrics, Calibration and thresholds, Error analysis.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Imbalance, metrics, calibration and error analysis: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Imbalance, metrics, calibration and error analysis: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Imbalance, metrics, calibration and error analysis:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the digit class or generated dataset label; compare with a dummy predictor and a simple fitted estimator. For Imbalance, metrics, calibration and error analysis, explicitly apply Classification metrics, Calibration and thresholds, Error analysis.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Imbalance, metrics, calibration and error analysis: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Imbalance, metrics, calibration and error analysis: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Imbalance, metrics, calibration and error analysis:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a query/passage pair is relevant; compare with keyword overlap and a TF-IDF retriever. For Imbalance, metrics, calibration and error analysis, explicitly apply Classification metrics, Calibration and thresholds, Error analysis.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Imbalance, metrics, calibration and error analysis: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Imbalance, metrics, calibration and error analysis: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Imbalance, metrics, calibration and error analysis:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: validity of a document record; compare with a deterministic schema validator; keep it authoritative. For Imbalance, metrics, calibration and error analysis, explicitly apply Classification metrics, Calibration and thresholds, Error analysis.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Imbalance, metrics, calibration and error analysis: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Imbalance, metrics, calibration and error analysis: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Imbalance, metrics, calibration and error analysis:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the incident category/severity from a log window; compare with error counts and a keyword-to-runbook mapping. For Imbalance, metrics, calibration and error analysis, explicitly apply Classification metrics, Calibration and thresholds, Error analysis.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Imbalance, metrics, calibration and error analysis: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Imbalance, metrics, calibration and error analysis: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="ml-inference"></a>

### Model persistence, inference and data drift

Serve the same preprocessing and model version that you evaluated.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Imbalance, metrics, calibration and error analysis](ml.md#ml-metrics) Navigation is unrestricted.

#### Concepts

- [ ] **Persistence:** Persist the complete fitted pipeline and version metadata; pickle-like formats are unsafe from untrusted sources.
  - Example: Load only an artifact your own training job produced.
  - Videos:
    - [MLOps: a production-grade project](https://www.youtube.com/watch?v=-dJPoLm_gtE) · freeCodeCamp · Project course · approximately 3h
      - Explains: Ingestion, experiment management and deploying a model workflow.
      - Useful because: Connect evaluation, model artifacts and operations; use local alternatives to optional services.
      - Watch for: Focus on persistence. Then reproduce the lesson example: Load only an artifact your own training job produced.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/mlops-course-learn-to-build-machine-learning-production-grade-projects/
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on persistence. Then reproduce the lesson example: Load only an artifact your own training job produced.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Inference contracts:** Validate feature schema and define batch and single-example outputs.
  - Example: Reject a missing required feature instead of silently shifting column order.
  - Videos:
    - [MLOps: a production-grade project](https://www.youtube.com/watch?v=-dJPoLm_gtE) · freeCodeCamp · Project course · approximately 3h
      - Explains: Ingestion, experiment management and deploying a model workflow.
      - Useful because: Connect evaluation, model artifacts and operations; use local alternatives to optional services.
      - Watch for: Focus on inference contracts. Then reproduce the lesson example: Reject a missing required feature instead of silently shifting column order.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/mlops-course-learn-to-build-machine-learning-production-grade-projects/
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on inference contracts. Then reproduce the lesson example: Reject a missing required feature instead of silently shifting column order.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Drift:** Feature or target distributions can change after deployment; alerts need reference windows and action plans.
  - Example: Compare current feature histograms with training statistics.
  - Videos:
    - [MLOps: a production-grade project](https://www.youtube.com/watch?v=-dJPoLm_gtE) · freeCodeCamp · Project course · approximately 3h
      - Explains: Ingestion, experiment management and deploying a model workflow.
      - Useful because: Connect evaluation, model artifacts and operations; use local alternatives to optional services.
      - Watch for: Focus on drift. Then reproduce the lesson example: Compare current feature histograms with training statistics.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/mlops-course-learn-to-build-machine-learning-production-grade-projects/
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on drift. Then reproduce the lesson example: Compare current feature histograms with training statistics.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### YouTube: focused explanations and full courses

- [MLOps: a production-grade project](https://www.youtube.com/watch?v=-dJPoLm_gtE) · freeCodeCamp · Project course · approximately 3h
  - Explains: Ingestion, experiment management and deploying a model workflow.
  - Useful because: Connect evaluation, model artifacts and operations; use local alternatives to optional services.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/mlops-course-learn-to-build-machine-learning-production-grade-projects/
- [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
  - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
  - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### Free written resources

1. [scikit-learn: model persistence](https://scikit-learn.org/stable/model_persistence.html) — Free; no registration required. No paid materials required.
2. [scikit-learn: common pitfalls](https://scikit-learn.org/stable/common_pitfalls.html) — Free; no registration required. No paid materials required.

#### Lab: Model persistence, inference and data drift

Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Model persistence, inference and data drift:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: ticket category: login, billing or account setup; compare with a majority-class predictor and keyword rules. For Model persistence, inference and data drift, explicitly apply Persistence, Inference contracts, Drift.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Model persistence, inference and data drift: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Model persistence, inference and data drift: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Model persistence, inference and data drift:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a stock movement is an injected anomaly; compare with explicit quantity limits and rolling statistics. For Model persistence, inference and data drift, explicitly apply Persistence, Inference contracts, Drift.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Model persistence, inference and data drift: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Model persistence, inference and data drift: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Model persistence, inference and data drift:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the review topic and rating-consistency flag; compare with topic keywords and explicit rating rules. For Model persistence, inference and data drift, explicitly apply Persistence, Inference contracts, Drift.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Model persistence, inference and data drift: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Model persistence, inference and data drift: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Model persistence, inference and data drift:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the next weak concept requiring practice; compare with the lowest-score eligible prerequisite-aware concept. For Model persistence, inference and data drift, explicitly apply Persistence, Inference contracts, Drift.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Model persistence, inference and data drift: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Model persistence, inference and data drift: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Model persistence, inference and data drift:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: query/item relevance; compare with keyword search and a simple ranker. For Model persistence, inference and data drift, explicitly apply Persistence, Inference contracts, Drift.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Model persistence, inference and data drift: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Model persistence, inference and data drift: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Model persistence, inference and data drift:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: next-day task count; compare with the count on the same weekday in the previous week. For Model persistence, inference and data drift, explicitly apply Persistence, Inference contracts, Drift.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Model persistence, inference and data drift: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Model persistence, inference and data drift: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Model persistence, inference and data drift:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the digit class or generated dataset label; compare with a dummy predictor and a simple fitted estimator. For Model persistence, inference and data drift, explicitly apply Persistence, Inference contracts, Drift.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Model persistence, inference and data drift: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Model persistence, inference and data drift: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Model persistence, inference and data drift:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a query/passage pair is relevant; compare with keyword overlap and a TF-IDF retriever. For Model persistence, inference and data drift, explicitly apply Persistence, Inference contracts, Drift.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Model persistence, inference and data drift: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Model persistence, inference and data drift: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Model persistence, inference and data drift:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: validity of a document record; compare with a deterministic schema validator; keep it authoritative. For Model persistence, inference and data drift, explicitly apply Persistence, Inference contracts, Drift.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Model persistence, inference and data drift: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Model persistence, inference and data drift: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Model persistence, inference and data drift:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the incident category/severity from a log window; compare with error counts and a keyword-to-runbook mapping. For Model persistence, inference and data drift, explicitly apply Persistence, Inference contracts, Drift.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Model persistence, inference and data drift: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Model persistence, inference and data drift: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Model development in detail

<a id="ml-pipelines-search"></a>

### Column transformers, nested validation and tuning budgets

Tune models while keeping preprocessing and model selection inside a leakage-safe validation procedure.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [Preprocessing and feature engineering](ml.md#ml-preprocessing) Navigation is unrestricted.

#### Concepts

- [ ] **Per-column preprocessing:** Different feature types need explicit transformations that are fit only on the training fold.
  - Example: Impute and scale numeric columns while one-hot encoding categorical columns in one ColumnTransformer.
  - Videos:
    - [Machine Learning Fundamentals: Cross Validation](https://www.youtube.com/watch?v=fSytzGwwBVw) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on per-column preprocessing. Then reproduce the lesson example: Impute and scale numeric columns while one-hot encoding categorical columns in one ColumnTransformer.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on per-column preprocessing. Then reproduce the lesson example: Impute and scale numeric columns while one-hot encoding categorical columns in one ColumnTransformer.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Pipeline fit boundaries:** A Pipeline ensures fit-dependent preprocessing is repeated within each validation split instead of learning from all rows.
  - Example: Compare a deliberately leaked feature selector with the same selector placed inside the cross-validation pipeline.
  - Videos:
    - [Machine Learning Fundamentals: Cross Validation](https://www.youtube.com/watch?v=fSytzGwwBVw) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on pipeline fit boundaries. Then reproduce the lesson example: Compare a deliberately leaked feature selector with the same selector placed inside the cross-validation pipeline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on pipeline fit boundaries. Then reproduce the lesson example: Compare a deliberately leaked feature selector with the same selector placed inside the cross-validation pipeline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Search-space design:** A bounded search expresses hypotheses about influential parameters rather than trying every possible combination.
  - Example: Compare a small logarithmic range of regularisation strengths instead of a huge dense grid.
  - Videos:
    - [Machine Learning Fundamentals: Cross Validation](https://www.youtube.com/watch?v=fSytzGwwBVw) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on search-space design. Then reproduce the lesson example: Compare a small logarithmic range of regularisation strengths instead of a huge dense grid.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on search-space design. Then reproduce the lesson example: Compare a small logarithmic range of regularisation strengths instead of a huge dense grid.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Nested validation:** An outer validation estimates the complete model-selection procedure while inner validation chooses hyperparameters.
  - Example: Use two outer folds and two inner folds on a tiny synthetic dataset and record which observations each stage sees.
  - Videos:
    - [Machine Learning Fundamentals: Cross Validation](https://www.youtube.com/watch?v=fSytzGwwBVw) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on nested validation. Then reproduce the lesson example: Use two outer folds and two inner folds on a tiny synthetic dataset and record which observations each stage sees.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on nested validation. Then reproduce the lesson example: Use two outer folds and two inner folds on a tiny synthetic dataset and record which observations each stage sees.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Search accounting:** Compare procedures under similar computational budgets and retain validation results, seeds and configuration.
  - Example: Log each candidate score and runtime; keep a final untouched test set for the selected procedure.
  - Videos:
    - [Machine Learning Fundamentals: Cross Validation](https://www.youtube.com/watch?v=fSytzGwwBVw) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on search accounting. Then reproduce the lesson example: Log each candidate score and runtime; keep a final untouched test set for the selected procedure.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on search accounting. Then reproduce the lesson example: Log each candidate score and runtime; keep a final untouched test set for the selected procedure.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### YouTube: focused explanations and full courses

- [Machine Learning Fundamentals: Cross Validation](https://www.youtube.com/watch?v=fSytzGwwBVw) · StatQuest · Josh Starmer · Focused explanation
  - Explains: A visual, step-by-step explanation of the topic named in the title.
  - Useful because: Use the worked intuition before writing the corresponding small experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://statquest.org/video_index.html
- [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
  - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
  - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### Free written resources

1. [scikit-learn: ColumnTransformer](https://scikit-learn.org/stable/modules/compose.html) — Free; no registration required. No paid materials required.
2. [scikit-learn: tuning estimator parameters](https://scikit-learn.org/stable/modules/grid_search.html) — Free; no registration required. No paid materials required.

#### Lab: Column transformers, nested validation and tuning budgets

Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Column transformers, nested validation and tuning budgets:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: ticket category: login, billing or account setup; compare with a majority-class predictor and keyword rules. For Column transformers, nested validation and tuning budgets, explicitly apply Per-column preprocessing, Pipeline fit boundaries, Search-space design.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Column transformers, nested validation and tuning budgets: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Column transformers, nested validation and tuning budgets: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Column transformers, nested validation and tuning budgets:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a stock movement is an injected anomaly; compare with explicit quantity limits and rolling statistics. For Column transformers, nested validation and tuning budgets, explicitly apply Per-column preprocessing, Pipeline fit boundaries, Search-space design.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Column transformers, nested validation and tuning budgets: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Column transformers, nested validation and tuning budgets: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Column transformers, nested validation and tuning budgets:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the review topic and rating-consistency flag; compare with topic keywords and explicit rating rules. For Column transformers, nested validation and tuning budgets, explicitly apply Per-column preprocessing, Pipeline fit boundaries, Search-space design.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Column transformers, nested validation and tuning budgets: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Column transformers, nested validation and tuning budgets: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Column transformers, nested validation and tuning budgets:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the next weak concept requiring practice; compare with the lowest-score eligible prerequisite-aware concept. For Column transformers, nested validation and tuning budgets, explicitly apply Per-column preprocessing, Pipeline fit boundaries, Search-space design.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Column transformers, nested validation and tuning budgets: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Column transformers, nested validation and tuning budgets: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Column transformers, nested validation and tuning budgets:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: query/item relevance; compare with keyword search and a simple ranker. For Column transformers, nested validation and tuning budgets, explicitly apply Per-column preprocessing, Pipeline fit boundaries, Search-space design.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Column transformers, nested validation and tuning budgets: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Column transformers, nested validation and tuning budgets: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Column transformers, nested validation and tuning budgets:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: next-day task count; compare with the count on the same weekday in the previous week. For Column transformers, nested validation and tuning budgets, explicitly apply Per-column preprocessing, Pipeline fit boundaries, Search-space design.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Column transformers, nested validation and tuning budgets: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Column transformers, nested validation and tuning budgets: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Column transformers, nested validation and tuning budgets:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the digit class or generated dataset label; compare with a dummy predictor and a simple fitted estimator. For Column transformers, nested validation and tuning budgets, explicitly apply Per-column preprocessing, Pipeline fit boundaries, Search-space design.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Column transformers, nested validation and tuning budgets: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Column transformers, nested validation and tuning budgets: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Column transformers, nested validation and tuning budgets:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a query/passage pair is relevant; compare with keyword overlap and a TF-IDF retriever. For Column transformers, nested validation and tuning budgets, explicitly apply Per-column preprocessing, Pipeline fit boundaries, Search-space design.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Column transformers, nested validation and tuning budgets: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Column transformers, nested validation and tuning budgets: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Column transformers, nested validation and tuning budgets:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: validity of a document record; compare with a deterministic schema validator; keep it authoritative. For Column transformers, nested validation and tuning budgets, explicitly apply Per-column preprocessing, Pipeline fit boundaries, Search-space design.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Column transformers, nested validation and tuning budgets: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Column transformers, nested validation and tuning budgets: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Column transformers, nested validation and tuning budgets:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the incident category/severity from a log window; compare with error counts and a keyword-to-runbook mapping. For Column transformers, nested validation and tuning budgets, explicitly apply Per-column preprocessing, Pipeline fit boundaries, Search-space design.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Column transformers, nested validation and tuning budgets: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Column transformers, nested validation and tuning budgets: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="ml-threshold-imbalance"></a>

### Class imbalance, decision thresholds and calibration

Translate classifier scores into a defensible decision rule rather than relying on accuracy or a default threshold.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [Imbalance, metrics, calibration and error analysis](ml.md#ml-metrics) Navigation is unrestricted.

#### Concepts

- [ ] **Base rate and accuracy:** A rare positive class makes a majority predictor look accurate without solving the intended detection problem.
  - Example: For 1% positives, calculate the accuracy and recall of predicting every example negative.
  - Videos:
    - [Model calibration, Brier score and Platt scaling](https://www.youtube.com/watch?v=rG2EfFOXyg0) · Data science teaching tutorial · Focused explanation
      - Explains: Calibration plots, probability quality and calibration methods.
      - Useful because: Distinguish a confident probability from an accurate classifier.
      - Watch for: Focus on base rate and accuracy. Then reproduce the lesson example: For 1% positives, calculate the accuracy and recall of predicting every example negative.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=rG2EfFOXyg0
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on base rate and accuracy. Then reproduce the lesson example: For 1% positives, calculate the accuracy and recall of predicting every example negative.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Precision-recall tradeoff:** Changing a threshold changes the set of predicted positives and therefore false-positive and false-negative counts.
  - Example: Compute a confusion matrix at thresholds 0.2, 0.5 and 0.8 on a fixed score vector.
  - Videos:
    - [Model calibration, Brier score and Platt scaling](https://www.youtube.com/watch?v=rG2EfFOXyg0) · Data science teaching tutorial · Focused explanation
      - Explains: Calibration plots, probability quality and calibration methods.
      - Useful because: Distinguish a confident probability from an accurate classifier.
      - Watch for: Focus on precision-recall tradeoff. Then reproduce the lesson example: Compute a confusion matrix at thresholds 0.2, 0.5 and 0.8 on a fixed score vector.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=rG2EfFOXyg0
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on precision-recall tradeoff. Then reproduce the lesson example: Compute a confusion matrix at thresholds 0.2, 0.5 and 0.8 on a fixed score vector.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Class weights and resampling:** Weighting or resampling changes the training objective or distribution and must be confined to training folds.
  - Example: Compare weighted and unweighted logistic regression without modifying the validation class balance.
  - Videos:
    - [Model calibration, Brier score and Platt scaling](https://www.youtube.com/watch?v=rG2EfFOXyg0) · Data science teaching tutorial · Focused explanation
      - Explains: Calibration plots, probability quality and calibration methods.
      - Useful because: Distinguish a confident probability from an accurate classifier.
      - Watch for: Focus on class weights and resampling. Then reproduce the lesson example: Compare weighted and unweighted logistic regression without modifying the validation class balance.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=rG2EfFOXyg0
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on class weights and resampling. Then reproduce the lesson example: Compare weighted and unweighted logistic regression without modifying the validation class balance.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Calibration meaning:** A calibrated probability should match observed outcome frequency for similar scores under the evaluation distribution.
  - Example: Group predictions near 0.8 and compare their average score with the observed positive fraction.
  - Videos:
    - [Model calibration, Brier score and Platt scaling](https://www.youtube.com/watch?v=rG2EfFOXyg0) · Data science teaching tutorial · Focused explanation
      - Explains: Calibration plots, probability quality and calibration methods.
      - Useful because: Distinguish a confident probability from an accurate classifier.
      - Watch for: Focus on calibration meaning. Then reproduce the lesson example: Group predictions near 0.8 and compare their average score with the observed positive fraction.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=rG2EfFOXyg0
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on calibration meaning. Then reproduce the lesson example: Group predictions near 0.8 and compare their average score with the observed positive fraction.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Decision cost and threshold validation:** Choose thresholds on validation data using a declared utility or capacity limit; the test set must not tune the decision.
  - Example: Select a threshold meeting a review budget and evaluate that fixed threshold once on the test split.
  - Videos:
    - [Model calibration, Brier score and Platt scaling](https://www.youtube.com/watch?v=rG2EfFOXyg0) · Data science teaching tutorial · Focused explanation
      - Explains: Calibration plots, probability quality and calibration methods.
      - Useful because: Distinguish a confident probability from an accurate classifier.
      - Watch for: Focus on decision cost and threshold validation. Then reproduce the lesson example: Select a threshold meeting a review budget and evaluate that fixed threshold once on the test split.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=rG2EfFOXyg0
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on decision cost and threshold validation. Then reproduce the lesson example: Select a threshold meeting a review budget and evaluate that fixed threshold once on the test split.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### YouTube: focused explanations and full courses

- [Model calibration, Brier score and Platt scaling](https://www.youtube.com/watch?v=rG2EfFOXyg0) · Data science teaching tutorial · Focused explanation
  - Explains: Calibration plots, probability quality and calibration methods.
  - Useful because: Distinguish a confident probability from an accurate classifier.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=rG2EfFOXyg0
- [Machine Learning Fundamentals: The Confusion Matrix](https://www.youtube.com/watch?v=Kdsp6soqA7o) · StatQuest · Josh Starmer · Focused explanation
  - Explains: A visual, step-by-step explanation of the topic named in the title.
  - Useful because: Use the worked intuition before writing the corresponding small experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://statquest.org/video_index.html
- [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
  - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
  - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### Free written resources

1. [scikit-learn: threshold tuning](https://scikit-learn.org/stable/modules/classification_threshold.html) — Free; no registration required. No paid materials required.
2. [scikit-learn: probability calibration](https://scikit-learn.org/stable/modules/calibration.html) — Free; no registration required. No paid materials required.

#### Lab: Class imbalance, decision thresholds and calibration

Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Class imbalance, decision thresholds and calibration:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: ticket category: login, billing or account setup; compare with a majority-class predictor and keyword rules. For Class imbalance, decision thresholds and calibration, explicitly apply Base rate and accuracy, Precision-recall tradeoff, Class weights and resampling.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Class imbalance, decision thresholds and calibration: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Class imbalance, decision thresholds and calibration: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Class imbalance, decision thresholds and calibration:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a stock movement is an injected anomaly; compare with explicit quantity limits and rolling statistics. For Class imbalance, decision thresholds and calibration, explicitly apply Base rate and accuracy, Precision-recall tradeoff, Class weights and resampling.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Class imbalance, decision thresholds and calibration: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Class imbalance, decision thresholds and calibration: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Class imbalance, decision thresholds and calibration:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the review topic and rating-consistency flag; compare with topic keywords and explicit rating rules. For Class imbalance, decision thresholds and calibration, explicitly apply Base rate and accuracy, Precision-recall tradeoff, Class weights and resampling.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Class imbalance, decision thresholds and calibration: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Class imbalance, decision thresholds and calibration: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Class imbalance, decision thresholds and calibration:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the next weak concept requiring practice; compare with the lowest-score eligible prerequisite-aware concept. For Class imbalance, decision thresholds and calibration, explicitly apply Base rate and accuracy, Precision-recall tradeoff, Class weights and resampling.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Class imbalance, decision thresholds and calibration: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Class imbalance, decision thresholds and calibration: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Class imbalance, decision thresholds and calibration:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: query/item relevance; compare with keyword search and a simple ranker. For Class imbalance, decision thresholds and calibration, explicitly apply Base rate and accuracy, Precision-recall tradeoff, Class weights and resampling.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Class imbalance, decision thresholds and calibration: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Class imbalance, decision thresholds and calibration: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Class imbalance, decision thresholds and calibration:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: next-day task count; compare with the count on the same weekday in the previous week. For Class imbalance, decision thresholds and calibration, explicitly apply Base rate and accuracy, Precision-recall tradeoff, Class weights and resampling.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Class imbalance, decision thresholds and calibration: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Class imbalance, decision thresholds and calibration: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Class imbalance, decision thresholds and calibration:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the digit class or generated dataset label; compare with a dummy predictor and a simple fitted estimator. For Class imbalance, decision thresholds and calibration, explicitly apply Base rate and accuracy, Precision-recall tradeoff, Class weights and resampling.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Class imbalance, decision thresholds and calibration: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Class imbalance, decision thresholds and calibration: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Class imbalance, decision thresholds and calibration:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a query/passage pair is relevant; compare with keyword overlap and a TF-IDF retriever. For Class imbalance, decision thresholds and calibration, explicitly apply Base rate and accuracy, Precision-recall tradeoff, Class weights and resampling.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Class imbalance, decision thresholds and calibration: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Class imbalance, decision thresholds and calibration: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Class imbalance, decision thresholds and calibration:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: validity of a document record; compare with a deterministic schema validator; keep it authoritative. For Class imbalance, decision thresholds and calibration, explicitly apply Base rate and accuracy, Precision-recall tradeoff, Class weights and resampling.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Class imbalance, decision thresholds and calibration: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Class imbalance, decision thresholds and calibration: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Class imbalance, decision thresholds and calibration:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the incident category/severity from a log window; compare with error counts and a keyword-to-runbook mapping. For Class imbalance, decision thresholds and calibration, explicitly apply Base rate and accuracy, Precision-recall tradeoff, Class weights and resampling.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Class imbalance, decision thresholds and calibration: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Class imbalance, decision thresholds and calibration: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="ml-interpretation-errors"></a>

### Permutation importance, partial dependence and error slices

Explain a model carefully and identify which examples fail without confusing predictive association with causation.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [Bias/variance, regularization and tuning](ml.md#ml-generalization) Navigation is unrestricted.

#### Concepts

- [ ] **Held-out permutation importance:** Shuffling one feature estimates how much a fitted model relies on it for a chosen metric and evaluation dataset.
  - Example: Shuffle a useful numeric column in held-out data and compare the score drop with a random-noise column.
  - Videos:
    - [Decision and Classification Trees, Clearly Explained!!!](https://www.youtube.com/watch?v=_L39rN6gz7Y) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on held-out permutation importance. Then reproduce the lesson example: Shuffle a useful numeric column in held-out data and compare the score drop with a random-noise column.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on held-out permutation importance. Then reproduce the lesson example: Shuffle a useful numeric column in held-out data and compare the score drop with a random-noise column.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Correlated features:** Importance can be shared or hidden among interchangeable features, so a low individual score does not prove irrelevance.
  - Example: Duplicate a predictive column and compare individual permutation scores before and after duplication.
  - Videos:
    - [Decision and Classification Trees, Clearly Explained!!!](https://www.youtube.com/watch?v=_L39rN6gz7Y) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on correlated features. Then reproduce the lesson example: Duplicate a predictive column and compare individual permutation scores before and after duplication.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on correlated features. Then reproduce the lesson example: Duplicate a predictive column and compare individual permutation scores before and after duplication.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Partial dependence assumptions:** A partial-dependence plot averages predictions while varying selected features and can query unrealistic combinations.
  - Example: Plot a model response while checking whether the varied values are plausible for the observed subgroup.
  - Videos:
    - [Decision and Classification Trees, Clearly Explained!!!](https://www.youtube.com/watch?v=_L39rN6gz7Y) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on partial dependence assumptions. Then reproduce the lesson example: Plot a model response while checking whether the varied values are plausible for the observed subgroup.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on partial dependence assumptions. Then reproduce the lesson example: Plot a model response while checking whether the varied values are plausible for the observed subgroup.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Error slices:** Aggregate quality can hide failures in specific sources, lengths or groups; require sample counts and uncertainty.
  - Example: Compare false-negative rates for short versus long synthetic records and display each slice size.
  - Videos:
    - [Decision and Classification Trees, Clearly Explained!!!](https://www.youtube.com/watch?v=_L39rN6gz7Y) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on error slices. Then reproduce the lesson example: Compare false-negative rates for short versus long synthetic records and display each slice size.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on error slices. Then reproduce the lesson example: Compare false-negative rates for short versus long synthetic records and display each slice size.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Association versus intervention:** A predictive explanation describes model behaviour, not the result of changing the real world.
  - Example: Explain why a feature importance for support history does not establish what happens if support history is artificially changed.
  - Videos:
    - [Decision and Classification Trees, Clearly Explained!!!](https://www.youtube.com/watch?v=_L39rN6gz7Y) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on association versus intervention. Then reproduce the lesson example: Explain why a feature importance for support history does not establish what happens if support history is artificially changed.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on association versus intervention. Then reproduce the lesson example: Explain why a feature importance for support history does not establish what happens if support history is artificially changed.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### YouTube: focused explanations and full courses

- [Decision and Classification Trees, Clearly Explained!!!](https://www.youtube.com/watch?v=_L39rN6gz7Y) · StatQuest · Josh Starmer · Focused explanation
  - Explains: A visual, step-by-step explanation of the topic named in the title.
  - Useful because: Use the worked intuition before writing the corresponding small experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://statquest.org/video_index.html
- [Machine Learning Fundamentals: Bias and Variance](https://www.youtube.com/watch?v=EuBBz3bI-aA) · StatQuest · Josh Starmer · Focused explanation
  - Explains: A visual, step-by-step explanation of the topic named in the title.
  - Useful because: Use the worked intuition before writing the corresponding small experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://statquest.org/video_index.html
- [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
  - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
  - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### Free written resources

1. [scikit-learn: permutation importance](https://scikit-learn.org/stable/modules/permutation_importance.html) — Free; no registration required. No paid materials required.
2. [scikit-learn: partial dependence](https://scikit-learn.org/stable/modules/partial_dependence.html) — Free; no registration required. No paid materials required.

#### Lab: Permutation importance, partial dependence and error slices

Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Permutation importance, partial dependence and error slices:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: ticket category: login, billing or account setup; compare with a majority-class predictor and keyword rules. For Permutation importance, partial dependence and error slices, explicitly apply Held-out permutation importance, Correlated features, Partial dependence assumptions.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Permutation importance, partial dependence and error slices: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Permutation importance, partial dependence and error slices: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Permutation importance, partial dependence and error slices:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a stock movement is an injected anomaly; compare with explicit quantity limits and rolling statistics. For Permutation importance, partial dependence and error slices, explicitly apply Held-out permutation importance, Correlated features, Partial dependence assumptions.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Permutation importance, partial dependence and error slices: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Permutation importance, partial dependence and error slices: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Permutation importance, partial dependence and error slices:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the review topic and rating-consistency flag; compare with topic keywords and explicit rating rules. For Permutation importance, partial dependence and error slices, explicitly apply Held-out permutation importance, Correlated features, Partial dependence assumptions.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Permutation importance, partial dependence and error slices: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Permutation importance, partial dependence and error slices: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Permutation importance, partial dependence and error slices:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the next weak concept requiring practice; compare with the lowest-score eligible prerequisite-aware concept. For Permutation importance, partial dependence and error slices, explicitly apply Held-out permutation importance, Correlated features, Partial dependence assumptions.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Permutation importance, partial dependence and error slices: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Permutation importance, partial dependence and error slices: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Permutation importance, partial dependence and error slices:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: query/item relevance; compare with keyword search and a simple ranker. For Permutation importance, partial dependence and error slices, explicitly apply Held-out permutation importance, Correlated features, Partial dependence assumptions.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Permutation importance, partial dependence and error slices: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Permutation importance, partial dependence and error slices: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Permutation importance, partial dependence and error slices:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: next-day task count; compare with the count on the same weekday in the previous week. For Permutation importance, partial dependence and error slices, explicitly apply Held-out permutation importance, Correlated features, Partial dependence assumptions.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Permutation importance, partial dependence and error slices: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Permutation importance, partial dependence and error slices: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Permutation importance, partial dependence and error slices:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the digit class or generated dataset label; compare with a dummy predictor and a simple fitted estimator. For Permutation importance, partial dependence and error slices, explicitly apply Held-out permutation importance, Correlated features, Partial dependence assumptions.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Permutation importance, partial dependence and error slices: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Permutation importance, partial dependence and error slices: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Permutation importance, partial dependence and error slices:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a query/passage pair is relevant; compare with keyword overlap and a TF-IDF retriever. For Permutation importance, partial dependence and error slices, explicitly apply Held-out permutation importance, Correlated features, Partial dependence assumptions.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Permutation importance, partial dependence and error slices: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Permutation importance, partial dependence and error slices: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Permutation importance, partial dependence and error slices:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: validity of a document record; compare with a deterministic schema validator; keep it authoritative. For Permutation importance, partial dependence and error slices, explicitly apply Held-out permutation importance, Correlated features, Partial dependence assumptions.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Permutation importance, partial dependence and error slices: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Permutation importance, partial dependence and error slices: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Permutation importance, partial dependence and error slices:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the incident category/severity from a log window; compare with error counts and a keyword-to-runbook mapping. For Permutation importance, partial dependence and error slices, explicitly apply Held-out permutation importance, Correlated features, Partial dependence assumptions.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Permutation importance, partial dependence and error slices: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Permutation importance, partial dependence and error slices: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="ml-svm-kernels"></a>

### SVM margins, kernels, C and feature scale

Understand what changes when a linear classifier becomes a kernel method and why preprocessing matters.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [kNN, SVM, clustering and PCA](ml.md#ml-neighbors) Navigation is unrestricted.

#### Concepts

- [ ] **Separating margin:** A maximum-margin classifier chooses a boundary using support vectors close to the margin rather than every point equally.
  - Example: Plot a two-dimensional linear decision boundary and highlight the fitted support vectors.
  - Videos:
    - [Support Vector Machines (SVM)](https://www.youtube.com/watch?v=efR1C6CvhmE) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on separating margin. Then reproduce the lesson example: Plot a two-dimensional linear decision boundary and highlight the fitted support vectors.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on separating margin. Then reproduce the lesson example: Plot a two-dimensional linear decision boundary and highlight the fitted support vectors.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Soft-margin C:** C controls the cost of violations relative to the regularisation objective and should be tuned within validation.
  - Example: Compare a small and a large C on a generated dataset with one mislabeled outlier.
  - Videos:
    - [Support Vector Machines (SVM)](https://www.youtube.com/watch?v=efR1C6CvhmE) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on soft-margin c. Then reproduce the lesson example: Compare a small and a large C on a generated dataset with one mislabeled outlier.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on soft-margin c. Then reproduce the lesson example: Compare a small and a large C on a generated dataset with one mislabeled outlier.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Kernel similarity:** A kernel defines an implicit feature-space similarity; an RBF kernel depends on distance and its bandwidth parameter.
  - Example: Compute exp(-gamma*distance_squared) for two distances and two gamma values.
  - Videos:
    - [Support Vector Machines (SVM)](https://www.youtube.com/watch?v=efR1C6CvhmE) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on kernel similarity. Then reproduce the lesson example: Compute exp(-gamma*distance_squared) for two distances and two gamma values.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on kernel similarity. Then reproduce the lesson example: Compute exp(-gamma*distance_squared) for two distances and two gamma values.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Scale and preprocessing:** Feature units affect distances and therefore kernel similarity; scale within a training pipeline to avoid leakage.
  - Example: Rescale one feature by 100 and compare unscaled with pipeline-scaled performance.
  - Videos:
    - [Support Vector Machines (SVM)](https://www.youtube.com/watch?v=efR1C6CvhmE) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on scale and preprocessing. Then reproduce the lesson example: Rescale one feature by 100 and compare unscaled with pipeline-scaled performance.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on scale and preprocessing. Then reproduce the lesson example: Rescale one feature by 100 and compare unscaled with pipeline-scaled performance.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Compute and probability caveats:** Kernel methods may become expensive as training size grows, and a decision score is not automatically a calibrated probability.
  - Example: Record fit time for two small sample sizes and report decision scores separately from any calibrated estimate.
  - Videos:
    - [Support Vector Machines (SVM)](https://www.youtube.com/watch?v=efR1C6CvhmE) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on compute and probability caveats. Then reproduce the lesson example: Record fit time for two small sample sizes and report decision scores separately from any calibrated estimate.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on compute and probability caveats. Then reproduce the lesson example: Record fit time for two small sample sizes and report decision scores separately from any calibrated estimate.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### YouTube: focused explanations and full courses

- [Support Vector Machines (SVM)](https://www.youtube.com/watch?v=efR1C6CvhmE) · StatQuest · Josh Starmer · Focused explanation
  - Explains: A visual, step-by-step explanation of the topic named in the title.
  - Useful because: Use the worked intuition before writing the corresponding small experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://statquest.org/video_index.html
- [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
  - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
  - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### Free written resources

1. [scikit-learn: support vector machines](https://scikit-learn.org/stable/modules/svm.html) — Free; no registration required. No paid materials required.
2. [scikit-learn: RBF parameter example](https://scikit-learn.org/stable/auto_examples/svm/plot_rbf_parameters.html) — Free; no registration required. No paid materials required.

#### Lab: SVM margins, kernels, C and feature scale

Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **SVM margins, kernels, C and feature scale:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: ticket category: login, billing or account setup; compare with a majority-class predictor and keyword rules. For SVM margins, kernels, C and feature scale, explicitly apply Separating margin, Soft-margin C, Kernel similarity.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SVM margins, kernels, C and feature scale: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] SVM margins, kernels, C and feature scale: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **SVM margins, kernels, C and feature scale:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a stock movement is an injected anomaly; compare with explicit quantity limits and rolling statistics. For SVM margins, kernels, C and feature scale, explicitly apply Separating margin, Soft-margin C, Kernel similarity.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SVM margins, kernels, C and feature scale: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] SVM margins, kernels, C and feature scale: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **SVM margins, kernels, C and feature scale:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the review topic and rating-consistency flag; compare with topic keywords and explicit rating rules. For SVM margins, kernels, C and feature scale, explicitly apply Separating margin, Soft-margin C, Kernel similarity.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SVM margins, kernels, C and feature scale: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] SVM margins, kernels, C and feature scale: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **SVM margins, kernels, C and feature scale:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the next weak concept requiring practice; compare with the lowest-score eligible prerequisite-aware concept. For SVM margins, kernels, C and feature scale, explicitly apply Separating margin, Soft-margin C, Kernel similarity.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SVM margins, kernels, C and feature scale: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] SVM margins, kernels, C and feature scale: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **SVM margins, kernels, C and feature scale:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: query/item relevance; compare with keyword search and a simple ranker. For SVM margins, kernels, C and feature scale, explicitly apply Separating margin, Soft-margin C, Kernel similarity.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SVM margins, kernels, C and feature scale: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] SVM margins, kernels, C and feature scale: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **SVM margins, kernels, C and feature scale:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: next-day task count; compare with the count on the same weekday in the previous week. For SVM margins, kernels, C and feature scale, explicitly apply Separating margin, Soft-margin C, Kernel similarity.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SVM margins, kernels, C and feature scale: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] SVM margins, kernels, C and feature scale: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **SVM margins, kernels, C and feature scale:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the digit class or generated dataset label; compare with a dummy predictor and a simple fitted estimator. For SVM margins, kernels, C and feature scale, explicitly apply Separating margin, Soft-margin C, Kernel similarity.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SVM margins, kernels, C and feature scale: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] SVM margins, kernels, C and feature scale: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **SVM margins, kernels, C and feature scale:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a query/passage pair is relevant; compare with keyword overlap and a TF-IDF retriever. For SVM margins, kernels, C and feature scale, explicitly apply Separating margin, Soft-margin C, Kernel similarity.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SVM margins, kernels, C and feature scale: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] SVM margins, kernels, C and feature scale: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **SVM margins, kernels, C and feature scale:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: validity of a document record; compare with a deterministic schema validator; keep it authoritative. For SVM margins, kernels, C and feature scale, explicitly apply Separating margin, Soft-margin C, Kernel similarity.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SVM margins, kernels, C and feature scale: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] SVM margins, kernels, C and feature scale: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **SVM margins, kernels, C and feature scale:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the incident category/severity from a log window; compare with error counts and a keyword-to-runbook mapping. For SVM margins, kernels, C and feature scale, explicitly apply Separating margin, Soft-margin C, Kernel similarity.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] SVM margins, kernels, C and feature scale: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] SVM margins, kernels, C and feature scale: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Time and anomaly tasks

<a id="ml-time-anomalies"></a>

### Time-series validation and anomaly-detection baselines

Handle ordered observations and rare events without training on future information.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [Train/validation/test, cross-validation and leakage](ml.md#ml-splits) Navigation is unrestricted.

#### Concepts

- [ ] **Forecast horizon and lag features:** A forecasting target specifies how far into the future to predict; lagged features must exist at the decision time.
  - Example: Predict tomorrow's count using yesterday's count rather than a rolling mean that includes tomorrow.
  - Videos:
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on forecast horizon and lag features. Then reproduce the lesson example: Predict tomorrow's count using yesterday's count rather than a rolling mean that includes tomorrow.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Walk-forward evaluation:** Training expands or rolls through time and validation follows it, respecting the intended deployment chronology.
  - Example: Evaluate three chronological windows and compare with a shuffled split that looks unrealistically strong.
  - Videos:
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on walk-forward evaluation. Then reproduce the lesson example: Evaluate three chronological windows and compare with a shuffled split that looks unrealistically strong.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Seasonal naive baseline:** Simple repetition or moving averages provide a meaningful baseline before adding a learned forecaster.
  - Example: Predict a day using the same weekday one week earlier and calculate mean absolute error.
  - Videos:
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on seasonal naive baseline. Then reproduce the lesson example: Predict a day using the same weekday one week earlier and calculate mean absolute error.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Anomaly score versus label:** An unsupervised detector produces an unusualness score; the alert threshold depends on operating needs and validation evidence.
  - Example: Rank points by IsolationForest score and choose a review threshold on a separate validation period.
  - Videos:
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on anomaly score versus label. Then reproduce the lesson example: Rank points by IsolationForest score and choose a review threshold on a separate validation period.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Alert evaluation:** Evaluate event coverage, false alerts and review volume rather than assuming every rare point is useful to a user.
  - Example: Group adjacent anomalous windows into events and compare event recall with raw pointwise recall.
  - Videos:
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on alert evaluation. Then reproduce the lesson example: Group adjacent anomalous windows into events and compare event recall with raw pointwise recall.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### YouTube: focused explanations and full courses

- [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
  - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
  - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [College statistics — full course](https://www.youtube.com/watch?v=xxpc-HPKN28) · freeCodeCamp · Full course · approximately 8h
  - Explains: Descriptive statistics, probability, distributions and statistical reasoning.
  - Useful because: Learn to interpret dataset summaries and uncertainty instead of trusting one metric.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/free-statistics-course/

#### Free written resources

1. [scikit-learn: TimeSeriesSplit](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.TimeSeriesSplit.html) — Free; no registration required. No paid materials required.
2. [scikit-learn: outlier detection](https://scikit-learn.org/stable/modules/outlier_detection.html) — Free; no registration required. No paid materials required.

#### Lab: Time-series validation and anomaly-detection baselines

Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Time-series validation and anomaly-detection baselines:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: ticket category: login, billing or account setup; compare with a majority-class predictor and keyword rules. For Time-series validation and anomaly-detection baselines, explicitly apply Forecast horizon and lag features, Walk-forward evaluation, Seasonal naive baseline.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Time-series validation and anomaly-detection baselines: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Time-series validation and anomaly-detection baselines: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Time-series validation and anomaly-detection baselines:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a stock movement is an injected anomaly; compare with explicit quantity limits and rolling statistics. For Time-series validation and anomaly-detection baselines, explicitly apply Forecast horizon and lag features, Walk-forward evaluation, Seasonal naive baseline.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Time-series validation and anomaly-detection baselines: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Time-series validation and anomaly-detection baselines: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Time-series validation and anomaly-detection baselines:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the review topic and rating-consistency flag; compare with topic keywords and explicit rating rules. For Time-series validation and anomaly-detection baselines, explicitly apply Forecast horizon and lag features, Walk-forward evaluation, Seasonal naive baseline.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Time-series validation and anomaly-detection baselines: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Time-series validation and anomaly-detection baselines: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Time-series validation and anomaly-detection baselines:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the next weak concept requiring practice; compare with the lowest-score eligible prerequisite-aware concept. For Time-series validation and anomaly-detection baselines, explicitly apply Forecast horizon and lag features, Walk-forward evaluation, Seasonal naive baseline.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Time-series validation and anomaly-detection baselines: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Time-series validation and anomaly-detection baselines: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Time-series validation and anomaly-detection baselines:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: query/item relevance; compare with keyword search and a simple ranker. For Time-series validation and anomaly-detection baselines, explicitly apply Forecast horizon and lag features, Walk-forward evaluation, Seasonal naive baseline.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Time-series validation and anomaly-detection baselines: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Time-series validation and anomaly-detection baselines: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Time-series validation and anomaly-detection baselines:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: next-day task count; compare with the count on the same weekday in the previous week. For Time-series validation and anomaly-detection baselines, explicitly apply Forecast horizon and lag features, Walk-forward evaluation, Seasonal naive baseline.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Time-series validation and anomaly-detection baselines: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Time-series validation and anomaly-detection baselines: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Time-series validation and anomaly-detection baselines:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the digit class or generated dataset label; compare with a dummy predictor and a simple fitted estimator. For Time-series validation and anomaly-detection baselines, explicitly apply Forecast horizon and lag features, Walk-forward evaluation, Seasonal naive baseline.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Time-series validation and anomaly-detection baselines: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Time-series validation and anomaly-detection baselines: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Time-series validation and anomaly-detection baselines:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a query/passage pair is relevant; compare with keyword overlap and a TF-IDF retriever. For Time-series validation and anomaly-detection baselines, explicitly apply Forecast horizon and lag features, Walk-forward evaluation, Seasonal naive baseline.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Time-series validation and anomaly-detection baselines: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Time-series validation and anomaly-detection baselines: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Time-series validation and anomaly-detection baselines:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: validity of a document record; compare with a deterministic schema validator; keep it authoritative. For Time-series validation and anomaly-detection baselines, explicitly apply Forecast horizon and lag features, Walk-forward evaluation, Seasonal naive baseline.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Time-series validation and anomaly-detection baselines: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Time-series validation and anomaly-detection baselines: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Time-series validation and anomaly-detection baselines:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the incident category/severity from a log window; compare with error counts and a keyword-to-runbook mapping. For Time-series validation and anomaly-detection baselines, explicitly apply Forecast horizon and lag features, Walk-forward evaluation, Seasonal naive baseline.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Time-series validation and anomaly-detection baselines: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Time-series validation and anomaly-detection baselines: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Unsupervised learning in detail

<a id="ml-cluster-validation"></a>

### K-means, density clustering and PCA diagnostics

Interpret unsupervised outputs in terms of assumptions instead of treating every cluster label as a discovered truth.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [kNN, SVM, clustering and PCA](ml.md#ml-neighbors) Navigation is unrestricted.

#### Concepts

- [ ] **K-means objective:** K-means minimises squared distance to cluster centres and is sensitive to scaling and its preferred cluster geometry.
  - Example: Compare fitted centres for two blobs and for a curved two-moons dataset.
  - Videos:
    - [K-Means Clustering](https://www.youtube.com/watch?v=4b5d3muPQmA) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on k-means objective. Then reproduce the lesson example: Compare fitted centres for two blobs and for a curved two-moons dataset.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on k-means objective. Then reproduce the lesson example: Compare fitted centres for two blobs and for a curved two-moons dataset.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Initialisation and stability:** Different starts can find different local solutions; inspect repeated runs and sensible n_init settings.
  - Example: Fit several seeded runs and compare centre positions and objective values.
  - Videos:
    - [K-Means Clustering](https://www.youtube.com/watch?v=4b5d3muPQmA) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on initialisation and stability. Then reproduce the lesson example: Fit several seeded runs and compare centre positions and objective values.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on initialisation and stability. Then reproduce the lesson example: Fit several seeded runs and compare centre positions and objective values.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Density and noise:** Density-based methods group connected dense regions and may label sparse points as noise rather than forcing them into a cluster.
  - Example: Compare DBSCAN outputs under two eps values and report the number of noise points.
  - Videos:
    - [K-Means Clustering](https://www.youtube.com/watch?v=4b5d3muPQmA) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on density and noise. Then reproduce the lesson example: Compare DBSCAN outputs under two eps values and report the number of noise points.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on density and noise. Then reproduce the lesson example: Compare DBSCAN outputs under two eps values and report the number of noise points.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Silhouette limitations:** An internal score evaluates a geometric criterion and can disagree with the business meaning of a grouping.
  - Example: Compare silhouette scores and visual structure on synthetic curved groups before choosing a method.
  - Videos:
    - [K-Means Clustering](https://www.youtube.com/watch?v=4b5d3muPQmA) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on silhouette limitations. Then reproduce the lesson example: Compare silhouette scores and visual structure on synthetic curved groups before choosing a method.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on silhouette limitations. Then reproduce the lesson example: Compare silhouette scores and visual structure on synthetic curved groups before choosing a method.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **PCA variance versus usefulness:** PCA retains directions of high variance, which need not preserve the information relevant to a downstream target.
  - Example: Create a noisy high-variance feature and a low-variance predictive feature and inspect what the first component preserves.
  - Videos:
    - [K-Means Clustering](https://www.youtube.com/watch?v=4b5d3muPQmA) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on pca variance versus usefulness. Then reproduce the lesson example: Create a noisy high-variance feature and a low-variance predictive feature and inspect what the first component preserves.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on pca variance versus usefulness. Then reproduce the lesson example: Create a noisy high-variance feature and a low-variance predictive feature and inspect what the first component preserves.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### YouTube: focused explanations and full courses

- [K-Means Clustering](https://www.youtube.com/watch?v=4b5d3muPQmA) · StatQuest · Josh Starmer · Focused explanation
  - Explains: A visual, step-by-step explanation of the topic named in the title.
  - Useful because: Use the worked intuition before writing the corresponding small experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://statquest.org/video_index.html
- [Principal Component Analysis (PCA) Step-by-Step](https://www.youtube.com/watch?v=FgakZw6K1QQ) · StatQuest · Josh Starmer · Focused explanation
  - Explains: A visual, step-by-step explanation of the topic named in the title.
  - Useful because: Use the worked intuition before writing the corresponding small experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://statquest.org/video_index.html
- [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
  - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
  - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### Free written resources

1. [scikit-learn: clustering](https://scikit-learn.org/stable/modules/clustering.html) — Free; no registration required. No paid materials required.
2. [scikit-learn: decomposition](https://scikit-learn.org/stable/modules/decomposition.html) — Free; no registration required. No paid materials required.

#### Lab: K-means, density clustering and PCA diagnostics

Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **K-means, density clustering and PCA diagnostics:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: ticket category: login, billing or account setup; compare with a majority-class predictor and keyword rules. For K-means, density clustering and PCA diagnostics, explicitly apply K-means objective, Initialisation and stability, Density and noise.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] K-means, density clustering and PCA diagnostics: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] K-means, density clustering and PCA diagnostics: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **K-means, density clustering and PCA diagnostics:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a stock movement is an injected anomaly; compare with explicit quantity limits and rolling statistics. For K-means, density clustering and PCA diagnostics, explicitly apply K-means objective, Initialisation and stability, Density and noise.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] K-means, density clustering and PCA diagnostics: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] K-means, density clustering and PCA diagnostics: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **K-means, density clustering and PCA diagnostics:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the review topic and rating-consistency flag; compare with topic keywords and explicit rating rules. For K-means, density clustering and PCA diagnostics, explicitly apply K-means objective, Initialisation and stability, Density and noise.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] K-means, density clustering and PCA diagnostics: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] K-means, density clustering and PCA diagnostics: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **K-means, density clustering and PCA diagnostics:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the next weak concept requiring practice; compare with the lowest-score eligible prerequisite-aware concept. For K-means, density clustering and PCA diagnostics, explicitly apply K-means objective, Initialisation and stability, Density and noise.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] K-means, density clustering and PCA diagnostics: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] K-means, density clustering and PCA diagnostics: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **K-means, density clustering and PCA diagnostics:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: query/item relevance; compare with keyword search and a simple ranker. For K-means, density clustering and PCA diagnostics, explicitly apply K-means objective, Initialisation and stability, Density and noise.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] K-means, density clustering and PCA diagnostics: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] K-means, density clustering and PCA diagnostics: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **K-means, density clustering and PCA diagnostics:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: next-day task count; compare with the count on the same weekday in the previous week. For K-means, density clustering and PCA diagnostics, explicitly apply K-means objective, Initialisation and stability, Density and noise.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] K-means, density clustering and PCA diagnostics: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] K-means, density clustering and PCA diagnostics: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **K-means, density clustering and PCA diagnostics:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the digit class or generated dataset label; compare with a dummy predictor and a simple fitted estimator. For K-means, density clustering and PCA diagnostics, explicitly apply K-means objective, Initialisation and stability, Density and noise.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] K-means, density clustering and PCA diagnostics: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] K-means, density clustering and PCA diagnostics: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **K-means, density clustering and PCA diagnostics:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: whether a query/passage pair is relevant; compare with keyword overlap and a TF-IDF retriever. For K-means, density clustering and PCA diagnostics, explicitly apply K-means objective, Initialisation and stability, Density and noise.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] K-means, density clustering and PCA diagnostics: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] K-means, density clustering and PCA diagnostics: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **K-means, density clustering and PCA diagnostics:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: validity of a document record; compare with a deterministic schema validator; keep it authoritative. For K-means, density clustering and PCA diagnostics, explicitly apply K-means objective, Initialisation and stability, Density and noise.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] K-means, density clustering and PCA diagnostics: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] K-means, density clustering and PCA diagnostics: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **K-means, density clustering and PCA diagnostics:** Train a suitable scikit-learn baseline on features derived from this project’s records. Model target: the incident category/severity from a log window; compare with error counts and a keyword-to-runbook mapping. For K-means, density clustering and PCA diagnostics, explicitly apply K-means objective, Initialisation and stability, Density and noise.
  - Deliverable: A fitted ML pipeline, held-out predictions and error analysis
  - Check: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] K-means, density clustering and PCA diagnostics: A fitted ML pipeline, held-out predictions and error analysis
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] K-means, density clustering and PCA diagnostics: Compare a dummy baseline, use leakage-free splits and report task-appropriate metrics. Adapt the lesson lab: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

