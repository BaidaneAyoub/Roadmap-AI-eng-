# Engineering foundations

Use the tools and contracts that make a team project maintainable.

## Main route · Step 2 of 13

**Goal:** Turn scripts into a maintainable, tested team repository.

**Stage checkpoint:** Open a pull request with a tested HTTP/JSON utility and reproducible setup instructions.

Use Git, HTTP contracts and layered tests to deliver reviewable software.

Follow the modules and lessons below at your pace. Finish each exercise, save your evidence and self-assessment, then continue. Completed and Already known count as completed; Skipped is reported separately. You can move ahead at any time.

[Full pipeline](../PIPELINE.md) · [Next step: Mathematics and data](math-data.md)

## Developer workflow

<a id="engineering-shell"></a>

### Terminal and Linux

Understand processes, paths and environment configuration behind deployment commands.

**Priority:** Foundation · **Study:** 2h · **Practice:** 3h

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

### Reproducible environment trial

A teammate needs reliable setup from a clean checkout.

**Data:** Use a tiny Python package and a local wheel/cache when available. Use a fixed seed and keep evaluation cases separate.

**Output:** A locked dependency workflow and clean-environment setup guide.

**Effort:** 10h · Beginner → intermediate

- **Terminal and Linux:** Implement Terminal and Linux in Reproducible environment trial. Adapt this focused lab to the project data: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.  Required concepts: Paths and permissions, Pipes and redirection, Processes and environment.
  - Deliverable: Terminal and Linux: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A locked dependency workflow and clean-environment setup guide. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Terminal and Linux: Terminal and Linux: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Install into a fresh virtual environment and run the smoke test.
- [ ] Terminal and Linux: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workspace health inspector

A teammate needs to diagnose missing tools before setup.

**Data:** Prepare a temporary project with missing files and a fake executable check. Use a fixed seed and keep evaluation cases separate.

**Output:** A read-only shell inspector and machine-readable health report.

**Effort:** 10h · Beginner → intermediate

- **Terminal and Linux:** Implement Terminal and Linux in Workspace health inspector. Adapt this focused lab to the project data: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.  Required concepts: Paths and permissions, Pipes and redirection, Processes and environment.
  - Deliverable: Terminal and Linux: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A read-only shell inspector and machine-readable health report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Terminal and Linux: Terminal and Linux: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report each missing requirement and return a failing exit code without editing files.
- [ ] Terminal and Linux: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Search complexity workbench

A developer needs to choose a lookup strategy for growing catalogs.

**Data:** Generate sorted ID lists at four sizes with fixed lookup queries. Use a fixed seed and keep evaluation cases separate.

**Output:** A benchmark comparing linear scan, binary search and hash lookup.

**Effort:** 10h · Beginner → intermediate

- **Terminal and Linux:** Extend the project with Terminal and Linux in Search complexity workbench. Adapt this focused lab to the project data: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.  Required concepts: Paths and permissions, Pipes and redirection, Processes and environment.
  - Deliverable: Terminal and Linux: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A benchmark comparing linear scan, binary search and hash lookup. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Terminal and Linux: Terminal and Linux: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Check equal results and plot operation counts separately from noisy wall time.
- [ ] Terminal and Linux: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### API change compatibility gate

An API owner needs to detect breaking schema changes before release.

**Data:** Author two OpenAPI examples with removed fields and changed types. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema comparison CLI and compatibility report.

**Effort:** 10h · Beginner → intermediate

- **Terminal and Linux:** Extend the project with Terminal and Linux in API change compatibility gate. Adapt this focused lab to the project data: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.  Required concepts: Paths and permissions, Pipes and redirection, Processes and environment.
  - Deliverable: Terminal and Linux: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema comparison CLI and compatibility report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Terminal and Linux: Terminal and Linux: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect each seeded breaking change while allowing a new optional field.
- [ ] Terminal and Linux: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Release conflict rehearsal

A small team needs a safe process for reviewing conflicting changes.

**Data:** Create a disposable local repository with two feature branches. Use a fixed seed and keep evaluation cases separate.

**Output:** A documented conflict resolution, PR checklist and release tag.

**Effort:** 10h · Beginner → intermediate

- **Terminal and Linux:** Extend the project with Terminal and Linux in Release conflict rehearsal. Adapt this focused lab to the project data: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.  Required concepts: Paths and permissions, Pipes and redirection, Processes and environment.
  - Deliverable: Terminal and Linux: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A documented conflict resolution, PR checklist and release tag. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Terminal and Linux: Terminal and Linux: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reconstruct the release from its tag and explain each conflict decision.
- [ ] Terminal and Linux: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### HTTP contract playground

An API learner needs to see status codes and caching behavior.

**Data:** Use a local HTTP stub with ten requests and fixed responses. Use a fixed seed and keep evaluation cases separate.

**Output:** A request collection demonstrating headers, errors and conditional reads.

**Effort:** 10h · Beginner → intermediate

- **Terminal and Linux:** Extend the project with Terminal and Linux in HTTP contract playground. Adapt this focused lab to the project data: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.  Required concepts: Paths and permissions, Pipes and redirection, Processes and environment.
  - Deliverable: Terminal and Linux: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A request collection demonstrating headers, errors and conditional reads. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Terminal and Linux: Terminal and Linux: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify 200, 304, 400 and 404 cases against documented contracts.
- [ ] Terminal and Linux: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Repeatable batch import

An operations teammate needs to rerun interrupted imports safely.

**Data:** Generate 100 records with stable IDs and repeated batches. Use a fixed seed and keep evaluation cases separate.

**Output:** A resumable importer with an explicit input/output contract.

**Effort:** 10h · Beginner → intermediate

- **Terminal and Linux:** Extend the project with Terminal and Linux in Repeatable batch import. Adapt this focused lab to the project data: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.  Required concepts: Paths and permissions, Pipes and redirection, Processes and environment.
  - Deliverable: Terminal and Linux: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A resumable importer with an explicit input/output contract. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Terminal and Linux: Terminal and Linux: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Run the same batch twice and prove counts and totals do not change.
- [ ] Terminal and Linux: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Refactor a tangled importer

A maintainer needs isolated parsing, validation and storage responsibilities.

**Data:** Create a small deliberately coupled CSV importer with six failing fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A refactored package with explicit boundaries and unchanged output contracts.

**Effort:** 10h · Beginner → intermediate

- **Terminal and Linux:** Extend the project with Terminal and Linux in Refactor a tangled importer. Adapt this focused lab to the project data: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.  Required concepts: Paths and permissions, Pipes and redirection, Processes and environment.
  - Deliverable: Terminal and Linux: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A refactored package with explicit boundaries and unchanged output contracts. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Terminal and Linux: Terminal and Linux: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Run identical golden inputs before and after refactoring.
- [ ] Terminal and Linux: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reviewable feature delivery

A contributor needs to ship a change another teammate can audit.

**Data:** Use a tiny notes app and three requested behavior changes. Use a fixed seed and keep evaluation cases separate.

**Output:** A sequence of small commits with tests and a review brief.

**Effort:** 10h · Beginner → intermediate

- **Terminal and Linux:** Extend the project with Terminal and Linux in Reviewable feature delivery. Adapt this focused lab to the project data: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.  Required concepts: Paths and permissions, Pipes and redirection, Processes and environment.
  - Deliverable: Terminal and Linux: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A sequence of small commits with tests and a review brief. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Terminal and Linux: Terminal and Linux: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] A reviewer can trace each requirement to code, a test and a commit.
- [ ] Terminal and Linux: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Checkout service testing lab

A developer needs to distinguish unit, integration and contract failures.

**Data:** Use fictional baskets, a local SQLite store and a stub payment adapter. Use a fixed seed and keep evaluation cases separate.

