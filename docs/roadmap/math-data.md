# Mathematics and data

Understand the operations and data quality behind model behavior.

## Main route · Step 3 of 13

**Goal:** Understand the data, shapes, gradients and statistics behind AI.

**Stage checkpoint:** Clean a small dataset, plot its distributions and explain a dot product and gradient calculation.

Clean data and explain linear algebra, gradients, probability and uncertainty.

Follow the modules and lessons below at your pace. Finish each exercise, save your evidence and self-assessment, then continue. Completed and Already known count as completed; Skipped is reported separately. You can move ahead at any time.

[Full pipeline](../PIPELINE.md) · [Next step: Machine learning](ml.md)

## Mathematical intuition

<a id="math-linear"></a>

### Vectors, matrices and dot products

Track shapes and understand features, embeddings and dense layers.

**Priority:** Foundation · **Study:** 2h · **Practice:** 3h

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

### Feature scaling geometry

A model builder needs to understand units before measuring distance.

**Data:** Generate height/income features with very different scales. Use a fixed seed and keep evaluation cases separate.

**Output:** A NumPy study of standard, robust and min-max scaling.

**Effort:** 10h · Beginner → intermediate

- **Vectors, matrices and dot products:** Implement the project numeric transformations with explicit NumPy shapes and vectorized operations; explain the relevant matrix calculations. Apply this to Feature scaling geometry: A NumPy study of standard, robust and min-max scaling. Focus: Vectors and matrices, Dot products, Norms and cosine similarity.
  - Deliverable: Array transformation module and hand-calculated examples
  - Check: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A NumPy study of standard, robust and min-max scaling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Vectors, matrices and dot products: Array transformation module and hand-calculated examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Fit scaling on training rows only and compare neighbor identities.
- [ ] Vectors, matrices and dot products: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Geometric similarity explorer

A learner needs to understand why vector scaling changes retrieval.

**Data:** Generate 60 two-dimensional points with three labeled groups. Use a fixed seed and keep evaluation cases separate.

**Output:** A notebook comparing dot product, cosine and Euclidean rankings.

**Effort:** 10h · Beginner → intermediate

- **Vectors, matrices and dot products:** Implement the project numeric transformations with explicit NumPy shapes and vectorized operations; explain the relevant matrix calculations. Apply this to Geometric similarity explorer: A notebook comparing dot product, cosine and Euclidean rankings. Focus: Vectors and matrices, Dot products, Norms and cosine similarity.
  - Deliverable: Array transformation module and hand-calculated examples
  - Check: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A notebook comparing dot product, cosine and Euclidean rankings. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Vectors, matrices and dot products: Array transformation module and hand-calculated examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify hand-calculated examples and explain ranking changes after scaling.
- [ ] Vectors, matrices and dot products: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Conditional probability simulator

An analyst needs to distinguish test accuracy from posterior probability.

**Data:** Simulate 10000 fictional cases at three base rates. Use a fixed seed and keep evaluation cases separate.

**Output:** A contingency table and Bayes-rule calculator.

**Effort:** 10h · Beginner → intermediate

- **Vectors, matrices and dot products:** Implement the project numeric transformations with explicit NumPy shapes and vectorized operations; explain the relevant matrix calculations. Apply this to Conditional probability simulator: A contingency table and Bayes-rule calculator. Focus: Vectors and matrices, Dot products, Norms and cosine similarity.
  - Deliverable: Array transformation module and hand-calculated examples
  - Check: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A contingency table and Bayes-rule calculator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Vectors, matrices and dot products: Array transformation module and hand-calculated examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match analytical posterior values within stated simulation tolerance.
- [ ] Vectors, matrices and dot products: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Bootstrap uncertainty studio

A product analyst needs uncertainty around a small sample mean.

**Data:** Generate 80 session lengths with a skewed distribution. Use a fixed seed and keep evaluation cases separate.

**Output:** A bootstrap interval report with reproducible resampling.

**Effort:** 10h · Beginner → intermediate

- **Vectors, matrices and dot products:** Implement the project numeric transformations with explicit NumPy shapes and vectorized operations; explain the relevant matrix calculations. Apply this to Bootstrap uncertainty studio: A bootstrap interval report with reproducible resampling. Focus: Vectors and matrices, Dot products, Norms and cosine similarity.
  - Deliverable: Array transformation module and hand-calculated examples
  - Check: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bootstrap interval report with reproducible resampling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Vectors, matrices and dot products: Array transformation module and hand-calculated examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare percentile intervals with a normal approximation and discuss limits.
- [ ] Vectors, matrices and dot products: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Misleading chart repair desk

A report author needs honest charts for comparing groups.

**Data:** Create four group distributions with outliers and unequal sizes. Use a fixed seed and keep evaluation cases separate.

**Output:** Before/after charts with labeled axes and interpretation notes.

**Effort:** 10h · Beginner → intermediate

- **Vectors, matrices and dot products:** Implement the project numeric transformations with explicit NumPy shapes and vectorized operations; explain the relevant matrix calculations. Apply this to Misleading chart repair desk: Before/after charts with labeled axes and interpretation notes. Focus: Vectors and matrices, Dot products, Norms and cosine similarity.
  - Deliverable: Array transformation module and hand-calculated examples
  - Check: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Before/after charts with labeled axes and interpretation notes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Vectors, matrices and dot products: Array transformation module and hand-calculated examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show sample counts and uncertainty; avoid hiding outliers or truncating a bar axis.
- [ ] Vectors, matrices and dot products: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Distribution shift notebook

A team needs to notice changing input distributions.

**Data:** Generate reference and shifted sensor batches with known mean and variance changes. Use a fixed seed and keep evaluation cases separate.

**Output:** Histograms, summary statistics and a shift investigation report.

**Effort:** 10h · Beginner → intermediate

- **Vectors, matrices and dot products:** Implement the project numeric transformations with explicit NumPy shapes and vectorized operations; explain the relevant matrix calculations. Apply this to Distribution shift notebook: Histograms, summary statistics and a shift investigation report. Focus: Vectors and matrices, Dot products, Norms and cosine similarity.
  - Deliverable: Array transformation module and hand-calculated examples
  - Check: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Histograms, summary statistics and a shift investigation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Vectors, matrices and dot products: Array transformation module and hand-calculated examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect the seeded shift and explain why detection does not identify its cause.
- [ ] Vectors, matrices and dot products: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Finite difference microscope

A learner needs to verify derivatives used in optimization.

**Data:** Generate a 30-row quadratic regression problem. Use a fixed seed and keep evaluation cases separate.

**Output:** A notebook comparing analytical and numerical gradients.

**Effort:** 10h · Beginner → intermediate

- **Vectors, matrices and dot products:** Implement the project numeric transformations with explicit NumPy shapes and vectorized operations; explain the relevant matrix calculations. Apply this to Finite difference microscope: A notebook comparing analytical and numerical gradients. Focus: Vectors and matrices, Dot products, Norms and cosine similarity.
  - Deliverable: Array transformation module and hand-calculated examples
  - Check: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A notebook comparing analytical and numerical gradients. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Vectors, matrices and dot products: Array transformation module and hand-calculated examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report relative error for multiple step sizes and explain cancellation.
- [ ] Vectors, matrices and dot products: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data join integrity checker

An analyst needs to detect duplicated rows caused by joins.

**Data:** Create customer and order CSV files with missing and duplicated keys. Use a fixed seed and keep evaluation cases separate.

**Output:** A pandas join audit with rejected records and row-count explanations.

**Effort:** 10h · Beginner → intermediate

- **Vectors, matrices and dot products:** Implement the project numeric transformations with explicit NumPy shapes and vectorized operations; explain the relevant matrix calculations. Apply this to Data join integrity checker: A pandas join audit with rejected records and row-count explanations. Focus: Vectors and matrices, Dot products, Norms and cosine similarity.
  - Deliverable: Array transformation module and hand-calculated examples
  - Check: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A pandas join audit with rejected records and row-count explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Vectors, matrices and dot products: Array transformation module and hand-calculated examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect many-to-many expansion and reconcile order totals.
- [ ] Vectors, matrices and dot products: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Missing value investigation

A researcher needs to understand how missingness alters summaries.

**Data:** Generate 200 survey rows with random and income-dependent missingness. Use a fixed seed and keep evaluation cases separate.

**Output:** A cleaning notebook comparing deletion and imputation.

**Effort:** 10h · Beginner → intermediate

- **Vectors, matrices and dot products:** Implement the project numeric transformations with explicit NumPy shapes and vectorized operations; explain the relevant matrix calculations. Apply this to Missing value investigation: A cleaning notebook comparing deletion and imputation. Focus: Vectors and matrices, Dot products, Norms and cosine similarity.
  - Deliverable: Array transformation module and hand-calculated examples
  - Check: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cleaning notebook comparing deletion and imputation. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Vectors, matrices and dot products: Array transformation module and hand-calculated examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Quantify bias under each missingness mechanism without claiming causality.
- [ ] Vectors, matrices and dot products: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Matrix compression explorer

A learner needs to see the accuracy/storage tradeoff in low-rank approximation.

**Data:** Generate a 64 by 64 grayscale pattern with noise. Use a fixed seed and keep evaluation cases separate.

**Output:** An SVD reconstruction notebook with rank slider or rank table.

**Effort:** 10h · Beginner → intermediate

- **Vectors, matrices and dot products:** Implement the project numeric transformations with explicit NumPy shapes and vectorized operations; explain the relevant matrix calculations. Apply this to Matrix compression explorer: An SVD reconstruction notebook with rank slider or rank table. Focus: Vectors and matrices, Dot products, Norms and cosine similarity.
  - Deliverable: Array transformation module and hand-calculated examples
  - Check: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An SVD reconstruction notebook with rank slider or rank table. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Vectors, matrices and dot products: Array transformation module and hand-calculated examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify error decreases with rank and report retained storage.
- [ ] Vectors, matrices and dot products: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="math-calculus"></a>

### Derivatives, chain rule and gradients

Explain how an optimizer changes weights to reduce a loss.

**Priority:** Foundation · **Study:** 2h · **Practice:** 3h

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

### Finite difference microscope

A learner needs to verify derivatives used in optimization.

**Data:** Generate a 30-row quadratic regression problem. Use a fixed seed and keep evaluation cases separate.

**Output:** A notebook comparing analytical and numerical gradients.

**Effort:** 10h · Beginner → intermediate

- **Derivatives, chain rule and gradients:** Implement Derivatives, chain rule and gradients in Finite difference microscope. Adapt this focused lab to the project data: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.  Required concepts: Derivatives, Chain rule, Gradients.
  - Deliverable: Derivatives, chain rule and gradients: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A notebook comparing analytical and numerical gradients. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Derivatives, chain rule and gradients: Derivatives, chain rule and gradients: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report relative error for multiple step sizes and explain cancellation.
- [ ] Derivatives, chain rule and gradients: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Conditional probability simulator

An analyst needs to distinguish test accuracy from posterior probability.

**Data:** Simulate 10000 fictional cases at three base rates. Use a fixed seed and keep evaluation cases separate.

**Output:** A contingency table and Bayes-rule calculator.

**Effort:** 10h · Beginner → intermediate

- **Derivatives, chain rule and gradients:** Extend the project with Derivatives, chain rule and gradients in Conditional probability simulator. Adapt this focused lab to the project data: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.  Required concepts: Derivatives, Chain rule, Gradients.
  - Deliverable: Derivatives, chain rule and gradients: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A contingency table and Bayes-rule calculator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Derivatives, chain rule and gradients: Derivatives, chain rule and gradients: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match analytical posterior values within stated simulation tolerance.
- [ ] Derivatives, chain rule and gradients: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Bootstrap uncertainty studio

A product analyst needs uncertainty around a small sample mean.

**Data:** Generate 80 session lengths with a skewed distribution. Use a fixed seed and keep evaluation cases separate.

**Output:** A bootstrap interval report with reproducible resampling.

**Effort:** 10h · Beginner → intermediate

- **Derivatives, chain rule and gradients:** Extend the project with Derivatives, chain rule and gradients in Bootstrap uncertainty studio. Adapt this focused lab to the project data: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.  Required concepts: Derivatives, Chain rule, Gradients.
  - Deliverable: Derivatives, chain rule and gradients: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bootstrap interval report with reproducible resampling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Derivatives, chain rule and gradients: Derivatives, chain rule and gradients: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare percentile intervals with a normal approximation and discuss limits.
- [ ] Derivatives, chain rule and gradients: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Misleading chart repair desk

A report author needs honest charts for comparing groups.

**Data:** Create four group distributions with outliers and unequal sizes. Use a fixed seed and keep evaluation cases separate.

**Output:** Before/after charts with labeled axes and interpretation notes.

**Effort:** 10h · Beginner → intermediate

- **Derivatives, chain rule and gradients:** Extend the project with Derivatives, chain rule and gradients in Misleading chart repair desk. Adapt this focused lab to the project data: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.  Required concepts: Derivatives, Chain rule, Gradients.
  - Deliverable: Derivatives, chain rule and gradients: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Before/after charts with labeled axes and interpretation notes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Derivatives, chain rule and gradients: Derivatives, chain rule and gradients: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show sample counts and uncertainty; avoid hiding outliers or truncating a bar axis.
- [ ] Derivatives, chain rule and gradients: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Distribution shift notebook

A team needs to notice changing input distributions.

**Data:** Generate reference and shifted sensor batches with known mean and variance changes. Use a fixed seed and keep evaluation cases separate.

**Output:** Histograms, summary statistics and a shift investigation report.

**Effort:** 10h · Beginner → intermediate

- **Derivatives, chain rule and gradients:** Extend the project with Derivatives, chain rule and gradients in Distribution shift notebook. Adapt this focused lab to the project data: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.  Required concepts: Derivatives, Chain rule, Gradients.
  - Deliverable: Derivatives, chain rule and gradients: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Histograms, summary statistics and a shift investigation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Derivatives, chain rule and gradients: Derivatives, chain rule and gradients: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect the seeded shift and explain why detection does not identify its cause.
- [ ] Derivatives, chain rule and gradients: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data join integrity checker

An analyst needs to detect duplicated rows caused by joins.

**Data:** Create customer and order CSV files with missing and duplicated keys. Use a fixed seed and keep evaluation cases separate.

**Output:** A pandas join audit with rejected records and row-count explanations.

**Effort:** 10h · Beginner → intermediate

- **Derivatives, chain rule and gradients:** Extend the project with Derivatives, chain rule and gradients in Data join integrity checker. Adapt this focused lab to the project data: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.  Required concepts: Derivatives, Chain rule, Gradients.
  - Deliverable: Derivatives, chain rule and gradients: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A pandas join audit with rejected records and row-count explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Derivatives, chain rule and gradients: Derivatives, chain rule and gradients: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect many-to-many expansion and reconcile order totals.
- [ ] Derivatives, chain rule and gradients: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Missing value investigation

A researcher needs to understand how missingness alters summaries.

**Data:** Generate 200 survey rows with random and income-dependent missingness. Use a fixed seed and keep evaluation cases separate.

**Output:** A cleaning notebook comparing deletion and imputation.

**Effort:** 10h · Beginner → intermediate

- **Derivatives, chain rule and gradients:** Extend the project with Derivatives, chain rule and gradients in Missing value investigation. Adapt this focused lab to the project data: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.  Required concepts: Derivatives, Chain rule, Gradients.
  - Deliverable: Derivatives, chain rule and gradients: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cleaning notebook comparing deletion and imputation. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Derivatives, chain rule and gradients: Derivatives, chain rule and gradients: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Quantify bias under each missingness mechanism without claiming causality.
- [ ] Derivatives, chain rule and gradients: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature scaling geometry

A model builder needs to understand units before measuring distance.

**Data:** Generate height/income features with very different scales. Use a fixed seed and keep evaluation cases separate.

**Output:** A NumPy study of standard, robust and min-max scaling.

**Effort:** 10h · Beginner → intermediate

- **Derivatives, chain rule and gradients:** Extend the project with Derivatives, chain rule and gradients in Feature scaling geometry. Adapt this focused lab to the project data: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.  Required concepts: Derivatives, Chain rule, Gradients.
  - Deliverable: Derivatives, chain rule and gradients: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A NumPy study of standard, robust and min-max scaling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Derivatives, chain rule and gradients: Derivatives, chain rule and gradients: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Fit scaling on training rows only and compare neighbor identities.
- [ ] Derivatives, chain rule and gradients: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Matrix compression explorer

A learner needs to see the accuracy/storage tradeoff in low-rank approximation.

**Data:** Generate a 64 by 64 grayscale pattern with noise. Use a fixed seed and keep evaluation cases separate.

**Output:** An SVD reconstruction notebook with rank slider or rank table.

**Effort:** 10h · Beginner → intermediate

- **Derivatives, chain rule and gradients:** Extend the project with Derivatives, chain rule and gradients in Matrix compression explorer. Adapt this focused lab to the project data: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.  Required concepts: Derivatives, Chain rule, Gradients.
  - Deliverable: Derivatives, chain rule and gradients: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An SVD reconstruction notebook with rank slider or rank table. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Derivatives, chain rule and gradients: Derivatives, chain rule and gradients: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify error decreases with rank and report retained storage.
- [ ] Derivatives, chain rule and gradients: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Geometric similarity explorer

A learner needs to understand why vector scaling changes retrieval.

**Data:** Generate 60 two-dimensional points with three labeled groups. Use a fixed seed and keep evaluation cases separate.

**Output:** A notebook comparing dot product, cosine and Euclidean rankings.

**Effort:** 10h · Beginner → intermediate

