# Machine learning

Train reliable baselines and understand what their evaluation actually measures.

## Main route · Step 4 of 14

**Goal:** Train and evaluate classical models without leakage.

**Stage checkpoint:** Compare a baseline and two models on a held-out test set; explain metrics and error cases.

Compare classical models with leakage-safe evaluation and reproducible inference.

Follow the modules and lessons below at your pace. Finish each exercise, save your evidence and self-assessment, then continue. Completed and Already known count as completed; Skipped is reported separately. You can move ahead at any time.

[Full pipeline](../PIPELINE.md) · [Next step: Deep learning](dl.md)

## Learning and validation

<a id="ml-problem"></a>

### Supervised learning, regression and classification

Match the learning objective to the user problem and target data.

**Priority:** Foundation · **Study:** 2h · **Practice:** 3h

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

### Subscription retention baseline

An analyst needs an educational estimate of likely account cancellation.

**Data:** Generate 500 fictional accounts with a binary cancellation label. Use a fixed seed and keep evaluation cases separate.

**Output:** A leakage-safe preprocessing and classification pipeline.

**Effort:** 16h · Intermediate

- **Supervised learning, regression and classification:** Extend the project with Supervised learning, regression and classification in Subscription retention baseline. Adapt this focused lab to the project data: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool. Predict fictional cancellation label; keep the same target and splits across model comparisons. Required concepts: Supervised learning, Regression versus classification, Baselines and losses.
  - Deliverable: Supervised learning, regression and classification: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A leakage-safe preprocessing and classification pipeline. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Supervised learning, regression and classification: Supervised learning, regression and classification: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude post-cancellation fields and report PR AUC plus calibration.
- [ ] Supervised learning, regression and classification: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Customer behavior segmentation

A researcher needs interpretable groups without invented ground truth.

**Data:** Generate 300 fictional usage vectors with three overlapping clusters. Use a fixed seed and keep evaluation cases separate.

**Output:** A clustering comparison with stability and group descriptions.

**Effort:** 16h · Intermediate

- **Supervised learning, regression and classification:** Extend the project with Supervised learning, regression and classification in Customer behavior segmentation. Adapt this focused lab to the project data: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.  Required concepts: Supervised learning, Regression versus classification, Baselines and losses.
  - Deliverable: Supervised learning, regression and classification: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A clustering comparison with stability and group descriptions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Supervised learning, regression and classification: Supervised learning, regression and classification: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare multiple seeds and explain why silhouette alone is insufficient.
- [ ] Supervised learning, regression and classification: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Household energy forecasting

A planner needs next-day demand estimates with honest validation.

**Data:** Generate 365 daily demand values with seasonality and noise. Use a fixed seed and keep evaluation cases separate.

**Output:** A chronological forecast benchmark and residual report.

**Effort:** 16h · Intermediate

- **Supervised learning, regression and classification:** Extend the project with Supervised learning, regression and classification in Household energy forecasting. Adapt this focused lab to the project data: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool. Predict next-day energy demand; keep the same target and splits across model comparisons. Required concepts: Supervised learning, Regression versus classification, Baselines and losses.
  - Deliverable: Supervised learning, regression and classification: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chronological forecast benchmark and residual report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Supervised learning, regression and classification: Supervised learning, regression and classification: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Beat or explain failure against last-week demand on a future holdout.
- [ ] Supervised learning, regression and classification: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature contribution audit

A reviewer needs to investigate reliance on a suspicious feature.

**Data:** Generate 400 labeled rows with one leakage feature and correlated proxies. Use a fixed seed and keep evaluation cases separate.

**Output:** An ablation and permutation-importance report.

**Effort:** 16h · Intermediate

- **Supervised learning, regression and classification:** Extend the project with Supervised learning, regression and classification in Feature contribution audit. Adapt this focused lab to the project data: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool. Predict generated binary outcome with the leakage field excluded; keep the same target and splits across model comparisons. Required concepts: Supervised learning, Regression versus classification, Baselines and losses.
  - Deliverable: Supervised learning, regression and classification: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An ablation and permutation-importance report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Supervised learning, regression and classification: Supervised learning, regression and classification: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare held-out performance before/after leakage removal and explain correlation caveats.
- [ ] Supervised learning, regression and classification: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory movement anomaly detector

A stock manager needs unusual movements flagged for review.

**Data:** Generate 500 movements with 30 labeled injected anomalies. Use a fixed seed and keep evaluation cases separate.

**Output:** An anomaly ranking and threshold investigation notebook.

**Effort:** 16h · Intermediate

- **Supervised learning, regression and classification:** Extend the project with Supervised learning, regression and classification in Inventory movement anomaly detector. Adapt this focused lab to the project data: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool. Predict injected anomaly flag; keep the same target and splits across model comparisons. Required concepts: Supervised learning, Regression versus classification, Baselines and losses.
  - Deliverable: Supervised learning, regression and classification: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An anomaly ranking and threshold investigation notebook. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Supervised learning, regression and classification: Supervised learning, regression and classification: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report precision at a fixed review budget and inspect false alerts.
- [ ] Supervised learning, regression and classification: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Kernel decision boundary lab

A learner needs to understand when a nonlinear classifier helps.

**Data:** Use scikit-learn make_moons at three noise levels. Use a fixed seed and keep evaluation cases separate.

**Output:** A linear versus RBF SVM comparison with boundary plots.

**Effort:** 16h · Intermediate

- **Supervised learning, regression and classification:** Extend the project with Supervised learning, regression and classification in Kernel decision boundary lab. Adapt this focused lab to the project data: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool. Predict generated moon class; keep the same target and splits across model comparisons. Required concepts: Supervised learning, Regression versus classification, Baselines and losses.
  - Deliverable: Supervised learning, regression and classification: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A linear versus RBF SVM comparison with boundary plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Supervised learning, regression and classification: Supervised learning, regression and classification: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Use nested tuning and report held-out errors and support-vector counts.
- [ ] Supervised learning, regression and classification: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Nearest example explanation service

A learner needs predictions with inspectable reference examples.

**Data:** Use scikit-learn digits with a fixed train/test split. Use a fixed seed and keep evaluation cases separate.

**Output:** A kNN classifier that returns neighbors and distance explanations.

**Effort:** 16h · Intermediate

- **Supervised learning, regression and classification:** Extend the project with Supervised learning, regression and classification in Nearest example explanation service. Adapt this focused lab to the project data: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool. Predict digit class; keep the same target and splits across model comparisons. Required concepts: Supervised learning, Regression versus classification, Baselines and losses.
  - Deliverable: Supervised learning, regression and classification: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A kNN classifier that returns neighbors and distance explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Supervised learning, regression and classification: Supervised learning, regression and classification: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test scaling, ties and out-of-distribution inputs; record latency.
- [ ] Supervised learning, regression and classification: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible model selection bench

A teammate needs to compare preprocessing and estimator choices fairly.

**Data:** Use scikit-learn built-in wine data. Use a fixed seed and keep evaluation cases separate.

**Output:** A cross-validated search with persisted pipeline and inference script.

**Effort:** 16h · Intermediate

- **Supervised learning, regression and classification:** Extend the project with Supervised learning, regression and classification in Reproducible model selection bench. Adapt this focused lab to the project data: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool. Predict wine class; keep the same target and splits across model comparisons. Required concepts: Supervised learning, Regression versus classification, Baselines and losses.
  - Deliverable: Supervised learning, regression and classification: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cross-validated search with persisted pipeline and inference script. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Supervised learning, regression and classification: Supervised learning, regression and classification: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep the final holdout untouched until selection and reproduce predictions after reload.
- [ ] Supervised learning, regression and classification: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Rare event threshold workbench

An operator needs a controllable false-alert budget.

**Data:** Generate 1000 binary-labeled observations with 5 percent positives. Use a fixed seed and keep evaluation cases separate.

**Output:** A calibrated classifier and threshold tradeoff dashboard.

**Effort:** 16h · Intermediate

- **Supervised learning, regression and classification:** Extend the project with Supervised learning, regression and classification in Rare event threshold workbench. Adapt this focused lab to the project data: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool. Predict rare event label; keep the same target and splits across model comparisons. Required concepts: Supervised learning, Regression versus classification, Baselines and losses.
  - Deliverable: Supervised learning, regression and classification: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A calibrated classifier and threshold tradeoff dashboard. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Supervised learning, regression and classification: Supervised learning, regression and classification: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Choose thresholds on validation only and publish confusion matrices.
- [ ] Supervised learning, regression and classification: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket model comparison

A support lead needs category suggestions with human review for ambiguity.

**Data:** Generate 180 labeled login, billing and setup tickets with paraphrases. Use a fixed seed and keep evaluation cases separate.

**Output:** A classifier comparison, error slices and a review threshold.

**Effort:** 16h · Intermediate

- **Supervised learning, regression and classification:** Extend the project with Supervised learning, regression and classification in Support ticket model comparison. Adapt this focused lab to the project data: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool. Predict ticket category (login, billing, setup); keep the same target and splits across model comparisons. Required concepts: Supervised learning, Regression versus classification, Baselines and losses.
  - Deliverable: Supervised learning, regression and classification: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A classifier comparison, error slices and a review threshold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Supervised learning, regression and classification: Supervised learning, regression and classification: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Hold out templates, compare a dummy baseline and report macro F1.
- [ ] Supervised learning, regression and classification: Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="ml-splits"></a>

### Train/validation/test, cross-validation and leakage

Measure generalization using data the model and preprocessing have not seen.

**Priority:** Foundation · **Study:** 2h · **Practice:** 3h

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

### Subscription retention baseline

An analyst needs an educational estimate of likely account cancellation.

**Data:** Generate 500 fictional accounts with a binary cancellation label. Use a fixed seed and keep evaluation cases separate.

**Output:** A leakage-safe preprocessing and classification pipeline.

**Effort:** 16h · Intermediate

- **Train/validation/test, cross-validation and leakage:** Extend the project with Train/validation/test, cross-validation and leakage in Subscription retention baseline. Adapt this focused lab to the project data: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation. Predict fictional cancellation label; keep the same target and splits across model comparisons. Required concepts: Splits, Cross-validation, Leakage.
  - Deliverable: Train/validation/test, cross-validation and leakage: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A leakage-safe preprocessing and classification pipeline. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Train/validation/test, cross-validation and leakage: Train/validation/test, cross-validation and leakage: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude post-cancellation fields and report PR AUC plus calibration.
- [ ] Train/validation/test, cross-validation and leakage: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Customer behavior segmentation

A researcher needs interpretable groups without invented ground truth.

**Data:** Generate 300 fictional usage vectors with three overlapping clusters. Use a fixed seed and keep evaluation cases separate.

**Output:** A clustering comparison with stability and group descriptions.

**Effort:** 16h · Intermediate

- **Train/validation/test, cross-validation and leakage:** Extend the project with Train/validation/test, cross-validation and leakage in Customer behavior segmentation. Adapt this focused lab to the project data: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.  Required concepts: Splits, Cross-validation, Leakage.
  - Deliverable: Train/validation/test, cross-validation and leakage: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A clustering comparison with stability and group descriptions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Train/validation/test, cross-validation and leakage: Train/validation/test, cross-validation and leakage: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare multiple seeds and explain why silhouette alone is insufficient.
- [ ] Train/validation/test, cross-validation and leakage: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Household energy forecasting

A planner needs next-day demand estimates with honest validation.

**Data:** Generate 365 daily demand values with seasonality and noise. Use a fixed seed and keep evaluation cases separate.

**Output:** A chronological forecast benchmark and residual report.

**Effort:** 16h · Intermediate

- **Train/validation/test, cross-validation and leakage:** Extend the project with Train/validation/test, cross-validation and leakage in Household energy forecasting. Adapt this focused lab to the project data: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation. Predict next-day energy demand; keep the same target and splits across model comparisons. Required concepts: Splits, Cross-validation, Leakage.
  - Deliverable: Train/validation/test, cross-validation and leakage: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chronological forecast benchmark and residual report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Train/validation/test, cross-validation and leakage: Train/validation/test, cross-validation and leakage: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Beat or explain failure against last-week demand on a future holdout.
- [ ] Train/validation/test, cross-validation and leakage: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature contribution audit

A reviewer needs to investigate reliance on a suspicious feature.

**Data:** Generate 400 labeled rows with one leakage feature and correlated proxies. Use a fixed seed and keep evaluation cases separate.

**Output:** An ablation and permutation-importance report.

**Effort:** 16h · Intermediate

- **Train/validation/test, cross-validation and leakage:** Extend the project with Train/validation/test, cross-validation and leakage in Feature contribution audit. Adapt this focused lab to the project data: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation. Predict generated binary outcome with the leakage field excluded; keep the same target and splits across model comparisons. Required concepts: Splits, Cross-validation, Leakage.
  - Deliverable: Train/validation/test, cross-validation and leakage: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An ablation and permutation-importance report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Train/validation/test, cross-validation and leakage: Train/validation/test, cross-validation and leakage: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare held-out performance before/after leakage removal and explain correlation caveats.
- [ ] Train/validation/test, cross-validation and leakage: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory movement anomaly detector

A stock manager needs unusual movements flagged for review.

**Data:** Generate 500 movements with 30 labeled injected anomalies. Use a fixed seed and keep evaluation cases separate.

**Output:** An anomaly ranking and threshold investigation notebook.

**Effort:** 16h · Intermediate

- **Train/validation/test, cross-validation and leakage:** Extend the project with Train/validation/test, cross-validation and leakage in Inventory movement anomaly detector. Adapt this focused lab to the project data: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation. Predict injected anomaly flag; keep the same target and splits across model comparisons. Required concepts: Splits, Cross-validation, Leakage.
  - Deliverable: Train/validation/test, cross-validation and leakage: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An anomaly ranking and threshold investigation notebook. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Train/validation/test, cross-validation and leakage: Train/validation/test, cross-validation and leakage: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report precision at a fixed review budget and inspect false alerts.
- [ ] Train/validation/test, cross-validation and leakage: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Kernel decision boundary lab

A learner needs to understand when a nonlinear classifier helps.

**Data:** Use scikit-learn make_moons at three noise levels. Use a fixed seed and keep evaluation cases separate.

**Output:** A linear versus RBF SVM comparison with boundary plots.

**Effort:** 16h · Intermediate

- **Train/validation/test, cross-validation and leakage:** Extend the project with Train/validation/test, cross-validation and leakage in Kernel decision boundary lab. Adapt this focused lab to the project data: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation. Predict generated moon class; keep the same target and splits across model comparisons. Required concepts: Splits, Cross-validation, Leakage.
  - Deliverable: Train/validation/test, cross-validation and leakage: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A linear versus RBF SVM comparison with boundary plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Train/validation/test, cross-validation and leakage: Train/validation/test, cross-validation and leakage: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Use nested tuning and report held-out errors and support-vector counts.
- [ ] Train/validation/test, cross-validation and leakage: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Nearest example explanation service

A learner needs predictions with inspectable reference examples.

**Data:** Use scikit-learn digits with a fixed train/test split. Use a fixed seed and keep evaluation cases separate.

**Output:** A kNN classifier that returns neighbors and distance explanations.

**Effort:** 16h · Intermediate

- **Train/validation/test, cross-validation and leakage:** Extend the project with Train/validation/test, cross-validation and leakage in Nearest example explanation service. Adapt this focused lab to the project data: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation. Predict digit class; keep the same target and splits across model comparisons. Required concepts: Splits, Cross-validation, Leakage.
  - Deliverable: Train/validation/test, cross-validation and leakage: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A kNN classifier that returns neighbors and distance explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Train/validation/test, cross-validation and leakage: Train/validation/test, cross-validation and leakage: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test scaling, ties and out-of-distribution inputs; record latency.
- [ ] Train/validation/test, cross-validation and leakage: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible model selection bench

A teammate needs to compare preprocessing and estimator choices fairly.

**Data:** Use scikit-learn built-in wine data. Use a fixed seed and keep evaluation cases separate.

**Output:** A cross-validated search with persisted pipeline and inference script.

**Effort:** 16h · Intermediate

- **Train/validation/test, cross-validation and leakage:** Extend the project with Train/validation/test, cross-validation and leakage in Reproducible model selection bench. Adapt this focused lab to the project data: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation. Predict wine class; keep the same target and splits across model comparisons. Required concepts: Splits, Cross-validation, Leakage.
  - Deliverable: Train/validation/test, cross-validation and leakage: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cross-validated search with persisted pipeline and inference script. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Train/validation/test, cross-validation and leakage: Train/validation/test, cross-validation and leakage: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep the final holdout untouched until selection and reproduce predictions after reload.
- [ ] Train/validation/test, cross-validation and leakage: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Rare event threshold workbench

An operator needs a controllable false-alert budget.

**Data:** Generate 1000 binary-labeled observations with 5 percent positives. Use a fixed seed and keep evaluation cases separate.

**Output:** A calibrated classifier and threshold tradeoff dashboard.

**Effort:** 16h · Intermediate

- **Train/validation/test, cross-validation and leakage:** Extend the project with Train/validation/test, cross-validation and leakage in Rare event threshold workbench. Adapt this focused lab to the project data: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation. Predict rare event label; keep the same target and splits across model comparisons. Required concepts: Splits, Cross-validation, Leakage.
  - Deliverable: Train/validation/test, cross-validation and leakage: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A calibrated classifier and threshold tradeoff dashboard. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Train/validation/test, cross-validation and leakage: Train/validation/test, cross-validation and leakage: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Choose thresholds on validation only and publish confusion matrices.
- [ ] Train/validation/test, cross-validation and leakage: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket model comparison

A support lead needs category suggestions with human review for ambiguity.

**Data:** Generate 180 labeled login, billing and setup tickets with paraphrases. Use a fixed seed and keep evaluation cases separate.

**Output:** A classifier comparison, error slices and a review threshold.

**Effort:** 16h · Intermediate

- **Train/validation/test, cross-validation and leakage:** Extend the project with Train/validation/test, cross-validation and leakage in Support ticket model comparison. Adapt this focused lab to the project data: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation. Predict ticket category (login, billing, setup); keep the same target and splits across model comparisons. Required concepts: Splits, Cross-validation, Leakage.
  - Deliverable: Train/validation/test, cross-validation and leakage: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A classifier comparison, error slices and a review threshold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Train/validation/test, cross-validation and leakage: Train/validation/test, cross-validation and leakage: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Hold out templates, compare a dummy baseline and report macro F1.
- [ ] Train/validation/test, cross-validation and leakage: Compare a correct Pipeline cross-validation experiment with intentionally leaked scaling; explain the risk and leave the held-out test set untouched until final evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="ml-preprocessing"></a>

### Preprocessing and feature engineering

Convert messy records into features consistently during training and inference.

**Priority:** Foundation · **Study:** 2h · **Practice:** 3h

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

### Subscription retention baseline

An analyst needs an educational estimate of likely account cancellation.

**Data:** Generate 500 fictional accounts with a binary cancellation label. Use a fixed seed and keep evaluation cases separate.

**Output:** A leakage-safe preprocessing and classification pipeline.

**Effort:** 16h · Intermediate

- **Preprocessing and feature engineering:** Implement Preprocessing and feature engineering in Subscription retention baseline. Adapt this focused lab to the project data: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path. Predict fictional cancellation label; keep the same target and splits across model comparisons. Required concepts: Scaling and encoding, Feature engineering, Pipelines.
  - Deliverable: Preprocessing and feature engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A leakage-safe preprocessing and classification pipeline. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Preprocessing and feature engineering: Preprocessing and feature engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude post-cancellation fields and report PR AUC plus calibration.
- [ ] Preprocessing and feature engineering: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Customer behavior segmentation

A researcher needs interpretable groups without invented ground truth.

**Data:** Generate 300 fictional usage vectors with three overlapping clusters. Use a fixed seed and keep evaluation cases separate.

**Output:** A clustering comparison with stability and group descriptions.

**Effort:** 16h · Intermediate

- **Preprocessing and feature engineering:** Extend the project with Preprocessing and feature engineering in Customer behavior segmentation. Adapt this focused lab to the project data: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.  Required concepts: Scaling and encoding, Feature engineering, Pipelines.
  - Deliverable: Preprocessing and feature engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A clustering comparison with stability and group descriptions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Preprocessing and feature engineering: Preprocessing and feature engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare multiple seeds and explain why silhouette alone is insufficient.
- [ ] Preprocessing and feature engineering: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Household energy forecasting

A planner needs next-day demand estimates with honest validation.

**Data:** Generate 365 daily demand values with seasonality and noise. Use a fixed seed and keep evaluation cases separate.

**Output:** A chronological forecast benchmark and residual report.

**Effort:** 16h · Intermediate

- **Preprocessing and feature engineering:** Extend the project with Preprocessing and feature engineering in Household energy forecasting. Adapt this focused lab to the project data: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path. Predict next-day energy demand; keep the same target and splits across model comparisons. Required concepts: Scaling and encoding, Feature engineering, Pipelines.
  - Deliverable: Preprocessing and feature engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chronological forecast benchmark and residual report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Preprocessing and feature engineering: Preprocessing and feature engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Beat or explain failure against last-week demand on a future holdout.
- [ ] Preprocessing and feature engineering: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature contribution audit

A reviewer needs to investigate reliance on a suspicious feature.

**Data:** Generate 400 labeled rows with one leakage feature and correlated proxies. Use a fixed seed and keep evaluation cases separate.

**Output:** An ablation and permutation-importance report.

**Effort:** 16h · Intermediate

- **Preprocessing and feature engineering:** Extend the project with Preprocessing and feature engineering in Feature contribution audit. Adapt this focused lab to the project data: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path. Predict generated binary outcome with the leakage field excluded; keep the same target and splits across model comparisons. Required concepts: Scaling and encoding, Feature engineering, Pipelines.
  - Deliverable: Preprocessing and feature engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An ablation and permutation-importance report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Preprocessing and feature engineering: Preprocessing and feature engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare held-out performance before/after leakage removal and explain correlation caveats.
- [ ] Preprocessing and feature engineering: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory movement anomaly detector

A stock manager needs unusual movements flagged for review.

**Data:** Generate 500 movements with 30 labeled injected anomalies. Use a fixed seed and keep evaluation cases separate.

**Output:** An anomaly ranking and threshold investigation notebook.

**Effort:** 16h · Intermediate

- **Preprocessing and feature engineering:** Extend the project with Preprocessing and feature engineering in Inventory movement anomaly detector. Adapt this focused lab to the project data: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path. Predict injected anomaly flag; keep the same target and splits across model comparisons. Required concepts: Scaling and encoding, Feature engineering, Pipelines.
  - Deliverable: Preprocessing and feature engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An anomaly ranking and threshold investigation notebook. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Preprocessing and feature engineering: Preprocessing and feature engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report precision at a fixed review budget and inspect false alerts.
- [ ] Preprocessing and feature engineering: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Kernel decision boundary lab

A learner needs to understand when a nonlinear classifier helps.

**Data:** Use scikit-learn make_moons at three noise levels. Use a fixed seed and keep evaluation cases separate.

**Output:** A linear versus RBF SVM comparison with boundary plots.

**Effort:** 16h · Intermediate

- **Preprocessing and feature engineering:** Extend the project with Preprocessing and feature engineering in Kernel decision boundary lab. Adapt this focused lab to the project data: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path. Predict generated moon class; keep the same target and splits across model comparisons. Required concepts: Scaling and encoding, Feature engineering, Pipelines.
  - Deliverable: Preprocessing and feature engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A linear versus RBF SVM comparison with boundary plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Preprocessing and feature engineering: Preprocessing and feature engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Use nested tuning and report held-out errors and support-vector counts.
- [ ] Preprocessing and feature engineering: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Nearest example explanation service

A learner needs predictions with inspectable reference examples.

**Data:** Use scikit-learn digits with a fixed train/test split. Use a fixed seed and keep evaluation cases separate.

**Output:** A kNN classifier that returns neighbors and distance explanations.

**Effort:** 16h · Intermediate