**Output:** A small checkout simulator with separated test layers.

**Effort:** 10h · Beginner → intermediate

- **Terminal and Linux:** Extend the project with Terminal and Linux in Checkout service testing lab. Adapt this focused lab to the project data: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.  Required concepts: Paths and permissions, Pipes and redirection, Processes and environment.
  - Deliverable: Terminal and Linux: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A small checkout simulator with separated test layers. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Terminal and Linux: Terminal and Linux: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] A failing adapter contract must fail integration without corrupting the store.
- [ ] Terminal and Linux: Create a shell runbook that locates data, filters logs and starts/stops a small Python process; include Windows PowerShell equivalents.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="engineering-git"></a>

### Git, branches and pull requests

Collaborate without losing experiments or merging unreviewed changes.

**Priority:** Foundation · **Study:** 2h · **Practice:** 3h

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

### Release conflict rehearsal

A small team needs a safe process for reviewing conflicting changes.

**Data:** Create a disposable local repository with two feature branches. Use a fixed seed and keep evaluation cases separate.

**Output:** A documented conflict resolution, PR checklist and release tag.

**Effort:** 10h · Beginner → intermediate

- **Git, branches and pull requests:** Implement Git, branches and pull requests in Release conflict rehearsal. Adapt this focused lab to the project data: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.  Required concepts: Commits, Branches and merges, Pull requests.
  - Deliverable: Git, branches and pull requests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A documented conflict resolution, PR checklist and release tag. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Git, branches and pull requests: Git, branches and pull requests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reconstruct the release from its tag and explain each conflict decision.
- [ ] Git, branches and pull requests: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reviewable feature delivery

A contributor needs to ship a change another teammate can audit.

**Data:** Use a tiny notes app and three requested behavior changes. Use a fixed seed and keep evaluation cases separate.

**Output:** A sequence of small commits with tests and a review brief.

**Effort:** 10h · Beginner → intermediate

- **Git, branches and pull requests:** Implement Git, branches and pull requests in Reviewable feature delivery. Adapt this focused lab to the project data: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.  Required concepts: Commits, Branches and merges, Pull requests.
  - Deliverable: Git, branches and pull requests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A sequence of small commits with tests and a review brief. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Git, branches and pull requests: Git, branches and pull requests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] A reviewer can trace each requirement to code, a test and a commit.
- [ ] Git, branches and pull requests: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Search complexity workbench

A developer needs to choose a lookup strategy for growing catalogs.

**Data:** Generate sorted ID lists at four sizes with fixed lookup queries. Use a fixed seed and keep evaluation cases separate.

**Output:** A benchmark comparing linear scan, binary search and hash lookup.

**Effort:** 10h · Beginner → intermediate

- **Git, branches and pull requests:** Extend the project with Git, branches and pull requests in Search complexity workbench. Adapt this focused lab to the project data: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.  Required concepts: Commits, Branches and merges, Pull requests.
  - Deliverable: Git, branches and pull requests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A benchmark comparing linear scan, binary search and hash lookup. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Git, branches and pull requests: Git, branches and pull requests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Check equal results and plot operation counts separately from noisy wall time.
- [ ] Git, branches and pull requests: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### API change compatibility gate

An API owner needs to detect breaking schema changes before release.

**Data:** Author two OpenAPI examples with removed fields and changed types. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema comparison CLI and compatibility report.

**Effort:** 10h · Beginner → intermediate

- **Git, branches and pull requests:** Extend the project with Git, branches and pull requests in API change compatibility gate. Adapt this focused lab to the project data: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.  Required concepts: Commits, Branches and merges, Pull requests.
  - Deliverable: Git, branches and pull requests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema comparison CLI and compatibility report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Git, branches and pull requests: Git, branches and pull requests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect each seeded breaking change while allowing a new optional field.
- [ ] Git, branches and pull requests: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible environment trial

A teammate needs reliable setup from a clean checkout.

**Data:** Use a tiny Python package and a local wheel/cache when available. Use a fixed seed and keep evaluation cases separate.

**Output:** A locked dependency workflow and clean-environment setup guide.

**Effort:** 10h · Beginner → intermediate

- **Git, branches and pull requests:** Extend the project with Git, branches and pull requests in Reproducible environment trial. Adapt this focused lab to the project data: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.  Required concepts: Commits, Branches and merges, Pull requests.
  - Deliverable: Git, branches and pull requests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A locked dependency workflow and clean-environment setup guide. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Git, branches and pull requests: Git, branches and pull requests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Install into a fresh virtual environment and run the smoke test.
- [ ] Git, branches and pull requests: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### HTTP contract playground

An API learner needs to see status codes and caching behavior.

**Data:** Use a local HTTP stub with ten requests and fixed responses. Use a fixed seed and keep evaluation cases separate.

**Output:** A request collection demonstrating headers, errors and conditional reads.

**Effort:** 10h · Beginner → intermediate

- **Git, branches and pull requests:** Extend the project with Git, branches and pull requests in HTTP contract playground. Adapt this focused lab to the project data: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.  Required concepts: Commits, Branches and merges, Pull requests.
  - Deliverable: Git, branches and pull requests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A request collection demonstrating headers, errors and conditional reads. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Git, branches and pull requests: Git, branches and pull requests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify 200, 304, 400 and 404 cases against documented contracts.
- [ ] Git, branches and pull requests: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Repeatable batch import

An operations teammate needs to rerun interrupted imports safely.

**Data:** Generate 100 records with stable IDs and repeated batches. Use a fixed seed and keep evaluation cases separate.

**Output:** A resumable importer with an explicit input/output contract.

**Effort:** 10h · Beginner → intermediate

- **Git, branches and pull requests:** Extend the project with Git, branches and pull requests in Repeatable batch import. Adapt this focused lab to the project data: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.  Required concepts: Commits, Branches and merges, Pull requests.
  - Deliverable: Git, branches and pull requests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A resumable importer with an explicit input/output contract. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Git, branches and pull requests: Git, branches and pull requests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Run the same batch twice and prove counts and totals do not change.
- [ ] Git, branches and pull requests: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Refactor a tangled importer

A maintainer needs isolated parsing, validation and storage responsibilities.

**Data:** Create a small deliberately coupled CSV importer with six failing fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A refactored package with explicit boundaries and unchanged output contracts.

**Effort:** 10h · Beginner → intermediate

- **Git, branches and pull requests:** Extend the project with Git, branches and pull requests in Refactor a tangled importer. Adapt this focused lab to the project data: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.  Required concepts: Commits, Branches and merges, Pull requests.
  - Deliverable: Git, branches and pull requests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A refactored package with explicit boundaries and unchanged output contracts. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Git, branches and pull requests: Git, branches and pull requests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Run identical golden inputs before and after refactoring.
- [ ] Git, branches and pull requests: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workspace health inspector

A teammate needs to diagnose missing tools before setup.

**Data:** Prepare a temporary project with missing files and a fake executable check. Use a fixed seed and keep evaluation cases separate.

**Output:** A read-only shell inspector and machine-readable health report.

**Effort:** 10h · Beginner → intermediate

- **Git, branches and pull requests:** Extend the project with Git, branches and pull requests in Workspace health inspector. Adapt this focused lab to the project data: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.  Required concepts: Commits, Branches and merges, Pull requests.
  - Deliverable: Git, branches and pull requests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A read-only shell inspector and machine-readable health report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Git, branches and pull requests: Git, branches and pull requests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report each missing requirement and return a failing exit code without editing files.
- [ ] Git, branches and pull requests: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Checkout service testing lab

A developer needs to distinguish unit, integration and contract failures.

**Data:** Use fictional baskets, a local SQLite store and a stub payment adapter. Use a fixed seed and keep evaluation cases separate.