- **Derivatives, chain rule and gradients:** Extend the project with Derivatives, chain rule and gradients in Geometric similarity explorer. Adapt this focused lab to the project data: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.  Required concepts: Derivatives, Chain rule, Gradients.
  - Deliverable: Derivatives, chain rule and gradients: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A notebook comparing dot product, cosine and Euclidean rankings. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Derivatives, chain rule and gradients: Derivatives, chain rule and gradients: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify hand-calculated examples and explain ranking changes after scaling.
- [ ] Derivatives, chain rule and gradients: Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="math-probability"></a>

### Probability, distributions and statistics

Interpret predictions and uncertainty without confusing confidence with correctness.

**Priority:** Foundation · **Study:** 2h · **Practice:** 3h

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

### Conditional probability simulator

An analyst needs to distinguish test accuracy from posterior probability.

**Data:** Simulate 10000 fictional cases at three base rates. Use a fixed seed and keep evaluation cases separate.

**Output:** A contingency table and Bayes-rule calculator.

**Effort:** 10h · Beginner → intermediate

- **Probability, distributions and statistics:** Implement Probability, distributions and statistics in Conditional probability simulator. Adapt this focused lab to the project data: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.  Required concepts: Conditional probability, Distributions, Statistics.
  - Deliverable: Probability, distributions and statistics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A contingency table and Bayes-rule calculator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Probability, distributions and statistics: Probability, distributions and statistics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match analytical posterior values within stated simulation tolerance.
- [ ] Probability, distributions and statistics: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Distribution shift notebook

A team needs to notice changing input distributions.

**Data:** Generate reference and shifted sensor batches with known mean and variance changes. Use a fixed seed and keep evaluation cases separate.

**Output:** Histograms, summary statistics and a shift investigation report.

**Effort:** 10h · Beginner → intermediate

- **Probability, distributions and statistics:** Implement Probability, distributions and statistics in Distribution shift notebook. Adapt this focused lab to the project data: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.  Required concepts: Conditional probability, Distributions, Statistics.
  - Deliverable: Probability, distributions and statistics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Histograms, summary statistics and a shift investigation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Probability, distributions and statistics: Probability, distributions and statistics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect the seeded shift and explain why detection does not identify its cause.
- [ ] Probability, distributions and statistics: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Bootstrap uncertainty studio

A product analyst needs uncertainty around a small sample mean.

**Data:** Generate 80 session lengths with a skewed distribution. Use a fixed seed and keep evaluation cases separate.

**Output:** A bootstrap interval report with reproducible resampling.

**Effort:** 10h · Beginner → intermediate

- **Probability, distributions and statistics:** Extend the project with Probability, distributions and statistics in Bootstrap uncertainty studio. Adapt this focused lab to the project data: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.  Required concepts: Conditional probability, Distributions, Statistics.
  - Deliverable: Probability, distributions and statistics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bootstrap interval report with reproducible resampling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Probability, distributions and statistics: Probability, distributions and statistics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare percentile intervals with a normal approximation and discuss limits.
- [ ] Probability, distributions and statistics: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Misleading chart repair desk

A report author needs honest charts for comparing groups.

**Data:** Create four group distributions with outliers and unequal sizes. Use a fixed seed and keep evaluation cases separate.

**Output:** Before/after charts with labeled axes and interpretation notes.

**Effort:** 10h · Beginner → intermediate

- **Probability, distributions and statistics:** Extend the project with Probability, distributions and statistics in Misleading chart repair desk. Adapt this focused lab to the project data: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.  Required concepts: Conditional probability, Distributions, Statistics.
  - Deliverable: Probability, distributions and statistics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Before/after charts with labeled axes and interpretation notes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Probability, distributions and statistics: Probability, distributions and statistics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show sample counts and uncertainty; avoid hiding outliers or truncating a bar axis.
- [ ] Probability, distributions and statistics: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Finite difference microscope

A learner needs to verify derivatives used in optimization.

**Data:** Generate a 30-row quadratic regression problem. Use a fixed seed and keep evaluation cases separate.

**Output:** A notebook comparing analytical and numerical gradients.

**Effort:** 10h · Beginner → intermediate

- **Probability, distributions and statistics:** Extend the project with Probability, distributions and statistics in Finite difference microscope. Adapt this focused lab to the project data: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.  Required concepts: Conditional probability, Distributions, Statistics.
  - Deliverable: Probability, distributions and statistics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A notebook comparing analytical and numerical gradients. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Probability, distributions and statistics: Probability, distributions and statistics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report relative error for multiple step sizes and explain cancellation.
- [ ] Probability, distributions and statistics: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data join integrity checker

An analyst needs to detect duplicated rows caused by joins.

**Data:** Create customer and order CSV files with missing and duplicated keys. Use a fixed seed and keep evaluation cases separate.

**Output:** A pandas join audit with rejected records and row-count explanations.

**Effort:** 10h · Beginner → intermediate

- **Probability, distributions and statistics:** Extend the project with Probability, distributions and statistics in Data join integrity checker. Adapt this focused lab to the project data: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.  Required concepts: Conditional probability, Distributions, Statistics.
  - Deliverable: Probability, distributions and statistics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A pandas join audit with rejected records and row-count explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Probability, distributions and statistics: Probability, distributions and statistics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect many-to-many expansion and reconcile order totals.
- [ ] Probability, distributions and statistics: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Missing value investigation

A researcher needs to understand how missingness alters summaries.

**Data:** Generate 200 survey rows with random and income-dependent missingness. Use a fixed seed and keep evaluation cases separate.

**Output:** A cleaning notebook comparing deletion and imputation.

**Effort:** 10h · Beginner → intermediate

- **Probability, distributions and statistics:** Extend the project with Probability, distributions and statistics in Missing value investigation. Adapt this focused lab to the project data: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.  Required concepts: Conditional probability, Distributions, Statistics.
  - Deliverable: Probability, distributions and statistics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cleaning notebook comparing deletion and imputation. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Probability, distributions and statistics: Probability, distributions and statistics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Quantify bias under each missingness mechanism without claiming causality.
- [ ] Probability, distributions and statistics: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature scaling geometry

A model builder needs to understand units before measuring distance.

**Data:** Generate height/income features with very different scales. Use a fixed seed and keep evaluation cases separate.

**Output:** A NumPy study of standard, robust and min-max scaling.

**Effort:** 10h · Beginner → intermediate

- **Probability, distributions and statistics:** Extend the project with Probability, distributions and statistics in Feature scaling geometry. Adapt this focused lab to the project data: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.  Required concepts: Conditional probability, Distributions, Statistics.
  - Deliverable: Probability, distributions and statistics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A NumPy study of standard, robust and min-max scaling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Probability, distributions and statistics: Probability, distributions and statistics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Fit scaling on training rows only and compare neighbor identities.
- [ ] Probability, distributions and statistics: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Matrix compression explorer

A learner needs to see the accuracy/storage tradeoff in low-rank approximation.

**Data:** Generate a 64 by 64 grayscale pattern with noise. Use a fixed seed and keep evaluation cases separate.

**Output:** An SVD reconstruction notebook with rank slider or rank table.

**Effort:** 10h · Beginner → intermediate

- **Probability, distributions and statistics:** Extend the project with Probability, distributions and statistics in Matrix compression explorer. Adapt this focused lab to the project data: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.  Required concepts: Conditional probability, Distributions, Statistics.
  - Deliverable: Probability, distributions and statistics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An SVD reconstruction notebook with rank slider or rank table. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Probability, distributions and statistics: Probability, distributions and statistics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify error decreases with rank and report retained storage.
- [ ] Probability, distributions and statistics: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Geometric similarity explorer

A learner needs to understand why vector scaling changes retrieval.

**Data:** Generate 60 two-dimensional points with three labeled groups. Use a fixed seed and keep evaluation cases separate.

**Output:** A notebook comparing dot product, cosine and Euclidean rankings.

**Effort:** 10h · Beginner → intermediate

- **Probability, distributions and statistics:** Extend the project with Probability, distributions and statistics in Geometric similarity explorer. Adapt this focused lab to the project data: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.  Required concepts: Conditional probability, Distributions, Statistics.
  - Deliverable: Probability, distributions and statistics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A notebook comparing dot product, cosine and Euclidean rankings. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Probability, distributions and statistics: Probability, distributions and statistics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify hand-calculated examples and explain ranking changes after scaling.
- [ ] Probability, distributions and statistics: Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Practical data work

<a id="data-numpy"></a>

### NumPy arrays, shapes and broadcasting

Use vectorized transformations while detecting silent shape mistakes.

**Priority:** Foundation · **Study:** 2h · **Practice:** 3h

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

### Finite difference microscope

A learner needs to verify derivatives used in optimization.

**Data:** Generate a 30-row quadratic regression problem. Use a fixed seed and keep evaluation cases separate.

**Output:** A notebook comparing analytical and numerical gradients.

**Effort:** 10h · Beginner → intermediate

- **NumPy arrays, shapes and broadcasting:** Implement the project numeric transformations with explicit NumPy shapes and vectorized operations; explain the relevant matrix calculations. Apply this to Finite difference microscope: A notebook comparing analytical and numerical gradients. Focus: Array axes, Broadcasting, Vectorization.
  - Deliverable: Array transformation module and hand-calculated examples
  - Check: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A notebook comparing analytical and numerical gradients. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · NumPy arrays, shapes and broadcasting: Array transformation module and hand-calculated examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report relative error for multiple step sizes and explain cancellation.
- [ ] NumPy arrays, shapes and broadcasting: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature scaling geometry

A model builder needs to understand units before measuring distance.

**Data:** Generate height/income features with very different scales. Use a fixed seed and keep evaluation cases separate.

**Output:** A NumPy study of standard, robust and min-max scaling.

**Effort:** 10h · Beginner → intermediate

- **NumPy arrays, shapes and broadcasting:** Implement the project numeric transformations with explicit NumPy shapes and vectorized operations; explain the relevant matrix calculations. Apply this to Feature scaling geometry: A NumPy study of standard, robust and min-max scaling. Focus: Array axes, Broadcasting, Vectorization.
  - Deliverable: Array transformation module and hand-calculated examples
  - Check: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A NumPy study of standard, robust and min-max scaling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · NumPy arrays, shapes and broadcasting: Array transformation module and hand-calculated examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Fit scaling on training rows only and compare neighbor identities.
- [ ] NumPy arrays, shapes and broadcasting: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Geometric similarity explorer

A learner needs to understand why vector scaling changes retrieval.

**Data:** Generate 60 two-dimensional points with three labeled groups. Use a fixed seed and keep evaluation cases separate.

**Output:** A notebook comparing dot product, cosine and Euclidean rankings.

**Effort:** 10h · Beginner → intermediate

- **NumPy arrays, shapes and broadcasting:** Implement the project numeric transformations with explicit NumPy shapes and vectorized operations; explain the relevant matrix calculations. Apply this to Geometric similarity explorer: A notebook comparing dot product, cosine and Euclidean rankings. Focus: Array axes, Broadcasting, Vectorization.
  - Deliverable: Array transformation module and hand-calculated examples
  - Check: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A notebook comparing dot product, cosine and Euclidean rankings. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · NumPy arrays, shapes and broadcasting: Array transformation module and hand-calculated examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify hand-calculated examples and explain ranking changes after scaling.
- [ ] NumPy arrays, shapes and broadcasting: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Conditional probability simulator

An analyst needs to distinguish test accuracy from posterior probability.

**Data:** Simulate 10000 fictional cases at three base rates. Use a fixed seed and keep evaluation cases separate.

**Output:** A contingency table and Bayes-rule calculator.

**Effort:** 10h · Beginner → intermediate

- **NumPy arrays, shapes and broadcasting:** Implement the project numeric transformations with explicit NumPy shapes and vectorized operations; explain the relevant matrix calculations. Apply this to Conditional probability simulator: A contingency table and Bayes-rule calculator. Focus: Array axes, Broadcasting, Vectorization.
  - Deliverable: Array transformation module and hand-calculated examples
  - Check: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A contingency table and Bayes-rule calculator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · NumPy arrays, shapes and broadcasting: Array transformation module and hand-calculated examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match analytical posterior values within stated simulation tolerance.
- [ ] NumPy arrays, shapes and broadcasting: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Bootstrap uncertainty studio

A product analyst needs uncertainty around a small sample mean.

**Data:** Generate 80 session lengths with a skewed distribution. Use a fixed seed and keep evaluation cases separate.

**Output:** A bootstrap interval report with reproducible resampling.

**Effort:** 10h · Beginner → intermediate

- **NumPy arrays, shapes and broadcasting:** Implement the project numeric transformations with explicit NumPy shapes and vectorized operations; explain the relevant matrix calculations. Apply this to Bootstrap uncertainty studio: A bootstrap interval report with reproducible resampling. Focus: Array axes, Broadcasting, Vectorization.
  - Deliverable: Array transformation module and hand-calculated examples
  - Check: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bootstrap interval report with reproducible resampling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · NumPy arrays, shapes and broadcasting: Array transformation module and hand-calculated examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare percentile intervals with a normal approximation and discuss limits.
- [ ] NumPy arrays, shapes and broadcasting: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Misleading chart repair desk

A report author needs honest charts for comparing groups.

**Data:** Create four group distributions with outliers and unequal sizes. Use a fixed seed and keep evaluation cases separate.

**Output:** Before/after charts with labeled axes and interpretation notes.

**Effort:** 10h · Beginner → intermediate

- **NumPy arrays, shapes and broadcasting:** Implement the project numeric transformations with explicit NumPy shapes and vectorized operations; explain the relevant matrix calculations. Apply this to Misleading chart repair desk: Before/after charts with labeled axes and interpretation notes. Focus: Array axes, Broadcasting, Vectorization.
  - Deliverable: Array transformation module and hand-calculated examples
  - Check: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Before/after charts with labeled axes and interpretation notes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · NumPy arrays, shapes and broadcasting: Array transformation module and hand-calculated examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show sample counts and uncertainty; avoid hiding outliers or truncating a bar axis.
- [ ] NumPy arrays, shapes and broadcasting: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Distribution shift notebook

A team needs to notice changing input distributions.

**Data:** Generate reference and shifted sensor batches with known mean and variance changes. Use a fixed seed and keep evaluation cases separate.

**Output:** Histograms, summary statistics and a shift investigation report.

**Effort:** 10h · Beginner → intermediate

- **NumPy arrays, shapes and broadcasting:** Implement the project numeric transformations with explicit NumPy shapes and vectorized operations; explain the relevant matrix calculations. Apply this to Distribution shift notebook: Histograms, summary statistics and a shift investigation report. Focus: Array axes, Broadcasting, Vectorization.
  - Deliverable: Array transformation module and hand-calculated examples
  - Check: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Histograms, summary statistics and a shift investigation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · NumPy arrays, shapes and broadcasting: Array transformation module and hand-calculated examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect the seeded shift and explain why detection does not identify its cause.
- [ ] NumPy arrays, shapes and broadcasting: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data join integrity checker

An analyst needs to detect duplicated rows caused by joins.

**Data:** Create customer and order CSV files with missing and duplicated keys. Use a fixed seed and keep evaluation cases separate.

**Output:** A pandas join audit with rejected records and row-count explanations.

**Effort:** 10h · Beginner → intermediate

- **NumPy arrays, shapes and broadcasting:** Implement the project numeric transformations with explicit NumPy shapes and vectorized operations; explain the relevant matrix calculations. Apply this to Data join integrity checker: A pandas join audit with rejected records and row-count explanations. Focus: Array axes, Broadcasting, Vectorization.
  - Deliverable: Array transformation module and hand-calculated examples
  - Check: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A pandas join audit with rejected records and row-count explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · NumPy arrays, shapes and broadcasting: Array transformation module and hand-calculated examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect many-to-many expansion and reconcile order totals.
- [ ] NumPy arrays, shapes and broadcasting: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Missing value investigation

A researcher needs to understand how missingness alters summaries.

**Data:** Generate 200 survey rows with random and income-dependent missingness. Use a fixed seed and keep evaluation cases separate.

**Output:** A cleaning notebook comparing deletion and imputation.

**Effort:** 10h · Beginner → intermediate

- **NumPy arrays, shapes and broadcasting:** Implement the project numeric transformations with explicit NumPy shapes and vectorized operations; explain the relevant matrix calculations. Apply this to Missing value investigation: A cleaning notebook comparing deletion and imputation. Focus: Array axes, Broadcasting, Vectorization.
  - Deliverable: Array transformation module and hand-calculated examples
  - Check: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cleaning notebook comparing deletion and imputation. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · NumPy arrays, shapes and broadcasting: Array transformation module and hand-calculated examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Quantify bias under each missingness mechanism without claiming causality.
- [ ] NumPy arrays, shapes and broadcasting: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Matrix compression explorer

A learner needs to see the accuracy/storage tradeoff in low-rank approximation.

**Data:** Generate a 64 by 64 grayscale pattern with noise. Use a fixed seed and keep evaluation cases separate.

**Output:** An SVD reconstruction notebook with rank slider or rank table.

**Effort:** 10h · Beginner → intermediate

- **NumPy arrays, shapes and broadcasting:** Implement the project numeric transformations with explicit NumPy shapes and vectorized operations; explain the relevant matrix calculations. Apply this to Matrix compression explorer: An SVD reconstruction notebook with rank slider or rank table. Focus: Array axes, Broadcasting, Vectorization.
  - Deliverable: Array transformation module and hand-calculated examples
  - Check: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An SVD reconstruction notebook with rank slider or rank table. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · NumPy arrays, shapes and broadcasting: Array transformation module and hand-calculated examples
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify error decreases with rank and report retained storage.
- [ ] NumPy arrays, shapes and broadcasting: Compare vectorized results with a simple reference loop and test empty and incompatible shapes. Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="data-pandas"></a>

### pandas, cleaning and missing values

Build trustworthy datasets and record what preprocessing changed.