- **Preprocessing and feature engineering:** Extend the project with Preprocessing and feature engineering in Nearest example explanation service. Adapt this focused lab to the project data: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path. Predict digit class; keep the same target and splits across model comparisons. Required concepts: Scaling and encoding, Feature engineering, Pipelines.
  - Deliverable: Preprocessing and feature engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A kNN classifier that returns neighbors and distance explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Preprocessing and feature engineering: Preprocessing and feature engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test scaling, ties and out-of-distribution inputs; record latency.
- [ ] Preprocessing and feature engineering: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible model selection bench

A teammate needs to compare preprocessing and estimator choices fairly.

**Data:** Use scikit-learn built-in wine data. Use a fixed seed and keep evaluation cases separate.

**Output:** A cross-validated search with persisted pipeline and inference script.

**Effort:** 16h · Intermediate

- **Preprocessing and feature engineering:** Extend the project with Preprocessing and feature engineering in Reproducible model selection bench. Adapt this focused lab to the project data: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path. Predict wine class; keep the same target and splits across model comparisons. Required concepts: Scaling and encoding, Feature engineering, Pipelines.
  - Deliverable: Preprocessing and feature engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cross-validated search with persisted pipeline and inference script. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Preprocessing and feature engineering: Preprocessing and feature engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep the final holdout untouched until selection and reproduce predictions after reload.
- [ ] Preprocessing and feature engineering: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Rare event threshold workbench

An operator needs a controllable false-alert budget.

**Data:** Generate 1000 binary-labeled observations with 5 percent positives. Use a fixed seed and keep evaluation cases separate.

**Output:** A calibrated classifier and threshold tradeoff dashboard.

**Effort:** 16h · Intermediate

- **Preprocessing and feature engineering:** Extend the project with Preprocessing and feature engineering in Rare event threshold workbench. Adapt this focused lab to the project data: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path. Predict rare event label; keep the same target and splits across model comparisons. Required concepts: Scaling and encoding, Feature engineering, Pipelines.
  - Deliverable: Preprocessing and feature engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A calibrated classifier and threshold tradeoff dashboard. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Preprocessing and feature engineering: Preprocessing and feature engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Choose thresholds on validation only and publish confusion matrices.
- [ ] Preprocessing and feature engineering: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket model comparison

A support lead needs category suggestions with human review for ambiguity.

**Data:** Generate 180 labeled login, billing and setup tickets with paraphrases. Use a fixed seed and keep evaluation cases separate.

**Output:** A classifier comparison, error slices and a review threshold.

**Effort:** 16h · Intermediate

- **Preprocessing and feature engineering:** Extend the project with Preprocessing and feature engineering in Support ticket model comparison. Adapt this focused lab to the project data: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path. Predict ticket category (login, billing, setup); keep the same target and splits across model comparisons. Required concepts: Scaling and encoding, Feature engineering, Pipelines.
  - Deliverable: Preprocessing and feature engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A classifier comparison, error slices and a review threshold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Preprocessing and feature engineering: Preprocessing and feature engineering: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Hold out templates, compare a dummy baseline and report macro F1.
- [ ] Preprocessing and feature engineering: Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Models and optimization

<a id="ml-linear"></a>

### Linear/logistic regression and gradient descent

Understand simple models before relying on complex ones.

**Priority:** Foundation · **Study:** 2h · **Practice:** 3h

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

### Support ticket model comparison

A support lead needs category suggestions with human review for ambiguity.

**Data:** Generate 180 labeled login, billing and setup tickets with paraphrases. Use a fixed seed and keep evaluation cases separate.

**Output:** A classifier comparison, error slices and a review threshold.

**Effort:** 16h · Intermediate

- **Linear/logistic regression and gradient descent:** Implement Linear/logistic regression and gradient descent in Support ticket model comparison. Adapt this focused lab to the project data: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation. Predict ticket category (login, billing, setup); keep the same target and splits across model comparisons. Required concepts: Linear regression, Logistic regression, Gradient descent.
  - Deliverable: Linear/logistic regression and gradient descent: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A classifier comparison, error slices and a review threshold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Linear/logistic regression and gradient descent: Linear/logistic regression and gradient descent: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Hold out templates, compare a dummy baseline and report macro F1.
- [ ] Linear/logistic regression and gradient descent: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Subscription retention baseline

An analyst needs an educational estimate of likely account cancellation.

**Data:** Generate 500 fictional accounts with a binary cancellation label. Use a fixed seed and keep evaluation cases separate.

**Output:** A leakage-safe preprocessing and classification pipeline.

**Effort:** 16h · Intermediate

- **Linear/logistic regression and gradient descent:** Extend the project with Linear/logistic regression and gradient descent in Subscription retention baseline. Adapt this focused lab to the project data: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation. Predict fictional cancellation label; keep the same target and splits across model comparisons. Required concepts: Linear regression, Logistic regression, Gradient descent.
  - Deliverable: Linear/logistic regression and gradient descent: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A leakage-safe preprocessing and classification pipeline. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Linear/logistic regression and gradient descent: Linear/logistic regression and gradient descent: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude post-cancellation fields and report PR AUC plus calibration.
- [ ] Linear/logistic regression and gradient descent: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Customer behavior segmentation

A researcher needs interpretable groups without invented ground truth.

**Data:** Generate 300 fictional usage vectors with three overlapping clusters. Use a fixed seed and keep evaluation cases separate.

**Output:** A clustering comparison with stability and group descriptions.

**Effort:** 16h · Intermediate

- **Linear/logistic regression and gradient descent:** Extend the project with Linear/logistic regression and gradient descent in Customer behavior segmentation. Adapt this focused lab to the project data: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.  Required concepts: Linear regression, Logistic regression, Gradient descent.
  - Deliverable: Linear/logistic regression and gradient descent: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A clustering comparison with stability and group descriptions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Linear/logistic regression and gradient descent: Linear/logistic regression and gradient descent: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare multiple seeds and explain why silhouette alone is insufficient.
- [ ] Linear/logistic regression and gradient descent: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Household energy forecasting

A planner needs next-day demand estimates with honest validation.

**Data:** Generate 365 daily demand values with seasonality and noise. Use a fixed seed and keep evaluation cases separate.

**Output:** A chronological forecast benchmark and residual report.

**Effort:** 16h · Intermediate

- **Linear/logistic regression and gradient descent:** Extend the project with Linear/logistic regression and gradient descent in Household energy forecasting. Adapt this focused lab to the project data: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation. Predict next-day energy demand; keep the same target and splits across model comparisons. Required concepts: Linear regression, Logistic regression, Gradient descent.
  - Deliverable: Linear/logistic regression and gradient descent: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chronological forecast benchmark and residual report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Linear/logistic regression and gradient descent: Linear/logistic regression and gradient descent: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Beat or explain failure against last-week demand on a future holdout.
- [ ] Linear/logistic regression and gradient descent: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature contribution audit

A reviewer needs to investigate reliance on a suspicious feature.

**Data:** Generate 400 labeled rows with one leakage feature and correlated proxies. Use a fixed seed and keep evaluation cases separate.

**Output:** An ablation and permutation-importance report.

**Effort:** 16h · Intermediate

- **Linear/logistic regression and gradient descent:** Extend the project with Linear/logistic regression and gradient descent in Feature contribution audit. Adapt this focused lab to the project data: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation. Predict generated binary outcome with the leakage field excluded; keep the same target and splits across model comparisons. Required concepts: Linear regression, Logistic regression, Gradient descent.
  - Deliverable: Linear/logistic regression and gradient descent: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An ablation and permutation-importance report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Linear/logistic regression and gradient descent: Linear/logistic regression and gradient descent: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare held-out performance before/after leakage removal and explain correlation caveats.
- [ ] Linear/logistic regression and gradient descent: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory movement anomaly detector

A stock manager needs unusual movements flagged for review.

**Data:** Generate 500 movements with 30 labeled injected anomalies. Use a fixed seed and keep evaluation cases separate.

**Output:** An anomaly ranking and threshold investigation notebook.

**Effort:** 16h · Intermediate

- **Linear/logistic regression and gradient descent:** Extend the project with Linear/logistic regression and gradient descent in Inventory movement anomaly detector. Adapt this focused lab to the project data: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation. Predict injected anomaly flag; keep the same target and splits across model comparisons. Required concepts: Linear regression, Logistic regression, Gradient descent.
  - Deliverable: Linear/logistic regression and gradient descent: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An anomaly ranking and threshold investigation notebook. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Linear/logistic regression and gradient descent: Linear/logistic regression and gradient descent: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report precision at a fixed review budget and inspect false alerts.
- [ ] Linear/logistic regression and gradient descent: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Kernel decision boundary lab

A learner needs to understand when a nonlinear classifier helps.

**Data:** Use scikit-learn make_moons at three noise levels. Use a fixed seed and keep evaluation cases separate.

**Output:** A linear versus RBF SVM comparison with boundary plots.

**Effort:** 16h · Intermediate

- **Linear/logistic regression and gradient descent:** Extend the project with Linear/logistic regression and gradient descent in Kernel decision boundary lab. Adapt this focused lab to the project data: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation. Predict generated moon class; keep the same target and splits across model comparisons. Required concepts: Linear regression, Logistic regression, Gradient descent.
  - Deliverable: Linear/logistic regression and gradient descent: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A linear versus RBF SVM comparison with boundary plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Linear/logistic regression and gradient descent: Linear/logistic regression and gradient descent: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Use nested tuning and report held-out errors and support-vector counts.
- [ ] Linear/logistic regression and gradient descent: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Nearest example explanation service

A learner needs predictions with inspectable reference examples.

**Data:** Use scikit-learn digits with a fixed train/test split. Use a fixed seed and keep evaluation cases separate.

**Output:** A kNN classifier that returns neighbors and distance explanations.

**Effort:** 16h · Intermediate

- **Linear/logistic regression and gradient descent:** Extend the project with Linear/logistic regression and gradient descent in Nearest example explanation service. Adapt this focused lab to the project data: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation. Predict digit class; keep the same target and splits across model comparisons. Required concepts: Linear regression, Logistic regression, Gradient descent.
  - Deliverable: Linear/logistic regression and gradient descent: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A kNN classifier that returns neighbors and distance explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Linear/logistic regression and gradient descent: Linear/logistic regression and gradient descent: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test scaling, ties and out-of-distribution inputs; record latency.
- [ ] Linear/logistic regression and gradient descent: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible model selection bench

A teammate needs to compare preprocessing and estimator choices fairly.

**Data:** Use scikit-learn built-in wine data. Use a fixed seed and keep evaluation cases separate.

**Output:** A cross-validated search with persisted pipeline and inference script.

**Effort:** 16h · Intermediate

- **Linear/logistic regression and gradient descent:** Extend the project with Linear/logistic regression and gradient descent in Reproducible model selection bench. Adapt this focused lab to the project data: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation. Predict wine class; keep the same target and splits across model comparisons. Required concepts: Linear regression, Logistic regression, Gradient descent.
  - Deliverable: Linear/logistic regression and gradient descent: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cross-validated search with persisted pipeline and inference script. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Linear/logistic regression and gradient descent: Linear/logistic regression and gradient descent: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep the final holdout untouched until selection and reproduce predictions after reload.
- [ ] Linear/logistic regression and gradient descent: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Rare event threshold workbench

An operator needs a controllable false-alert budget.

**Data:** Generate 1000 binary-labeled observations with 5 percent positives. Use a fixed seed and keep evaluation cases separate.

**Output:** A calibrated classifier and threshold tradeoff dashboard.

**Effort:** 16h · Intermediate

- **Linear/logistic regression and gradient descent:** Extend the project with Linear/logistic regression and gradient descent in Rare event threshold workbench. Adapt this focused lab to the project data: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation. Predict rare event label; keep the same target and splits across model comparisons. Required concepts: Linear regression, Logistic regression, Gradient descent.
  - Deliverable: Linear/logistic regression and gradient descent: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A calibrated classifier and threshold tradeoff dashboard. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Linear/logistic regression and gradient descent: Linear/logistic regression and gradient descent: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Choose thresholds on validation only and publish confusion matrices.
- [ ] Linear/logistic regression and gradient descent: Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="ml-trees"></a>

### Trees, random forests and boosting

Compare nonlinear baselines and recognize how ensembles reduce different errors.

**Priority:** Foundation · **Study:** 2h · **Practice:** 3h

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

### Subscription retention baseline

An analyst needs an educational estimate of likely account cancellation.

**Data:** Generate 500 fictional accounts with a binary cancellation label. Use a fixed seed and keep evaluation cases separate.

**Output:** A leakage-safe preprocessing and classification pipeline.

**Effort:** 16h · Intermediate

- **Trees, random forests and boosting:** Extend the project with Trees, random forests and boosting in Subscription retention baseline. Adapt this focused lab to the project data: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation. Predict fictional cancellation label; keep the same target and splits across model comparisons. Required concepts: Decision trees, Random forests, Boosting.
  - Deliverable: Trees, random forests and boosting: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A leakage-safe preprocessing and classification pipeline. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Trees, random forests and boosting: Trees, random forests and boosting: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude post-cancellation fields and report PR AUC plus calibration.
- [ ] Trees, random forests and boosting: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Customer behavior segmentation

A researcher needs interpretable groups without invented ground truth.

**Data:** Generate 300 fictional usage vectors with three overlapping clusters. Use a fixed seed and keep evaluation cases separate.

**Output:** A clustering comparison with stability and group descriptions.

**Effort:** 16h · Intermediate

- **Trees, random forests and boosting:** Extend the project with Trees, random forests and boosting in Customer behavior segmentation. Adapt this focused lab to the project data: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.  Required concepts: Decision trees, Random forests, Boosting.
  - Deliverable: Trees, random forests and boosting: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A clustering comparison with stability and group descriptions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Trees, random forests and boosting: Trees, random forests and boosting: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare multiple seeds and explain why silhouette alone is insufficient.
- [ ] Trees, random forests and boosting: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Household energy forecasting

A planner needs next-day demand estimates with honest validation.

**Data:** Generate 365 daily demand values with seasonality and noise. Use a fixed seed and keep evaluation cases separate.

**Output:** A chronological forecast benchmark and residual report.

**Effort:** 16h · Intermediate

- **Trees, random forests and boosting:** Extend the project with Trees, random forests and boosting in Household energy forecasting. Adapt this focused lab to the project data: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation. Predict next-day energy demand; keep the same target and splits across model comparisons. Required concepts: Decision trees, Random forests, Boosting.
  - Deliverable: Trees, random forests and boosting: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chronological forecast benchmark and residual report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Trees, random forests and boosting: Trees, random forests and boosting: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Beat or explain failure against last-week demand on a future holdout.
- [ ] Trees, random forests and boosting: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature contribution audit

A reviewer needs to investigate reliance on a suspicious feature.

**Data:** Generate 400 labeled rows with one leakage feature and correlated proxies. Use a fixed seed and keep evaluation cases separate.

**Output:** An ablation and permutation-importance report.

**Effort:** 16h · Intermediate

- **Trees, random forests and boosting:** Extend the project with Trees, random forests and boosting in Feature contribution audit. Adapt this focused lab to the project data: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation. Predict generated binary outcome with the leakage field excluded; keep the same target and splits across model comparisons. Required concepts: Decision trees, Random forests, Boosting.
  - Deliverable: Trees, random forests and boosting: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An ablation and permutation-importance report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Trees, random forests and boosting: Trees, random forests and boosting: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare held-out performance before/after leakage removal and explain correlation caveats.
- [ ] Trees, random forests and boosting: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory movement anomaly detector

A stock manager needs unusual movements flagged for review.

**Data:** Generate 500 movements with 30 labeled injected anomalies. Use a fixed seed and keep evaluation cases separate.

**Output:** An anomaly ranking and threshold investigation notebook.

**Effort:** 16h · Intermediate

- **Trees, random forests and boosting:** Extend the project with Trees, random forests and boosting in Inventory movement anomaly detector. Adapt this focused lab to the project data: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation. Predict injected anomaly flag; keep the same target and splits across model comparisons. Required concepts: Decision trees, Random forests, Boosting.
  - Deliverable: Trees, random forests and boosting: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An anomaly ranking and threshold investigation notebook. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Trees, random forests and boosting: Trees, random forests and boosting: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report precision at a fixed review budget and inspect false alerts.
- [ ] Trees, random forests and boosting: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Kernel decision boundary lab

A learner needs to understand when a nonlinear classifier helps.

**Data:** Use scikit-learn make_moons at three noise levels. Use a fixed seed and keep evaluation cases separate.

**Output:** A linear versus RBF SVM comparison with boundary plots.

**Effort:** 16h · Intermediate

- **Trees, random forests and boosting:** Extend the project with Trees, random forests and boosting in Kernel decision boundary lab. Adapt this focused lab to the project data: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation. Predict generated moon class; keep the same target and splits across model comparisons. Required concepts: Decision trees, Random forests, Boosting.
  - Deliverable: Trees, random forests and boosting: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A linear versus RBF SVM comparison with boundary plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Trees, random forests and boosting: Trees, random forests and boosting: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Use nested tuning and report held-out errors and support-vector counts.
- [ ] Trees, random forests and boosting: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Nearest example explanation service

A learner needs predictions with inspectable reference examples.

**Data:** Use scikit-learn digits with a fixed train/test split. Use a fixed seed and keep evaluation cases separate.

**Output:** A kNN classifier that returns neighbors and distance explanations.

**Effort:** 16h · Intermediate

- **Trees, random forests and boosting:** Extend the project with Trees, random forests and boosting in Nearest example explanation service. Adapt this focused lab to the project data: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation. Predict digit class; keep the same target and splits across model comparisons. Required concepts: Decision trees, Random forests, Boosting.
  - Deliverable: Trees, random forests and boosting: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A kNN classifier that returns neighbors and distance explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Trees, random forests and boosting: Trees, random forests and boosting: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test scaling, ties and out-of-distribution inputs; record latency.
- [ ] Trees, random forests and boosting: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible model selection bench

A teammate needs to compare preprocessing and estimator choices fairly.

**Data:** Use scikit-learn built-in wine data. Use a fixed seed and keep evaluation cases separate.

**Output:** A cross-validated search with persisted pipeline and inference script.

**Effort:** 16h · Intermediate

- **Trees, random forests and boosting:** Extend the project with Trees, random forests and boosting in Reproducible model selection bench. Adapt this focused lab to the project data: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation. Predict wine class; keep the same target and splits across model comparisons. Required concepts: Decision trees, Random forests, Boosting.
  - Deliverable: Trees, random forests and boosting: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cross-validated search with persisted pipeline and inference script. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Trees, random forests and boosting: Trees, random forests and boosting: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep the final holdout untouched until selection and reproduce predictions after reload.
- [ ] Trees, random forests and boosting: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Rare event threshold workbench

An operator needs a controllable false-alert budget.

**Data:** Generate 1000 binary-labeled observations with 5 percent positives. Use a fixed seed and keep evaluation cases separate.

**Output:** A calibrated classifier and threshold tradeoff dashboard.

**Effort:** 16h · Intermediate

- **Trees, random forests and boosting:** Extend the project with Trees, random forests and boosting in Rare event threshold workbench. Adapt this focused lab to the project data: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation. Predict rare event label; keep the same target and splits across model comparisons. Required concepts: Decision trees, Random forests, Boosting.
  - Deliverable: Trees, random forests and boosting: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A calibrated classifier and threshold tradeoff dashboard. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Trees, random forests and boosting: Trees, random forests and boosting: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Choose thresholds on validation only and publish confusion matrices.
- [ ] Trees, random forests and boosting: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket model comparison

A support lead needs category suggestions with human review for ambiguity.

**Data:** Generate 180 labeled login, billing and setup tickets with paraphrases. Use a fixed seed and keep evaluation cases separate.

**Output:** A classifier comparison, error slices and a review threshold.

**Effort:** 16h · Intermediate

- **Trees, random forests and boosting:** Extend the project with Trees, random forests and boosting in Support ticket model comparison. Adapt this focused lab to the project data: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation. Predict ticket category (login, billing, setup); keep the same target and splits across model comparisons. Required concepts: Decision trees, Random forests, Boosting.
  - Deliverable: Trees, random forests and boosting: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A classifier comparison, error slices and a review threshold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Trees, random forests and boosting: Trees, random forests and boosting: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Hold out templates, compare a dummy baseline and report macro F1.
- [ ] Trees, random forests and boosting: Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="ml-neighbors"></a>

### kNN, SVM, clustering and PCA

Choose methods based on geometry, labels and dimensionality.

**Priority:** Foundation · **Study:** 2h · **Practice:** 3h

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

### Nearest example explanation service

A learner needs predictions with inspectable reference examples.

**Data:** Use scikit-learn digits with a fixed train/test split. Use a fixed seed and keep evaluation cases separate.

**Output:** A kNN classifier that returns neighbors and distance explanations.

**Effort:** 16h · Intermediate

- **kNN, SVM, clustering and PCA:** Implement kNN, SVM, clustering and PCA in Nearest example explanation service. Adapt this focused lab to the project data: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric. Predict digit class; keep the same target and splits across model comparisons. Required concepts: kNN and SVM, Clustering, PCA.
  - Deliverable: kNN, SVM, clustering and PCA: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A kNN classifier that returns neighbors and distance explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · kNN, SVM, clustering and PCA: kNN, SVM, clustering and PCA: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test scaling, ties and out-of-distribution inputs; record latency.
- [ ] kNN, SVM, clustering and PCA: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Subscription retention baseline

An analyst needs an educational estimate of likely account cancellation.

**Data:** Generate 500 fictional accounts with a binary cancellation label. Use a fixed seed and keep evaluation cases separate.

**Output:** A leakage-safe preprocessing and classification pipeline.

**Effort:** 16h · Intermediate

- **kNN, SVM, clustering and PCA:** Extend the project with kNN, SVM, clustering and PCA in Subscription retention baseline. Adapt this focused lab to the project data: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric. Predict fictional cancellation label; keep the same target and splits across model comparisons. Required concepts: kNN and SVM, Clustering, PCA.
  - Deliverable: kNN, SVM, clustering and PCA: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A leakage-safe preprocessing and classification pipeline. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · kNN, SVM, clustering and PCA: kNN, SVM, clustering and PCA: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude post-cancellation fields and report PR AUC plus calibration.
- [ ] kNN, SVM, clustering and PCA: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Customer behavior segmentation

A researcher needs interpretable groups without invented ground truth.

**Data:** Generate 300 fictional usage vectors with three overlapping clusters. Use a fixed seed and keep evaluation cases separate.

**Output:** A clustering comparison with stability and group descriptions.

**Effort:** 16h · Intermediate

- **kNN, SVM, clustering and PCA:** Extend the project with kNN, SVM, clustering and PCA in Customer behavior segmentation. Adapt this focused lab to the project data: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.  Required concepts: kNN and SVM, Clustering, PCA.
  - Deliverable: kNN, SVM, clustering and PCA: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A clustering comparison with stability and group descriptions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · kNN, SVM, clustering and PCA: kNN, SVM, clustering and PCA: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare multiple seeds and explain why silhouette alone is insufficient.
- [ ] kNN, SVM, clustering and PCA: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Household energy forecasting

A planner needs next-day demand estimates with honest validation.

**Data:** Generate 365 daily demand values with seasonality and noise. Use a fixed seed and keep evaluation cases separate.

**Output:** A chronological forecast benchmark and residual report.

**Effort:** 16h · Intermediate

- **kNN, SVM, clustering and PCA:** Extend the project with kNN, SVM, clustering and PCA in Household energy forecasting. Adapt this focused lab to the project data: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric. Predict next-day energy demand; keep the same target and splits across model comparisons. Required concepts: kNN and SVM, Clustering, PCA.
  - Deliverable: kNN, SVM, clustering and PCA: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chronological forecast benchmark and residual report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · kNN, SVM, clustering and PCA: kNN, SVM, clustering and PCA: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Beat or explain failure against last-week demand on a future holdout.
- [ ] kNN, SVM, clustering and PCA: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature contribution audit

A reviewer needs to investigate reliance on a suspicious feature.