**Output:** A small checkout simulator with separated test layers.

**Effort:** 10h · Beginner → intermediate

- **Git, branches and pull requests:** Extend the project with Git, branches and pull requests in Checkout service testing lab. Adapt this focused lab to the project data: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.  Required concepts: Commits, Branches and merges, Pull requests.
  - Deliverable: Git, branches and pull requests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A small checkout simulator with separated test layers. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Git, branches and pull requests: Git, branches and pull requests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] A failing adapter contract must fail integration without corrupting the store.
- [ ] Git, branches and pull requests: Create two branches that intentionally conflict, resolve the conflict, and write a PR description containing scope and validation. Use a local Git repository; remote GitHub is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Contracts and quality

<a id="engineering-http"></a>

### HTTP, APIs and JSON contracts

Model services communicate through explicit request and response contracts.

**Priority:** Foundation · **Study:** 2h · **Practice:** 3h

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

### HTTP contract playground

An API learner needs to see status codes and caching behavior.

**Data:** Use a local HTTP stub with ten requests and fixed responses. Use a fixed seed and keep evaluation cases separate.

**Output:** A request collection demonstrating headers, errors and conditional reads.

**Effort:** 10h · Beginner → intermediate

- **HTTP, APIs and JSON contracts:** Implement HTTP, APIs and JSON contracts in HTTP contract playground. Adapt this focused lab to the project data: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.  Required concepts: Methods and status codes, Headers and serialization, Client resilience.
  - Deliverable: HTTP, APIs and JSON contracts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A request collection demonstrating headers, errors and conditional reads. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · HTTP, APIs and JSON contracts: HTTP, APIs and JSON contracts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify 200, 304, 400 and 404 cases against documented contracts.
- [ ] HTTP, APIs and JSON contracts: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Search complexity workbench

A developer needs to choose a lookup strategy for growing catalogs.

**Data:** Generate sorted ID lists at four sizes with fixed lookup queries. Use a fixed seed and keep evaluation cases separate.

**Output:** A benchmark comparing linear scan, binary search and hash lookup.

**Effort:** 10h · Beginner → intermediate

- **HTTP, APIs and JSON contracts:** Extend the project with HTTP, APIs and JSON contracts in Search complexity workbench. Adapt this focused lab to the project data: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.  Required concepts: Methods and status codes, Headers and serialization, Client resilience.
  - Deliverable: HTTP, APIs and JSON contracts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A benchmark comparing linear scan, binary search and hash lookup. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · HTTP, APIs and JSON contracts: HTTP, APIs and JSON contracts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Check equal results and plot operation counts separately from noisy wall time.
- [ ] HTTP, APIs and JSON contracts: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### API change compatibility gate

An API owner needs to detect breaking schema changes before release.

**Data:** Author two OpenAPI examples with removed fields and changed types. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema comparison CLI and compatibility report.

**Effort:** 10h · Beginner → intermediate

- **HTTP, APIs and JSON contracts:** Extend the project with HTTP, APIs and JSON contracts in API change compatibility gate. Adapt this focused lab to the project data: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.  Required concepts: Methods and status codes, Headers and serialization, Client resilience.
  - Deliverable: HTTP, APIs and JSON contracts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema comparison CLI and compatibility report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · HTTP, APIs and JSON contracts: HTTP, APIs and JSON contracts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect each seeded breaking change while allowing a new optional field.
- [ ] HTTP, APIs and JSON contracts: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible environment trial

A teammate needs reliable setup from a clean checkout.

**Data:** Use a tiny Python package and a local wheel/cache when available. Use a fixed seed and keep evaluation cases separate.

**Output:** A locked dependency workflow and clean-environment setup guide.

**Effort:** 10h · Beginner → intermediate

- **HTTP, APIs and JSON contracts:** Extend the project with HTTP, APIs and JSON contracts in Reproducible environment trial. Adapt this focused lab to the project data: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.  Required concepts: Methods and status codes, Headers and serialization, Client resilience.
  - Deliverable: HTTP, APIs and JSON contracts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A locked dependency workflow and clean-environment setup guide. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · HTTP, APIs and JSON contracts: HTTP, APIs and JSON contracts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Install into a fresh virtual environment and run the smoke test.
- [ ] HTTP, APIs and JSON contracts: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Release conflict rehearsal

A small team needs a safe process for reviewing conflicting changes.

**Data:** Create a disposable local repository with two feature branches. Use a fixed seed and keep evaluation cases separate.

**Output:** A documented conflict resolution, PR checklist and release tag.

**Effort:** 10h · Beginner → intermediate

- **HTTP, APIs and JSON contracts:** Extend the project with HTTP, APIs and JSON contracts in Release conflict rehearsal. Adapt this focused lab to the project data: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.  Required concepts: Methods and status codes, Headers and serialization, Client resilience.
  - Deliverable: HTTP, APIs and JSON contracts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A documented conflict resolution, PR checklist and release tag. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · HTTP, APIs and JSON contracts: HTTP, APIs and JSON contracts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reconstruct the release from its tag and explain each conflict decision.
- [ ] HTTP, APIs and JSON contracts: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Repeatable batch import

An operations teammate needs to rerun interrupted imports safely.

**Data:** Generate 100 records with stable IDs and repeated batches. Use a fixed seed and keep evaluation cases separate.

**Output:** A resumable importer with an explicit input/output contract.

**Effort:** 10h · Beginner → intermediate

- **HTTP, APIs and JSON contracts:** Extend the project with HTTP, APIs and JSON contracts in Repeatable batch import. Adapt this focused lab to the project data: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.  Required concepts: Methods and status codes, Headers and serialization, Client resilience.
  - Deliverable: HTTP, APIs and JSON contracts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A resumable importer with an explicit input/output contract. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · HTTP, APIs and JSON contracts: HTTP, APIs and JSON contracts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Run the same batch twice and prove counts and totals do not change.
- [ ] HTTP, APIs and JSON contracts: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Refactor a tangled importer

A maintainer needs isolated parsing, validation and storage responsibilities.

**Data:** Create a small deliberately coupled CSV importer with six failing fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A refactored package with explicit boundaries and unchanged output contracts.

**Effort:** 10h · Beginner → intermediate

- **HTTP, APIs and JSON contracts:** Extend the project with HTTP, APIs and JSON contracts in Refactor a tangled importer. Adapt this focused lab to the project data: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.  Required concepts: Methods and status codes, Headers and serialization, Client resilience.
  - Deliverable: HTTP, APIs and JSON contracts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A refactored package with explicit boundaries and unchanged output contracts. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · HTTP, APIs and JSON contracts: HTTP, APIs and JSON contracts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Run identical golden inputs before and after refactoring.
- [ ] HTTP, APIs and JSON contracts: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reviewable feature delivery

A contributor needs to ship a change another teammate can audit.

**Data:** Use a tiny notes app and three requested behavior changes. Use a fixed seed and keep evaluation cases separate.

**Output:** A sequence of small commits with tests and a review brief.

**Effort:** 10h · Beginner → intermediate

- **HTTP, APIs and JSON contracts:** Extend the project with HTTP, APIs and JSON contracts in Reviewable feature delivery. Adapt this focused lab to the project data: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.  Required concepts: Methods and status codes, Headers and serialization, Client resilience.
  - Deliverable: HTTP, APIs and JSON contracts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A sequence of small commits with tests and a review brief. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · HTTP, APIs and JSON contracts: HTTP, APIs and JSON contracts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] A reviewer can trace each requirement to code, a test and a commit.
- [ ] HTTP, APIs and JSON contracts: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workspace health inspector

A teammate needs to diagnose missing tools before setup.

**Data:** Prepare a temporary project with missing files and a fake executable check. Use a fixed seed and keep evaluation cases separate.

