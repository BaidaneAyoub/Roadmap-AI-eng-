# Engineering foundations

Use the tools and contracts that make a team project maintainable.

## Main route · Step 2 of 8

**Goal:** Turn scripts into a maintainable, tested team repository.

**Stage checkpoint:** Open a pull request with a tested HTTP/JSON utility and reproducible setup instructions.

Put your program in Git and understand HTTP + JSON.

Follow the modules and lessons below at your pace. Finish each exercise, save your evidence and self-assessment, then continue. Completed and Already known count as completed; Skipped is reported separately. You can move ahead at any time.

[Full pipeline](../PIPELINE.md) · [Next step: Backend and databases](backend.md)

## Developer workflow

<a id="engineering-shell"></a>

### Terminal and Linux

Understand processes, paths and environment configuration behind deployment commands.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Control flow and functions](python.md#python-control) Navigation is unrestricted.

#### Concepts

- [ ] **Paths and permissions:** Relative paths depend on the working directory; permissions control readable and executable files.
  - Example: Use an absolute dataset path when a script starts from a scheduler.
  - Videos:
    - [Missing Semester — shell and terminal introduction](https://www.youtube.com/watch?v=Z56Jmr9Z34Q) · MIT Missing Semester · University lecture
      - Explains: Commands, paths, shell composition and developer tooling.
      - Useful because: Understand commands rather than copying deployment instructions blindly.
      - Watch for: Focus on paths and permissions. Then reproduce the lesson example: Use an absolute dataset path when a script starts from a scheduler.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://missing.csail.mit.edu/2020/course-shell/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on paths and permissions. Then reproduce the lesson example: Use an absolute dataset path when a script starts from a scheduler.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Pipes and redirection:** Commands compose by passing output to input; redirection can overwrite files.
  - Example: Pipe a log stream to a filtering command, preserving the original log.
  - Videos:
    - [Missing Semester — shell and terminal introduction](https://www.youtube.com/watch?v=Z56Jmr9Z34Q) · MIT Missing Semester · University lecture
      - Explains: Commands, paths, shell composition and developer tooling.
      - Useful because: Understand commands rather than copying deployment instructions blindly.
      - Watch for: Focus on pipes and redirection. Then reproduce the lesson example: Pipe a log stream to a filtering command, preserving the original log.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://missing.csail.mit.edu/2020/course-shell/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on pipes and redirection. Then reproduce the lesson example: Pipe a log stream to a filtering command, preserving the original log.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Processes and environment:** Processes inherit environment variables; signals request shutdown.
  - Example: Set a local configuration variable and stop a worker gracefully.
  - Videos:
    - [Missing Semester — shell and terminal introduction](https://www.youtube.com/watch?v=Z56Jmr9Z34Q) · MIT Missing Semester · University lecture
      - Explains: Commands, paths, shell composition and developer tooling.
      - Useful because: Understand commands rather than copying deployment instructions blindly.
      - Watch for: Focus on processes and environment. Then reproduce the lesson example: Set a local configuration variable and stop a worker gracefully.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://missing.csail.mit.edu/2020/course-shell/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on processes and environment. Then reproduce the lesson example: Set a local configuration variable and stop a worker gracefully.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### YouTube: focused explanations and full courses

- [Missing Semester — shell and terminal introduction](https://www.youtube.com/watch?v=Z56Jmr9Z34Q) · MIT Missing Semester · University lecture
  - Explains: Commands, paths, shell composition and developer tooling.
  - Useful because: Understand commands rather than copying deployment instructions blindly.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://missing.csail.mit.edu/2020/course-shell/
- [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
  - Explains: Scalability, reliability, storage and architecture tradeoffs.
  - Useful because: Explain why a queue, index or cache is useful before adding one.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### Free written resources

1. [The Missing Semester: shell tools](https://missing.csail.mit.edu/2020/course-shell/) — Free; no registration required. No paid materials required.
2. [Missing Semester: shell tools and scripting](https://missing.csail.mit.edu/2020/shell-tools/) — Free; no registration required. No paid materials required.

#### Lab: Terminal and Linux

Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Terminal and Linux:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Terminal and Linux, explicitly apply Paths and permissions, Pipes and redirection, Processes and environment.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Terminal and Linux: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Terminal and Linux: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Terminal and Linux:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Terminal and Linux, explicitly apply Paths and permissions, Pipes and redirection, Processes and environment.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Terminal and Linux: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Terminal and Linux: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Terminal and Linux:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Terminal and Linux, explicitly apply Paths and permissions, Pipes and redirection, Processes and environment.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Terminal and Linux: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Terminal and Linux: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Terminal and Linux:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Terminal and Linux, explicitly apply Paths and permissions, Pipes and redirection, Processes and environment.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Terminal and Linux: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Terminal and Linux: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Terminal and Linux:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Terminal and Linux, explicitly apply Paths and permissions, Pipes and redirection, Processes and environment.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Terminal and Linux: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Terminal and Linux: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Terminal and Linux:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Terminal and Linux, explicitly apply Paths and permissions, Pipes and redirection, Processes and environment.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Terminal and Linux: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Terminal and Linux: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Terminal and Linux:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Terminal and Linux, explicitly apply Paths and permissions, Pipes and redirection, Processes and environment.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Terminal and Linux: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Terminal and Linux: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Terminal and Linux:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Terminal and Linux, explicitly apply Paths and permissions, Pipes and redirection, Processes and environment.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Terminal and Linux: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Terminal and Linux: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Terminal and Linux:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Terminal and Linux, explicitly apply Paths and permissions, Pipes and redirection, Processes and environment.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Terminal and Linux: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Terminal and Linux: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Terminal and Linux:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Terminal and Linux, explicitly apply Paths and permissions, Pipes and redirection, Processes and environment.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Terminal and Linux: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Terminal and Linux: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="engineering-git"></a>

### Git, branches and pull requests

Collaborate without losing experiments or merging unreviewed changes.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Terminal and Linux](engineering.md#engineering-shell) Navigation is unrestricted.

#### Concepts

- [ ] **Commits:** A commit is a snapshot with history; small coherent commits make review and rollback understandable.
  - Example: Commit preprocessing separately from a model experiment.
  - Videos:
    - [Git and GitHub for beginners — crash course](https://www.youtube.com/watch?v=RGOj5yH7evk) · freeCodeCamp · Tool course
      - Explains: Commits, branches, remotes and collaboration workflow.
      - Useful because: Follow along in a disposable repository before working with teammates.
      - Watch for: Focus on commits. Then reproduce the lesson example: Commit preprocessing separately from a model experiment.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/git-and-github-crash-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on commits. Then reproduce the lesson example: Commit preprocessing separately from a model experiment.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Branches and merges:** Branches isolate changes; merge conflicts require deciding which behavior is correct.
  - Example: Resolve two edits to the same configuration then rerun tests.
  - Videos:
    - [Git and GitHub for beginners — crash course](https://www.youtube.com/watch?v=RGOj5yH7evk) · freeCodeCamp · Tool course
      - Explains: Commits, branches, remotes and collaboration workflow.
      - Useful because: Follow along in a disposable repository before working with teammates.
      - Watch for: Focus on branches and merges. Then reproduce the lesson example: Resolve two edits to the same configuration then rerun tests.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/git-and-github-crash-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on branches and merges. Then reproduce the lesson example: Resolve two edits to the same configuration then rerun tests.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Pull requests:** Review explains the problem, change and validation; ignore environments, secrets and generated bulky data.
  - Example: Open a PR with a before/after example and test results.
  - Videos:
    - [Git and GitHub for beginners — crash course](https://www.youtube.com/watch?v=RGOj5yH7evk) · freeCodeCamp · Tool course
      - Explains: Commits, branches, remotes and collaboration workflow.
      - Useful because: Follow along in a disposable repository before working with teammates.
      - Watch for: Focus on pull requests. Then reproduce the lesson example: Open a PR with a before/after example and test results.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/git-and-github-crash-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on pull requests. Then reproduce the lesson example: Open a PR with a before/after example and test results.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### YouTube: focused explanations and full courses

- [Git and GitHub for beginners — crash course](https://www.youtube.com/watch?v=RGOj5yH7evk) · freeCodeCamp · Tool course
  - Explains: Commits, branches, remotes and collaboration workflow.
  - Useful because: Follow along in a disposable repository before working with teammates.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/git-and-github-crash-course/
- [Missing Semester — version control with Git](https://www.youtube.com/watch?v=2sjqTHE0zok) · MIT Missing Semester · University lecture
  - Explains: Git’s data model and the reasoning behind common commands.
  - Useful because: Useful when branching, merging or recovering a change feels mysterious.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://missing.csail.mit.edu/2020/version-control/
- [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
  - Explains: Scalability, reliability, storage and architecture tradeoffs.
  - Useful because: Explain why a queue, index or cache is useful before adding one.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### Free written resources

1. [Pro Git: basic branching and merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) — Free; no registration required. No paid materials required.
2. [Pro Git: recording changes](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository) — Free; no registration required. No paid materials required.

#### Lab: Git, branches and pull requests

Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Git, branches and pull requests:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Git, branches and pull requests, explicitly apply Commits, Branches and merges, Pull requests.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Git, branches and pull requests: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Git, branches and pull requests: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Git, branches and pull requests:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Git, branches and pull requests, explicitly apply Commits, Branches and merges, Pull requests.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Git, branches and pull requests: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Git, branches and pull requests: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Git, branches and pull requests:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Git, branches and pull requests, explicitly apply Commits, Branches and merges, Pull requests.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Git, branches and pull requests: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Git, branches and pull requests: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Git, branches and pull requests:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Git, branches and pull requests, explicitly apply Commits, Branches and merges, Pull requests.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Git, branches and pull requests: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Git, branches and pull requests: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Git, branches and pull requests:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Git, branches and pull requests, explicitly apply Commits, Branches and merges, Pull requests.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Git, branches and pull requests: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Git, branches and pull requests: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Git, branches and pull requests:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Git, branches and pull requests, explicitly apply Commits, Branches and merges, Pull requests.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Git, branches and pull requests: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Git, branches and pull requests: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Git, branches and pull requests:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Git, branches and pull requests, explicitly apply Commits, Branches and merges, Pull requests.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Git, branches and pull requests: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Git, branches and pull requests: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Git, branches and pull requests:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Git, branches and pull requests, explicitly apply Commits, Branches and merges, Pull requests.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Git, branches and pull requests: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Git, branches and pull requests: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Git, branches and pull requests:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Git, branches and pull requests, explicitly apply Commits, Branches and merges, Pull requests.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Git, branches and pull requests: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Git, branches and pull requests: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Git, branches and pull requests:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Git, branches and pull requests, explicitly apply Commits, Branches and merges, Pull requests.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Git, branches and pull requests: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Git, branches and pull requests: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Contracts and quality

<a id="engineering-http"></a>

### HTTP, APIs and JSON contracts

Model services communicate through explicit request and response contracts.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Git, branches and pull requests](engineering.md#engineering-git) Navigation is unrestricted.

#### Concepts

- [ ] **Methods and status codes:** GET reads, POST submits work and meaningful status codes communicate success or failure.
  - Example: Return 422 for invalid input rather than a success response containing an error.
  - Videos:
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on methods and status codes. Then reproduce the lesson example: Return 422 for invalid input rather than a success response containing an error.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on methods and status codes. Then reproduce the lesson example: Return 422 for invalid input rather than a success response containing an error.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Headers and serialization:** Content types and JSON shapes let clients interpret responses.
  - Example: Declare application/json and return a documented prediction object.
  - Videos:
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on headers and serialization. Then reproduce the lesson example: Declare application/json and return a documented prediction object.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on headers and serialization. Then reproduce the lesson example: Declare application/json and return a documented prediction object.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Client resilience:** Network calls need timeouts and careful retries; retries can duplicate side effects.
  - Example: Retry a safe read but use an idempotency key before repeating a write.
  - Videos:
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on client resilience. Then reproduce the lesson example: Retry a safe read but use an idempotency key before repeating a write.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on client resilience. Then reproduce the lesson example: Retry a safe read but use an idempotency key before repeating a write.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### YouTube: focused explanations and full courses

- [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
  - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
  - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
  - Explains: Scalability, reliability, storage and architecture tradeoffs.
  - Useful because: Explain why a queue, index or cache is useful before adding one.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### Free written resources

1. [MDN: overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview) — Free; no registration required. No paid materials required.
2. [MDN: HTTP response codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status) — Free; no registration required. No paid materials required.

#### Lab: HTTP, APIs and JSON contracts

Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **HTTP, APIs and JSON contracts:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For HTTP, APIs and JSON contracts, explicitly apply Methods and status codes, Headers and serialization, Client resilience.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] HTTP, APIs and JSON contracts: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] HTTP, APIs and JSON contracts: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **HTTP, APIs and JSON contracts:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For HTTP, APIs and JSON contracts, explicitly apply Methods and status codes, Headers and serialization, Client resilience.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] HTTP, APIs and JSON contracts: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] HTTP, APIs and JSON contracts: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **HTTP, APIs and JSON contracts:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For HTTP, APIs and JSON contracts, explicitly apply Methods and status codes, Headers and serialization, Client resilience.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] HTTP, APIs and JSON contracts: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] HTTP, APIs and JSON contracts: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **HTTP, APIs and JSON contracts:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For HTTP, APIs and JSON contracts, explicitly apply Methods and status codes, Headers and serialization, Client resilience.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] HTTP, APIs and JSON contracts: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] HTTP, APIs and JSON contracts: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **HTTP, APIs and JSON contracts:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For HTTP, APIs and JSON contracts, explicitly apply Methods and status codes, Headers and serialization, Client resilience.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] HTTP, APIs and JSON contracts: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] HTTP, APIs and JSON contracts: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **HTTP, APIs and JSON contracts:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For HTTP, APIs and JSON contracts, explicitly apply Methods and status codes, Headers and serialization, Client resilience.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] HTTP, APIs and JSON contracts: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] HTTP, APIs and JSON contracts: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **HTTP, APIs and JSON contracts:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For HTTP, APIs and JSON contracts, explicitly apply Methods and status codes, Headers and serialization, Client resilience.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] HTTP, APIs and JSON contracts: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] HTTP, APIs and JSON contracts: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **HTTP, APIs and JSON contracts:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For HTTP, APIs and JSON contracts, explicitly apply Methods and status codes, Headers and serialization, Client resilience.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] HTTP, APIs and JSON contracts: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] HTTP, APIs and JSON contracts: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **HTTP, APIs and JSON contracts:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For HTTP, APIs and JSON contracts, explicitly apply Methods and status codes, Headers and serialization, Client resilience.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] HTTP, APIs and JSON contracts: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] HTTP, APIs and JSON contracts: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **HTTP, APIs and JSON contracts:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For HTTP, APIs and JSON contracts, explicitly apply Methods and status codes, Headers and serialization, Client resilience.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] HTTP, APIs and JSON contracts: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] HTTP, APIs and JSON contracts: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="engineering-design"></a>