**Data:** Generate 400 labeled rows with one leakage feature and correlated proxies. Use a fixed seed and keep evaluation cases separate.

**Output:** An ablation and permutation-importance report.

**Effort:** 16h · Intermediate

- **kNN, SVM, clustering and PCA:** Extend the project with kNN, SVM, clustering and PCA in Feature contribution audit. Adapt this focused lab to the project data: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric. Predict generated binary outcome with the leakage field excluded; keep the same target and splits across model comparisons. Required concepts: kNN and SVM, Clustering, PCA.
  - Deliverable: kNN, SVM, clustering and PCA: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An ablation and permutation-importance report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · kNN, SVM, clustering and PCA: kNN, SVM, clustering and PCA: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare held-out performance before/after leakage removal and explain correlation caveats.
- [ ] kNN, SVM, clustering and PCA: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory movement anomaly detector

A stock manager needs unusual movements flagged for review.

**Data:** Generate 500 movements with 30 labeled injected anomalies. Use a fixed seed and keep evaluation cases separate.

**Output:** An anomaly ranking and threshold investigation notebook.

**Effort:** 16h · Intermediate

- **kNN, SVM, clustering and PCA:** Extend the project with kNN, SVM, clustering and PCA in Inventory movement anomaly detector. Adapt this focused lab to the project data: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric. Predict injected anomaly flag; keep the same target and splits across model comparisons. Required concepts: kNN and SVM, Clustering, PCA.
  - Deliverable: kNN, SVM, clustering and PCA: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An anomaly ranking and threshold investigation notebook. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · kNN, SVM, clustering and PCA: kNN, SVM, clustering and PCA: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report precision at a fixed review budget and inspect false alerts.
- [ ] kNN, SVM, clustering and PCA: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Kernel decision boundary lab

A learner needs to understand when a nonlinear classifier helps.

**Data:** Use scikit-learn make_moons at three noise levels. Use a fixed seed and keep evaluation cases separate.

**Output:** A linear versus RBF SVM comparison with boundary plots.

**Effort:** 16h · Intermediate

- **kNN, SVM, clustering and PCA:** Extend the project with kNN, SVM, clustering and PCA in Kernel decision boundary lab. Adapt this focused lab to the project data: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric. Predict generated moon class; keep the same target and splits across model comparisons. Required concepts: kNN and SVM, Clustering, PCA.
  - Deliverable: kNN, SVM, clustering and PCA: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A linear versus RBF SVM comparison with boundary plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · kNN, SVM, clustering and PCA: kNN, SVM, clustering and PCA: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Use nested tuning and report held-out errors and support-vector counts.
- [ ] kNN, SVM, clustering and PCA: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible model selection bench

A teammate needs to compare preprocessing and estimator choices fairly.

**Data:** Use scikit-learn built-in wine data. Use a fixed seed and keep evaluation cases separate.

**Output:** A cross-validated search with persisted pipeline and inference script.

**Effort:** 16h · Intermediate

- **kNN, SVM, clustering and PCA:** Extend the project with kNN, SVM, clustering and PCA in Reproducible model selection bench. Adapt this focused lab to the project data: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric. Predict wine class; keep the same target and splits across model comparisons. Required concepts: kNN and SVM, Clustering, PCA.
  - Deliverable: kNN, SVM, clustering and PCA: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cross-validated search with persisted pipeline and inference script. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · kNN, SVM, clustering and PCA: kNN, SVM, clustering and PCA: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep the final holdout untouched until selection and reproduce predictions after reload.
- [ ] kNN, SVM, clustering and PCA: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Rare event threshold workbench

An operator needs a controllable false-alert budget.

**Data:** Generate 1000 binary-labeled observations with 5 percent positives. Use a fixed seed and keep evaluation cases separate.

**Output:** A calibrated classifier and threshold tradeoff dashboard.

**Effort:** 16h · Intermediate

- **kNN, SVM, clustering and PCA:** Extend the project with kNN, SVM, clustering and PCA in Rare event threshold workbench. Adapt this focused lab to the project data: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric. Predict rare event label; keep the same target and splits across model comparisons. Required concepts: kNN and SVM, Clustering, PCA.
  - Deliverable: kNN, SVM, clustering and PCA: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A calibrated classifier and threshold tradeoff dashboard. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · kNN, SVM, clustering and PCA: kNN, SVM, clustering and PCA: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Choose thresholds on validation only and publish confusion matrices.
- [ ] kNN, SVM, clustering and PCA: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket model comparison

A support lead needs category suggestions with human review for ambiguity.

**Data:** Generate 180 labeled login, billing and setup tickets with paraphrases. Use a fixed seed and keep evaluation cases separate.

**Output:** A classifier comparison, error slices and a review threshold.

**Effort:** 16h · Intermediate

- **kNN, SVM, clustering and PCA:** Extend the project with kNN, SVM, clustering and PCA in Support ticket model comparison. Adapt this focused lab to the project data: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric. Predict ticket category (login, billing, setup); keep the same target and splits across model comparisons. Required concepts: kNN and SVM, Clustering, PCA.
  - Deliverable: kNN, SVM, clustering and PCA: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A classifier comparison, error slices and a review threshold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · kNN, SVM, clustering and PCA: kNN, SVM, clustering and PCA: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Hold out templates, compare a dummy baseline and report macro F1.
- [ ] kNN, SVM, clustering and PCA: Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Trustworthy results

<a id="ml-generalization"></a>

### Bias/variance, regularization and tuning

Improve validation behavior rather than merely maximizing training scores.

**Priority:** Foundation · **Study:** 2h · **Practice:** 3h

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

### Subscription retention baseline

An analyst needs an educational estimate of likely account cancellation.

**Data:** Generate 500 fictional accounts with a binary cancellation label. Use a fixed seed and keep evaluation cases separate.

**Output:** A leakage-safe preprocessing and classification pipeline.

**Effort:** 16h · Intermediate

- **Bias/variance, regularization and tuning:** Extend the project with Bias/variance, regularization and tuning in Subscription retention baseline. Adapt this focused lab to the project data: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step. Predict fictional cancellation label; keep the same target and splits across model comparisons. Required concepts: Bias and variance, Regularization, Hyperparameter tuning.
  - Deliverable: Bias/variance, regularization and tuning: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A leakage-safe preprocessing and classification pipeline. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bias/variance, regularization and tuning: Bias/variance, regularization and tuning: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude post-cancellation fields and report PR AUC plus calibration.
- [ ] Bias/variance, regularization and tuning: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Customer behavior segmentation

A researcher needs interpretable groups without invented ground truth.

**Data:** Generate 300 fictional usage vectors with three overlapping clusters. Use a fixed seed and keep evaluation cases separate.

**Output:** A clustering comparison with stability and group descriptions.

**Effort:** 16h · Intermediate

- **Bias/variance, regularization and tuning:** Extend the project with Bias/variance, regularization and tuning in Customer behavior segmentation. Adapt this focused lab to the project data: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.  Required concepts: Bias and variance, Regularization, Hyperparameter tuning.
  - Deliverable: Bias/variance, regularization and tuning: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A clustering comparison with stability and group descriptions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bias/variance, regularization and tuning: Bias/variance, regularization and tuning: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare multiple seeds and explain why silhouette alone is insufficient.
- [ ] Bias/variance, regularization and tuning: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Household energy forecasting

A planner needs next-day demand estimates with honest validation.

**Data:** Generate 365 daily demand values with seasonality and noise. Use a fixed seed and keep evaluation cases separate.

**Output:** A chronological forecast benchmark and residual report.

**Effort:** 16h · Intermediate

- **Bias/variance, regularization and tuning:** Extend the project with Bias/variance, regularization and tuning in Household energy forecasting. Adapt this focused lab to the project data: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step. Predict next-day energy demand; keep the same target and splits across model comparisons. Required concepts: Bias and variance, Regularization, Hyperparameter tuning.
  - Deliverable: Bias/variance, regularization and tuning: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chronological forecast benchmark and residual report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bias/variance, regularization and tuning: Bias/variance, regularization and tuning: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Beat or explain failure against last-week demand on a future holdout.
- [ ] Bias/variance, regularization and tuning: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature contribution audit

A reviewer needs to investigate reliance on a suspicious feature.

**Data:** Generate 400 labeled rows with one leakage feature and correlated proxies. Use a fixed seed and keep evaluation cases separate.

**Output:** An ablation and permutation-importance report.

**Effort:** 16h · Intermediate

- **Bias/variance, regularization and tuning:** Extend the project with Bias/variance, regularization and tuning in Feature contribution audit. Adapt this focused lab to the project data: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step. Predict generated binary outcome with the leakage field excluded; keep the same target and splits across model comparisons. Required concepts: Bias and variance, Regularization, Hyperparameter tuning.
  - Deliverable: Bias/variance, regularization and tuning: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An ablation and permutation-importance report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bias/variance, regularization and tuning: Bias/variance, regularization and tuning: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare held-out performance before/after leakage removal and explain correlation caveats.
- [ ] Bias/variance, regularization and tuning: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory movement anomaly detector

A stock manager needs unusual movements flagged for review.

**Data:** Generate 500 movements with 30 labeled injected anomalies. Use a fixed seed and keep evaluation cases separate.

**Output:** An anomaly ranking and threshold investigation notebook.

**Effort:** 16h · Intermediate

- **Bias/variance, regularization and tuning:** Extend the project with Bias/variance, regularization and tuning in Inventory movement anomaly detector. Adapt this focused lab to the project data: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step. Predict injected anomaly flag; keep the same target and splits across model comparisons. Required concepts: Bias and variance, Regularization, Hyperparameter tuning.
  - Deliverable: Bias/variance, regularization and tuning: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An anomaly ranking and threshold investigation notebook. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bias/variance, regularization and tuning: Bias/variance, regularization and tuning: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report precision at a fixed review budget and inspect false alerts.
- [ ] Bias/variance, regularization and tuning: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Kernel decision boundary lab

A learner needs to understand when a nonlinear classifier helps.

**Data:** Use scikit-learn make_moons at three noise levels. Use a fixed seed and keep evaluation cases separate.

**Output:** A linear versus RBF SVM comparison with boundary plots.

**Effort:** 16h · Intermediate

- **Bias/variance, regularization and tuning:** Extend the project with Bias/variance, regularization and tuning in Kernel decision boundary lab. Adapt this focused lab to the project data: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step. Predict generated moon class; keep the same target and splits across model comparisons. Required concepts: Bias and variance, Regularization, Hyperparameter tuning.
  - Deliverable: Bias/variance, regularization and tuning: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A linear versus RBF SVM comparison with boundary plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bias/variance, regularization and tuning: Bias/variance, regularization and tuning: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Use nested tuning and report held-out errors and support-vector counts.
- [ ] Bias/variance, regularization and tuning: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Nearest example explanation service

A learner needs predictions with inspectable reference examples.

**Data:** Use scikit-learn digits with a fixed train/test split. Use a fixed seed and keep evaluation cases separate.

**Output:** A kNN classifier that returns neighbors and distance explanations.

**Effort:** 16h · Intermediate

- **Bias/variance, regularization and tuning:** Extend the project with Bias/variance, regularization and tuning in Nearest example explanation service. Adapt this focused lab to the project data: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step. Predict digit class; keep the same target and splits across model comparisons. Required concepts: Bias and variance, Regularization, Hyperparameter tuning.
  - Deliverable: Bias/variance, regularization and tuning: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A kNN classifier that returns neighbors and distance explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bias/variance, regularization and tuning: Bias/variance, regularization and tuning: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test scaling, ties and out-of-distribution inputs; record latency.
- [ ] Bias/variance, regularization and tuning: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible model selection bench

A teammate needs to compare preprocessing and estimator choices fairly.

**Data:** Use scikit-learn built-in wine data. Use a fixed seed and keep evaluation cases separate.

**Output:** A cross-validated search with persisted pipeline and inference script.

**Effort:** 16h · Intermediate

- **Bias/variance, regularization and tuning:** Extend the project with Bias/variance, regularization and tuning in Reproducible model selection bench. Adapt this focused lab to the project data: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step. Predict wine class; keep the same target and splits across model comparisons. Required concepts: Bias and variance, Regularization, Hyperparameter tuning.
  - Deliverable: Bias/variance, regularization and tuning: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cross-validated search with persisted pipeline and inference script. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bias/variance, regularization and tuning: Bias/variance, regularization and tuning: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep the final holdout untouched until selection and reproduce predictions after reload.
- [ ] Bias/variance, regularization and tuning: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Rare event threshold workbench

An operator needs a controllable false-alert budget.

**Data:** Generate 1000 binary-labeled observations with 5 percent positives. Use a fixed seed and keep evaluation cases separate.

**Output:** A calibrated classifier and threshold tradeoff dashboard.

**Effort:** 16h · Intermediate

- **Bias/variance, regularization and tuning:** Extend the project with Bias/variance, regularization and tuning in Rare event threshold workbench. Adapt this focused lab to the project data: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step. Predict rare event label; keep the same target and splits across model comparisons. Required concepts: Bias and variance, Regularization, Hyperparameter tuning.
  - Deliverable: Bias/variance, regularization and tuning: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A calibrated classifier and threshold tradeoff dashboard. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bias/variance, regularization and tuning: Bias/variance, regularization and tuning: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Choose thresholds on validation only and publish confusion matrices.
- [ ] Bias/variance, regularization and tuning: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket model comparison

A support lead needs category suggestions with human review for ambiguity.

**Data:** Generate 180 labeled login, billing and setup tickets with paraphrases. Use a fixed seed and keep evaluation cases separate.

**Output:** A classifier comparison, error slices and a review threshold.

**Effort:** 16h · Intermediate

- **Bias/variance, regularization and tuning:** Extend the project with Bias/variance, regularization and tuning in Support ticket model comparison. Adapt this focused lab to the project data: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step. Predict ticket category (login, billing, setup); keep the same target and splits across model comparisons. Required concepts: Bias and variance, Regularization, Hyperparameter tuning.
  - Deliverable: Bias/variance, regularization and tuning: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A classifier comparison, error slices and a review threshold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bias/variance, regularization and tuning: Bias/variance, regularization and tuning: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Hold out templates, compare a dummy baseline and report macro F1.
- [ ] Bias/variance, regularization and tuning: Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="ml-metrics"></a>

### Imbalance, metrics, calibration and error analysis

Measure the mistakes that matter and distinguish probability quality from label accuracy.

**Priority:** Foundation · **Study:** 2h · **Practice:** 3h

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

### Subscription retention baseline

An analyst needs an educational estimate of likely account cancellation.

**Data:** Generate 500 fictional accounts with a binary cancellation label. Use a fixed seed and keep evaluation cases separate.

**Output:** A leakage-safe preprocessing and classification pipeline.

**Effort:** 16h · Intermediate

- **Imbalance, metrics, calibration and error analysis:** Implement Imbalance, metrics, calibration and error analysis in Subscription retention baseline. Adapt this focused lab to the project data: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement. Predict fictional cancellation label; keep the same target and splits across model comparisons. Required concepts: Classification metrics, Calibration and thresholds, Error analysis.
  - Deliverable: Imbalance, metrics, calibration and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A leakage-safe preprocessing and classification pipeline. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Imbalance, metrics, calibration and error analysis: Imbalance, metrics, calibration and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude post-cancellation fields and report PR AUC plus calibration.
- [ ] Imbalance, metrics, calibration and error analysis: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Customer behavior segmentation

A researcher needs interpretable groups without invented ground truth.

**Data:** Generate 300 fictional usage vectors with three overlapping clusters. Use a fixed seed and keep evaluation cases separate.

**Output:** A clustering comparison with stability and group descriptions.

**Effort:** 16h · Intermediate

- **Imbalance, metrics, calibration and error analysis:** Extend the project with Imbalance, metrics, calibration and error analysis in Customer behavior segmentation. Adapt this focused lab to the project data: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.  Required concepts: Classification metrics, Calibration and thresholds, Error analysis.
  - Deliverable: Imbalance, metrics, calibration and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A clustering comparison with stability and group descriptions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Imbalance, metrics, calibration and error analysis: Imbalance, metrics, calibration and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare multiple seeds and explain why silhouette alone is insufficient.
- [ ] Imbalance, metrics, calibration and error analysis: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Household energy forecasting

A planner needs next-day demand estimates with honest validation.

**Data:** Generate 365 daily demand values with seasonality and noise. Use a fixed seed and keep evaluation cases separate.

**Output:** A chronological forecast benchmark and residual report.

**Effort:** 16h · Intermediate

- **Imbalance, metrics, calibration and error analysis:** Extend the project with Imbalance, metrics, calibration and error analysis in Household energy forecasting. Adapt this focused lab to the project data: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement. Predict next-day energy demand; keep the same target and splits across model comparisons. Required concepts: Classification metrics, Calibration and thresholds, Error analysis.
  - Deliverable: Imbalance, metrics, calibration and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chronological forecast benchmark and residual report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Imbalance, metrics, calibration and error analysis: Imbalance, metrics, calibration and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Beat or explain failure against last-week demand on a future holdout.
- [ ] Imbalance, metrics, calibration and error analysis: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature contribution audit

A reviewer needs to investigate reliance on a suspicious feature.

**Data:** Generate 400 labeled rows with one leakage feature and correlated proxies. Use a fixed seed and keep evaluation cases separate.

**Output:** An ablation and permutation-importance report.

**Effort:** 16h · Intermediate

- **Imbalance, metrics, calibration and error analysis:** Extend the project with Imbalance, metrics, calibration and error analysis in Feature contribution audit. Adapt this focused lab to the project data: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement. Predict generated binary outcome with the leakage field excluded; keep the same target and splits across model comparisons. Required concepts: Classification metrics, Calibration and thresholds, Error analysis.
  - Deliverable: Imbalance, metrics, calibration and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An ablation and permutation-importance report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Imbalance, metrics, calibration and error analysis: Imbalance, metrics, calibration and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare held-out performance before/after leakage removal and explain correlation caveats.
- [ ] Imbalance, metrics, calibration and error analysis: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory movement anomaly detector

A stock manager needs unusual movements flagged for review.

**Data:** Generate 500 movements with 30 labeled injected anomalies. Use a fixed seed and keep evaluation cases separate.

**Output:** An anomaly ranking and threshold investigation notebook.

**Effort:** 16h · Intermediate

- **Imbalance, metrics, calibration and error analysis:** Extend the project with Imbalance, metrics, calibration and error analysis in Inventory movement anomaly detector. Adapt this focused lab to the project data: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement. Predict injected anomaly flag; keep the same target and splits across model comparisons. Required concepts: Classification metrics, Calibration and thresholds, Error analysis.
  - Deliverable: Imbalance, metrics, calibration and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An anomaly ranking and threshold investigation notebook. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Imbalance, metrics, calibration and error analysis: Imbalance, metrics, calibration and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report precision at a fixed review budget and inspect false alerts.
- [ ] Imbalance, metrics, calibration and error analysis: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Kernel decision boundary lab

A learner needs to understand when a nonlinear classifier helps.

**Data:** Use scikit-learn make_moons at three noise levels. Use a fixed seed and keep evaluation cases separate.

**Output:** A linear versus RBF SVM comparison with boundary plots.

**Effort:** 16h · Intermediate

- **Imbalance, metrics, calibration and error analysis:** Extend the project with Imbalance, metrics, calibration and error analysis in Kernel decision boundary lab. Adapt this focused lab to the project data: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement. Predict generated moon class; keep the same target and splits across model comparisons. Required concepts: Classification metrics, Calibration and thresholds, Error analysis.
  - Deliverable: Imbalance, metrics, calibration and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A linear versus RBF SVM comparison with boundary plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Imbalance, metrics, calibration and error analysis: Imbalance, metrics, calibration and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Use nested tuning and report held-out errors and support-vector counts.
- [ ] Imbalance, metrics, calibration and error analysis: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Nearest example explanation service

A learner needs predictions with inspectable reference examples.

**Data:** Use scikit-learn digits with a fixed train/test split. Use a fixed seed and keep evaluation cases separate.

**Output:** A kNN classifier that returns neighbors and distance explanations.

**Effort:** 16h · Intermediate

- **Imbalance, metrics, calibration and error analysis:** Extend the project with Imbalance, metrics, calibration and error analysis in Nearest example explanation service. Adapt this focused lab to the project data: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement. Predict digit class; keep the same target and splits across model comparisons. Required concepts: Classification metrics, Calibration and thresholds, Error analysis.
  - Deliverable: Imbalance, metrics, calibration and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A kNN classifier that returns neighbors and distance explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Imbalance, metrics, calibration and error analysis: Imbalance, metrics, calibration and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test scaling, ties and out-of-distribution inputs; record latency.
- [ ] Imbalance, metrics, calibration and error analysis: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible model selection bench

A teammate needs to compare preprocessing and estimator choices fairly.

**Data:** Use scikit-learn built-in wine data. Use a fixed seed and keep evaluation cases separate.

**Output:** A cross-validated search with persisted pipeline and inference script.

**Effort:** 16h · Intermediate

- **Imbalance, metrics, calibration and error analysis:** Extend the project with Imbalance, metrics, calibration and error analysis in Reproducible model selection bench. Adapt this focused lab to the project data: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement. Predict wine class; keep the same target and splits across model comparisons. Required concepts: Classification metrics, Calibration and thresholds, Error analysis.
  - Deliverable: Imbalance, metrics, calibration and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cross-validated search with persisted pipeline and inference script. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Imbalance, metrics, calibration and error analysis: Imbalance, metrics, calibration and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep the final holdout untouched until selection and reproduce predictions after reload.
- [ ] Imbalance, metrics, calibration and error analysis: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Rare event threshold workbench

An operator needs a controllable false-alert budget.

**Data:** Generate 1000 binary-labeled observations with 5 percent positives. Use a fixed seed and keep evaluation cases separate.

**Output:** A calibrated classifier and threshold tradeoff dashboard.

**Effort:** 16h · Intermediate

- **Imbalance, metrics, calibration and error analysis:** Extend the project with Imbalance, metrics, calibration and error analysis in Rare event threshold workbench. Adapt this focused lab to the project data: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement. Predict rare event label; keep the same target and splits across model comparisons. Required concepts: Classification metrics, Calibration and thresholds, Error analysis.
  - Deliverable: Imbalance, metrics, calibration and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A calibrated classifier and threshold tradeoff dashboard. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Imbalance, metrics, calibration and error analysis: Imbalance, metrics, calibration and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Choose thresholds on validation only and publish confusion matrices.
- [ ] Imbalance, metrics, calibration and error analysis: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket model comparison

A support lead needs category suggestions with human review for ambiguity.

**Data:** Generate 180 labeled login, billing and setup tickets with paraphrases. Use a fixed seed and keep evaluation cases separate.

**Output:** A classifier comparison, error slices and a review threshold.

**Effort:** 16h · Intermediate

- **Imbalance, metrics, calibration and error analysis:** Extend the project with Imbalance, metrics, calibration and error analysis in Support ticket model comparison. Adapt this focused lab to the project data: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement. Predict ticket category (login, billing, setup); keep the same target and splits across model comparisons. Required concepts: Classification metrics, Calibration and thresholds, Error analysis.
  - Deliverable: Imbalance, metrics, calibration and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A classifier comparison, error slices and a review threshold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Imbalance, metrics, calibration and error analysis: Imbalance, metrics, calibration and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Hold out templates, compare a dummy baseline and report macro F1.
- [ ] Imbalance, metrics, calibration and error analysis: Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="ml-inference"></a>

### Model persistence, inference and data drift

Serve the same preprocessing and model version that you evaluated.

**Priority:** Foundation · **Study:** 2h · **Practice:** 3h

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

### Reproducible model selection bench

A teammate needs to compare preprocessing and estimator choices fairly.

**Data:** Use scikit-learn built-in wine data. Use a fixed seed and keep evaluation cases separate.

**Output:** A cross-validated search with persisted pipeline and inference script.

**Effort:** 16h · Intermediate