**Output:** A read-only shell inspector and machine-readable health report.

**Effort:** 10h · Beginner → intermediate

- **HTTP, APIs and JSON contracts:** Extend the project with HTTP, APIs and JSON contracts in Workspace health inspector. Adapt this focused lab to the project data: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.  Required concepts: Methods and status codes, Headers and serialization, Client resilience.
  - Deliverable: HTTP, APIs and JSON contracts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A read-only shell inspector and machine-readable health report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · HTTP, APIs and JSON contracts: HTTP, APIs and JSON contracts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report each missing requirement and return a failing exit code without editing files.
- [ ] HTTP, APIs and JSON contracts: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Checkout service testing lab

A developer needs to distinguish unit, integration and contract failures.

**Data:** Use fictional baskets, a local SQLite store and a stub payment adapter. Use a fixed seed and keep evaluation cases separate.

**Output:** A small checkout simulator with separated test layers.

**Effort:** 10h · Beginner → intermediate

- **HTTP, APIs and JSON contracts:** Extend the project with HTTP, APIs and JSON contracts in Checkout service testing lab. Adapt this focused lab to the project data: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.  Required concepts: Methods and status codes, Headers and serialization, Client resilience.
  - Deliverable: HTTP, APIs and JSON contracts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A small checkout simulator with separated test layers. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · HTTP, APIs and JSON contracts: HTTP, APIs and JSON contracts: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] A failing adapter contract must fail integration without corrupting the store.
- [ ] HTTP, APIs and JSON contracts: Describe and call a local prediction endpoint; test invalid JSON, missing fields and a timeout, and document response codes.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="engineering-design"></a>

### Complexity, code structure and testing

Keep implementation simple while knowing which operations become slow or fragile.

**Priority:** Foundation · **Study:** 2h · **Practice:** 3h

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

### Search complexity workbench

A developer needs to choose a lookup strategy for growing catalogs.

**Data:** Generate sorted ID lists at four sizes with fixed lookup queries. Use a fixed seed and keep evaluation cases separate.

**Output:** A benchmark comparing linear scan, binary search and hash lookup.

**Effort:** 10h · Beginner → intermediate

- **Complexity, code structure and testing:** Implement Complexity, code structure and testing in Search complexity workbench. Adapt this focused lab to the project data: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.  Required concepts: Complexity, Structure, Testing layers.
  - Deliverable: Complexity, code structure and testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A benchmark comparing linear scan, binary search and hash lookup. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Complexity, code structure and testing: Complexity, code structure and testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Check equal results and plot operation counts separately from noisy wall time.
- [ ] Complexity, code structure and testing: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible environment trial

A teammate needs reliable setup from a clean checkout.

**Data:** Use a tiny Python package and a local wheel/cache when available. Use a fixed seed and keep evaluation cases separate.

**Output:** A locked dependency workflow and clean-environment setup guide.

**Effort:** 10h · Beginner → intermediate

- **Complexity, code structure and testing:** Implement Complexity, code structure and testing in Reproducible environment trial. Adapt this focused lab to the project data: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.  Required concepts: Complexity, Structure, Testing layers.
  - Deliverable: Complexity, code structure and testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A locked dependency workflow and clean-environment setup guide. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Complexity, code structure and testing: Complexity, code structure and testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Install into a fresh virtual environment and run the smoke test.
- [ ] Complexity, code structure and testing: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Repeatable batch import

An operations teammate needs to rerun interrupted imports safely.

**Data:** Generate 100 records with stable IDs and repeated batches. Use a fixed seed and keep evaluation cases separate.

**Output:** A resumable importer with an explicit input/output contract.

**Effort:** 10h · Beginner → intermediate

- **Complexity, code structure and testing:** Implement Complexity, code structure and testing in Repeatable batch import. Adapt this focused lab to the project data: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.  Required concepts: Complexity, Structure, Testing layers.
  - Deliverable: Complexity, code structure and testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A resumable importer with an explicit input/output contract. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Complexity, code structure and testing: Complexity, code structure and testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Run the same batch twice and prove counts and totals do not change.
- [ ] Complexity, code structure and testing: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Refactor a tangled importer

A maintainer needs isolated parsing, validation and storage responsibilities.

**Data:** Create a small deliberately coupled CSV importer with six failing fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A refactored package with explicit boundaries and unchanged output contracts.

**Effort:** 10h · Beginner → intermediate

- **Complexity, code structure and testing:** Implement Complexity, code structure and testing in Refactor a tangled importer. Adapt this focused lab to the project data: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.  Required concepts: Complexity, Structure, Testing layers.
  - Deliverable: Complexity, code structure and testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A refactored package with explicit boundaries and unchanged output contracts. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Complexity, code structure and testing: Complexity, code structure and testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Run identical golden inputs before and after refactoring.
- [ ] Complexity, code structure and testing: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### API change compatibility gate

An API owner needs to detect breaking schema changes before release.

**Data:** Author two OpenAPI examples with removed fields and changed types. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema comparison CLI and compatibility report.

**Effort:** 10h · Beginner → intermediate

- **Complexity, code structure and testing:** Extend the project with Complexity, code structure and testing in API change compatibility gate. Adapt this focused lab to the project data: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.  Required concepts: Complexity, Structure, Testing layers.
  - Deliverable: Complexity, code structure and testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema comparison CLI and compatibility report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Complexity, code structure and testing: Complexity, code structure and testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect each seeded breaking change while allowing a new optional field.
- [ ] Complexity, code structure and testing: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Release conflict rehearsal

A small team needs a safe process for reviewing conflicting changes.

**Data:** Create a disposable local repository with two feature branches. Use a fixed seed and keep evaluation cases separate.

**Output:** A documented conflict resolution, PR checklist and release tag.

**Effort:** 10h · Beginner → intermediate

- **Complexity, code structure and testing:** Extend the project with Complexity, code structure and testing in Release conflict rehearsal. Adapt this focused lab to the project data: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.  Required concepts: Complexity, Structure, Testing layers.
  - Deliverable: Complexity, code structure and testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A documented conflict resolution, PR checklist and release tag. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Complexity, code structure and testing: Complexity, code structure and testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reconstruct the release from its tag and explain each conflict decision.
- [ ] Complexity, code structure and testing: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### HTTP contract playground

An API learner needs to see status codes and caching behavior.

**Data:** Use a local HTTP stub with ten requests and fixed responses. Use a fixed seed and keep evaluation cases separate.

**Output:** A request collection demonstrating headers, errors and conditional reads.

**Effort:** 10h · Beginner → intermediate

- **Complexity, code structure and testing:** Extend the project with Complexity, code structure and testing in HTTP contract playground. Adapt this focused lab to the project data: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.  Required concepts: Complexity, Structure, Testing layers.
  - Deliverable: Complexity, code structure and testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A request collection demonstrating headers, errors and conditional reads. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Complexity, code structure and testing: Complexity, code structure and testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify 200, 304, 400 and 404 cases against documented contracts.
- [ ] Complexity, code structure and testing: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reviewable feature delivery

A contributor needs to ship a change another teammate can audit.

**Data:** Use a tiny notes app and three requested behavior changes. Use a fixed seed and keep evaluation cases separate.

**Output:** A sequence of small commits with tests and a review brief.

**Effort:** 10h · Beginner → intermediate

- **Complexity, code structure and testing:** Extend the project with Complexity, code structure and testing in Reviewable feature delivery. Adapt this focused lab to the project data: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.  Required concepts: Complexity, Structure, Testing layers.
  - Deliverable: Complexity, code structure and testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A sequence of small commits with tests and a review brief. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Complexity, code structure and testing: Complexity, code structure and testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] A reviewer can trace each requirement to code, a test and a commit.
- [ ] Complexity, code structure and testing: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workspace health inspector