**Priority:** Foundation · **Study:** 2h · **Practice:** 3h

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

### Data join integrity checker

An analyst needs to detect duplicated rows caused by joins.

**Data:** Create customer and order CSV files with missing and duplicated keys. Use a fixed seed and keep evaluation cases separate.

**Output:** A pandas join audit with rejected records and row-count explanations.

**Effort:** 10h · Beginner → intermediate

- **pandas, cleaning and missing values:** Load and clean project tables with explicit dtypes, missing-value rules, duplicate checks and validated joins. Apply this to Data join integrity checker: A pandas join audit with rejected records and row-count explanations. Focus: DataFrames, Missing and duplicate data, Data quality.
  - Deliverable: Reproducible cleaning pipeline and rejected-row report
  - Check: Reconcile row counts and totals and verify repeated cleaning is idempotent. Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A pandas join audit with rejected records and row-count explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · pandas, cleaning and missing values: Reproducible cleaning pipeline and rejected-row report
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect many-to-many expansion and reconcile order totals.
- [ ] pandas, cleaning and missing values: Reconcile row counts and totals and verify repeated cleaning is idempotent. Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Missing value investigation

A researcher needs to understand how missingness alters summaries.

**Data:** Generate 200 survey rows with random and income-dependent missingness. Use a fixed seed and keep evaluation cases separate.

**Output:** A cleaning notebook comparing deletion and imputation.

**Effort:** 10h · Beginner → intermediate

- **pandas, cleaning and missing values:** Load and clean project tables with explicit dtypes, missing-value rules, duplicate checks and validated joins. Apply this to Missing value investigation: A cleaning notebook comparing deletion and imputation. Focus: DataFrames, Missing and duplicate data, Data quality.
  - Deliverable: Reproducible cleaning pipeline and rejected-row report
  - Check: Reconcile row counts and totals and verify repeated cleaning is idempotent. Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cleaning notebook comparing deletion and imputation. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · pandas, cleaning and missing values: Reproducible cleaning pipeline and rejected-row report
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Quantify bias under each missingness mechanism without claiming causality.
- [ ] pandas, cleaning and missing values: Reconcile row counts and totals and verify repeated cleaning is idempotent. Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Conditional probability simulator

An analyst needs to distinguish test accuracy from posterior probability.

**Data:** Simulate 10000 fictional cases at three base rates. Use a fixed seed and keep evaluation cases separate.

**Output:** A contingency table and Bayes-rule calculator.

**Effort:** 10h · Beginner → intermediate

- **pandas, cleaning and missing values:** Load and clean project tables with explicit dtypes, missing-value rules, duplicate checks and validated joins. Apply this to Conditional probability simulator: A contingency table and Bayes-rule calculator. Focus: DataFrames, Missing and duplicate data, Data quality.
  - Deliverable: Reproducible cleaning pipeline and rejected-row report
  - Check: Reconcile row counts and totals and verify repeated cleaning is idempotent. Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A contingency table and Bayes-rule calculator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · pandas, cleaning and missing values: Reproducible cleaning pipeline and rejected-row report
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match analytical posterior values within stated simulation tolerance.
- [ ] pandas, cleaning and missing values: Reconcile row counts and totals and verify repeated cleaning is idempotent. Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Bootstrap uncertainty studio

A product analyst needs uncertainty around a small sample mean.

**Data:** Generate 80 session lengths with a skewed distribution. Use a fixed seed and keep evaluation cases separate.

**Output:** A bootstrap interval report with reproducible resampling.

**Effort:** 10h · Beginner → intermediate

- **pandas, cleaning and missing values:** Load and clean project tables with explicit dtypes, missing-value rules, duplicate checks and validated joins. Apply this to Bootstrap uncertainty studio: A bootstrap interval report with reproducible resampling. Focus: DataFrames, Missing and duplicate data, Data quality.
  - Deliverable: Reproducible cleaning pipeline and rejected-row report
  - Check: Reconcile row counts and totals and verify repeated cleaning is idempotent. Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bootstrap interval report with reproducible resampling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · pandas, cleaning and missing values: Reproducible cleaning pipeline and rejected-row report
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare percentile intervals with a normal approximation and discuss limits.
- [ ] pandas, cleaning and missing values: Reconcile row counts and totals and verify repeated cleaning is idempotent. Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Misleading chart repair desk

A report author needs honest charts for comparing groups.

**Data:** Create four group distributions with outliers and unequal sizes. Use a fixed seed and keep evaluation cases separate.

**Output:** Before/after charts with labeled axes and interpretation notes.

**Effort:** 10h · Beginner → intermediate

- **pandas, cleaning and missing values:** Load and clean project tables with explicit dtypes, missing-value rules, duplicate checks and validated joins. Apply this to Misleading chart repair desk: Before/after charts with labeled axes and interpretation notes. Focus: DataFrames, Missing and duplicate data, Data quality.
  - Deliverable: Reproducible cleaning pipeline and rejected-row report
  - Check: Reconcile row counts and totals and verify repeated cleaning is idempotent. Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Before/after charts with labeled axes and interpretation notes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · pandas, cleaning and missing values: Reproducible cleaning pipeline and rejected-row report
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show sample counts and uncertainty; avoid hiding outliers or truncating a bar axis.
- [ ] pandas, cleaning and missing values: Reconcile row counts and totals and verify repeated cleaning is idempotent. Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Distribution shift notebook

A team needs to notice changing input distributions.

**Data:** Generate reference and shifted sensor batches with known mean and variance changes. Use a fixed seed and keep evaluation cases separate.

**Output:** Histograms, summary statistics and a shift investigation report.

**Effort:** 10h · Beginner → intermediate

- **pandas, cleaning and missing values:** Load and clean project tables with explicit dtypes, missing-value rules, duplicate checks and validated joins. Apply this to Distribution shift notebook: Histograms, summary statistics and a shift investigation report. Focus: DataFrames, Missing and duplicate data, Data quality.
  - Deliverable: Reproducible cleaning pipeline and rejected-row report
  - Check: Reconcile row counts and totals and verify repeated cleaning is idempotent. Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Histograms, summary statistics and a shift investigation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · pandas, cleaning and missing values: Reproducible cleaning pipeline and rejected-row report
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect the seeded shift and explain why detection does not identify its cause.
- [ ] pandas, cleaning and missing values: Reconcile row counts and totals and verify repeated cleaning is idempotent. Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Finite difference microscope

A learner needs to verify derivatives used in optimization.

**Data:** Generate a 30-row quadratic regression problem. Use a fixed seed and keep evaluation cases separate.

**Output:** A notebook comparing analytical and numerical gradients.

**Effort:** 10h · Beginner → intermediate

- **pandas, cleaning and missing values:** Load and clean project tables with explicit dtypes, missing-value rules, duplicate checks and validated joins. Apply this to Finite difference microscope: A notebook comparing analytical and numerical gradients. Focus: DataFrames, Missing and duplicate data, Data quality.
  - Deliverable: Reproducible cleaning pipeline and rejected-row report
  - Check: Reconcile row counts and totals and verify repeated cleaning is idempotent. Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A notebook comparing analytical and numerical gradients. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · pandas, cleaning and missing values: Reproducible cleaning pipeline and rejected-row report
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report relative error for multiple step sizes and explain cancellation.
- [ ] pandas, cleaning and missing values: Reconcile row counts and totals and verify repeated cleaning is idempotent. Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature scaling geometry

A model builder needs to understand units before measuring distance.

**Data:** Generate height/income features with very different scales. Use a fixed seed and keep evaluation cases separate.

**Output:** A NumPy study of standard, robust and min-max scaling.

**Effort:** 10h · Beginner → intermediate

- **pandas, cleaning and missing values:** Load and clean project tables with explicit dtypes, missing-value rules, duplicate checks and validated joins. Apply this to Feature scaling geometry: A NumPy study of standard, robust and min-max scaling. Focus: DataFrames, Missing and duplicate data, Data quality.
  - Deliverable: Reproducible cleaning pipeline and rejected-row report
  - Check: Reconcile row counts and totals and verify repeated cleaning is idempotent. Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A NumPy study of standard, robust and min-max scaling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · pandas, cleaning and missing values: Reproducible cleaning pipeline and rejected-row report
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Fit scaling on training rows only and compare neighbor identities.
- [ ] pandas, cleaning and missing values: Reconcile row counts and totals and verify repeated cleaning is idempotent. Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Matrix compression explorer

A learner needs to see the accuracy/storage tradeoff in low-rank approximation.

**Data:** Generate a 64 by 64 grayscale pattern with noise. Use a fixed seed and keep evaluation cases separate.

**Output:** An SVD reconstruction notebook with rank slider or rank table.

**Effort:** 10h · Beginner → intermediate

- **pandas, cleaning and missing values:** Load and clean project tables with explicit dtypes, missing-value rules, duplicate checks and validated joins. Apply this to Matrix compression explorer: An SVD reconstruction notebook with rank slider or rank table. Focus: DataFrames, Missing and duplicate data, Data quality.
  - Deliverable: Reproducible cleaning pipeline and rejected-row report
  - Check: Reconcile row counts and totals and verify repeated cleaning is idempotent. Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An SVD reconstruction notebook with rank slider or rank table. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · pandas, cleaning and missing values: Reproducible cleaning pipeline and rejected-row report
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify error decreases with rank and report retained storage.
- [ ] pandas, cleaning and missing values: Reconcile row counts and totals and verify repeated cleaning is idempotent. Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Geometric similarity explorer

A learner needs to understand why vector scaling changes retrieval.

**Data:** Generate 60 two-dimensional points with three labeled groups. Use a fixed seed and keep evaluation cases separate.

**Output:** A notebook comparing dot product, cosine and Euclidean rankings.

**Effort:** 10h · Beginner → intermediate

- **pandas, cleaning and missing values:** Load and clean project tables with explicit dtypes, missing-value rules, duplicate checks and validated joins. Apply this to Geometric similarity explorer: A notebook comparing dot product, cosine and Euclidean rankings. Focus: DataFrames, Missing and duplicate data, Data quality.
  - Deliverable: Reproducible cleaning pipeline and rejected-row report
  - Check: Reconcile row counts and totals and verify repeated cleaning is idempotent. Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A notebook comparing dot product, cosine and Euclidean rankings. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · pandas, cleaning and missing values: Reproducible cleaning pipeline and rejected-row report
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify hand-calculated examples and explain ranking changes after scaling.
- [ ] pandas, cleaning and missing values: Reconcile row counts and totals and verify repeated cleaning is idempotent. Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="data-visualization"></a>

### Visualization and exploratory analysis

Detect imbalance, outliers and misleading aggregates before training.

**Priority:** Foundation · **Study:** 2h · **Practice:** 3h

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

### Misleading chart repair desk

A report author needs honest charts for comparing groups.

**Data:** Create four group distributions with outliers and unequal sizes. Use a fixed seed and keep evaluation cases separate.

**Output:** Before/after charts with labeled axes and interpretation notes.

**Effort:** 10h · Beginner → intermediate

- **Visualization and exploratory analysis:** Implement Visualization and exploratory analysis in Misleading chart repair desk. Adapt this focused lab to the project data: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.  Required concepts: Distributions, Relationships, Communication.
  - Deliverable: Visualization and exploratory analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Before/after charts with labeled axes and interpretation notes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Visualization and exploratory analysis: Visualization and exploratory analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show sample counts and uncertainty; avoid hiding outliers or truncating a bar axis.
- [ ] Visualization and exploratory analysis: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Distribution shift notebook

A team needs to notice changing input distributions.

**Data:** Generate reference and shifted sensor batches with known mean and variance changes. Use a fixed seed and keep evaluation cases separate.

**Output:** Histograms, summary statistics and a shift investigation report.

**Effort:** 10h · Beginner → intermediate

- **Visualization and exploratory analysis:** Implement Visualization and exploratory analysis in Distribution shift notebook. Adapt this focused lab to the project data: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.  Required concepts: Distributions, Relationships, Communication.
  - Deliverable: Visualization and exploratory analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Histograms, summary statistics and a shift investigation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Visualization and exploratory analysis: Visualization and exploratory analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect the seeded shift and explain why detection does not identify its cause.
- [ ] Visualization and exploratory analysis: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Conditional probability simulator

An analyst needs to distinguish test accuracy from posterior probability.

**Data:** Simulate 10000 fictional cases at three base rates. Use a fixed seed and keep evaluation cases separate.

**Output:** A contingency table and Bayes-rule calculator.

**Effort:** 10h · Beginner → intermediate

- **Visualization and exploratory analysis:** Extend the project with Visualization and exploratory analysis in Conditional probability simulator. Adapt this focused lab to the project data: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.  Required concepts: Distributions, Relationships, Communication.
  - Deliverable: Visualization and exploratory analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A contingency table and Bayes-rule calculator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Visualization and exploratory analysis: Visualization and exploratory analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match analytical posterior values within stated simulation tolerance.
- [ ] Visualization and exploratory analysis: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Bootstrap uncertainty studio

A product analyst needs uncertainty around a small sample mean.

**Data:** Generate 80 session lengths with a skewed distribution. Use a fixed seed and keep evaluation cases separate.

**Output:** A bootstrap interval report with reproducible resampling.

**Effort:** 10h · Beginner → intermediate

- **Visualization and exploratory analysis:** Extend the project with Visualization and exploratory analysis in Bootstrap uncertainty studio. Adapt this focused lab to the project data: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.  Required concepts: Distributions, Relationships, Communication.
  - Deliverable: Visualization and exploratory analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bootstrap interval report with reproducible resampling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Visualization and exploratory analysis: Visualization and exploratory analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare percentile intervals with a normal approximation and discuss limits.
- [ ] Visualization and exploratory analysis: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Finite difference microscope

A learner needs to verify derivatives used in optimization.

**Data:** Generate a 30-row quadratic regression problem. Use a fixed seed and keep evaluation cases separate.

**Output:** A notebook comparing analytical and numerical gradients.

**Effort:** 10h · Beginner → intermediate

- **Visualization and exploratory analysis:** Extend the project with Visualization and exploratory analysis in Finite difference microscope. Adapt this focused lab to the project data: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.  Required concepts: Distributions, Relationships, Communication.
  - Deliverable: Visualization and exploratory analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A notebook comparing analytical and numerical gradients. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Visualization and exploratory analysis: Visualization and exploratory analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report relative error for multiple step sizes and explain cancellation.
- [ ] Visualization and exploratory analysis: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data join integrity checker

An analyst needs to detect duplicated rows caused by joins.

**Data:** Create customer and order CSV files with missing and duplicated keys. Use a fixed seed and keep evaluation cases separate.

**Output:** A pandas join audit with rejected records and row-count explanations.

**Effort:** 10h · Beginner → intermediate

- **Visualization and exploratory analysis:** Extend the project with Visualization and exploratory analysis in Data join integrity checker. Adapt this focused lab to the project data: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.  Required concepts: Distributions, Relationships, Communication.
  - Deliverable: Visualization and exploratory analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A pandas join audit with rejected records and row-count explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Visualization and exploratory analysis: Visualization and exploratory analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect many-to-many expansion and reconcile order totals.
- [ ] Visualization and exploratory analysis: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Missing value investigation

A researcher needs to understand how missingness alters summaries.

**Data:** Generate 200 survey rows with random and income-dependent missingness. Use a fixed seed and keep evaluation cases separate.

**Output:** A cleaning notebook comparing deletion and imputation.

**Effort:** 10h · Beginner → intermediate

- **Visualization and exploratory analysis:** Extend the project with Visualization and exploratory analysis in Missing value investigation. Adapt this focused lab to the project data: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.  Required concepts: Distributions, Relationships, Communication.
  - Deliverable: Visualization and exploratory analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cleaning notebook comparing deletion and imputation. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Visualization and exploratory analysis: Visualization and exploratory analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Quantify bias under each missingness mechanism without claiming causality.
- [ ] Visualization and exploratory analysis: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature scaling geometry

A model builder needs to understand units before measuring distance.

**Data:** Generate height/income features with very different scales. Use a fixed seed and keep evaluation cases separate.

**Output:** A NumPy study of standard, robust and min-max scaling.

**Effort:** 10h · Beginner → intermediate

- **Visualization and exploratory analysis:** Extend the project with Visualization and exploratory analysis in Feature scaling geometry. Adapt this focused lab to the project data: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.  Required concepts: Distributions, Relationships, Communication.
  - Deliverable: Visualization and exploratory analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A NumPy study of standard, robust and min-max scaling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Visualization and exploratory analysis: Visualization and exploratory analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Fit scaling on training rows only and compare neighbor identities.
- [ ] Visualization and exploratory analysis: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Matrix compression explorer

A learner needs to see the accuracy/storage tradeoff in low-rank approximation.

**Data:** Generate a 64 by 64 grayscale pattern with noise. Use a fixed seed and keep evaluation cases separate.

**Output:** An SVD reconstruction notebook with rank slider or rank table.

**Effort:** 10h · Beginner → intermediate

- **Visualization and exploratory analysis:** Extend the project with Visualization and exploratory analysis in Matrix compression explorer. Adapt this focused lab to the project data: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.  Required concepts: Distributions, Relationships, Communication.
  - Deliverable: Visualization and exploratory analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An SVD reconstruction notebook with rank slider or rank table. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Visualization and exploratory analysis: Visualization and exploratory analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify error decreases with rank and report retained storage.
- [ ] Visualization and exploratory analysis: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Geometric similarity explorer

A learner needs to understand why vector scaling changes retrieval.

**Data:** Generate 60 two-dimensional points with three labeled groups. Use a fixed seed and keep evaluation cases separate.

**Output:** A notebook comparing dot product, cosine and Euclidean rankings.

**Effort:** 10h · Beginner → intermediate