- **Model persistence, inference and data drift:** Implement Model persistence, inference and data drift in Reproducible model selection bench. Adapt this focused lab to the project data: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report. Predict wine class; keep the same target and splits across model comparisons. Required concepts: Persistence, Inference contracts, Drift.
  - Deliverable: Model persistence, inference and data drift: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cross-validated search with persisted pipeline and inference script. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model persistence, inference and data drift: Model persistence, inference and data drift: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep the final holdout untouched until selection and reproduce predictions after reload.
- [ ] Model persistence, inference and data drift: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Subscription retention baseline

An analyst needs an educational estimate of likely account cancellation.

**Data:** Generate 500 fictional accounts with a binary cancellation label. Use a fixed seed and keep evaluation cases separate.

**Output:** A leakage-safe preprocessing and classification pipeline.

**Effort:** 16h · Intermediate

- **Model persistence, inference and data drift:** Extend the project with Model persistence, inference and data drift in Subscription retention baseline. Adapt this focused lab to the project data: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report. Predict fictional cancellation label; keep the same target and splits across model comparisons. Required concepts: Persistence, Inference contracts, Drift.
  - Deliverable: Model persistence, inference and data drift: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A leakage-safe preprocessing and classification pipeline. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model persistence, inference and data drift: Model persistence, inference and data drift: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude post-cancellation fields and report PR AUC plus calibration.
- [ ] Model persistence, inference and data drift: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Customer behavior segmentation

A researcher needs interpretable groups without invented ground truth.

**Data:** Generate 300 fictional usage vectors with three overlapping clusters. Use a fixed seed and keep evaluation cases separate.

**Output:** A clustering comparison with stability and group descriptions.

**Effort:** 16h · Intermediate

- **Model persistence, inference and data drift:** Extend the project with Model persistence, inference and data drift in Customer behavior segmentation. Adapt this focused lab to the project data: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.  Required concepts: Persistence, Inference contracts, Drift.
  - Deliverable: Model persistence, inference and data drift: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A clustering comparison with stability and group descriptions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model persistence, inference and data drift: Model persistence, inference and data drift: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare multiple seeds and explain why silhouette alone is insufficient.
- [ ] Model persistence, inference and data drift: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Household energy forecasting

A planner needs next-day demand estimates with honest validation.

**Data:** Generate 365 daily demand values with seasonality and noise. Use a fixed seed and keep evaluation cases separate.

**Output:** A chronological forecast benchmark and residual report.

**Effort:** 16h · Intermediate

- **Model persistence, inference and data drift:** Extend the project with Model persistence, inference and data drift in Household energy forecasting. Adapt this focused lab to the project data: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report. Predict next-day energy demand; keep the same target and splits across model comparisons. Required concepts: Persistence, Inference contracts, Drift.
  - Deliverable: Model persistence, inference and data drift: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chronological forecast benchmark and residual report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model persistence, inference and data drift: Model persistence, inference and data drift: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Beat or explain failure against last-week demand on a future holdout.
- [ ] Model persistence, inference and data drift: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature contribution audit

A reviewer needs to investigate reliance on a suspicious feature.

**Data:** Generate 400 labeled rows with one leakage feature and correlated proxies. Use a fixed seed and keep evaluation cases separate.

**Output:** An ablation and permutation-importance report.

**Effort:** 16h · Intermediate

- **Model persistence, inference and data drift:** Extend the project with Model persistence, inference and data drift in Feature contribution audit. Adapt this focused lab to the project data: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report. Predict generated binary outcome with the leakage field excluded; keep the same target and splits across model comparisons. Required concepts: Persistence, Inference contracts, Drift.
  - Deliverable: Model persistence, inference and data drift: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An ablation and permutation-importance report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model persistence, inference and data drift: Model persistence, inference and data drift: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare held-out performance before/after leakage removal and explain correlation caveats.
- [ ] Model persistence, inference and data drift: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory movement anomaly detector

A stock manager needs unusual movements flagged for review.

**Data:** Generate 500 movements with 30 labeled injected anomalies. Use a fixed seed and keep evaluation cases separate.

**Output:** An anomaly ranking and threshold investigation notebook.

**Effort:** 16h · Intermediate

- **Model persistence, inference and data drift:** Extend the project with Model persistence, inference and data drift in Inventory movement anomaly detector. Adapt this focused lab to the project data: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report. Predict injected anomaly flag; keep the same target and splits across model comparisons. Required concepts: Persistence, Inference contracts, Drift.
  - Deliverable: Model persistence, inference and data drift: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An anomaly ranking and threshold investigation notebook. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model persistence, inference and data drift: Model persistence, inference and data drift: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report precision at a fixed review budget and inspect false alerts.
- [ ] Model persistence, inference and data drift: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Kernel decision boundary lab

A learner needs to understand when a nonlinear classifier helps.

**Data:** Use scikit-learn make_moons at three noise levels. Use a fixed seed and keep evaluation cases separate.

**Output:** A linear versus RBF SVM comparison with boundary plots.

**Effort:** 16h · Intermediate

- **Model persistence, inference and data drift:** Extend the project with Model persistence, inference and data drift in Kernel decision boundary lab. Adapt this focused lab to the project data: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report. Predict generated moon class; keep the same target and splits across model comparisons. Required concepts: Persistence, Inference contracts, Drift.
  - Deliverable: Model persistence, inference and data drift: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A linear versus RBF SVM comparison with boundary plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model persistence, inference and data drift: Model persistence, inference and data drift: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Use nested tuning and report held-out errors and support-vector counts.
- [ ] Model persistence, inference and data drift: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Nearest example explanation service

A learner needs predictions with inspectable reference examples.

**Data:** Use scikit-learn digits with a fixed train/test split. Use a fixed seed and keep evaluation cases separate.

**Output:** A kNN classifier that returns neighbors and distance explanations.

**Effort:** 16h · Intermediate

- **Model persistence, inference and data drift:** Extend the project with Model persistence, inference and data drift in Nearest example explanation service. Adapt this focused lab to the project data: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report. Predict digit class; keep the same target and splits across model comparisons. Required concepts: Persistence, Inference contracts, Drift.
  - Deliverable: Model persistence, inference and data drift: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A kNN classifier that returns neighbors and distance explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model persistence, inference and data drift: Model persistence, inference and data drift: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test scaling, ties and out-of-distribution inputs; record latency.
- [ ] Model persistence, inference and data drift: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Rare event threshold workbench

An operator needs a controllable false-alert budget.

**Data:** Generate 1000 binary-labeled observations with 5 percent positives. Use a fixed seed and keep evaluation cases separate.

**Output:** A calibrated classifier and threshold tradeoff dashboard.

**Effort:** 16h · Intermediate

- **Model persistence, inference and data drift:** Extend the project with Model persistence, inference and data drift in Rare event threshold workbench. Adapt this focused lab to the project data: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report. Predict rare event label; keep the same target and splits across model comparisons. Required concepts: Persistence, Inference contracts, Drift.
  - Deliverable: Model persistence, inference and data drift: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A calibrated classifier and threshold tradeoff dashboard. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model persistence, inference and data drift: Model persistence, inference and data drift: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Choose thresholds on validation only and publish confusion matrices.
- [ ] Model persistence, inference and data drift: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket model comparison

A support lead needs category suggestions with human review for ambiguity.

**Data:** Generate 180 labeled login, billing and setup tickets with paraphrases. Use a fixed seed and keep evaluation cases separate.

**Output:** A classifier comparison, error slices and a review threshold.

**Effort:** 16h · Intermediate

- **Model persistence, inference and data drift:** Extend the project with Model persistence, inference and data drift in Support ticket model comparison. Adapt this focused lab to the project data: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report. Predict ticket category (login, billing, setup); keep the same target and splits across model comparisons. Required concepts: Persistence, Inference contracts, Drift.
  - Deliverable: Model persistence, inference and data drift: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A classifier comparison, error slices and a review threshold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Model persistence, inference and data drift: Model persistence, inference and data drift: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Hold out templates, compare a dummy baseline and report macro F1.
- [ ] Model persistence, inference and data drift: Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Model development in detail

<a id="ml-pipelines-search"></a>

### Column transformers, nested validation and tuning budgets

Tune models while keeping preprocessing and model selection inside a leakage-safe validation procedure.

**Priority:** Foundation · **Study:** 3h · **Practice:** 4h

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

### Reproducible model selection bench

A teammate needs to compare preprocessing and estimator choices fairly.

**Data:** Use scikit-learn built-in wine data. Use a fixed seed and keep evaluation cases separate.

**Output:** A cross-validated search with persisted pipeline and inference script.

**Effort:** 16h · Intermediate

- **Column transformers, nested validation and tuning budgets:** Implement Column transformers, nested validation and tuning budgets in Reproducible model selection bench. Adapt this focused lab to the project data: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance. Predict wine class; keep the same target and splits across model comparisons. Required concepts: Per-column preprocessing, Pipeline fit boundaries, Search-space design, Nested validation, Search accounting.
  - Deliverable: Column transformers, nested validation and tuning budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cross-validated search with persisted pipeline and inference script. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Column transformers, nested validation and tuning budgets: Column transformers, nested validation and tuning budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep the final holdout untouched until selection and reproduce predictions after reload.
- [ ] Column transformers, nested validation and tuning budgets: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Subscription retention baseline

An analyst needs an educational estimate of likely account cancellation.

**Data:** Generate 500 fictional accounts with a binary cancellation label. Use a fixed seed and keep evaluation cases separate.

**Output:** A leakage-safe preprocessing and classification pipeline.

**Effort:** 16h · Intermediate

- **Column transformers, nested validation and tuning budgets:** Extend the project with Column transformers, nested validation and tuning budgets in Subscription retention baseline. Adapt this focused lab to the project data: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance. Predict fictional cancellation label; keep the same target and splits across model comparisons. Required concepts: Per-column preprocessing, Pipeline fit boundaries, Search-space design, Nested validation, Search accounting.
  - Deliverable: Column transformers, nested validation and tuning budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A leakage-safe preprocessing and classification pipeline. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Column transformers, nested validation and tuning budgets: Column transformers, nested validation and tuning budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude post-cancellation fields and report PR AUC plus calibration.
- [ ] Column transformers, nested validation and tuning budgets: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Customer behavior segmentation

A researcher needs interpretable groups without invented ground truth.

**Data:** Generate 300 fictional usage vectors with three overlapping clusters. Use a fixed seed and keep evaluation cases separate.

**Output:** A clustering comparison with stability and group descriptions.

**Effort:** 16h · Intermediate

- **Column transformers, nested validation and tuning budgets:** Extend the project with Column transformers, nested validation and tuning budgets in Customer behavior segmentation. Adapt this focused lab to the project data: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.  Required concepts: Per-column preprocessing, Pipeline fit boundaries, Search-space design, Nested validation, Search accounting.
  - Deliverable: Column transformers, nested validation and tuning budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A clustering comparison with stability and group descriptions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Column transformers, nested validation and tuning budgets: Column transformers, nested validation and tuning budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare multiple seeds and explain why silhouette alone is insufficient.
- [ ] Column transformers, nested validation and tuning budgets: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Household energy forecasting

A planner needs next-day demand estimates with honest validation.

**Data:** Generate 365 daily demand values with seasonality and noise. Use a fixed seed and keep evaluation cases separate.

**Output:** A chronological forecast benchmark and residual report.

**Effort:** 16h · Intermediate

- **Column transformers, nested validation and tuning budgets:** Extend the project with Column transformers, nested validation and tuning budgets in Household energy forecasting. Adapt this focused lab to the project data: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance. Predict next-day energy demand; keep the same target and splits across model comparisons. Required concepts: Per-column preprocessing, Pipeline fit boundaries, Search-space design, Nested validation, Search accounting.
  - Deliverable: Column transformers, nested validation and tuning budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chronological forecast benchmark and residual report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Column transformers, nested validation and tuning budgets: Column transformers, nested validation and tuning budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Beat or explain failure against last-week demand on a future holdout.
- [ ] Column transformers, nested validation and tuning budgets: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature contribution audit

A reviewer needs to investigate reliance on a suspicious feature.

**Data:** Generate 400 labeled rows with one leakage feature and correlated proxies. Use a fixed seed and keep evaluation cases separate.

**Output:** An ablation and permutation-importance report.

**Effort:** 16h · Intermediate

- **Column transformers, nested validation and tuning budgets:** Extend the project with Column transformers, nested validation and tuning budgets in Feature contribution audit. Adapt this focused lab to the project data: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance. Predict generated binary outcome with the leakage field excluded; keep the same target and splits across model comparisons. Required concepts: Per-column preprocessing, Pipeline fit boundaries, Search-space design, Nested validation, Search accounting.
  - Deliverable: Column transformers, nested validation and tuning budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An ablation and permutation-importance report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Column transformers, nested validation and tuning budgets: Column transformers, nested validation and tuning budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare held-out performance before/after leakage removal and explain correlation caveats.
- [ ] Column transformers, nested validation and tuning budgets: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory movement anomaly detector

A stock manager needs unusual movements flagged for review.

**Data:** Generate 500 movements with 30 labeled injected anomalies. Use a fixed seed and keep evaluation cases separate.

**Output:** An anomaly ranking and threshold investigation notebook.

**Effort:** 16h · Intermediate

- **Column transformers, nested validation and tuning budgets:** Extend the project with Column transformers, nested validation and tuning budgets in Inventory movement anomaly detector. Adapt this focused lab to the project data: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance. Predict injected anomaly flag; keep the same target and splits across model comparisons. Required concepts: Per-column preprocessing, Pipeline fit boundaries, Search-space design, Nested validation, Search accounting.
  - Deliverable: Column transformers, nested validation and tuning budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An anomaly ranking and threshold investigation notebook. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Column transformers, nested validation and tuning budgets: Column transformers, nested validation and tuning budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report precision at a fixed review budget and inspect false alerts.
- [ ] Column transformers, nested validation and tuning budgets: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Kernel decision boundary lab

A learner needs to understand when a nonlinear classifier helps.

**Data:** Use scikit-learn make_moons at three noise levels. Use a fixed seed and keep evaluation cases separate.

**Output:** A linear versus RBF SVM comparison with boundary plots.

**Effort:** 16h · Intermediate

- **Column transformers, nested validation and tuning budgets:** Extend the project with Column transformers, nested validation and tuning budgets in Kernel decision boundary lab. Adapt this focused lab to the project data: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance. Predict generated moon class; keep the same target and splits across model comparisons. Required concepts: Per-column preprocessing, Pipeline fit boundaries, Search-space design, Nested validation, Search accounting.
  - Deliverable: Column transformers, nested validation and tuning budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A linear versus RBF SVM comparison with boundary plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Column transformers, nested validation and tuning budgets: Column transformers, nested validation and tuning budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Use nested tuning and report held-out errors and support-vector counts.
- [ ] Column transformers, nested validation and tuning budgets: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Nearest example explanation service

A learner needs predictions with inspectable reference examples.

**Data:** Use scikit-learn digits with a fixed train/test split. Use a fixed seed and keep evaluation cases separate.

**Output:** A kNN classifier that returns neighbors and distance explanations.

**Effort:** 16h · Intermediate

- **Column transformers, nested validation and tuning budgets:** Extend the project with Column transformers, nested validation and tuning budgets in Nearest example explanation service. Adapt this focused lab to the project data: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance. Predict digit class; keep the same target and splits across model comparisons. Required concepts: Per-column preprocessing, Pipeline fit boundaries, Search-space design, Nested validation, Search accounting.
  - Deliverable: Column transformers, nested validation and tuning budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A kNN classifier that returns neighbors and distance explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Column transformers, nested validation and tuning budgets: Column transformers, nested validation and tuning budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test scaling, ties and out-of-distribution inputs; record latency.
- [ ] Column transformers, nested validation and tuning budgets: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Rare event threshold workbench

An operator needs a controllable false-alert budget.

**Data:** Generate 1000 binary-labeled observations with 5 percent positives. Use a fixed seed and keep evaluation cases separate.

**Output:** A calibrated classifier and threshold tradeoff dashboard.

**Effort:** 16h · Intermediate

- **Column transformers, nested validation and tuning budgets:** Extend the project with Column transformers, nested validation and tuning budgets in Rare event threshold workbench. Adapt this focused lab to the project data: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance. Predict rare event label; keep the same target and splits across model comparisons. Required concepts: Per-column preprocessing, Pipeline fit boundaries, Search-space design, Nested validation, Search accounting.
  - Deliverable: Column transformers, nested validation and tuning budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A calibrated classifier and threshold tradeoff dashboard. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Column transformers, nested validation and tuning budgets: Column transformers, nested validation and tuning budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Choose thresholds on validation only and publish confusion matrices.
- [ ] Column transformers, nested validation and tuning budgets: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket model comparison

A support lead needs category suggestions with human review for ambiguity.

**Data:** Generate 180 labeled login, billing and setup tickets with paraphrases. Use a fixed seed and keep evaluation cases separate.

**Output:** A classifier comparison, error slices and a review threshold.

**Effort:** 16h · Intermediate

- **Column transformers, nested validation and tuning budgets:** Extend the project with Column transformers, nested validation and tuning budgets in Support ticket model comparison. Adapt this focused lab to the project data: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance. Predict ticket category (login, billing, setup); keep the same target and splits across model comparisons. Required concepts: Per-column preprocessing, Pipeline fit boundaries, Search-space design, Nested validation, Search accounting.
  - Deliverable: Column transformers, nested validation and tuning budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A classifier comparison, error slices and a review threshold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Column transformers, nested validation and tuning budgets: Column transformers, nested validation and tuning budgets: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Hold out templates, compare a dummy baseline and report macro F1.
- [ ] Column transformers, nested validation and tuning budgets: Build a mixed-column classification pipeline on 200 generated rows with an imputer, encoder and estimator. Run a small nested search, assert preprocessing fits only training folds and report runtime plus held-out performance.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="ml-threshold-imbalance"></a>

### Class imbalance, decision thresholds and calibration

Translate classifier scores into a defensible decision rule rather than relying on accuracy or a default threshold.

**Priority:** Foundation · **Study:** 3h · **Practice:** 4h

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

### Rare event threshold workbench

An operator needs a controllable false-alert budget.

**Data:** Generate 1000 binary-labeled observations with 5 percent positives. Use a fixed seed and keep evaluation cases separate.

**Output:** A calibrated classifier and threshold tradeoff dashboard.

**Effort:** 16h · Intermediate

- **Class imbalance, decision thresholds and calibration:** Implement Class imbalance, decision thresholds and calibration in Rare event threshold workbench. Adapt this focused lab to the project data: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set. Predict rare event label; keep the same target and splits across model comparisons. Required concepts: Base rate and accuracy, Precision-recall tradeoff, Class weights and resampling, Calibration meaning, Decision cost and threshold validation.
  - Deliverable: Class imbalance, decision thresholds and calibration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A calibrated classifier and threshold tradeoff dashboard. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Class imbalance, decision thresholds and calibration: Class imbalance, decision thresholds and calibration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Choose thresholds on validation only and publish confusion matrices.
- [ ] Class imbalance, decision thresholds and calibration: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Subscription retention baseline

An analyst needs an educational estimate of likely account cancellation.

**Data:** Generate 500 fictional accounts with a binary cancellation label. Use a fixed seed and keep evaluation cases separate.

**Output:** A leakage-safe preprocessing and classification pipeline.

**Effort:** 16h · Intermediate

- **Class imbalance, decision thresholds and calibration:** Extend the project with Class imbalance, decision thresholds and calibration in Subscription retention baseline. Adapt this focused lab to the project data: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set. Predict fictional cancellation label; keep the same target and splits across model comparisons. Required concepts: Base rate and accuracy, Precision-recall tradeoff, Class weights and resampling, Calibration meaning, Decision cost and threshold validation.
  - Deliverable: Class imbalance, decision thresholds and calibration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A leakage-safe preprocessing and classification pipeline. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Class imbalance, decision thresholds and calibration: Class imbalance, decision thresholds and calibration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude post-cancellation fields and report PR AUC plus calibration.
- [ ] Class imbalance, decision thresholds and calibration: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Customer behavior segmentation

A researcher needs interpretable groups without invented ground truth.

**Data:** Generate 300 fictional usage vectors with three overlapping clusters. Use a fixed seed and keep evaluation cases separate.

**Output:** A clustering comparison with stability and group descriptions.

**Effort:** 16h · Intermediate

- **Class imbalance, decision thresholds and calibration:** Extend the project with Class imbalance, decision thresholds and calibration in Customer behavior segmentation. Adapt this focused lab to the project data: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.  Required concepts: Base rate and accuracy, Precision-recall tradeoff, Class weights and resampling, Calibration meaning, Decision cost and threshold validation.
  - Deliverable: Class imbalance, decision thresholds and calibration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A clustering comparison with stability and group descriptions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Class imbalance, decision thresholds and calibration: Class imbalance, decision thresholds and calibration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare multiple seeds and explain why silhouette alone is insufficient.
- [ ] Class imbalance, decision thresholds and calibration: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Household energy forecasting

A planner needs next-day demand estimates with honest validation.

**Data:** Generate 365 daily demand values with seasonality and noise. Use a fixed seed and keep evaluation cases separate.

**Output:** A chronological forecast benchmark and residual report.

**Effort:** 16h · Intermediate

- **Class imbalance, decision thresholds and calibration:** Extend the project with Class imbalance, decision thresholds and calibration in Household energy forecasting. Adapt this focused lab to the project data: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set. Predict next-day energy demand; keep the same target and splits across model comparisons. Required concepts: Base rate and accuracy, Precision-recall tradeoff, Class weights and resampling, Calibration meaning, Decision cost and threshold validation.
  - Deliverable: Class imbalance, decision thresholds and calibration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chronological forecast benchmark and residual report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Class imbalance, decision thresholds and calibration: Class imbalance, decision thresholds and calibration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Beat or explain failure against last-week demand on a future holdout.
- [ ] Class imbalance, decision thresholds and calibration: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature contribution audit

A reviewer needs to investigate reliance on a suspicious feature.

**Data:** Generate 400 labeled rows with one leakage feature and correlated proxies. Use a fixed seed and keep evaluation cases separate.

**Output:** An ablation and permutation-importance report.

**Effort:** 16h · Intermediate

- **Class imbalance, decision thresholds and calibration:** Extend the project with Class imbalance, decision thresholds and calibration in Feature contribution audit. Adapt this focused lab to the project data: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set. Predict generated binary outcome with the leakage field excluded; keep the same target and splits across model comparisons. Required concepts: Base rate and accuracy, Precision-recall tradeoff, Class weights and resampling, Calibration meaning, Decision cost and threshold validation.
  - Deliverable: Class imbalance, decision thresholds and calibration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An ablation and permutation-importance report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Class imbalance, decision thresholds and calibration: Class imbalance, decision thresholds and calibration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare held-out performance before/after leakage removal and explain correlation caveats.
- [ ] Class imbalance, decision thresholds and calibration: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory movement anomaly detector

A stock manager needs unusual movements flagged for review.

**Data:** Generate 500 movements with 30 labeled injected anomalies. Use a fixed seed and keep evaluation cases separate.

**Output:** An anomaly ranking and threshold investigation notebook.

**Effort:** 16h · Intermediate

- **Class imbalance, decision thresholds and calibration:** Extend the project with Class imbalance, decision thresholds and calibration in Inventory movement anomaly detector. Adapt this focused lab to the project data: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set. Predict injected anomaly flag; keep the same target and splits across model comparisons. Required concepts: Base rate and accuracy, Precision-recall tradeoff, Class weights and resampling, Calibration meaning, Decision cost and threshold validation.
  - Deliverable: Class imbalance, decision thresholds and calibration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An anomaly ranking and threshold investigation notebook. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Class imbalance, decision thresholds and calibration: Class imbalance, decision thresholds and calibration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report precision at a fixed review budget and inspect false alerts.
- [ ] Class imbalance, decision thresholds and calibration: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Kernel decision boundary lab

A learner needs to understand when a nonlinear classifier helps.

**Data:** Use scikit-learn make_moons at three noise levels. Use a fixed seed and keep evaluation cases separate.

**Output:** A linear versus RBF SVM comparison with boundary plots.