A teammate needs to diagnose missing tools before setup.

**Data:** Prepare a temporary project with missing files and a fake executable check. Use a fixed seed and keep evaluation cases separate.

**Output:** A read-only shell inspector and machine-readable health report.

**Effort:** 10h · Beginner → intermediate

- **Complexity, code structure and testing:** Extend the project with Complexity, code structure and testing in Workspace health inspector. Adapt this focused lab to the project data: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.  Required concepts: Complexity, Structure, Testing layers.
  - Deliverable: Complexity, code structure and testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A read-only shell inspector and machine-readable health report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Complexity, code structure and testing: Complexity, code structure and testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report each missing requirement and return a failing exit code without editing files.
- [ ] Complexity, code structure and testing: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Checkout service testing lab

A developer needs to distinguish unit, integration and contract failures.

**Data:** Use fictional baskets, a local SQLite store and a stub payment adapter. Use a fixed seed and keep evaluation cases separate.

**Output:** A small checkout simulator with separated test layers.

**Effort:** 10h · Beginner → intermediate

- **Complexity, code structure and testing:** Extend the project with Complexity, code structure and testing in Checkout service testing lab. Adapt this focused lab to the project data: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.  Required concepts: Complexity, Structure, Testing layers.
  - Deliverable: Complexity, code structure and testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A small checkout simulator with separated test layers. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Complexity, code structure and testing: Complexity, code structure and testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] A failing adapter contract must fail integration without corrupting the store.
- [ ] Complexity, code structure and testing: Compare list and set deduplication on increasing input sizes; build unit and integration checks for a small ingestion pipeline and explain the tradeoff.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Maintainable service engineering

<a id="engineering-api-contracts"></a>

### HTTP contracts, pagination and idempotency

Design predictable service calls so retries and changing datasets do not create inconsistent application behaviour.

**Priority:** Foundation · **Study:** 3h · **Practice:** 4h

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

### API change compatibility gate

An API owner needs to detect breaking schema changes before release.

**Data:** Author two OpenAPI examples with removed fields and changed types. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema comparison CLI and compatibility report.

**Effort:** 10h · Beginner → intermediate

- **HTTP contracts, pagination and idempotency:** Implement HTTP contracts, pagination and idempotency in API change compatibility gate. Adapt this focused lab to the project data: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.  Required concepts: Safe and idempotent semantics, Client versus server failures, Pagination stability, Idempotency keys, Contract compatibility.
  - Deliverable: HTTP contracts, pagination and idempotency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema comparison CLI and compatibility report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · HTTP contracts, pagination and idempotency: HTTP contracts, pagination and idempotency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect each seeded breaking change while allowing a new optional field.
- [ ] HTTP contracts, pagination and idempotency: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Repeatable batch import

An operations teammate needs to rerun interrupted imports safely.

**Data:** Generate 100 records with stable IDs and repeated batches. Use a fixed seed and keep evaluation cases separate.

**Output:** A resumable importer with an explicit input/output contract.

**Effort:** 10h · Beginner → intermediate

- **HTTP contracts, pagination and idempotency:** Implement HTTP contracts, pagination and idempotency in Repeatable batch import. Adapt this focused lab to the project data: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.  Required concepts: Safe and idempotent semantics, Client versus server failures, Pagination stability, Idempotency keys, Contract compatibility.
  - Deliverable: HTTP contracts, pagination and idempotency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A resumable importer with an explicit input/output contract. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · HTTP contracts, pagination and idempotency: HTTP contracts, pagination and idempotency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Run the same batch twice and prove counts and totals do not change.
- [ ] HTTP contracts, pagination and idempotency: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Search complexity workbench

A developer needs to choose a lookup strategy for growing catalogs.

**Data:** Generate sorted ID lists at four sizes with fixed lookup queries. Use a fixed seed and keep evaluation cases separate.

**Output:** A benchmark comparing linear scan, binary search and hash lookup.

**Effort:** 10h · Beginner → intermediate

- **HTTP contracts, pagination and idempotency:** Extend the project with HTTP contracts, pagination and idempotency in Search complexity workbench. Adapt this focused lab to the project data: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.  Required concepts: Safe and idempotent semantics, Client versus server failures, Pagination stability, Idempotency keys, Contract compatibility.
  - Deliverable: HTTP contracts, pagination and idempotency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A benchmark comparing linear scan, binary search and hash lookup. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · HTTP contracts, pagination and idempotency: HTTP contracts, pagination and idempotency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Check equal results and plot operation counts separately from noisy wall time.
- [ ] HTTP contracts, pagination and idempotency: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible environment trial

A teammate needs reliable setup from a clean checkout.

**Data:** Use a tiny Python package and a local wheel/cache when available. Use a fixed seed and keep evaluation cases separate.

**Output:** A locked dependency workflow and clean-environment setup guide.

**Effort:** 10h · Beginner → intermediate

- **HTTP contracts, pagination and idempotency:** Extend the project with HTTP contracts, pagination and idempotency in Reproducible environment trial. Adapt this focused lab to the project data: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.  Required concepts: Safe and idempotent semantics, Client versus server failures, Pagination stability, Idempotency keys, Contract compatibility.
  - Deliverable: HTTP contracts, pagination and idempotency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A locked dependency workflow and clean-environment setup guide. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · HTTP contracts, pagination and idempotency: HTTP contracts, pagination and idempotency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Install into a fresh virtual environment and run the smoke test.
- [ ] HTTP contracts, pagination and idempotency: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Release conflict rehearsal

A small team needs a safe process for reviewing conflicting changes.

**Data:** Create a disposable local repository with two feature branches. Use a fixed seed and keep evaluation cases separate.

**Output:** A documented conflict resolution, PR checklist and release tag.

**Effort:** 10h · Beginner → intermediate

- **HTTP contracts, pagination and idempotency:** Extend the project with HTTP contracts, pagination and idempotency in Release conflict rehearsal. Adapt this focused lab to the project data: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.  Required concepts: Safe and idempotent semantics, Client versus server failures, Pagination stability, Idempotency keys, Contract compatibility.
  - Deliverable: HTTP contracts, pagination and idempotency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A documented conflict resolution, PR checklist and release tag. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · HTTP contracts, pagination and idempotency: HTTP contracts, pagination and idempotency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reconstruct the release from its tag and explain each conflict decision.
- [ ] HTTP contracts, pagination and idempotency: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### HTTP contract playground

An API learner needs to see status codes and caching behavior.

**Data:** Use a local HTTP stub with ten requests and fixed responses. Use a fixed seed and keep evaluation cases separate.

**Output:** A request collection demonstrating headers, errors and conditional reads.

**Effort:** 10h · Beginner → intermediate

- **HTTP contracts, pagination and idempotency:** Extend the project with HTTP contracts, pagination and idempotency in HTTP contract playground. Adapt this focused lab to the project data: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.  Required concepts: Safe and idempotent semantics, Client versus server failures, Pagination stability, Idempotency keys, Contract compatibility.
  - Deliverable: HTTP contracts, pagination and idempotency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A request collection demonstrating headers, errors and conditional reads. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · HTTP contracts, pagination and idempotency: HTTP contracts, pagination and idempotency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify 200, 304, 400 and 404 cases against documented contracts.
- [ ] HTTP contracts, pagination and idempotency: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Refactor a tangled importer

A maintainer needs isolated parsing, validation and storage responsibilities.

**Data:** Create a small deliberately coupled CSV importer with six failing fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A refactored package with explicit boundaries and unchanged output contracts.

**Effort:** 10h · Beginner → intermediate

