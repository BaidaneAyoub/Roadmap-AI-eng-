# Python

Write understandable, testable programs before adding models.

## AI Engineering · Step 1 of 13 · Data Engineering · Step 1 of 5

**Goal:** Write reliable Python programs before connecting AI tools.

**Stage checkpoint:** Build a JSON-based study tracker with functions, validation, logging and tests.

Write reliable Python with validation, explicit state and reproducible tests.

Follow the modules and lessons below at your pace. Finish each exercise, save your evidence and self-assessment, then continue. Completed and Already known count as completed; Skipped is reported separately. You can move ahead at any time.

[Full pipeline](../PIPELINE.md) · [Next step: Engineering foundations](engineering.md)

## Language essentials

<a id="python-values"></a>

### Types and collections

Choose data representations that make model inputs and outputs predictable.

**Priority:** Foundation · **Study:** 2h · **Practice:** 3h

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

### Expense reconciliation CLI

A club treasurer needs consistent totals from differently formatted receipts.

**Data:** Create three CSV files with 60 fictional expenses, currencies and duplicates. Use a fixed seed and keep evaluation cases separate.

**Output:** A typed normalization package and discrepancy report.

**Effort:** 10h · Beginner → intermediate

- **Types and collections:** Implement Types and collections in Expense reconciliation CLI. Adapt this focused lab to the project data: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.  Required concepts: Types, Collections, Mutability.
  - Deliverable: Types and collections: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A typed normalization package and discrepancy report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Types and collections: Types and collections: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect all seeded duplicates and reject mixed-currency totals.
- [ ] Types and collections: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Streaming sensor summaries

A hobbyist needs rolling summaries of a long sensor stream.

**Data:** Generate 100000 timestamp/value pairs lazily with fixed seed 42. Use a fixed seed and keep evaluation cases separate.

**Output:** A generator pipeline producing rolling means and invalid-reading counts.

**Effort:** 10h · Beginner → intermediate

- **Types and collections:** Implement Types and collections in Streaming sensor summaries. Adapt this focused lab to the project data: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.  Required concepts: Types, Collections, Mutability.
  - Deliverable: Types and collections: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A generator pipeline producing rolling means and invalid-reading counts. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Types and collections: Types and collections: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match a small reference calculation while memory stays bounded by the window.
- [ ] Types and collections: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Concurrent service sampler

An operator needs latency samples without overwhelming local services.

**Data:** Run three local stub endpoints with delays, errors and timeouts. Use a fixed seed and keep evaluation cases separate.

**Output:** An async sampler with bounded concurrency and a latency summary.

**Effort:** 10h · Beginner → intermediate

- **Types and collections:** Extend the project with Types and collections in Concurrent service sampler. Adapt this focused lab to the project data: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.  Required concepts: Types, Collections, Mutability.
  - Deliverable: Types and collections: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An async sampler with bounded concurrency and a latency summary. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Types and collections: Types and collections: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep concurrency at four or less and finish when one endpoint never responds.
- [ ] Types and collections: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Configuration doctor

A developer needs understandable errors before running a data job.

**Data:** Create ten JSON configurations with missing and mistyped settings. Use a fixed seed and keep evaluation cases separate.

**Output:** A validated configuration loader with redacted diagnostic messages.

**Effort:** 10h · Beginner → intermediate

- **Types and collections:** Extend the project with Types and collections in Configuration doctor. Adapt this focused lab to the project data: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.  Required concepts: Types, Collections, Mutability.
  - Deliverable: Types and collections: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A validated configuration loader with redacted diagnostic messages. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Types and collections: Types and collections: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject each invalid fixture and never print a seeded secret value.
- [ ] Types and collections: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Safe export writer

A data analyst needs exports that never replace a good file with a partial one.

**Data:** Create ten small records and inject a write failure halfway through export. Use a fixed seed and keep evaluation cases separate.

**Output:** A context-managed atomic JSON export utility.

**Effort:** 10h · Beginner → intermediate

- **Types and collections:** Extend the project with Types and collections in Safe export writer. Adapt this focused lab to the project data: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.  Required concepts: Types, Collections, Mutability.
  - Deliverable: Types and collections: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A context-managed atomic JSON export utility. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Types and collections: Types and collections: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The previous export survives a simulated failure and temporary handles close.
- [ ] Types and collections: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Duplicate file index

An archivist needs to inspect duplicate notes before cleaning a folder.

**Data:** Create 40 temporary text files including equal contents under different names. Use a fixed seed and keep evaluation cases separate.

**Output:** A hash-based index and read-only duplicate report.

**Effort:** 10h · Beginner → intermediate

- **Types and collections:** Extend the project with Types and collections in Duplicate file index. Adapt this focused lab to the project data: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.  Required concepts: Types, Collections, Mutability.
  - Deliverable: Types and collections: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A hash-based index and read-only duplicate report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Types and collections: Types and collections: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect content duplicates without treating equal filenames as equal content.
- [ ] Types and collections: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Log file investigator

A developer needs to locate failed requests across rotated logs.

**Data:** Generate 120 JSONL events including invalid lines and repeated request IDs. Use a fixed seed and keep evaluation cases separate.

**Output:** A streaming CLI that groups failures by request without loading every file.

**Effort:** 10h · Beginner → intermediate

- **Types and collections:** Extend the project with Types and collections in Log file investigator. Adapt this focused lab to the project data: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.  Required concepts: Types, Collections, Mutability.
  - Deliverable: Types and collections: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A streaming CLI that groups failures by request without loading every file. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Types and collections: Types and collections: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject corrupt lines with line numbers; produce identical totals with a one-line buffer.
- [ ] Types and collections: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Pluggable text cleaner

An editor needs reusable transformations for inconsistent draft documents.

**Data:** Write 20 Markdown drafts with whitespace, Unicode and repeated headings. Use a fixed seed and keep evaluation cases separate.

**Output:** A package with composable transformations and a CLI entry point.

**Effort:** 10h · Beginner → intermediate

- **Types and collections:** Extend the project with Types and collections in Pluggable text cleaner. Adapt this focused lab to the project data: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.  Required concepts: Types, Collections, Mutability.
  - Deliverable: Types and collections: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A package with composable transformations and a CLI entry point. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Types and collections: Types and collections: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show idempotence and preserve non-ASCII text through every plugin.
- [ ] Types and collections: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Adaptive terminal quiz

A learner needs practice on concepts they repeatedly miss.

**Data:** Write 25 questions and a local JSON history with two fictional learners. Use a fixed seed and keep evaluation cases separate.

**Output:** A CLI quiz with deterministic scoring and weak-topic selection.

**Effort:** 10h · Beginner → intermediate

- **Types and collections:** Extend the project with Types and collections in Adaptive terminal quiz. Adapt this focused lab to the project data: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.  Required concepts: Types, Collections, Mutability.
  - Deliverable: Types and collections: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A CLI quiz with deterministic scoring and weak-topic selection. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Types and collections: Types and collections: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Resume an interrupted quiz and keep the two histories separate.
- [ ] Types and collections: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Parser regression kit

A maintainer needs confidence when extending a command parser.

**Data:** Author 30 valid and invalid command strings, including quoted arguments. Use a fixed seed and keep evaluation cases separate.

**Output:** A parser package with parametrized tests and readable failures.

**Effort:** 10h · Beginner → intermediate

- **Types and collections:** Extend the project with Types and collections in Parser regression kit. Adapt this focused lab to the project data: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.  Required concepts: Types, Collections, Mutability.
  - Deliverable: Types and collections: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A parser package with parametrized tests and readable failures. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Types and collections: Types and collections: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Cover empty input, escaped quotes and unknown flags without crashing.
- [ ] Types and collections: Create a dataset record normalizer that converts numeric strings, removes duplicate IDs and preserves input order. Assert empty input and invalid numeric values are handled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="python-control"></a>

### Control flow and functions

Turn a notebook experiment into reusable, explicit behavior.

**Priority:** Foundation · **Study:** 2h · **Practice:** 3h

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

### Adaptive terminal quiz

A learner needs practice on concepts they repeatedly miss.

**Data:** Write 25 questions and a local JSON history with two fictional learners. Use a fixed seed and keep evaluation cases separate.

**Output:** A CLI quiz with deterministic scoring and weak-topic selection.

**Effort:** 10h · Beginner → intermediate

- **Control flow and functions:** Implement Control flow and functions in Adaptive terminal quiz. Adapt this focused lab to the project data: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.  Required concepts: Branches and loops, Functions, Comprehensions.
  - Deliverable: Control flow and functions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A CLI quiz with deterministic scoring and weak-topic selection. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Control flow and functions: Control flow and functions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Resume an interrupted quiz and keep the two histories separate.
- [ ] Control flow and functions: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Parser regression kit

A maintainer needs confidence when extending a command parser.

**Data:** Author 30 valid and invalid command strings, including quoted arguments. Use a fixed seed and keep evaluation cases separate.

**Output:** A parser package with parametrized tests and readable failures.

**Effort:** 10h · Beginner → intermediate

- **Control flow and functions:** Implement Control flow and functions in Parser regression kit. Adapt this focused lab to the project data: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.  Required concepts: Branches and loops, Functions, Comprehensions.
  - Deliverable: Control flow and functions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A parser package with parametrized tests and readable failures. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Control flow and functions: Control flow and functions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Cover empty input, escaped quotes and unknown flags without crashing.
- [ ] Control flow and functions: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Concurrent service sampler

An operator needs latency samples without overwhelming local services.

**Data:** Run three local stub endpoints with delays, errors and timeouts. Use a fixed seed and keep evaluation cases separate.

**Output:** An async sampler with bounded concurrency and a latency summary.

**Effort:** 10h · Beginner → intermediate

- **Control flow and functions:** Extend the project with Control flow and functions in Concurrent service sampler. Adapt this focused lab to the project data: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.  Required concepts: Branches and loops, Functions, Comprehensions.
  - Deliverable: Control flow and functions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An async sampler with bounded concurrency and a latency summary. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Control flow and functions: Control flow and functions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep concurrency at four or less and finish when one endpoint never responds.
- [ ] Control flow and functions: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Configuration doctor

A developer needs understandable errors before running a data job.

**Data:** Create ten JSON configurations with missing and mistyped settings. Use a fixed seed and keep evaluation cases separate.

**Output:** A validated configuration loader with redacted diagnostic messages.

**Effort:** 10h · Beginner → intermediate

- **Control flow and functions:** Extend the project with Control flow and functions in Configuration doctor. Adapt this focused lab to the project data: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.  Required concepts: Branches and loops, Functions, Comprehensions.
  - Deliverable: Control flow and functions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A validated configuration loader with redacted diagnostic messages. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Control flow and functions: Control flow and functions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject each invalid fixture and never print a seeded secret value.
- [ ] Control flow and functions: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Safe export writer

A data analyst needs exports that never replace a good file with a partial one.

**Data:** Create ten small records and inject a write failure halfway through export. Use a fixed seed and keep evaluation cases separate.

**Output:** A context-managed atomic JSON export utility.

**Effort:** 10h · Beginner → intermediate

- **Control flow and functions:** Extend the project with Control flow and functions in Safe export writer. Adapt this focused lab to the project data: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.  Required concepts: Branches and loops, Functions, Comprehensions.
  - Deliverable: Control flow and functions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A context-managed atomic JSON export utility. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Control flow and functions: Control flow and functions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The previous export survives a simulated failure and temporary handles close.
- [ ] Control flow and functions: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Expense reconciliation CLI

A club treasurer needs consistent totals from differently formatted receipts.

**Data:** Create three CSV files with 60 fictional expenses, currencies and duplicates. Use a fixed seed and keep evaluation cases separate.

**Output:** A typed normalization package and discrepancy report.

**Effort:** 10h · Beginner → intermediate

- **Control flow and functions:** Extend the project with Control flow and functions in Expense reconciliation CLI. Adapt this focused lab to the project data: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.  Required concepts: Branches and loops, Functions, Comprehensions.
  - Deliverable: Control flow and functions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A typed normalization package and discrepancy report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Control flow and functions: Control flow and functions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect all seeded duplicates and reject mixed-currency totals.
- [ ] Control flow and functions: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Duplicate file index

An archivist needs to inspect duplicate notes before cleaning a folder.

**Data:** Create 40 temporary text files including equal contents under different names. Use a fixed seed and keep evaluation cases separate.

**Output:** A hash-based index and read-only duplicate report.

**Effort:** 10h · Beginner → intermediate

- **Control flow and functions:** Extend the project with Control flow and functions in Duplicate file index. Adapt this focused lab to the project data: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.  Required concepts: Branches and loops, Functions, Comprehensions.
  - Deliverable: Control flow and functions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A hash-based index and read-only duplicate report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Control flow and functions: Control flow and functions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect content duplicates without treating equal filenames as equal content.
- [ ] Control flow and functions: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Streaming sensor summaries

A hobbyist needs rolling summaries of a long sensor stream.