**Effort:** 16h · Intermediate

- **Class imbalance, decision thresholds and calibration:** Extend the project with Class imbalance, decision thresholds and calibration in Kernel decision boundary lab. Adapt this focused lab to the project data: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set. Predict generated moon class; keep the same target and splits across model comparisons. Required concepts: Base rate and accuracy, Precision-recall tradeoff, Class weights and resampling, Calibration meaning, Decision cost and threshold validation.
  - Deliverable: Class imbalance, decision thresholds and calibration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A linear versus RBF SVM comparison with boundary plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Class imbalance, decision thresholds and calibration: Class imbalance, decision thresholds and calibration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Use nested tuning and report held-out errors and support-vector counts.
- [ ] Class imbalance, decision thresholds and calibration: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Nearest example explanation service

A learner needs predictions with inspectable reference examples.

**Data:** Use scikit-learn digits with a fixed train/test split. Use a fixed seed and keep evaluation cases separate.

**Output:** A kNN classifier that returns neighbors and distance explanations.

**Effort:** 16h · Intermediate

- **Class imbalance, decision thresholds and calibration:** Extend the project with Class imbalance, decision thresholds and calibration in Nearest example explanation service. Adapt this focused lab to the project data: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set. Predict digit class; keep the same target and splits across model comparisons. Required concepts: Base rate and accuracy, Precision-recall tradeoff, Class weights and resampling, Calibration meaning, Decision cost and threshold validation.
  - Deliverable: Class imbalance, decision thresholds and calibration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A kNN classifier that returns neighbors and distance explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Class imbalance, decision thresholds and calibration: Class imbalance, decision thresholds and calibration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test scaling, ties and out-of-distribution inputs; record latency.
- [ ] Class imbalance, decision thresholds and calibration: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible model selection bench

A teammate needs to compare preprocessing and estimator choices fairly.

**Data:** Use scikit-learn built-in wine data. Use a fixed seed and keep evaluation cases separate.

**Output:** A cross-validated search with persisted pipeline and inference script.

**Effort:** 16h · Intermediate

- **Class imbalance, decision thresholds and calibration:** Extend the project with Class imbalance, decision thresholds and calibration in Reproducible model selection bench. Adapt this focused lab to the project data: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set. Predict wine class; keep the same target and splits across model comparisons. Required concepts: Base rate and accuracy, Precision-recall tradeoff, Class weights and resampling, Calibration meaning, Decision cost and threshold validation.
  - Deliverable: Class imbalance, decision thresholds and calibration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cross-validated search with persisted pipeline and inference script. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Class imbalance, decision thresholds and calibration: Class imbalance, decision thresholds and calibration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep the final holdout untouched until selection and reproduce predictions after reload.
- [ ] Class imbalance, decision thresholds and calibration: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket model comparison

A support lead needs category suggestions with human review for ambiguity.

**Data:** Generate 180 labeled login, billing and setup tickets with paraphrases. Use a fixed seed and keep evaluation cases separate.

**Output:** A classifier comparison, error slices and a review threshold.

**Effort:** 16h · Intermediate

- **Class imbalance, decision thresholds and calibration:** Extend the project with Class imbalance, decision thresholds and calibration in Support ticket model comparison. Adapt this focused lab to the project data: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set. Predict ticket category (login, billing, setup); keep the same target and splits across model comparisons. Required concepts: Base rate and accuracy, Precision-recall tradeoff, Class weights and resampling, Calibration meaning, Decision cost and threshold validation.
  - Deliverable: Class imbalance, decision thresholds and calibration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A classifier comparison, error slices and a review threshold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Class imbalance, decision thresholds and calibration: Class imbalance, decision thresholds and calibration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Hold out templates, compare a dummy baseline and report macro F1.
- [ ] Class imbalance, decision thresholds and calibration: Create a small imbalanced synthetic dataset, compare accuracy with precision/recall and choose a threshold on validation data under a fixed review budget. Plot calibration and evaluate the final fixed rule on a held-out test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="ml-interpretation-errors"></a>

### Permutation importance, partial dependence and error slices

Explain a model carefully and identify which examples fail without confusing predictive association with causation.

**Priority:** Foundation · **Study:** 3h · **Practice:** 4h

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

### Feature contribution audit

A reviewer needs to investigate reliance on a suspicious feature.

**Data:** Generate 400 labeled rows with one leakage feature and correlated proxies. Use a fixed seed and keep evaluation cases separate.

**Output:** An ablation and permutation-importance report.

**Effort:** 16h · Intermediate

- **Permutation importance, partial dependence and error slices:** Implement Permutation importance, partial dependence and error slices in Feature contribution audit. Adapt this focused lab to the project data: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid. Predict generated binary outcome with the leakage field excluded; keep the same target and splits across model comparisons. Required concepts: Held-out permutation importance, Correlated features, Partial dependence assumptions, Error slices, Association versus intervention.
  - Deliverable: Permutation importance, partial dependence and error slices: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An ablation and permutation-importance report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Permutation importance, partial dependence and error slices: Permutation importance, partial dependence and error slices: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare held-out performance before/after leakage removal and explain correlation caveats.
- [ ] Permutation importance, partial dependence and error slices: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Subscription retention baseline

An analyst needs an educational estimate of likely account cancellation.

**Data:** Generate 500 fictional accounts with a binary cancellation label. Use a fixed seed and keep evaluation cases separate.

**Output:** A leakage-safe preprocessing and classification pipeline.

**Effort:** 16h · Intermediate

- **Permutation importance, partial dependence and error slices:** Extend the project with Permutation importance, partial dependence and error slices in Subscription retention baseline. Adapt this focused lab to the project data: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid. Predict fictional cancellation label; keep the same target and splits across model comparisons. Required concepts: Held-out permutation importance, Correlated features, Partial dependence assumptions, Error slices, Association versus intervention.
  - Deliverable: Permutation importance, partial dependence and error slices: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A leakage-safe preprocessing and classification pipeline. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Permutation importance, partial dependence and error slices: Permutation importance, partial dependence and error slices: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude post-cancellation fields and report PR AUC plus calibration.
- [ ] Permutation importance, partial dependence and error slices: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Customer behavior segmentation

A researcher needs interpretable groups without invented ground truth.

**Data:** Generate 300 fictional usage vectors with three overlapping clusters. Use a fixed seed and keep evaluation cases separate.

**Output:** A clustering comparison with stability and group descriptions.

**Effort:** 16h · Intermediate

- **Permutation importance, partial dependence and error slices:** Extend the project with Permutation importance, partial dependence and error slices in Customer behavior segmentation. Adapt this focused lab to the project data: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.  Required concepts: Held-out permutation importance, Correlated features, Partial dependence assumptions, Error slices, Association versus intervention.
  - Deliverable: Permutation importance, partial dependence and error slices: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A clustering comparison with stability and group descriptions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Permutation importance, partial dependence and error slices: Permutation importance, partial dependence and error slices: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare multiple seeds and explain why silhouette alone is insufficient.
- [ ] Permutation importance, partial dependence and error slices: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Household energy forecasting

A planner needs next-day demand estimates with honest validation.

**Data:** Generate 365 daily demand values with seasonality and noise. Use a fixed seed and keep evaluation cases separate.

**Output:** A chronological forecast benchmark and residual report.

**Effort:** 16h · Intermediate

- **Permutation importance, partial dependence and error slices:** Extend the project with Permutation importance, partial dependence and error slices in Household energy forecasting. Adapt this focused lab to the project data: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid. Predict next-day energy demand; keep the same target and splits across model comparisons. Required concepts: Held-out permutation importance, Correlated features, Partial dependence assumptions, Error slices, Association versus intervention.
  - Deliverable: Permutation importance, partial dependence and error slices: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chronological forecast benchmark and residual report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Permutation importance, partial dependence and error slices: Permutation importance, partial dependence and error slices: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Beat or explain failure against last-week demand on a future holdout.
- [ ] Permutation importance, partial dependence and error slices: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory movement anomaly detector

A stock manager needs unusual movements flagged for review.

**Data:** Generate 500 movements with 30 labeled injected anomalies. Use a fixed seed and keep evaluation cases separate.

**Output:** An anomaly ranking and threshold investigation notebook.

**Effort:** 16h · Intermediate

- **Permutation importance, partial dependence and error slices:** Extend the project with Permutation importance, partial dependence and error slices in Inventory movement anomaly detector. Adapt this focused lab to the project data: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid. Predict injected anomaly flag; keep the same target and splits across model comparisons. Required concepts: Held-out permutation importance, Correlated features, Partial dependence assumptions, Error slices, Association versus intervention.
  - Deliverable: Permutation importance, partial dependence and error slices: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An anomaly ranking and threshold investigation notebook. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Permutation importance, partial dependence and error slices: Permutation importance, partial dependence and error slices: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report precision at a fixed review budget and inspect false alerts.
- [ ] Permutation importance, partial dependence and error slices: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Kernel decision boundary lab

A learner needs to understand when a nonlinear classifier helps.

**Data:** Use scikit-learn make_moons at three noise levels. Use a fixed seed and keep evaluation cases separate.

**Output:** A linear versus RBF SVM comparison with boundary plots.

**Effort:** 16h · Intermediate

- **Permutation importance, partial dependence and error slices:** Extend the project with Permutation importance, partial dependence and error slices in Kernel decision boundary lab. Adapt this focused lab to the project data: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid. Predict generated moon class; keep the same target and splits across model comparisons. Required concepts: Held-out permutation importance, Correlated features, Partial dependence assumptions, Error slices, Association versus intervention.
  - Deliverable: Permutation importance, partial dependence and error slices: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A linear versus RBF SVM comparison with boundary plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Permutation importance, partial dependence and error slices: Permutation importance, partial dependence and error slices: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Use nested tuning and report held-out errors and support-vector counts.
- [ ] Permutation importance, partial dependence and error slices: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Nearest example explanation service

A learner needs predictions with inspectable reference examples.

**Data:** Use scikit-learn digits with a fixed train/test split. Use a fixed seed and keep evaluation cases separate.

**Output:** A kNN classifier that returns neighbors and distance explanations.

**Effort:** 16h · Intermediate

- **Permutation importance, partial dependence and error slices:** Extend the project with Permutation importance, partial dependence and error slices in Nearest example explanation service. Adapt this focused lab to the project data: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid. Predict digit class; keep the same target and splits across model comparisons. Required concepts: Held-out permutation importance, Correlated features, Partial dependence assumptions, Error slices, Association versus intervention.
  - Deliverable: Permutation importance, partial dependence and error slices: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A kNN classifier that returns neighbors and distance explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Permutation importance, partial dependence and error slices: Permutation importance, partial dependence and error slices: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test scaling, ties and out-of-distribution inputs; record latency.
- [ ] Permutation importance, partial dependence and error slices: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible model selection bench

A teammate needs to compare preprocessing and estimator choices fairly.

**Data:** Use scikit-learn built-in wine data. Use a fixed seed and keep evaluation cases separate.

**Output:** A cross-validated search with persisted pipeline and inference script.

**Effort:** 16h · Intermediate

- **Permutation importance, partial dependence and error slices:** Extend the project with Permutation importance, partial dependence and error slices in Reproducible model selection bench. Adapt this focused lab to the project data: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid. Predict wine class; keep the same target and splits across model comparisons. Required concepts: Held-out permutation importance, Correlated features, Partial dependence assumptions, Error slices, Association versus intervention.
  - Deliverable: Permutation importance, partial dependence and error slices: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cross-validated search with persisted pipeline and inference script. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Permutation importance, partial dependence and error slices: Permutation importance, partial dependence and error slices: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep the final holdout untouched until selection and reproduce predictions after reload.
- [ ] Permutation importance, partial dependence and error slices: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Rare event threshold workbench

An operator needs a controllable false-alert budget.

**Data:** Generate 1000 binary-labeled observations with 5 percent positives. Use a fixed seed and keep evaluation cases separate.

**Output:** A calibrated classifier and threshold tradeoff dashboard.

**Effort:** 16h · Intermediate

- **Permutation importance, partial dependence and error slices:** Extend the project with Permutation importance, partial dependence and error slices in Rare event threshold workbench. Adapt this focused lab to the project data: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid. Predict rare event label; keep the same target and splits across model comparisons. Required concepts: Held-out permutation importance, Correlated features, Partial dependence assumptions, Error slices, Association versus intervention.
  - Deliverable: Permutation importance, partial dependence and error slices: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A calibrated classifier and threshold tradeoff dashboard. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Permutation importance, partial dependence and error slices: Permutation importance, partial dependence and error slices: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Choose thresholds on validation only and publish confusion matrices.
- [ ] Permutation importance, partial dependence and error slices: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket model comparison

A support lead needs category suggestions with human review for ambiguity.

**Data:** Generate 180 labeled login, billing and setup tickets with paraphrases. Use a fixed seed and keep evaluation cases separate.

**Output:** A classifier comparison, error slices and a review threshold.

**Effort:** 16h · Intermediate

- **Permutation importance, partial dependence and error slices:** Extend the project with Permutation importance, partial dependence and error slices in Support ticket model comparison. Adapt this focused lab to the project data: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid. Predict ticket category (login, billing, setup); keep the same target and splits across model comparisons. Required concepts: Held-out permutation importance, Correlated features, Partial dependence assumptions, Error slices, Association versus intervention.
  - Deliverable: Permutation importance, partial dependence and error slices: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A classifier comparison, error slices and a review threshold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Permutation importance, partial dependence and error slices: Permutation importance, partial dependence and error slices: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Hold out templates, compare a dummy baseline and report macro F1.
- [ ] Permutation importance, partial dependence and error slices: Fit a small tree model with correlated and noise features. Produce held-out permutation importance, a partial-dependence plot and three error slices with sample counts; document one misleading interpretation to avoid.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="ml-svm-kernels"></a>

### SVM margins, kernels, C and feature scale

Understand what changes when a linear classifier becomes a kernel method and why preprocessing matters.

**Priority:** Foundation · **Study:** 3h · **Practice:** 4h

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

### Kernel decision boundary lab

A learner needs to understand when a nonlinear classifier helps.

**Data:** Use scikit-learn make_moons at three noise levels. Use a fixed seed and keep evaluation cases separate.

**Output:** A linear versus RBF SVM comparison with boundary plots.

**Effort:** 16h · Intermediate

- **SVM margins, kernels, C and feature scale:** Implement SVM margins, kernels, C and feature scale in Kernel decision boundary lab. Adapt this focused lab to the project data: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set. Predict generated moon class; keep the same target and splits across model comparisons. Required concepts: Separating margin, Soft-margin C, Kernel similarity, Scale and preprocessing, Compute and probability caveats.
  - Deliverable: SVM margins, kernels, C and feature scale: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A linear versus RBF SVM comparison with boundary plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SVM margins, kernels, C and feature scale: SVM margins, kernels, C and feature scale: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Use nested tuning and report held-out errors and support-vector counts.
- [ ] SVM margins, kernels, C and feature scale: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Subscription retention baseline

An analyst needs an educational estimate of likely account cancellation.

**Data:** Generate 500 fictional accounts with a binary cancellation label. Use a fixed seed and keep evaluation cases separate.

**Output:** A leakage-safe preprocessing and classification pipeline.

**Effort:** 16h · Intermediate

- **SVM margins, kernels, C and feature scale:** Extend the project with SVM margins, kernels, C and feature scale in Subscription retention baseline. Adapt this focused lab to the project data: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set. Predict fictional cancellation label; keep the same target and splits across model comparisons. Required concepts: Separating margin, Soft-margin C, Kernel similarity, Scale and preprocessing, Compute and probability caveats.
  - Deliverable: SVM margins, kernels, C and feature scale: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A leakage-safe preprocessing and classification pipeline. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SVM margins, kernels, C and feature scale: SVM margins, kernels, C and feature scale: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude post-cancellation fields and report PR AUC plus calibration.
- [ ] SVM margins, kernels, C and feature scale: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Customer behavior segmentation

A researcher needs interpretable groups without invented ground truth.

**Data:** Generate 300 fictional usage vectors with three overlapping clusters. Use a fixed seed and keep evaluation cases separate.

**Output:** A clustering comparison with stability and group descriptions.

**Effort:** 16h · Intermediate

- **SVM margins, kernels, C and feature scale:** Extend the project with SVM margins, kernels, C and feature scale in Customer behavior segmentation. Adapt this focused lab to the project data: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.  Required concepts: Separating margin, Soft-margin C, Kernel similarity, Scale and preprocessing, Compute and probability caveats.
  - Deliverable: SVM margins, kernels, C and feature scale: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A clustering comparison with stability and group descriptions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SVM margins, kernels, C and feature scale: SVM margins, kernels, C and feature scale: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare multiple seeds and explain why silhouette alone is insufficient.
- [ ] SVM margins, kernels, C and feature scale: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Household energy forecasting

A planner needs next-day demand estimates with honest validation.

**Data:** Generate 365 daily demand values with seasonality and noise. Use a fixed seed and keep evaluation cases separate.

**Output:** A chronological forecast benchmark and residual report.

**Effort:** 16h · Intermediate

- **SVM margins, kernels, C and feature scale:** Extend the project with SVM margins, kernels, C and feature scale in Household energy forecasting. Adapt this focused lab to the project data: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set. Predict next-day energy demand; keep the same target and splits across model comparisons. Required concepts: Separating margin, Soft-margin C, Kernel similarity, Scale and preprocessing, Compute and probability caveats.
  - Deliverable: SVM margins, kernels, C and feature scale: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chronological forecast benchmark and residual report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SVM margins, kernels, C and feature scale: SVM margins, kernels, C and feature scale: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Beat or explain failure against last-week demand on a future holdout.
- [ ] SVM margins, kernels, C and feature scale: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature contribution audit

A reviewer needs to investigate reliance on a suspicious feature.

**Data:** Generate 400 labeled rows with one leakage feature and correlated proxies. Use a fixed seed and keep evaluation cases separate.

**Output:** An ablation and permutation-importance report.

**Effort:** 16h · Intermediate

- **SVM margins, kernels, C and feature scale:** Extend the project with SVM margins, kernels, C and feature scale in Feature contribution audit. Adapt this focused lab to the project data: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set. Predict generated binary outcome with the leakage field excluded; keep the same target and splits across model comparisons. Required concepts: Separating margin, Soft-margin C, Kernel similarity, Scale and preprocessing, Compute and probability caveats.
  - Deliverable: SVM margins, kernels, C and feature scale: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An ablation and permutation-importance report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SVM margins, kernels, C and feature scale: SVM margins, kernels, C and feature scale: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare held-out performance before/after leakage removal and explain correlation caveats.
- [ ] SVM margins, kernels, C and feature scale: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory movement anomaly detector

A stock manager needs unusual movements flagged for review.

**Data:** Generate 500 movements with 30 labeled injected anomalies. Use a fixed seed and keep evaluation cases separate.

**Output:** An anomaly ranking and threshold investigation notebook.

**Effort:** 16h · Intermediate

- **SVM margins, kernels, C and feature scale:** Extend the project with SVM margins, kernels, C and feature scale in Inventory movement anomaly detector. Adapt this focused lab to the project data: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set. Predict injected anomaly flag; keep the same target and splits across model comparisons. Required concepts: Separating margin, Soft-margin C, Kernel similarity, Scale and preprocessing, Compute and probability caveats.
  - Deliverable: SVM margins, kernels, C and feature scale: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An anomaly ranking and threshold investigation notebook. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SVM margins, kernels, C and feature scale: SVM margins, kernels, C and feature scale: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report precision at a fixed review budget and inspect false alerts.
- [ ] SVM margins, kernels, C and feature scale: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Nearest example explanation service

A learner needs predictions with inspectable reference examples.

**Data:** Use scikit-learn digits with a fixed train/test split. Use a fixed seed and keep evaluation cases separate.

**Output:** A kNN classifier that returns neighbors and distance explanations.

**Effort:** 16h · Intermediate

- **SVM margins, kernels, C and feature scale:** Extend the project with SVM margins, kernels, C and feature scale in Nearest example explanation service. Adapt this focused lab to the project data: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set. Predict digit class; keep the same target and splits across model comparisons. Required concepts: Separating margin, Soft-margin C, Kernel similarity, Scale and preprocessing, Compute and probability caveats.
  - Deliverable: SVM margins, kernels, C and feature scale: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A kNN classifier that returns neighbors and distance explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SVM margins, kernels, C and feature scale: SVM margins, kernels, C and feature scale: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test scaling, ties and out-of-distribution inputs; record latency.
- [ ] SVM margins, kernels, C and feature scale: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible model selection bench

A teammate needs to compare preprocessing and estimator choices fairly.

**Data:** Use scikit-learn built-in wine data. Use a fixed seed and keep evaluation cases separate.

**Output:** A cross-validated search with persisted pipeline and inference script.

**Effort:** 16h · Intermediate

- **SVM margins, kernels, C and feature scale:** Extend the project with SVM margins, kernels, C and feature scale in Reproducible model selection bench. Adapt this focused lab to the project data: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set. Predict wine class; keep the same target and splits across model comparisons. Required concepts: Separating margin, Soft-margin C, Kernel similarity, Scale and preprocessing, Compute and probability caveats.
  - Deliverable: SVM margins, kernels, C and feature scale: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cross-validated search with persisted pipeline and inference script. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SVM margins, kernels, C and feature scale: SVM margins, kernels, C and feature scale: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep the final holdout untouched until selection and reproduce predictions after reload.
- [ ] SVM margins, kernels, C and feature scale: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Rare event threshold workbench

An operator needs a controllable false-alert budget.

**Data:** Generate 1000 binary-labeled observations with 5 percent positives. Use a fixed seed and keep evaluation cases separate.

**Output:** A calibrated classifier and threshold tradeoff dashboard.

**Effort:** 16h · Intermediate

- **SVM margins, kernels, C and feature scale:** Extend the project with SVM margins, kernels, C and feature scale in Rare event threshold workbench. Adapt this focused lab to the project data: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set. Predict rare event label; keep the same target and splits across model comparisons. Required concepts: Separating margin, Soft-margin C, Kernel similarity, Scale and preprocessing, Compute and probability caveats.
  - Deliverable: SVM margins, kernels, C and feature scale: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A calibrated classifier and threshold tradeoff dashboard. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SVM margins, kernels, C and feature scale: SVM margins, kernels, C and feature scale: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Choose thresholds on validation only and publish confusion matrices.
- [ ] SVM margins, kernels, C and feature scale: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket model comparison

A support lead needs category suggestions with human review for ambiguity.

**Data:** Generate 180 labeled login, billing and setup tickets with paraphrases. Use a fixed seed and keep evaluation cases separate.

**Output:** A classifier comparison, error slices and a review threshold.

**Effort:** 16h · Intermediate

- **SVM margins, kernels, C and feature scale:** Extend the project with SVM margins, kernels, C and feature scale in Support ticket model comparison. Adapt this focused lab to the project data: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set. Predict ticket category (login, billing, setup); keep the same target and splits across model comparisons. Required concepts: Separating margin, Soft-margin C, Kernel similarity, Scale and preprocessing, Compute and probability caveats.
  - Deliverable: SVM margins, kernels, C and feature scale: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A classifier comparison, error slices and a review threshold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SVM margins, kernels, C and feature scale: SVM margins, kernels, C and feature scale: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Hold out templates, compare a dummy baseline and report macro F1.
- [ ] SVM margins, kernels, C and feature scale: Fit linear and RBF SVMs on a small generated two-dimensional dataset using a scaling pipeline. Plot support vectors, compare a bounded C/gamma search and evaluate one selected configuration on an untouched test set.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Time and anomaly tasks

<a id="ml-time-anomalies"></a>

### Time-series validation and anomaly-detection baselines

Handle ordered observations and rare events without training on future information.

**Priority:** Foundation · **Study:** 3h · **Practice:** 4h

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

### Household energy forecasting

A planner needs next-day demand estimates with honest validation.

**Data:** Generate 365 daily demand values with seasonality and noise. Use a fixed seed and keep evaluation cases separate.

**Output:** A chronological forecast benchmark and residual report.