- **HTTP contracts, pagination and idempotency:** Extend the project with HTTP contracts, pagination and idempotency in Refactor a tangled importer. Adapt this focused lab to the project data: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.  Required concepts: Safe and idempotent semantics, Client versus server failures, Pagination stability, Idempotency keys, Contract compatibility.
  - Deliverable: HTTP contracts, pagination and idempotency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A refactored package with explicit boundaries and unchanged output contracts. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · HTTP contracts, pagination and idempotency: HTTP contracts, pagination and idempotency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Run identical golden inputs before and after refactoring.
- [ ] HTTP contracts, pagination and idempotency: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reviewable feature delivery

A contributor needs to ship a change another teammate can audit.

**Data:** Use a tiny notes app and three requested behavior changes. Use a fixed seed and keep evaluation cases separate.

**Output:** A sequence of small commits with tests and a review brief.

**Effort:** 10h · Beginner → intermediate

- **HTTP contracts, pagination and idempotency:** Extend the project with HTTP contracts, pagination and idempotency in Reviewable feature delivery. Adapt this focused lab to the project data: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.  Required concepts: Safe and idempotent semantics, Client versus server failures, Pagination stability, Idempotency keys, Contract compatibility.
  - Deliverable: HTTP contracts, pagination and idempotency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A sequence of small commits with tests and a review brief. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · HTTP contracts, pagination and idempotency: HTTP contracts, pagination and idempotency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] A reviewer can trace each requirement to code, a test and a commit.
- [ ] HTTP contracts, pagination and idempotency: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workspace health inspector

A teammate needs to diagnose missing tools before setup.

**Data:** Prepare a temporary project with missing files and a fake executable check. Use a fixed seed and keep evaluation cases separate.

**Output:** A read-only shell inspector and machine-readable health report.

**Effort:** 10h · Beginner → intermediate

- **HTTP contracts, pagination and idempotency:** Extend the project with HTTP contracts, pagination and idempotency in Workspace health inspector. Adapt this focused lab to the project data: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.  Required concepts: Safe and idempotent semantics, Client versus server failures, Pagination stability, Idempotency keys, Contract compatibility.
  - Deliverable: HTTP contracts, pagination and idempotency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A read-only shell inspector and machine-readable health report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · HTTP contracts, pagination and idempotency: HTTP contracts, pagination and idempotency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report each missing requirement and return a failing exit code without editing files.
- [ ] HTTP contracts, pagination and idempotency: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Checkout service testing lab

A developer needs to distinguish unit, integration and contract failures.

**Data:** Use fictional baskets, a local SQLite store and a stub payment adapter. Use a fixed seed and keep evaluation cases separate.

**Output:** A small checkout simulator with separated test layers.

**Effort:** 10h · Beginner → intermediate

- **HTTP contracts, pagination and idempotency:** Extend the project with HTTP contracts, pagination and idempotency in Checkout service testing lab. Adapt this focused lab to the project data: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.  Required concepts: Safe and idempotent semantics, Client versus server failures, Pagination stability, Idempotency keys, Contract compatibility.
  - Deliverable: HTTP contracts, pagination and idempotency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A small checkout simulator with separated test layers. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · HTTP contracts, pagination and idempotency: HTTP contracts, pagination and idempotency: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] A failing adapter contract must fail integration without corrupting the store.
- [ ] HTTP contracts, pagination and idempotency: Build a local fake HTTP client and small service contract for project creation and listing. Add cursor-pagination tests, a documented error schema and idempotent replay tests including conflicting payloads.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="engineering-testing-layers"></a>

### Unit, integration and contract tests

Choose tests that catch boundary failures while keeping the feedback loop small and reliable.

**Priority:** Foundation · **Study:** 3h · **Practice:** 4h

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

### Reviewable feature delivery

A contributor needs to ship a change another teammate can audit.

**Data:** Use a tiny notes app and three requested behavior changes. Use a fixed seed and keep evaluation cases separate.

**Output:** A sequence of small commits with tests and a review brief.

**Effort:** 10h · Beginner → intermediate

- **Unit, integration and contract tests:** Implement Unit, integration and contract tests in Reviewable feature delivery. Adapt this focused lab to the project data: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.  Required concepts: Unit boundaries, Integration boundaries, Contract fixtures, Fixture isolation, Failure-path assertions.
  - Deliverable: Unit, integration and contract tests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A sequence of small commits with tests and a review brief. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Unit, integration and contract tests: Unit, integration and contract tests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] A reviewer can trace each requirement to code, a test and a commit.
- [ ] Unit, integration and contract tests: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Checkout service testing lab

A developer needs to distinguish unit, integration and contract failures.

**Data:** Use fictional baskets, a local SQLite store and a stub payment adapter. Use a fixed seed and keep evaluation cases separate.

**Output:** A small checkout simulator with separated test layers.

**Effort:** 10h · Beginner → intermediate

- **Unit, integration and contract tests:** Implement Unit, integration and contract tests in Checkout service testing lab. Adapt this focused lab to the project data: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.  Required concepts: Unit boundaries, Integration boundaries, Contract fixtures, Fixture isolation, Failure-path assertions.
  - Deliverable: Unit, integration and contract tests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A small checkout simulator with separated test layers. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Unit, integration and contract tests: Unit, integration and contract tests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] A failing adapter contract must fail integration without corrupting the store.
- [ ] Unit, integration and contract tests: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Search complexity workbench

A developer needs to choose a lookup strategy for growing catalogs.

**Data:** Generate sorted ID lists at four sizes with fixed lookup queries. Use a fixed seed and keep evaluation cases separate.

**Output:** A benchmark comparing linear scan, binary search and hash lookup.

**Effort:** 10h · Beginner → intermediate

- **Unit, integration and contract tests:** Extend the project with Unit, integration and contract tests in Search complexity workbench. Adapt this focused lab to the project data: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.  Required concepts: Unit boundaries, Integration boundaries, Contract fixtures, Fixture isolation, Failure-path assertions.
  - Deliverable: Unit, integration and contract tests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A benchmark comparing linear scan, binary search and hash lookup. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Unit, integration and contract tests: Unit, integration and contract tests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Check equal results and plot operation counts separately from noisy wall time.
- [ ] Unit, integration and contract tests: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### API change compatibility gate

An API owner needs to detect breaking schema changes before release.

**Data:** Author two OpenAPI examples with removed fields and changed types. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema comparison CLI and compatibility report.

**Effort:** 10h · Beginner → intermediate

- **Unit, integration and contract tests:** Extend the project with Unit, integration and contract tests in API change compatibility gate. Adapt this focused lab to the project data: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.  Required concepts: Unit boundaries, Integration boundaries, Contract fixtures, Fixture isolation, Failure-path assertions.
  - Deliverable: Unit, integration and contract tests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema comparison CLI and compatibility report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Unit, integration and contract tests: Unit, integration and contract tests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect each seeded breaking change while allowing a new optional field.
- [ ] Unit, integration and contract tests: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible environment trial

A teammate needs reliable setup from a clean checkout.

**Data:** Use a tiny Python package and a local wheel/cache when available. Use a fixed seed and keep evaluation cases separate.

**Output:** A locked dependency workflow and clean-environment setup guide.

**Effort:** 10h · Beginner → intermediate

- **Unit, integration and contract tests:** Extend the project with Unit, integration and contract tests in Reproducible environment trial. Adapt this focused lab to the project data: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.  Required concepts: Unit boundaries, Integration boundaries, Contract fixtures, Fixture isolation, Failure-path assertions.
  - Deliverable: Unit, integration and contract tests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A locked dependency workflow and clean-environment setup guide. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Unit, integration and contract tests: Unit, integration and contract tests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Install into a fresh virtual environment and run the smoke test.
- [ ] Unit, integration and contract tests: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Release conflict rehearsal

A small team needs a safe process for reviewing conflicting changes.