- **Visualization and exploratory analysis:** Extend the project with Visualization and exploratory analysis in Geometric similarity explorer. Adapt this focused lab to the project data: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.  Required concepts: Distributions, Relationships, Communication.
  - Deliverable: Visualization and exploratory analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A notebook comparing dot product, cosine and Euclidean rankings. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Visualization and exploratory analysis: Visualization and exploratory analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify hand-calculated examples and explain ranking changes after scaling.
- [ ] Visualization and exploratory analysis: Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Mathematical tools in detail

<a id="math-linear-decompositions"></a>

### Norms, projections, eigenvectors and SVD intuition

Connect vector operations to embeddings, dimensionality reduction and stable numerical code.

**Priority:** Foundation · **Study:** 3h · **Practice:** 4h

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

### Matrix compression explorer

A learner needs to see the accuracy/storage tradeoff in low-rank approximation.

**Data:** Generate a 64 by 64 grayscale pattern with noise. Use a fixed seed and keep evaluation cases separate.

**Output:** An SVD reconstruction notebook with rank slider or rank table.

**Effort:** 10h · Beginner → intermediate

- **Norms, projections, eigenvectors and SVD intuition:** Implement Norms, projections, eigenvectors and SVD intuition in Matrix compression explorer. Adapt this focused lab to the project data: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.  Required concepts: Vector norms, Projection geometry, Eigenvector intuition, SVD and low rank, Numerical conditioning.
  - Deliverable: Norms, projections, eigenvectors and SVD intuition: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An SVD reconstruction notebook with rank slider or rank table. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Norms, projections, eigenvectors and SVD intuition: Norms, projections, eigenvectors and SVD intuition: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify error decreases with rank and report retained storage.
- [ ] Norms, projections, eigenvectors and SVD intuition: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Conditional probability simulator

An analyst needs to distinguish test accuracy from posterior probability.

**Data:** Simulate 10000 fictional cases at three base rates. Use a fixed seed and keep evaluation cases separate.

**Output:** A contingency table and Bayes-rule calculator.

**Effort:** 10h · Beginner → intermediate

- **Norms, projections, eigenvectors and SVD intuition:** Extend the project with Norms, projections, eigenvectors and SVD intuition in Conditional probability simulator. Adapt this focused lab to the project data: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.  Required concepts: Vector norms, Projection geometry, Eigenvector intuition, SVD and low rank, Numerical conditioning.
  - Deliverable: Norms, projections, eigenvectors and SVD intuition: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A contingency table and Bayes-rule calculator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Norms, projections, eigenvectors and SVD intuition: Norms, projections, eigenvectors and SVD intuition: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match analytical posterior values within stated simulation tolerance.
- [ ] Norms, projections, eigenvectors and SVD intuition: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Bootstrap uncertainty studio

A product analyst needs uncertainty around a small sample mean.

**Data:** Generate 80 session lengths with a skewed distribution. Use a fixed seed and keep evaluation cases separate.

**Output:** A bootstrap interval report with reproducible resampling.

**Effort:** 10h · Beginner → intermediate

- **Norms, projections, eigenvectors and SVD intuition:** Extend the project with Norms, projections, eigenvectors and SVD intuition in Bootstrap uncertainty studio. Adapt this focused lab to the project data: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.  Required concepts: Vector norms, Projection geometry, Eigenvector intuition, SVD and low rank, Numerical conditioning.
  - Deliverable: Norms, projections, eigenvectors and SVD intuition: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bootstrap interval report with reproducible resampling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Norms, projections, eigenvectors and SVD intuition: Norms, projections, eigenvectors and SVD intuition: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare percentile intervals with a normal approximation and discuss limits.
- [ ] Norms, projections, eigenvectors and SVD intuition: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Misleading chart repair desk

A report author needs honest charts for comparing groups.

**Data:** Create four group distributions with outliers and unequal sizes. Use a fixed seed and keep evaluation cases separate.

**Output:** Before/after charts with labeled axes and interpretation notes.

**Effort:** 10h · Beginner → intermediate

- **Norms, projections, eigenvectors and SVD intuition:** Extend the project with Norms, projections, eigenvectors and SVD intuition in Misleading chart repair desk. Adapt this focused lab to the project data: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.  Required concepts: Vector norms, Projection geometry, Eigenvector intuition, SVD and low rank, Numerical conditioning.
  - Deliverable: Norms, projections, eigenvectors and SVD intuition: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Before/after charts with labeled axes and interpretation notes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Norms, projections, eigenvectors and SVD intuition: Norms, projections, eigenvectors and SVD intuition: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show sample counts and uncertainty; avoid hiding outliers or truncating a bar axis.
- [ ] Norms, projections, eigenvectors and SVD intuition: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Distribution shift notebook

A team needs to notice changing input distributions.

**Data:** Generate reference and shifted sensor batches with known mean and variance changes. Use a fixed seed and keep evaluation cases separate.

**Output:** Histograms, summary statistics and a shift investigation report.

**Effort:** 10h · Beginner → intermediate

- **Norms, projections, eigenvectors and SVD intuition:** Extend the project with Norms, projections, eigenvectors and SVD intuition in Distribution shift notebook. Adapt this focused lab to the project data: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.  Required concepts: Vector norms, Projection geometry, Eigenvector intuition, SVD and low rank, Numerical conditioning.
  - Deliverable: Norms, projections, eigenvectors and SVD intuition: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Histograms, summary statistics and a shift investigation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Norms, projections, eigenvectors and SVD intuition: Norms, projections, eigenvectors and SVD intuition: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect the seeded shift and explain why detection does not identify its cause.
- [ ] Norms, projections, eigenvectors and SVD intuition: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Finite difference microscope

A learner needs to verify derivatives used in optimization.

**Data:** Generate a 30-row quadratic regression problem. Use a fixed seed and keep evaluation cases separate.

**Output:** A notebook comparing analytical and numerical gradients.

**Effort:** 10h · Beginner → intermediate

- **Norms, projections, eigenvectors and SVD intuition:** Extend the project with Norms, projections, eigenvectors and SVD intuition in Finite difference microscope. Adapt this focused lab to the project data: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.  Required concepts: Vector norms, Projection geometry, Eigenvector intuition, SVD and low rank, Numerical conditioning.
  - Deliverable: Norms, projections, eigenvectors and SVD intuition: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A notebook comparing analytical and numerical gradients. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Norms, projections, eigenvectors and SVD intuition: Norms, projections, eigenvectors and SVD intuition: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report relative error for multiple step sizes and explain cancellation.
- [ ] Norms, projections, eigenvectors and SVD intuition: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data join integrity checker

An analyst needs to detect duplicated rows caused by joins.

**Data:** Create customer and order CSV files with missing and duplicated keys. Use a fixed seed and keep evaluation cases separate.

**Output:** A pandas join audit with rejected records and row-count explanations.

**Effort:** 10h · Beginner → intermediate

- **Norms, projections, eigenvectors and SVD intuition:** Extend the project with Norms, projections, eigenvectors and SVD intuition in Data join integrity checker. Adapt this focused lab to the project data: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.  Required concepts: Vector norms, Projection geometry, Eigenvector intuition, SVD and low rank, Numerical conditioning.
  - Deliverable: Norms, projections, eigenvectors and SVD intuition: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A pandas join audit with rejected records and row-count explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Norms, projections, eigenvectors and SVD intuition: Norms, projections, eigenvectors and SVD intuition: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect many-to-many expansion and reconcile order totals.
- [ ] Norms, projections, eigenvectors and SVD intuition: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Missing value investigation

A researcher needs to understand how missingness alters summaries.

**Data:** Generate 200 survey rows with random and income-dependent missingness. Use a fixed seed and keep evaluation cases separate.

**Output:** A cleaning notebook comparing deletion and imputation.

**Effort:** 10h · Beginner → intermediate

- **Norms, projections, eigenvectors and SVD intuition:** Extend the project with Norms, projections, eigenvectors and SVD intuition in Missing value investigation. Adapt this focused lab to the project data: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.  Required concepts: Vector norms, Projection geometry, Eigenvector intuition, SVD and low rank, Numerical conditioning.
  - Deliverable: Norms, projections, eigenvectors and SVD intuition: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cleaning notebook comparing deletion and imputation. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Norms, projections, eigenvectors and SVD intuition: Norms, projections, eigenvectors and SVD intuition: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Quantify bias under each missingness mechanism without claiming causality.
- [ ] Norms, projections, eigenvectors and SVD intuition: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature scaling geometry

A model builder needs to understand units before measuring distance.

**Data:** Generate height/income features with very different scales. Use a fixed seed and keep evaluation cases separate.

**Output:** A NumPy study of standard, robust and min-max scaling.

**Effort:** 10h · Beginner → intermediate

- **Norms, projections, eigenvectors and SVD intuition:** Extend the project with Norms, projections, eigenvectors and SVD intuition in Feature scaling geometry. Adapt this focused lab to the project data: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.  Required concepts: Vector norms, Projection geometry, Eigenvector intuition, SVD and low rank, Numerical conditioning.
  - Deliverable: Norms, projections, eigenvectors and SVD intuition: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A NumPy study of standard, robust and min-max scaling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Norms, projections, eigenvectors and SVD intuition: Norms, projections, eigenvectors and SVD intuition: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Fit scaling on training rows only and compare neighbor identities.
- [ ] Norms, projections, eigenvectors and SVD intuition: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Geometric similarity explorer

A learner needs to understand why vector scaling changes retrieval.

**Data:** Generate 60 two-dimensional points with three labeled groups. Use a fixed seed and keep evaluation cases separate.

**Output:** A notebook comparing dot product, cosine and Euclidean rankings.

**Effort:** 10h · Beginner → intermediate

- **Norms, projections, eigenvectors and SVD intuition:** Extend the project with Norms, projections, eigenvectors and SVD intuition in Geometric similarity explorer. Adapt this focused lab to the project data: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.  Required concepts: Vector norms, Projection geometry, Eigenvector intuition, SVD and low rank, Numerical conditioning.
  - Deliverable: Norms, projections, eigenvectors and SVD intuition: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A notebook comparing dot product, cosine and Euclidean rankings. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Norms, projections, eigenvectors and SVD intuition: Norms, projections, eigenvectors and SVD intuition: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify hand-calculated examples and explain ranking changes after scaling.
- [ ] Norms, projections, eigenvectors and SVD intuition: Make a NumPy geometry notebook with projections, zero-safe normalisation and rank-one reconstruction. Include a PCA-style plot of generated points and a numerical-conditioning example with explicit tolerances.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Statistical reasoning and data contracts

<a id="data-statistics-validation"></a>

### Sampling, uncertainty, joins and dataset validation

Recognise misleading metrics and data transformations before fitting an AI model.

**Priority:** Foundation · **Study:** 3h · **Practice:** 4h

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

### Bootstrap uncertainty studio

A product analyst needs uncertainty around a small sample mean.

**Data:** Generate 80 session lengths with a skewed distribution. Use a fixed seed and keep evaluation cases separate.

**Output:** A bootstrap interval report with reproducible resampling.

**Effort:** 10h · Beginner → intermediate

- **Sampling, uncertainty, joins and dataset validation:** Implement Sampling, uncertainty, joins and dataset validation in Bootstrap uncertainty studio. Adapt this focused lab to the project data: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.  Required concepts: Sampling unit, Bootstrap intervals, Join cardinality, Schema and range checks, Missingness and provenance.
  - Deliverable: Sampling, uncertainty, joins and dataset validation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bootstrap interval report with reproducible resampling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Sampling, uncertainty, joins and dataset validation: Sampling, uncertainty, joins and dataset validation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare percentile intervals with a normal approximation and discuss limits.
- [ ] Sampling, uncertainty, joins and dataset validation: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Missing value investigation

A researcher needs to understand how missingness alters summaries.

**Data:** Generate 200 survey rows with random and income-dependent missingness. Use a fixed seed and keep evaluation cases separate.

**Output:** A cleaning notebook comparing deletion and imputation.

**Effort:** 10h · Beginner → intermediate

- **Sampling, uncertainty, joins and dataset validation:** Implement Sampling, uncertainty, joins and dataset validation in Missing value investigation. Adapt this focused lab to the project data: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.  Required concepts: Sampling unit, Bootstrap intervals, Join cardinality, Schema and range checks, Missingness and provenance.
  - Deliverable: Sampling, uncertainty, joins and dataset validation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cleaning notebook comparing deletion and imputation. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Sampling, uncertainty, joins and dataset validation: Sampling, uncertainty, joins and dataset validation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Quantify bias under each missingness mechanism without claiming causality.
- [ ] Sampling, uncertainty, joins and dataset validation: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Conditional probability simulator

An analyst needs to distinguish test accuracy from posterior probability.

**Data:** Simulate 10000 fictional cases at three base rates. Use a fixed seed and keep evaluation cases separate.

**Output:** A contingency table and Bayes-rule calculator.

**Effort:** 10h · Beginner → intermediate

- **Sampling, uncertainty, joins and dataset validation:** Extend the project with Sampling, uncertainty, joins and dataset validation in Conditional probability simulator. Adapt this focused lab to the project data: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.  Required concepts: Sampling unit, Bootstrap intervals, Join cardinality, Schema and range checks, Missingness and provenance.
  - Deliverable: Sampling, uncertainty, joins and dataset validation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A contingency table and Bayes-rule calculator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Sampling, uncertainty, joins and dataset validation: Sampling, uncertainty, joins and dataset validation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match analytical posterior values within stated simulation tolerance.
- [ ] Sampling, uncertainty, joins and dataset validation: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Misleading chart repair desk

A report author needs honest charts for comparing groups.

**Data:** Create four group distributions with outliers and unequal sizes. Use a fixed seed and keep evaluation cases separate.

**Output:** Before/after charts with labeled axes and interpretation notes.

**Effort:** 10h · Beginner → intermediate

- **Sampling, uncertainty, joins and dataset validation:** Extend the project with Sampling, uncertainty, joins and dataset validation in Misleading chart repair desk. Adapt this focused lab to the project data: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.  Required concepts: Sampling unit, Bootstrap intervals, Join cardinality, Schema and range checks, Missingness and provenance.
  - Deliverable: Sampling, uncertainty, joins and dataset validation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Before/after charts with labeled axes and interpretation notes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Sampling, uncertainty, joins and dataset validation: Sampling, uncertainty, joins and dataset validation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show sample counts and uncertainty; avoid hiding outliers or truncating a bar axis.
- [ ] Sampling, uncertainty, joins and dataset validation: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Distribution shift notebook

A team needs to notice changing input distributions.

**Data:** Generate reference and shifted sensor batches with known mean and variance changes. Use a fixed seed and keep evaluation cases separate.

**Output:** Histograms, summary statistics and a shift investigation report.

**Effort:** 10h · Beginner → intermediate

- **Sampling, uncertainty, joins and dataset validation:** Extend the project with Sampling, uncertainty, joins and dataset validation in Distribution shift notebook. Adapt this focused lab to the project data: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.  Required concepts: Sampling unit, Bootstrap intervals, Join cardinality, Schema and range checks, Missingness and provenance.
  - Deliverable: Sampling, uncertainty, joins and dataset validation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Histograms, summary statistics and a shift investigation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Sampling, uncertainty, joins and dataset validation: Sampling, uncertainty, joins and dataset validation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect the seeded shift and explain why detection does not identify its cause.
- [ ] Sampling, uncertainty, joins and dataset validation: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Finite difference microscope

A learner needs to verify derivatives used in optimization.

**Data:** Generate a 30-row quadratic regression problem. Use a fixed seed and keep evaluation cases separate.

**Output:** A notebook comparing analytical and numerical gradients.

**Effort:** 10h · Beginner → intermediate

- **Sampling, uncertainty, joins and dataset validation:** Extend the project with Sampling, uncertainty, joins and dataset validation in Finite difference microscope. Adapt this focused lab to the project data: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.  Required concepts: Sampling unit, Bootstrap intervals, Join cardinality, Schema and range checks, Missingness and provenance.
  - Deliverable: Sampling, uncertainty, joins and dataset validation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A notebook comparing analytical and numerical gradients. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Sampling, uncertainty, joins and dataset validation: Sampling, uncertainty, joins and dataset validation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report relative error for multiple step sizes and explain cancellation.
- [ ] Sampling, uncertainty, joins and dataset validation: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data join integrity checker

An analyst needs to detect duplicated rows caused by joins.

**Data:** Create customer and order CSV files with missing and duplicated keys. Use a fixed seed and keep evaluation cases separate.

**Output:** A pandas join audit with rejected records and row-count explanations.

**Effort:** 10h · Beginner → intermediate

- **Sampling, uncertainty, joins and dataset validation:** Extend the project with Sampling, uncertainty, joins and dataset validation in Data join integrity checker. Adapt this focused lab to the project data: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.  Required concepts: Sampling unit, Bootstrap intervals, Join cardinality, Schema and range checks, Missingness and provenance.
  - Deliverable: Sampling, uncertainty, joins and dataset validation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A pandas join audit with rejected records and row-count explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Sampling, uncertainty, joins and dataset validation: Sampling, uncertainty, joins and dataset validation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect many-to-many expansion and reconcile order totals.
- [ ] Sampling, uncertainty, joins and dataset validation: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature scaling geometry

A model builder needs to understand units before measuring distance.

**Data:** Generate height/income features with very different scales. Use a fixed seed and keep evaluation cases separate.

**Output:** A NumPy study of standard, robust and min-max scaling.

**Effort:** 10h · Beginner → intermediate

- **Sampling, uncertainty, joins and dataset validation:** Extend the project with Sampling, uncertainty, joins and dataset validation in Feature scaling geometry. Adapt this focused lab to the project data: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.  Required concepts: Sampling unit, Bootstrap intervals, Join cardinality, Schema and range checks, Missingness and provenance.
  - Deliverable: Sampling, uncertainty, joins and dataset validation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A NumPy study of standard, robust and min-max scaling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Sampling, uncertainty, joins and dataset validation: Sampling, uncertainty, joins and dataset validation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Fit scaling on training rows only and compare neighbor identities.