**Effort:** 16h · Intermediate

- **Time-series validation and anomaly-detection baselines:** Implement Time-series validation and anomaly-detection baselines in Household energy forecasting. Adapt this focused lab to the project data: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume. Predict next-day energy demand; keep the same target and splits across model comparisons. Required concepts: Forecast horizon and lag features, Walk-forward evaluation, Seasonal naive baseline, Anomaly score versus label, Alert evaluation.
  - Deliverable: Time-series validation and anomaly-detection baselines: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chronological forecast benchmark and residual report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Time-series validation and anomaly-detection baselines: Time-series validation and anomaly-detection baselines: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Beat or explain failure against last-week demand on a future holdout.
- [ ] Time-series validation and anomaly-detection baselines: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory movement anomaly detector

A stock manager needs unusual movements flagged for review.

**Data:** Generate 500 movements with 30 labeled injected anomalies. Use a fixed seed and keep evaluation cases separate.

**Output:** An anomaly ranking and threshold investigation notebook.

**Effort:** 16h · Intermediate

- **Time-series validation and anomaly-detection baselines:** Implement Time-series validation and anomaly-detection baselines in Inventory movement anomaly detector. Adapt this focused lab to the project data: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume. Predict injected anomaly flag; keep the same target and splits across model comparisons. Required concepts: Forecast horizon and lag features, Walk-forward evaluation, Seasonal naive baseline, Anomaly score versus label, Alert evaluation.
  - Deliverable: Time-series validation and anomaly-detection baselines: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An anomaly ranking and threshold investigation notebook. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Time-series validation and anomaly-detection baselines: Time-series validation and anomaly-detection baselines: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report precision at a fixed review budget and inspect false alerts.
- [ ] Time-series validation and anomaly-detection baselines: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Subscription retention baseline

An analyst needs an educational estimate of likely account cancellation.

**Data:** Generate 500 fictional accounts with a binary cancellation label. Use a fixed seed and keep evaluation cases separate.

**Output:** A leakage-safe preprocessing and classification pipeline.

**Effort:** 16h · Intermediate

- **Time-series validation and anomaly-detection baselines:** Extend the project with Time-series validation and anomaly-detection baselines in Subscription retention baseline. Adapt this focused lab to the project data: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume. Predict fictional cancellation label; keep the same target and splits across model comparisons. Required concepts: Forecast horizon and lag features, Walk-forward evaluation, Seasonal naive baseline, Anomaly score versus label, Alert evaluation.
  - Deliverable: Time-series validation and anomaly-detection baselines: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A leakage-safe preprocessing and classification pipeline. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Time-series validation and anomaly-detection baselines: Time-series validation and anomaly-detection baselines: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude post-cancellation fields and report PR AUC plus calibration.
- [ ] Time-series validation and anomaly-detection baselines: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Customer behavior segmentation

A researcher needs interpretable groups without invented ground truth.

**Data:** Generate 300 fictional usage vectors with three overlapping clusters. Use a fixed seed and keep evaluation cases separate.

**Output:** A clustering comparison with stability and group descriptions.

**Effort:** 16h · Intermediate

- **Time-series validation and anomaly-detection baselines:** Extend the project with Time-series validation and anomaly-detection baselines in Customer behavior segmentation. Adapt this focused lab to the project data: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.  Required concepts: Forecast horizon and lag features, Walk-forward evaluation, Seasonal naive baseline, Anomaly score versus label, Alert evaluation.
  - Deliverable: Time-series validation and anomaly-detection baselines: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A clustering comparison with stability and group descriptions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Time-series validation and anomaly-detection baselines: Time-series validation and anomaly-detection baselines: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare multiple seeds and explain why silhouette alone is insufficient.
- [ ] Time-series validation and anomaly-detection baselines: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature contribution audit

A reviewer needs to investigate reliance on a suspicious feature.

**Data:** Generate 400 labeled rows with one leakage feature and correlated proxies. Use a fixed seed and keep evaluation cases separate.

**Output:** An ablation and permutation-importance report.

**Effort:** 16h · Intermediate

- **Time-series validation and anomaly-detection baselines:** Extend the project with Time-series validation and anomaly-detection baselines in Feature contribution audit. Adapt this focused lab to the project data: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume. Predict generated binary outcome with the leakage field excluded; keep the same target and splits across model comparisons. Required concepts: Forecast horizon and lag features, Walk-forward evaluation, Seasonal naive baseline, Anomaly score versus label, Alert evaluation.
  - Deliverable: Time-series validation and anomaly-detection baselines: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An ablation and permutation-importance report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Time-series validation and anomaly-detection baselines: Time-series validation and anomaly-detection baselines: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare held-out performance before/after leakage removal and explain correlation caveats.
- [ ] Time-series validation and anomaly-detection baselines: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Kernel decision boundary lab

A learner needs to understand when a nonlinear classifier helps.

**Data:** Use scikit-learn make_moons at three noise levels. Use a fixed seed and keep evaluation cases separate.

**Output:** A linear versus RBF SVM comparison with boundary plots.

**Effort:** 16h · Intermediate

- **Time-series validation and anomaly-detection baselines:** Extend the project with Time-series validation and anomaly-detection baselines in Kernel decision boundary lab. Adapt this focused lab to the project data: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume. Predict generated moon class; keep the same target and splits across model comparisons. Required concepts: Forecast horizon and lag features, Walk-forward evaluation, Seasonal naive baseline, Anomaly score versus label, Alert evaluation.
  - Deliverable: Time-series validation and anomaly-detection baselines: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A linear versus RBF SVM comparison with boundary plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Time-series validation and anomaly-detection baselines: Time-series validation and anomaly-detection baselines: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Use nested tuning and report held-out errors and support-vector counts.
- [ ] Time-series validation and anomaly-detection baselines: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Nearest example explanation service

A learner needs predictions with inspectable reference examples.

**Data:** Use scikit-learn digits with a fixed train/test split. Use a fixed seed and keep evaluation cases separate.

**Output:** A kNN classifier that returns neighbors and distance explanations.

**Effort:** 16h · Intermediate

- **Time-series validation and anomaly-detection baselines:** Extend the project with Time-series validation and anomaly-detection baselines in Nearest example explanation service. Adapt this focused lab to the project data: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume. Predict digit class; keep the same target and splits across model comparisons. Required concepts: Forecast horizon and lag features, Walk-forward evaluation, Seasonal naive baseline, Anomaly score versus label, Alert evaluation.
  - Deliverable: Time-series validation and anomaly-detection baselines: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A kNN classifier that returns neighbors and distance explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Time-series validation and anomaly-detection baselines: Time-series validation and anomaly-detection baselines: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test scaling, ties and out-of-distribution inputs; record latency.
- [ ] Time-series validation and anomaly-detection baselines: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible model selection bench

A teammate needs to compare preprocessing and estimator choices fairly.

**Data:** Use scikit-learn built-in wine data. Use a fixed seed and keep evaluation cases separate.

**Output:** A cross-validated search with persisted pipeline and inference script.

**Effort:** 16h · Intermediate

- **Time-series validation and anomaly-detection baselines:** Extend the project with Time-series validation and anomaly-detection baselines in Reproducible model selection bench. Adapt this focused lab to the project data: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume. Predict wine class; keep the same target and splits across model comparisons. Required concepts: Forecast horizon and lag features, Walk-forward evaluation, Seasonal naive baseline, Anomaly score versus label, Alert evaluation.
  - Deliverable: Time-series validation and anomaly-detection baselines: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cross-validated search with persisted pipeline and inference script. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Time-series validation and anomaly-detection baselines: Time-series validation and anomaly-detection baselines: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep the final holdout untouched until selection and reproduce predictions after reload.
- [ ] Time-series validation and anomaly-detection baselines: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Rare event threshold workbench

An operator needs a controllable false-alert budget.

**Data:** Generate 1000 binary-labeled observations with 5 percent positives. Use a fixed seed and keep evaluation cases separate.

**Output:** A calibrated classifier and threshold tradeoff dashboard.

**Effort:** 16h · Intermediate

- **Time-series validation and anomaly-detection baselines:** Extend the project with Time-series validation and anomaly-detection baselines in Rare event threshold workbench. Adapt this focused lab to the project data: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume. Predict rare event label; keep the same target and splits across model comparisons. Required concepts: Forecast horizon and lag features, Walk-forward evaluation, Seasonal naive baseline, Anomaly score versus label, Alert evaluation.
  - Deliverable: Time-series validation and anomaly-detection baselines: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A calibrated classifier and threshold tradeoff dashboard. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Time-series validation and anomaly-detection baselines: Time-series validation and anomaly-detection baselines: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Choose thresholds on validation only and publish confusion matrices.
- [ ] Time-series validation and anomaly-detection baselines: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket model comparison

A support lead needs category suggestions with human review for ambiguity.

**Data:** Generate 180 labeled login, billing and setup tickets with paraphrases. Use a fixed seed and keep evaluation cases separate.

**Output:** A classifier comparison, error slices and a review threshold.

**Effort:** 16h · Intermediate

- **Time-series validation and anomaly-detection baselines:** Extend the project with Time-series validation and anomaly-detection baselines in Support ticket model comparison. Adapt this focused lab to the project data: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume. Predict ticket category (login, billing, setup); keep the same target and splits across model comparisons. Required concepts: Forecast horizon and lag features, Walk-forward evaluation, Seasonal naive baseline, Anomaly score versus label, Alert evaluation.
  - Deliverable: Time-series validation and anomaly-detection baselines: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A classifier comparison, error slices and a review threshold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Time-series validation and anomaly-detection baselines: Time-series validation and anomaly-detection baselines: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Hold out templates, compare a dummy baseline and report macro F1.
- [ ] Time-series validation and anomaly-detection baselines: Generate a seasonal count series with injected event intervals. Build lag features, run walk-forward evaluation and compare a seasonal naive baseline with a small model; report anomaly event coverage and alert volume.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Unsupervised learning in detail

<a id="ml-cluster-validation"></a>

### K-means, density clustering and PCA diagnostics

Interpret unsupervised outputs in terms of assumptions instead of treating every cluster label as a discovered truth.

**Priority:** Foundation · **Study:** 3h · **Practice:** 4h

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

### Customer behavior segmentation

A researcher needs interpretable groups without invented ground truth.

**Data:** Generate 300 fictional usage vectors with three overlapping clusters. Use a fixed seed and keep evaluation cases separate.

**Output:** A clustering comparison with stability and group descriptions.

**Effort:** 16h · Intermediate

- **K-means, density clustering and PCA diagnostics:** Implement K-means, density clustering and PCA diagnostics in Customer behavior segmentation. Adapt this focused lab to the project data: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.  Required concepts: K-means objective, Initialisation and stability, Density and noise, Silhouette limitations, PCA variance versus usefulness.
  - Deliverable: K-means, density clustering and PCA diagnostics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A clustering comparison with stability and group descriptions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · K-means, density clustering and PCA diagnostics: K-means, density clustering and PCA diagnostics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare multiple seeds and explain why silhouette alone is insufficient.
- [ ] K-means, density clustering and PCA diagnostics: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Subscription retention baseline

An analyst needs an educational estimate of likely account cancellation.

**Data:** Generate 500 fictional accounts with a binary cancellation label. Use a fixed seed and keep evaluation cases separate.

**Output:** A leakage-safe preprocessing and classification pipeline.

**Effort:** 16h · Intermediate

- **K-means, density clustering and PCA diagnostics:** Extend the project with K-means, density clustering and PCA diagnostics in Subscription retention baseline. Adapt this focused lab to the project data: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive. Predict fictional cancellation label; keep the same target and splits across model comparisons. Required concepts: K-means objective, Initialisation and stability, Density and noise, Silhouette limitations, PCA variance versus usefulness.
  - Deliverable: K-means, density clustering and PCA diagnostics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A leakage-safe preprocessing and classification pipeline. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · K-means, density clustering and PCA diagnostics: K-means, density clustering and PCA diagnostics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude post-cancellation fields and report PR AUC plus calibration.
- [ ] K-means, density clustering and PCA diagnostics: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Household energy forecasting

A planner needs next-day demand estimates with honest validation.

**Data:** Generate 365 daily demand values with seasonality and noise. Use a fixed seed and keep evaluation cases separate.

**Output:** A chronological forecast benchmark and residual report.

**Effort:** 16h · Intermediate

- **K-means, density clustering and PCA diagnostics:** Extend the project with K-means, density clustering and PCA diagnostics in Household energy forecasting. Adapt this focused lab to the project data: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive. Predict next-day energy demand; keep the same target and splits across model comparisons. Required concepts: K-means objective, Initialisation and stability, Density and noise, Silhouette limitations, PCA variance versus usefulness.
  - Deliverable: K-means, density clustering and PCA diagnostics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chronological forecast benchmark and residual report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · K-means, density clustering and PCA diagnostics: K-means, density clustering and PCA diagnostics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Beat or explain failure against last-week demand on a future holdout.
- [ ] K-means, density clustering and PCA diagnostics: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature contribution audit

A reviewer needs to investigate reliance on a suspicious feature.

**Data:** Generate 400 labeled rows with one leakage feature and correlated proxies. Use a fixed seed and keep evaluation cases separate.

**Output:** An ablation and permutation-importance report.

**Effort:** 16h · Intermediate

- **K-means, density clustering and PCA diagnostics:** Extend the project with K-means, density clustering and PCA diagnostics in Feature contribution audit. Adapt this focused lab to the project data: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive. Predict generated binary outcome with the leakage field excluded; keep the same target and splits across model comparisons. Required concepts: K-means objective, Initialisation and stability, Density and noise, Silhouette limitations, PCA variance versus usefulness.
  - Deliverable: K-means, density clustering and PCA diagnostics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An ablation and permutation-importance report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · K-means, density clustering and PCA diagnostics: K-means, density clustering and PCA diagnostics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare held-out performance before/after leakage removal and explain correlation caveats.
- [ ] K-means, density clustering and PCA diagnostics: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory movement anomaly detector

A stock manager needs unusual movements flagged for review.

**Data:** Generate 500 movements with 30 labeled injected anomalies. Use a fixed seed and keep evaluation cases separate.

**Output:** An anomaly ranking and threshold investigation notebook.

**Effort:** 16h · Intermediate

- **K-means, density clustering and PCA diagnostics:** Extend the project with K-means, density clustering and PCA diagnostics in Inventory movement anomaly detector. Adapt this focused lab to the project data: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive. Predict injected anomaly flag; keep the same target and splits across model comparisons. Required concepts: K-means objective, Initialisation and stability, Density and noise, Silhouette limitations, PCA variance versus usefulness.
  - Deliverable: K-means, density clustering and PCA diagnostics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An anomaly ranking and threshold investigation notebook. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · K-means, density clustering and PCA diagnostics: K-means, density clustering and PCA diagnostics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report precision at a fixed review budget and inspect false alerts.
- [ ] K-means, density clustering and PCA diagnostics: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Kernel decision boundary lab

A learner needs to understand when a nonlinear classifier helps.

**Data:** Use scikit-learn make_moons at three noise levels. Use a fixed seed and keep evaluation cases separate.

**Output:** A linear versus RBF SVM comparison with boundary plots.

**Effort:** 16h · Intermediate

- **K-means, density clustering and PCA diagnostics:** Extend the project with K-means, density clustering and PCA diagnostics in Kernel decision boundary lab. Adapt this focused lab to the project data: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive. Predict generated moon class; keep the same target and splits across model comparisons. Required concepts: K-means objective, Initialisation and stability, Density and noise, Silhouette limitations, PCA variance versus usefulness.
  - Deliverable: K-means, density clustering and PCA diagnostics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A linear versus RBF SVM comparison with boundary plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · K-means, density clustering and PCA diagnostics: K-means, density clustering and PCA diagnostics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Use nested tuning and report held-out errors and support-vector counts.
- [ ] K-means, density clustering and PCA diagnostics: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Nearest example explanation service

A learner needs predictions with inspectable reference examples.

**Data:** Use scikit-learn digits with a fixed train/test split. Use a fixed seed and keep evaluation cases separate.

**Output:** A kNN classifier that returns neighbors and distance explanations.

**Effort:** 16h · Intermediate

- **K-means, density clustering and PCA diagnostics:** Extend the project with K-means, density clustering and PCA diagnostics in Nearest example explanation service. Adapt this focused lab to the project data: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive. Predict digit class; keep the same target and splits across model comparisons. Required concepts: K-means objective, Initialisation and stability, Density and noise, Silhouette limitations, PCA variance versus usefulness.
  - Deliverable: K-means, density clustering and PCA diagnostics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A kNN classifier that returns neighbors and distance explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · K-means, density clustering and PCA diagnostics: K-means, density clustering and PCA diagnostics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test scaling, ties and out-of-distribution inputs; record latency.
- [ ] K-means, density clustering and PCA diagnostics: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible model selection bench

A teammate needs to compare preprocessing and estimator choices fairly.

**Data:** Use scikit-learn built-in wine data. Use a fixed seed and keep evaluation cases separate.

**Output:** A cross-validated search with persisted pipeline and inference script.

**Effort:** 16h · Intermediate

- **K-means, density clustering and PCA diagnostics:** Extend the project with K-means, density clustering and PCA diagnostics in Reproducible model selection bench. Adapt this focused lab to the project data: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive. Predict wine class; keep the same target and splits across model comparisons. Required concepts: K-means objective, Initialisation and stability, Density and noise, Silhouette limitations, PCA variance versus usefulness.
  - Deliverable: K-means, density clustering and PCA diagnostics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cross-validated search with persisted pipeline and inference script. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · K-means, density clustering and PCA diagnostics: K-means, density clustering and PCA diagnostics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep the final holdout untouched until selection and reproduce predictions after reload.
- [ ] K-means, density clustering and PCA diagnostics: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Rare event threshold workbench

An operator needs a controllable false-alert budget.

**Data:** Generate 1000 binary-labeled observations with 5 percent positives. Use a fixed seed and keep evaluation cases separate.

**Output:** A calibrated classifier and threshold tradeoff dashboard.

**Effort:** 16h · Intermediate

- **K-means, density clustering and PCA diagnostics:** Extend the project with K-means, density clustering and PCA diagnostics in Rare event threshold workbench. Adapt this focused lab to the project data: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive. Predict rare event label; keep the same target and splits across model comparisons. Required concepts: K-means objective, Initialisation and stability, Density and noise, Silhouette limitations, PCA variance versus usefulness.
  - Deliverable: K-means, density clustering and PCA diagnostics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A calibrated classifier and threshold tradeoff dashboard. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · K-means, density clustering and PCA diagnostics: K-means, density clustering and PCA diagnostics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Choose thresholds on validation only and publish confusion matrices.
- [ ] K-means, density clustering and PCA diagnostics: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket model comparison

A support lead needs category suggestions with human review for ambiguity.

**Data:** Generate 180 labeled login, billing and setup tickets with paraphrases. Use a fixed seed and keep evaluation cases separate.

**Output:** A classifier comparison, error slices and a review threshold.

**Effort:** 16h · Intermediate

- **K-means, density clustering and PCA diagnostics:** Extend the project with K-means, density clustering and PCA diagnostics in Support ticket model comparison. Adapt this focused lab to the project data: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive. Predict ticket category (login, billing, setup); keep the same target and splits across model comparisons. Required concepts: K-means objective, Initialisation and stability, Density and noise, Silhouette limitations, PCA variance versus usefulness.
  - Deliverable: K-means, density clustering and PCA diagnostics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A classifier comparison, error slices and a review threshold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · K-means, density clustering and PCA diagnostics: K-means, density clustering and PCA diagnostics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Hold out templates, compare a dummy baseline and report macro F1.
- [ ] K-means, density clustering and PCA diagnostics: Compare K-means and DBSCAN on three generated shapes using explicit scaling. Report noise fraction, stability across seeds and silhouette where valid, then show a PCA example in which the highest-variance direction is not the most predictive.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## kNN, distance weighting and dimensionality

<a id="ml-knn-distance"></a>

### kNN, distance weighting and dimensionality

kNN, distance weighting and dimensionality helps you make explainable engineering decisions and test failure cases. Build the experiment below before relying on the concept in an AI system.

**Priority:** Foundation · **Study:** 4h · **Practice:** 5h