**Data:** Generate 100000 timestamp/value pairs lazily with fixed seed 42. Use a fixed seed and keep evaluation cases separate.

**Output:** A generator pipeline producing rolling means and invalid-reading counts.

**Effort:** 10h · Beginner → intermediate

- **Control flow and functions:** Extend the project with Control flow and functions in Streaming sensor summaries. Adapt this focused lab to the project data: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.  Required concepts: Branches and loops, Functions, Comprehensions.
  - Deliverable: Control flow and functions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A generator pipeline producing rolling means and invalid-reading counts. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Control flow and functions: Control flow and functions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match a small reference calculation while memory stays bounded by the window.
- [ ] Control flow and functions: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Log file investigator

A developer needs to locate failed requests across rotated logs.

**Data:** Generate 120 JSONL events including invalid lines and repeated request IDs. Use a fixed seed and keep evaluation cases separate.

**Output:** A streaming CLI that groups failures by request without loading every file.

**Effort:** 10h · Beginner → intermediate

- **Control flow and functions:** Extend the project with Control flow and functions in Log file investigator. Adapt this focused lab to the project data: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.  Required concepts: Branches and loops, Functions, Comprehensions.
  - Deliverable: Control flow and functions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A streaming CLI that groups failures by request without loading every file. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Control flow and functions: Control flow and functions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject corrupt lines with line numbers; produce identical totals with a one-line buffer.
- [ ] Control flow and functions: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Pluggable text cleaner

An editor needs reusable transformations for inconsistent draft documents.

**Data:** Write 20 Markdown drafts with whitespace, Unicode and repeated headings. Use a fixed seed and keep evaluation cases separate.

**Output:** A package with composable transformations and a CLI entry point.

**Effort:** 10h · Beginner → intermediate

- **Control flow and functions:** Extend the project with Control flow and functions in Pluggable text cleaner. Adapt this focused lab to the project data: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.  Required concepts: Branches and loops, Functions, Comprehensions.
  - Deliverable: Control flow and functions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A package with composable transformations and a CLI entry point. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Control flow and functions: Control flow and functions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show idempotence and preserve non-ASCII text through every plugin.
- [ ] Control flow and functions: Implement text normalization and dataset filtering as pure functions; assert deterministic output, blank text and punctuation handling.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="python-files"></a>

### Files, JSON and exceptions

Safely load datasets and report malformed inputs instead of silently losing data.

**Priority:** Foundation · **Study:** 2h · **Practice:** 3h

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

### Safe export writer

A data analyst needs exports that never replace a good file with a partial one.

**Data:** Create ten small records and inject a write failure halfway through export. Use a fixed seed and keep evaluation cases separate.

**Output:** A context-managed atomic JSON export utility.

**Effort:** 10h · Beginner → intermediate

- **Files, JSON and exceptions:** Implement Files, JSON and exceptions in Safe export writer. Adapt this focused lab to the project data: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.  Required concepts: Context managers, JSON, Exceptions.
  - Deliverable: Files, JSON and exceptions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A context-managed atomic JSON export utility. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Files, JSON and exceptions: Files, JSON and exceptions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The previous export survives a simulated failure and temporary handles close.
- [ ] Files, JSON and exceptions: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Expense reconciliation CLI

A club treasurer needs consistent totals from differently formatted receipts.

**Data:** Create three CSV files with 60 fictional expenses, currencies and duplicates. Use a fixed seed and keep evaluation cases separate.

**Output:** A typed normalization package and discrepancy report.

**Effort:** 10h · Beginner → intermediate

- **Files, JSON and exceptions:** Implement Files, JSON and exceptions in Expense reconciliation CLI. Adapt this focused lab to the project data: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.  Required concepts: Context managers, JSON, Exceptions.
  - Deliverable: Files, JSON and exceptions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A typed normalization package and discrepancy report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Files, JSON and exceptions: Files, JSON and exceptions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect all seeded duplicates and reject mixed-currency totals.
- [ ] Files, JSON and exceptions: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Duplicate file index

An archivist needs to inspect duplicate notes before cleaning a folder.

**Data:** Create 40 temporary text files including equal contents under different names. Use a fixed seed and keep evaluation cases separate.

**Output:** A hash-based index and read-only duplicate report.

**Effort:** 10h · Beginner → intermediate

- **Files, JSON and exceptions:** Implement Files, JSON and exceptions in Duplicate file index. Adapt this focused lab to the project data: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.  Required concepts: Context managers, JSON, Exceptions.
  - Deliverable: Files, JSON and exceptions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A hash-based index and read-only duplicate report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Files, JSON and exceptions: Files, JSON and exceptions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect content duplicates without treating equal filenames as equal content.
- [ ] Files, JSON and exceptions: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Log file investigator

A developer needs to locate failed requests across rotated logs.

**Data:** Generate 120 JSONL events including invalid lines and repeated request IDs. Use a fixed seed and keep evaluation cases separate.

**Output:** A streaming CLI that groups failures by request without loading every file.

**Effort:** 10h · Beginner → intermediate

- **Files, JSON and exceptions:** Implement Files, JSON and exceptions in Log file investigator. Adapt this focused lab to the project data: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.  Required concepts: Context managers, JSON, Exceptions.
  - Deliverable: Files, JSON and exceptions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A streaming CLI that groups failures by request without loading every file. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Files, JSON and exceptions: Files, JSON and exceptions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject corrupt lines with line numbers; produce identical totals with a one-line buffer.
- [ ] Files, JSON and exceptions: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Concurrent service sampler

An operator needs latency samples without overwhelming local services.

**Data:** Run three local stub endpoints with delays, errors and timeouts. Use a fixed seed and keep evaluation cases separate.

**Output:** An async sampler with bounded concurrency and a latency summary.

**Effort:** 10h · Beginner → intermediate

- **Files, JSON and exceptions:** Extend the project with Files, JSON and exceptions in Concurrent service sampler. Adapt this focused lab to the project data: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.  Required concepts: Context managers, JSON, Exceptions.
  - Deliverable: Files, JSON and exceptions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An async sampler with bounded concurrency and a latency summary. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Files, JSON and exceptions: Files, JSON and exceptions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep concurrency at four or less and finish when one endpoint never responds.
- [ ] Files, JSON and exceptions: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Configuration doctor

A developer needs understandable errors before running a data job.

**Data:** Create ten JSON configurations with missing and mistyped settings. Use a fixed seed and keep evaluation cases separate.

**Output:** A validated configuration loader with redacted diagnostic messages.

**Effort:** 10h · Beginner → intermediate

- **Files, JSON and exceptions:** Extend the project with Files, JSON and exceptions in Configuration doctor. Adapt this focused lab to the project data: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.  Required concepts: Context managers, JSON, Exceptions.
  - Deliverable: Files, JSON and exceptions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A validated configuration loader with redacted diagnostic messages. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Files, JSON and exceptions: Files, JSON and exceptions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject each invalid fixture and never print a seeded secret value.
- [ ] Files, JSON and exceptions: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Streaming sensor summaries

A hobbyist needs rolling summaries of a long sensor stream.

**Data:** Generate 100000 timestamp/value pairs lazily with fixed seed 42. Use a fixed seed and keep evaluation cases separate.

**Output:** A generator pipeline producing rolling means and invalid-reading counts.

**Effort:** 10h · Beginner → intermediate

- **Files, JSON and exceptions:** Extend the project with Files, JSON and exceptions in Streaming sensor summaries. Adapt this focused lab to the project data: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.  Required concepts: Context managers, JSON, Exceptions.
  - Deliverable: Files, JSON and exceptions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A generator pipeline producing rolling means and invalid-reading counts. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Files, JSON and exceptions: Files, JSON and exceptions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match a small reference calculation while memory stays bounded by the window.
- [ ] Files, JSON and exceptions: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Pluggable text cleaner

An editor needs reusable transformations for inconsistent draft documents.

**Data:** Write 20 Markdown drafts with whitespace, Unicode and repeated headings. Use a fixed seed and keep evaluation cases separate.

**Output:** A package with composable transformations and a CLI entry point.

**Effort:** 10h · Beginner → intermediate

- **Files, JSON and exceptions:** Extend the project with Files, JSON and exceptions in Pluggable text cleaner. Adapt this focused lab to the project data: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.  Required concepts: Context managers, JSON, Exceptions.
  - Deliverable: Files, JSON and exceptions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A package with composable transformations and a CLI entry point. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Files, JSON and exceptions: Files, JSON and exceptions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show idempotence and preserve non-ASCII text through every plugin.
- [ ] Files, JSON and exceptions: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Adaptive terminal quiz

A learner needs practice on concepts they repeatedly miss.

**Data:** Write 25 questions and a local JSON history with two fictional learners. Use a fixed seed and keep evaluation cases separate.

**Output:** A CLI quiz with deterministic scoring and weak-topic selection.

**Effort:** 10h · Beginner → intermediate

- **Files, JSON and exceptions:** Extend the project with Files, JSON and exceptions in Adaptive terminal quiz. Adapt this focused lab to the project data: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.  Required concepts: Context managers, JSON, Exceptions.
  - Deliverable: Files, JSON and exceptions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A CLI quiz with deterministic scoring and weak-topic selection. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Files, JSON and exceptions: Files, JSON and exceptions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Resume an interrupted quiz and keep the two histories separate.
- [ ] Files, JSON and exceptions: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Parser regression kit

A maintainer needs confidence when extending a command parser.

**Data:** Author 30 valid and invalid command strings, including quoted arguments. Use a fixed seed and keep evaluation cases separate.

**Output:** A parser package with parametrized tests and readable failures.

**Effort:** 10h · Beginner → intermediate

- **Files, JSON and exceptions:** Extend the project with Files, JSON and exceptions in Parser regression kit. Adapt this focused lab to the project data: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.  Required concepts: Context managers, JSON, Exceptions.
  - Deliverable: Files, JSON and exceptions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A parser package with parametrized tests and readable failures. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Files, JSON and exceptions: Files, JSON and exceptions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Cover empty input, escaped quotes and unknown flags without crashing.
- [ ] Files, JSON and exceptions: Build a JSONL reader that reports invalid line numbers and writes valid records to a separate output file without overwriting the original.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Production Python

<a id="python-modules"></a>

### Modules, environments and dependencies

Keep projects reproducible and imports independent of one computer.

**Priority:** Foundation · **Study:** 2h · **Practice:** 3h

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

### Configuration doctor

A developer needs understandable errors before running a data job.

**Data:** Create ten JSON configurations with missing and mistyped settings. Use a fixed seed and keep evaluation cases separate.

**Output:** A validated configuration loader with redacted diagnostic messages.

**Effort:** 10h · Beginner → intermediate

- **Modules, environments and dependencies:** Implement Modules, environments and dependencies in Configuration doctor. Adapt this focused lab to the project data: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.  Required concepts: Modules and packages, Virtual environments, Dependency versions.
  - Deliverable: Modules, environments and dependencies: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A validated configuration loader with redacted diagnostic messages. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Modules, environments and dependencies: Modules, environments and dependencies: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject each invalid fixture and never print a seeded secret value.
- [ ] Modules, environments and dependencies: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Pluggable text cleaner

An editor needs reusable transformations for inconsistent draft documents.

**Data:** Write 20 Markdown drafts with whitespace, Unicode and repeated headings. Use a fixed seed and keep evaluation cases separate.

**Output:** A package with composable transformations and a CLI entry point.

**Effort:** 10h · Beginner → intermediate

- **Modules, environments and dependencies:** Implement Modules, environments and dependencies in Pluggable text cleaner. Adapt this focused lab to the project data: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.  Required concepts: Modules and packages, Virtual environments, Dependency versions.
  - Deliverable: Modules, environments and dependencies: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A package with composable transformations and a CLI entry point. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Modules, environments and dependencies: Modules, environments and dependencies: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show idempotence and preserve non-ASCII text through every plugin.
- [ ] Modules, environments and dependencies: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Parser regression kit

A maintainer needs confidence when extending a command parser.

**Data:** Author 30 valid and invalid command strings, including quoted arguments. Use a fixed seed and keep evaluation cases separate.

**Output:** A parser package with parametrized tests and readable failures.

**Effort:** 10h · Beginner → intermediate

- **Modules, environments and dependencies:** Implement Modules, environments and dependencies in Parser regression kit. Adapt this focused lab to the project data: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.  Required concepts: Modules and packages, Virtual environments, Dependency versions.
  - Deliverable: Modules, environments and dependencies: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A parser package with parametrized tests and readable failures. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Modules, environments and dependencies: Modules, environments and dependencies: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Cover empty input, escaped quotes and unknown flags without crashing.
- [ ] Modules, environments and dependencies: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Refactor a tangled importer

A maintainer needs isolated parsing, validation and storage responsibilities.

**Data:** Create a small deliberately coupled CSV importer with six failing fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A refactored package with explicit boundaries and unchanged output contracts.