### Complexity, code structure and testing

Keep implementation simple while knowing which operations become slow or fragile.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [HTTP, APIs and JSON contracts](engineering.md#engineering-http) Navigation is unrestricted.

#### Concepts

- [ ] **Complexity:** Big O describes how resource use grows with input size, not exact wall-clock time.
  - Example: A set lookup avoids repeatedly scanning a list of document IDs.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on complexity. Then reproduce the lesson example: A set lookup avoids repeatedly scanning a list of document IDs.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Structure:** Separate input validation, transformation and side effects when their responsibilities differ.
  - Example: Test preprocessing without requiring a network connection.
  - Videos:
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on structure. Then reproduce the lesson example: Test preprocessing without requiring a network connection.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Testing layers:** Unit tests check isolated behavior, integration tests check boundaries, and end-to-end tests check user outcomes.
  - Example: Test a parser, then file ingestion, then upload-to-search behavior.
  - Videos:
    - [CS50P 5 — Unit tests](https://www.youtube.com/watch?v=tIrcxwLqzjQ) · Harvard CS50 · David Malan · University lecture
      - Explains: Assertions, pytest, test organization and testing return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on testing layers. Then reproduce the lesson example: Test a parser, then file ingestion, then upload-to-search behavior.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/5/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on testing layers. Then reproduce the lesson example: Test a parser, then file ingestion, then upload-to-search behavior.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### YouTube: focused explanations and full courses

- [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
  - Explains: Scalability, reliability, storage and architecture tradeoffs.
  - Useful because: Explain why a queue, index or cache is useful before adding one.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [CS50P 5 — Unit tests](https://www.youtube.com/watch?v=tIrcxwLqzjQ) · Harvard CS50 · David Malan · University lecture
  - Explains: Assertions, pytest, test organization and testing return values.
  - Useful because: A structured explanation with live coding; pause and reproduce the examples.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/2022/weeks/5/

#### Free written resources

1. [Python: data structures](https://docs.python.org/3/tutorial/datastructures.html) — Free; no registration required. No paid materials required.
2. [pytest: getting started](https://docs.pytest.org/en/stable/getting-started.html) — Free; no registration required. No paid materials required.

#### Lab: Complexity, code structure and testing

Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Complexity, code structure and testing:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Complexity, code structure and testing, explicitly apply Complexity, Structure, Testing layers.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Complexity, code structure and testing: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Complexity, code structure and testing: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Complexity, code structure and testing:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Complexity, code structure and testing, explicitly apply Complexity, Structure, Testing layers.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Complexity, code structure and testing: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Complexity, code structure and testing: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Complexity, code structure and testing:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Complexity, code structure and testing, explicitly apply Complexity, Structure, Testing layers.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Complexity, code structure and testing: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Complexity, code structure and testing: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Complexity, code structure and testing:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Complexity, code structure and testing, explicitly apply Complexity, Structure, Testing layers.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Complexity, code structure and testing: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Complexity, code structure and testing: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Complexity, code structure and testing:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Complexity, code structure and testing, explicitly apply Complexity, Structure, Testing layers.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Complexity, code structure and testing: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Complexity, code structure and testing: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Complexity, code structure and testing:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Complexity, code structure and testing, explicitly apply Complexity, Structure, Testing layers.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Complexity, code structure and testing: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Complexity, code structure and testing: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Complexity, code structure and testing:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Complexity, code structure and testing, explicitly apply Complexity, Structure, Testing layers.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Complexity, code structure and testing: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Complexity, code structure and testing: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Complexity, code structure and testing:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Complexity, code structure and testing, explicitly apply Complexity, Structure, Testing layers.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Complexity, code structure and testing: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Complexity, code structure and testing: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Complexity, code structure and testing:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Complexity, code structure and testing, explicitly apply Complexity, Structure, Testing layers.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Complexity, code structure and testing: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Complexity, code structure and testing: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Complexity, code structure and testing:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Complexity, code structure and testing, explicitly apply Complexity, Structure, Testing layers.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Complexity, code structure and testing: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Complexity, code structure and testing: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Maintainable service engineering

<a id="engineering-api-contracts"></a>

### HTTP contracts, pagination and idempotency

Design predictable service calls so retries and changing datasets do not create inconsistent application behaviour.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [HTTP, APIs and JSON contracts](engineering.md#engineering-http) Navigation is unrestricted.

#### Concepts

- [ ] **Safe and idempotent semantics:** Safe methods are intended to retrieve without state changes; idempotent methods have the same intended effect when repeated.
  - Example: Explain why repeating a GET should not create a new project and why a POST needs a separate deduplication contract.
  - Videos:
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on safe and idempotent semantics. Then reproduce the lesson example: Explain why repeating a GET should not create a new project and why a POST needs a separate deduplication contract.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on safe and idempotent semantics. Then reproduce the lesson example: Explain why repeating a GET should not create a new project and why a POST needs a separate deduplication contract.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Client versus server failures:** Status codes describe classes of outcomes and should accompany a machine-readable error contract.
  - Example: Return a validation error for an invalid page size rather than treating it as an internal server failure.
  - Videos:
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on client versus server failures. Then reproduce the lesson example: Return a validation error for an invalid page size rather than treating it as an internal server failure.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on client versus server failures. Then reproduce the lesson example: Return a validation error for an invalid page size rather than treating it as an internal server failure.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Pagination stability:** Offset and cursor pagination have different behaviour as records change; a cursor needs an ordering contract.
  - Example: Page a sorted list using a stable ID cursor and demonstrate how insertion affects offset pages.
  - Videos:
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on pagination stability. Then reproduce the lesson example: Page a sorted list using a stable ID cursor and demonstrate how insertion affects offset pages.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on pagination stability. Then reproduce the lesson example: Page a sorted list using a stable ID cursor and demonstrate how insertion affects offset pages.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Idempotency keys:** A key associates repeated create attempts with one logical request; the server must check conflicting reuse and save the result coherently.
  - Example: Replay a create request with one key and assert one record exists.
  - Videos:
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on idempotency keys. Then reproduce the lesson example: Replay a create request with one key and assert one record exists.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on idempotency keys. Then reproduce the lesson example: Replay a create request with one key and assert one record exists.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Contract compatibility:** Adding optional fields is often easier to evolve than changing field meaning or removing a required response property.
  - Example: Test an old client fixture against a response with one additional optional field.
  - Videos:
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on contract compatibility. Then reproduce the lesson example: Test an old client fixture against a response with one additional optional field.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on contract compatibility. Then reproduce the lesson example: Test an old client fixture against a response with one additional optional field.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### YouTube: focused explanations and full courses

- [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
  - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
  - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
  - Explains: Scalability, reliability, storage and architecture tradeoffs.
  - Useful because: Explain why a queue, index or cache is useful before adding one.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### Free written resources

1. [MDN: HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods) — Free; no registration required. No paid materials required.
2. [MDN: HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status) — Free; no registration required. No paid materials required.

#### Lab: HTTP contracts, pagination and idempotency

Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **HTTP contracts, pagination and idempotency:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For HTTP contracts, pagination and idempotency, explicitly apply Safe and idempotent semantics, Client versus server failures, Pagination stability.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] HTTP contracts, pagination and idempotency: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] HTTP contracts, pagination and idempotency: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **HTTP contracts, pagination and idempotency:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For HTTP contracts, pagination and idempotency, explicitly apply Safe and idempotent semantics, Client versus server failures, Pagination stability.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] HTTP contracts, pagination and idempotency: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] HTTP contracts, pagination and idempotency: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **HTTP contracts, pagination and idempotency:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For HTTP contracts, pagination and idempotency, explicitly apply Safe and idempotent semantics, Client versus server failures, Pagination stability.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] HTTP contracts, pagination and idempotency: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] HTTP contracts, pagination and idempotency: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **HTTP contracts, pagination and idempotency:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For HTTP contracts, pagination and idempotency, explicitly apply Safe and idempotent semantics, Client versus server failures, Pagination stability.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] HTTP contracts, pagination and idempotency: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] HTTP contracts, pagination and idempotency: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **HTTP contracts, pagination and idempotency:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For HTTP contracts, pagination and idempotency, explicitly apply Safe and idempotent semantics, Client versus server failures, Pagination stability.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] HTTP contracts, pagination and idempotency: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] HTTP contracts, pagination and idempotency: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **HTTP contracts, pagination and idempotency:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For HTTP contracts, pagination and idempotency, explicitly apply Safe and idempotent semantics, Client versus server failures, Pagination stability.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] HTTP contracts, pagination and idempotency: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] HTTP contracts, pagination and idempotency: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **HTTP contracts, pagination and idempotency:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For HTTP contracts, pagination and idempotency, explicitly apply Safe and idempotent semantics, Client versus server failures, Pagination stability.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] HTTP contracts, pagination and idempotency: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] HTTP contracts, pagination and idempotency: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **HTTP contracts, pagination and idempotency:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For HTTP contracts, pagination and idempotency, explicitly apply Safe and idempotent semantics, Client versus server failures, Pagination stability.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] HTTP contracts, pagination and idempotency: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] HTTP contracts, pagination and idempotency: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **HTTP contracts, pagination and idempotency:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For HTTP contracts, pagination and idempotency, explicitly apply Safe and idempotent semantics, Client versus server failures, Pagination stability.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] HTTP contracts, pagination and idempotency: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] HTTP contracts, pagination and idempotency: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **HTTP contracts, pagination and idempotency:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For HTTP contracts, pagination and idempotency, explicitly apply Safe and idempotent semantics, Client versus server failures, Pagination stability.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] HTTP contracts, pagination and idempotency: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] HTTP contracts, pagination and idempotency: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="engineering-testing-layers"></a>