**Prerequisites:** [kNN, SVM, clustering and PCA](ml.md#ml-neighbors) Navigation is unrestricted.

#### Concepts

- [ ] **Distance metrics:** Euclidean and Manhattan distance encode different notions of proximity.
  - Example: Compare nearest neighbors before and after multiplying one feature by 100.
  - Videos:
    - [K-Nearest Neighbors](https://www.youtube.com/watch?v=HVXime0nQeI) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on distance metrics. Then reproduce the lesson example: Compare nearest neighbors before and after multiplying one feature by 100.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on distance metrics. Then reproduce the lesson example: Compare nearest neighbors before and after multiplying one feature by 100.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Choosing k:** Small k follows local details while large k smooths decisions and can erase minority regions.
  - Example: Plot validation error across odd k values on one fixed split.
  - Videos:
    - [K-Nearest Neighbors](https://www.youtube.com/watch?v=HVXime0nQeI) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on choosing k. Then reproduce the lesson example: Plot validation error across odd k values on one fixed split.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on choosing k. Then reproduce the lesson example: Plot validation error across odd k values on one fixed split.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Weighted voting:** Distance weighting makes nearby neighbors contribute more strongly than distant ones.
  - Example: Handle an exact training-point match separately from inverse-distance voting.
  - Videos:
    - [K-Nearest Neighbors](https://www.youtube.com/watch?v=HVXime0nQeI) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on weighted voting. Then reproduce the lesson example: Handle an exact training-point match separately from inverse-distance voting.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on weighted voting. Then reproduce the lesson example: Handle an exact training-point match separately from inverse-distance voting.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Curse of dimensionality:** Distances can become less discriminative as irrelevant dimensions accumulate.
  - Example: Add 50 noise features and compare neighbor rankings and error.
  - Videos:
    - [K-Nearest Neighbors](https://www.youtube.com/watch?v=HVXime0nQeI) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on curse of dimensionality. Then reproduce the lesson example: Add 50 noise features and compare neighbor rankings and error.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on curse of dimensionality. Then reproduce the lesson example: Add 50 noise features and compare neighbor rankings and error.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Inference cost:** Brute-force neighbor search stores training examples and compares them at inference time.
  - Example: Measure query latency at three reference-set sizes.
  - Videos:
    - [K-Nearest Neighbors](https://www.youtube.com/watch?v=HVXime0nQeI) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on inference cost. Then reproduce the lesson example: Measure query latency at three reference-set sizes.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on inference cost. Then reproduce the lesson example: Measure query latency at three reference-set sizes.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### YouTube: focused explanations and full courses

- [K-Nearest Neighbors](https://www.youtube.com/watch?v=HVXime0nQeI) · StatQuest · Josh Starmer · Focused explanation
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

1. [Official reference: kNN, distance weighting and dimensionality](https://scikit-learn.org/stable/modules/neighbors.html) — Free reading; no registration required. Use the local CPU exercise; optional hosted services and downloads are not required..
2. [scikit-learn: neighbors](https://scikit-learn.org/stable/modules/neighbors.html) — Free; no registration required. No paid materials required.

#### Lab: kNN, distance weighting and dimensionality

Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point.

**Deliverables**

- Runnable CPU notebook or script with deterministic fixtures
- Measured outputs, failure cases and a README explaining decisions

**Completion checks**

- [ ] Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point.
- [ ] Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

#### Ten project recommendations

### Subscription retention baseline

An analyst needs an educational estimate of likely account cancellation.

**Data:** Generate 500 fictional accounts with a binary cancellation label. Use a fixed seed and keep evaluation cases separate.

**Output:** A leakage-safe preprocessing and classification pipeline.

**Effort:** 16h · Intermediate

- **kNN, distance weighting and dimensionality:** Extend the project with kNN, distance weighting and dimensionality in Subscription retention baseline. Adapt this focused lab to the project data: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point. Predict fictional cancellation label; keep the same target and splits across model comparisons. Required concepts: Distance metrics, Choosing k, Weighted voting, Curse of dimensionality, Inference cost.
  - Deliverable: kNN, distance weighting and dimensionality: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A leakage-safe preprocessing and classification pipeline. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · kNN, distance weighting and dimensionality: kNN, distance weighting and dimensionality: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude post-cancellation fields and report PR AUC plus calibration.
- [ ] kNN, distance weighting and dimensionality: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Customer behavior segmentation

A researcher needs interpretable groups without invented ground truth.

**Data:** Generate 300 fictional usage vectors with three overlapping clusters. Use a fixed seed and keep evaluation cases separate.

**Output:** A clustering comparison with stability and group descriptions.

**Effort:** 16h · Intermediate

- **kNN, distance weighting and dimensionality:** Extend the project with kNN, distance weighting and dimensionality in Customer behavior segmentation. Adapt this focused lab to the project data: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point.  Required concepts: Distance metrics, Choosing k, Weighted voting, Curse of dimensionality, Inference cost.
  - Deliverable: kNN, distance weighting and dimensionality: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A clustering comparison with stability and group descriptions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · kNN, distance weighting and dimensionality: kNN, distance weighting and dimensionality: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare multiple seeds and explain why silhouette alone is insufficient.
- [ ] kNN, distance weighting and dimensionality: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Household energy forecasting

A planner needs next-day demand estimates with honest validation.

**Data:** Generate 365 daily demand values with seasonality and noise. Use a fixed seed and keep evaluation cases separate.

**Output:** A chronological forecast benchmark and residual report.

**Effort:** 16h · Intermediate

- **kNN, distance weighting and dimensionality:** Extend the project with kNN, distance weighting and dimensionality in Household energy forecasting. Adapt this focused lab to the project data: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point. Predict next-day energy demand; keep the same target and splits across model comparisons. Required concepts: Distance metrics, Choosing k, Weighted voting, Curse of dimensionality, Inference cost.
  - Deliverable: kNN, distance weighting and dimensionality: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chronological forecast benchmark and residual report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · kNN, distance weighting and dimensionality: kNN, distance weighting and dimensionality: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Beat or explain failure against last-week demand on a future holdout.
- [ ] kNN, distance weighting and dimensionality: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature contribution audit

A reviewer needs to investigate reliance on a suspicious feature.

**Data:** Generate 400 labeled rows with one leakage feature and correlated proxies. Use a fixed seed and keep evaluation cases separate.

**Output:** An ablation and permutation-importance report.

**Effort:** 16h · Intermediate

- **kNN, distance weighting and dimensionality:** Extend the project with kNN, distance weighting and dimensionality in Feature contribution audit. Adapt this focused lab to the project data: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point. Predict generated binary outcome with the leakage field excluded; keep the same target and splits across model comparisons. Required concepts: Distance metrics, Choosing k, Weighted voting, Curse of dimensionality, Inference cost.
  - Deliverable: kNN, distance weighting and dimensionality: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An ablation and permutation-importance report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · kNN, distance weighting and dimensionality: kNN, distance weighting and dimensionality: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare held-out performance before/after leakage removal and explain correlation caveats.
- [ ] kNN, distance weighting and dimensionality: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory movement anomaly detector

A stock manager needs unusual movements flagged for review.

**Data:** Generate 500 movements with 30 labeled injected anomalies. Use a fixed seed and keep evaluation cases separate.

**Output:** An anomaly ranking and threshold investigation notebook.

**Effort:** 16h · Intermediate

- **kNN, distance weighting and dimensionality:** Extend the project with kNN, distance weighting and dimensionality in Inventory movement anomaly detector. Adapt this focused lab to the project data: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point. Predict injected anomaly flag; keep the same target and splits across model comparisons. Required concepts: Distance metrics, Choosing k, Weighted voting, Curse of dimensionality, Inference cost.
  - Deliverable: kNN, distance weighting and dimensionality: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An anomaly ranking and threshold investigation notebook. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · kNN, distance weighting and dimensionality: kNN, distance weighting and dimensionality: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report precision at a fixed review budget and inspect false alerts.
- [ ] kNN, distance weighting and dimensionality: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Kernel decision boundary lab

A learner needs to understand when a nonlinear classifier helps.

**Data:** Use scikit-learn make_moons at three noise levels. Use a fixed seed and keep evaluation cases separate.

**Output:** A linear versus RBF SVM comparison with boundary plots.

**Effort:** 16h · Intermediate

- **kNN, distance weighting and dimensionality:** Extend the project with kNN, distance weighting and dimensionality in Kernel decision boundary lab. Adapt this focused lab to the project data: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point. Predict generated moon class; keep the same target and splits across model comparisons. Required concepts: Distance metrics, Choosing k, Weighted voting, Curse of dimensionality, Inference cost.
  - Deliverable: kNN, distance weighting and dimensionality: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A linear versus RBF SVM comparison with boundary plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · kNN, distance weighting and dimensionality: kNN, distance weighting and dimensionality: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Use nested tuning and report held-out errors and support-vector counts.
- [ ] kNN, distance weighting and dimensionality: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Nearest example explanation service

A learner needs predictions with inspectable reference examples.

**Data:** Use scikit-learn digits with a fixed train/test split. Use a fixed seed and keep evaluation cases separate.

**Output:** A kNN classifier that returns neighbors and distance explanations.

**Effort:** 16h · Intermediate

- **kNN, distance weighting and dimensionality:** Extend the project with kNN, distance weighting and dimensionality in Nearest example explanation service. Adapt this focused lab to the project data: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point. Predict digit class; keep the same target and splits across model comparisons. Required concepts: Distance metrics, Choosing k, Weighted voting, Curse of dimensionality, Inference cost.
  - Deliverable: kNN, distance weighting and dimensionality: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A kNN classifier that returns neighbors and distance explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · kNN, distance weighting and dimensionality: kNN, distance weighting and dimensionality: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test scaling, ties and out-of-distribution inputs; record latency.
- [ ] kNN, distance weighting and dimensionality: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible model selection bench

A teammate needs to compare preprocessing and estimator choices fairly.

**Data:** Use scikit-learn built-in wine data. Use a fixed seed and keep evaluation cases separate.

**Output:** A cross-validated search with persisted pipeline and inference script.

**Effort:** 16h · Intermediate

- **kNN, distance weighting and dimensionality:** Extend the project with kNN, distance weighting and dimensionality in Reproducible model selection bench. Adapt this focused lab to the project data: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point. Predict wine class; keep the same target and splits across model comparisons. Required concepts: Distance metrics, Choosing k, Weighted voting, Curse of dimensionality, Inference cost.
  - Deliverable: kNN, distance weighting and dimensionality: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cross-validated search with persisted pipeline and inference script. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · kNN, distance weighting and dimensionality: kNN, distance weighting and dimensionality: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep the final holdout untouched until selection and reproduce predictions after reload.
- [ ] kNN, distance weighting and dimensionality: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Rare event threshold workbench

An operator needs a controllable false-alert budget.

**Data:** Generate 1000 binary-labeled observations with 5 percent positives. Use a fixed seed and keep evaluation cases separate.

**Output:** A calibrated classifier and threshold tradeoff dashboard.

**Effort:** 16h · Intermediate

- **kNN, distance weighting and dimensionality:** Extend the project with kNN, distance weighting and dimensionality in Rare event threshold workbench. Adapt this focused lab to the project data: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point. Predict rare event label; keep the same target and splits across model comparisons. Required concepts: Distance metrics, Choosing k, Weighted voting, Curse of dimensionality, Inference cost.
  - Deliverable: kNN, distance weighting and dimensionality: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A calibrated classifier and threshold tradeoff dashboard. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · kNN, distance weighting and dimensionality: kNN, distance weighting and dimensionality: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Choose thresholds on validation only and publish confusion matrices.
- [ ] kNN, distance weighting and dimensionality: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket model comparison

A support lead needs category suggestions with human review for ambiguity.

**Data:** Generate 180 labeled login, billing and setup tickets with paraphrases. Use a fixed seed and keep evaluation cases separate.

**Output:** A classifier comparison, error slices and a review threshold.

**Effort:** 16h · Intermediate

- **kNN, distance weighting and dimensionality:** Extend the project with kNN, distance weighting and dimensionality in Support ticket model comparison. Adapt this focused lab to the project data: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point. Predict ticket category (login, billing, setup); keep the same target and splits across model comparisons. Required concepts: Distance metrics, Choosing k, Weighted voting, Curse of dimensionality, Inference cost.
  - Deliverable: kNN, distance weighting and dimensionality: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A classifier comparison, error slices and a review threshold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · kNN, distance weighting and dimensionality: kNN, distance weighting and dimensionality: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Hold out templates, compare a dummy baseline and report macro F1.
- [ ] kNN, distance weighting and dimensionality: Implement brute-force kNN on generated two-dimensional classes, then compare against scikit-learn. Tune k on validation only and test ties, scale changes and a distant unknown point.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## PCA, explained variance and reconstruction

<a id="ml-pca-reconstruction"></a>

### PCA, explained variance and reconstruction

PCA, explained variance and reconstruction helps you make explainable engineering decisions and test failure cases. Build the experiment below before relying on the concept in an AI system.

**Priority:** Foundation · **Study:** 4h · **Practice:** 5h

**Prerequisites:** [kNN, SVM, clustering and PCA](ml.md#ml-neighbors) Navigation is unrestricted.

#### Concepts

- [ ] **Centering:** PCA identifies directions of variation around the training mean.
  - Example: Subtract the training mean from both training and test rows.
  - Videos:
    - [Principal Component Analysis (PCA) Step-by-Step](https://www.youtube.com/watch?v=FgakZw6K1QQ) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on centering. Then reproduce the lesson example: Subtract the training mean from both training and test rows.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on centering. Then reproduce the lesson example: Subtract the training mean from both training and test rows.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Principal components:** Orthogonal directions maximize successively remaining variance.
  - Example: Rotate a correlated 2D cloud into its component coordinates.
  - Videos:
    - [Principal Component Analysis (PCA) Step-by-Step](https://www.youtube.com/watch?v=FgakZw6K1QQ) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on principal components. Then reproduce the lesson example: Rotate a correlated 2D cloud into its component coordinates.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on principal components. Then reproduce the lesson example: Rotate a correlated 2D cloud into its component coordinates.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Explained variance:** Variance ratios quantify retained training variation, not downstream predictive accuracy.
  - Example: Compare two components retaining 95 percent variance with classification results.
  - Videos:
    - [Principal Component Analysis (PCA) Step-by-Step](https://www.youtube.com/watch?v=FgakZw6K1QQ) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on explained variance. Then reproduce the lesson example: Compare two components retaining 95 percent variance with classification results.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on explained variance. Then reproduce the lesson example: Compare two components retaining 95 percent variance with classification results.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Reconstruction:** Projection followed by inverse transformation gives a low-rank approximation.
  - Example: Plot the held-out squared reconstruction error at ranks one and two.
  - Videos:
    - [Principal Component Analysis (PCA) Step-by-Step](https://www.youtube.com/watch?v=FgakZw6K1QQ) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on reconstruction. Then reproduce the lesson example: Plot the held-out squared reconstruction error at ranks one and two.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on reconstruction. Then reproduce the lesson example: Plot the held-out squared reconstruction error at ranks one and two.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Leakage and pipelines:** PCA must be fitted inside the training fold during model selection.
  - Example: Place scaling and PCA inside a cross-validation pipeline.
  - Videos:
    - [Principal Component Analysis (PCA) Step-by-Step](https://www.youtube.com/watch?v=FgakZw6K1QQ) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on leakage and pipelines. Then reproduce the lesson example: Place scaling and PCA inside a cross-validation pipeline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on leakage and pipelines. Then reproduce the lesson example: Place scaling and PCA inside a cross-validation pipeline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### YouTube: focused explanations and full courses

- [Principal Component Analysis (PCA) Step-by-Step](https://www.youtube.com/watch?v=FgakZw6K1QQ) · StatQuest · Josh Starmer · Focused explanation
  - Explains: A visual, step-by-step explanation of the topic named in the title.
  - Useful because: Use the worked intuition before writing the corresponding small experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://statquest.org/video_index.html
- [Linear algebra — full university course](https://www.youtube.com/watch?v=JnTa9XtvmfI) · freeCodeCamp · Long course · publisher describes 20h in two parts
  - Explains: Vectors, matrices, linear transformations and foundational linear algebra.
  - Useful because: Build the mathematical foundation for feature matrices, embeddings and neural layers.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/linear-algebra-full-course/
- [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
  - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
  - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/

#### Free written resources

1. [Official reference: PCA, explained variance and reconstruction](https://scikit-learn.org/stable/modules/decomposition.html#pca) — Free reading; no registration required. Use the local CPU exercise; optional hosted services and downloads are not required..
2. [scikit-learn: neighbors](https://scikit-learn.org/stable/modules/neighbors.html) — Free; no registration required. No paid materials required.

#### Lab: PCA, explained variance and reconstruction

Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector.

**Deliverables**

- Runnable CPU notebook or script with deterministic fixtures
- Measured outputs, failure cases and a README explaining decisions

**Completion checks**

- [ ] Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector.
- [ ] Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

#### Ten project recommendations

### Subscription retention baseline

An analyst needs an educational estimate of likely account cancellation.

**Data:** Generate 500 fictional accounts with a binary cancellation label. Use a fixed seed and keep evaluation cases separate.

**Output:** A leakage-safe preprocessing and classification pipeline.

**Effort:** 16h · Intermediate

- **PCA, explained variance and reconstruction:** Extend the project with PCA, explained variance and reconstruction in Subscription retention baseline. Adapt this focused lab to the project data: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector. Predict fictional cancellation label; keep the same target and splits across model comparisons. Required concepts: Centering, Principal components, Explained variance, Reconstruction, Leakage and pipelines.
  - Deliverable: PCA, explained variance and reconstruction: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A leakage-safe preprocessing and classification pipeline. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · PCA, explained variance and reconstruction: PCA, explained variance and reconstruction: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude post-cancellation fields and report PR AUC plus calibration.
- [ ] PCA, explained variance and reconstruction: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Customer behavior segmentation

A researcher needs interpretable groups without invented ground truth.

**Data:** Generate 300 fictional usage vectors with three overlapping clusters. Use a fixed seed and keep evaluation cases separate.

**Output:** A clustering comparison with stability and group descriptions.

**Effort:** 16h · Intermediate

- **PCA, explained variance and reconstruction:** Extend the project with PCA, explained variance and reconstruction in Customer behavior segmentation. Adapt this focused lab to the project data: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector.  Required concepts: Centering, Principal components, Explained variance, Reconstruction, Leakage and pipelines.
  - Deliverable: PCA, explained variance and reconstruction: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A clustering comparison with stability and group descriptions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · PCA, explained variance and reconstruction: PCA, explained variance and reconstruction: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare multiple seeds and explain why silhouette alone is insufficient.
- [ ] PCA, explained variance and reconstruction: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Household energy forecasting

A planner needs next-day demand estimates with honest validation.

**Data:** Generate 365 daily demand values with seasonality and noise. Use a fixed seed and keep evaluation cases separate.

**Output:** A chronological forecast benchmark and residual report.

**Effort:** 16h · Intermediate

- **PCA, explained variance and reconstruction:** Extend the project with PCA, explained variance and reconstruction in Household energy forecasting. Adapt this focused lab to the project data: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector. Predict next-day energy demand; keep the same target and splits across model comparisons. Required concepts: Centering, Principal components, Explained variance, Reconstruction, Leakage and pipelines.
  - Deliverable: PCA, explained variance and reconstruction: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chronological forecast benchmark and residual report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · PCA, explained variance and reconstruction: PCA, explained variance and reconstruction: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Beat or explain failure against last-week demand on a future holdout.
- [ ] PCA, explained variance and reconstruction: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature contribution audit

A reviewer needs to investigate reliance on a suspicious feature.

**Data:** Generate 400 labeled rows with one leakage feature and correlated proxies. Use a fixed seed and keep evaluation cases separate.

**Output:** An ablation and permutation-importance report.

**Effort:** 16h · Intermediate

- **PCA, explained variance and reconstruction:** Extend the project with PCA, explained variance and reconstruction in Feature contribution audit. Adapt this focused lab to the project data: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector. Predict generated binary outcome with the leakage field excluded; keep the same target and splits across model comparisons. Required concepts: Centering, Principal components, Explained variance, Reconstruction, Leakage and pipelines.
  - Deliverable: PCA, explained variance and reconstruction: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An ablation and permutation-importance report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · PCA, explained variance and reconstruction: PCA, explained variance and reconstruction: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare held-out performance before/after leakage removal and explain correlation caveats.
- [ ] PCA, explained variance and reconstruction: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory movement anomaly detector

A stock manager needs unusual movements flagged for review.

**Data:** Generate 500 movements with 30 labeled injected anomalies. Use a fixed seed and keep evaluation cases separate.

**Output:** An anomaly ranking and threshold investigation notebook.

**Effort:** 16h · Intermediate

- **PCA, explained variance and reconstruction:** Extend the project with PCA, explained variance and reconstruction in Inventory movement anomaly detector. Adapt this focused lab to the project data: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector. Predict injected anomaly flag; keep the same target and splits across model comparisons. Required concepts: Centering, Principal components, Explained variance, Reconstruction, Leakage and pipelines.
  - Deliverable: PCA, explained variance and reconstruction: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An anomaly ranking and threshold investigation notebook. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · PCA, explained variance and reconstruction: PCA, explained variance and reconstruction: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report precision at a fixed review budget and inspect false alerts.
- [ ] PCA, explained variance and reconstruction: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Kernel decision boundary lab

A learner needs to understand when a nonlinear classifier helps.

**Data:** Use scikit-learn make_moons at three noise levels. Use a fixed seed and keep evaluation cases separate.

**Output:** A linear versus RBF SVM comparison with boundary plots.

**Effort:** 16h · Intermediate

- **PCA, explained variance and reconstruction:** Extend the project with PCA, explained variance and reconstruction in Kernel decision boundary lab. Adapt this focused lab to the project data: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector. Predict generated moon class; keep the same target and splits across model comparisons. Required concepts: Centering, Principal components, Explained variance, Reconstruction, Leakage and pipelines.
  - Deliverable: PCA, explained variance and reconstruction: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A linear versus RBF SVM comparison with boundary plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · PCA, explained variance and reconstruction: PCA, explained variance and reconstruction: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Use nested tuning and report held-out errors and support-vector counts.
- [ ] PCA, explained variance and reconstruction: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Nearest example explanation service

A learner needs predictions with inspectable reference examples.

**Data:** Use scikit-learn digits with a fixed train/test split. Use a fixed seed and keep evaluation cases separate.

**Output:** A kNN classifier that returns neighbors and distance explanations.

**Effort:** 16h · Intermediate

- **PCA, explained variance and reconstruction:** Extend the project with PCA, explained variance and reconstruction in Nearest example explanation service. Adapt this focused lab to the project data: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector. Predict digit class; keep the same target and splits across model comparisons. Required concepts: Centering, Principal components, Explained variance, Reconstruction, Leakage and pipelines.
  - Deliverable: PCA, explained variance and reconstruction: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A kNN classifier that returns neighbors and distance explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · PCA, explained variance and reconstruction: PCA, explained variance and reconstruction: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test scaling, ties and out-of-distribution inputs; record latency.
- [ ] PCA, explained variance and reconstruction: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible model selection bench

A teammate needs to compare preprocessing and estimator choices fairly.

**Data:** Use scikit-learn built-in wine data. Use a fixed seed and keep evaluation cases separate.

**Output:** A cross-validated search with persisted pipeline and inference script.

**Effort:** 16h · Intermediate

- **PCA, explained variance and reconstruction:** Extend the project with PCA, explained variance and reconstruction in Reproducible model selection bench. Adapt this focused lab to the project data: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector. Predict wine class; keep the same target and splits across model comparisons. Required concepts: Centering, Principal components, Explained variance, Reconstruction, Leakage and pipelines.
  - Deliverable: PCA, explained variance and reconstruction: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cross-validated search with persisted pipeline and inference script. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · PCA, explained variance and reconstruction: PCA, explained variance and reconstruction: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep the final holdout untouched until selection and reproduce predictions after reload.
- [ ] PCA, explained variance and reconstruction: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Rare event threshold workbench

An operator needs a controllable false-alert budget.

**Data:** Generate 1000 binary-labeled observations with 5 percent positives. Use a fixed seed and keep evaluation cases separate.

**Output:** A calibrated classifier and threshold tradeoff dashboard.

**Effort:** 16h · Intermediate

- **PCA, explained variance and reconstruction:** Extend the project with PCA, explained variance and reconstruction in Rare event threshold workbench. Adapt this focused lab to the project data: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector. Predict rare event label; keep the same target and splits across model comparisons. Required concepts: Centering, Principal components, Explained variance, Reconstruction, Leakage and pipelines.
  - Deliverable: PCA, explained variance and reconstruction: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A calibrated classifier and threshold tradeoff dashboard. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · PCA, explained variance and reconstruction: PCA, explained variance and reconstruction: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Choose thresholds on validation only and publish confusion matrices.
- [ ] PCA, explained variance and reconstruction: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket model comparison

A support lead needs category suggestions with human review for ambiguity.

**Data:** Generate 180 labeled login, billing and setup tickets with paraphrases. Use a fixed seed and keep evaluation cases separate.

**Output:** A classifier comparison, error slices and a review threshold.

**Effort:** 16h · Intermediate

- **PCA, explained variance and reconstruction:** Extend the project with PCA, explained variance and reconstruction in Support ticket model comparison. Adapt this focused lab to the project data: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector. Predict ticket category (login, billing, setup); keep the same target and splits across model comparisons. Required concepts: Centering, Principal components, Explained variance, Reconstruction, Leakage and pipelines.
  - Deliverable: PCA, explained variance and reconstruction: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A classifier comparison, error slices and a review threshold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · PCA, explained variance and reconstruction: PCA, explained variance and reconstruction: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Hold out templates, compare a dummy baseline and report macro F1.
- [ ] PCA, explained variance and reconstruction: Fit PCA on centered training data, choose dimensions without the test set, reconstruct held-out samples and compare reconstruction error with retained variance. Explain why PCA is not a supervised feature selector.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Decision trees, bagging and boosting mechanisms

<a id="ml-boosting-objectives"></a>

### Decision trees, bagging and boosting mechanisms

Decision trees, bagging and boosting mechanisms helps you make explainable engineering decisions and test failure cases. Build the experiment below before relying on the concept in an AI system.

**Priority:** Foundation · **Study:** 4h · **Practice:** 5h

**Prerequisites:** [Trees, random forests and boosting](ml.md#ml-trees) Navigation is unrestricted.

#### Concepts

- [ ] **Split criteria:** A tree chooses a partition that reduces an impurity or regression-error objective.
  - Example: Compute Gini impurity before and after a small binary split.
  - Videos:
    - [Decision and Classification Trees, Clearly Explained!!!](https://www.youtube.com/watch?v=_L39rN6gz7Y) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on split criteria. Then reproduce the lesson example: Compute Gini impurity before and after a small binary split.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on split criteria. Then reproduce the lesson example: Compute Gini impurity before and after a small binary split.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Tree depth:** Deeper trees can represent finer interactions but fit noise more easily.
  - Example: Compare training and validation errors for depths 1, 3 and unrestricted.
  - Videos:
    - [Decision and Classification Trees, Clearly Explained!!!](https://www.youtube.com/watch?v=_L39rN6gz7Y) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on tree depth. Then reproduce the lesson example: Compare training and validation errors for depths 1, 3 and unrestricted.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on tree depth. Then reproduce the lesson example: Compare training and validation errors for depths 1, 3 and unrestricted.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Bagging:** Bootstrap aggregation averages models fitted on resampled training sets to reduce instability.
  - Example: Train several small trees on bootstrap samples and average predictions.
  - Videos:
    - [Decision and Classification Trees, Clearly Explained!!!](https://www.youtube.com/watch?v=_L39rN6gz7Y) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on bagging. Then reproduce the lesson example: Train several small trees on bootstrap samples and average predictions.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on bagging. Then reproduce the lesson example: Train several small trees on bootstrap samples and average predictions.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Boosting:** Sequential learners correct errors under a chosen objective rather than training independently.
  - Example: Fit a weak regression tree to residuals of an initial mean predictor.
  - Videos:
    - [Decision and Classification Trees, Clearly Explained!!!](https://www.youtube.com/watch?v=_L39rN6gz7Y) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on boosting. Then reproduce the lesson example: Fit a weak regression tree to residuals of an initial mean predictor.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on boosting. Then reproduce the lesson example: Fit a weak regression tree to residuals of an initial mean predictor.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Learning-rate tradeoff:** Smaller boosting steps usually require more trees and still need validation.
  - Example: Compare learning-rate and estimator-count pairs under one compute budget.
  - Videos:
    - [Decision and Classification Trees, Clearly Explained!!!](https://www.youtube.com/watch?v=_L39rN6gz7Y) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on learning-rate tradeoff. Then reproduce the lesson example: Compare learning-rate and estimator-count pairs under one compute budget.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on learning-rate tradeoff. Then reproduce the lesson example: Compare learning-rate and estimator-count pairs under one compute budget.
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

1. [Official reference: Decision trees, bagging and boosting mechanisms](https://scikit-learn.org/stable/modules/ensemble.html) — Free reading; no registration required. Use the local CPU exercise; optional hosted services and downloads are not required..
2. [scikit-learn: decision trees](https://scikit-learn.org/stable/modules/tree.html) — Free; no registration required. No paid materials required.

#### Lab: Decision trees, bagging and boosting mechanisms

Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes.

**Deliverables**

- Runnable CPU notebook or script with deterministic fixtures
- Measured outputs, failure cases and a README explaining decisions

**Completion checks**

- [ ] Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes.
- [ ] Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

#### Ten project recommendations

### Subscription retention baseline

An analyst needs an educational estimate of likely account cancellation.

**Data:** Generate 500 fictional accounts with a binary cancellation label. Use a fixed seed and keep evaluation cases separate.

**Output:** A leakage-safe preprocessing and classification pipeline.

**Effort:** 16h · Intermediate

- **Decision trees, bagging and boosting mechanisms:** Extend the project with Decision trees, bagging and boosting mechanisms in Subscription retention baseline. Adapt this focused lab to the project data: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes. Predict fictional cancellation label; keep the same target and splits across model comparisons. Required concepts: Split criteria, Tree depth, Bagging, Boosting, Learning-rate tradeoff.
  - Deliverable: Decision trees, bagging and boosting mechanisms: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A leakage-safe preprocessing and classification pipeline. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Decision trees, bagging and boosting mechanisms: Decision trees, bagging and boosting mechanisms: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude post-cancellation fields and report PR AUC plus calibration.
- [ ] Decision trees, bagging and boosting mechanisms: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Customer behavior segmentation

A researcher needs interpretable groups without invented ground truth.

**Data:** Generate 300 fictional usage vectors with three overlapping clusters. Use a fixed seed and keep evaluation cases separate.

**Output:** A clustering comparison with stability and group descriptions.

**Effort:** 16h · Intermediate

- **Decision trees, bagging and boosting mechanisms:** Extend the project with Decision trees, bagging and boosting mechanisms in Customer behavior segmentation. Adapt this focused lab to the project data: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes.  Required concepts: Split criteria, Tree depth, Bagging, Boosting, Learning-rate tradeoff.
  - Deliverable: Decision trees, bagging and boosting mechanisms: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A clustering comparison with stability and group descriptions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Decision trees, bagging and boosting mechanisms: Decision trees, bagging and boosting mechanisms: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare multiple seeds and explain why silhouette alone is insufficient.
- [ ] Decision trees, bagging and boosting mechanisms: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Household energy forecasting

A planner needs next-day demand estimates with honest validation.

**Data:** Generate 365 daily demand values with seasonality and noise. Use a fixed seed and keep evaluation cases separate.

**Output:** A chronological forecast benchmark and residual report.

**Effort:** 16h · Intermediate

- **Decision trees, bagging and boosting mechanisms:** Extend the project with Decision trees, bagging and boosting mechanisms in Household energy forecasting. Adapt this focused lab to the project data: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes. Predict next-day energy demand; keep the same target and splits across model comparisons. Required concepts: Split criteria, Tree depth, Bagging, Boosting, Learning-rate tradeoff.
  - Deliverable: Decision trees, bagging and boosting mechanisms: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chronological forecast benchmark and residual report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Decision trees, bagging and boosting mechanisms: Decision trees, bagging and boosting mechanisms: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Beat or explain failure against last-week demand on a future holdout.
- [ ] Decision trees, bagging and boosting mechanisms: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature contribution audit

A reviewer needs to investigate reliance on a suspicious feature.

**Data:** Generate 400 labeled rows with one leakage feature and correlated proxies. Use a fixed seed and keep evaluation cases separate.

**Output:** An ablation and permutation-importance report.

**Effort:** 16h · Intermediate

- **Decision trees, bagging and boosting mechanisms:** Extend the project with Decision trees, bagging and boosting mechanisms in Feature contribution audit. Adapt this focused lab to the project data: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes. Predict generated binary outcome with the leakage field excluded; keep the same target and splits across model comparisons. Required concepts: Split criteria, Tree depth, Bagging, Boosting, Learning-rate tradeoff.
  - Deliverable: Decision trees, bagging and boosting mechanisms: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An ablation and permutation-importance report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Decision trees, bagging and boosting mechanisms: Decision trees, bagging and boosting mechanisms: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare held-out performance before/after leakage removal and explain correlation caveats.
- [ ] Decision trees, bagging and boosting mechanisms: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory movement anomaly detector

A stock manager needs unusual movements flagged for review.

**Data:** Generate 500 movements with 30 labeled injected anomalies. Use a fixed seed and keep evaluation cases separate.

**Output:** An anomaly ranking and threshold investigation notebook.

**Effort:** 16h · Intermediate

- **Decision trees, bagging and boosting mechanisms:** Extend the project with Decision trees, bagging and boosting mechanisms in Inventory movement anomaly detector. Adapt this focused lab to the project data: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes. Predict injected anomaly flag; keep the same target and splits across model comparisons. Required concepts: Split criteria, Tree depth, Bagging, Boosting, Learning-rate tradeoff.
  - Deliverable: Decision trees, bagging and boosting mechanisms: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An anomaly ranking and threshold investigation notebook. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Decision trees, bagging and boosting mechanisms: Decision trees, bagging and boosting mechanisms: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report precision at a fixed review budget and inspect false alerts.
- [ ] Decision trees, bagging and boosting mechanisms: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Kernel decision boundary lab

A learner needs to understand when a nonlinear classifier helps.

**Data:** Use scikit-learn make_moons at three noise levels. Use a fixed seed and keep evaluation cases separate.

**Output:** A linear versus RBF SVM comparison with boundary plots.

**Effort:** 16h · Intermediate

- **Decision trees, bagging and boosting mechanisms:** Extend the project with Decision trees, bagging and boosting mechanisms in Kernel decision boundary lab. Adapt this focused lab to the project data: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes. Predict generated moon class; keep the same target and splits across model comparisons. Required concepts: Split criteria, Tree depth, Bagging, Boosting, Learning-rate tradeoff.
  - Deliverable: Decision trees, bagging and boosting mechanisms: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A linear versus RBF SVM comparison with boundary plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Decision trees, bagging and boosting mechanisms: Decision trees, bagging and boosting mechanisms: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Use nested tuning and report held-out errors and support-vector counts.
- [ ] Decision trees, bagging and boosting mechanisms: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Nearest example explanation service

A learner needs predictions with inspectable reference examples.

**Data:** Use scikit-learn digits with a fixed train/test split. Use a fixed seed and keep evaluation cases separate.

**Output:** A kNN classifier that returns neighbors and distance explanations.

**Effort:** 16h · Intermediate

- **Decision trees, bagging and boosting mechanisms:** Extend the project with Decision trees, bagging and boosting mechanisms in Nearest example explanation service. Adapt this focused lab to the project data: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes. Predict digit class; keep the same target and splits across model comparisons. Required concepts: Split criteria, Tree depth, Bagging, Boosting, Learning-rate tradeoff.
  - Deliverable: Decision trees, bagging and boosting mechanisms: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A kNN classifier that returns neighbors and distance explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Decision trees, bagging and boosting mechanisms: Decision trees, bagging and boosting mechanisms: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test scaling, ties and out-of-distribution inputs; record latency.
- [ ] Decision trees, bagging and boosting mechanisms: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible model selection bench

A teammate needs to compare preprocessing and estimator choices fairly.

**Data:** Use scikit-learn built-in wine data. Use a fixed seed and keep evaluation cases separate.

**Output:** A cross-validated search with persisted pipeline and inference script.

**Effort:** 16h · Intermediate

- **Decision trees, bagging and boosting mechanisms:** Extend the project with Decision trees, bagging and boosting mechanisms in Reproducible model selection bench. Adapt this focused lab to the project data: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes. Predict wine class; keep the same target and splits across model comparisons. Required concepts: Split criteria, Tree depth, Bagging, Boosting, Learning-rate tradeoff.
  - Deliverable: Decision trees, bagging and boosting mechanisms: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cross-validated search with persisted pipeline and inference script. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Decision trees, bagging and boosting mechanisms: Decision trees, bagging and boosting mechanisms: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep the final holdout untouched until selection and reproduce predictions after reload.
- [ ] Decision trees, bagging and boosting mechanisms: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Rare event threshold workbench

An operator needs a controllable false-alert budget.

**Data:** Generate 1000 binary-labeled observations with 5 percent positives. Use a fixed seed and keep evaluation cases separate.

**Output:** A calibrated classifier and threshold tradeoff dashboard.

**Effort:** 16h · Intermediate

- **Decision trees, bagging and boosting mechanisms:** Extend the project with Decision trees, bagging and boosting mechanisms in Rare event threshold workbench. Adapt this focused lab to the project data: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes. Predict rare event label; keep the same target and splits across model comparisons. Required concepts: Split criteria, Tree depth, Bagging, Boosting, Learning-rate tradeoff.
  - Deliverable: Decision trees, bagging and boosting mechanisms: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A calibrated classifier and threshold tradeoff dashboard. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Decision trees, bagging and boosting mechanisms: Decision trees, bagging and boosting mechanisms: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Choose thresholds on validation only and publish confusion matrices.
- [ ] Decision trees, bagging and boosting mechanisms: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket model comparison

A support lead needs category suggestions with human review for ambiguity.

**Data:** Generate 180 labeled login, billing and setup tickets with paraphrases. Use a fixed seed and keep evaluation cases separate.

**Output:** A classifier comparison, error slices and a review threshold.

**Effort:** 16h · Intermediate

- **Decision trees, bagging and boosting mechanisms:** Extend the project with Decision trees, bagging and boosting mechanisms in Support ticket model comparison. Adapt this focused lab to the project data: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes. Predict ticket category (login, billing, setup); keep the same target and splits across model comparisons. Required concepts: Split criteria, Tree depth, Bagging, Boosting, Learning-rate tradeoff.
  - Deliverable: Decision trees, bagging and boosting mechanisms: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A classifier comparison, error slices and a review threshold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Decision trees, bagging and boosting mechanisms: Decision trees, bagging and boosting mechanisms: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Hold out templates, compare a dummy baseline and report macro F1.
- [ ] Decision trees, bagging and boosting mechanisms: Compare a shallow tree, random forest and gradient boosting on the same generated dataset. Inspect split criteria, residual corrections and validation curves; report failure slices and model sizes.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Stage checkpoint

<a id="checkpoint-ml"></a>

### Machine learning checkpoint

Demonstrate readiness through a reproducible practical handoff. Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.

**Priority:** Foundation · **Study:** 1h · **Practice:** 6h

**Prerequisites:** [Supervised learning, regression and classification](ml.md#ml-problem), [Train/validation/test, cross-validation and leakage](ml.md#ml-splits), [Preprocessing and feature engineering](ml.md#ml-preprocessing), [Linear/logistic regression and gradient descent](ml.md#ml-linear), [Trees, random forests and boosting](ml.md#ml-trees), [kNN, SVM, clustering and PCA](ml.md#ml-neighbors), [Bias/variance, regularization and tuning](ml.md#ml-generalization), [Imbalance, metrics, calibration and error analysis](ml.md#ml-metrics), [Model persistence, inference and data drift](ml.md#ml-inference), [Column transformers, nested validation and tuning budgets](ml.md#ml-pipelines-search), [Class imbalance, decision thresholds and calibration](ml.md#ml-threshold-imbalance), [Permutation importance, partial dependence and error slices](ml.md#ml-interpretation-errors), [SVM margins, kernels, C and feature scale](ml.md#ml-svm-kernels), [Time-series validation and anomaly-detection baselines](ml.md#ml-time-anomalies), [K-means, density clustering and PCA diagnostics](ml.md#ml-cluster-validation), [kNN, distance weighting and dimensionality](ml.md#ml-knn-distance), [PCA, explained variance and reconstruction](ml.md#ml-pca-reconstruction), [Decision trees, bagging and boosting mechanisms](ml.md#ml-boosting-objectives) Navigation is unrestricted.

#### Concepts

- [ ] **Define the success contract:** Write observable checks before implementation so success is not just a plausible demonstration.
  - Example: Turn this task into a numbered acceptance checklist: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.
  - Videos:
    - [Decision and Classification Trees, Clearly Explained!!!](https://www.youtube.com/watch?v=_L39rN6gz7Y) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on define the success contract. Then reproduce the lesson example: Turn this task into a numbered acceptance checklist: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on define the success contract. Then reproduce the lesson example: Turn this task into a numbered acceptance checklist: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Reproduce the baseline:** Keep a simple reference output and deterministic inputs so changes can be compared honestly.
  - Example: Run a fixed input twice and compare saved outputs with the documented baseline.
  - Videos:
    - [Decision and Classification Trees, Clearly Explained!!!](https://www.youtube.com/watch?v=_L39rN6gz7Y) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on reproduce the baseline. Then reproduce the lesson example: Run a fixed input twice and compare saved outputs with the documented baseline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on reproduce the baseline. Then reproduce the lesson example: Run a fixed input twice and compare saved outputs with the documented baseline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Test a failure boundary:** A working happy path does not establish robustness to malformed data or dependency failures.
  - Example: Inject one malformed input and one controlled failure, then record the resulting state.
  - Videos:
    - [Decision and Classification Trees, Clearly Explained!!!](https://www.youtube.com/watch?v=_L39rN6gz7Y) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on test a failure boundary. Then reproduce the lesson example: Inject one malformed input and one controlled failure, then record the resulting state.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on test a failure boundary. Then reproduce the lesson example: Inject one malformed input and one controlled failure, then record the resulting state.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Explain the decisions:** Describe why each technique was chosen and what evidence would make you choose differently.
  - Example: Write a short decision note comparing the chosen approach with one simpler alternative.
  - Videos:
    - [Decision and Classification Trees, Clearly Explained!!!](https://www.youtube.com/watch?v=_L39rN6gz7Y) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on explain the decisions. Then reproduce the lesson example: Write a short decision note comparing the chosen approach with one simpler alternative.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on explain the decisions. Then reproduce the lesson example: Write a short decision note comparing the chosen approach with one simpler alternative.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/machine-learning-for-everybody/
- [ ] **Hand off the evidence:** Another learner must be able to reproduce the result from your instructions and supplied inputs.
  - Example: Ask a teammate to run the README commands in a clean environment and record missing steps.
  - Videos:
    - [Decision and Classification Trees, Clearly Explained!!!](https://www.youtube.com/watch?v=_L39rN6gz7Y) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on hand off the evidence. Then reproduce the lesson example: Ask a teammate to run the README commands in a clean environment and record missing steps.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Machine learning for everybody — full course](https://www.youtube.com/watch?v=i_LwzRVP7bg) · freeCodeCamp · Kylie Ying · Full course
      - Explains: Practical supervised/unsupervised modeling, preprocessing and model comparisons.
      - Useful because: A coding-oriented overview; pair it with focused mathematical explanations.
      - Watch for: Focus on hand off the evidence. Then reproduce the lesson example: Ask a teammate to run the README commands in a clean environment and record missing steps.
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

1. [Official reference: Decision trees, bagging and boosting mechanisms](https://scikit-learn.org/stable/modules/ensemble.html) — Free reading; no registration required. Use the local CPU exercise; optional hosted services and downloads are not required..
2. [scikit-learn: decision trees](https://scikit-learn.org/stable/modules/tree.html) — Free; no registration required. No paid materials required.

#### Machine learning checkpoint

Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.

**Deliverables**

- Runnable project and reproducible input fixtures
- README, results and decision notes
- Failure evidence and clean-start instructions

**Completion checks**

- [ ] Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.
- [ ] Explain the code and results without relying on an AI-generated summary.
- [ ] A teammate can reproduce the demo without paid credentials.

#### Ten project recommendations

### Subscription retention baseline

An analyst needs an educational estimate of likely account cancellation.

**Data:** Generate 500 fictional accounts with a binary cancellation label. Use a fixed seed and keep evaluation cases separate.

**Output:** A leakage-safe preprocessing and classification pipeline.

**Effort:** 16h · Intermediate

- **Machine learning checkpoint:** Extend the project with Machine learning checkpoint in Subscription retention baseline. Adapt this focused lab to the project data: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice. Predict fictional cancellation label; keep the same target and splits across model comparisons. Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Machine learning checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A leakage-safe preprocessing and classification pipeline. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Machine learning checkpoint: Machine learning checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude post-cancellation fields and report PR AUC plus calibration.
- [ ] Machine learning checkpoint: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Customer behavior segmentation

A researcher needs interpretable groups without invented ground truth.

**Data:** Generate 300 fictional usage vectors with three overlapping clusters. Use a fixed seed and keep evaluation cases separate.

**Output:** A clustering comparison with stability and group descriptions.

**Effort:** 16h · Intermediate

- **Machine learning checkpoint:** Extend the project with Machine learning checkpoint in Customer behavior segmentation. Adapt this focused lab to the project data: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Machine learning checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A clustering comparison with stability and group descriptions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Machine learning checkpoint: Machine learning checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare multiple seeds and explain why silhouette alone is insufficient.
- [ ] Machine learning checkpoint: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Household energy forecasting

A planner needs next-day demand estimates with honest validation.

**Data:** Generate 365 daily demand values with seasonality and noise. Use a fixed seed and keep evaluation cases separate.

**Output:** A chronological forecast benchmark and residual report.

**Effort:** 16h · Intermediate

- **Machine learning checkpoint:** Extend the project with Machine learning checkpoint in Household energy forecasting. Adapt this focused lab to the project data: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice. Predict next-day energy demand; keep the same target and splits across model comparisons. Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Machine learning checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A chronological forecast benchmark and residual report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Machine learning checkpoint: Machine learning checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Beat or explain failure against last-week demand on a future holdout.
- [ ] Machine learning checkpoint: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature contribution audit

A reviewer needs to investigate reliance on a suspicious feature.

**Data:** Generate 400 labeled rows with one leakage feature and correlated proxies. Use a fixed seed and keep evaluation cases separate.

**Output:** An ablation and permutation-importance report.

**Effort:** 16h · Intermediate

- **Machine learning checkpoint:** Extend the project with Machine learning checkpoint in Feature contribution audit. Adapt this focused lab to the project data: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice. Predict generated binary outcome with the leakage field excluded; keep the same target and splits across model comparisons. Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Machine learning checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An ablation and permutation-importance report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Machine learning checkpoint: Machine learning checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare held-out performance before/after leakage removal and explain correlation caveats.
- [ ] Machine learning checkpoint: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory movement anomaly detector

A stock manager needs unusual movements flagged for review.

**Data:** Generate 500 movements with 30 labeled injected anomalies. Use a fixed seed and keep evaluation cases separate.

**Output:** An anomaly ranking and threshold investigation notebook.

**Effort:** 16h · Intermediate

- **Machine learning checkpoint:** Extend the project with Machine learning checkpoint in Inventory movement anomaly detector. Adapt this focused lab to the project data: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice. Predict injected anomaly flag; keep the same target and splits across model comparisons. Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Machine learning checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An anomaly ranking and threshold investigation notebook. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Machine learning checkpoint: Machine learning checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report precision at a fixed review budget and inspect false alerts.
- [ ] Machine learning checkpoint: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Kernel decision boundary lab

A learner needs to understand when a nonlinear classifier helps.

**Data:** Use scikit-learn make_moons at three noise levels. Use a fixed seed and keep evaluation cases separate.

**Output:** A linear versus RBF SVM comparison with boundary plots.

**Effort:** 16h · Intermediate

- **Machine learning checkpoint:** Extend the project with Machine learning checkpoint in Kernel decision boundary lab. Adapt this focused lab to the project data: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice. Predict generated moon class; keep the same target and splits across model comparisons. Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Machine learning checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A linear versus RBF SVM comparison with boundary plots. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Machine learning checkpoint: Machine learning checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Use nested tuning and report held-out errors and support-vector counts.
- [ ] Machine learning checkpoint: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Nearest example explanation service

A learner needs predictions with inspectable reference examples.

**Data:** Use scikit-learn digits with a fixed train/test split. Use a fixed seed and keep evaluation cases separate.

**Output:** A kNN classifier that returns neighbors and distance explanations.

**Effort:** 16h · Intermediate

- **Machine learning checkpoint:** Extend the project with Machine learning checkpoint in Nearest example explanation service. Adapt this focused lab to the project data: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice. Predict digit class; keep the same target and splits across model comparisons. Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Machine learning checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A kNN classifier that returns neighbors and distance explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Machine learning checkpoint: Machine learning checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test scaling, ties and out-of-distribution inputs; record latency.
- [ ] Machine learning checkpoint: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible model selection bench

A teammate needs to compare preprocessing and estimator choices fairly.

**Data:** Use scikit-learn built-in wine data. Use a fixed seed and keep evaluation cases separate.

**Output:** A cross-validated search with persisted pipeline and inference script.

**Effort:** 16h · Intermediate

- **Machine learning checkpoint:** Extend the project with Machine learning checkpoint in Reproducible model selection bench. Adapt this focused lab to the project data: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice. Predict wine class; keep the same target and splits across model comparisons. Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Machine learning checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cross-validated search with persisted pipeline and inference script. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Machine learning checkpoint: Machine learning checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep the final holdout untouched until selection and reproduce predictions after reload.
- [ ] Machine learning checkpoint: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Rare event threshold workbench

An operator needs a controllable false-alert budget.

**Data:** Generate 1000 binary-labeled observations with 5 percent positives. Use a fixed seed and keep evaluation cases separate.

**Output:** A calibrated classifier and threshold tradeoff dashboard.

**Effort:** 16h · Intermediate

- **Machine learning checkpoint:** Extend the project with Machine learning checkpoint in Rare event threshold workbench. Adapt this focused lab to the project data: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice. Predict rare event label; keep the same target and splits across model comparisons. Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Machine learning checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A calibrated classifier and threshold tradeoff dashboard. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Machine learning checkpoint: Machine learning checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Choose thresholds on validation only and publish confusion matrices.
- [ ] Machine learning checkpoint: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket model comparison

A support lead needs category suggestions with human review for ambiguity.

**Data:** Generate 180 labeled login, billing and setup tickets with paraphrases. Use a fixed seed and keep evaluation cases separate.

**Output:** A classifier comparison, error slices and a review threshold.

**Effort:** 16h · Intermediate

- **Machine learning checkpoint:** Extend the project with Machine learning checkpoint in Support ticket model comparison. Adapt this focused lab to the project data: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice. Predict ticket category (login, billing, setup); keep the same target and splits across model comparisons. Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Machine learning checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A classifier comparison, error slices and a review threshold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Machine learning checkpoint: Machine learning checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Hold out templates, compare a dummy baseline and report macro F1.
- [ ] Machine learning checkpoint: Compare dummy, linear and tree-based models with leakage-safe preprocessing, cross-validation and a held-out test. Report calibration or residuals, an error slice, saved inference and a justified model choice.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