**Effort:** 10h · Beginner → intermediate

- **Modules, environments and dependencies:** Implement Modules, environments and dependencies in Refactor a tangled importer. Adapt this focused lab to the project data: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.  Required concepts: Modules and packages, Virtual environments, Dependency versions.
  - Deliverable: Modules, environments and dependencies: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A refactored package with explicit boundaries and unchanged output contracts. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Modules, environments and dependencies: Modules, environments and dependencies: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Run identical golden inputs before and after refactoring.
- [ ] Modules, environments and dependencies: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Concurrent service sampler

An operator needs latency samples without overwhelming local services.

**Data:** Run three local stub endpoints with delays, errors and timeouts. Use a fixed seed and keep evaluation cases separate.

**Output:** An async sampler with bounded concurrency and a latency summary.

**Effort:** 10h · Beginner → intermediate

- **Modules, environments and dependencies:** Extend the project with Modules, environments and dependencies in Concurrent service sampler. Adapt this focused lab to the project data: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.  Required concepts: Modules and packages, Virtual environments, Dependency versions.
  - Deliverable: Modules, environments and dependencies: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An async sampler with bounded concurrency and a latency summary. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Modules, environments and dependencies: Modules, environments and dependencies: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep concurrency at four or less and finish when one endpoint never responds.
- [ ] Modules, environments and dependencies: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Safe export writer

A data analyst needs exports that never replace a good file with a partial one.

**Data:** Create ten small records and inject a write failure halfway through export. Use a fixed seed and keep evaluation cases separate.

**Output:** A context-managed atomic JSON export utility.

**Effort:** 10h · Beginner → intermediate

- **Modules, environments and dependencies:** Extend the project with Modules, environments and dependencies in Safe export writer. Adapt this focused lab to the project data: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.  Required concepts: Modules and packages, Virtual environments, Dependency versions.
  - Deliverable: Modules, environments and dependencies: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A context-managed atomic JSON export utility. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Modules, environments and dependencies: Modules, environments and dependencies: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The previous export survives a simulated failure and temporary handles close.
- [ ] Modules, environments and dependencies: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Expense reconciliation CLI

A club treasurer needs consistent totals from differently formatted receipts.

**Data:** Create three CSV files with 60 fictional expenses, currencies and duplicates. Use a fixed seed and keep evaluation cases separate.

**Output:** A typed normalization package and discrepancy report.

**Effort:** 10h · Beginner → intermediate

- **Modules, environments and dependencies:** Extend the project with Modules, environments and dependencies in Expense reconciliation CLI. Adapt this focused lab to the project data: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.  Required concepts: Modules and packages, Virtual environments, Dependency versions.
  - Deliverable: Modules, environments and dependencies: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A typed normalization package and discrepancy report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Modules, environments and dependencies: Modules, environments and dependencies: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect all seeded duplicates and reject mixed-currency totals.
- [ ] Modules, environments and dependencies: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Duplicate file index

An archivist needs to inspect duplicate notes before cleaning a folder.

**Data:** Create 40 temporary text files including equal contents under different names. Use a fixed seed and keep evaluation cases separate.

**Output:** A hash-based index and read-only duplicate report.

**Effort:** 10h · Beginner → intermediate

- **Modules, environments and dependencies:** Extend the project with Modules, environments and dependencies in Duplicate file index. Adapt this focused lab to the project data: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.  Required concepts: Modules and packages, Virtual environments, Dependency versions.
  - Deliverable: Modules, environments and dependencies: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A hash-based index and read-only duplicate report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Modules, environments and dependencies: Modules, environments and dependencies: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect content duplicates without treating equal filenames as equal content.
- [ ] Modules, environments and dependencies: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Streaming sensor summaries

A hobbyist needs rolling summaries of a long sensor stream.

**Data:** Generate 100000 timestamp/value pairs lazily with fixed seed 42. Use a fixed seed and keep evaluation cases separate.

**Output:** A generator pipeline producing rolling means and invalid-reading counts.

**Effort:** 10h · Beginner → intermediate

- **Modules, environments and dependencies:** Extend the project with Modules, environments and dependencies in Streaming sensor summaries. Adapt this focused lab to the project data: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.  Required concepts: Modules and packages, Virtual environments, Dependency versions.
  - Deliverable: Modules, environments and dependencies: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A generator pipeline producing rolling means and invalid-reading counts. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Modules, environments and dependencies: Modules, environments and dependencies: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match a small reference calculation while memory stays bounded by the window.
- [ ] Modules, environments and dependencies: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Log file investigator

A developer needs to locate failed requests across rotated logs.

**Data:** Generate 120 JSONL events including invalid lines and repeated request IDs. Use a fixed seed and keep evaluation cases separate.

**Output:** A streaming CLI that groups failures by request without loading every file.

**Effort:** 10h · Beginner → intermediate

- **Modules, environments and dependencies:** Extend the project with Modules, environments and dependencies in Log file investigator. Adapt this focused lab to the project data: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.  Required concepts: Modules and packages, Virtual environments, Dependency versions.
  - Deliverable: Modules, environments and dependencies: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A streaming CLI that groups failures by request without loading every file. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Modules, environments and dependencies: Modules, environments and dependencies: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject corrupt lines with line numbers; produce identical totals with a one-line buffer.
- [ ] Modules, environments and dependencies: Split the JSONL reader into a package and CLI; document a clean environment installation and verify it from another working directory.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="python-objects"></a>

### OOP, dataclasses and typing

Express model records and interfaces without unnecessary inheritance.

**Priority:** Foundation · **Study:** 2h · **Practice:** 3h

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

### Configuration doctor

A developer needs understandable errors before running a data job.

**Data:** Create ten JSON configurations with missing and mistyped settings. Use a fixed seed and keep evaluation cases separate.

**Output:** A validated configuration loader with redacted diagnostic messages.

**Effort:** 10h · Beginner → intermediate

- **OOP, dataclasses and typing:** Implement OOP, dataclasses and typing in Configuration doctor. Adapt this focused lab to the project data: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.  Required concepts: Classes, Dataclasses, Type hints.
  - Deliverable: OOP, dataclasses and typing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A validated configuration loader with redacted diagnostic messages. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · OOP, dataclasses and typing: OOP, dataclasses and typing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject each invalid fixture and never print a seeded secret value.
- [ ] OOP, dataclasses and typing: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Pluggable text cleaner

An editor needs reusable transformations for inconsistent draft documents.

**Data:** Write 20 Markdown drafts with whitespace, Unicode and repeated headings. Use a fixed seed and keep evaluation cases separate.

**Output:** A package with composable transformations and a CLI entry point.

**Effort:** 10h · Beginner → intermediate

- **OOP, dataclasses and typing:** Implement OOP, dataclasses and typing in Pluggable text cleaner. Adapt this focused lab to the project data: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.  Required concepts: Classes, Dataclasses, Type hints.
  - Deliverable: OOP, dataclasses and typing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A package with composable transformations and a CLI entry point. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · OOP, dataclasses and typing: OOP, dataclasses and typing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show idempotence and preserve non-ASCII text through every plugin.
- [ ] OOP, dataclasses and typing: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Adaptive terminal quiz

A learner needs practice on concepts they repeatedly miss.

**Data:** Write 25 questions and a local JSON history with two fictional learners. Use a fixed seed and keep evaluation cases separate.

**Output:** A CLI quiz with deterministic scoring and weak-topic selection.

**Effort:** 10h · Beginner → intermediate

- **OOP, dataclasses and typing:** Implement OOP, dataclasses and typing in Adaptive terminal quiz. Adapt this focused lab to the project data: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.  Required concepts: Classes, Dataclasses, Type hints.
  - Deliverable: OOP, dataclasses and typing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A CLI quiz with deterministic scoring and weak-topic selection. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · OOP, dataclasses and typing: OOP, dataclasses and typing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Resume an interrupted quiz and keep the two histories separate.
- [ ] OOP, dataclasses and typing: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Concurrent service sampler

An operator needs latency samples without overwhelming local services.

**Data:** Run three local stub endpoints with delays, errors and timeouts. Use a fixed seed and keep evaluation cases separate.

**Output:** An async sampler with bounded concurrency and a latency summary.

**Effort:** 10h · Beginner → intermediate

- **OOP, dataclasses and typing:** Extend the project with OOP, dataclasses and typing in Concurrent service sampler. Adapt this focused lab to the project data: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.  Required concepts: Classes, Dataclasses, Type hints.
  - Deliverable: OOP, dataclasses and typing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An async sampler with bounded concurrency and a latency summary. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · OOP, dataclasses and typing: OOP, dataclasses and typing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep concurrency at four or less and finish when one endpoint never responds.
- [ ] OOP, dataclasses and typing: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Safe export writer

A data analyst needs exports that never replace a good file with a partial one.

**Data:** Create ten small records and inject a write failure halfway through export. Use a fixed seed and keep evaluation cases separate.

**Output:** A context-managed atomic JSON export utility.

**Effort:** 10h · Beginner → intermediate

- **OOP, dataclasses and typing:** Extend the project with OOP, dataclasses and typing in Safe export writer. Adapt this focused lab to the project data: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.  Required concepts: Classes, Dataclasses, Type hints.
  - Deliverable: OOP, dataclasses and typing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A context-managed atomic JSON export utility. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · OOP, dataclasses and typing: OOP, dataclasses and typing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The previous export survives a simulated failure and temporary handles close.
- [ ] OOP, dataclasses and typing: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Expense reconciliation CLI

A club treasurer needs consistent totals from differently formatted receipts.

**Data:** Create three CSV files with 60 fictional expenses, currencies and duplicates. Use a fixed seed and keep evaluation cases separate.

**Output:** A typed normalization package and discrepancy report.

**Effort:** 10h · Beginner → intermediate

- **OOP, dataclasses and typing:** Extend the project with OOP, dataclasses and typing in Expense reconciliation CLI. Adapt this focused lab to the project data: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.  Required concepts: Classes, Dataclasses, Type hints.
  - Deliverable: OOP, dataclasses and typing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A typed normalization package and discrepancy report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · OOP, dataclasses and typing: OOP, dataclasses and typing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect all seeded duplicates and reject mixed-currency totals.
- [ ] OOP, dataclasses and typing: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Duplicate file index

An archivist needs to inspect duplicate notes before cleaning a folder.

**Data:** Create 40 temporary text files including equal contents under different names. Use a fixed seed and keep evaluation cases separate.

**Output:** A hash-based index and read-only duplicate report.

**Effort:** 10h · Beginner → intermediate

- **OOP, dataclasses and typing:** Extend the project with OOP, dataclasses and typing in Duplicate file index. Adapt this focused lab to the project data: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.  Required concepts: Classes, Dataclasses, Type hints.
  - Deliverable: OOP, dataclasses and typing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A hash-based index and read-only duplicate report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · OOP, dataclasses and typing: OOP, dataclasses and typing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect content duplicates without treating equal filenames as equal content.
- [ ] OOP, dataclasses and typing: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Streaming sensor summaries

A hobbyist needs rolling summaries of a long sensor stream.

**Data:** Generate 100000 timestamp/value pairs lazily with fixed seed 42. Use a fixed seed and keep evaluation cases separate.

**Output:** A generator pipeline producing rolling means and invalid-reading counts.

**Effort:** 10h · Beginner → intermediate

- **OOP, dataclasses and typing:** Extend the project with OOP, dataclasses and typing in Streaming sensor summaries. Adapt this focused lab to the project data: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.  Required concepts: Classes, Dataclasses, Type hints.
  - Deliverable: OOP, dataclasses and typing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A generator pipeline producing rolling means and invalid-reading counts. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · OOP, dataclasses and typing: OOP, dataclasses and typing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match a small reference calculation while memory stays bounded by the window.
- [ ] OOP, dataclasses and typing: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Log file investigator

A developer needs to locate failed requests across rotated logs.

**Data:** Generate 120 JSONL events including invalid lines and repeated request IDs. Use a fixed seed and keep evaluation cases separate.

**Output:** A streaming CLI that groups failures by request without loading every file.

**Effort:** 10h · Beginner → intermediate

- **OOP, dataclasses and typing:** Extend the project with OOP, dataclasses and typing in Log file investigator. Adapt this focused lab to the project data: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.  Required concepts: Classes, Dataclasses, Type hints.
  - Deliverable: OOP, dataclasses and typing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A streaming CLI that groups failures by request without loading every file. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · OOP, dataclasses and typing: OOP, dataclasses and typing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject corrupt lines with line numbers; produce identical totals with a one-line buffer.
- [ ] OOP, dataclasses and typing: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Parser regression kit

A maintainer needs confidence when extending a command parser.

**Data:** Author 30 valid and invalid command strings, including quoted arguments. Use a fixed seed and keep evaluation cases separate.

**Output:** A parser package with parametrized tests and readable failures.

**Effort:** 10h · Beginner → intermediate