### Unit, integration and contract tests

Choose tests that catch boundary failures while keeping the feedback loop small and reliable.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [Complexity, code structure and testing](engineering.md#engineering-design) Navigation is unrestricted.

#### Concepts

- [ ] **Unit boundaries:** A unit test checks a small deterministic rule and avoids depending on live infrastructure.
  - Example: Test a token-budget calculation with explicit fixtures instead of invoking a language model.
  - Videos:
    - [CS50P 5 — Unit tests](https://www.youtube.com/watch?v=tIrcxwLqzjQ) · Harvard CS50 · David Malan · University lecture
      - Explains: Assertions, pytest, test organization and testing return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on unit boundaries. Then reproduce the lesson example: Test a token-budget calculation with explicit fixtures instead of invoking a language model.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/5/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on unit boundaries. Then reproduce the lesson example: Test a token-budget calculation with explicit fixtures instead of invoking a language model.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Integration boundaries:** An integration test exercises real collaboration between components and can catch wiring or serialisation problems.
  - Example: Send a request through a local API into a temporary SQLite database and verify the saved record.
  - Videos:
    - [CS50P 5 — Unit tests](https://www.youtube.com/watch?v=tIrcxwLqzjQ) · Harvard CS50 · David Malan · University lecture
      - Explains: Assertions, pytest, test organization and testing return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on integration boundaries. Then reproduce the lesson example: Send a request through a local API into a temporary SQLite database and verify the saved record.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/5/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on integration boundaries. Then reproduce the lesson example: Send a request through a local API into a temporary SQLite database and verify the saved record.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Contract fixtures:** A contract test protects assumptions about an interface independently of model-quality evaluation.
  - Example: Validate recorded model responses against the same schema used in production.
  - Videos:
    - [CS50P 5 — Unit tests](https://www.youtube.com/watch?v=tIrcxwLqzjQ) · Harvard CS50 · David Malan · University lecture
      - Explains: Assertions, pytest, test organization and testing return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on contract fixtures. Then reproduce the lesson example: Validate recorded model responses against the same schema used in production.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/5/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on contract fixtures. Then reproduce the lesson example: Validate recorded model responses against the same schema used in production.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Fixture isolation:** Each test must receive controlled state so previous tests do not change its outcome.
  - Example: Give each database test a fresh temporary directory and verify it does not read a developer database.
  - Videos:
    - [CS50P 5 — Unit tests](https://www.youtube.com/watch?v=tIrcxwLqzjQ) · Harvard CS50 · David Malan · University lecture
      - Explains: Assertions, pytest, test organization and testing return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on fixture isolation. Then reproduce the lesson example: Give each database test a fresh temporary directory and verify it does not read a developer database.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/5/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on fixture isolation. Then reproduce the lesson example: Give each database test a fresh temporary directory and verify it does not read a developer database.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Failure-path assertions:** A useful check verifies the intended error and state after failure, not only that some exception occurred.
  - Example: Assert a timed-out create attempt leaves no half-written project and returns the documented error.
  - Videos:
    - [CS50P 5 — Unit tests](https://www.youtube.com/watch?v=tIrcxwLqzjQ) · Harvard CS50 · David Malan · University lecture
      - Explains: Assertions, pytest, test organization and testing return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on failure-path assertions. Then reproduce the lesson example: Assert a timed-out create attempt leaves no half-written project and returns the documented error.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/5/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on failure-path assertions. Then reproduce the lesson example: Assert a timed-out create attempt leaves no half-written project and returns the documented error.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### YouTube: focused explanations and full courses

- [CS50P 5 — Unit tests](https://www.youtube.com/watch?v=tIrcxwLqzjQ) · Harvard CS50 · David Malan · University lecture
  - Explains: Assertions, pytest, test organization and testing return values.
  - Useful because: A structured explanation with live coding; pause and reproduce the examples.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/2022/weeks/5/
- [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
  - Explains: AI coding agents and the engineering skills needed to direct and verify them.
  - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
  - Explains: Scalability, reliability, storage and architecture tradeoffs.
  - Useful because: Explain why a queue, index or cache is useful before adding one.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### Free written resources

1. [pytest: fixtures](https://docs.pytest.org/en/stable/how-to/fixtures.html) — Free; no registration required. No paid materials required.
2. [Python: unittest.mock](https://docs.python.org/3/library/unittest.mock.html) — Free; no registration required. No paid materials required.

#### Lab: Unit, integration and contract tests

Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Unit, integration and contract tests:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Unit, integration and contract tests, explicitly apply Unit boundaries, Integration boundaries, Contract fixtures.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Unit, integration and contract tests: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Unit, integration and contract tests: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Unit, integration and contract tests:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Unit, integration and contract tests, explicitly apply Unit boundaries, Integration boundaries, Contract fixtures.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Unit, integration and contract tests: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Unit, integration and contract tests: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Unit, integration and contract tests:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Unit, integration and contract tests, explicitly apply Unit boundaries, Integration boundaries, Contract fixtures.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Unit, integration and contract tests: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Unit, integration and contract tests: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Unit, integration and contract tests:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Unit, integration and contract tests, explicitly apply Unit boundaries, Integration boundaries, Contract fixtures.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Unit, integration and contract tests: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Unit, integration and contract tests: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Unit, integration and contract tests:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Unit, integration and contract tests, explicitly apply Unit boundaries, Integration boundaries, Contract fixtures.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Unit, integration and contract tests: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Unit, integration and contract tests: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Unit, integration and contract tests:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Unit, integration and contract tests, explicitly apply Unit boundaries, Integration boundaries, Contract fixtures.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Unit, integration and contract tests: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Unit, integration and contract tests: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Unit, integration and contract tests:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Unit, integration and contract tests, explicitly apply Unit boundaries, Integration boundaries, Contract fixtures.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Unit, integration and contract tests: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Unit, integration and contract tests: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Unit, integration and contract tests:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Unit, integration and contract tests, explicitly apply Unit boundaries, Integration boundaries, Contract fixtures.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Unit, integration and contract tests: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Unit, integration and contract tests: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Unit, integration and contract tests:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Unit, integration and contract tests, explicitly apply Unit boundaries, Integration boundaries, Contract fixtures.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Unit, integration and contract tests: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Unit, integration and contract tests: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Unit, integration and contract tests:** Version the pipeline, document its HTTP/data contracts and keep changes reviewable.  For Unit, integration and contract tests, explicitly apply Unit boundaries, Integration boundaries, Contract fixtures.
  - Deliverable: A Git workflow, contract example and integration test
  - Check: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Unit, integration and contract tests: A Git workflow, contract example and integration test
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Unit, integration and contract tests: Add an integration check and a reproducible clean-start command. Adapt the lesson lab: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