**Data:** Create a disposable local repository with two feature branches. Use a fixed seed and keep evaluation cases separate.

**Output:** A documented conflict resolution, PR checklist and release tag.

**Effort:** 10h · Beginner → intermediate

- **Unit, integration and contract tests:** Extend the project with Unit, integration and contract tests in Release conflict rehearsal. Adapt this focused lab to the project data: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.  Required concepts: Unit boundaries, Integration boundaries, Contract fixtures, Fixture isolation, Failure-path assertions.
  - Deliverable: Unit, integration and contract tests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A documented conflict resolution, PR checklist and release tag. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Unit, integration and contract tests: Unit, integration and contract tests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reconstruct the release from its tag and explain each conflict decision.
- [ ] Unit, integration and contract tests: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### HTTP contract playground

An API learner needs to see status codes and caching behavior.

**Data:** Use a local HTTP stub with ten requests and fixed responses. Use a fixed seed and keep evaluation cases separate.

**Output:** A request collection demonstrating headers, errors and conditional reads.

**Effort:** 10h · Beginner → intermediate

- **Unit, integration and contract tests:** Extend the project with Unit, integration and contract tests in HTTP contract playground. Adapt this focused lab to the project data: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.  Required concepts: Unit boundaries, Integration boundaries, Contract fixtures, Fixture isolation, Failure-path assertions.
  - Deliverable: Unit, integration and contract tests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A request collection demonstrating headers, errors and conditional reads. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Unit, integration and contract tests: Unit, integration and contract tests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify 200, 304, 400 and 404 cases against documented contracts.
- [ ] Unit, integration and contract tests: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Repeatable batch import

An operations teammate needs to rerun interrupted imports safely.

**Data:** Generate 100 records with stable IDs and repeated batches. Use a fixed seed and keep evaluation cases separate.

**Output:** A resumable importer with an explicit input/output contract.

**Effort:** 10h · Beginner → intermediate

- **Unit, integration and contract tests:** Extend the project with Unit, integration and contract tests in Repeatable batch import. Adapt this focused lab to the project data: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.  Required concepts: Unit boundaries, Integration boundaries, Contract fixtures, Fixture isolation, Failure-path assertions.
  - Deliverable: Unit, integration and contract tests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A resumable importer with an explicit input/output contract. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Unit, integration and contract tests: Unit, integration and contract tests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Run the same batch twice and prove counts and totals do not change.
- [ ] Unit, integration and contract tests: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Refactor a tangled importer

A maintainer needs isolated parsing, validation and storage responsibilities.

**Data:** Create a small deliberately coupled CSV importer with six failing fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A refactored package with explicit boundaries and unchanged output contracts.

**Effort:** 10h · Beginner → intermediate

- **Unit, integration and contract tests:** Extend the project with Unit, integration and contract tests in Refactor a tangled importer. Adapt this focused lab to the project data: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.  Required concepts: Unit boundaries, Integration boundaries, Contract fixtures, Fixture isolation, Failure-path assertions.
  - Deliverable: Unit, integration and contract tests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A refactored package with explicit boundaries and unchanged output contracts. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Unit, integration and contract tests: Unit, integration and contract tests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Run identical golden inputs before and after refactoring.
- [ ] Unit, integration and contract tests: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workspace health inspector

A teammate needs to diagnose missing tools before setup.

**Data:** Prepare a temporary project with missing files and a fake executable check. Use a fixed seed and keep evaluation cases separate.

**Output:** A read-only shell inspector and machine-readable health report.

**Effort:** 10h · Beginner → intermediate

- **Unit, integration and contract tests:** Extend the project with Unit, integration and contract tests in Workspace health inspector. Adapt this focused lab to the project data: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.  Required concepts: Unit boundaries, Integration boundaries, Contract fixtures, Fixture isolation, Failure-path assertions.
  - Deliverable: Unit, integration and contract tests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A read-only shell inspector and machine-readable health report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Unit, integration and contract tests: Unit, integration and contract tests: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report each missing requirement and return a failing exit code without editing files.
- [ ] Unit, integration and contract tests: Create a small repository with unit tests for validation, an integration test through a local database and a contract test for recorded AI outputs. Add one intentional regression and show which layer catches it.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Stage checkpoint

<a id="checkpoint-engineering"></a>

### Engineering handoff checkpoint

Demonstrate readiness through a reproducible practical handoff. Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.

**Priority:** Foundation · **Study:** 1h · **Practice:** 6h