- **OOP, dataclasses and typing:** Extend the project with OOP, dataclasses and typing in Parser regression kit. Adapt this focused lab to the project data: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.  Required concepts: Classes, Dataclasses, Type hints.
  - Deliverable: OOP, dataclasses and typing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A parser package with parametrized tests and readable failures. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · OOP, dataclasses and typing: OOP, dataclasses and typing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Cover empty input, escaped quotes and unknown flags without crashing.
- [ ] OOP, dataclasses and typing: Represent dataset records and predictions with typed dataclasses; reject malformed external records explicitly and test serialization.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="python-iteration"></a>

### Iterators and generators

Process data incrementally instead of loading everything into memory.

**Priority:** Foundation · **Study:** 2h · **Practice:** 3h

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

### Duplicate file index

An archivist needs to inspect duplicate notes before cleaning a folder.

**Data:** Create 40 temporary text files including equal contents under different names. Use a fixed seed and keep evaluation cases separate.

**Output:** A hash-based index and read-only duplicate report.

**Effort:** 10h · Beginner → intermediate

- **Iterators and generators:** Implement Iterators and generators in Duplicate file index. Adapt this focused lab to the project data: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.  Required concepts: Iteration protocol, Generators, Batching.
  - Deliverable: Iterators and generators: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A hash-based index and read-only duplicate report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Iterators and generators: Iterators and generators: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect content duplicates without treating equal filenames as equal content.
- [ ] Iterators and generators: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Streaming sensor summaries

A hobbyist needs rolling summaries of a long sensor stream.

**Data:** Generate 100000 timestamp/value pairs lazily with fixed seed 42. Use a fixed seed and keep evaluation cases separate.

**Output:** A generator pipeline producing rolling means and invalid-reading counts.

**Effort:** 10h · Beginner → intermediate

- **Iterators and generators:** Implement Iterators and generators in Streaming sensor summaries. Adapt this focused lab to the project data: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.  Required concepts: Iteration protocol, Generators, Batching.
  - Deliverable: Iterators and generators: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A generator pipeline producing rolling means and invalid-reading counts. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Iterators and generators: Iterators and generators: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match a small reference calculation while memory stays bounded by the window.
- [ ] Iterators and generators: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Log file investigator

A developer needs to locate failed requests across rotated logs.

**Data:** Generate 120 JSONL events including invalid lines and repeated request IDs. Use a fixed seed and keep evaluation cases separate.

**Output:** A streaming CLI that groups failures by request without loading every file.

**Effort:** 10h · Beginner → intermediate

- **Iterators and generators:** Implement Iterators and generators in Log file investigator. Adapt this focused lab to the project data: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.  Required concepts: Iteration protocol, Generators, Batching.
  - Deliverable: Iterators and generators: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A streaming CLI that groups failures by request without loading every file. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Iterators and generators: Iterators and generators: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject corrupt lines with line numbers; produce identical totals with a one-line buffer.
- [ ] Iterators and generators: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Concurrent service sampler

An operator needs latency samples without overwhelming local services.

**Data:** Run three local stub endpoints with delays, errors and timeouts. Use a fixed seed and keep evaluation cases separate.

**Output:** An async sampler with bounded concurrency and a latency summary.

**Effort:** 10h · Beginner → intermediate

- **Iterators and generators:** Extend the project with Iterators and generators in Concurrent service sampler. Adapt this focused lab to the project data: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.  Required concepts: Iteration protocol, Generators, Batching.
  - Deliverable: Iterators and generators: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An async sampler with bounded concurrency and a latency summary. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Iterators and generators: Iterators and generators: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep concurrency at four or less and finish when one endpoint never responds.
- [ ] Iterators and generators: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Configuration doctor

A developer needs understandable errors before running a data job.

**Data:** Create ten JSON configurations with missing and mistyped settings. Use a fixed seed and keep evaluation cases separate.

**Output:** A validated configuration loader with redacted diagnostic messages.

**Effort:** 10h · Beginner → intermediate

- **Iterators and generators:** Extend the project with Iterators and generators in Configuration doctor. Adapt this focused lab to the project data: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.  Required concepts: Iteration protocol, Generators, Batching.
  - Deliverable: Iterators and generators: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A validated configuration loader with redacted diagnostic messages. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Iterators and generators: Iterators and generators: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject each invalid fixture and never print a seeded secret value.
- [ ] Iterators and generators: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Safe export writer

A data analyst needs exports that never replace a good file with a partial one.

**Data:** Create ten small records and inject a write failure halfway through export. Use a fixed seed and keep evaluation cases separate.

**Output:** A context-managed atomic JSON export utility.

**Effort:** 10h · Beginner → intermediate

- **Iterators and generators:** Extend the project with Iterators and generators in Safe export writer. Adapt this focused lab to the project data: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.  Required concepts: Iteration protocol, Generators, Batching.
  - Deliverable: Iterators and generators: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A context-managed atomic JSON export utility. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Iterators and generators: Iterators and generators: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The previous export survives a simulated failure and temporary handles close.
- [ ] Iterators and generators: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Expense reconciliation CLI

A club treasurer needs consistent totals from differently formatted receipts.

**Data:** Create three CSV files with 60 fictional expenses, currencies and duplicates. Use a fixed seed and keep evaluation cases separate.

**Output:** A typed normalization package and discrepancy report.

**Effort:** 10h · Beginner → intermediate

- **Iterators and generators:** Extend the project with Iterators and generators in Expense reconciliation CLI. Adapt this focused lab to the project data: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.  Required concepts: Iteration protocol, Generators, Batching.
  - Deliverable: Iterators and generators: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A typed normalization package and discrepancy report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Iterators and generators: Iterators and generators: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect all seeded duplicates and reject mixed-currency totals.
- [ ] Iterators and generators: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Pluggable text cleaner

An editor needs reusable transformations for inconsistent draft documents.

**Data:** Write 20 Markdown drafts with whitespace, Unicode and repeated headings. Use a fixed seed and keep evaluation cases separate.

**Output:** A package with composable transformations and a CLI entry point.

**Effort:** 10h · Beginner → intermediate

- **Iterators and generators:** Extend the project with Iterators and generators in Pluggable text cleaner. Adapt this focused lab to the project data: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.  Required concepts: Iteration protocol, Generators, Batching.
  - Deliverable: Iterators and generators: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A package with composable transformations and a CLI entry point. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Iterators and generators: Iterators and generators: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show idempotence and preserve non-ASCII text through every plugin.
- [ ] Iterators and generators: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Adaptive terminal quiz

A learner needs practice on concepts they repeatedly miss.

**Data:** Write 25 questions and a local JSON history with two fictional learners. Use a fixed seed and keep evaluation cases separate.

**Output:** A CLI quiz with deterministic scoring and weak-topic selection.

**Effort:** 10h · Beginner → intermediate

- **Iterators and generators:** Extend the project with Iterators and generators in Adaptive terminal quiz. Adapt this focused lab to the project data: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.  Required concepts: Iteration protocol, Generators, Batching.
  - Deliverable: Iterators and generators: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A CLI quiz with deterministic scoring and weak-topic selection. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Iterators and generators: Iterators and generators: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Resume an interrupted quiz and keep the two histories separate.
- [ ] Iterators and generators: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Parser regression kit

A maintainer needs confidence when extending a command parser.

**Data:** Author 30 valid and invalid command strings, including quoted arguments. Use a fixed seed and keep evaluation cases separate.

**Output:** A parser package with parametrized tests and readable failures.

**Effort:** 10h · Beginner → intermediate

- **Iterators and generators:** Extend the project with Iterators and generators in Parser regression kit. Adapt this focused lab to the project data: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.  Required concepts: Iteration protocol, Generators, Batching.
  - Deliverable: Iterators and generators: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A parser package with parametrized tests and readable failures. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Iterators and generators: Iterators and generators: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Cover empty input, escaped quotes and unknown flags without crashing.
- [ ] Iterators and generators: Stream a generated 10,000-record file into batches; assert the final partial batch and empty input, and show memory does not require retaining all records.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="python-async"></a>

### Async, logging, debugging and pytest

Make concurrent I/O observable and preserve confidence when changing behavior.

**Priority:** Foundation · **Study:** 3h · **Practice:** 4h

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
- Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check

**Completion checks**

- [ ] Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] Record elapsed time for sequential and concurrent simulated I/O using the same delays; explain why this does not measure CPU parallelism.
- [ ] Force one timeout and verify its task is cancelled, other task outcomes are recorded, and no background task remains running.

#### Ten project recommendations

### Concurrent service sampler

An operator needs latency samples without overwhelming local services.

**Data:** Run three local stub endpoints with delays, errors and timeouts. Use a fixed seed and keep evaluation cases separate.

**Output:** An async sampler with bounded concurrency and a latency summary.

**Effort:** 10h · Beginner → intermediate

- **Async, logging, debugging and pytest:** Implement Async, logging, debugging and pytest in Concurrent service sampler. Adapt this focused lab to the project data: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.  Required concepts: Async I/O, Logging and debugging, pytest.
  - Deliverable: Async, logging, debugging and pytest: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
  - Check: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; Record elapsed time for sequential and concurrent simulated I/O using the same delays; explain why this does not measure CPU parallelism.; Force one timeout and verify its task is cancelled, other task outcomes are recorded, and no background task remains running.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An async sampler with bounded concurrency and a latency summary. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Async, logging, debugging and pytest: Async, logging, debugging and pytest: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep concurrency at four or less and finish when one endpoint never responds.
- [ ] Async, logging, debugging and pytest: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; Record elapsed time for sequential and concurrent simulated I/O using the same delays; explain why this does not measure CPU parallelism.; Force one timeout and verify its task is cancelled, other task outcomes are recorded, and no background task remains running.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Configuration doctor

A developer needs understandable errors before running a data job.

**Data:** Create ten JSON configurations with missing and mistyped settings. Use a fixed seed and keep evaluation cases separate.

**Output:** A validated configuration loader with redacted diagnostic messages.

**Effort:** 10h · Beginner → intermediate

- **Async, logging, debugging and pytest:** Extend the project with Async, logging, debugging and pytest in Configuration doctor. Adapt this focused lab to the project data: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.  Required concepts: Async I/O, Logging and debugging, pytest.
  - Deliverable: Async, logging, debugging and pytest: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
  - Check: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; Record elapsed time for sequential and concurrent simulated I/O using the same delays; explain why this does not measure CPU parallelism.; Force one timeout and verify its task is cancelled, other task outcomes are recorded, and no background task remains running.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A validated configuration loader with redacted diagnostic messages. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Async, logging, debugging and pytest: Async, logging, debugging and pytest: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject each invalid fixture and never print a seeded secret value.
- [ ] Async, logging, debugging and pytest: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; Record elapsed time for sequential and concurrent simulated I/O using the same delays; explain why this does not measure CPU parallelism.; Force one timeout and verify its task is cancelled, other task outcomes are recorded, and no background task remains running.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Safe export writer

A data analyst needs exports that never replace a good file with a partial one.

**Data:** Create ten small records and inject a write failure halfway through export. Use a fixed seed and keep evaluation cases separate.

**Output:** A context-managed atomic JSON export utility.

**Effort:** 10h · Beginner → intermediate

- **Async, logging, debugging and pytest:** Extend the project with Async, logging, debugging and pytest in Safe export writer. Adapt this focused lab to the project data: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.  Required concepts: Async I/O, Logging and debugging, pytest.
  - Deliverable: Async, logging, debugging and pytest: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
  - Check: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; Record elapsed time for sequential and concurrent simulated I/O using the same delays; explain why this does not measure CPU parallelism.; Force one timeout and verify its task is cancelled, other task outcomes are recorded, and no background task remains running.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A context-managed atomic JSON export utility. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Async, logging, debugging and pytest: Async, logging, debugging and pytest: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The previous export survives a simulated failure and temporary handles close.
- [ ] Async, logging, debugging and pytest: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; Record elapsed time for sequential and concurrent simulated I/O using the same delays; explain why this does not measure CPU parallelism.; Force one timeout and verify its task is cancelled, other task outcomes are recorded, and no background task remains running.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Expense reconciliation CLI

A club treasurer needs consistent totals from differently formatted receipts.

**Data:** Create three CSV files with 60 fictional expenses, currencies and duplicates. Use a fixed seed and keep evaluation cases separate.

**Output:** A typed normalization package and discrepancy report.

**Effort:** 10h · Beginner → intermediate

- **Async, logging, debugging and pytest:** Extend the project with Async, logging, debugging and pytest in Expense reconciliation CLI. Adapt this focused lab to the project data: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.  Required concepts: Async I/O, Logging and debugging, pytest.
  - Deliverable: Async, logging, debugging and pytest: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
  - Check: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; Record elapsed time for sequential and concurrent simulated I/O using the same delays; explain why this does not measure CPU parallelism.; Force one timeout and verify its task is cancelled, other task outcomes are recorded, and no background task remains running.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A typed normalization package and discrepancy report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Async, logging, debugging and pytest: Async, logging, debugging and pytest: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect all seeded duplicates and reject mixed-currency totals.