- [ ] Sampling, uncertainty, joins and dataset validation: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Matrix compression explorer

A learner needs to see the accuracy/storage tradeoff in low-rank approximation.

**Data:** Generate a 64 by 64 grayscale pattern with noise. Use a fixed seed and keep evaluation cases separate.

**Output:** An SVD reconstruction notebook with rank slider or rank table.

**Effort:** 10h · Beginner → intermediate

- **Sampling, uncertainty, joins and dataset validation:** Extend the project with Sampling, uncertainty, joins and dataset validation in Matrix compression explorer. Adapt this focused lab to the project data: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.  Required concepts: Sampling unit, Bootstrap intervals, Join cardinality, Schema and range checks, Missingness and provenance.
  - Deliverable: Sampling, uncertainty, joins and dataset validation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An SVD reconstruction notebook with rank slider or rank table. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Sampling, uncertainty, joins and dataset validation: Sampling, uncertainty, joins and dataset validation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify error decreases with rank and report retained storage.
- [ ] Sampling, uncertainty, joins and dataset validation: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Geometric similarity explorer

A learner needs to understand why vector scaling changes retrieval.

**Data:** Generate 60 two-dimensional points with three labeled groups. Use a fixed seed and keep evaluation cases separate.

**Output:** A notebook comparing dot product, cosine and Euclidean rankings.

**Effort:** 10h · Beginner → intermediate

- **Sampling, uncertainty, joins and dataset validation:** Extend the project with Sampling, uncertainty, joins and dataset validation in Geometric similarity explorer. Adapt this focused lab to the project data: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.  Required concepts: Sampling unit, Bootstrap intervals, Join cardinality, Schema and range checks, Missingness and provenance.
  - Deliverable: Sampling, uncertainty, joins and dataset validation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A notebook comparing dot product, cosine and Euclidean rankings. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Sampling, uncertainty, joins and dataset validation: Sampling, uncertainty, joins and dataset validation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify hand-calculated examples and explain ranking changes after scaling.
- [ ] Sampling, uncertainty, joins and dataset validation: Generate customer/event tables with duplicate keys, missing values and a unit error. Build a validation report, test join cardinality and calculate a bootstrap interval while documenting the independent sampling unit.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Bayes, likelihood and decision uncertainty

<a id="math-bayes-likelihood"></a>

### Bayes, likelihood and decision uncertainty

Bayes, likelihood and decision uncertainty helps you make explainable engineering decisions and test failure cases. Build the experiment below before relying on the concept in an AI system.

**Priority:** Foundation · **Study:** 4h · **Practice:** 5h

