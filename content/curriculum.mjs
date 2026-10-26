import { r, chapter as ch } from "./resources.mjs";
const c = (text) =>
  text.split("\n").map((line) => {
    const [name, explanation, example] = line.split("~");
    return { name, explanation, example };
  });
const l = (
  id,
  title,
  why,
  concepts,
  exercise,
  resources,
  priority = "Core",
  study = 2,
  practice = 3,
) => ({
  id,
  title,
  why,
  summary: why,
  concepts: c(concepts),
  exercise: {
    title: `Lab: ${title}`,
    brief: exercise,
    deliverables: [
      "Runnable code or notebook with a small reproducible input",
      "README explaining decisions, results and limitations",
    ],
    acceptance: [
      exercise,
      "Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.",
    ],
  },
  resources,
  priority,
  studyHours: study,
  practiceHours: practice,
  prerequisites: [],
});
const m = (title, lessons) => ({ title, lessons });
const d = (id, title, description, modules, foundation = []) => {
  const lessons = modules.flatMap((x) => x.lessons);
  lessons.forEach((x, i) => {
    x.domainId = id;
    x.module = modules.find((y) => y.lessons.includes(x)).title;
    x.prerequisites = i ? [lessons[i - 1].id] : foundation;
  });
  return { id, title, description, modules };
};
export const domains = [
  d(
    "python",
    "Python",
    "Write understandable, testable programs before adding models.",
    [
      m("Language essentials", [
        l(
          "python-values",
          "Types and collections",
          "Choose data representations that make model inputs and outputs predictable.",
          `Types~int, float, bool, str and None express different kinds of values; conversions can lose information.~float("3.5") succeeds but int("3.5") raises ValueError.
Collections~Lists preserve order, dictionaries map keys to values, sets deduplicate and tuples express fixed records.~Deduplicate document IDs with set(ids), then sort for reproducible output.
Mutability~Lists and dictionaries can change in place; shared references can accidentally affect callers.~Copy a list before removing records when the original is needed for evaluation.`,
          "Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.",
          [
            ch(
              r.cs50,
              "CS50P: variables and functions",
              "https://cs50.harvard.edu/python/2022/weeks/0/",
            ),
            ch(
              r.python,
              "Python: data structures",
              "https://docs.python.org/3/tutorial/datastructures.html",
            ),
          ],
        ),
        l(
          "python-control",
          "Control flow and functions",
          "Turn a notebook experiment into reusable, explicit behavior.",
          `Branches and loops~if selects behavior and for iterates over inputs; use early returns for invalid cases.~Skip a row without text before calling the tokenizer.
Functions~Parameters, return values and scope separate a reusable transformation from its caller.~normalize(text) returns a string instead of printing it.
Comprehensions~A comprehension expresses a simple mapping or filtering operation; complex branching belongs in a loop.~[x.lower() for x in names if x] removes blank entries.`,
          "Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.",
          [
            ch(
              r.cs50,
              "CS50P: conditionals",
              "https://cs50.harvard.edu/python/2022/weeks/1/",
            ),
            ch(
              r.python,
              "Python: control flow",
              "https://docs.python.org/3/tutorial/controlflow.html",
            ),
          ],
        ),
        l(
          "python-files",
          "Files, JSON and exceptions",
          "Safely load datasets and report malformed inputs instead of silently losing data.",
          `Context managers~with closes a file even when an exception interrupts reading.~with open(path, encoding="utf-8") as f reads Unicode text safely.
JSON~JSON represents interoperable objects, arrays and scalar values, but not arbitrary Python objects.~json.loads turns an API response body into a dictionary.
Exceptions~Catch specific expected errors; let unexpected programming errors remain visible.~Catch JSONDecodeError and report the line rather than returning an empty dataset.`,
          "Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.",
          [
            ch(
              r.cs50,
              "CS50P: file I/O",
              "https://cs50.harvard.edu/python/2022/weeks/6/",
            ),
            ch(
              r.python,
              "Python: input and output",
              "https://docs.python.org/3/tutorial/inputoutput.html",
            ),
          ],
        ),
      ]),
      m("Production Python", [
        l(
          "python-modules",
          "Modules, environments and dependencies",
          "Keep projects reproducible and imports independent of one computer.",
          `Modules and packages~Modules group related functions; packages define importable directories and public interfaces.~Import a preprocessing function instead of copying it into training and serving scripts.
Virtual environments~An isolated environment prevents unrelated projects from sharing incompatible packages.~python -m venv .venv creates a project environment.
Dependency versions~Record dependencies and test a clean installation rather than trusting your current environment.~Install pinned requirements into a new environment and rerun a small example.`,
          "Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.",
          [
            ch(
              r.python,
              "Python: modules",
              "https://docs.python.org/3/tutorial/modules.html",
            ),
            ch(
              r.python,
              "Python: virtual environments",
              "https://docs.python.org/3/tutorial/venv.html",
            ),
          ],
        ),
        l(
          "python-objects",
          "OOP, dataclasses and typing",
          "Express model records and interfaces without unnecessary inheritance.",
          `Classes~Objects combine state with operations when that state has a clear lifecycle.~A DatasetReader stores its path and yields validated records.
Dataclasses~Dataclasses define lightweight records with generated initialization and representation.~A Prediction holds label, probability and model_version.
Type hints~Hints describe contracts for tools and readers; runtime validation remains necessary at external inputs.~list[str] documents text inputs but does not validate received JSON.`,
          "Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.",
          [
            ch(
              r.python,
              "Python: classes",
              "https://docs.python.org/3/tutorial/classes.html",
            ),
            ch(
              r.cs50,
              "CS50P: object-oriented programming",
              "https://cs50.harvard.edu/python/2022/weeks/8/",
            ),
          ],
        ),
        l(
          "python-iteration",
          "Iterators and generators",
          "Process data incrementally instead of loading everything into memory.",
          `Iteration protocol~An iterable produces an iterator and next retrieves one item until exhaustion.~A file object lets a for loop consume one line at a time.
Generators~yield suspends a function while preserving its state; this supports lazy pipelines.~Yield cleaned documents from a JSONL reader.
Batching~Bounded batches control memory and inference throughput.~Accumulate 32 examples then flush the final partial batch.`,
          "Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.",
          [
            ch(
              r.python,
              "Python: generators",
              "https://docs.python.org/3/tutorial/classes.html#generators",
            ),
            ch(
              r.python,
              "itertools recipes",
              "https://docs.python.org/3/library/itertools.html#itertools-recipes",
            ),
          ],
          "Useful next",
        ),
        l(
          "python-async",
          "Async, logging, debugging and pytest",
          "Make concurrent I/O observable and preserve confidence when changing behavior.",
          `Async I/O~async/await lets other tasks run during waiting; CPU-heavy training does not become faster merely by using async.~Run independent mock network calls with asyncio.gather.
Logging and debugging~Structured messages and tracebacks expose where failures occurred; avoid logging secrets or personal inputs.~Log record count and request ID instead of entire customer messages.
pytest~Assertions, fixtures and parametrization capture expected behavior and prevent regressions.~Parametrize normalization tests for empty and Unicode inputs.`,
          "Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.",
          [
            ch(
              r.python,
              "asyncio: coroutines and tasks",
              "https://docs.python.org/3/library/asyncio-task.html",
            ),
            r.testing,
          ],
          "Core",
          3,
          4,
        ),
      ]),
    ],
  ),
  d(
    "engineering",
    "Engineering foundations",
    "Use the tools and contracts that make a team project maintainable.",
    [
      m("Developer workflow", [
        l(
          "engineering-shell",
          "Terminal and Linux",
          "Understand processes, paths and environment configuration behind deployment commands.",
          `Paths and permissions~Relative paths depend on the working directory; permissions control readable and executable files.~Use an absolute dataset path when a script starts from a scheduler.
Pipes and redirection~Commands compose by passing output to input; redirection can overwrite files.~Pipe a log stream to a filtering command, preserving the original log.
Processes and environment~Processes inherit environment variables; signals request shutdown.~Set a local configuration variable and stop a worker gracefully.`,
          "Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.",
          [
            r.linux,
            ch(
              r.linux,
              "Missing Semester: shell tools and scripting",
              "https://missing.csail.mit.edu/2020/shell-tools/",
            ),
          ],
        ),
        l(
          "engineering-git",
          "Git, branches and pull requests",
          "Collaborate without losing experiments or merging unreviewed changes.",
          `Commits~A commit is a snapshot with history; small coherent commits make review and rollback understandable.~Commit preprocessing separately from a model experiment.
Branches and merges~Branches isolate changes; merge conflicts require deciding which behavior is correct.~Resolve two edits to the same configuration then rerun tests.
Pull requests~Review explains the problem, change and validation; ignore environments, secrets and generated bulky data.~Open a PR with a before/after example and test results.`,
          "Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.",
          [
            ch(
              r.git,
              "Pro Git: basic branching and merging",
              "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging",
            ),
            ch(
              r.git,
              "Pro Git: recording changes",
              "https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository",
            ),
          ],
        ),
      ]),
      m("Contracts and quality", [
        l(
          "engineering-http",
          "HTTP, APIs and JSON contracts",
          "Model services communicate through explicit request and response contracts.",
          `Methods and status codes~GET reads, POST submits work and meaningful status codes communicate success or failure.~Return 422 for invalid input rather than a success response containing an error.
Headers and serialization~Content types and JSON shapes let clients interpret responses.~Declare application/json and return a documented prediction object.
Client resilience~Network calls need timeouts and careful retries; retries can duplicate side effects.~Retry a safe read but use an idempotency key before repeating a write.`,
          "Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.",
          [
            r.http,
            ch(
              r.http,
              "MDN: HTTP response codes",
              "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status",
            ),
          ],
        ),
        l(
          "engineering-design",
          "Complexity, code structure and testing",
          "Keep implementation simple while knowing which operations become slow or fragile.",
          `Complexity~Big O describes how resource use grows with input size, not exact wall-clock time.~A set lookup avoids repeatedly scanning a list of document IDs.
Structure~Separate input validation, transformation and side effects when their responsibilities differ.~Test preprocessing without requiring a network connection.
Testing layers~Unit tests check isolated behavior, integration tests check boundaries, and end-to-end tests check user outcomes.~Test a parser, then file ingestion, then upload-to-search behavior.`,
          "Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.",
          [
            ch(
              r.python,
              "Python: data structures",
              "https://docs.python.org/3/tutorial/datastructures.html",
            ),
            r.testing,
          ],
        ),
      ]),
    ],
    ["python-control"],
  ),
  d(
    "math-data",
    "Mathematics and data",
    "Understand the operations and data quality behind model behavior.",
    [
      m("Mathematical intuition", [
        l(
          "math-linear",
          "Vectors, matrices and dot products",
          "Track shapes and understand features, embeddings and dense layers.",
          `Vectors and matrices~A vector holds coordinates; a matrix transforms or stacks vectors; dimensions constrain valid multiplication.~A batch shaped (32, 10) multiplied by weights (10, 3) yields (32, 3).
Dot products~A dot product measures alignment and underlies linear predictions and attention scores.~Compute a weighted sum of three features by hand and with NumPy.
Norms and cosine similarity~A norm measures magnitude; cosine compares directions independent of scale.~Two scaled versions of the same nonzero embedding have cosine similarity one.`,
          "Implement a linear scoring function and cosine similarity in NumPy; verify shapes and handle a zero vector without division by zero.",
          [
            ch(
              r.dl,
              "D2L: linear algebra",
              "https://d2l.ai/chapter_preliminaries/linear-algebra.html",
            ),
            r.math,
          ],
        ),
        l(
          "math-calculus",
          "Derivatives, chain rule and gradients",
          "Explain how an optimizer changes weights to reduce a loss.",
          `Derivatives~A derivative measures local sensitivity of an output to an input.~For f(x)=x² the slope at x=3 is 6.
Chain rule~Derivatives of composed functions multiply through intermediate computations.~Differentiate squared prediction error through a linear prediction.
Gradients~A gradient collects partial derivatives for parameters; stepping against it locally reduces loss for a suitable step size.~Update w with w - learning_rate * gradient.`,
          "Derive gradients for one-variable linear regression, compare with finite differences and demonstrate decreasing loss for a small step size.",
          [
            ch(
              r.dl,
              "D2L: calculus",
              "https://d2l.ai/chapter_preliminaries/calculus.html",
            ),
            ch(
              r.dl,
              "D2L: automatic differentiation",
              "https://d2l.ai/chapter_preliminaries/autograd.html",
            ),
          ],
        ),
        l(
          "math-probability",
          "Probability, distributions and statistics",
          "Interpret predictions and uncertainty without confusing confidence with correctness.",
          `Conditional probability~P(A|B) updates an event probability given evidence; it differs from P(B|A).~A rare-class prediction needs the class base rate, not only test sensitivity.
Distributions~Bernoulli describes binary events and normal distributions model continuous variation; assumptions should be checked.~Simulate coin outcomes and compare empirical frequency with probability.
Statistics~Mean, median, variance and quantiles summarize data; confidence intervals describe sampling uncertainty.~Report median and p95 latency instead of only a mean.`,
          "Simulate an imbalanced binary dataset; calculate conditional probabilities and bootstrap an accuracy interval with a fixed seed.",
          [
            ch(
              r.dl,
              "D2L: probability and statistics",
              "https://d2l.ai/chapter_preliminaries/probability.html",
            ),
            r.stat,
          ],
        ),
      ]),
      m("Practical data work", [
        l(
          "data-numpy",
          "NumPy arrays, shapes and broadcasting",
          "Use vectorized transformations while detecting silent shape mistakes.",
          `Array axes~Axes distinguish samples from features; reductions must use the intended axis.~mean(axis=0) computes feature means for a samples-by-features matrix.
Broadcasting~Compatible singleton dimensions are expanded logically, which can also produce unintended large outputs.~Subtract a (features,) mean from a (samples, features) matrix.
Vectorization~Array operations avoid Python-level loops but may allocate temporary arrays.~Use matrix multiplication rather than looping over every sample.`,
          "Standardize an array column-wise and compare to a loop implementation; assert the output shape and behavior for constant columns.",
          [
            r.numpy,
            ch(
              r.numpy,
              "NumPy broadcasting",
              "https://numpy.org/doc/stable/user/basics.broadcasting.html",
            ),
          ],
        ),
        l(
          "data-pandas",
          "pandas, cleaning and missing values",
          "Build trustworthy datasets and record what preprocessing changed.",
          `DataFrames~Named columns and indexes support selection, grouping and joins; indexes are not automatically unique IDs.~Join labels using a validated record_id column.
Missing and duplicate data~Missingness can encode information; imputation must fit only on training data.~Report null counts and duplicate IDs before removing records.
Data quality~Check schema, range and consistency rules before modeling.~Reject negative durations and labels outside the allowed set.`,
          "Audit a small CSV with duplicates, missing values and inconsistent labels; save a quality report and a cleaned copy while preserving the raw file.",
          [
            r.pandas,
            ch(
              r.pandas,
              "pandas missing data guide",
              "https://pandas.pydata.org/docs/user_guide/missing_data.html",
            ),
          ],
        ),
        l(
          "data-visualization",
          "Visualization and exploratory analysis",
          "Detect imbalance, outliers and misleading aggregates before training.",
          `Distributions~Histograms and boxplots reveal spread and extreme values that averages hide.~Plot document length before choosing a chunk size.
Relationships~Scatterplots and grouped summaries suggest associations, not causality.~Compare error rate across document-length buckets.
Communication~Label axes, units and sample counts; choose accessible colors and preserve uncertainty.~Show a confusion matrix with numeric annotations.`,
          "Produce a three-chart dataset report with missingness, class counts and a feature distribution; state two hypotheses and one limitation.",
          [
            ch(
              r.pandas,
              "pandas: plot data",
              "https://pandas.pydata.org/docs/getting_started/intro_tutorials/04_plotting.html",
            ),
            ch(
              r.sklearn,
              "scikit-learn: inspection",
              "https://scikit-learn.org/stable/inspection.html",
            ),
          ],
        ),
      ]),
    ],
    ["python-values"],
  ),
  d(
    "ml",
    "Machine learning",
    "Train reliable baselines and understand what their evaluation actually measures.",
    [
      m("Learning and validation", [
        l(
          "ml-problem",
          "Supervised learning, regression and classification",
          "Match the learning objective to the user problem and target data.",
          `Supervised learning~Learn a mapping from features to known targets; labels define the task and can contain errors.~Predict a category from labeled support messages.
Regression versus classification~Regression predicts a numeric quantity; classification predicts discrete categories.~Predict delivery duration versus whether a delivery is late.
Baselines and losses~A baseline establishes minimum useful performance; a training loss provides an optimizable objective.~Compare a majority-class baseline with logistic regression.`,
          "Use the built-in scikit-learn breast-cancer dataset to compare a dummy classifier with a simple classifier; document target, baseline and limitations without presenting it as a medical tool.",
          [
            ch(
              r.ml,
              "Inria: predictive modeling pipeline",
              "https://inria.github.io/scikit-learn-mooc/python_scripts/02_numerical_pipeline_introduction.html",
            ),
            ch(
              r.sklearn,
              "scikit-learn: dummy estimators",
              "https://scikit-learn.org/stable/modules/model_evaluation.html#dummy-estimators",
            ),
          ],
        ),
        l(
          "ml-splits",
          "Train/validation/test, cross-validation and leakage",
          "Measure generalization using data the model and preprocessing have not seen.",
          `Splits~Training fits parameters, validation chooses designs and testing estimates final performance.~Reserve a test set before choosing the regularization strength.
Cross-validation~Repeated train/validation folds estimate variability; the split must match deployment, including customer groups and chronological boundaries.~Keep every record from one customer in the same fold; for forecasting train only on records earlier than validation.
Leakage~Information from evaluation data or future events can inflate scores, including labels used during feature selection or duplicate documents across splits.~Fit a scaler and feature selector inside a Pipeline on training folds only; deduplicate before assigning splits.`,
          "Compare a correct Pipeline cross-validation experiment with intentionally leaked preprocessing on generated data. Save split IDs, assert train/test disjointness and show a grouped or chronological split. Explain why leakage is invalid even if this small experiment does not inflate the score, and evaluate the held-out test set only after selecting the configuration.",
          [
            ch(
              r.sklearn,
              "scikit-learn: cross-validation",
              "https://scikit-learn.org/stable/modules/cross_validation.html",
            ),
            ch(
              r.ml,
              "Inria scikit-learn course: cross-validation notebook and exercises",
              "https://inria.github.io/scikit-learn-mooc/python_scripts/02_numerical_pipeline_cross_validation.html",
            ),
            ch(
              r.sklearn,
              "scikit-learn: common pitfalls",
              "https://scikit-learn.org/stable/common_pitfalls.html",
            ),
          ],
        ),
        l(
          "ml-preprocessing",
          "Preprocessing and feature engineering",
          "Convert messy records into features consistently during training and inference.",
          `Scaling and encoding~Numeric scaling and categorical encoding depend on the estimator and data.~Standardize numeric features and one-hot encode categories with unknown-category handling.
Feature engineering~Transformations capture useful information but should respect availability at prediction time.~Extract weekday from a timestamp known before a prediction.
Pipelines~ColumnTransformer and Pipeline bundle transformations with the estimator to prevent drift and leakage.~Save one fitted pipeline instead of separate manually applied transformations.`,
          "Train a mixed numeric/categorical Pipeline on a generated dataset with missing entries; prove an unseen category and a new record use the same transformation path.",
          [
            ch(
              r.ml,
              "Inria: categorical variables",
              "https://inria.github.io/scikit-learn-mooc/python_scripts/03_categorical_pipeline.html",
            ),
            ch(
              r.sklearn,
              "scikit-learn: composite estimators",
              "https://scikit-learn.org/stable/modules/compose.html",
            ),
          ],
        ),
      ]),
      m("Models and optimization", [
        l(
          "ml-linear",
          "Linear/logistic regression and gradient descent",
          "Understand simple models before relying on complex ones.",
          `Linear regression~A weighted feature sum predicts a continuous value; squared error penalizes large residuals.~Fit y≈3x+2 with noisy generated points.
Logistic regression~A sigmoid or softmax converts linear scores into class probabilities; cross-entropy trains the classifier.~Predict a binary label from two numeric features.
Gradient descent~Learning rate controls update size; an excessive rate can diverge.~Plot loss for small and excessive step sizes on the same dataset.`,
          "Implement a small linear regression gradient loop, compare coefficients with scikit-learn and train a logistic classifier with a held-out evaluation.",
          [
            ch(
              r.sklearn,
              "scikit-learn: linear models",
              "https://scikit-learn.org/stable/modules/linear_model.html",
            ),
            ch(
              r.dl,
              "D2L: linear regression from scratch",
              "https://d2l.ai/chapter_linear-regression/linear-regression-scratch.html",
            ),
          ],
        ),
        l(
          "ml-trees",
          "Trees, random forests and boosting",
          "Compare nonlinear baselines and recognize how ensembles reduce different errors.",
          `Decision trees~Trees partition feature space using split rules and can overfit deeply.~Limit max_depth and compare training with validation accuracy.
Random forests~Bootstrap sampling and randomized features diversify trees before averaging.~Compare a single tree and a forest across random seeds.
Boosting~Sequential weak learners focus on remaining error; learning rate and tree size control complexity.~Evaluate HistGradientBoosting on a small tabular dataset.`,
          "Compare a shallow tree, random forest and histogram gradient boosting with identical folds; report accuracy, fit time and one model explanation.",
          [
            ch(
              r.sklearn,
              "scikit-learn: decision trees",
              "https://scikit-learn.org/stable/modules/tree.html",
            ),
            ch(
              r.sklearn,
              "scikit-learn: ensembles",
              "https://scikit-learn.org/stable/modules/ensemble.html",
            ),
          ],
        ),
        l(
          "ml-neighbors",
          "kNN, SVM, clustering and PCA",
          "Choose methods based on geometry, labels and dimensionality.",
          `kNN and SVM~Neighbors depend on distance and scaling; SVM seeks a separating margin and may use kernels.~Compare scaled and unscaled kNN on the same features.
Clustering~Unsupervised grouping finds structure without targets; cluster IDs are not ground-truth labels.~Run k-means on synthetic blobs and inspect sensitivity to k.
PCA~Principal components compress directions of variance; high variance is not necessarily predictive information.~Project standardized digits features to two components for visualization.`,
          "Use built-in digits and synthetic blobs to compare scaled kNN/SVM, visualize PCA and evaluate clustering with an appropriate unsupervised metric.",
          [
            ch(
              r.sklearn,
              "scikit-learn: neighbors",
              "https://scikit-learn.org/stable/modules/neighbors.html",
            ),
            ch(
              r.sklearn,
              "scikit-learn: clustering",
              "https://scikit-learn.org/stable/modules/clustering.html",
            ),
            ch(
              r.sklearn,
              "scikit-learn: PCA",
              "https://scikit-learn.org/stable/modules/decomposition.html#pca",
            ),
          ],
        ),
      ]),
      m("Trustworthy results", [
        l(
          "ml-generalization",
          "Bias/variance, regularization and tuning",
          "Improve validation behavior rather than merely maximizing training scores.",
          `Bias and variance~Underfitting misses useful structure; overfitting captures noise and unstable patterns.~Compare learning curves for shallow and deep trees.
Regularization~Penalties or structural constraints restrict complexity; stronger regularization is not always better.~Sweep logistic regression C across a small logarithmic grid.
Hyperparameter tuning~Search uses validation folds, never repeatedly exposed test data.~Compare three candidate settings with cross-validation then evaluate once.`,
          "Produce learning curves, run a small reproducible parameter search and explain whether more data or a different model is the next useful step.",
          [
            ch(
              r.sklearn,
              "scikit-learn: validation curves",
              "https://scikit-learn.org/stable/modules/learning_curve.html",
            ),
            ch(
              r.sklearn,
              "scikit-learn: parameter tuning",
              "https://scikit-learn.org/stable/modules/grid_search.html",
            ),
          ],
        ),
        l(
          "ml-metrics",
          "Imbalance, metrics, calibration and error analysis",
          "Measure the mistakes that matter and distinguish probability quality from label accuracy.",
          `Classification metrics~Precision, recall, F1, ROC-AUC and PR-AUC answer different questions; accuracy hides rare-class failures.~A classifier predicting only the majority class can still have high accuracy.
Calibration and thresholds~Calibration compares probabilities with frequencies; thresholds trade false positives against false negatives.~Choose a threshold on validation data and evaluate its confusion matrix.
Error analysis~Inspect error slices and mislabeled samples; metrics alone do not reveal causes.~Group errors by feature range and compare class-weighted training.`,
          "Evaluate an imbalanced synthetic dataset with PR-AUC and a confusion matrix, plot calibration and inspect ten wrong predictions before choosing an improvement.",
          [
            ch(
              r.sklearn,
              "scikit-learn: model evaluation",
              "https://scikit-learn.org/stable/modules/model_evaluation.html",
            ),
            ch(
              r.sklearn,
              "scikit-learn: probability calibration",
              "https://scikit-learn.org/stable/modules/calibration.html",
            ),
          ],
        ),
        l(
          "ml-inference",
          "Model persistence, inference and data drift",
          "Serve the same preprocessing and model version that you evaluated.",
          `Persistence~Persist the complete fitted pipeline and version metadata; pickle-like formats are unsafe from untrusted sources.~Load only an artifact your own training job produced.
Inference contracts~Validate feature schema and define batch and single-example outputs.~Reject a missing required feature instead of silently shifting column order.
Drift~Feature or target distributions can change after deployment; alerts need reference windows and action plans.~Compare current feature histograms with training statistics.`,
          "Save a fitted pipeline locally, load it in a separate process and verify identical predictions; create a schema check and a synthetic drift report.",
          [
            ch(
              r.sklearn,
              "scikit-learn: model persistence",
              "https://scikit-learn.org/stable/model_persistence.html",
            ),
            ch(
              r.sklearn,
              "scikit-learn: common pitfalls",
              "https://scikit-learn.org/stable/common_pitfalls.html",
            ),
          ],
        ),
      ]),
    ],
    ["data-numpy", "math-probability"],
  ),
];
export { d, m, l, ch, r };