- [ ] Async, logging, debugging and pytest: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; Record elapsed time for sequential and concurrent simulated I/O using the same delays; explain why this does not measure CPU parallelism.; Force one timeout and verify its task is cancelled, other task outcomes are recorded, and no background task remains running.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Duplicate file index

An archivist needs to inspect duplicate notes before cleaning a folder.

**Data:** Create 40 temporary text files including equal contents under different names. Use a fixed seed and keep evaluation cases separate.

**Output:** A hash-based index and read-only duplicate report.

**Effort:** 10h · Beginner → intermediate

- **Async, logging, debugging and pytest:** Extend the project with Async, logging, debugging and pytest in Duplicate file index. Adapt this focused lab to the project data: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.  Required concepts: Async I/O, Logging and debugging, pytest.
  - Deliverable: Async, logging, debugging and pytest: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
  - Check: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; Record elapsed time for sequential and concurrent simulated I/O using the same delays; explain why this does not measure CPU parallelism.; Force one timeout and verify its task is cancelled, other task outcomes are recorded, and no background task remains running.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A hash-based index and read-only duplicate report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Async, logging, debugging and pytest: Async, logging, debugging and pytest: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect content duplicates without treating equal filenames as equal content.
- [ ] Async, logging, debugging and pytest: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; Record elapsed time for sequential and concurrent simulated I/O using the same delays; explain why this does not measure CPU parallelism.; Force one timeout and verify its task is cancelled, other task outcomes are recorded, and no background task remains running.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Streaming sensor summaries

A hobbyist needs rolling summaries of a long sensor stream.

**Data:** Generate 100000 timestamp/value pairs lazily with fixed seed 42. Use a fixed seed and keep evaluation cases separate.

**Output:** A generator pipeline producing rolling means and invalid-reading counts.

**Effort:** 10h · Beginner → intermediate

- **Async, logging, debugging and pytest:** Extend the project with Async, logging, debugging and pytest in Streaming sensor summaries. Adapt this focused lab to the project data: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.  Required concepts: Async I/O, Logging and debugging, pytest.
  - Deliverable: Async, logging, debugging and pytest: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
  - Check: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; Record elapsed time for sequential and concurrent simulated I/O using the same delays; explain why this does not measure CPU parallelism.; Force one timeout and verify its task is cancelled, other task outcomes are recorded, and no background task remains running.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A generator pipeline producing rolling means and invalid-reading counts. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Async, logging, debugging and pytest: Async, logging, debugging and pytest: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match a small reference calculation while memory stays bounded by the window.
- [ ] Async, logging, debugging and pytest: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; Record elapsed time for sequential and concurrent simulated I/O using the same delays; explain why this does not measure CPU parallelism.; Force one timeout and verify its task is cancelled, other task outcomes are recorded, and no background task remains running.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Log file investigator

A developer needs to locate failed requests across rotated logs.

**Data:** Generate 120 JSONL events including invalid lines and repeated request IDs. Use a fixed seed and keep evaluation cases separate.

**Output:** A streaming CLI that groups failures by request without loading every file.

**Effort:** 10h · Beginner → intermediate

- **Async, logging, debugging and pytest:** Extend the project with Async, logging, debugging and pytest in Log file investigator. Adapt this focused lab to the project data: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.  Required concepts: Async I/O, Logging and debugging, pytest.
  - Deliverable: Async, logging, debugging and pytest: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
  - Check: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; Record elapsed time for sequential and concurrent simulated I/O using the same delays; explain why this does not measure CPU parallelism.; Force one timeout and verify its task is cancelled, other task outcomes are recorded, and no background task remains running.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A streaming CLI that groups failures by request without loading every file. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Async, logging, debugging and pytest: Async, logging, debugging and pytest: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject corrupt lines with line numbers; produce identical totals with a one-line buffer.
- [ ] Async, logging, debugging and pytest: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; Record elapsed time for sequential and concurrent simulated I/O using the same delays; explain why this does not measure CPU parallelism.; Force one timeout and verify its task is cancelled, other task outcomes are recorded, and no background task remains running.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Pluggable text cleaner

An editor needs reusable transformations for inconsistent draft documents.

**Data:** Write 20 Markdown drafts with whitespace, Unicode and repeated headings. Use a fixed seed and keep evaluation cases separate.

**Output:** A package with composable transformations and a CLI entry point.

**Effort:** 10h · Beginner → intermediate

- **Async, logging, debugging and pytest:** Extend the project with Async, logging, debugging and pytest in Pluggable text cleaner. Adapt this focused lab to the project data: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.  Required concepts: Async I/O, Logging and debugging, pytest.
  - Deliverable: Async, logging, debugging and pytest: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
  - Check: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; Record elapsed time for sequential and concurrent simulated I/O using the same delays; explain why this does not measure CPU parallelism.; Force one timeout and verify its task is cancelled, other task outcomes are recorded, and no background task remains running.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A package with composable transformations and a CLI entry point. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Async, logging, debugging and pytest: Async, logging, debugging and pytest: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show idempotence and preserve non-ASCII text through every plugin.
- [ ] Async, logging, debugging and pytest: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; Record elapsed time for sequential and concurrent simulated I/O using the same delays; explain why this does not measure CPU parallelism.; Force one timeout and verify its task is cancelled, other task outcomes are recorded, and no background task remains running.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Adaptive terminal quiz

A learner needs practice on concepts they repeatedly miss.

**Data:** Write 25 questions and a local JSON history with two fictional learners. Use a fixed seed and keep evaluation cases separate.

**Output:** A CLI quiz with deterministic scoring and weak-topic selection.

**Effort:** 10h · Beginner → intermediate

- **Async, logging, debugging and pytest:** Extend the project with Async, logging, debugging and pytest in Adaptive terminal quiz. Adapt this focused lab to the project data: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.  Required concepts: Async I/O, Logging and debugging, pytest.
  - Deliverable: Async, logging, debugging and pytest: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
  - Check: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; Record elapsed time for sequential and concurrent simulated I/O using the same delays; explain why this does not measure CPU parallelism.; Force one timeout and verify its task is cancelled, other task outcomes are recorded, and no background task remains running.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A CLI quiz with deterministic scoring and weak-topic selection. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Async, logging, debugging and pytest: Async, logging, debugging and pytest: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Resume an interrupted quiz and keep the two histories separate.
- [ ] Async, logging, debugging and pytest: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; Record elapsed time for sequential and concurrent simulated I/O using the same delays; explain why this does not measure CPU parallelism.; Force one timeout and verify its task is cancelled, other task outcomes are recorded, and no background task remains running.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Parser regression kit

A maintainer needs confidence when extending a command parser.

**Data:** Author 30 valid and invalid command strings, including quoted arguments. Use a fixed seed and keep evaluation cases separate.

**Output:** A parser package with parametrized tests and readable failures.

**Effort:** 10h · Beginner → intermediate

- **Async, logging, debugging and pytest:** Extend the project with Async, logging, debugging and pytest in Parser regression kit. Adapt this focused lab to the project data: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.  Required concepts: Async I/O, Logging and debugging, pytest.
  - Deliverable: Async, logging, debugging and pytest: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
  - Check: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; Record elapsed time for sequential and concurrent simulated I/O using the same delays; explain why this does not measure CPU parallelism.; Force one timeout and verify its task is cancelled, other task outcomes are recorded, and no background task remains running.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A parser package with parametrized tests and readable failures. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Async, logging, debugging and pytest: Async, logging, debugging and pytest: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Cover empty input, escaped quotes and unknown flags without crashing.
- [ ] Async, logging, debugging and pytest: Run three simulated I/O tasks concurrently with timeouts, log their outcomes and write parametrized pytest checks for success and one timeout.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; Record elapsed time for sequential and concurrent simulated I/O using the same delays; explain why this does not measure CPU parallelism.; Force one timeout and verify its task is cancelled, other task outcomes are recorded, and no background task remains running.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Practical Python details

<a id="python-resources-context"></a>

### Context managers, paths and safe file operations

Handle files and resources predictably when an AI pipeline stops halfway through an operation.

**Priority:** Foundation · **Study:** 3h · **Practice:** 4h

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

### Safe export writer

A data analyst needs exports that never replace a good file with a partial one.

**Data:** Create ten small records and inject a write failure halfway through export. Use a fixed seed and keep evaluation cases separate.

**Output:** A context-managed atomic JSON export utility.

**Effort:** 10h · Beginner → intermediate

- **Context managers, paths and safe file operations:** Implement Context managers, paths and safe file operations in Safe export writer. Adapt this focused lab to the project data: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.  Required concepts: Context manager lifecycle, Path resolution, Encoding and newline contracts, Atomic replacement, Bounded input handling.
  - Deliverable: Context managers, paths and safe file operations: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A context-managed atomic JSON export utility. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Context managers, paths and safe file operations: Context managers, paths and safe file operations: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The previous export survives a simulated failure and temporary handles close.
- [ ] Context managers, paths and safe file operations: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Concurrent service sampler

An operator needs latency samples without overwhelming local services.

**Data:** Run three local stub endpoints with delays, errors and timeouts. Use a fixed seed and keep evaluation cases separate.

**Output:** An async sampler with bounded concurrency and a latency summary.

**Effort:** 10h · Beginner → intermediate

- **Context managers, paths and safe file operations:** Extend the project with Context managers, paths and safe file operations in Concurrent service sampler. Adapt this focused lab to the project data: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.  Required concepts: Context manager lifecycle, Path resolution, Encoding and newline contracts, Atomic replacement, Bounded input handling.
  - Deliverable: Context managers, paths and safe file operations: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An async sampler with bounded concurrency and a latency summary. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Context managers, paths and safe file operations: Context managers, paths and safe file operations: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep concurrency at four or less and finish when one endpoint never responds.
- [ ] Context managers, paths and safe file operations: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Configuration doctor

A developer needs understandable errors before running a data job.

**Data:** Create ten JSON configurations with missing and mistyped settings. Use a fixed seed and keep evaluation cases separate.

**Output:** A validated configuration loader with redacted diagnostic messages.

**Effort:** 10h · Beginner → intermediate

- **Context managers, paths and safe file operations:** Extend the project with Context managers, paths and safe file operations in Configuration doctor. Adapt this focused lab to the project data: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.  Required concepts: Context manager lifecycle, Path resolution, Encoding and newline contracts, Atomic replacement, Bounded input handling.
  - Deliverable: Context managers, paths and safe file operations: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A validated configuration loader with redacted diagnostic messages. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Context managers, paths and safe file operations: Context managers, paths and safe file operations: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject each invalid fixture and never print a seeded secret value.
- [ ] Context managers, paths and safe file operations: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Expense reconciliation CLI

A club treasurer needs consistent totals from differently formatted receipts.

**Data:** Create three CSV files with 60 fictional expenses, currencies and duplicates. Use a fixed seed and keep evaluation cases separate.

**Output:** A typed normalization package and discrepancy report.

**Effort:** 10h · Beginner → intermediate

- **Context managers, paths and safe file operations:** Extend the project with Context managers, paths and safe file operations in Expense reconciliation CLI. Adapt this focused lab to the project data: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.  Required concepts: Context manager lifecycle, Path resolution, Encoding and newline contracts, Atomic replacement, Bounded input handling.
  - Deliverable: Context managers, paths and safe file operations: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A typed normalization package and discrepancy report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Context managers, paths and safe file operations: Context managers, paths and safe file operations: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect all seeded duplicates and reject mixed-currency totals.
- [ ] Context managers, paths and safe file operations: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Duplicate file index

An archivist needs to inspect duplicate notes before cleaning a folder.

**Data:** Create 40 temporary text files including equal contents under different names. Use a fixed seed and keep evaluation cases separate.

**Output:** A hash-based index and read-only duplicate report.

**Effort:** 10h · Beginner → intermediate

- **Context managers, paths and safe file operations:** Extend the project with Context managers, paths and safe file operations in Duplicate file index. Adapt this focused lab to the project data: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.  Required concepts: Context manager lifecycle, Path resolution, Encoding and newline contracts, Atomic replacement, Bounded input handling.
  - Deliverable: Context managers, paths and safe file operations: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A hash-based index and read-only duplicate report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Context managers, paths and safe file operations: Context managers, paths and safe file operations: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect content duplicates without treating equal filenames as equal content.
- [ ] Context managers, paths and safe file operations: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Streaming sensor summaries

A hobbyist needs rolling summaries of a long sensor stream.

**Data:** Generate 100000 timestamp/value pairs lazily with fixed seed 42. Use a fixed seed and keep evaluation cases separate.

**Output:** A generator pipeline producing rolling means and invalid-reading counts.

**Effort:** 10h · Beginner → intermediate