**Prerequisites:** [Probability, distributions and statistics](math-data.md#math-probability) Navigation is unrestricted.

#### Concepts

- [ ] **Conditional probability:** P(A given B) restricts the denominator to cases where B occurred.
  - Example: Use 1000 fictional cases with 10 positives and calculate precision from the confusion table.
  - Videos:
    - [College statistics — full course](https://www.youtube.com/watch?v=xxpc-HPKN28) · freeCodeCamp · Full course · approximately 8h
      - Explains: Descriptive statistics, probability, distributions and statistical reasoning.
      - Useful because: Learn to interpret dataset summaries and uncertainty instead of trusting one metric.
      - Watch for: Focus on conditional probability. Then reproduce the lesson example: Use 1000 fictional cases with 10 positives and calculate precision from the confusion table.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/free-statistics-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on conditional probability. Then reproduce the lesson example: Use 1000 fictional cases with 10 positives and calculate precision from the confusion table.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Bayes rule:** A posterior combines the prior with a likelihood and normalizes over competing explanations.
  - Example: Compare a detector at 1 percent and 20 percent prevalence with unchanged sensitivity.
  - Videos:
    - [College statistics — full course](https://www.youtube.com/watch?v=xxpc-HPKN28) · freeCodeCamp · Full course · approximately 8h
      - Explains: Descriptive statistics, probability, distributions and statistical reasoning.
      - Useful because: Learn to interpret dataset summaries and uncertainty instead of trusting one metric.
      - Watch for: Focus on bayes rule. Then reproduce the lesson example: Compare a detector at 1 percent and 20 percent prevalence with unchanged sensitivity.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/free-statistics-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on bayes rule. Then reproduce the lesson example: Compare a detector at 1 percent and 20 percent prevalence with unchanged sensitivity.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Likelihood versus probability:** Likelihood evaluates parameter choices against fixed observed data; it is not a probability distribution over parameters by itself.
  - Example: Compare the likelihood of eight heads in ten tosses under p=.5 and p=.8.
  - Videos:
    - [College statistics — full course](https://www.youtube.com/watch?v=xxpc-HPKN28) · freeCodeCamp · Full course · approximately 8h
      - Explains: Descriptive statistics, probability, distributions and statistical reasoning.
      - Useful because: Learn to interpret dataset summaries and uncertainty instead of trusting one metric.
      - Watch for: Focus on likelihood versus probability. Then reproduce the lesson example: Compare the likelihood of eight heads in ten tosses under p=.5 and p=.8.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/free-statistics-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on likelihood versus probability. Then reproduce the lesson example: Compare the likelihood of eight heads in ten tosses under p=.5 and p=.8.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Expectation and variance:** Expectation averages outcomes weighted by probability; variance measures spread around that mean.
  - Example: Compute the mean and variance of a three-outcome discrete variable.
  - Videos:
    - [College statistics — full course](https://www.youtube.com/watch?v=xxpc-HPKN28) · freeCodeCamp · Full course · approximately 8h
      - Explains: Descriptive statistics, probability, distributions and statistical reasoning.
      - Useful because: Learn to interpret dataset summaries and uncertainty instead of trusting one metric.
      - Watch for: Focus on expectation and variance. Then reproduce the lesson example: Compute the mean and variance of a three-outcome discrete variable.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/free-statistics-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on expectation and variance. Then reproduce the lesson example: Compute the mean and variance of a three-outcome discrete variable.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Decision costs:** A decision threshold depends on false-positive and false-negative consequences, not just the largest predicted probability.
  - Example: Compare expected costs of reviewing or accepting a fictional alert.
  - Videos:
    - [College statistics — full course](https://www.youtube.com/watch?v=xxpc-HPKN28) · freeCodeCamp · Full course · approximately 8h
      - Explains: Descriptive statistics, probability, distributions and statistical reasoning.
      - Useful because: Learn to interpret dataset summaries and uncertainty instead of trusting one metric.
      - Watch for: Focus on decision costs. Then reproduce the lesson example: Compare expected costs of reviewing or accepting a fictional alert.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/free-statistics-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on decision costs. Then reproduce the lesson example: Compare expected costs of reviewing or accepting a fictional alert.
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

1. [Official reference: Bayes, likelihood and decision uncertainty](https://seeing-theory.brown.edu/bayesian-inference/index.html) — Free reading; no registration required. Use the local CPU exercise; optional hosted services and downloads are not required..
2. [D2L: probability and statistics](https://d2l.ai/chapter_preliminaries/probability.html) — Free; no registration required. No paid materials required.

#### Lab: Bayes, likelihood and decision uncertainty

Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.

**Deliverables**

- Runnable CPU notebook or script with deterministic fixtures
- Measured outputs, failure cases and a README explaining decisions

**Completion checks**

- [ ] Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.
- [ ] Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

#### Ten project recommendations

### Conditional probability simulator

An analyst needs to distinguish test accuracy from posterior probability.

**Data:** Simulate 10000 fictional cases at three base rates. Use a fixed seed and keep evaluation cases separate.

**Output:** A contingency table and Bayes-rule calculator.

**Effort:** 10h · Beginner → intermediate

- **Bayes, likelihood and decision uncertainty:** Extend the project with Bayes, likelihood and decision uncertainty in Conditional probability simulator. Adapt this focused lab to the project data: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.  Required concepts: Conditional probability, Bayes rule, Likelihood versus probability, Expectation and variance, Decision costs.
  - Deliverable: Bayes, likelihood and decision uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A contingency table and Bayes-rule calculator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bayes, likelihood and decision uncertainty: Bayes, likelihood and decision uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match analytical posterior values within stated simulation tolerance.
- [ ] Bayes, likelihood and decision uncertainty: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Bootstrap uncertainty studio

A product analyst needs uncertainty around a small sample mean.

**Data:** Generate 80 session lengths with a skewed distribution. Use a fixed seed and keep evaluation cases separate.

**Output:** A bootstrap interval report with reproducible resampling.

**Effort:** 10h · Beginner → intermediate

- **Bayes, likelihood and decision uncertainty:** Extend the project with Bayes, likelihood and decision uncertainty in Bootstrap uncertainty studio. Adapt this focused lab to the project data: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.  Required concepts: Conditional probability, Bayes rule, Likelihood versus probability, Expectation and variance, Decision costs.
  - Deliverable: Bayes, likelihood and decision uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bootstrap interval report with reproducible resampling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bayes, likelihood and decision uncertainty: Bayes, likelihood and decision uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare percentile intervals with a normal approximation and discuss limits.
- [ ] Bayes, likelihood and decision uncertainty: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Misleading chart repair desk

A report author needs honest charts for comparing groups.

**Data:** Create four group distributions with outliers and unequal sizes. Use a fixed seed and keep evaluation cases separate.

**Output:** Before/after charts with labeled axes and interpretation notes.

**Effort:** 10h · Beginner → intermediate

- **Bayes, likelihood and decision uncertainty:** Extend the project with Bayes, likelihood and decision uncertainty in Misleading chart repair desk. Adapt this focused lab to the project data: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.  Required concepts: Conditional probability, Bayes rule, Likelihood versus probability, Expectation and variance, Decision costs.
  - Deliverable: Bayes, likelihood and decision uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Before/after charts with labeled axes and interpretation notes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bayes, likelihood and decision uncertainty: Bayes, likelihood and decision uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show sample counts and uncertainty; avoid hiding outliers or truncating a bar axis.
- [ ] Bayes, likelihood and decision uncertainty: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Distribution shift notebook

A team needs to notice changing input distributions.

**Data:** Generate reference and shifted sensor batches with known mean and variance changes. Use a fixed seed and keep evaluation cases separate.

**Output:** Histograms, summary statistics and a shift investigation report.

**Effort:** 10h · Beginner → intermediate

- **Bayes, likelihood and decision uncertainty:** Extend the project with Bayes, likelihood and decision uncertainty in Distribution shift notebook. Adapt this focused lab to the project data: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.  Required concepts: Conditional probability, Bayes rule, Likelihood versus probability, Expectation and variance, Decision costs.
  - Deliverable: Bayes, likelihood and decision uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Histograms, summary statistics and a shift investigation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bayes, likelihood and decision uncertainty: Bayes, likelihood and decision uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect the seeded shift and explain why detection does not identify its cause.
- [ ] Bayes, likelihood and decision uncertainty: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Finite difference microscope

A learner needs to verify derivatives used in optimization.

**Data:** Generate a 30-row quadratic regression problem. Use a fixed seed and keep evaluation cases separate.

**Output:** A notebook comparing analytical and numerical gradients.

**Effort:** 10h · Beginner → intermediate

- **Bayes, likelihood and decision uncertainty:** Extend the project with Bayes, likelihood and decision uncertainty in Finite difference microscope. Adapt this focused lab to the project data: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.  Required concepts: Conditional probability, Bayes rule, Likelihood versus probability, Expectation and variance, Decision costs.
  - Deliverable: Bayes, likelihood and decision uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A notebook comparing analytical and numerical gradients. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bayes, likelihood and decision uncertainty: Bayes, likelihood and decision uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report relative error for multiple step sizes and explain cancellation.
- [ ] Bayes, likelihood and decision uncertainty: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data join integrity checker

An analyst needs to detect duplicated rows caused by joins.

**Data:** Create customer and order CSV files with missing and duplicated keys. Use a fixed seed and keep evaluation cases separate.

**Output:** A pandas join audit with rejected records and row-count explanations.

**Effort:** 10h · Beginner → intermediate

- **Bayes, likelihood and decision uncertainty:** Extend the project with Bayes, likelihood and decision uncertainty in Data join integrity checker. Adapt this focused lab to the project data: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.  Required concepts: Conditional probability, Bayes rule, Likelihood versus probability, Expectation and variance, Decision costs.
  - Deliverable: Bayes, likelihood and decision uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A pandas join audit with rejected records and row-count explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bayes, likelihood and decision uncertainty: Bayes, likelihood and decision uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect many-to-many expansion and reconcile order totals.
- [ ] Bayes, likelihood and decision uncertainty: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Missing value investigation

A researcher needs to understand how missingness alters summaries.

**Data:** Generate 200 survey rows with random and income-dependent missingness. Use a fixed seed and keep evaluation cases separate.

**Output:** A cleaning notebook comparing deletion and imputation.

**Effort:** 10h · Beginner → intermediate

- **Bayes, likelihood and decision uncertainty:** Extend the project with Bayes, likelihood and decision uncertainty in Missing value investigation. Adapt this focused lab to the project data: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.  Required concepts: Conditional probability, Bayes rule, Likelihood versus probability, Expectation and variance, Decision costs.
  - Deliverable: Bayes, likelihood and decision uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cleaning notebook comparing deletion and imputation. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bayes, likelihood and decision uncertainty: Bayes, likelihood and decision uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Quantify bias under each missingness mechanism without claiming causality.
- [ ] Bayes, likelihood and decision uncertainty: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature scaling geometry

A model builder needs to understand units before measuring distance.

**Data:** Generate height/income features with very different scales. Use a fixed seed and keep evaluation cases separate.

**Output:** A NumPy study of standard, robust and min-max scaling.

**Effort:** 10h · Beginner → intermediate

- **Bayes, likelihood and decision uncertainty:** Extend the project with Bayes, likelihood and decision uncertainty in Feature scaling geometry. Adapt this focused lab to the project data: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.  Required concepts: Conditional probability, Bayes rule, Likelihood versus probability, Expectation and variance, Decision costs.
  - Deliverable: Bayes, likelihood and decision uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A NumPy study of standard, robust and min-max scaling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bayes, likelihood and decision uncertainty: Bayes, likelihood and decision uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Fit scaling on training rows only and compare neighbor identities.
- [ ] Bayes, likelihood and decision uncertainty: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Matrix compression explorer

A learner needs to see the accuracy/storage tradeoff in low-rank approximation.

**Data:** Generate a 64 by 64 grayscale pattern with noise. Use a fixed seed and keep evaluation cases separate.

**Output:** An SVD reconstruction notebook with rank slider or rank table.

**Effort:** 10h · Beginner → intermediate

- **Bayes, likelihood and decision uncertainty:** Extend the project with Bayes, likelihood and decision uncertainty in Matrix compression explorer. Adapt this focused lab to the project data: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.  Required concepts: Conditional probability, Bayes rule, Likelihood versus probability, Expectation and variance, Decision costs.
  - Deliverable: Bayes, likelihood and decision uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An SVD reconstruction notebook with rank slider or rank table. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bayes, likelihood and decision uncertainty: Bayes, likelihood and decision uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify error decreases with rank and report retained storage.
- [ ] Bayes, likelihood and decision uncertainty: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Geometric similarity explorer

A learner needs to understand why vector scaling changes retrieval.

**Data:** Generate 60 two-dimensional points with three labeled groups. Use a fixed seed and keep evaluation cases separate.

**Output:** A notebook comparing dot product, cosine and Euclidean rankings.

**Effort:** 10h · Beginner → intermediate

- **Bayes, likelihood and decision uncertainty:** Extend the project with Bayes, likelihood and decision uncertainty in Geometric similarity explorer. Adapt this focused lab to the project data: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.  Required concepts: Conditional probability, Bayes rule, Likelihood versus probability, Expectation and variance, Decision costs.
  - Deliverable: Bayes, likelihood and decision uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A notebook comparing dot product, cosine and Euclidean rankings. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bayes, likelihood and decision uncertainty: Bayes, likelihood and decision uncertainty: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify hand-calculated examples and explain ranking changes after scaling.
- [ ] Bayes, likelihood and decision uncertainty: Simulate a binary detector at three prevalence levels. Compute joint tables and posterior probabilities by hand and code; report false positives and explain why accuracy alone hides the change.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Entropy, cross-entropy and KL divergence

<a id="math-information"></a>

### Entropy, cross-entropy and KL divergence

Entropy, cross-entropy and KL divergence helps you make explainable engineering decisions and test failure cases. Build the experiment below before relying on the concept in an AI system.

**Priority:** Foundation · **Study:** 4h · **Practice:** 5h

**Prerequisites:** [Probability, distributions and statistics](math-data.md#math-probability) Navigation is unrestricted.

#### Concepts

- [ ] **Surprisal:** Negative log probability measures how surprising an observed outcome is under a distribution.
  - Example: Compare -log(.9) and -log(.01) for the correct class.
  - Videos:
    - [Neural Networks Part 6: Cross Entropy](https://www.youtube.com/watch?v=6ArSys5qHAU) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on surprisal. Then reproduce the lesson example: Compare -log(.9) and -log(.01) for the correct class.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on surprisal. Then reproduce the lesson example: Compare -log(.9) and -log(.01) for the correct class.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Entropy:** Entropy is expected surprisal under the true distribution and measures uncertainty.
  - Example: Compare [0.5,0.5] with [0.99,0.01] using the same logarithm base.
  - Videos:
    - [Neural Networks Part 6: Cross Entropy](https://www.youtube.com/watch?v=6ArSys5qHAU) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on entropy. Then reproduce the lesson example: Compare [0.5,0.5] with [0.99,0.01] using the same logarithm base.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on entropy. Then reproduce the lesson example: Compare [0.5,0.5] with [0.99,0.01] using the same logarithm base.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Cross-entropy:** Cross-entropy measures expected log loss when q models outcomes drawn from p.
  - Example: Compute loss for a one-hot class target and predicted probabilities.
  - Videos:
    - [Neural Networks Part 6: Cross Entropy](https://www.youtube.com/watch?v=6ArSys5qHAU) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on cross-entropy. Then reproduce the lesson example: Compute loss for a one-hot class target and predicted probabilities.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on cross-entropy. Then reproduce the lesson example: Compute loss for a one-hot class target and predicted probabilities.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **KL divergence:** KL compares distributions directionally and is zero when they match on their support.
  - Example: Compute both KL(p||q) and KL(q||p) for unequal binary distributions.
  - Videos:
    - [Neural Networks Part 6: Cross Entropy](https://www.youtube.com/watch?v=6ArSys5qHAU) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on kl divergence. Then reproduce the lesson example: Compute both KL(p||q) and KL(q||p) for unequal binary distributions.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on kl divergence. Then reproduce the lesson example: Compute both KL(p||q) and KL(q||p) for unequal binary distributions.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Numerical stability:** Log-sum-exp computes normalization without exponentiating very large logits directly.
  - Example: Subtract the maximum from logits [1000,1001] before exponentiation.
  - Videos:
    - [Neural Networks Part 6: Cross Entropy](https://www.youtube.com/watch?v=6ArSys5qHAU) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on numerical stability. Then reproduce the lesson example: Subtract the maximum from logits [1000,1001] before exponentiation.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on numerical stability. Then reproduce the lesson example: Subtract the maximum from logits [1000,1001] before exponentiation.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/

#### YouTube: focused explanations and full courses

- [Neural Networks Part 6: Cross Entropy](https://www.youtube.com/watch?v=6ArSys5qHAU) · StatQuest · Josh Starmer · Focused explanation
  - Explains: A visual, step-by-step explanation of the topic named in the title.
  - Useful because: Use the worked intuition before writing the corresponding small experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://statquest.org/video_index.html
- [Neural Networks Part 5: ArgMax and SoftMax](https://www.youtube.com/watch?v=KpKog-L9veg) · StatQuest · Josh Starmer · Focused explanation
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

1. [Official reference: Entropy, cross-entropy and KL divergence](https://d2l.ai/chapter_preliminaries/information-theory.html) — Free reading; no registration required. Use the local CPU exercise; optional hosted services and downloads are not required..
2. [D2L: probability and statistics](https://d2l.ai/chapter_preliminaries/probability.html) — Free; no registration required. No paid materials required.

#### Lab: Entropy, cross-entropy and KL divergence

Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.

**Deliverables**

- Runnable CPU notebook or script with deterministic fixtures
- Measured outputs, failure cases and a README explaining decisions

**Completion checks**

- [ ] Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.
- [ ] Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

#### Ten project recommendations

### Conditional probability simulator

An analyst needs to distinguish test accuracy from posterior probability.

**Data:** Simulate 10000 fictional cases at three base rates. Use a fixed seed and keep evaluation cases separate.

**Output:** A contingency table and Bayes-rule calculator.

**Effort:** 10h · Beginner → intermediate

- **Entropy, cross-entropy and KL divergence:** Extend the project with Entropy, cross-entropy and KL divergence in Conditional probability simulator. Adapt this focused lab to the project data: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.  Required concepts: Surprisal, Entropy, Cross-entropy, KL divergence, Numerical stability.
  - Deliverable: Entropy, cross-entropy and KL divergence: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A contingency table and Bayes-rule calculator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Entropy, cross-entropy and KL divergence: Entropy, cross-entropy and KL divergence: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match analytical posterior values within stated simulation tolerance.
- [ ] Entropy, cross-entropy and KL divergence: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Bootstrap uncertainty studio

A product analyst needs uncertainty around a small sample mean.

**Data:** Generate 80 session lengths with a skewed distribution. Use a fixed seed and keep evaluation cases separate.

**Output:** A bootstrap interval report with reproducible resampling.

**Effort:** 10h · Beginner → intermediate

- **Entropy, cross-entropy and KL divergence:** Extend the project with Entropy, cross-entropy and KL divergence in Bootstrap uncertainty studio. Adapt this focused lab to the project data: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.  Required concepts: Surprisal, Entropy, Cross-entropy, KL divergence, Numerical stability.
  - Deliverable: Entropy, cross-entropy and KL divergence: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bootstrap interval report with reproducible resampling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Entropy, cross-entropy and KL divergence: Entropy, cross-entropy and KL divergence: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare percentile intervals with a normal approximation and discuss limits.
- [ ] Entropy, cross-entropy and KL divergence: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Misleading chart repair desk

A report author needs honest charts for comparing groups.

**Data:** Create four group distributions with outliers and unequal sizes. Use a fixed seed and keep evaluation cases separate.

**Output:** Before/after charts with labeled axes and interpretation notes.

**Effort:** 10h · Beginner → intermediate

- **Entropy, cross-entropy and KL divergence:** Extend the project with Entropy, cross-entropy and KL divergence in Misleading chart repair desk. Adapt this focused lab to the project data: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.  Required concepts: Surprisal, Entropy, Cross-entropy, KL divergence, Numerical stability.
  - Deliverable: Entropy, cross-entropy and KL divergence: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Before/after charts with labeled axes and interpretation notes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Entropy, cross-entropy and KL divergence: Entropy, cross-entropy and KL divergence: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show sample counts and uncertainty; avoid hiding outliers or truncating a bar axis.
- [ ] Entropy, cross-entropy and KL divergence: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Distribution shift notebook

A team needs to notice changing input distributions.

**Data:** Generate reference and shifted sensor batches with known mean and variance changes. Use a fixed seed and keep evaluation cases separate.

**Output:** Histograms, summary statistics and a shift investigation report.

**Effort:** 10h · Beginner → intermediate

- **Entropy, cross-entropy and KL divergence:** Extend the project with Entropy, cross-entropy and KL divergence in Distribution shift notebook. Adapt this focused lab to the project data: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.  Required concepts: Surprisal, Entropy, Cross-entropy, KL divergence, Numerical stability.
  - Deliverable: Entropy, cross-entropy and KL divergence: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Histograms, summary statistics and a shift investigation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Entropy, cross-entropy and KL divergence: Entropy, cross-entropy and KL divergence: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect the seeded shift and explain why detection does not identify its cause.
- [ ] Entropy, cross-entropy and KL divergence: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Finite difference microscope

A learner needs to verify derivatives used in optimization.

**Data:** Generate a 30-row quadratic regression problem. Use a fixed seed and keep evaluation cases separate.

**Output:** A notebook comparing analytical and numerical gradients.

**Effort:** 10h · Beginner → intermediate

- **Entropy, cross-entropy and KL divergence:** Extend the project with Entropy, cross-entropy and KL divergence in Finite difference microscope. Adapt this focused lab to the project data: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.  Required concepts: Surprisal, Entropy, Cross-entropy, KL divergence, Numerical stability.
  - Deliverable: Entropy, cross-entropy and KL divergence: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A notebook comparing analytical and numerical gradients. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Entropy, cross-entropy and KL divergence: Entropy, cross-entropy and KL divergence: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report relative error for multiple step sizes and explain cancellation.
- [ ] Entropy, cross-entropy and KL divergence: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data join integrity checker

An analyst needs to detect duplicated rows caused by joins.

**Data:** Create customer and order CSV files with missing and duplicated keys. Use a fixed seed and keep evaluation cases separate.

**Output:** A pandas join audit with rejected records and row-count explanations.

**Effort:** 10h · Beginner → intermediate

- **Entropy, cross-entropy and KL divergence:** Extend the project with Entropy, cross-entropy and KL divergence in Data join integrity checker. Adapt this focused lab to the project data: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.  Required concepts: Surprisal, Entropy, Cross-entropy, KL divergence, Numerical stability.
  - Deliverable: Entropy, cross-entropy and KL divergence: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A pandas join audit with rejected records and row-count explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Entropy, cross-entropy and KL divergence: Entropy, cross-entropy and KL divergence: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect many-to-many expansion and reconcile order totals.
- [ ] Entropy, cross-entropy and KL divergence: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Missing value investigation

A researcher needs to understand how missingness alters summaries.

**Data:** Generate 200 survey rows with random and income-dependent missingness. Use a fixed seed and keep evaluation cases separate.

**Output:** A cleaning notebook comparing deletion and imputation.

**Effort:** 10h · Beginner → intermediate

- **Entropy, cross-entropy and KL divergence:** Extend the project with Entropy, cross-entropy and KL divergence in Missing value investigation. Adapt this focused lab to the project data: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.  Required concepts: Surprisal, Entropy, Cross-entropy, KL divergence, Numerical stability.
  - Deliverable: Entropy, cross-entropy and KL divergence: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cleaning notebook comparing deletion and imputation. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Entropy, cross-entropy and KL divergence: Entropy, cross-entropy and KL divergence: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Quantify bias under each missingness mechanism without claiming causality.
- [ ] Entropy, cross-entropy and KL divergence: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature scaling geometry

A model builder needs to understand units before measuring distance.

**Data:** Generate height/income features with very different scales. Use a fixed seed and keep evaluation cases separate.

**Output:** A NumPy study of standard, robust and min-max scaling.

**Effort:** 10h · Beginner → intermediate

- **Entropy, cross-entropy and KL divergence:** Extend the project with Entropy, cross-entropy and KL divergence in Feature scaling geometry. Adapt this focused lab to the project data: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.  Required concepts: Surprisal, Entropy, Cross-entropy, KL divergence, Numerical stability.
  - Deliverable: Entropy, cross-entropy and KL divergence: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A NumPy study of standard, robust and min-max scaling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Entropy, cross-entropy and KL divergence: Entropy, cross-entropy and KL divergence: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Fit scaling on training rows only and compare neighbor identities.
- [ ] Entropy, cross-entropy and KL divergence: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Matrix compression explorer

A learner needs to see the accuracy/storage tradeoff in low-rank approximation.

**Data:** Generate a 64 by 64 grayscale pattern with noise. Use a fixed seed and keep evaluation cases separate.

**Output:** An SVD reconstruction notebook with rank slider or rank table.

**Effort:** 10h · Beginner → intermediate

- **Entropy, cross-entropy and KL divergence:** Extend the project with Entropy, cross-entropy and KL divergence in Matrix compression explorer. Adapt this focused lab to the project data: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.  Required concepts: Surprisal, Entropy, Cross-entropy, KL divergence, Numerical stability.
  - Deliverable: Entropy, cross-entropy and KL divergence: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An SVD reconstruction notebook with rank slider or rank table. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Entropy, cross-entropy and KL divergence: Entropy, cross-entropy and KL divergence: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify error decreases with rank and report retained storage.
- [ ] Entropy, cross-entropy and KL divergence: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Geometric similarity explorer

A learner needs to understand why vector scaling changes retrieval.

**Data:** Generate 60 two-dimensional points with three labeled groups. Use a fixed seed and keep evaluation cases separate.

**Output:** A notebook comparing dot product, cosine and Euclidean rankings.

**Effort:** 10h · Beginner → intermediate

- **Entropy, cross-entropy and KL divergence:** Extend the project with Entropy, cross-entropy and KL divergence in Geometric similarity explorer. Adapt this focused lab to the project data: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.  Required concepts: Surprisal, Entropy, Cross-entropy, KL divergence, Numerical stability.
  - Deliverable: Entropy, cross-entropy and KL divergence: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A notebook comparing dot product, cosine and Euclidean rankings. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Entropy, cross-entropy and KL divergence: Entropy, cross-entropy and KL divergence: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify hand-calculated examples and explain ranking changes after scaling.
- [ ] Entropy, cross-entropy and KL divergence: Implement entropy, cross-entropy and KL for small probability vectors using NumPy. Verify H(p,q)=H(p)+KL(p||q), test zero probabilities and explain why confidently wrong predictions are costly.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Partial derivatives, Jacobians and vector gradients

<a id="math-jacobians"></a>

### Partial derivatives, Jacobians and vector gradients

Partial derivatives, Jacobians and vector gradients helps you make explainable engineering decisions and test failure cases. Build the experiment below before relying on the concept in an AI system.

**Priority:** Foundation · **Study:** 4h · **Practice:** 5h

**Prerequisites:** [Derivatives, chain rule and gradients](math-data.md#math-calculus) Navigation is unrestricted.

#### Concepts

- [ ] **Partial derivatives:** A partial derivative changes one input while holding the others fixed.
  - Example: For f(x,y)=x*y+x*x evaluate both partial derivatives at (2,3).
  - Videos:
    - [The Chain Rule](https://www.youtube.com/watch?v=wl1myxrtQHQ) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on partial derivatives. Then reproduce the lesson example: For f(x,y)=x*y+x*x evaluate both partial derivatives at (2,3).
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on partial derivatives. Then reproduce the lesson example: For f(x,y)=x*y+x*x evaluate both partial derivatives at (2,3).
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Gradient direction:** The gradient points toward fastest local increase under the Euclidean norm.
  - Example: Take a small negative-gradient step on x squared plus four y squared.
  - Videos:
    - [The Chain Rule](https://www.youtube.com/watch?v=wl1myxrtQHQ) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on gradient direction. Then reproduce the lesson example: Take a small negative-gradient step on x squared plus four y squared.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on gradient direction. Then reproduce the lesson example: Take a small negative-gradient step on x squared plus four y squared.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Jacobian shape:** A Jacobian has one row per output and one column per input under the stated convention.
  - Example: Write the 2 by 2 Jacobian for (x*y,x+y).
  - Videos:
    - [The Chain Rule](https://www.youtube.com/watch?v=wl1myxrtQHQ) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on jacobian shape. Then reproduce the lesson example: Write the 2 by 2 Jacobian for (x*y,x+y).
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on jacobian shape. Then reproduce the lesson example: Write the 2 by 2 Jacobian for (x*y,x+y).
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Chain rule composition:** The derivative of composed maps combines their local derivatives in the correct order.
  - Example: Compose a linear map with a sigmoid and compare the matrix product with autograd.
  - Videos:
    - [The Chain Rule](https://www.youtube.com/watch?v=wl1myxrtQHQ) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on chain rule composition. Then reproduce the lesson example: Compose a linear map with a sigmoid and compare the matrix product with autograd.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on chain rule composition. Then reproduce the lesson example: Compose a linear map with a sigmoid and compare the matrix product with autograd.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Vector-Jacobian products:** Reverse-mode differentiation propagates an output-weighted gradient without materializing the full Jacobian.
  - Example: Differentiate a weighted sum of two outputs and compare with a manual product.
  - Videos:
    - [The Chain Rule](https://www.youtube.com/watch?v=wl1myxrtQHQ) · StatQuest · Josh Starmer · Focused explanation
      - Explains: A visual, step-by-step explanation of the topic named in the title.
      - Useful because: Use the worked intuition before writing the corresponding small experiment.
      - Watch for: Focus on vector-jacobian products. Then reproduce the lesson example: Differentiate a weighted sum of two outputs and compare with a manual product.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://statquest.org/video_index.html
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on vector-jacobian products. Then reproduce the lesson example: Differentiate a weighted sum of two outputs and compare with a manual product.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/

#### YouTube: focused explanations and full courses

- [The Chain Rule](https://www.youtube.com/watch?v=wl1myxrtQHQ) · StatQuest · Josh Starmer · Focused explanation
  - Explains: A visual, step-by-step explanation of the topic named in the title.
  - Useful because: Use the worked intuition before writing the corresponding small experiment.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://statquest.org/video_index.html
- [Gradient descent: how neural networks learn](https://www.youtube.com/watch?v=IHZwWFHWa-w) · 3Blue1Brown · Visual explanation
  - Explains: Loss landscapes, gradients and weight updates.
  - Useful because: Explain why a learning rate changes training stability.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.3blue1brown.com/lessons/gradient-descent
- [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
  - Explains: NumPy, pandas, cleaning and exploring data with Python.
  - Useful because: Work through real data transformations before building training pipelines.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/

#### Free written resources

1. [Official reference: Partial derivatives, Jacobians and vector gradients](https://docs.pytorch.org/tutorials/beginner/blitz/autograd_tutorial.html) — Free reading; no registration required. Use the local CPU exercise; optional hosted services and downloads are not required..
2. [D2L: calculus](https://d2l.ai/chapter_preliminaries/calculus.html) — Free; no registration required. No paid materials required.

#### Lab: Partial derivatives, Jacobians and vector gradients

Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.

**Deliverables**

- Runnable CPU notebook or script with deterministic fixtures
- Measured outputs, failure cases and a README explaining decisions

**Completion checks**

- [ ] Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.
- [ ] Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

#### Ten project recommendations

### Conditional probability simulator

An analyst needs to distinguish test accuracy from posterior probability.

**Data:** Simulate 10000 fictional cases at three base rates. Use a fixed seed and keep evaluation cases separate.

**Output:** A contingency table and Bayes-rule calculator.

**Effort:** 10h · Beginner → intermediate

- **Partial derivatives, Jacobians and vector gradients:** Extend the project with Partial derivatives, Jacobians and vector gradients in Conditional probability simulator. Adapt this focused lab to the project data: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.  Required concepts: Partial derivatives, Gradient direction, Jacobian shape, Chain rule composition, Vector-Jacobian products.
  - Deliverable: Partial derivatives, Jacobians and vector gradients: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A contingency table and Bayes-rule calculator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Partial derivatives, Jacobians and vector gradients: Partial derivatives, Jacobians and vector gradients: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match analytical posterior values within stated simulation tolerance.
- [ ] Partial derivatives, Jacobians and vector gradients: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Bootstrap uncertainty studio

A product analyst needs uncertainty around a small sample mean.

**Data:** Generate 80 session lengths with a skewed distribution. Use a fixed seed and keep evaluation cases separate.

**Output:** A bootstrap interval report with reproducible resampling.

**Effort:** 10h · Beginner → intermediate

- **Partial derivatives, Jacobians and vector gradients:** Extend the project with Partial derivatives, Jacobians and vector gradients in Bootstrap uncertainty studio. Adapt this focused lab to the project data: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.  Required concepts: Partial derivatives, Gradient direction, Jacobian shape, Chain rule composition, Vector-Jacobian products.
  - Deliverable: Partial derivatives, Jacobians and vector gradients: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bootstrap interval report with reproducible resampling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Partial derivatives, Jacobians and vector gradients: Partial derivatives, Jacobians and vector gradients: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare percentile intervals with a normal approximation and discuss limits.
- [ ] Partial derivatives, Jacobians and vector gradients: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Misleading chart repair desk

A report author needs honest charts for comparing groups.

**Data:** Create four group distributions with outliers and unequal sizes. Use a fixed seed and keep evaluation cases separate.

**Output:** Before/after charts with labeled axes and interpretation notes.

**Effort:** 10h · Beginner → intermediate

- **Partial derivatives, Jacobians and vector gradients:** Extend the project with Partial derivatives, Jacobians and vector gradients in Misleading chart repair desk. Adapt this focused lab to the project data: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.  Required concepts: Partial derivatives, Gradient direction, Jacobian shape, Chain rule composition, Vector-Jacobian products.
  - Deliverable: Partial derivatives, Jacobians and vector gradients: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Before/after charts with labeled axes and interpretation notes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Partial derivatives, Jacobians and vector gradients: Partial derivatives, Jacobians and vector gradients: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show sample counts and uncertainty; avoid hiding outliers or truncating a bar axis.
- [ ] Partial derivatives, Jacobians and vector gradients: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Distribution shift notebook

A team needs to notice changing input distributions.

**Data:** Generate reference and shifted sensor batches with known mean and variance changes. Use a fixed seed and keep evaluation cases separate.

**Output:** Histograms, summary statistics and a shift investigation report.

**Effort:** 10h · Beginner → intermediate

- **Partial derivatives, Jacobians and vector gradients:** Extend the project with Partial derivatives, Jacobians and vector gradients in Distribution shift notebook. Adapt this focused lab to the project data: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.  Required concepts: Partial derivatives, Gradient direction, Jacobian shape, Chain rule composition, Vector-Jacobian products.
  - Deliverable: Partial derivatives, Jacobians and vector gradients: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Histograms, summary statistics and a shift investigation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Partial derivatives, Jacobians and vector gradients: Partial derivatives, Jacobians and vector gradients: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect the seeded shift and explain why detection does not identify its cause.
- [ ] Partial derivatives, Jacobians and vector gradients: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Finite difference microscope

A learner needs to verify derivatives used in optimization.

**Data:** Generate a 30-row quadratic regression problem. Use a fixed seed and keep evaluation cases separate.

**Output:** A notebook comparing analytical and numerical gradients.

**Effort:** 10h · Beginner → intermediate

- **Partial derivatives, Jacobians and vector gradients:** Extend the project with Partial derivatives, Jacobians and vector gradients in Finite difference microscope. Adapt this focused lab to the project data: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.  Required concepts: Partial derivatives, Gradient direction, Jacobian shape, Chain rule composition, Vector-Jacobian products.
  - Deliverable: Partial derivatives, Jacobians and vector gradients: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A notebook comparing analytical and numerical gradients. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Partial derivatives, Jacobians and vector gradients: Partial derivatives, Jacobians and vector gradients: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report relative error for multiple step sizes and explain cancellation.
- [ ] Partial derivatives, Jacobians and vector gradients: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data join integrity checker

An analyst needs to detect duplicated rows caused by joins.

**Data:** Create customer and order CSV files with missing and duplicated keys. Use a fixed seed and keep evaluation cases separate.

**Output:** A pandas join audit with rejected records and row-count explanations.

**Effort:** 10h · Beginner → intermediate

- **Partial derivatives, Jacobians and vector gradients:** Extend the project with Partial derivatives, Jacobians and vector gradients in Data join integrity checker. Adapt this focused lab to the project data: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.  Required concepts: Partial derivatives, Gradient direction, Jacobian shape, Chain rule composition, Vector-Jacobian products.
  - Deliverable: Partial derivatives, Jacobians and vector gradients: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A pandas join audit with rejected records and row-count explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Partial derivatives, Jacobians and vector gradients: Partial derivatives, Jacobians and vector gradients: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect many-to-many expansion and reconcile order totals.
- [ ] Partial derivatives, Jacobians and vector gradients: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Missing value investigation

A researcher needs to understand how missingness alters summaries.

**Data:** Generate 200 survey rows with random and income-dependent missingness. Use a fixed seed and keep evaluation cases separate.

**Output:** A cleaning notebook comparing deletion and imputation.

**Effort:** 10h · Beginner → intermediate

- **Partial derivatives, Jacobians and vector gradients:** Extend the project with Partial derivatives, Jacobians and vector gradients in Missing value investigation. Adapt this focused lab to the project data: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.  Required concepts: Partial derivatives, Gradient direction, Jacobian shape, Chain rule composition, Vector-Jacobian products.
  - Deliverable: Partial derivatives, Jacobians and vector gradients: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cleaning notebook comparing deletion and imputation. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Partial derivatives, Jacobians and vector gradients: Partial derivatives, Jacobians and vector gradients: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Quantify bias under each missingness mechanism without claiming causality.
- [ ] Partial derivatives, Jacobians and vector gradients: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature scaling geometry

A model builder needs to understand units before measuring distance.

**Data:** Generate height/income features with very different scales. Use a fixed seed and keep evaluation cases separate.

**Output:** A NumPy study of standard, robust and min-max scaling.

**Effort:** 10h · Beginner → intermediate

- **Partial derivatives, Jacobians and vector gradients:** Extend the project with Partial derivatives, Jacobians and vector gradients in Feature scaling geometry. Adapt this focused lab to the project data: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.  Required concepts: Partial derivatives, Gradient direction, Jacobian shape, Chain rule composition, Vector-Jacobian products.
  - Deliverable: Partial derivatives, Jacobians and vector gradients: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A NumPy study of standard, robust and min-max scaling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Partial derivatives, Jacobians and vector gradients: Partial derivatives, Jacobians and vector gradients: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Fit scaling on training rows only and compare neighbor identities.
- [ ] Partial derivatives, Jacobians and vector gradients: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Matrix compression explorer

A learner needs to see the accuracy/storage tradeoff in low-rank approximation.

**Data:** Generate a 64 by 64 grayscale pattern with noise. Use a fixed seed and keep evaluation cases separate.

**Output:** An SVD reconstruction notebook with rank slider or rank table.

**Effort:** 10h · Beginner → intermediate

- **Partial derivatives, Jacobians and vector gradients:** Extend the project with Partial derivatives, Jacobians and vector gradients in Matrix compression explorer. Adapt this focused lab to the project data: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.  Required concepts: Partial derivatives, Gradient direction, Jacobian shape, Chain rule composition, Vector-Jacobian products.
  - Deliverable: Partial derivatives, Jacobians and vector gradients: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An SVD reconstruction notebook with rank slider or rank table. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Partial derivatives, Jacobians and vector gradients: Partial derivatives, Jacobians and vector gradients: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify error decreases with rank and report retained storage.
- [ ] Partial derivatives, Jacobians and vector gradients: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Geometric similarity explorer

A learner needs to understand why vector scaling changes retrieval.

**Data:** Generate 60 two-dimensional points with three labeled groups. Use a fixed seed and keep evaluation cases separate.

**Output:** A notebook comparing dot product, cosine and Euclidean rankings.

**Effort:** 10h · Beginner → intermediate

- **Partial derivatives, Jacobians and vector gradients:** Extend the project with Partial derivatives, Jacobians and vector gradients in Geometric similarity explorer. Adapt this focused lab to the project data: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.  Required concepts: Partial derivatives, Gradient direction, Jacobian shape, Chain rule composition, Vector-Jacobian products.
  - Deliverable: Partial derivatives, Jacobians and vector gradients: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A notebook comparing dot product, cosine and Euclidean rankings. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Partial derivatives, Jacobians and vector gradients: Partial derivatives, Jacobians and vector gradients: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify hand-calculated examples and explain ranking changes after scaling.
- [ ] Partial derivatives, Jacobians and vector gradients: Differentiate a two-input, two-output function analytically, with finite differences and PyTorch autograd. Check Jacobian shapes and a vector-Jacobian product in float64.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Confidence intervals, bootstrap and causal limits

<a id="data-inference-causality"></a>

### Confidence intervals, bootstrap and causal limits

Confidence intervals, bootstrap and causal limits helps you make explainable engineering decisions and test failure cases. Build the experiment below before relying on the concept in an AI system.

**Priority:** Foundation · **Study:** 4h · **Practice:** 5h

**Prerequisites:** [Sampling, uncertainty, joins and dataset validation](math-data.md#data-statistics-validation) Navigation is unrestricted.

#### Concepts

- [ ] **Sampling unit:** Independent sampling units determine the meaning of uncertainty estimates.
  - Example: Group repeated sessions by fictional user before splitting and resampling.
  - Videos:
    - [College statistics — full course](https://www.youtube.com/watch?v=xxpc-HPKN28) · freeCodeCamp · Full course · approximately 8h
      - Explains: Descriptive statistics, probability, distributions and statistical reasoning.
      - Useful because: Learn to interpret dataset summaries and uncertainty instead of trusting one metric.
      - Watch for: Focus on sampling unit. Then reproduce the lesson example: Group repeated sessions by fictional user before splitting and resampling.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/free-statistics-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on sampling unit. Then reproduce the lesson example: Group repeated sessions by fictional user before splitting and resampling.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Standard error:** The standard error describes variability of an estimator across samples, not variability of individual observations.
  - Example: Compare sample standard deviation with estimated standard error of the mean.
  - Videos:
    - [College statistics — full course](https://www.youtube.com/watch?v=xxpc-HPKN28) · freeCodeCamp · Full course · approximately 8h
      - Explains: Descriptive statistics, probability, distributions and statistical reasoning.
      - Useful because: Learn to interpret dataset summaries and uncertainty instead of trusting one metric.
      - Watch for: Focus on standard error. Then reproduce the lesson example: Compare sample standard deviation with estimated standard error of the mean.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/free-statistics-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on standard error. Then reproduce the lesson example: Compare sample standard deviation with estimated standard error of the mean.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Bootstrap:** Resampling observed units approximates the sampling distribution under assumptions about representativeness.
  - Example: Draw 1000 seeded bootstrap samples of 80 users and form a percentile interval.
  - Videos:
    - [College statistics — full course](https://www.youtube.com/watch?v=xxpc-HPKN28) · freeCodeCamp · Full course · approximately 8h
      - Explains: Descriptive statistics, probability, distributions and statistical reasoning.
      - Useful because: Learn to interpret dataset summaries and uncertainty instead of trusting one metric.
      - Watch for: Focus on bootstrap. Then reproduce the lesson example: Draw 1000 seeded bootstrap samples of 80 users and form a percentile interval.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/free-statistics-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on bootstrap. Then reproduce the lesson example: Draw 1000 seeded bootstrap samples of 80 users and form a percentile interval.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Confidence interpretation:** A confidence procedure has long-run coverage under its assumptions; an individual fixed interval is not a probability distribution over a fixed parameter.
  - Example: Compare coverage over 200 simulated datasets with a known mean.
  - Videos:
    - [College statistics — full course](https://www.youtube.com/watch?v=xxpc-HPKN28) · freeCodeCamp · Full course · approximately 8h
      - Explains: Descriptive statistics, probability, distributions and statistical reasoning.
      - Useful because: Learn to interpret dataset summaries and uncertainty instead of trusting one metric.
      - Watch for: Focus on confidence interpretation. Then reproduce the lesson example: Compare coverage over 200 simulated datasets with a known mean.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/free-statistics-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on confidence interpretation. Then reproduce the lesson example: Compare coverage over 200 simulated datasets with a known mean.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Confounding:** A shared cause can produce an association without a causal effect.
  - Example: Generate different device mixes across groups and compare pooled and stratified means.
  - Videos:
    - [College statistics — full course](https://www.youtube.com/watch?v=xxpc-HPKN28) · freeCodeCamp · Full course · approximately 8h
      - Explains: Descriptive statistics, probability, distributions and statistical reasoning.
      - Useful because: Learn to interpret dataset summaries and uncertainty instead of trusting one metric.
      - Watch for: Focus on confounding. Then reproduce the lesson example: Generate different device mixes across groups and compare pooled and stratified means.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/free-statistics-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on confounding. Then reproduce the lesson example: Generate different device mixes across groups and compare pooled and stratified means.
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

1. [Official reference: Confidence intervals, bootstrap and causal limits](https://seeing-theory.brown.edu/frequentist-inference/index.html) — Free reading; no registration required. Use the local CPU exercise; optional hosted services and downloads are not required..
2. [pandas: merge and join](https://pandas.pydata.org/docs/user_guide/merging.html) — Free; no registration required. No paid materials required.

#### Lab: Confidence intervals, bootstrap and causal limits

Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.

**Deliverables**

- Runnable CPU notebook or script with deterministic fixtures
- Measured outputs, failure cases and a README explaining decisions

**Completion checks**

- [ ] Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.
- [ ] Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

#### Ten project recommendations

### Conditional probability simulator

An analyst needs to distinguish test accuracy from posterior probability.

**Data:** Simulate 10000 fictional cases at three base rates. Use a fixed seed and keep evaluation cases separate.

**Output:** A contingency table and Bayes-rule calculator.

**Effort:** 10h · Beginner → intermediate

- **Confidence intervals, bootstrap and causal limits:** Extend the project with Confidence intervals, bootstrap and causal limits in Conditional probability simulator. Adapt this focused lab to the project data: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.  Required concepts: Sampling unit, Standard error, Bootstrap, Confidence interpretation, Confounding.
  - Deliverable: Confidence intervals, bootstrap and causal limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A contingency table and Bayes-rule calculator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Confidence intervals, bootstrap and causal limits: Confidence intervals, bootstrap and causal limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match analytical posterior values within stated simulation tolerance.
- [ ] Confidence intervals, bootstrap and causal limits: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Bootstrap uncertainty studio

A product analyst needs uncertainty around a small sample mean.

**Data:** Generate 80 session lengths with a skewed distribution. Use a fixed seed and keep evaluation cases separate.

**Output:** A bootstrap interval report with reproducible resampling.

**Effort:** 10h · Beginner → intermediate

- **Confidence intervals, bootstrap and causal limits:** Extend the project with Confidence intervals, bootstrap and causal limits in Bootstrap uncertainty studio. Adapt this focused lab to the project data: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.  Required concepts: Sampling unit, Standard error, Bootstrap, Confidence interpretation, Confounding.
  - Deliverable: Confidence intervals, bootstrap and causal limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bootstrap interval report with reproducible resampling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Confidence intervals, bootstrap and causal limits: Confidence intervals, bootstrap and causal limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare percentile intervals with a normal approximation and discuss limits.
- [ ] Confidence intervals, bootstrap and causal limits: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Misleading chart repair desk

A report author needs honest charts for comparing groups.

**Data:** Create four group distributions with outliers and unequal sizes. Use a fixed seed and keep evaluation cases separate.

**Output:** Before/after charts with labeled axes and interpretation notes.

**Effort:** 10h · Beginner → intermediate

- **Confidence intervals, bootstrap and causal limits:** Extend the project with Confidence intervals, bootstrap and causal limits in Misleading chart repair desk. Adapt this focused lab to the project data: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.  Required concepts: Sampling unit, Standard error, Bootstrap, Confidence interpretation, Confounding.
  - Deliverable: Confidence intervals, bootstrap and causal limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Before/after charts with labeled axes and interpretation notes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Confidence intervals, bootstrap and causal limits: Confidence intervals, bootstrap and causal limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show sample counts and uncertainty; avoid hiding outliers or truncating a bar axis.
- [ ] Confidence intervals, bootstrap and causal limits: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Distribution shift notebook

A team needs to notice changing input distributions.

**Data:** Generate reference and shifted sensor batches with known mean and variance changes. Use a fixed seed and keep evaluation cases separate.

**Output:** Histograms, summary statistics and a shift investigation report.

**Effort:** 10h · Beginner → intermediate

- **Confidence intervals, bootstrap and causal limits:** Extend the project with Confidence intervals, bootstrap and causal limits in Distribution shift notebook. Adapt this focused lab to the project data: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.  Required concepts: Sampling unit, Standard error, Bootstrap, Confidence interpretation, Confounding.
  - Deliverable: Confidence intervals, bootstrap and causal limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Histograms, summary statistics and a shift investigation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Confidence intervals, bootstrap and causal limits: Confidence intervals, bootstrap and causal limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect the seeded shift and explain why detection does not identify its cause.
- [ ] Confidence intervals, bootstrap and causal limits: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Finite difference microscope

A learner needs to verify derivatives used in optimization.

**Data:** Generate a 30-row quadratic regression problem. Use a fixed seed and keep evaluation cases separate.

**Output:** A notebook comparing analytical and numerical gradients.

**Effort:** 10h · Beginner → intermediate

- **Confidence intervals, bootstrap and causal limits:** Extend the project with Confidence intervals, bootstrap and causal limits in Finite difference microscope. Adapt this focused lab to the project data: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.  Required concepts: Sampling unit, Standard error, Bootstrap, Confidence interpretation, Confounding.
  - Deliverable: Confidence intervals, bootstrap and causal limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A notebook comparing analytical and numerical gradients. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Confidence intervals, bootstrap and causal limits: Confidence intervals, bootstrap and causal limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report relative error for multiple step sizes and explain cancellation.
- [ ] Confidence intervals, bootstrap and causal limits: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data join integrity checker

An analyst needs to detect duplicated rows caused by joins.

**Data:** Create customer and order CSV files with missing and duplicated keys. Use a fixed seed and keep evaluation cases separate.

**Output:** A pandas join audit with rejected records and row-count explanations.

**Effort:** 10h · Beginner → intermediate

- **Confidence intervals, bootstrap and causal limits:** Extend the project with Confidence intervals, bootstrap and causal limits in Data join integrity checker. Adapt this focused lab to the project data: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.  Required concepts: Sampling unit, Standard error, Bootstrap, Confidence interpretation, Confounding.
  - Deliverable: Confidence intervals, bootstrap and causal limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A pandas join audit with rejected records and row-count explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Confidence intervals, bootstrap and causal limits: Confidence intervals, bootstrap and causal limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect many-to-many expansion and reconcile order totals.
- [ ] Confidence intervals, bootstrap and causal limits: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Missing value investigation

A researcher needs to understand how missingness alters summaries.

**Data:** Generate 200 survey rows with random and income-dependent missingness. Use a fixed seed and keep evaluation cases separate.

**Output:** A cleaning notebook comparing deletion and imputation.

**Effort:** 10h · Beginner → intermediate

- **Confidence intervals, bootstrap and causal limits:** Extend the project with Confidence intervals, bootstrap and causal limits in Missing value investigation. Adapt this focused lab to the project data: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.  Required concepts: Sampling unit, Standard error, Bootstrap, Confidence interpretation, Confounding.
  - Deliverable: Confidence intervals, bootstrap and causal limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cleaning notebook comparing deletion and imputation. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Confidence intervals, bootstrap and causal limits: Confidence intervals, bootstrap and causal limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Quantify bias under each missingness mechanism without claiming causality.
- [ ] Confidence intervals, bootstrap and causal limits: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature scaling geometry

A model builder needs to understand units before measuring distance.

**Data:** Generate height/income features with very different scales. Use a fixed seed and keep evaluation cases separate.

**Output:** A NumPy study of standard, robust and min-max scaling.

**Effort:** 10h · Beginner → intermediate

- **Confidence intervals, bootstrap and causal limits:** Extend the project with Confidence intervals, bootstrap and causal limits in Feature scaling geometry. Adapt this focused lab to the project data: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.  Required concepts: Sampling unit, Standard error, Bootstrap, Confidence interpretation, Confounding.
  - Deliverable: Confidence intervals, bootstrap and causal limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A NumPy study of standard, robust and min-max scaling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Confidence intervals, bootstrap and causal limits: Confidence intervals, bootstrap and causal limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Fit scaling on training rows only and compare neighbor identities.
- [ ] Confidence intervals, bootstrap and causal limits: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Matrix compression explorer

A learner needs to see the accuracy/storage tradeoff in low-rank approximation.

**Data:** Generate a 64 by 64 grayscale pattern with noise. Use a fixed seed and keep evaluation cases separate.

**Output:** An SVD reconstruction notebook with rank slider or rank table.

**Effort:** 10h · Beginner → intermediate

- **Confidence intervals, bootstrap and causal limits:** Extend the project with Confidence intervals, bootstrap and causal limits in Matrix compression explorer. Adapt this focused lab to the project data: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.  Required concepts: Sampling unit, Standard error, Bootstrap, Confidence interpretation, Confounding.
  - Deliverable: Confidence intervals, bootstrap and causal limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An SVD reconstruction notebook with rank slider or rank table. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Confidence intervals, bootstrap and causal limits: Confidence intervals, bootstrap and causal limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify error decreases with rank and report retained storage.
- [ ] Confidence intervals, bootstrap and causal limits: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Geometric similarity explorer

A learner needs to understand why vector scaling changes retrieval.

**Data:** Generate 60 two-dimensional points with three labeled groups. Use a fixed seed and keep evaluation cases separate.

**Output:** A notebook comparing dot product, cosine and Euclidean rankings.

**Effort:** 10h · Beginner → intermediate

- **Confidence intervals, bootstrap and causal limits:** Extend the project with Confidence intervals, bootstrap and causal limits in Geometric similarity explorer. Adapt this focused lab to the project data: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.  Required concepts: Sampling unit, Standard error, Bootstrap, Confidence interpretation, Confounding.
  - Deliverable: Confidence intervals, bootstrap and causal limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A notebook comparing dot product, cosine and Euclidean rankings. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Confidence intervals, bootstrap and causal limits: Confidence intervals, bootstrap and causal limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify hand-calculated examples and explain ranking changes after scaling.
- [ ] Confidence intervals, bootstrap and causal limits: Generate skewed session lengths and a confounded two-group comparison. Bootstrap the mean, plot uncertainty and explain why an observed difference is not automatically a treatment effect.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Stage checkpoint

<a id="checkpoint-math-data"></a>

### Mathematics and data checkpoint

Demonstrate readiness through a reproducible practical handoff. Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.

**Priority:** Foundation · **Study:** 1h · **Practice:** 6h

**Prerequisites:** [Vectors, matrices and dot products](math-data.md#math-linear), [Derivatives, chain rule and gradients](math-data.md#math-calculus), [Probability, distributions and statistics](math-data.md#math-probability), [NumPy arrays, shapes and broadcasting](math-data.md#data-numpy), [pandas, cleaning and missing values](math-data.md#data-pandas), [Visualization and exploratory analysis](math-data.md#data-visualization), [Norms, projections, eigenvectors and SVD intuition](math-data.md#math-linear-decompositions), [Sampling, uncertainty, joins and dataset validation](math-data.md#data-statistics-validation), [Bayes, likelihood and decision uncertainty](math-data.md#math-bayes-likelihood), [Entropy, cross-entropy and KL divergence](math-data.md#math-information), [Partial derivatives, Jacobians and vector gradients](math-data.md#math-jacobians), [Confidence intervals, bootstrap and causal limits](math-data.md#data-inference-causality) Navigation is unrestricted.

#### Concepts

- [ ] **Define the success contract:** Write observable checks before implementation so success is not just a plausible demonstration.
  - Example: Turn this task into a numbered acceptance checklist: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.
  - Videos:
    - [College statistics — full course](https://www.youtube.com/watch?v=xxpc-HPKN28) · freeCodeCamp · Full course · approximately 8h
      - Explains: Descriptive statistics, probability, distributions and statistical reasoning.
      - Useful because: Learn to interpret dataset summaries and uncertainty instead of trusting one metric.
      - Watch for: Focus on define the success contract. Then reproduce the lesson example: Turn this task into a numbered acceptance checklist: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/free-statistics-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on define the success contract. Then reproduce the lesson example: Turn this task into a numbered acceptance checklist: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Reproduce the baseline:** Keep a simple reference output and deterministic inputs so changes can be compared honestly.
  - Example: Run a fixed input twice and compare saved outputs with the documented baseline.
  - Videos:
    - [College statistics — full course](https://www.youtube.com/watch?v=xxpc-HPKN28) · freeCodeCamp · Full course · approximately 8h
      - Explains: Descriptive statistics, probability, distributions and statistical reasoning.
      - Useful because: Learn to interpret dataset summaries and uncertainty instead of trusting one metric.
      - Watch for: Focus on reproduce the baseline. Then reproduce the lesson example: Run a fixed input twice and compare saved outputs with the documented baseline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/free-statistics-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on reproduce the baseline. Then reproduce the lesson example: Run a fixed input twice and compare saved outputs with the documented baseline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Test a failure boundary:** A working happy path does not establish robustness to malformed data or dependency failures.
  - Example: Inject one malformed input and one controlled failure, then record the resulting state.
  - Videos:
    - [College statistics — full course](https://www.youtube.com/watch?v=xxpc-HPKN28) · freeCodeCamp · Full course · approximately 8h
      - Explains: Descriptive statistics, probability, distributions and statistical reasoning.
      - Useful because: Learn to interpret dataset summaries and uncertainty instead of trusting one metric.
      - Watch for: Focus on test a failure boundary. Then reproduce the lesson example: Inject one malformed input and one controlled failure, then record the resulting state.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/free-statistics-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on test a failure boundary. Then reproduce the lesson example: Inject one malformed input and one controlled failure, then record the resulting state.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Explain the decisions:** Describe why each technique was chosen and what evidence would make you choose differently.
  - Example: Write a short decision note comparing the chosen approach with one simpler alternative.
  - Videos:
    - [College statistics — full course](https://www.youtube.com/watch?v=xxpc-HPKN28) · freeCodeCamp · Full course · approximately 8h
      - Explains: Descriptive statistics, probability, distributions and statistical reasoning.
      - Useful because: Learn to interpret dataset summaries and uncertainty instead of trusting one metric.
      - Watch for: Focus on explain the decisions. Then reproduce the lesson example: Write a short decision note comparing the chosen approach with one simpler alternative.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/free-statistics-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on explain the decisions. Then reproduce the lesson example: Write a short decision note comparing the chosen approach with one simpler alternative.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-data-analysis-with-python-course/
- [ ] **Hand off the evidence:** Another learner must be able to reproduce the result from your instructions and supplied inputs.
  - Example: Ask a teammate to run the README commands in a clean environment and record missing steps.
  - Videos:
    - [College statistics — full course](https://www.youtube.com/watch?v=xxpc-HPKN28) · freeCodeCamp · Full course · approximately 8h
      - Explains: Descriptive statistics, probability, distributions and statistical reasoning.
      - Useful because: Learn to interpret dataset summaries and uncertainty instead of trusting one metric.
      - Watch for: Focus on hand off the evidence. Then reproduce the lesson example: Ask a teammate to run the README commands in a clean environment and record missing steps.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/free-statistics-course/
    - [Data analysis with Python — full course](https://www.youtube.com/watch?v=r-uOLxNrNk8) · freeCodeCamp · Full course · approximately 4h
      - Explains: NumPy, pandas, cleaning and exploring data with Python.
      - Useful because: Work through real data transformations before building training pipelines.
      - Watch for: Focus on hand off the evidence. Then reproduce the lesson example: Ask a teammate to run the README commands in a clean environment and record missing steps.
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

1. [Official reference: Confidence intervals, bootstrap and causal limits](https://seeing-theory.brown.edu/frequentist-inference/index.html) — Free reading; no registration required. Use the local CPU exercise; optional hosted services and downloads are not required..
2. [pandas: merge and join](https://pandas.pydata.org/docs/user_guide/merging.html) — Free; no registration required. No paid materials required.

#### Mathematics and data checkpoint

Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.

**Deliverables**

- Runnable project and reproducible input fixtures
- README, results and decision notes
- Failure evidence and clean-start instructions

**Completion checks**

- [ ] Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.
- [ ] Explain the code and results without relying on an AI-generated summary.
- [ ] A teammate can reproduce the demo without paid credentials.

#### Ten project recommendations

### Conditional probability simulator

An analyst needs to distinguish test accuracy from posterior probability.

**Data:** Simulate 10000 fictional cases at three base rates. Use a fixed seed and keep evaluation cases separate.

**Output:** A contingency table and Bayes-rule calculator.

**Effort:** 10h · Beginner → intermediate

- **Mathematics and data checkpoint:** Extend the project with Mathematics and data checkpoint in Conditional probability simulator. Adapt this focused lab to the project data: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Mathematics and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A contingency table and Bayes-rule calculator. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Mathematics and data checkpoint: Mathematics and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match analytical posterior values within stated simulation tolerance.
- [ ] Mathematics and data checkpoint: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Bootstrap uncertainty studio

A product analyst needs uncertainty around a small sample mean.

**Data:** Generate 80 session lengths with a skewed distribution. Use a fixed seed and keep evaluation cases separate.

**Output:** A bootstrap interval report with reproducible resampling.

**Effort:** 10h · Beginner → intermediate

- **Mathematics and data checkpoint:** Extend the project with Mathematics and data checkpoint in Bootstrap uncertainty studio. Adapt this focused lab to the project data: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Mathematics and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bootstrap interval report with reproducible resampling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Mathematics and data checkpoint: Mathematics and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare percentile intervals with a normal approximation and discuss limits.
- [ ] Mathematics and data checkpoint: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Misleading chart repair desk

A report author needs honest charts for comparing groups.

**Data:** Create four group distributions with outliers and unequal sizes. Use a fixed seed and keep evaluation cases separate.

**Output:** Before/after charts with labeled axes and interpretation notes.

**Effort:** 10h · Beginner → intermediate

- **Mathematics and data checkpoint:** Extend the project with Mathematics and data checkpoint in Misleading chart repair desk. Adapt this focused lab to the project data: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Mathematics and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Before/after charts with labeled axes and interpretation notes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Mathematics and data checkpoint: Mathematics and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show sample counts and uncertainty; avoid hiding outliers or truncating a bar axis.
- [ ] Mathematics and data checkpoint: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Distribution shift notebook

A team needs to notice changing input distributions.

**Data:** Generate reference and shifted sensor batches with known mean and variance changes. Use a fixed seed and keep evaluation cases separate.

**Output:** Histograms, summary statistics and a shift investigation report.

**Effort:** 10h · Beginner → intermediate

- **Mathematics and data checkpoint:** Extend the project with Mathematics and data checkpoint in Distribution shift notebook. Adapt this focused lab to the project data: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Mathematics and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Histograms, summary statistics and a shift investigation report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Mathematics and data checkpoint: Mathematics and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect the seeded shift and explain why detection does not identify its cause.
- [ ] Mathematics and data checkpoint: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Finite difference microscope

A learner needs to verify derivatives used in optimization.

**Data:** Generate a 30-row quadratic regression problem. Use a fixed seed and keep evaluation cases separate.

**Output:** A notebook comparing analytical and numerical gradients.

**Effort:** 10h · Beginner → intermediate

- **Mathematics and data checkpoint:** Extend the project with Mathematics and data checkpoint in Finite difference microscope. Adapt this focused lab to the project data: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Mathematics and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A notebook comparing analytical and numerical gradients. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Mathematics and data checkpoint: Mathematics and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report relative error for multiple step sizes and explain cancellation.
- [ ] Mathematics and data checkpoint: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data join integrity checker

An analyst needs to detect duplicated rows caused by joins.

**Data:** Create customer and order CSV files with missing and duplicated keys. Use a fixed seed and keep evaluation cases separate.

**Output:** A pandas join audit with rejected records and row-count explanations.

**Effort:** 10h · Beginner → intermediate

- **Mathematics and data checkpoint:** Extend the project with Mathematics and data checkpoint in Data join integrity checker. Adapt this focused lab to the project data: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Mathematics and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A pandas join audit with rejected records and row-count explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Mathematics and data checkpoint: Mathematics and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect many-to-many expansion and reconcile order totals.
- [ ] Mathematics and data checkpoint: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Missing value investigation

A researcher needs to understand how missingness alters summaries.

**Data:** Generate 200 survey rows with random and income-dependent missingness. Use a fixed seed and keep evaluation cases separate.

**Output:** A cleaning notebook comparing deletion and imputation.

**Effort:** 10h · Beginner → intermediate

- **Mathematics and data checkpoint:** Extend the project with Mathematics and data checkpoint in Missing value investigation. Adapt this focused lab to the project data: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Mathematics and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A cleaning notebook comparing deletion and imputation. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Mathematics and data checkpoint: Mathematics and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Quantify bias under each missingness mechanism without claiming causality.
- [ ] Mathematics and data checkpoint: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Feature scaling geometry

A model builder needs to understand units before measuring distance.

**Data:** Generate height/income features with very different scales. Use a fixed seed and keep evaluation cases separate.

**Output:** A NumPy study of standard, robust and min-max scaling.

**Effort:** 10h · Beginner → intermediate

- **Mathematics and data checkpoint:** Extend the project with Mathematics and data checkpoint in Feature scaling geometry. Adapt this focused lab to the project data: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Mathematics and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A NumPy study of standard, robust and min-max scaling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Mathematics and data checkpoint: Mathematics and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Fit scaling on training rows only and compare neighbor identities.
- [ ] Mathematics and data checkpoint: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Matrix compression explorer

A learner needs to see the accuracy/storage tradeoff in low-rank approximation.

**Data:** Generate a 64 by 64 grayscale pattern with noise. Use a fixed seed and keep evaluation cases separate.

**Output:** An SVD reconstruction notebook with rank slider or rank table.

**Effort:** 10h · Beginner → intermediate

- **Mathematics and data checkpoint:** Extend the project with Mathematics and data checkpoint in Matrix compression explorer. Adapt this focused lab to the project data: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Mathematics and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An SVD reconstruction notebook with rank slider or rank table. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Mathematics and data checkpoint: Mathematics and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify error decreases with rank and report retained storage.
- [ ] Mathematics and data checkpoint: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Geometric similarity explorer

A learner needs to understand why vector scaling changes retrieval.

**Data:** Generate 60 two-dimensional points with three labeled groups. Use a fixed seed and keep evaluation cases separate.

**Output:** A notebook comparing dot product, cosine and Euclidean rankings.

**Effort:** 10h · Beginner → intermediate

- **Mathematics and data checkpoint:** Extend the project with Mathematics and data checkpoint in Geometric similarity explorer. Adapt this focused lab to the project data: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Mathematics and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A notebook comparing dot product, cosine and Euclidean rankings. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Mathematics and data checkpoint: Mathematics and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify hand-calculated examples and explain ranking changes after scaling.
- [ ] Mathematics and data checkpoint: Clean a generated dataset, explain shapes and dot products, check a gradient numerically, compute a conditional probability and bootstrap a mean. Plot results and state the causal limits of an observed association.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