**Prerequisites:** [Terminal and Linux](engineering.md#engineering-shell), [Git, branches and pull requests](engineering.md#engineering-git), [HTTP, APIs and JSON contracts](engineering.md#engineering-http), [Complexity, code structure and testing](engineering.md#engineering-design), [HTTP contracts, pagination and idempotency](engineering.md#engineering-api-contracts), [Unit, integration and contract tests](engineering.md#engineering-testing-layers) Navigation is unrestricted.

#### Concepts

- [ ] **Define the success contract:** Write observable checks before implementation so success is not just a plausible demonstration.
  - Example: Turn this task into a numbered acceptance checklist: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.
  - Videos:
    - [CS50P 5 — Unit tests](https://www.youtube.com/watch?v=tIrcxwLqzjQ) · Harvard CS50 · David Malan · University lecture
      - Explains: Assertions, pytest, test organization and testing return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on define the success contract. Then reproduce the lesson example: Turn this task into a numbered acceptance checklist: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/5/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on define the success contract. Then reproduce the lesson example: Turn this task into a numbered acceptance checklist: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Reproduce the baseline:** Keep a simple reference output and deterministic inputs so changes can be compared honestly.
  - Example: Run a fixed input twice and compare saved outputs with the documented baseline.
  - Videos:
    - [CS50P 5 — Unit tests](https://www.youtube.com/watch?v=tIrcxwLqzjQ) · Harvard CS50 · David Malan · University lecture
      - Explains: Assertions, pytest, test organization and testing return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on reproduce the baseline. Then reproduce the lesson example: Run a fixed input twice and compare saved outputs with the documented baseline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/5/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on reproduce the baseline. Then reproduce the lesson example: Run a fixed input twice and compare saved outputs with the documented baseline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Test a failure boundary:** A working happy path does not establish robustness to malformed data or dependency failures.
  - Example: Inject one malformed input and one controlled failure, then record the resulting state.
  - Videos:
    - [CS50P 5 — Unit tests](https://www.youtube.com/watch?v=tIrcxwLqzjQ) · Harvard CS50 · David Malan · University lecture
      - Explains: Assertions, pytest, test organization and testing return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on test a failure boundary. Then reproduce the lesson example: Inject one malformed input and one controlled failure, then record the resulting state.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/5/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on test a failure boundary. Then reproduce the lesson example: Inject one malformed input and one controlled failure, then record the resulting state.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Explain the decisions:** Describe why each technique was chosen and what evidence would make you choose differently.
  - Example: Write a short decision note comparing the chosen approach with one simpler alternative.
  - Videos:
    - [CS50P 5 — Unit tests](https://www.youtube.com/watch?v=tIrcxwLqzjQ) · Harvard CS50 · David Malan · University lecture
      - Explains: Assertions, pytest, test organization and testing return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on explain the decisions. Then reproduce the lesson example: Write a short decision note comparing the chosen approach with one simpler alternative.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/5/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on explain the decisions. Then reproduce the lesson example: Write a short decision note comparing the chosen approach with one simpler alternative.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [ ] **Hand off the evidence:** Another learner must be able to reproduce the result from your instructions and supplied inputs.
  - Example: Ask a teammate to run the README commands in a clean environment and record missing steps.
  - Videos:
    - [CS50P 5 — Unit tests](https://www.youtube.com/watch?v=tIrcxwLqzjQ) · Harvard CS50 · David Malan · University lecture
      - Explains: Assertions, pytest, test organization and testing return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on hand off the evidence. Then reproduce the lesson example: Ask a teammate to run the README commands in a clean environment and record missing steps.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/5/
    - [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
      - Explains: Scalability, reliability, storage and architecture tradeoffs.
      - Useful because: Explain why a queue, index or cache is useful before adding one.
      - Watch for: Focus on hand off the evidence. Then reproduce the lesson example: Ask a teammate to run the README commands in a clean environment and record missing steps.
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

#### Engineering handoff checkpoint

Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.

**Deliverables**

- Runnable project and reproducible input fixtures
- README, results and decision notes
- Failure evidence and clean-start instructions

**Completion checks**

- [ ] Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.
- [ ] Explain the code and results without relying on an AI-generated summary.
- [ ] A teammate can reproduce the demo without paid credentials.

#### Ten project recommendations

### Search complexity workbench

A developer needs to choose a lookup strategy for growing catalogs.

**Data:** Generate sorted ID lists at four sizes with fixed lookup queries. Use a fixed seed and keep evaluation cases separate.

**Output:** A benchmark comparing linear scan, binary search and hash lookup.

**Effort:** 10h · Beginner → intermediate

- **Engineering handoff checkpoint:** Extend the project with Engineering handoff checkpoint in Search complexity workbench. Adapt this focused lab to the project data: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Engineering handoff checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A benchmark comparing linear scan, binary search and hash lookup. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Engineering handoff checkpoint: Engineering handoff checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Check equal results and plot operation counts separately from noisy wall time.
- [ ] Engineering handoff checkpoint: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### API change compatibility gate

An API owner needs to detect breaking schema changes before release.

**Data:** Author two OpenAPI examples with removed fields and changed types. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema comparison CLI and compatibility report.

**Effort:** 10h · Beginner → intermediate

- **Engineering handoff checkpoint:** Extend the project with Engineering handoff checkpoint in API change compatibility gate. Adapt this focused lab to the project data: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Engineering handoff checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema comparison CLI and compatibility report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Engineering handoff checkpoint: Engineering handoff checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect each seeded breaking change while allowing a new optional field.
- [ ] Engineering handoff checkpoint: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible environment trial

A teammate needs reliable setup from a clean checkout.

**Data:** Use a tiny Python package and a local wheel/cache when available. Use a fixed seed and keep evaluation cases separate.

**Output:** A locked dependency workflow and clean-environment setup guide.

**Effort:** 10h · Beginner → intermediate

- **Engineering handoff checkpoint:** Extend the project with Engineering handoff checkpoint in Reproducible environment trial. Adapt this focused lab to the project data: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Engineering handoff checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A locked dependency workflow and clean-environment setup guide. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Engineering handoff checkpoint: Engineering handoff checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Install into a fresh virtual environment and run the smoke test.
- [ ] Engineering handoff checkpoint: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Release conflict rehearsal

A small team needs a safe process for reviewing conflicting changes.

**Data:** Create a disposable local repository with two feature branches. Use a fixed seed and keep evaluation cases separate.

**Output:** A documented conflict resolution, PR checklist and release tag.

**Effort:** 10h · Beginner → intermediate

- **Engineering handoff checkpoint:** Extend the project with Engineering handoff checkpoint in Release conflict rehearsal. Adapt this focused lab to the project data: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Engineering handoff checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A documented conflict resolution, PR checklist and release tag. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Engineering handoff checkpoint: Engineering handoff checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reconstruct the release from its tag and explain each conflict decision.
- [ ] Engineering handoff checkpoint: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### HTTP contract playground

An API learner needs to see status codes and caching behavior.

**Data:** Use a local HTTP stub with ten requests and fixed responses. Use a fixed seed and keep evaluation cases separate.

**Output:** A request collection demonstrating headers, errors and conditional reads.

**Effort:** 10h · Beginner → intermediate

- **Engineering handoff checkpoint:** Extend the project with Engineering handoff checkpoint in HTTP contract playground. Adapt this focused lab to the project data: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Engineering handoff checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A request collection demonstrating headers, errors and conditional reads. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Engineering handoff checkpoint: Engineering handoff checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Verify 200, 304, 400 and 404 cases against documented contracts.
- [ ] Engineering handoff checkpoint: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Repeatable batch import

An operations teammate needs to rerun interrupted imports safely.

**Data:** Generate 100 records with stable IDs and repeated batches. Use a fixed seed and keep evaluation cases separate.

**Output:** A resumable importer with an explicit input/output contract.

**Effort:** 10h · Beginner → intermediate

- **Engineering handoff checkpoint:** Extend the project with Engineering handoff checkpoint in Repeatable batch import. Adapt this focused lab to the project data: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Engineering handoff checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A resumable importer with an explicit input/output contract. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Engineering handoff checkpoint: Engineering handoff checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Run the same batch twice and prove counts and totals do not change.
- [ ] Engineering handoff checkpoint: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Refactor a tangled importer

A maintainer needs isolated parsing, validation and storage responsibilities.

**Data:** Create a small deliberately coupled CSV importer with six failing fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A refactored package with explicit boundaries and unchanged output contracts.

**Effort:** 10h · Beginner → intermediate

- **Engineering handoff checkpoint:** Extend the project with Engineering handoff checkpoint in Refactor a tangled importer. Adapt this focused lab to the project data: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Engineering handoff checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A refactored package with explicit boundaries and unchanged output contracts. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Engineering handoff checkpoint: Engineering handoff checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Run identical golden inputs before and after refactoring.
- [ ] Engineering handoff checkpoint: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reviewable feature delivery

A contributor needs to ship a change another teammate can audit.

**Data:** Use a tiny notes app and three requested behavior changes. Use a fixed seed and keep evaluation cases separate.

**Output:** A sequence of small commits with tests and a review brief.

**Effort:** 10h · Beginner → intermediate

- **Engineering handoff checkpoint:** Extend the project with Engineering handoff checkpoint in Reviewable feature delivery. Adapt this focused lab to the project data: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Engineering handoff checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A sequence of small commits with tests and a review brief. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Engineering handoff checkpoint: Engineering handoff checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] A reviewer can trace each requirement to code, a test and a commit.
- [ ] Engineering handoff checkpoint: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workspace health inspector

A teammate needs to diagnose missing tools before setup.

**Data:** Prepare a temporary project with missing files and a fake executable check. Use a fixed seed and keep evaluation cases separate.

**Output:** A read-only shell inspector and machine-readable health report.

**Effort:** 10h · Beginner → intermediate

- **Engineering handoff checkpoint:** Extend the project with Engineering handoff checkpoint in Workspace health inspector. Adapt this focused lab to the project data: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Engineering handoff checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A read-only shell inspector and machine-readable health report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Engineering handoff checkpoint: Engineering handoff checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report each missing requirement and return a failing exit code without editing files.
- [ ] Engineering handoff checkpoint: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Checkout service testing lab

A developer needs to distinguish unit, integration and contract failures.

**Data:** Use fictional baskets, a local SQLite store and a stub payment adapter. Use a fixed seed and keep evaluation cases separate.

**Output:** A small checkout simulator with separated test layers.

**Effort:** 10h · Beginner → intermediate

- **Engineering handoff checkpoint:** Extend the project with Engineering handoff checkpoint in Checkout service testing lab. Adapt this focused lab to the project data: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Engineering handoff checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A small checkout simulator with separated test layers. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Engineering handoff checkpoint: Engineering handoff checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] A failing adapter contract must fail integration without corrupting the store.
- [ ] Engineering handoff checkpoint: Package the tracker in a Git repository, document its HTTP/JSON contract, create a reviewable change and run unit plus integration checks. A teammate must reproduce setup from the README.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