- **Context managers, paths and safe file operations:** Extend the project with Context managers, paths and safe file operations in Streaming sensor summaries. Adapt this focused lab to the project data: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.  Required concepts: Context manager lifecycle, Path resolution, Encoding and newline contracts, Atomic replacement, Bounded input handling.
  - Deliverable: Context managers, paths and safe file operations: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A generator pipeline producing rolling means and invalid-reading counts. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Context managers, paths and safe file operations: Context managers, paths and safe file operations: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match a small reference calculation while memory stays bounded by the window.
- [ ] Context managers, paths and safe file operations: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Log file investigator

A developer needs to locate failed requests across rotated logs.

**Data:** Generate 120 JSONL events including invalid lines and repeated request IDs. Use a fixed seed and keep evaluation cases separate.

**Output:** A streaming CLI that groups failures by request without loading every file.

**Effort:** 10h · Beginner → intermediate

- **Context managers, paths and safe file operations:** Extend the project with Context managers, paths and safe file operations in Log file investigator. Adapt this focused lab to the project data: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.  Required concepts: Context manager lifecycle, Path resolution, Encoding and newline contracts, Atomic replacement, Bounded input handling.
  - Deliverable: Context managers, paths and safe file operations: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A streaming CLI that groups failures by request without loading every file. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Context managers, paths and safe file operations: Context managers, paths and safe file operations: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject corrupt lines with line numbers; produce identical totals with a one-line buffer.
- [ ] Context managers, paths and safe file operations: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Pluggable text cleaner

An editor needs reusable transformations for inconsistent draft documents.

**Data:** Write 20 Markdown drafts with whitespace, Unicode and repeated headings. Use a fixed seed and keep evaluation cases separate.

**Output:** A package with composable transformations and a CLI entry point.

**Effort:** 10h · Beginner → intermediate

- **Context managers, paths and safe file operations:** Extend the project with Context managers, paths and safe file operations in Pluggable text cleaner. Adapt this focused lab to the project data: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.  Required concepts: Context manager lifecycle, Path resolution, Encoding and newline contracts, Atomic replacement, Bounded input handling.
  - Deliverable: Context managers, paths and safe file operations: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A package with composable transformations and a CLI entry point. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Context managers, paths and safe file operations: Context managers, paths and safe file operations: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show idempotence and preserve non-ASCII text through every plugin.
- [ ] Context managers, paths and safe file operations: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Adaptive terminal quiz

A learner needs practice on concepts they repeatedly miss.

**Data:** Write 25 questions and a local JSON history with two fictional learners. Use a fixed seed and keep evaluation cases separate.

**Output:** A CLI quiz with deterministic scoring and weak-topic selection.

**Effort:** 10h · Beginner → intermediate

- **Context managers, paths and safe file operations:** Extend the project with Context managers, paths and safe file operations in Adaptive terminal quiz. Adapt this focused lab to the project data: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.  Required concepts: Context manager lifecycle, Path resolution, Encoding and newline contracts, Atomic replacement, Bounded input handling.
  - Deliverable: Context managers, paths and safe file operations: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A CLI quiz with deterministic scoring and weak-topic selection. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Context managers, paths and safe file operations: Context managers, paths and safe file operations: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Resume an interrupted quiz and keep the two histories separate.
- [ ] Context managers, paths and safe file operations: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Parser regression kit

A maintainer needs confidence when extending a command parser.

**Data:** Author 30 valid and invalid command strings, including quoted arguments. Use a fixed seed and keep evaluation cases separate.

**Output:** A parser package with parametrized tests and readable failures.

**Effort:** 10h · Beginner → intermediate

- **Context managers, paths and safe file operations:** Extend the project with Context managers, paths and safe file operations in Parser regression kit. Adapt this focused lab to the project data: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.  Required concepts: Context manager lifecycle, Path resolution, Encoding and newline contracts, Atomic replacement, Bounded input handling.
  - Deliverable: Context managers, paths and safe file operations: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A parser package with parametrized tests and readable failures. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Context managers, paths and safe file operations: Context managers, paths and safe file operations: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Cover empty input, escaped quotes and unknown flags without crashing.
- [ ] Context managers, paths and safe file operations: Build a CPU-only JSON configuration loader/writer using pathlib and context managers. Test Unicode, missing files, malformed JSON and failed writes; keep the last valid file intact when serialisation fails.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="python-async-testing"></a>

### Async cancellation, timeouts and test doubles

Make concurrent network-style work predictable and testable without requiring a live paid API.

**Priority:** Foundation · **Study:** 3h · **Practice:** 4h

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

### Concurrent service sampler

An operator needs latency samples without overwhelming local services.

**Data:** Run three local stub endpoints with delays, errors and timeouts. Use a fixed seed and keep evaluation cases separate.

**Output:** An async sampler with bounded concurrency and a latency summary.

**Effort:** 10h · Beginner → intermediate

- **Async cancellation, timeouts and test doubles:** Implement Async cancellation, timeouts and test doubles in Concurrent service sampler. Adapt this focused lab to the project data: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.  Required concepts: Coroutine versus blocking work, Timeout boundaries, Cancellation cleanup, Bounded concurrency, Dependency fakes.
  - Deliverable: Async cancellation, timeouts and test doubles: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An async sampler with bounded concurrency and a latency summary. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Async cancellation, timeouts and test doubles: Async cancellation, timeouts and test doubles: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep concurrency at four or less and finish when one endpoint never responds.
- [ ] Async cancellation, timeouts and test doubles: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Configuration doctor

A developer needs understandable errors before running a data job.

**Data:** Create ten JSON configurations with missing and mistyped settings. Use a fixed seed and keep evaluation cases separate.

**Output:** A validated configuration loader with redacted diagnostic messages.

**Effort:** 10h · Beginner → intermediate

- **Async cancellation, timeouts and test doubles:** Extend the project with Async cancellation, timeouts and test doubles in Configuration doctor. Adapt this focused lab to the project data: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.  Required concepts: Coroutine versus blocking work, Timeout boundaries, Cancellation cleanup, Bounded concurrency, Dependency fakes.
  - Deliverable: Async cancellation, timeouts and test doubles: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A validated configuration loader with redacted diagnostic messages. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Async cancellation, timeouts and test doubles: Async cancellation, timeouts and test doubles: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject each invalid fixture and never print a seeded secret value.
- [ ] Async cancellation, timeouts and test doubles: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Safe export writer

A data analyst needs exports that never replace a good file with a partial one.

**Data:** Create ten small records and inject a write failure halfway through export. Use a fixed seed and keep evaluation cases separate.

**Output:** A context-managed atomic JSON export utility.

**Effort:** 10h · Beginner → intermediate

- **Async cancellation, timeouts and test doubles:** Extend the project with Async cancellation, timeouts and test doubles in Safe export writer. Adapt this focused lab to the project data: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.  Required concepts: Coroutine versus blocking work, Timeout boundaries, Cancellation cleanup, Bounded concurrency, Dependency fakes.
  - Deliverable: Async cancellation, timeouts and test doubles: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A context-managed atomic JSON export utility. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Async cancellation, timeouts and test doubles: Async cancellation, timeouts and test doubles: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The previous export survives a simulated failure and temporary handles close.
- [ ] Async cancellation, timeouts and test doubles: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Expense reconciliation CLI

A club treasurer needs consistent totals from differently formatted receipts.

**Data:** Create three CSV files with 60 fictional expenses, currencies and duplicates. Use a fixed seed and keep evaluation cases separate.

**Output:** A typed normalization package and discrepancy report.

**Effort:** 10h · Beginner → intermediate

- **Async cancellation, timeouts and test doubles:** Extend the project with Async cancellation, timeouts and test doubles in Expense reconciliation CLI. Adapt this focused lab to the project data: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.  Required concepts: Coroutine versus blocking work, Timeout boundaries, Cancellation cleanup, Bounded concurrency, Dependency fakes.
  - Deliverable: Async cancellation, timeouts and test doubles: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A typed normalization package and discrepancy report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Async cancellation, timeouts and test doubles: Async cancellation, timeouts and test doubles: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect all seeded duplicates and reject mixed-currency totals.
- [ ] Async cancellation, timeouts and test doubles: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Duplicate file index

An archivist needs to inspect duplicate notes before cleaning a folder.

**Data:** Create 40 temporary text files including equal contents under different names. Use a fixed seed and keep evaluation cases separate.

**Output:** A hash-based index and read-only duplicate report.

**Effort:** 10h · Beginner → intermediate

- **Async cancellation, timeouts and test doubles:** Extend the project with Async cancellation, timeouts and test doubles in Duplicate file index. Adapt this focused lab to the project data: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.  Required concepts: Coroutine versus blocking work, Timeout boundaries, Cancellation cleanup, Bounded concurrency, Dependency fakes.
  - Deliverable: Async cancellation, timeouts and test doubles: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A hash-based index and read-only duplicate report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Async cancellation, timeouts and test doubles: Async cancellation, timeouts and test doubles: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect content duplicates without treating equal filenames as equal content.
- [ ] Async cancellation, timeouts and test doubles: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Streaming sensor summaries

A hobbyist needs rolling summaries of a long sensor stream.

**Data:** Generate 100000 timestamp/value pairs lazily with fixed seed 42. Use a fixed seed and keep evaluation cases separate.

**Output:** A generator pipeline producing rolling means and invalid-reading counts.

**Effort:** 10h · Beginner → intermediate

- **Async cancellation, timeouts and test doubles:** Extend the project with Async cancellation, timeouts and test doubles in Streaming sensor summaries. Adapt this focused lab to the project data: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.  Required concepts: Coroutine versus blocking work, Timeout boundaries, Cancellation cleanup, Bounded concurrency, Dependency fakes.
  - Deliverable: Async cancellation, timeouts and test doubles: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A generator pipeline producing rolling means and invalid-reading counts. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Async cancellation, timeouts and test doubles: Async cancellation, timeouts and test doubles: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match a small reference calculation while memory stays bounded by the window.
- [ ] Async cancellation, timeouts and test doubles: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Log file investigator

A developer needs to locate failed requests across rotated logs.

**Data:** Generate 120 JSONL events including invalid lines and repeated request IDs. Use a fixed seed and keep evaluation cases separate.

**Output:** A streaming CLI that groups failures by request without loading every file.

**Effort:** 10h · Beginner → intermediate

- **Async cancellation, timeouts and test doubles:** Extend the project with Async cancellation, timeouts and test doubles in Log file investigator. Adapt this focused lab to the project data: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.  Required concepts: Coroutine versus blocking work, Timeout boundaries, Cancellation cleanup, Bounded concurrency, Dependency fakes.
  - Deliverable: Async cancellation, timeouts and test doubles: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A streaming CLI that groups failures by request without loading every file. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Async cancellation, timeouts and test doubles: Async cancellation, timeouts and test doubles: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject corrupt lines with line numbers; produce identical totals with a one-line buffer.
- [ ] Async cancellation, timeouts and test doubles: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Pluggable text cleaner

An editor needs reusable transformations for inconsistent draft documents.

**Data:** Write 20 Markdown drafts with whitespace, Unicode and repeated headings. Use a fixed seed and keep evaluation cases separate.

**Output:** A package with composable transformations and a CLI entry point.

**Effort:** 10h · Beginner → intermediate

- **Async cancellation, timeouts and test doubles:** Extend the project with Async cancellation, timeouts and test doubles in Pluggable text cleaner. Adapt this focused lab to the project data: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.  Required concepts: Coroutine versus blocking work, Timeout boundaries, Cancellation cleanup, Bounded concurrency, Dependency fakes.
  - Deliverable: Async cancellation, timeouts and test doubles: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A package with composable transformations and a CLI entry point. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Async cancellation, timeouts and test doubles: Async cancellation, timeouts and test doubles: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show idempotence and preserve non-ASCII text through every plugin.
- [ ] Async cancellation, timeouts and test doubles: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Adaptive terminal quiz

A learner needs practice on concepts they repeatedly miss.

**Data:** Write 25 questions and a local JSON history with two fictional learners. Use a fixed seed and keep evaluation cases separate.

**Output:** A CLI quiz with deterministic scoring and weak-topic selection.

**Effort:** 10h · Beginner → intermediate

- **Async cancellation, timeouts and test doubles:** Extend the project with Async cancellation, timeouts and test doubles in Adaptive terminal quiz. Adapt this focused lab to the project data: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.  Required concepts: Coroutine versus blocking work, Timeout boundaries, Cancellation cleanup, Bounded concurrency, Dependency fakes.
  - Deliverable: Async cancellation, timeouts and test doubles: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A CLI quiz with deterministic scoring and weak-topic selection. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Async cancellation, timeouts and test doubles: Async cancellation, timeouts and test doubles: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Resume an interrupted quiz and keep the two histories separate.
- [ ] Async cancellation, timeouts and test doubles: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Parser regression kit

A maintainer needs confidence when extending a command parser.

**Data:** Author 30 valid and invalid command strings, including quoted arguments. Use a fixed seed and keep evaluation cases separate.

**Output:** A parser package with parametrized tests and readable failures.

**Effort:** 10h · Beginner → intermediate

- **Async cancellation, timeouts and test doubles:** Extend the project with Async cancellation, timeouts and test doubles in Parser regression kit. Adapt this focused lab to the project data: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.  Required concepts: Coroutine versus blocking work, Timeout boundaries, Cancellation cleanup, Bounded concurrency, Dependency fakes.
  - Deliverable: Async cancellation, timeouts and test doubles: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A parser package with parametrized tests and readable failures. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Async cancellation, timeouts and test doubles: Async cancellation, timeouts and test doubles: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Cover empty input, escaped quotes and unknown flags without crashing.
- [ ] Async cancellation, timeouts and test doubles: Write an asynchronous fake-inference runner with timeouts, cancellation and a three-worker limit. Use pytest to cover successful responses, invalid JSON and cancellation cleanup without any network service.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Mutability, copying, scope and function contracts

<a id="python-mutation-scope"></a>

### Mutability, copying, scope and function contracts

Mutability, copying, scope and function contracts helps you make explainable engineering decisions and test failure cases. Build the experiment below before relying on the concept in an AI system.

**Priority:** Foundation · **Study:** 4h · **Practice:** 5h

**Prerequisites:** [Control flow and functions](python.md#python-control) Navigation is unrestricted.

#### Concepts

- [ ] **Object identity:** Two names may reference one mutable object; assignment does not copy its contents.
  - Example: Assign b=a for a list, append through b and compare a with a copied list.
  - Videos:
    - [CS50P 0 — Functions and variables](https://www.youtube.com/watch?v=JP7ITIXGpHk) · Harvard CS50 · David Malan · University lecture
      - Explains: Values, types, functions, parameters and return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on object identity. Then reproduce the lesson example: Assign b=a for a list, append through b and compare a with a copied list.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/0/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on object identity. Then reproduce the lesson example: Assign b=a for a list, append through b and compare a with a copied list.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Shallow versus deep copy:** A shallow copy creates an outer container but preserves references to nested objects.
  - Example: Copy a list of dictionaries and change a nested tag list.
  - Videos:
    - [CS50P 0 — Functions and variables](https://www.youtube.com/watch?v=JP7ITIXGpHk) · Harvard CS50 · David Malan · University lecture
      - Explains: Values, types, functions, parameters and return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on shallow versus deep copy. Then reproduce the lesson example: Copy a list of dictionaries and change a nested tag list.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/0/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on shallow versus deep copy. Then reproduce the lesson example: Copy a list of dictionaries and change a nested tag list.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Mutable defaults:** Default argument objects are created at function definition time and may survive multiple calls.
  - Example: Compare a default list parameter with a None sentinel that constructs a fresh list.
  - Videos:
    - [CS50P 0 — Functions and variables](https://www.youtube.com/watch?v=JP7ITIXGpHk) · Harvard CS50 · David Malan · University lecture
      - Explains: Values, types, functions, parameters and return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on mutable defaults. Then reproduce the lesson example: Compare a default list parameter with a None sentinel that constructs a fresh list.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/0/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on mutable defaults. Then reproduce the lesson example: Compare a default list parameter with a None sentinel that constructs a fresh list.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Local scope and closures:** Name lookup follows lexical scope; rebinding differs from mutating an existing object.
  - Example: Return two counter closures and inspect whether their captured state is independent.
  - Videos:
    - [CS50P 0 — Functions and variables](https://www.youtube.com/watch?v=JP7ITIXGpHk) · Harvard CS50 · David Malan · University lecture
      - Explains: Values, types, functions, parameters and return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on local scope and closures. Then reproduce the lesson example: Return two counter closures and inspect whether their captured state is independent.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/0/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on local scope and closures. Then reproduce the lesson example: Return two counter closures and inspect whether their captured state is independent.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Pure function contracts:** A pure transformation returns results without changing its inputs, simplifying testing and reuse.
  - Example: Normalize a record while asserting the original dictionary is unchanged.
  - Videos:
    - [CS50P 0 — Functions and variables](https://www.youtube.com/watch?v=JP7ITIXGpHk) · Harvard CS50 · David Malan · University lecture
      - Explains: Values, types, functions, parameters and return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on pure function contracts. Then reproduce the lesson example: Normalize a record while asserting the original dictionary is unchanged.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/0/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on pure function contracts. Then reproduce the lesson example: Normalize a record while asserting the original dictionary is unchanged.
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

1. [Official reference: Mutability, copying, scope and function contracts](https://docs.python.org/3/tutorial/classes.html) — Free reading; no registration required. Use the local CPU exercise; optional hosted services and downloads are not required..
2. [CS50P: conditionals](https://cs50.harvard.edu/python/2022/weeks/1/) — Free OpenCourseWare; account optional for submissions. Certificates on external platforms may cost money.

#### Lab: Mutability, copying, scope and function contracts

Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.

**Deliverables**

- Runnable CPU notebook or script with deterministic fixtures
- Measured outputs, failure cases and a README explaining decisions

**Completion checks**

- [ ] Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.
- [ ] Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

#### Ten project recommendations

### Concurrent service sampler

An operator needs latency samples without overwhelming local services.

**Data:** Run three local stub endpoints with delays, errors and timeouts. Use a fixed seed and keep evaluation cases separate.

**Output:** An async sampler with bounded concurrency and a latency summary.

**Effort:** 10h · Beginner → intermediate

- **Mutability, copying, scope and function contracts:** Extend the project with Mutability, copying, scope and function contracts in Concurrent service sampler. Adapt this focused lab to the project data: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.  Required concepts: Object identity, Shallow versus deep copy, Mutable defaults, Local scope and closures, Pure function contracts.
  - Deliverable: Mutability, copying, scope and function contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An async sampler with bounded concurrency and a latency summary. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Mutability, copying, scope and function contracts: Mutability, copying, scope and function contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep concurrency at four or less and finish when one endpoint never responds.
- [ ] Mutability, copying, scope and function contracts: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Configuration doctor

A developer needs understandable errors before running a data job.

**Data:** Create ten JSON configurations with missing and mistyped settings. Use a fixed seed and keep evaluation cases separate.

**Output:** A validated configuration loader with redacted diagnostic messages.

**Effort:** 10h · Beginner → intermediate

- **Mutability, copying, scope and function contracts:** Extend the project with Mutability, copying, scope and function contracts in Configuration doctor. Adapt this focused lab to the project data: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.  Required concepts: Object identity, Shallow versus deep copy, Mutable defaults, Local scope and closures, Pure function contracts.
  - Deliverable: Mutability, copying, scope and function contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A validated configuration loader with redacted diagnostic messages. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Mutability, copying, scope and function contracts: Mutability, copying, scope and function contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject each invalid fixture and never print a seeded secret value.
- [ ] Mutability, copying, scope and function contracts: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Safe export writer

A data analyst needs exports that never replace a good file with a partial one.

**Data:** Create ten small records and inject a write failure halfway through export. Use a fixed seed and keep evaluation cases separate.

**Output:** A context-managed atomic JSON export utility.

**Effort:** 10h · Beginner → intermediate

- **Mutability, copying, scope and function contracts:** Extend the project with Mutability, copying, scope and function contracts in Safe export writer. Adapt this focused lab to the project data: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.  Required concepts: Object identity, Shallow versus deep copy, Mutable defaults, Local scope and closures, Pure function contracts.
  - Deliverable: Mutability, copying, scope and function contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A context-managed atomic JSON export utility. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Mutability, copying, scope and function contracts: Mutability, copying, scope and function contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The previous export survives a simulated failure and temporary handles close.
- [ ] Mutability, copying, scope and function contracts: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Expense reconciliation CLI

A club treasurer needs consistent totals from differently formatted receipts.

**Data:** Create three CSV files with 60 fictional expenses, currencies and duplicates. Use a fixed seed and keep evaluation cases separate.

**Output:** A typed normalization package and discrepancy report.

**Effort:** 10h · Beginner → intermediate

- **Mutability, copying, scope and function contracts:** Extend the project with Mutability, copying, scope and function contracts in Expense reconciliation CLI. Adapt this focused lab to the project data: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.  Required concepts: Object identity, Shallow versus deep copy, Mutable defaults, Local scope and closures, Pure function contracts.
  - Deliverable: Mutability, copying, scope and function contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A typed normalization package and discrepancy report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Mutability, copying, scope and function contracts: Mutability, copying, scope and function contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect all seeded duplicates and reject mixed-currency totals.
- [ ] Mutability, copying, scope and function contracts: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Duplicate file index

An archivist needs to inspect duplicate notes before cleaning a folder.

**Data:** Create 40 temporary text files including equal contents under different names. Use a fixed seed and keep evaluation cases separate.

**Output:** A hash-based index and read-only duplicate report.

**Effort:** 10h · Beginner → intermediate

- **Mutability, copying, scope and function contracts:** Extend the project with Mutability, copying, scope and function contracts in Duplicate file index. Adapt this focused lab to the project data: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.  Required concepts: Object identity, Shallow versus deep copy, Mutable defaults, Local scope and closures, Pure function contracts.
  - Deliverable: Mutability, copying, scope and function contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A hash-based index and read-only duplicate report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Mutability, copying, scope and function contracts: Mutability, copying, scope and function contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect content duplicates without treating equal filenames as equal content.
- [ ] Mutability, copying, scope and function contracts: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Streaming sensor summaries

A hobbyist needs rolling summaries of a long sensor stream.

**Data:** Generate 100000 timestamp/value pairs lazily with fixed seed 42. Use a fixed seed and keep evaluation cases separate.

**Output:** A generator pipeline producing rolling means and invalid-reading counts.

**Effort:** 10h · Beginner → intermediate

- **Mutability, copying, scope and function contracts:** Extend the project with Mutability, copying, scope and function contracts in Streaming sensor summaries. Adapt this focused lab to the project data: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.  Required concepts: Object identity, Shallow versus deep copy, Mutable defaults, Local scope and closures, Pure function contracts.
  - Deliverable: Mutability, copying, scope and function contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A generator pipeline producing rolling means and invalid-reading counts. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Mutability, copying, scope and function contracts: Mutability, copying, scope and function contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match a small reference calculation while memory stays bounded by the window.
- [ ] Mutability, copying, scope and function contracts: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Log file investigator

A developer needs to locate failed requests across rotated logs.

**Data:** Generate 120 JSONL events including invalid lines and repeated request IDs. Use a fixed seed and keep evaluation cases separate.

**Output:** A streaming CLI that groups failures by request without loading every file.

**Effort:** 10h · Beginner → intermediate

- **Mutability, copying, scope and function contracts:** Extend the project with Mutability, copying, scope and function contracts in Log file investigator. Adapt this focused lab to the project data: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.  Required concepts: Object identity, Shallow versus deep copy, Mutable defaults, Local scope and closures, Pure function contracts.
  - Deliverable: Mutability, copying, scope and function contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A streaming CLI that groups failures by request without loading every file. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Mutability, copying, scope and function contracts: Mutability, copying, scope and function contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject corrupt lines with line numbers; produce identical totals with a one-line buffer.
- [ ] Mutability, copying, scope and function contracts: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Pluggable text cleaner

An editor needs reusable transformations for inconsistent draft documents.

**Data:** Write 20 Markdown drafts with whitespace, Unicode and repeated headings. Use a fixed seed and keep evaluation cases separate.

**Output:** A package with composable transformations and a CLI entry point.

**Effort:** 10h · Beginner → intermediate

- **Mutability, copying, scope and function contracts:** Extend the project with Mutability, copying, scope and function contracts in Pluggable text cleaner. Adapt this focused lab to the project data: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.  Required concepts: Object identity, Shallow versus deep copy, Mutable defaults, Local scope and closures, Pure function contracts.
  - Deliverable: Mutability, copying, scope and function contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A package with composable transformations and a CLI entry point. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Mutability, copying, scope and function contracts: Mutability, copying, scope and function contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show idempotence and preserve non-ASCII text through every plugin.
- [ ] Mutability, copying, scope and function contracts: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Adaptive terminal quiz

A learner needs practice on concepts they repeatedly miss.

**Data:** Write 25 questions and a local JSON history with two fictional learners. Use a fixed seed and keep evaluation cases separate.

**Output:** A CLI quiz with deterministic scoring and weak-topic selection.

**Effort:** 10h · Beginner → intermediate

- **Mutability, copying, scope and function contracts:** Extend the project with Mutability, copying, scope and function contracts in Adaptive terminal quiz. Adapt this focused lab to the project data: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.  Required concepts: Object identity, Shallow versus deep copy, Mutable defaults, Local scope and closures, Pure function contracts.
  - Deliverable: Mutability, copying, scope and function contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A CLI quiz with deterministic scoring and weak-topic selection. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Mutability, copying, scope and function contracts: Mutability, copying, scope and function contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Resume an interrupted quiz and keep the two histories separate.
- [ ] Mutability, copying, scope and function contracts: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Parser regression kit

A maintainer needs confidence when extending a command parser.

**Data:** Author 30 valid and invalid command strings, including quoted arguments. Use a fixed seed and keep evaluation cases separate.

**Output:** A parser package with parametrized tests and readable failures.

**Effort:** 10h · Beginner → intermediate

- **Mutability, copying, scope and function contracts:** Extend the project with Mutability, copying, scope and function contracts in Parser regression kit. Adapt this focused lab to the project data: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.  Required concepts: Object identity, Shallow versus deep copy, Mutable defaults, Local scope and closures, Pure function contracts.
  - Deliverable: Mutability, copying, scope and function contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A parser package with parametrized tests and readable failures. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Mutability, copying, scope and function contracts: Mutability, copying, scope and function contracts: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Cover empty input, escaped quotes and unknown flags without crashing.
- [ ] Mutability, copying, scope and function contracts: Build a pure record-normalization function and a deliberately mutating version. Test shared nested lists, mutable defaults, Unicode strings and invalid values; explain which objects change and why.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Stage checkpoint

<a id="checkpoint-python"></a>

### Python reliability checkpoint

Demonstrate readiness through a reproducible practical handoff. Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.

**Priority:** Foundation · **Study:** 1h · **Practice:** 6h

**Prerequisites:** [Types and collections](python.md#python-values), [Control flow and functions](python.md#python-control), [Files, JSON and exceptions](python.md#python-files), [Modules, environments and dependencies](python.md#python-modules), [OOP, dataclasses and typing](python.md#python-objects), [Iterators and generators](python.md#python-iteration), [Async, logging, debugging and pytest](python.md#python-async), [Context managers, paths and safe file operations](python.md#python-resources-context), [Async cancellation, timeouts and test doubles](python.md#python-async-testing), [Mutability, copying, scope and function contracts](python.md#python-mutation-scope) Navigation is unrestricted.

#### Concepts

- [ ] **Define the success contract:** Write observable checks before implementation so success is not just a plausible demonstration.
  - Example: Turn this task into a numbered acceptance checklist: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.
  - Videos:
    - [CS50P 0 — Functions and variables](https://www.youtube.com/watch?v=JP7ITIXGpHk) · Harvard CS50 · David Malan · University lecture
      - Explains: Values, types, functions, parameters and return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on define the success contract. Then reproduce the lesson example: Turn this task into a numbered acceptance checklist: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/0/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on define the success contract. Then reproduce the lesson example: Turn this task into a numbered acceptance checklist: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Reproduce the baseline:** Keep a simple reference output and deterministic inputs so changes can be compared honestly.
  - Example: Run a fixed input twice and compare saved outputs with the documented baseline.
  - Videos:
    - [CS50P 0 — Functions and variables](https://www.youtube.com/watch?v=JP7ITIXGpHk) · Harvard CS50 · David Malan · University lecture
      - Explains: Values, types, functions, parameters and return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on reproduce the baseline. Then reproduce the lesson example: Run a fixed input twice and compare saved outputs with the documented baseline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/0/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on reproduce the baseline. Then reproduce the lesson example: Run a fixed input twice and compare saved outputs with the documented baseline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Test a failure boundary:** A working happy path does not establish robustness to malformed data or dependency failures.
  - Example: Inject one malformed input and one controlled failure, then record the resulting state.
  - Videos:
    - [CS50P 0 — Functions and variables](https://www.youtube.com/watch?v=JP7ITIXGpHk) · Harvard CS50 · David Malan · University lecture
      - Explains: Values, types, functions, parameters and return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on test a failure boundary. Then reproduce the lesson example: Inject one malformed input and one controlled failure, then record the resulting state.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/0/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on test a failure boundary. Then reproduce the lesson example: Inject one malformed input and one controlled failure, then record the resulting state.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Explain the decisions:** Describe why each technique was chosen and what evidence would make you choose differently.
  - Example: Write a short decision note comparing the chosen approach with one simpler alternative.
  - Videos:
    - [CS50P 0 — Functions and variables](https://www.youtube.com/watch?v=JP7ITIXGpHk) · Harvard CS50 · David Malan · University lecture
      - Explains: Values, types, functions, parameters and return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on explain the decisions. Then reproduce the lesson example: Write a short decision note comparing the chosen approach with one simpler alternative.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/0/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on explain the decisions. Then reproduce the lesson example: Write a short decision note comparing the chosen approach with one simpler alternative.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/
- [ ] **Hand off the evidence:** Another learner must be able to reproduce the result from your instructions and supplied inputs.
  - Example: Ask a teammate to run the README commands in a clean environment and record missing steps.
  - Videos:
    - [CS50P 0 — Functions and variables](https://www.youtube.com/watch?v=JP7ITIXGpHk) · Harvard CS50 · David Malan · University lecture
      - Explains: Values, types, functions, parameters and return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on hand off the evidence. Then reproduce the lesson example: Ask a teammate to run the README commands in a clean environment and record missing steps.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/0/
    - [Harvard CS50P — full Python university course](https://www.youtube.com/watch?v=nLRL_NcnK-4) · Harvard CS50 / freeCodeCamp · Full course
      - Explains: Python syntax, control flow, exceptions, libraries, tests, files and object-oriented programming.
      - Useful because: A coherent beginner path; use the individual lectures below instead of watching everything before practicing.
      - Watch for: Focus on hand off the evidence. Then reproduce the lesson example: Ask a teammate to run the README commands in a clean environment and record missing steps.
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

1. [Official reference: Mutability, copying, scope and function contracts](https://docs.python.org/3/tutorial/classes.html) — Free reading; no registration required. Use the local CPU exercise; optional hosted services and downloads are not required..
2. [CS50P: conditionals](https://cs50.harvard.edu/python/2022/weeks/1/) — Free OpenCourseWare; account optional for submissions. Certificates on external platforms may cost money.

#### Python reliability checkpoint

Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.

**Deliverables**

- Runnable project and reproducible input fixtures
- README, results and decision notes
- Failure evidence and clean-start instructions

**Completion checks**

- [ ] Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.
- [ ] Explain the code and results without relying on an AI-generated summary.
- [ ] A teammate can reproduce the demo without paid credentials.

#### Ten project recommendations

### Concurrent service sampler

An operator needs latency samples without overwhelming local services.

**Data:** Run three local stub endpoints with delays, errors and timeouts. Use a fixed seed and keep evaluation cases separate.

**Output:** An async sampler with bounded concurrency and a latency summary.

**Effort:** 10h · Beginner → intermediate

- **Python reliability checkpoint:** Extend the project with Python reliability checkpoint in Concurrent service sampler. Adapt this focused lab to the project data: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Python reliability checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An async sampler with bounded concurrency and a latency summary. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Python reliability checkpoint: Python reliability checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep concurrency at four or less and finish when one endpoint never responds.
- [ ] Python reliability checkpoint: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Configuration doctor

A developer needs understandable errors before running a data job.

**Data:** Create ten JSON configurations with missing and mistyped settings. Use a fixed seed and keep evaluation cases separate.

**Output:** A validated configuration loader with redacted diagnostic messages.

**Effort:** 10h · Beginner → intermediate

- **Python reliability checkpoint:** Extend the project with Python reliability checkpoint in Configuration doctor. Adapt this focused lab to the project data: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Python reliability checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A validated configuration loader with redacted diagnostic messages. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Python reliability checkpoint: Python reliability checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject each invalid fixture and never print a seeded secret value.
- [ ] Python reliability checkpoint: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Safe export writer

A data analyst needs exports that never replace a good file with a partial one.

**Data:** Create ten small records and inject a write failure halfway through export. Use a fixed seed and keep evaluation cases separate.

**Output:** A context-managed atomic JSON export utility.

**Effort:** 10h · Beginner → intermediate

- **Python reliability checkpoint:** Extend the project with Python reliability checkpoint in Safe export writer. Adapt this focused lab to the project data: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Python reliability checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A context-managed atomic JSON export utility. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Python reliability checkpoint: Python reliability checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The previous export survives a simulated failure and temporary handles close.
- [ ] Python reliability checkpoint: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Expense reconciliation CLI

A club treasurer needs consistent totals from differently formatted receipts.

**Data:** Create three CSV files with 60 fictional expenses, currencies and duplicates. Use a fixed seed and keep evaluation cases separate.

**Output:** A typed normalization package and discrepancy report.

**Effort:** 10h · Beginner → intermediate

- **Python reliability checkpoint:** Extend the project with Python reliability checkpoint in Expense reconciliation CLI. Adapt this focused lab to the project data: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Python reliability checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A typed normalization package and discrepancy report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Python reliability checkpoint: Python reliability checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect all seeded duplicates and reject mixed-currency totals.
- [ ] Python reliability checkpoint: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Duplicate file index

An archivist needs to inspect duplicate notes before cleaning a folder.

**Data:** Create 40 temporary text files including equal contents under different names. Use a fixed seed and keep evaluation cases separate.

**Output:** A hash-based index and read-only duplicate report.

**Effort:** 10h · Beginner → intermediate

- **Python reliability checkpoint:** Extend the project with Python reliability checkpoint in Duplicate file index. Adapt this focused lab to the project data: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Python reliability checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A hash-based index and read-only duplicate report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Python reliability checkpoint: Python reliability checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect content duplicates without treating equal filenames as equal content.
- [ ] Python reliability checkpoint: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Streaming sensor summaries

A hobbyist needs rolling summaries of a long sensor stream.

**Data:** Generate 100000 timestamp/value pairs lazily with fixed seed 42. Use a fixed seed and keep evaluation cases separate.

**Output:** A generator pipeline producing rolling means and invalid-reading counts.

**Effort:** 10h · Beginner → intermediate

- **Python reliability checkpoint:** Extend the project with Python reliability checkpoint in Streaming sensor summaries. Adapt this focused lab to the project data: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Python reliability checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A generator pipeline producing rolling means and invalid-reading counts. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Python reliability checkpoint: Python reliability checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match a small reference calculation while memory stays bounded by the window.
- [ ] Python reliability checkpoint: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Log file investigator

A developer needs to locate failed requests across rotated logs.

**Data:** Generate 120 JSONL events including invalid lines and repeated request IDs. Use a fixed seed and keep evaluation cases separate.

**Output:** A streaming CLI that groups failures by request without loading every file.

**Effort:** 10h · Beginner → intermediate

- **Python reliability checkpoint:** Extend the project with Python reliability checkpoint in Log file investigator. Adapt this focused lab to the project data: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Python reliability checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A streaming CLI that groups failures by request without loading every file. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Python reliability checkpoint: Python reliability checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject corrupt lines with line numbers; produce identical totals with a one-line buffer.
- [ ] Python reliability checkpoint: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Pluggable text cleaner

An editor needs reusable transformations for inconsistent draft documents.

**Data:** Write 20 Markdown drafts with whitespace, Unicode and repeated headings. Use a fixed seed and keep evaluation cases separate.

**Output:** A package with composable transformations and a CLI entry point.

**Effort:** 10h · Beginner → intermediate

- **Python reliability checkpoint:** Extend the project with Python reliability checkpoint in Pluggable text cleaner. Adapt this focused lab to the project data: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Python reliability checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A package with composable transformations and a CLI entry point. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Python reliability checkpoint: Python reliability checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show idempotence and preserve non-ASCII text through every plugin.
- [ ] Python reliability checkpoint: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Adaptive terminal quiz

A learner needs practice on concepts they repeatedly miss.

**Data:** Write 25 questions and a local JSON history with two fictional learners. Use a fixed seed and keep evaluation cases separate.

**Output:** A CLI quiz with deterministic scoring and weak-topic selection.

**Effort:** 10h · Beginner → intermediate

- **Python reliability checkpoint:** Extend the project with Python reliability checkpoint in Adaptive terminal quiz. Adapt this focused lab to the project data: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Python reliability checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A CLI quiz with deterministic scoring and weak-topic selection. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Python reliability checkpoint: Python reliability checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Resume an interrupted quiz and keep the two histories separate.
- [ ] Python reliability checkpoint: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Parser regression kit

A maintainer needs confidence when extending a command parser.

**Data:** Author 30 valid and invalid command strings, including quoted arguments. Use a fixed seed and keep evaluation cases separate.

**Output:** A parser package with parametrized tests and readable failures.

**Effort:** 10h · Beginner → intermediate

- **Python reliability checkpoint:** Extend the project with Python reliability checkpoint in Parser regression kit. Adapt this focused lab to the project data: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Python reliability checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A parser package with parametrized tests and readable failures. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Python reliability checkpoint: Python reliability checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Cover empty input, escaped quotes and unknown flags without crashing.
- [ ] Python reliability checkpoint: Build a JSON study tracker with pure transformations, validated input, file persistence, logging and pytest. Demonstrate malformed input, independent state and a clean virtual-environment setup.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

