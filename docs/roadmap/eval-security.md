# Evaluation and security

Make quality, safety and failure behavior measurable.

## Main route · Step 9 of 13

**Goal:** Measure quality and protect the application against predictable failures.

**Stage checkpoint:** Create a golden dataset, regression report and prompt-injection tests with explicit failure handling.

Measure quality and enforce security boundaries before introducing autonomy.

Follow the modules and lessons below at your pace. Finish each exercise, save your evidence and self-assessment, then continue. Completed and Already known count as completed; Skipped is reported separately. You can move ahead at any time.

[Full pipeline](../PIPELINE.md) · [Next step: Agents and MCP](agents.md)

## Evaluation-driven development

<a id="eval-datasets"></a>

### Golden datasets and deterministic regression evaluation

Make improvement claims reproducible and keep evaluation cases separate from tuning.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Imbalance, metrics, calibration and error analysis](ml.md#ml-metrics), [Prompting, sampling and structured outputs](llm.md#llm-prompting) Navigation is unrestricted.

#### Concepts

- [ ] **Golden datasets:** Curated inputs, expected behavior and labels define what success means; include difficult and negative cases.
  - Example: Record twenty questions including unsupported requests.
  - Videos:
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on golden datasets. Then reproduce the lesson example: Record twenty questions including unsupported requests.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [ ] **Deterministic checks:** Schema, citation validity and tool permissions can be tested without a judge model.
  - Example: Assert every citation refers to a retrieved source.
  - Videos:
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on deterministic checks. Then reproduce the lesson example: Assert every citation refers to a retrieved source.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [ ] **Regression evaluation:** Run the same cases after model, prompt, retrieval or tool changes and compare per-case failures.
  - Example: Reject a change that breaks previously correct abstentions.
  - Videos:
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on regression evaluation. Then reproduce the lesson example: Reject a change that breaks previously correct abstentions.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8

#### YouTube: focused explanations and full courses

- [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
  - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
  - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [CS50P 5 — Unit tests](https://www.youtube.com/watch?v=tIrcxwLqzjQ) · Harvard CS50 · David Malan · University lecture
  - Explains: Assertions, pytest, test organization and testing return values.
  - Useful because: A structured explanation with live coding; pause and reproduce the examples.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/2022/weeks/5/

#### Free written resources

1. [Haystack: evaluation](https://docs.haystack.deepset.ai/docs/evaluation) — Free reading; Hugging Face account optional for sharing models. No paid materials required.
2. [pytest: getting started](https://docs.pytest.org/en/stable/getting-started.html) — Free; no registration required. No paid materials required.

#### Lab: Golden datasets and deterministic regression evaluation

Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Golden dataset workshop

A team needs a small trustworthy evaluation set.

**Data:** Author 40 questions with expected answers, sources and failure categories. Use a fixed seed and keep evaluation cases separate.

**Output:** A versioned evaluation dataset and deterministic runner.

**Effort:** 10h · Beginner → intermediate

- **Golden datasets and deterministic regression evaluation:** Implement Golden datasets and deterministic regression evaluation in Golden dataset workshop. Adapt this focused lab to the project data: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.  Required concepts: Golden datasets, Deterministic checks, Regression evaluation.
  - Deliverable: Golden datasets and deterministic regression evaluation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A versioned evaluation dataset and deterministic runner. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Golden datasets and deterministic regression evaluation: Golden datasets and deterministic regression evaluation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Separate development cases from a locked holdout and detect a seeded regression.
- [ ] Golden datasets and deterministic regression evaluation: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Release regression gate

A maintainer needs a repeatable quality decision before release.

**Data:** Store baseline and candidate results for 40 fixed cases. Use a fixed seed and keep evaluation cases separate.

**Output:** A deterministic CI gate with explicit allowed regressions.

**Effort:** 10h · Beginner → intermediate

- **Golden datasets and deterministic regression evaluation:** Implement Golden datasets and deterministic regression evaluation in Release regression gate. Adapt this focused lab to the project data: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.  Required concepts: Golden datasets, Deterministic checks, Regression evaluation.
  - Deliverable: Golden datasets and deterministic regression evaluation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A deterministic CI gate with explicit allowed regressions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Golden datasets and deterministic regression evaluation: Golden datasets and deterministic regression evaluation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Fail when a critical case regresses even if average score improves.
- [ ] Golden datasets and deterministic regression evaluation: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Prompt regression workbench

A support writer needs repeatable checks before changing instructions.

**Data:** Author 30 requests with expected structured responses and recorded fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A prompt version comparison harness.

**Effort:** 10h · Beginner → intermediate

- **Golden datasets and deterministic regression evaluation:** Implement Golden datasets and deterministic regression evaluation in Prompt regression workbench. Adapt this focused lab to the project data: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.  Required concepts: Golden datasets, Deterministic checks, Regression evaluation.
  - Deliverable: Golden datasets and deterministic regression evaluation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A prompt version comparison harness. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Golden datasets and deterministic regression evaluation: Golden datasets and deterministic regression evaluation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Detect malformed JSON, unsupported claims and changed required fields.
- [ ] Golden datasets and deterministic regression evaluation: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Evidence faithfulness audit

A researcher needs to identify unsupported answer claims.

**Data:** Author 25 answers paired with short source passages. Use a fixed seed and keep evaluation cases separate.

**Output:** A claim-level support annotation and scoring report.

**Effort:** 10h · Beginner → intermediate

- **Golden datasets and deterministic regression evaluation:** Extend the project with Golden datasets and deterministic regression evaluation in Evidence faithfulness audit. Adapt this focused lab to the project data: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.  Required concepts: Golden datasets, Deterministic checks, Regression evaluation.
  - Deliverable: Golden datasets and deterministic regression evaluation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A claim-level support annotation and scoring report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Golden datasets and deterministic regression evaluation: Golden datasets and deterministic regression evaluation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Distinguish absent evidence from direct contradiction.
- [ ] Golden datasets and deterministic regression evaluation: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Guardrail bypass experiment

A developer needs to know where validation actually holds.

**Data:** Write malformed schemas, Unicode evasions and oversized-input fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A bounded-input validation and adversarial test suite.

**Effort:** 10h · Beginner → intermediate

- **Golden datasets and deterministic regression evaluation:** Extend the project with Golden datasets and deterministic regression evaluation in Guardrail bypass experiment. Adapt this focused lab to the project data: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.  Required concepts: Golden datasets, Deterministic checks, Regression evaluation.
  - Deliverable: Golden datasets and deterministic regression evaluation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bounded-input validation and adversarial test suite. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Golden datasets and deterministic regression evaluation: Golden datasets and deterministic regression evaluation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Enforce server-side size/schema checks and document uncovered behaviors.
- [ ] Golden datasets and deterministic regression evaluation: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Prompt injection boundary lab

A developer needs to prevent retrieved instructions from becoming commands.

**Data:** Create 20 local malicious-document fixtures and benign controls. Use a fixed seed and keep evaluation cases separate.

**Output:** An adversarial harness for a read-only assistant.

**Effort:** 10h · Beginner → intermediate

- **Golden datasets and deterministic regression evaluation:** Extend the project with Golden datasets and deterministic regression evaluation in Prompt injection boundary lab. Adapt this focused lab to the project data: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.  Required concepts: Golden datasets, Deterministic checks, Regression evaluation.
  - Deliverable: Golden datasets and deterministic regression evaluation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An adversarial harness for a read-only assistant. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Golden datasets and deterministic regression evaluation: Golden datasets and deterministic regression evaluation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Tool permissions remain enforced even if an answer follows injected text.
- [ ] Golden datasets and deterministic regression evaluation: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Human and model judge agreement lab

A reviewer needs to know when automated ratings disagree.

**Data:** Use 30 anonymized fictional outputs and recorded judge scores. Use a fixed seed and keep evaluation cases separate.

**Output:** A rubric, blind review sheet and disagreement report.

**Effort:** 10h · Beginner → intermediate

- **Golden datasets and deterministic regression evaluation:** Extend the project with Golden datasets and deterministic regression evaluation in Human and model judge agreement lab. Adapt this focused lab to the project data: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.  Required concepts: Golden datasets, Deterministic checks, Regression evaluation.
  - Deliverable: Golden datasets and deterministic regression evaluation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A rubric, blind review sheet and disagreement report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Golden datasets and deterministic regression evaluation: Golden datasets and deterministic regression evaluation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report agreement and inspect disagreements without treating model scores as truth.
- [ ] Golden datasets and deterministic regression evaluation: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data minimization audit

A team needs to track which fields reach each component.

**Data:** Use fictional profiles containing both necessary and unnecessary fields. Use a fixed seed and keep evaluation cases separate.

**Output:** A data-flow inventory and allowlisted request serializer.

**Effort:** 10h · Beginner → intermediate

- **Golden datasets and deterministic regression evaluation:** Extend the project with Golden datasets and deterministic regression evaluation in Data minimization audit. Adapt this focused lab to the project data: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.  Required concepts: Golden datasets, Deterministic checks, Regression evaluation.
  - Deliverable: Golden datasets and deterministic regression evaluation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A data-flow inventory and allowlisted request serializer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Golden datasets and deterministic regression evaluation: Golden datasets and deterministic regression evaluation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Disallowed fields never enter prompts, telemetry or exported examples.
- [ ] Golden datasets and deterministic regression evaluation: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Secret exposure regression kit

A maintainer needs to prevent test secrets leaking into logs.

**Data:** Generate fake credentials and malformed requests only. Use a fixed seed and keep evaluation cases separate.

**Output:** A redaction pipeline with log and response checks.

**Effort:** 10h · Beginner → intermediate

- **Golden datasets and deterministic regression evaluation:** Extend the project with Golden datasets and deterministic regression evaluation in Secret exposure regression kit. Adapt this focused lab to the project data: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.  Required concepts: Golden datasets, Deterministic checks, Regression evaluation.
  - Deliverable: Golden datasets and deterministic regression evaluation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A redaction pipeline with log and response checks. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Golden datasets and deterministic regression evaluation: Golden datasets and deterministic regression evaluation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] No seeded secret appears in outputs, including exception messages.
- [ ] Golden datasets and deterministic regression evaluation: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Evaluation slice explorer

An analyst needs to find failures hidden by an average score.

**Data:** Generate 100 labeled results across language and length slices. Use a fixed seed and keep evaluation cases separate.

**Output:** A per-slice report with sample counts and uncertainty.

**Effort:** 10h · Beginner → intermediate

- **Golden datasets and deterministic regression evaluation:** Extend the project with Golden datasets and deterministic regression evaluation in Evaluation slice explorer. Adapt this focused lab to the project data: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.  Required concepts: Golden datasets, Deterministic checks, Regression evaluation.
  - Deliverable: Golden datasets and deterministic regression evaluation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A per-slice report with sample counts and uncertainty. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Golden datasets and deterministic regression evaluation: Golden datasets and deterministic regression evaluation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Flag small samples and reproduce all aggregate metrics from raw cases.
- [ ] Golden datasets and deterministic regression evaluation: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="eval-human-judge"></a>

### Human evaluation, LLM judges and error analysis

Combine measurable checks with careful human judgment and known judge limitations.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Golden datasets and deterministic regression evaluation](eval-security.md#eval-datasets) Navigation is unrestricted.

#### Concepts

- [ ] **Human rubrics:** Clear criteria and blinded comparisons reduce inconsistent judgments.
  - Example: Score relevance and evidence support separately on a 1–3 rubric.
  - Videos:
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on human rubrics. Then reproduce the lesson example: Score relevance and evidence support separately on a 1–3 rubric.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [ ] **Model-based judging:** Judges can be biased by order, verbosity or their own errors; calibrate against human labels.
  - Example: Swap answer order and inspect disagreement on a small set.
  - Videos:
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on model-based judging. Then reproduce the lesson example: Swap answer order and inspect disagreement on a small set.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [ ] **Failure categories:** Separate retrieval misses, unsupported generation, formatting and tool failures to choose fixes.
  - Example: Fix chunking when the correct passage was never retrieved.
  - Videos:
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on failure categories. Then reproduce the lesson example: Fix chunking when the correct passage was never retrieved.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8

#### YouTube: focused explanations and full courses

- [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
  - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
  - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8

#### Free written resources

1. [Ragas: metrics overview](https://docs.ragas.io/en/stable/concepts/metrics/overview/) — Free reading; Hugging Face account optional for sharing models. No paid materials required.
2. [PAIR: explainability and trust](https://pair.withgoogle.com/guidebook/chapters/explainability-trust/) — Free; no registration required. No paid materials required.

#### Lab: Human evaluation, LLM judges and error analysis

Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Human and model judge agreement lab

A reviewer needs to know when automated ratings disagree.

**Data:** Use 30 anonymized fictional outputs and recorded judge scores. Use a fixed seed and keep evaluation cases separate.

**Output:** A rubric, blind review sheet and disagreement report.

**Effort:** 10h · Beginner → intermediate

- **Human evaluation, LLM judges and error analysis:** Implement Human evaluation, LLM judges and error analysis in Human and model judge agreement lab. Adapt this focused lab to the project data: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.  Required concepts: Human rubrics, Model-based judging, Failure categories.
  - Deliverable: Human evaluation, LLM judges and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A rubric, blind review sheet and disagreement report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Human evaluation, LLM judges and error analysis: Human evaluation, LLM judges and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report agreement and inspect disagreements without treating model scores as truth.
- [ ] Human evaluation, LLM judges and error analysis: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Independent review coordinator

A team needs independent checks before combining conclusions.

**Data:** Use three deterministic reviewers for schema, evidence and policy. Use a fixed seed and keep evaluation cases separate.

**Output:** A coordinator with separate review results and conflict handling.

**Effort:** 16h · Intermediate

- **Human evaluation, LLM judges and error analysis:** Implement Human evaluation, LLM judges and error analysis in Independent review coordinator. Adapt this focused lab to the project data: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.  Required concepts: Human rubrics, Model-based judging, Failure categories.
  - Deliverable: Human evaluation, LLM judges and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A coordinator with separate review results and conflict handling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Human evaluation, LLM judges and error analysis: Human evaluation, LLM judges and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep dissent visible and enforce a timeout per reviewer.
- [ ] Human evaluation, LLM judges and error analysis: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Evidence faithfulness audit

A researcher needs to identify unsupported answer claims.

**Data:** Author 25 answers paired with short source passages. Use a fixed seed and keep evaluation cases separate.

**Output:** A claim-level support annotation and scoring report.

**Effort:** 10h · Beginner → intermediate

- **Human evaluation, LLM judges and error analysis:** Extend the project with Human evaluation, LLM judges and error analysis in Evidence faithfulness audit. Adapt this focused lab to the project data: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.  Required concepts: Human rubrics, Model-based judging, Failure categories.
  - Deliverable: Human evaluation, LLM judges and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A claim-level support annotation and scoring report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Human evaluation, LLM judges and error analysis: Human evaluation, LLM judges and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Distinguish absent evidence from direct contradiction.
- [ ] Human evaluation, LLM judges and error analysis: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Golden dataset workshop

A team needs a small trustworthy evaluation set.

**Data:** Author 40 questions with expected answers, sources and failure categories. Use a fixed seed and keep evaluation cases separate.

**Output:** A versioned evaluation dataset and deterministic runner.

**Effort:** 10h · Beginner → intermediate

- **Human evaluation, LLM judges and error analysis:** Extend the project with Human evaluation, LLM judges and error analysis in Golden dataset workshop. Adapt this focused lab to the project data: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.  Required concepts: Human rubrics, Model-based judging, Failure categories.
  - Deliverable: Human evaluation, LLM judges and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A versioned evaluation dataset and deterministic runner. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Human evaluation, LLM judges and error analysis: Human evaluation, LLM judges and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Separate development cases from a locked holdout and detect a seeded regression.
- [ ] Human evaluation, LLM judges and error analysis: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Guardrail bypass experiment

A developer needs to know where validation actually holds.

**Data:** Write malformed schemas, Unicode evasions and oversized-input fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A bounded-input validation and adversarial test suite.

**Effort:** 10h · Beginner → intermediate

- **Human evaluation, LLM judges and error analysis:** Extend the project with Human evaluation, LLM judges and error analysis in Guardrail bypass experiment. Adapt this focused lab to the project data: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.  Required concepts: Human rubrics, Model-based judging, Failure categories.
  - Deliverable: Human evaluation, LLM judges and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bounded-input validation and adversarial test suite. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Human evaluation, LLM judges and error analysis: Human evaluation, LLM judges and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Enforce server-side size/schema checks and document uncovered behaviors.
- [ ] Human evaluation, LLM judges and error analysis: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Prompt injection boundary lab

A developer needs to prevent retrieved instructions from becoming commands.

**Data:** Create 20 local malicious-document fixtures and benign controls. Use a fixed seed and keep evaluation cases separate.

**Output:** An adversarial harness for a read-only assistant.

**Effort:** 10h · Beginner → intermediate

- **Human evaluation, LLM judges and error analysis:** Extend the project with Human evaluation, LLM judges and error analysis in Prompt injection boundary lab. Adapt this focused lab to the project data: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.  Required concepts: Human rubrics, Model-based judging, Failure categories.
  - Deliverable: Human evaluation, LLM judges and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An adversarial harness for a read-only assistant. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Human evaluation, LLM judges and error analysis: Human evaluation, LLM judges and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Tool permissions remain enforced even if an answer follows injected text.
- [ ] Human evaluation, LLM judges and error analysis: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data minimization audit

A team needs to track which fields reach each component.

**Data:** Use fictional profiles containing both necessary and unnecessary fields. Use a fixed seed and keep evaluation cases separate.

**Output:** A data-flow inventory and allowlisted request serializer.

**Effort:** 10h · Beginner → intermediate

- **Human evaluation, LLM judges and error analysis:** Extend the project with Human evaluation, LLM judges and error analysis in Data minimization audit. Adapt this focused lab to the project data: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.  Required concepts: Human rubrics, Model-based judging, Failure categories.
  - Deliverable: Human evaluation, LLM judges and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A data-flow inventory and allowlisted request serializer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Human evaluation, LLM judges and error analysis: Human evaluation, LLM judges and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Disallowed fields never enter prompts, telemetry or exported examples.
- [ ] Human evaluation, LLM judges and error analysis: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Release regression gate

A maintainer needs a repeatable quality decision before release.

**Data:** Store baseline and candidate results for 40 fixed cases. Use a fixed seed and keep evaluation cases separate.

**Output:** A deterministic CI gate with explicit allowed regressions.

**Effort:** 10h · Beginner → intermediate

- **Human evaluation, LLM judges and error analysis:** Extend the project with Human evaluation, LLM judges and error analysis in Release regression gate. Adapt this focused lab to the project data: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.  Required concepts: Human rubrics, Model-based judging, Failure categories.
  - Deliverable: Human evaluation, LLM judges and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A deterministic CI gate with explicit allowed regressions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Human evaluation, LLM judges and error analysis: Human evaluation, LLM judges and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Fail when a critical case regresses even if average score improves.
- [ ] Human evaluation, LLM judges and error analysis: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Secret exposure regression kit

A maintainer needs to prevent test secrets leaking into logs.

**Data:** Generate fake credentials and malformed requests only. Use a fixed seed and keep evaluation cases separate.

**Output:** A redaction pipeline with log and response checks.

**Effort:** 10h · Beginner → intermediate

- **Human evaluation, LLM judges and error analysis:** Extend the project with Human evaluation, LLM judges and error analysis in Secret exposure regression kit. Adapt this focused lab to the project data: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.  Required concepts: Human rubrics, Model-based judging, Failure categories.
  - Deliverable: Human evaluation, LLM judges and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A redaction pipeline with log and response checks. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Human evaluation, LLM judges and error analysis: Human evaluation, LLM judges and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] No seeded secret appears in outputs, including exception messages.
- [ ] Human evaluation, LLM judges and error analysis: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Evaluation slice explorer

An analyst needs to find failures hidden by an average score.

**Data:** Generate 100 labeled results across language and length slices. Use a fixed seed and keep evaluation cases separate.

**Output:** A per-slice report with sample counts and uncertainty.

**Effort:** 10h · Beginner → intermediate

- **Human evaluation, LLM judges and error analysis:** Extend the project with Human evaluation, LLM judges and error analysis in Evaluation slice explorer. Adapt this focused lab to the project data: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.  Required concepts: Human rubrics, Model-based judging, Failure categories.
  - Deliverable: Human evaluation, LLM judges and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A per-slice report with sample counts and uncertainty. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Human evaluation, LLM judges and error analysis: Human evaluation, LLM judges and error analysis: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Flag small samples and reproduce all aggregate metrics from raw cases.
- [ ] Human evaluation, LLM judges and error analysis: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="eval-metrics"></a>

### Faithfulness, hallucinations, task success and business metrics

Measure product outcomes alongside model quality, latency and cost.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Human evaluation, LLM judges and error analysis](eval-security.md#eval-human-judge) Navigation is unrestricted.

#### Concepts

- [ ] **Faithfulness and hallucinations:** Support by provided evidence differs from truth in the wider world; define unsupported-claim rules.
  - Example: Flag a correct-sounding fact absent from the retrieved sources.
  - Videos:
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on faithfulness and hallucinations. Then reproduce the lesson example: Flag a correct-sounding fact absent from the retrieved sources.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [ ] **Task completion:** An end-to-end task may fail even when individual answers sound good.
  - Example: Measure whether the user found and acted on the correct document.
  - Videos:
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on task completion. Then reproduce the lesson example: Measure whether the user found and acted on the correct document.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [ ] **Operational and business metrics:** Track p95 latency, errors, cost estimates, adoption and feedback with explicit denominators.
  - Example: Report successful completed tasks per 100 attempts.
  - Videos:
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on operational and business metrics. Then reproduce the lesson example: Report successful completed tasks per 100 attempts.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8

#### YouTube: focused explanations and full courses

- [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
  - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
  - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [Site reliability engineering fundamentals](https://www.youtube.com/watch?v=eopc_ijIfLg) · Google Cloud Events · Technical session
  - Explains: Service objectives, error budgets, monitoring, alerting and emergency response.
  - Useful because: Write actionable monitoring and recovery steps instead of collecting logs without a plan.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=eopc_ijIfLg

#### Free written resources

1. [PAIR: defining success](https://pair.withgoogle.com/guidebook/chapters/user-needs/) — Free; no registration required. No paid materials required.
2. [Google SRE: monitoring distributed systems](https://sre.google/sre-book/monitoring-distributed-systems/) — Free; no registration required. No paid materials required.

#### Lab: Faithfulness, hallucinations, task success and business metrics

Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Evidence faithfulness audit

A researcher needs to identify unsupported answer claims.

**Data:** Author 25 answers paired with short source passages. Use a fixed seed and keep evaluation cases separate.

**Output:** A claim-level support annotation and scoring report.

**Effort:** 10h · Beginner → intermediate

- **Faithfulness, hallucinations, task success and business metrics:** Implement Faithfulness, hallucinations, task success and business metrics in Evidence faithfulness audit. Adapt this focused lab to the project data: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.  Required concepts: Faithfulness and hallucinations, Task completion, Operational and business metrics.
  - Deliverable: Faithfulness, hallucinations, task success and business metrics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A claim-level support annotation and scoring report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Faithfulness, hallucinations, task success and business metrics: Faithfulness, hallucinations, task success and business metrics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Distinguish absent evidence from direct contradiction.
- [ ] Faithfulness, hallucinations, task success and business metrics: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Evaluation slice explorer

An analyst needs to find failures hidden by an average score.

**Data:** Generate 100 labeled results across language and length slices. Use a fixed seed and keep evaluation cases separate.

**Output:** A per-slice report with sample counts and uncertainty.

**Effort:** 10h · Beginner → intermediate

- **Faithfulness, hallucinations, task success and business metrics:** Implement Faithfulness, hallucinations, task success and business metrics in Evaluation slice explorer. Adapt this focused lab to the project data: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.  Required concepts: Faithfulness and hallucinations, Task completion, Operational and business metrics.
  - Deliverable: Faithfulness, hallucinations, task success and business metrics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A per-slice report with sample counts and uncertainty. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Faithfulness, hallucinations, task success and business metrics: Faithfulness, hallucinations, task success and business metrics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Flag small samples and reproduce all aggregate metrics from raw cases.
- [ ] Faithfulness, hallucinations, task success and business metrics: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Retrieval failure diagnosis bench

A maintainer needs to separate retrieval and answer failures.

**Data:** Write 25 questions including missing evidence and conflicting passages. Use a fixed seed and keep evaluation cases separate.

**Output:** A retrieval/answer error taxonomy and regression report.

**Effort:** 10h · Beginner → intermediate

- **Faithfulness, hallucinations, task success and business metrics:** Implement Faithfulness, hallucinations, task success and business metrics in Retrieval failure diagnosis bench. Adapt this focused lab to the project data: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.  Required concepts: Faithfulness and hallucinations, Task completion, Operational and business metrics.
  - Deliverable: Faithfulness, hallucinations, task success and business metrics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A retrieval/answer error taxonomy and regression report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Faithfulness, hallucinations, task success and business metrics: Faithfulness, hallucinations, task success and business metrics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Measure retrieval recall separately from answer faithfulness.
- [ ] Faithfulness, hallucinations, task success and business metrics: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Golden dataset workshop

A team needs a small trustworthy evaluation set.

**Data:** Author 40 questions with expected answers, sources and failure categories. Use a fixed seed and keep evaluation cases separate.

**Output:** A versioned evaluation dataset and deterministic runner.

**Effort:** 10h · Beginner → intermediate

- **Faithfulness, hallucinations, task success and business metrics:** Extend the project with Faithfulness, hallucinations, task success and business metrics in Golden dataset workshop. Adapt this focused lab to the project data: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.  Required concepts: Faithfulness and hallucinations, Task completion, Operational and business metrics.
  - Deliverable: Faithfulness, hallucinations, task success and business metrics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A versioned evaluation dataset and deterministic runner. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Faithfulness, hallucinations, task success and business metrics: Faithfulness, hallucinations, task success and business metrics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Separate development cases from a locked holdout and detect a seeded regression.
- [ ] Faithfulness, hallucinations, task success and business metrics: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Guardrail bypass experiment

A developer needs to know where validation actually holds.

**Data:** Write malformed schemas, Unicode evasions and oversized-input fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A bounded-input validation and adversarial test suite.

**Effort:** 10h · Beginner → intermediate

- **Faithfulness, hallucinations, task success and business metrics:** Extend the project with Faithfulness, hallucinations, task success and business metrics in Guardrail bypass experiment. Adapt this focused lab to the project data: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.  Required concepts: Faithfulness and hallucinations, Task completion, Operational and business metrics.
  - Deliverable: Faithfulness, hallucinations, task success and business metrics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bounded-input validation and adversarial test suite. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Faithfulness, hallucinations, task success and business metrics: Faithfulness, hallucinations, task success and business metrics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Enforce server-side size/schema checks and document uncovered behaviors.
- [ ] Faithfulness, hallucinations, task success and business metrics: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Prompt injection boundary lab

A developer needs to prevent retrieved instructions from becoming commands.

**Data:** Create 20 local malicious-document fixtures and benign controls. Use a fixed seed and keep evaluation cases separate.

**Output:** An adversarial harness for a read-only assistant.

**Effort:** 10h · Beginner → intermediate

- **Faithfulness, hallucinations, task success and business metrics:** Extend the project with Faithfulness, hallucinations, task success and business metrics in Prompt injection boundary lab. Adapt this focused lab to the project data: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.  Required concepts: Faithfulness and hallucinations, Task completion, Operational and business metrics.
  - Deliverable: Faithfulness, hallucinations, task success and business metrics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An adversarial harness for a read-only assistant. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Faithfulness, hallucinations, task success and business metrics: Faithfulness, hallucinations, task success and business metrics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Tool permissions remain enforced even if an answer follows injected text.
- [ ] Faithfulness, hallucinations, task success and business metrics: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Human and model judge agreement lab

A reviewer needs to know when automated ratings disagree.

**Data:** Use 30 anonymized fictional outputs and recorded judge scores. Use a fixed seed and keep evaluation cases separate.

**Output:** A rubric, blind review sheet and disagreement report.

**Effort:** 10h · Beginner → intermediate

- **Faithfulness, hallucinations, task success and business metrics:** Extend the project with Faithfulness, hallucinations, task success and business metrics in Human and model judge agreement lab. Adapt this focused lab to the project data: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.  Required concepts: Faithfulness and hallucinations, Task completion, Operational and business metrics.
  - Deliverable: Faithfulness, hallucinations, task success and business metrics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A rubric, blind review sheet and disagreement report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Faithfulness, hallucinations, task success and business metrics: Faithfulness, hallucinations, task success and business metrics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report agreement and inspect disagreements without treating model scores as truth.
- [ ] Faithfulness, hallucinations, task success and business metrics: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data minimization audit

A team needs to track which fields reach each component.

**Data:** Use fictional profiles containing both necessary and unnecessary fields. Use a fixed seed and keep evaluation cases separate.

**Output:** A data-flow inventory and allowlisted request serializer.

**Effort:** 10h · Beginner → intermediate

- **Faithfulness, hallucinations, task success and business metrics:** Extend the project with Faithfulness, hallucinations, task success and business metrics in Data minimization audit. Adapt this focused lab to the project data: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.  Required concepts: Faithfulness and hallucinations, Task completion, Operational and business metrics.
  - Deliverable: Faithfulness, hallucinations, task success and business metrics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A data-flow inventory and allowlisted request serializer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Faithfulness, hallucinations, task success and business metrics: Faithfulness, hallucinations, task success and business metrics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Disallowed fields never enter prompts, telemetry or exported examples.
- [ ] Faithfulness, hallucinations, task success and business metrics: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Release regression gate

A maintainer needs a repeatable quality decision before release.

**Data:** Store baseline and candidate results for 40 fixed cases. Use a fixed seed and keep evaluation cases separate.

**Output:** A deterministic CI gate with explicit allowed regressions.

**Effort:** 10h · Beginner → intermediate

- **Faithfulness, hallucinations, task success and business metrics:** Extend the project with Faithfulness, hallucinations, task success and business metrics in Release regression gate. Adapt this focused lab to the project data: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.  Required concepts: Faithfulness and hallucinations, Task completion, Operational and business metrics.
  - Deliverable: Faithfulness, hallucinations, task success and business metrics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A deterministic CI gate with explicit allowed regressions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Faithfulness, hallucinations, task success and business metrics: Faithfulness, hallucinations, task success and business metrics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Fail when a critical case regresses even if average score improves.
- [ ] Faithfulness, hallucinations, task success and business metrics: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Secret exposure regression kit

A maintainer needs to prevent test secrets leaking into logs.

**Data:** Generate fake credentials and malformed requests only. Use a fixed seed and keep evaluation cases separate.

**Output:** A redaction pipeline with log and response checks.

**Effort:** 10h · Beginner → intermediate

- **Faithfulness, hallucinations, task success and business metrics:** Extend the project with Faithfulness, hallucinations, task success and business metrics in Secret exposure regression kit. Adapt this focused lab to the project data: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.  Required concepts: Faithfulness and hallucinations, Task completion, Operational and business metrics.
  - Deliverable: Faithfulness, hallucinations, task success and business metrics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A redaction pipeline with log and response checks. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Faithfulness, hallucinations, task success and business metrics: Faithfulness, hallucinations, task success and business metrics: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] No seeded secret appears in outputs, including exception messages.
- [ ] Faithfulness, hallucinations, task success and business metrics: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Security and safety

<a id="security-injection"></a>

### Prompt injection, leakage and adversarial testing

Keep retrieved content and model proposals outside trusted authorization decisions.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Faithfulness, hallucinations, task success and business metrics](eval-security.md#eval-metrics) Navigation is unrestricted.

#### Concepts

- [ ] **Prompt injection:** Untrusted inputs can request changes to policy; delimiters alone do not enforce security.
  - Example: A retrieved page asking for secrets must remain data, not an instruction.
  - Videos:
    - [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
      - Explains: Direct/indirect prompt injection and application trust boundaries.
      - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
      - Watch for: Focus on prompt injection. Then reproduce the lesson example: A retrieved page asking for secrets must remain data, not an instruction.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on prompt injection. Then reproduce the lesson example: A retrieved page asking for secrets must remain data, not an instruction.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [ ] **Leakage and privacy:** Private documents, logs and cached results need consistent access control and minimization.
  - Example: Prevent a cached answer for user A from being served to user B.
  - Videos:
    - [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
      - Explains: Direct/indirect prompt injection and application trust boundaries.
      - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
      - Watch for: Focus on leakage and privacy. Then reproduce the lesson example: Prevent a cached answer for user A from being served to user B.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on leakage and privacy. Then reproduce the lesson example: Prevent a cached answer for user A from being served to user B.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [ ] **Adversarial tests:** Test malicious tool arguments, cross-user retrieval and hidden instructions, not only friendly prompts.
  - Example: Include traversal and forged identity cases in a security fixture suite.
  - Videos:
    - [CS50P 5 — Unit tests](https://www.youtube.com/watch?v=tIrcxwLqzjQ) · Harvard CS50 · David Malan · University lecture
      - Explains: Assertions, pytest, test organization and testing return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on adversarial tests. Then reproduce the lesson example: Include traversal and forged identity cases in a security fixture suite.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/5/
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on adversarial tests. Then reproduce the lesson example: Include traversal and forged identity cases in a security fixture suite.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8

#### YouTube: focused explanations and full courses

- [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
  - Explains: Direct/indirect prompt injection and application trust boundaries.
  - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
- [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
  - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
  - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8

#### Free written resources

1. [OWASP Top 10 for LLM applications](https://genai.owasp.org/llm-top-10/) — Free; no registration required. No paid materials required.
2. [MCP: security best practices](https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices) — Free; no registration required. No paid materials required.

#### Lab: Prompt injection, leakage and adversarial testing

Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Prompt injection boundary lab

A developer needs to prevent retrieved instructions from becoming commands.

**Data:** Create 20 local malicious-document fixtures and benign controls. Use a fixed seed and keep evaluation cases separate.

**Output:** An adversarial harness for a read-only assistant.

**Effort:** 10h · Beginner → intermediate

- **Prompt injection, leakage and adversarial testing:** Implement Prompt injection, leakage and adversarial testing in Prompt injection boundary lab. Adapt this focused lab to the project data: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.  Required concepts: Prompt injection, Leakage and privacy, Adversarial tests.
  - Deliverable: Prompt injection, leakage and adversarial testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An adversarial harness for a read-only assistant. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prompt injection, leakage and adversarial testing: Prompt injection, leakage and adversarial testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Tool permissions remain enforced even if an answer follows injected text.
- [ ] Prompt injection, leakage and adversarial testing: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Evidence faithfulness audit

A researcher needs to identify unsupported answer claims.

**Data:** Author 25 answers paired with short source passages. Use a fixed seed and keep evaluation cases separate.

**Output:** A claim-level support annotation and scoring report.

**Effort:** 10h · Beginner → intermediate

- **Prompt injection, leakage and adversarial testing:** Extend the project with Prompt injection, leakage and adversarial testing in Evidence faithfulness audit. Adapt this focused lab to the project data: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.  Required concepts: Prompt injection, Leakage and privacy, Adversarial tests.
  - Deliverable: Prompt injection, leakage and adversarial testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A claim-level support annotation and scoring report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prompt injection, leakage and adversarial testing: Prompt injection, leakage and adversarial testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Distinguish absent evidence from direct contradiction.
- [ ] Prompt injection, leakage and adversarial testing: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Golden dataset workshop

A team needs a small trustworthy evaluation set.

**Data:** Author 40 questions with expected answers, sources and failure categories. Use a fixed seed and keep evaluation cases separate.

**Output:** A versioned evaluation dataset and deterministic runner.

**Effort:** 10h · Beginner → intermediate

- **Prompt injection, leakage and adversarial testing:** Extend the project with Prompt injection, leakage and adversarial testing in Golden dataset workshop. Adapt this focused lab to the project data: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.  Required concepts: Prompt injection, Leakage and privacy, Adversarial tests.
  - Deliverable: Prompt injection, leakage and adversarial testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A versioned evaluation dataset and deterministic runner. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prompt injection, leakage and adversarial testing: Prompt injection, leakage and adversarial testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Separate development cases from a locked holdout and detect a seeded regression.
- [ ] Prompt injection, leakage and adversarial testing: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Guardrail bypass experiment

A developer needs to know where validation actually holds.

**Data:** Write malformed schemas, Unicode evasions and oversized-input fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A bounded-input validation and adversarial test suite.

**Effort:** 10h · Beginner → intermediate

- **Prompt injection, leakage and adversarial testing:** Extend the project with Prompt injection, leakage and adversarial testing in Guardrail bypass experiment. Adapt this focused lab to the project data: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.  Required concepts: Prompt injection, Leakage and privacy, Adversarial tests.
  - Deliverable: Prompt injection, leakage and adversarial testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bounded-input validation and adversarial test suite. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prompt injection, leakage and adversarial testing: Prompt injection, leakage and adversarial testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Enforce server-side size/schema checks and document uncovered behaviors.
- [ ] Prompt injection, leakage and adversarial testing: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Human and model judge agreement lab

A reviewer needs to know when automated ratings disagree.

**Data:** Use 30 anonymized fictional outputs and recorded judge scores. Use a fixed seed and keep evaluation cases separate.

**Output:** A rubric, blind review sheet and disagreement report.

**Effort:** 10h · Beginner → intermediate

- **Prompt injection, leakage and adversarial testing:** Extend the project with Prompt injection, leakage and adversarial testing in Human and model judge agreement lab. Adapt this focused lab to the project data: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.  Required concepts: Prompt injection, Leakage and privacy, Adversarial tests.
  - Deliverable: Prompt injection, leakage and adversarial testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A rubric, blind review sheet and disagreement report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prompt injection, leakage and adversarial testing: Prompt injection, leakage and adversarial testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report agreement and inspect disagreements without treating model scores as truth.
- [ ] Prompt injection, leakage and adversarial testing: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data minimization audit

A team needs to track which fields reach each component.

**Data:** Use fictional profiles containing both necessary and unnecessary fields. Use a fixed seed and keep evaluation cases separate.

**Output:** A data-flow inventory and allowlisted request serializer.

**Effort:** 10h · Beginner → intermediate

- **Prompt injection, leakage and adversarial testing:** Extend the project with Prompt injection, leakage and adversarial testing in Data minimization audit. Adapt this focused lab to the project data: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.  Required concepts: Prompt injection, Leakage and privacy, Adversarial tests.
  - Deliverable: Prompt injection, leakage and adversarial testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A data-flow inventory and allowlisted request serializer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prompt injection, leakage and adversarial testing: Prompt injection, leakage and adversarial testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Disallowed fields never enter prompts, telemetry or exported examples.
- [ ] Prompt injection, leakage and adversarial testing: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Release regression gate

A maintainer needs a repeatable quality decision before release.

**Data:** Store baseline and candidate results for 40 fixed cases. Use a fixed seed and keep evaluation cases separate.

**Output:** A deterministic CI gate with explicit allowed regressions.

**Effort:** 10h · Beginner → intermediate

- **Prompt injection, leakage and adversarial testing:** Extend the project with Prompt injection, leakage and adversarial testing in Release regression gate. Adapt this focused lab to the project data: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.  Required concepts: Prompt injection, Leakage and privacy, Adversarial tests.
  - Deliverable: Prompt injection, leakage and adversarial testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A deterministic CI gate with explicit allowed regressions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prompt injection, leakage and adversarial testing: Prompt injection, leakage and adversarial testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Fail when a critical case regresses even if average score improves.
- [ ] Prompt injection, leakage and adversarial testing: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Secret exposure regression kit

A maintainer needs to prevent test secrets leaking into logs.

**Data:** Generate fake credentials and malformed requests only. Use a fixed seed and keep evaluation cases separate.

**Output:** A redaction pipeline with log and response checks.

**Effort:** 10h · Beginner → intermediate

- **Prompt injection, leakage and adversarial testing:** Extend the project with Prompt injection, leakage and adversarial testing in Secret exposure regression kit. Adapt this focused lab to the project data: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.  Required concepts: Prompt injection, Leakage and privacy, Adversarial tests.
  - Deliverable: Prompt injection, leakage and adversarial testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A redaction pipeline with log and response checks. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prompt injection, leakage and adversarial testing: Prompt injection, leakage and adversarial testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] No seeded secret appears in outputs, including exception messages.
- [ ] Prompt injection, leakage and adversarial testing: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Evaluation slice explorer

An analyst needs to find failures hidden by an average score.

**Data:** Generate 100 labeled results across language and length slices. Use a fixed seed and keep evaluation cases separate.

**Output:** A per-slice report with sample counts and uncertainty.

**Effort:** 10h · Beginner → intermediate

- **Prompt injection, leakage and adversarial testing:** Extend the project with Prompt injection, leakage and adversarial testing in Evaluation slice explorer. Adapt this focused lab to the project data: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.  Required concepts: Prompt injection, Leakage and privacy, Adversarial tests.
  - Deliverable: Prompt injection, leakage and adversarial testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A per-slice report with sample counts and uncertainty. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prompt injection, leakage and adversarial testing: Prompt injection, leakage and adversarial testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Flag small samples and reproduce all aggregate metrics from raw cases.
- [ ] Prompt injection, leakage and adversarial testing: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local AI service threat model

A builder needs practical boundaries for a small AI app.

**Data:** Use a fictional notes assistant architecture and seeded abuse cases. Use a fixed seed and keep evaluation cases separate.

**Output:** A threat model linked to tests and mitigations.

**Effort:** 10h · Beginner → intermediate

- **Prompt injection, leakage and adversarial testing:** Extend the project with Prompt injection, leakage and adversarial testing in Local AI service threat model. Adapt this focused lab to the project data: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.  Required concepts: Prompt injection, Leakage and privacy, Adversarial tests.
  - Deliverable: Prompt injection, leakage and adversarial testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A threat model linked to tests and mitigations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Prompt injection, leakage and adversarial testing: Prompt injection, leakage and adversarial testing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Trace each trust boundary to a concrete enforcement point and test.
- [ ] Prompt injection, leakage and adversarial testing: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="security-guardrails"></a>

### Guardrails, secrets, bias/fairness and graceful failure

Constrain inputs and actions while making limitations visible to users.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Prompt injection, leakage and adversarial testing](eval-security.md#security-injection) Navigation is unrestricted.

#### Concepts

- [ ] **Guardrails:** Input/output validation, permissions and action limits provide layered controls; content filters alone are insufficient.
  - Example: Allowlist tool names and cap requested result counts.
  - Videos:
    - [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
      - Explains: Direct/indirect prompt injection and application trust boundaries.
      - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
      - Watch for: Focus on guardrails. Then reproduce the lesson example: Allowlist tool names and cap requested result counts.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on guardrails. Then reproduce the lesson example: Allowlist tool names and cap requested result counts.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [ ] **Secrets and rate limits:** Keep credentials outside source code; enforce limits at trusted boundaries and sanitize logs.
  - Example: Return a bounded retry hint when a request budget is exceeded.
  - Videos:
    - [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
      - Explains: Direct/indirect prompt injection and application trust boundaries.
      - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
      - Watch for: Focus on secrets and rate limits. Then reproduce the lesson example: Return a bounded retry hint when a request budget is exceeded.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on secrets and rate limits. Then reproduce the lesson example: Return a bounded retry hint when a request budget is exceeded.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [ ] **Bias and fairness:** Evaluate performance across relevant groups without assuming aggregate accuracy is equitable.
  - Example: Compare false-negative rates across synthetic groups and report sample sizes.
  - Videos:
    - [MLOps for fairness: evaluation workflows](https://www.youtube.com/watch?v=xAN1HxU5XeU) · Google Responsible AI speaker · Technical session
      - Explains: Algorithmic bias, fairness metrics and practical evaluation workflows.
      - Useful because: Add meaningful error slices and document sample-size limits.
      - Watch for: Focus on bias and fairness. Then reproduce the lesson example: Compare false-negative rates across synthetic groups and report sample sizes.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=xAN1HxU5XeU
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on bias and fairness. Then reproduce the lesson example: Compare false-negative rates across synthetic groups and report sample sizes.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [ ] **Graceful failure:** Explain unavailable dependencies and safe next actions instead of inventing answers.
  - Example: Return a partial cited answer or abstention with a clear reason.
  - Videos:
    - [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
      - Explains: Direct/indirect prompt injection and application trust boundaries.
      - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
      - Watch for: Focus on graceful failure. Then reproduce the lesson example: Return a partial cited answer or abstention with a clear reason.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on graceful failure. Then reproduce the lesson example: Return a partial cited answer or abstention with a clear reason.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8

#### YouTube: focused explanations and full courses

- [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
  - Explains: Direct/indirect prompt injection and application trust boundaries.
  - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
- [MLOps for fairness: evaluation workflows](https://www.youtube.com/watch?v=xAN1HxU5XeU) · Google Responsible AI speaker · Technical session
  - Explains: Algorithmic bias, fairness metrics and practical evaluation workflows.
  - Useful because: Add meaningful error slices and document sample-size limits.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=xAN1HxU5XeU
- [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
  - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
  - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8

#### Free written resources

1. [OWASP Top 10 for LLM applications](https://genai.owasp.org/llm-top-10/) — Free; no registration required. No paid materials required.
2. [PAIR: errors and graceful failure](https://pair.withgoogle.com/guidebook/chapters/errors-failing-gracefully/) — Free; no registration required. No paid materials required.

#### Lab: Guardrails, secrets, bias/fairness and graceful failure

Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Guardrail bypass experiment

A developer needs to know where validation actually holds.

**Data:** Write malformed schemas, Unicode evasions and oversized-input fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A bounded-input validation and adversarial test suite.

**Effort:** 10h · Beginner → intermediate

- **Guardrails, secrets, bias/fairness and graceful failure:** Implement Guardrails, secrets, bias/fairness and graceful failure in Guardrail bypass experiment. Adapt this focused lab to the project data: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.  Required concepts: Guardrails, Secrets and rate limits, Bias and fairness, Graceful failure.
  - Deliverable: Guardrails, secrets, bias/fairness and graceful failure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bounded-input validation and adversarial test suite. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Guardrails, secrets, bias/fairness and graceful failure: Guardrails, secrets, bias/fairness and graceful failure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Enforce server-side size/schema checks and document uncovered behaviors.
- [ ] Guardrails, secrets, bias/fairness and graceful failure: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Secret exposure regression kit

A maintainer needs to prevent test secrets leaking into logs.

**Data:** Generate fake credentials and malformed requests only. Use a fixed seed and keep evaluation cases separate.

**Output:** A redaction pipeline with log and response checks.

**Effort:** 10h · Beginner → intermediate

- **Guardrails, secrets, bias/fairness and graceful failure:** Implement Guardrails, secrets, bias/fairness and graceful failure in Secret exposure regression kit. Adapt this focused lab to the project data: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.  Required concepts: Guardrails, Secrets and rate limits, Bias and fairness, Graceful failure.
  - Deliverable: Guardrails, secrets, bias/fairness and graceful failure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A redaction pipeline with log and response checks. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Guardrails, secrets, bias/fairness and graceful failure: Guardrails, secrets, bias/fairness and graceful failure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] No seeded secret appears in outputs, including exception messages.
- [ ] Guardrails, secrets, bias/fairness and graceful failure: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Evidence faithfulness audit

A researcher needs to identify unsupported answer claims.

**Data:** Author 25 answers paired with short source passages. Use a fixed seed and keep evaluation cases separate.

**Output:** A claim-level support annotation and scoring report.

**Effort:** 10h · Beginner → intermediate

- **Guardrails, secrets, bias/fairness and graceful failure:** Extend the project with Guardrails, secrets, bias/fairness and graceful failure in Evidence faithfulness audit. Adapt this focused lab to the project data: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.  Required concepts: Guardrails, Secrets and rate limits, Bias and fairness, Graceful failure.
  - Deliverable: Guardrails, secrets, bias/fairness and graceful failure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A claim-level support annotation and scoring report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Guardrails, secrets, bias/fairness and graceful failure: Guardrails, secrets, bias/fairness and graceful failure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Distinguish absent evidence from direct contradiction.
- [ ] Guardrails, secrets, bias/fairness and graceful failure: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Golden dataset workshop

A team needs a small trustworthy evaluation set.

**Data:** Author 40 questions with expected answers, sources and failure categories. Use a fixed seed and keep evaluation cases separate.

**Output:** A versioned evaluation dataset and deterministic runner.

**Effort:** 10h · Beginner → intermediate

- **Guardrails, secrets, bias/fairness and graceful failure:** Extend the project with Guardrails, secrets, bias/fairness and graceful failure in Golden dataset workshop. Adapt this focused lab to the project data: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.  Required concepts: Guardrails, Secrets and rate limits, Bias and fairness, Graceful failure.
  - Deliverable: Guardrails, secrets, bias/fairness and graceful failure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A versioned evaluation dataset and deterministic runner. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Guardrails, secrets, bias/fairness and graceful failure: Guardrails, secrets, bias/fairness and graceful failure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Separate development cases from a locked holdout and detect a seeded regression.
- [ ] Guardrails, secrets, bias/fairness and graceful failure: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Prompt injection boundary lab

A developer needs to prevent retrieved instructions from becoming commands.

**Data:** Create 20 local malicious-document fixtures and benign controls. Use a fixed seed and keep evaluation cases separate.

**Output:** An adversarial harness for a read-only assistant.

**Effort:** 10h · Beginner → intermediate

- **Guardrails, secrets, bias/fairness and graceful failure:** Extend the project with Guardrails, secrets, bias/fairness and graceful failure in Prompt injection boundary lab. Adapt this focused lab to the project data: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.  Required concepts: Guardrails, Secrets and rate limits, Bias and fairness, Graceful failure.
  - Deliverable: Guardrails, secrets, bias/fairness and graceful failure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An adversarial harness for a read-only assistant. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Guardrails, secrets, bias/fairness and graceful failure: Guardrails, secrets, bias/fairness and graceful failure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Tool permissions remain enforced even if an answer follows injected text.
- [ ] Guardrails, secrets, bias/fairness and graceful failure: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Human and model judge agreement lab

A reviewer needs to know when automated ratings disagree.

**Data:** Use 30 anonymized fictional outputs and recorded judge scores. Use a fixed seed and keep evaluation cases separate.

**Output:** A rubric, blind review sheet and disagreement report.

**Effort:** 10h · Beginner → intermediate

- **Guardrails, secrets, bias/fairness and graceful failure:** Extend the project with Guardrails, secrets, bias/fairness and graceful failure in Human and model judge agreement lab. Adapt this focused lab to the project data: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.  Required concepts: Guardrails, Secrets and rate limits, Bias and fairness, Graceful failure.
  - Deliverable: Guardrails, secrets, bias/fairness and graceful failure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A rubric, blind review sheet and disagreement report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Guardrails, secrets, bias/fairness and graceful failure: Guardrails, secrets, bias/fairness and graceful failure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report agreement and inspect disagreements without treating model scores as truth.
- [ ] Guardrails, secrets, bias/fairness and graceful failure: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data minimization audit

A team needs to track which fields reach each component.

**Data:** Use fictional profiles containing both necessary and unnecessary fields. Use a fixed seed and keep evaluation cases separate.

**Output:** A data-flow inventory and allowlisted request serializer.

**Effort:** 10h · Beginner → intermediate

- **Guardrails, secrets, bias/fairness and graceful failure:** Extend the project with Guardrails, secrets, bias/fairness and graceful failure in Data minimization audit. Adapt this focused lab to the project data: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.  Required concepts: Guardrails, Secrets and rate limits, Bias and fairness, Graceful failure.
  - Deliverable: Guardrails, secrets, bias/fairness and graceful failure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A data-flow inventory and allowlisted request serializer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Guardrails, secrets, bias/fairness and graceful failure: Guardrails, secrets, bias/fairness and graceful failure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Disallowed fields never enter prompts, telemetry or exported examples.
- [ ] Guardrails, secrets, bias/fairness and graceful failure: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Release regression gate

A maintainer needs a repeatable quality decision before release.

**Data:** Store baseline and candidate results for 40 fixed cases. Use a fixed seed and keep evaluation cases separate.

**Output:** A deterministic CI gate with explicit allowed regressions.

**Effort:** 10h · Beginner → intermediate

- **Guardrails, secrets, bias/fairness and graceful failure:** Extend the project with Guardrails, secrets, bias/fairness and graceful failure in Release regression gate. Adapt this focused lab to the project data: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.  Required concepts: Guardrails, Secrets and rate limits, Bias and fairness, Graceful failure.
  - Deliverable: Guardrails, secrets, bias/fairness and graceful failure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A deterministic CI gate with explicit allowed regressions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Guardrails, secrets, bias/fairness and graceful failure: Guardrails, secrets, bias/fairness and graceful failure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Fail when a critical case regresses even if average score improves.
- [ ] Guardrails, secrets, bias/fairness and graceful failure: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Evaluation slice explorer

An analyst needs to find failures hidden by an average score.

**Data:** Generate 100 labeled results across language and length slices. Use a fixed seed and keep evaluation cases separate.

**Output:** A per-slice report with sample counts and uncertainty.

**Effort:** 10h · Beginner → intermediate

- **Guardrails, secrets, bias/fairness and graceful failure:** Extend the project with Guardrails, secrets, bias/fairness and graceful failure in Evaluation slice explorer. Adapt this focused lab to the project data: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.  Required concepts: Guardrails, Secrets and rate limits, Bias and fairness, Graceful failure.
  - Deliverable: Guardrails, secrets, bias/fairness and graceful failure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A per-slice report with sample counts and uncertainty. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Guardrails, secrets, bias/fairness and graceful failure: Guardrails, secrets, bias/fairness and graceful failure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Flag small samples and reproduce all aggregate metrics from raw cases.
- [ ] Guardrails, secrets, bias/fairness and graceful failure: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local AI service threat model

A builder needs practical boundaries for a small AI app.

**Data:** Use a fictional notes assistant architecture and seeded abuse cases. Use a fixed seed and keep evaluation cases separate.

**Output:** A threat model linked to tests and mitigations.

**Effort:** 10h · Beginner → intermediate

- **Guardrails, secrets, bias/fairness and graceful failure:** Extend the project with Guardrails, secrets, bias/fairness and graceful failure in Local AI service threat model. Adapt this focused lab to the project data: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.  Required concepts: Guardrails, Secrets and rate limits, Bias and fairness, Graceful failure.
  - Deliverable: Guardrails, secrets, bias/fairness and graceful failure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A threat model linked to tests and mitigations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Guardrails, secrets, bias/fairness and graceful failure: Guardrails, secrets, bias/fairness and graceful failure: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Trace each trust boundary to a concrete enforcement point and test.
- [ ] Guardrails, secrets, bias/fairness and graceful failure: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Evaluation reliability

<a id="eval-judges-statistics"></a>

### Judge rubrics, disagreement and uncertain improvements

Avoid shipping a change because an unreliable judge or a tiny benchmark produced an attractive average.

**Priority:** Essential · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [Human evaluation, LLM judges and error analysis](eval-security.md#eval-human-judge) Navigation is unrestricted.

#### Concepts

- [ ] **Operational rubrics:** A judge rubric needs observable criteria, examples and an output schema rather than a vague instruction to be helpful.
  - Example: Define factual support, task completion and forbidden disclosure as separately scored fields.
  - Videos:
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on operational rubrics. Then reproduce the lesson example: Define factual support, task completion and forbidden disclosure as separately scored fields.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [ ] **Position and presentation bias:** Judges may prefer the first answer, longer text or a familiar style; randomisation and swaps help reveal these effects.
  - Example: Evaluate answer pairs in both orders and count how often the preferred answer changes.
  - Videos:
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on position and presentation bias. Then reproduce the lesson example: Evaluate answer pairs in both orders and count how often the preferred answer changes.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [ ] **Human disagreement:** Disagreement can expose ambiguous labels or criteria instead of simply identifying a bad annotator.
  - Example: Have two teammates label ten examples, inspect disagreements and revise the rubric before computing a final score.
  - Videos:
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on human disagreement. Then reproduce the lesson example: Have two teammates label ten examples, inspect disagreements and revise the rubric before computing a final score.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [ ] **Paired uncertainty:** Compare systems on the same examples and inspect per-example differences; a small mean difference may not be reliable.
  - Example: Bootstrap paired score differences on a fixed toy benchmark and display the interval with sample size.
  - Videos:
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on paired uncertainty. Then reproduce the lesson example: Bootstrap paired score differences on a fixed toy benchmark and display the interval with sample size.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [ ] **Regression slices and holdouts:** A global improvement can hide a safety regression; keep slices and a protected holdout separate from tuning examples.
  - Example: Require no new privacy failures while improving a retrieval score on development examples.
  - Videos:
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on regression slices and holdouts. Then reproduce the lesson example: Require no new privacy failures while improving a retrieval score on development examples.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8

#### YouTube: focused explanations and full courses

- [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
  - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
  - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [College statistics — full course](https://www.youtube.com/watch?v=xxpc-HPKN28) · freeCodeCamp · Full course · approximately 8h
  - Explains: Descriptive statistics, probability, distributions and statistical reasoning.
  - Useful because: Learn to interpret dataset summaries and uncertainty instead of trusting one metric.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/free-statistics-course/

#### Free written resources

1. [Hugging Face: evaluate a RAG system](https://huggingface.co/learn/cookbook/rag_evaluation) — Free; no registration required. No paid materials required.
2. [Google PAIR: evaluation and feedback](https://pair.withgoogle.com/guidebook/) — Free; no registration required. No paid materials required.

#### Lab: Judge rubrics, disagreement and uncertain improvements

Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Human and model judge agreement lab

A reviewer needs to know when automated ratings disagree.

**Data:** Use 30 anonymized fictional outputs and recorded judge scores. Use a fixed seed and keep evaluation cases separate.

**Output:** A rubric, blind review sheet and disagreement report.

**Effort:** 10h · Beginner → intermediate

- **Judge rubrics, disagreement and uncertain improvements:** Implement Judge rubrics, disagreement and uncertain improvements in Human and model judge agreement lab. Adapt this focused lab to the project data: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.  Required concepts: Operational rubrics, Position and presentation bias, Human disagreement, Paired uncertainty, Regression slices and holdouts.
  - Deliverable: Judge rubrics, disagreement and uncertain improvements: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A rubric, blind review sheet and disagreement report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Judge rubrics, disagreement and uncertain improvements: Judge rubrics, disagreement and uncertain improvements: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report agreement and inspect disagreements without treating model scores as truth.
- [ ] Judge rubrics, disagreement and uncertain improvements: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Evidence faithfulness audit

A researcher needs to identify unsupported answer claims.

**Data:** Author 25 answers paired with short source passages. Use a fixed seed and keep evaluation cases separate.

**Output:** A claim-level support annotation and scoring report.

**Effort:** 10h · Beginner → intermediate

- **Judge rubrics, disagreement and uncertain improvements:** Extend the project with Judge rubrics, disagreement and uncertain improvements in Evidence faithfulness audit. Adapt this focused lab to the project data: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.  Required concepts: Operational rubrics, Position and presentation bias, Human disagreement, Paired uncertainty, Regression slices and holdouts.
  - Deliverable: Judge rubrics, disagreement and uncertain improvements: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A claim-level support annotation and scoring report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Judge rubrics, disagreement and uncertain improvements: Judge rubrics, disagreement and uncertain improvements: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Distinguish absent evidence from direct contradiction.
- [ ] Judge rubrics, disagreement and uncertain improvements: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Golden dataset workshop

A team needs a small trustworthy evaluation set.

**Data:** Author 40 questions with expected answers, sources and failure categories. Use a fixed seed and keep evaluation cases separate.

**Output:** A versioned evaluation dataset and deterministic runner.

**Effort:** 10h · Beginner → intermediate

- **Judge rubrics, disagreement and uncertain improvements:** Extend the project with Judge rubrics, disagreement and uncertain improvements in Golden dataset workshop. Adapt this focused lab to the project data: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.  Required concepts: Operational rubrics, Position and presentation bias, Human disagreement, Paired uncertainty, Regression slices and holdouts.
  - Deliverable: Judge rubrics, disagreement and uncertain improvements: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A versioned evaluation dataset and deterministic runner. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Judge rubrics, disagreement and uncertain improvements: Judge rubrics, disagreement and uncertain improvements: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Separate development cases from a locked holdout and detect a seeded regression.
- [ ] Judge rubrics, disagreement and uncertain improvements: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Guardrail bypass experiment

A developer needs to know where validation actually holds.

**Data:** Write malformed schemas, Unicode evasions and oversized-input fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A bounded-input validation and adversarial test suite.

**Effort:** 10h · Beginner → intermediate

- **Judge rubrics, disagreement and uncertain improvements:** Extend the project with Judge rubrics, disagreement and uncertain improvements in Guardrail bypass experiment. Adapt this focused lab to the project data: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.  Required concepts: Operational rubrics, Position and presentation bias, Human disagreement, Paired uncertainty, Regression slices and holdouts.
  - Deliverable: Judge rubrics, disagreement and uncertain improvements: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bounded-input validation and adversarial test suite. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Judge rubrics, disagreement and uncertain improvements: Judge rubrics, disagreement and uncertain improvements: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Enforce server-side size/schema checks and document uncovered behaviors.
- [ ] Judge rubrics, disagreement and uncertain improvements: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Prompt injection boundary lab

A developer needs to prevent retrieved instructions from becoming commands.

**Data:** Create 20 local malicious-document fixtures and benign controls. Use a fixed seed and keep evaluation cases separate.

**Output:** An adversarial harness for a read-only assistant.

**Effort:** 10h · Beginner → intermediate

- **Judge rubrics, disagreement and uncertain improvements:** Extend the project with Judge rubrics, disagreement and uncertain improvements in Prompt injection boundary lab. Adapt this focused lab to the project data: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.  Required concepts: Operational rubrics, Position and presentation bias, Human disagreement, Paired uncertainty, Regression slices and holdouts.
  - Deliverable: Judge rubrics, disagreement and uncertain improvements: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An adversarial harness for a read-only assistant. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Judge rubrics, disagreement and uncertain improvements: Judge rubrics, disagreement and uncertain improvements: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Tool permissions remain enforced even if an answer follows injected text.
- [ ] Judge rubrics, disagreement and uncertain improvements: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data minimization audit

A team needs to track which fields reach each component.

**Data:** Use fictional profiles containing both necessary and unnecessary fields. Use a fixed seed and keep evaluation cases separate.

**Output:** A data-flow inventory and allowlisted request serializer.

**Effort:** 10h · Beginner → intermediate

- **Judge rubrics, disagreement and uncertain improvements:** Extend the project with Judge rubrics, disagreement and uncertain improvements in Data minimization audit. Adapt this focused lab to the project data: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.  Required concepts: Operational rubrics, Position and presentation bias, Human disagreement, Paired uncertainty, Regression slices and holdouts.
  - Deliverable: Judge rubrics, disagreement and uncertain improvements: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A data-flow inventory and allowlisted request serializer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Judge rubrics, disagreement and uncertain improvements: Judge rubrics, disagreement and uncertain improvements: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Disallowed fields never enter prompts, telemetry or exported examples.
- [ ] Judge rubrics, disagreement and uncertain improvements: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Release regression gate

A maintainer needs a repeatable quality decision before release.

**Data:** Store baseline and candidate results for 40 fixed cases. Use a fixed seed and keep evaluation cases separate.

**Output:** A deterministic CI gate with explicit allowed regressions.

**Effort:** 10h · Beginner → intermediate

- **Judge rubrics, disagreement and uncertain improvements:** Extend the project with Judge rubrics, disagreement and uncertain improvements in Release regression gate. Adapt this focused lab to the project data: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.  Required concepts: Operational rubrics, Position and presentation bias, Human disagreement, Paired uncertainty, Regression slices and holdouts.
  - Deliverable: Judge rubrics, disagreement and uncertain improvements: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A deterministic CI gate with explicit allowed regressions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Judge rubrics, disagreement and uncertain improvements: Judge rubrics, disagreement and uncertain improvements: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Fail when a critical case regresses even if average score improves.
- [ ] Judge rubrics, disagreement and uncertain improvements: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Secret exposure regression kit

A maintainer needs to prevent test secrets leaking into logs.

**Data:** Generate fake credentials and malformed requests only. Use a fixed seed and keep evaluation cases separate.

**Output:** A redaction pipeline with log and response checks.

**Effort:** 10h · Beginner → intermediate

- **Judge rubrics, disagreement and uncertain improvements:** Extend the project with Judge rubrics, disagreement and uncertain improvements in Secret exposure regression kit. Adapt this focused lab to the project data: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.  Required concepts: Operational rubrics, Position and presentation bias, Human disagreement, Paired uncertainty, Regression slices and holdouts.
  - Deliverable: Judge rubrics, disagreement and uncertain improvements: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A redaction pipeline with log and response checks. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Judge rubrics, disagreement and uncertain improvements: Judge rubrics, disagreement and uncertain improvements: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] No seeded secret appears in outputs, including exception messages.
- [ ] Judge rubrics, disagreement and uncertain improvements: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Evaluation slice explorer

An analyst needs to find failures hidden by an average score.

**Data:** Generate 100 labeled results across language and length slices. Use a fixed seed and keep evaluation cases separate.

**Output:** A per-slice report with sample counts and uncertainty.

**Effort:** 10h · Beginner → intermediate

- **Judge rubrics, disagreement and uncertain improvements:** Extend the project with Judge rubrics, disagreement and uncertain improvements in Evaluation slice explorer. Adapt this focused lab to the project data: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.  Required concepts: Operational rubrics, Position and presentation bias, Human disagreement, Paired uncertainty, Regression slices and holdouts.
  - Deliverable: Judge rubrics, disagreement and uncertain improvements: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A per-slice report with sample counts and uncertainty. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Judge rubrics, disagreement and uncertain improvements: Judge rubrics, disagreement and uncertain improvements: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Flag small samples and reproduce all aggregate metrics from raw cases.
- [ ] Judge rubrics, disagreement and uncertain improvements: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local AI service threat model

A builder needs practical boundaries for a small AI app.

**Data:** Use a fictional notes assistant architecture and seeded abuse cases. Use a fixed seed and keep evaluation cases separate.

**Output:** A threat model linked to tests and mitigations.

**Effort:** 10h · Beginner → intermediate

- **Judge rubrics, disagreement and uncertain improvements:** Extend the project with Judge rubrics, disagreement and uncertain improvements in Local AI service threat model. Adapt this focused lab to the project data: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.  Required concepts: Operational rubrics, Position and presentation bias, Human disagreement, Paired uncertainty, Regression slices and holdouts.
  - Deliverable: Judge rubrics, disagreement and uncertain improvements: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A threat model linked to tests and mitigations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Judge rubrics, disagreement and uncertain improvements: Judge rubrics, disagreement and uncertain improvements: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Trace each trust boundary to a concrete enforcement point and test.
- [ ] Judge rubrics, disagreement and uncertain improvements: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="security-threat-boundaries"></a>

### Threat modelling, indirect injection and data minimisation

Place controls at real trust boundaries rather than assuming a prompt can secure every operation.

**Priority:** Essential · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [Prompt injection, leakage and adversarial testing](eval-security.md#security-injection) Navigation is unrestricted.

#### Concepts

- [ ] **Assets and trust boundaries:** A threat model identifies valuable data, actors and transitions between trusted instructions and untrusted content.
  - Example: Draw where retrieved documents, user inputs and tool outputs enter a note assistant.
  - Videos:
    - [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
      - Explains: Direct/indirect prompt injection and application trust boundaries.
      - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
      - Watch for: Focus on assets and trust boundaries. Then reproduce the lesson example: Draw where retrieved documents, user inputs and tool outputs enter a note assistant.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on assets and trust boundaries. Then reproduce the lesson example: Draw where retrieved documents, user inputs and tool outputs enter a note assistant.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [ ] **Indirect prompt injection:** Instructions embedded in retrieved material or tool responses can try to redirect the application and should remain data.
  - Example: Put a fake instruction to reveal a secret inside a retrieved Markdown document and verify it grants no tool permission.
  - Videos:
    - [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
      - Explains: Direct/indirect prompt injection and application trust boundaries.
      - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
      - Watch for: Focus on indirect prompt injection. Then reproduce the lesson example: Put a fake instruction to reveal a secret inside a retrieved Markdown document and verify it grants no tool permission.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on indirect prompt injection. Then reproduce the lesson example: Put a fake instruction to reveal a secret inside a retrieved Markdown document and verify it grants no tool permission.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [ ] **Least privilege and output validation:** Limit tool capabilities and validate side-effect payloads outside the model, even if its answer follows an expected format.
  - Example: Allow note reads in one workspace and reject a model-generated write to a different workspace.
  - Videos:
    - [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
      - Explains: Direct/indirect prompt injection and application trust boundaries.
      - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
      - Watch for: Focus on least privilege and output validation. Then reproduce the lesson example: Allow note reads in one workspace and reject a model-generated write to a different workspace.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on least privilege and output validation. Then reproduce the lesson example: Allow note reads in one workspace and reject a model-generated write to a different workspace.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [ ] **Data minimisation and logging:** Send and retain only data needed for the task; logs can expose sensitive prompts even when the UI is private.
  - Example: Redact fake secrets from request logs and test that raw credentials never reach an error record.
  - Videos:
    - [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
      - Explains: Direct/indirect prompt injection and application trust boundaries.
      - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
      - Watch for: Focus on data minimisation and logging. Then reproduce the lesson example: Redact fake secrets from request logs and test that raw credentials never reach an error record.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on data minimisation and logging. Then reproduce the lesson example: Redact fake secrets from request logs and test that raw credentials never reach an error record.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [ ] **Defence-in-depth testing:** Input filters, isolation, permissions and human review address different failure modes and none establishes total immunity alone.
  - Example: Show an injection test that bypasses a keyword filter but is stopped by an object-level permission check.
  - Videos:
    - [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
      - Explains: Direct/indirect prompt injection and application trust boundaries.
      - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
      - Watch for: Focus on defence-in-depth testing. Then reproduce the lesson example: Show an injection test that bypasses a keyword filter but is stopped by an object-level permission check.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on defence-in-depth testing. Then reproduce the lesson example: Show an injection test that bypasses a keyword filter but is stopped by an object-level permission check.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8

#### YouTube: focused explanations and full courses

- [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
  - Explains: Direct/indirect prompt injection and application trust boundaries.
  - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
- [MLOps for fairness: evaluation workflows](https://www.youtube.com/watch?v=xAN1HxU5XeU) · Google Responsible AI speaker · Technical session
  - Explains: Algorithmic bias, fairness metrics and practical evaluation workflows.
  - Useful because: Add meaningful error slices and document sample-size limits.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=xAN1HxU5XeU
- [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
  - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
  - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8

#### Free written resources

1. [OWASP: LLM prompt injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) — Free; no registration required. No paid materials required.
2. [OWASP: sensitive information disclosure](https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/) — Free; no registration required. No paid materials required.

#### Lab: Threat modelling, indirect injection and data minimisation

Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Data minimization audit

A team needs to track which fields reach each component.

**Data:** Use fictional profiles containing both necessary and unnecessary fields. Use a fixed seed and keep evaluation cases separate.

**Output:** A data-flow inventory and allowlisted request serializer.

**Effort:** 10h · Beginner → intermediate

- **Threat modelling, indirect injection and data minimisation:** Implement Threat modelling, indirect injection and data minimisation in Data minimization audit. Adapt this focused lab to the project data: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.  Required concepts: Assets and trust boundaries, Indirect prompt injection, Least privilege and output validation, Data minimisation and logging, Defence-in-depth testing.
  - Deliverable: Threat modelling, indirect injection and data minimisation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A data-flow inventory and allowlisted request serializer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Threat modelling, indirect injection and data minimisation: Threat modelling, indirect injection and data minimisation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Disallowed fields never enter prompts, telemetry or exported examples.
- [ ] Threat modelling, indirect injection and data minimisation: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local AI service threat model

A builder needs practical boundaries for a small AI app.

**Data:** Use a fictional notes assistant architecture and seeded abuse cases. Use a fixed seed and keep evaluation cases separate.

**Output:** A threat model linked to tests and mitigations.

**Effort:** 10h · Beginner → intermediate

- **Threat modelling, indirect injection and data minimisation:** Implement Threat modelling, indirect injection and data minimisation in Local AI service threat model. Adapt this focused lab to the project data: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.  Required concepts: Assets and trust boundaries, Indirect prompt injection, Least privilege and output validation, Data minimisation and logging, Defence-in-depth testing.
  - Deliverable: Threat modelling, indirect injection and data minimisation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A threat model linked to tests and mitigations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Threat modelling, indirect injection and data minimisation: Threat modelling, indirect injection and data minimisation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Trace each trust boundary to a concrete enforcement point and test.
- [ ] Threat modelling, indirect injection and data minimisation: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Evidence faithfulness audit

A researcher needs to identify unsupported answer claims.

**Data:** Author 25 answers paired with short source passages. Use a fixed seed and keep evaluation cases separate.

**Output:** A claim-level support annotation and scoring report.

**Effort:** 10h · Beginner → intermediate

- **Threat modelling, indirect injection and data minimisation:** Extend the project with Threat modelling, indirect injection and data minimisation in Evidence faithfulness audit. Adapt this focused lab to the project data: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.  Required concepts: Assets and trust boundaries, Indirect prompt injection, Least privilege and output validation, Data minimisation and logging, Defence-in-depth testing.
  - Deliverable: Threat modelling, indirect injection and data minimisation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A claim-level support annotation and scoring report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Threat modelling, indirect injection and data minimisation: Threat modelling, indirect injection and data minimisation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Distinguish absent evidence from direct contradiction.
- [ ] Threat modelling, indirect injection and data minimisation: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Golden dataset workshop

A team needs a small trustworthy evaluation set.

**Data:** Author 40 questions with expected answers, sources and failure categories. Use a fixed seed and keep evaluation cases separate.

**Output:** A versioned evaluation dataset and deterministic runner.

**Effort:** 10h · Beginner → intermediate

- **Threat modelling, indirect injection and data minimisation:** Extend the project with Threat modelling, indirect injection and data minimisation in Golden dataset workshop. Adapt this focused lab to the project data: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.  Required concepts: Assets and trust boundaries, Indirect prompt injection, Least privilege and output validation, Data minimisation and logging, Defence-in-depth testing.
  - Deliverable: Threat modelling, indirect injection and data minimisation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A versioned evaluation dataset and deterministic runner. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Threat modelling, indirect injection and data minimisation: Threat modelling, indirect injection and data minimisation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Separate development cases from a locked holdout and detect a seeded regression.
- [ ] Threat modelling, indirect injection and data minimisation: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Guardrail bypass experiment

A developer needs to know where validation actually holds.

**Data:** Write malformed schemas, Unicode evasions and oversized-input fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A bounded-input validation and adversarial test suite.

**Effort:** 10h · Beginner → intermediate

- **Threat modelling, indirect injection and data minimisation:** Extend the project with Threat modelling, indirect injection and data minimisation in Guardrail bypass experiment. Adapt this focused lab to the project data: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.  Required concepts: Assets and trust boundaries, Indirect prompt injection, Least privilege and output validation, Data minimisation and logging, Defence-in-depth testing.
  - Deliverable: Threat modelling, indirect injection and data minimisation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bounded-input validation and adversarial test suite. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Threat modelling, indirect injection and data minimisation: Threat modelling, indirect injection and data minimisation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Enforce server-side size/schema checks and document uncovered behaviors.
- [ ] Threat modelling, indirect injection and data minimisation: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Prompt injection boundary lab

A developer needs to prevent retrieved instructions from becoming commands.

**Data:** Create 20 local malicious-document fixtures and benign controls. Use a fixed seed and keep evaluation cases separate.

**Output:** An adversarial harness for a read-only assistant.

**Effort:** 10h · Beginner → intermediate

- **Threat modelling, indirect injection and data minimisation:** Extend the project with Threat modelling, indirect injection and data minimisation in Prompt injection boundary lab. Adapt this focused lab to the project data: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.  Required concepts: Assets and trust boundaries, Indirect prompt injection, Least privilege and output validation, Data minimisation and logging, Defence-in-depth testing.
  - Deliverable: Threat modelling, indirect injection and data minimisation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An adversarial harness for a read-only assistant. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Threat modelling, indirect injection and data minimisation: Threat modelling, indirect injection and data minimisation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Tool permissions remain enforced even if an answer follows injected text.
- [ ] Threat modelling, indirect injection and data minimisation: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Human and model judge agreement lab

A reviewer needs to know when automated ratings disagree.

**Data:** Use 30 anonymized fictional outputs and recorded judge scores. Use a fixed seed and keep evaluation cases separate.

**Output:** A rubric, blind review sheet and disagreement report.

**Effort:** 10h · Beginner → intermediate

- **Threat modelling, indirect injection and data minimisation:** Extend the project with Threat modelling, indirect injection and data minimisation in Human and model judge agreement lab. Adapt this focused lab to the project data: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.  Required concepts: Assets and trust boundaries, Indirect prompt injection, Least privilege and output validation, Data minimisation and logging, Defence-in-depth testing.
  - Deliverable: Threat modelling, indirect injection and data minimisation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A rubric, blind review sheet and disagreement report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Threat modelling, indirect injection and data minimisation: Threat modelling, indirect injection and data minimisation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report agreement and inspect disagreements without treating model scores as truth.
- [ ] Threat modelling, indirect injection and data minimisation: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Release regression gate

A maintainer needs a repeatable quality decision before release.

**Data:** Store baseline and candidate results for 40 fixed cases. Use a fixed seed and keep evaluation cases separate.

**Output:** A deterministic CI gate with explicit allowed regressions.

**Effort:** 10h · Beginner → intermediate

- **Threat modelling, indirect injection and data minimisation:** Extend the project with Threat modelling, indirect injection and data minimisation in Release regression gate. Adapt this focused lab to the project data: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.  Required concepts: Assets and trust boundaries, Indirect prompt injection, Least privilege and output validation, Data minimisation and logging, Defence-in-depth testing.
  - Deliverable: Threat modelling, indirect injection and data minimisation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A deterministic CI gate with explicit allowed regressions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Threat modelling, indirect injection and data minimisation: Threat modelling, indirect injection and data minimisation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Fail when a critical case regresses even if average score improves.
- [ ] Threat modelling, indirect injection and data minimisation: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Secret exposure regression kit

A maintainer needs to prevent test secrets leaking into logs.

**Data:** Generate fake credentials and malformed requests only. Use a fixed seed and keep evaluation cases separate.

**Output:** A redaction pipeline with log and response checks.

**Effort:** 10h · Beginner → intermediate

- **Threat modelling, indirect injection and data minimisation:** Extend the project with Threat modelling, indirect injection and data minimisation in Secret exposure regression kit. Adapt this focused lab to the project data: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.  Required concepts: Assets and trust boundaries, Indirect prompt injection, Least privilege and output validation, Data minimisation and logging, Defence-in-depth testing.
  - Deliverable: Threat modelling, indirect injection and data minimisation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A redaction pipeline with log and response checks. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Threat modelling, indirect injection and data minimisation: Threat modelling, indirect injection and data minimisation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] No seeded secret appears in outputs, including exception messages.
- [ ] Threat modelling, indirect injection and data minimisation: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Evaluation slice explorer

An analyst needs to find failures hidden by an average score.

**Data:** Generate 100 labeled results across language and length slices. Use a fixed seed and keep evaluation cases separate.

**Output:** A per-slice report with sample counts and uncertainty.

**Effort:** 10h · Beginner → intermediate

- **Threat modelling, indirect injection and data minimisation:** Extend the project with Threat modelling, indirect injection and data minimisation in Evaluation slice explorer. Adapt this focused lab to the project data: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.  Required concepts: Assets and trust boundaries, Indirect prompt injection, Least privilege and output validation, Data minimisation and logging, Defence-in-depth testing.
  - Deliverable: Threat modelling, indirect injection and data minimisation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A per-slice report with sample counts and uncertainty. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Threat modelling, indirect injection and data minimisation: Threat modelling, indirect injection and data minimisation: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Flag small samples and reproduce all aggregate metrics from raw cases.
- [ ] Threat modelling, indirect injection and data minimisation: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Output handling, model supply chains and resource limits

<a id="security-output-supply"></a>

### Output handling, model supply chains and resource limits

Output handling, model supply chains and resource limits helps you make explainable engineering decisions and test failure cases. Build the experiment below before relying on the concept in an AI system.

**Priority:** Essential · **Study:** 4h · **Practice:** 5h

**Prerequisites:** [Threat modelling, indirect injection and data minimisation](eval-security.md#security-threat-boundaries) Navigation is unrestricted.

#### Concepts

- [ ] **Supply-chain provenance:** Downloaded models, plugins and dependencies are separate trust decisions from a model's textual answers.
  - Example: Record origin and revision for every executable dependency in a toy manifest.
  - Videos:
    - [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
      - Explains: Direct/indirect prompt injection and application trust boundaries.
      - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
      - Watch for: Focus on supply-chain provenance. Then reproduce the lesson example: Record origin and revision for every executable dependency in a toy manifest.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on supply-chain provenance. Then reproduce the lesson example: Record origin and revision for every executable dependency in a toy manifest.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [ ] **Unsafe output handling:** Generated text must not become executable HTML, SQL or shell syntax without a trusted boundary.
  - Example: Test a response containing an HTML handler and a proposed SQL write.
  - Videos:
    - [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
      - Explains: Direct/indirect prompt injection and application trust boundaries.
      - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
      - Watch for: Focus on unsafe output handling. Then reproduce the lesson example: Test a response containing an HTML handler and a proposed SQL write.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on unsafe output handling. Then reproduce the lesson example: Test a response containing an HTML handler and a proposed SQL write.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [ ] **Retrieval poisoning:** An attacker-controlled document can manipulate retrieval or introduce misleading evidence.
  - Example: Insert a conflicting source into a fixture corpus and trace its influence.
  - Videos:
    - [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
      - Explains: Direct/indirect prompt injection and application trust boundaries.
      - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
      - Watch for: Focus on retrieval poisoning. Then reproduce the lesson example: Insert a conflicting source into a fixture corpus and trace its influence.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on retrieval poisoning. Then reproduce the lesson example: Insert a conflicting source into a fixture corpus and trace its influence.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [ ] **Unbounded consumption:** Token, payload, time and tool-call budgets limit denial-of-service and accidental loops.
  - Example: Reject an oversized input and stop a workflow after five tool calls.
  - Videos:
    - [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
      - Explains: Direct/indirect prompt injection and application trust boundaries.
      - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
      - Watch for: Focus on unbounded consumption. Then reproduce the lesson example: Reject an oversized input and stop a workflow after five tool calls.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on unbounded consumption. Then reproduce the lesson example: Reject an oversized input and stop a workflow after five tool calls.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [ ] **Failure containment:** A rejected or failed action should not leave partial writes or hidden side effects.
  - Example: Fail a multi-step local operation after validation and inspect stored state.
  - Videos:
    - [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
      - Explains: Direct/indirect prompt injection and application trust boundaries.
      - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
      - Watch for: Focus on failure containment. Then reproduce the lesson example: Fail a multi-step local operation after validation and inspect stored state.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on failure containment. Then reproduce the lesson example: Fail a multi-step local operation after validation and inspect stored state.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8

#### YouTube: focused explanations and full courses

- [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
  - Explains: Direct/indirect prompt injection and application trust boundaries.
  - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
- [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
  - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
  - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8

#### Free written resources

1. [Official reference: Output handling, model supply chains and resource limits](https://genai.owasp.org/llm-top-10/) — Free reading; no registration required. Use the local CPU exercise; optional hosted services and downloads are not required..
2. [OWASP: LLM prompt injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) — Free; no registration required. No paid materials required.

#### Lab: Output handling, model supply chains and resource limits

Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.

**Deliverables**

- Runnable CPU notebook or script with deterministic fixtures
- Measured outputs, failure cases and a README explaining decisions

**Completion checks**

- [ ] Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.
- [ ] Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

#### Ten project recommendations

### Evidence faithfulness audit

A researcher needs to identify unsupported answer claims.

**Data:** Author 25 answers paired with short source passages. Use a fixed seed and keep evaluation cases separate.

**Output:** A claim-level support annotation and scoring report.

**Effort:** 10h · Beginner → intermediate

- **Output handling, model supply chains and resource limits:** Extend the project with Output handling, model supply chains and resource limits in Evidence faithfulness audit. Adapt this focused lab to the project data: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.  Required concepts: Supply-chain provenance, Unsafe output handling, Retrieval poisoning, Unbounded consumption, Failure containment.
  - Deliverable: Output handling, model supply chains and resource limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A claim-level support annotation and scoring report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Output handling, model supply chains and resource limits: Output handling, model supply chains and resource limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Distinguish absent evidence from direct contradiction.
- [ ] Output handling, model supply chains and resource limits: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Golden dataset workshop

A team needs a small trustworthy evaluation set.

**Data:** Author 40 questions with expected answers, sources and failure categories. Use a fixed seed and keep evaluation cases separate.

**Output:** A versioned evaluation dataset and deterministic runner.

**Effort:** 10h · Beginner → intermediate

- **Output handling, model supply chains and resource limits:** Extend the project with Output handling, model supply chains and resource limits in Golden dataset workshop. Adapt this focused lab to the project data: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.  Required concepts: Supply-chain provenance, Unsafe output handling, Retrieval poisoning, Unbounded consumption, Failure containment.
  - Deliverable: Output handling, model supply chains and resource limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A versioned evaluation dataset and deterministic runner. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Output handling, model supply chains and resource limits: Output handling, model supply chains and resource limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Separate development cases from a locked holdout and detect a seeded regression.
- [ ] Output handling, model supply chains and resource limits: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Guardrail bypass experiment

A developer needs to know where validation actually holds.

**Data:** Write malformed schemas, Unicode evasions and oversized-input fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A bounded-input validation and adversarial test suite.

**Effort:** 10h · Beginner → intermediate

- **Output handling, model supply chains and resource limits:** Extend the project with Output handling, model supply chains and resource limits in Guardrail bypass experiment. Adapt this focused lab to the project data: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.  Required concepts: Supply-chain provenance, Unsafe output handling, Retrieval poisoning, Unbounded consumption, Failure containment.
  - Deliverable: Output handling, model supply chains and resource limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bounded-input validation and adversarial test suite. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Output handling, model supply chains and resource limits: Output handling, model supply chains and resource limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Enforce server-side size/schema checks and document uncovered behaviors.
- [ ] Output handling, model supply chains and resource limits: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Prompt injection boundary lab

A developer needs to prevent retrieved instructions from becoming commands.

**Data:** Create 20 local malicious-document fixtures and benign controls. Use a fixed seed and keep evaluation cases separate.

**Output:** An adversarial harness for a read-only assistant.

**Effort:** 10h · Beginner → intermediate

- **Output handling, model supply chains and resource limits:** Extend the project with Output handling, model supply chains and resource limits in Prompt injection boundary lab. Adapt this focused lab to the project data: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.  Required concepts: Supply-chain provenance, Unsafe output handling, Retrieval poisoning, Unbounded consumption, Failure containment.
  - Deliverable: Output handling, model supply chains and resource limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An adversarial harness for a read-only assistant. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Output handling, model supply chains and resource limits: Output handling, model supply chains and resource limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Tool permissions remain enforced even if an answer follows injected text.
- [ ] Output handling, model supply chains and resource limits: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Human and model judge agreement lab

A reviewer needs to know when automated ratings disagree.

**Data:** Use 30 anonymized fictional outputs and recorded judge scores. Use a fixed seed and keep evaluation cases separate.

**Output:** A rubric, blind review sheet and disagreement report.

**Effort:** 10h · Beginner → intermediate

- **Output handling, model supply chains and resource limits:** Extend the project with Output handling, model supply chains and resource limits in Human and model judge agreement lab. Adapt this focused lab to the project data: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.  Required concepts: Supply-chain provenance, Unsafe output handling, Retrieval poisoning, Unbounded consumption, Failure containment.
  - Deliverable: Output handling, model supply chains and resource limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A rubric, blind review sheet and disagreement report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Output handling, model supply chains and resource limits: Output handling, model supply chains and resource limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report agreement and inspect disagreements without treating model scores as truth.
- [ ] Output handling, model supply chains and resource limits: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data minimization audit

A team needs to track which fields reach each component.

**Data:** Use fictional profiles containing both necessary and unnecessary fields. Use a fixed seed and keep evaluation cases separate.

**Output:** A data-flow inventory and allowlisted request serializer.

**Effort:** 10h · Beginner → intermediate

- **Output handling, model supply chains and resource limits:** Extend the project with Output handling, model supply chains and resource limits in Data minimization audit. Adapt this focused lab to the project data: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.  Required concepts: Supply-chain provenance, Unsafe output handling, Retrieval poisoning, Unbounded consumption, Failure containment.
  - Deliverable: Output handling, model supply chains and resource limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A data-flow inventory and allowlisted request serializer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Output handling, model supply chains and resource limits: Output handling, model supply chains and resource limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Disallowed fields never enter prompts, telemetry or exported examples.
- [ ] Output handling, model supply chains and resource limits: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Release regression gate

A maintainer needs a repeatable quality decision before release.

**Data:** Store baseline and candidate results for 40 fixed cases. Use a fixed seed and keep evaluation cases separate.

**Output:** A deterministic CI gate with explicit allowed regressions.

**Effort:** 10h · Beginner → intermediate

- **Output handling, model supply chains and resource limits:** Extend the project with Output handling, model supply chains and resource limits in Release regression gate. Adapt this focused lab to the project data: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.  Required concepts: Supply-chain provenance, Unsafe output handling, Retrieval poisoning, Unbounded consumption, Failure containment.
  - Deliverable: Output handling, model supply chains and resource limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A deterministic CI gate with explicit allowed regressions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Output handling, model supply chains and resource limits: Output handling, model supply chains and resource limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Fail when a critical case regresses even if average score improves.
- [ ] Output handling, model supply chains and resource limits: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Secret exposure regression kit

A maintainer needs to prevent test secrets leaking into logs.

**Data:** Generate fake credentials and malformed requests only. Use a fixed seed and keep evaluation cases separate.

**Output:** A redaction pipeline with log and response checks.

**Effort:** 10h · Beginner → intermediate

- **Output handling, model supply chains and resource limits:** Extend the project with Output handling, model supply chains and resource limits in Secret exposure regression kit. Adapt this focused lab to the project data: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.  Required concepts: Supply-chain provenance, Unsafe output handling, Retrieval poisoning, Unbounded consumption, Failure containment.
  - Deliverable: Output handling, model supply chains and resource limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A redaction pipeline with log and response checks. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Output handling, model supply chains and resource limits: Output handling, model supply chains and resource limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] No seeded secret appears in outputs, including exception messages.
- [ ] Output handling, model supply chains and resource limits: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Evaluation slice explorer

An analyst needs to find failures hidden by an average score.

**Data:** Generate 100 labeled results across language and length slices. Use a fixed seed and keep evaluation cases separate.

**Output:** A per-slice report with sample counts and uncertainty.

**Effort:** 10h · Beginner → intermediate

- **Output handling, model supply chains and resource limits:** Extend the project with Output handling, model supply chains and resource limits in Evaluation slice explorer. Adapt this focused lab to the project data: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.  Required concepts: Supply-chain provenance, Unsafe output handling, Retrieval poisoning, Unbounded consumption, Failure containment.
  - Deliverable: Output handling, model supply chains and resource limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A per-slice report with sample counts and uncertainty. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Output handling, model supply chains and resource limits: Output handling, model supply chains and resource limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Flag small samples and reproduce all aggregate metrics from raw cases.
- [ ] Output handling, model supply chains and resource limits: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local AI service threat model

A builder needs practical boundaries for a small AI app.

**Data:** Use a fictional notes assistant architecture and seeded abuse cases. Use a fixed seed and keep evaluation cases separate.

**Output:** A threat model linked to tests and mitigations.

**Effort:** 10h · Beginner → intermediate

- **Output handling, model supply chains and resource limits:** Extend the project with Output handling, model supply chains and resource limits in Local AI service threat model. Adapt this focused lab to the project data: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.  Required concepts: Supply-chain provenance, Unsafe output handling, Retrieval poisoning, Unbounded consumption, Failure containment.
  - Deliverable: Output handling, model supply chains and resource limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A threat model linked to tests and mitigations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Output handling, model supply chains and resource limits: Output handling, model supply chains and resource limits: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Trace each trust boundary to a concrete enforcement point and test.
- [ ] Output handling, model supply chains and resource limits: Threat-model a local assistant and test fake dependency manifests, hostile generated output, oversized documents and repeated tool requests. Enforce boundaries in trusted code and record residual risks.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Stage checkpoint

<a id="checkpoint-eval-security"></a>

### Evaluation and security checkpoint

Demonstrate readiness through a reproducible practical handoff. Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.

**Priority:** Essential · **Study:** 1h · **Practice:** 6h

**Prerequisites:** [Golden datasets and deterministic regression evaluation](eval-security.md#eval-datasets), [Human evaluation, LLM judges and error analysis](eval-security.md#eval-human-judge), [Faithfulness, hallucinations, task success and business metrics](eval-security.md#eval-metrics), [Prompt injection, leakage and adversarial testing](eval-security.md#security-injection), [Guardrails, secrets, bias/fairness and graceful failure](eval-security.md#security-guardrails), [Judge rubrics, disagreement and uncertain improvements](eval-security.md#eval-judges-statistics), [Threat modelling, indirect injection and data minimisation](eval-security.md#security-threat-boundaries), [Output handling, model supply chains and resource limits](eval-security.md#security-output-supply) Navigation is unrestricted.

#### Concepts

- [ ] **Define the success contract:** Write observable checks before implementation so success is not just a plausible demonstration.
  - Example: Turn this task into a numbered acceptance checklist: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.
  - Videos:
    - [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
      - Explains: Direct/indirect prompt injection and application trust boundaries.
      - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
      - Watch for: Focus on define the success contract. Then reproduce the lesson example: Turn this task into a numbered acceptance checklist: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on define the success contract. Then reproduce the lesson example: Turn this task into a numbered acceptance checklist: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [ ] **Reproduce the baseline:** Keep a simple reference output and deterministic inputs so changes can be compared honestly.
  - Example: Run a fixed input twice and compare saved outputs with the documented baseline.
  - Videos:
    - [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
      - Explains: Direct/indirect prompt injection and application trust boundaries.
      - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
      - Watch for: Focus on reproduce the baseline. Then reproduce the lesson example: Run a fixed input twice and compare saved outputs with the documented baseline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on reproduce the baseline. Then reproduce the lesson example: Run a fixed input twice and compare saved outputs with the documented baseline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [ ] **Test a failure boundary:** A working happy path does not establish robustness to malformed data or dependency failures.
  - Example: Inject one malformed input and one controlled failure, then record the resulting state.
  - Videos:
    - [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
      - Explains: Direct/indirect prompt injection and application trust boundaries.
      - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
      - Watch for: Focus on test a failure boundary. Then reproduce the lesson example: Inject one malformed input and one controlled failure, then record the resulting state.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on test a failure boundary. Then reproduce the lesson example: Inject one malformed input and one controlled failure, then record the resulting state.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [ ] **Explain the decisions:** Describe why each technique was chosen and what evidence would make you choose differently.
  - Example: Write a short decision note comparing the chosen approach with one simpler alternative.
  - Videos:
    - [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
      - Explains: Direct/indirect prompt injection and application trust boundaries.
      - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
      - Watch for: Focus on explain the decisions. Then reproduce the lesson example: Write a short decision note comparing the chosen approach with one simpler alternative.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on explain the decisions. Then reproduce the lesson example: Write a short decision note comparing the chosen approach with one simpler alternative.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [ ] **Hand off the evidence:** Another learner must be able to reproduce the result from your instructions and supplied inputs.
  - Example: Ask a teammate to run the README commands in a clean environment and record missing steps.
  - Videos:
    - [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
      - Explains: Direct/indirect prompt injection and application trust boundaries.
      - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
      - Watch for: Focus on hand off the evidence. Then reproduce the lesson example: Ask a teammate to run the README commands in a clean environment and record missing steps.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
    - [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
      - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
      - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
      - Watch for: Focus on hand off the evidence. Then reproduce the lesson example: Ask a teammate to run the README commands in a clean environment and record missing steps.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8

#### YouTube: focused explanations and full courses

- [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
  - Explains: Direct/indirect prompt injection and application trust boundaries.
  - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
- [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
  - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
  - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8

#### Free written resources

1. [Official reference: Output handling, model supply chains and resource limits](https://genai.owasp.org/llm-top-10/) — Free reading; no registration required. Use the local CPU exercise; optional hosted services and downloads are not required..
2. [OWASP: LLM prompt injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) — Free; no registration required. No paid materials required.

#### Evaluation and security checkpoint

Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.

**Deliverables**

- Runnable project and reproducible input fixtures
- README, results and decision notes
- Failure evidence and clean-start instructions

**Completion checks**

- [ ] Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.
- [ ] Explain the code and results without relying on an AI-generated summary.
- [ ] A teammate can reproduce the demo without paid credentials.

#### Ten project recommendations

### Evidence faithfulness audit

A researcher needs to identify unsupported answer claims.

**Data:** Author 25 answers paired with short source passages. Use a fixed seed and keep evaluation cases separate.

**Output:** A claim-level support annotation and scoring report.

**Effort:** 10h · Beginner → intermediate

- **Evaluation and security checkpoint:** Extend the project with Evaluation and security checkpoint in Evidence faithfulness audit. Adapt this focused lab to the project data: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Evaluation and security checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A claim-level support annotation and scoring report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Evaluation and security checkpoint: Evaluation and security checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Distinguish absent evidence from direct contradiction.
- [ ] Evaluation and security checkpoint: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Golden dataset workshop

A team needs a small trustworthy evaluation set.

**Data:** Author 40 questions with expected answers, sources and failure categories. Use a fixed seed and keep evaluation cases separate.

**Output:** A versioned evaluation dataset and deterministic runner.

**Effort:** 10h · Beginner → intermediate

- **Evaluation and security checkpoint:** Extend the project with Evaluation and security checkpoint in Golden dataset workshop. Adapt this focused lab to the project data: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Evaluation and security checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A versioned evaluation dataset and deterministic runner. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Evaluation and security checkpoint: Evaluation and security checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Separate development cases from a locked holdout and detect a seeded regression.
- [ ] Evaluation and security checkpoint: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Guardrail bypass experiment

A developer needs to know where validation actually holds.

**Data:** Write malformed schemas, Unicode evasions and oversized-input fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A bounded-input validation and adversarial test suite.

**Effort:** 10h · Beginner → intermediate

- **Evaluation and security checkpoint:** Extend the project with Evaluation and security checkpoint in Guardrail bypass experiment. Adapt this focused lab to the project data: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Evaluation and security checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bounded-input validation and adversarial test suite. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Evaluation and security checkpoint: Evaluation and security checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Enforce server-side size/schema checks and document uncovered behaviors.
- [ ] Evaluation and security checkpoint: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Prompt injection boundary lab

A developer needs to prevent retrieved instructions from becoming commands.

**Data:** Create 20 local malicious-document fixtures and benign controls. Use a fixed seed and keep evaluation cases separate.

**Output:** An adversarial harness for a read-only assistant.

**Effort:** 10h · Beginner → intermediate

- **Evaluation and security checkpoint:** Extend the project with Evaluation and security checkpoint in Prompt injection boundary lab. Adapt this focused lab to the project data: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Evaluation and security checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An adversarial harness for a read-only assistant. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Evaluation and security checkpoint: Evaluation and security checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Tool permissions remain enforced even if an answer follows injected text.
- [ ] Evaluation and security checkpoint: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Human and model judge agreement lab

A reviewer needs to know when automated ratings disagree.

**Data:** Use 30 anonymized fictional outputs and recorded judge scores. Use a fixed seed and keep evaluation cases separate.

**Output:** A rubric, blind review sheet and disagreement report.

**Effort:** 10h · Beginner → intermediate

- **Evaluation and security checkpoint:** Extend the project with Evaluation and security checkpoint in Human and model judge agreement lab. Adapt this focused lab to the project data: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Evaluation and security checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A rubric, blind review sheet and disagreement report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Evaluation and security checkpoint: Evaluation and security checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report agreement and inspect disagreements without treating model scores as truth.
- [ ] Evaluation and security checkpoint: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Data minimization audit

A team needs to track which fields reach each component.

**Data:** Use fictional profiles containing both necessary and unnecessary fields. Use a fixed seed and keep evaluation cases separate.

**Output:** A data-flow inventory and allowlisted request serializer.

**Effort:** 10h · Beginner → intermediate

- **Evaluation and security checkpoint:** Extend the project with Evaluation and security checkpoint in Data minimization audit. Adapt this focused lab to the project data: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Evaluation and security checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A data-flow inventory and allowlisted request serializer. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Evaluation and security checkpoint: Evaluation and security checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Disallowed fields never enter prompts, telemetry or exported examples.
- [ ] Evaluation and security checkpoint: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Release regression gate

A maintainer needs a repeatable quality decision before release.

**Data:** Store baseline and candidate results for 40 fixed cases. Use a fixed seed and keep evaluation cases separate.

**Output:** A deterministic CI gate with explicit allowed regressions.

**Effort:** 10h · Beginner → intermediate

- **Evaluation and security checkpoint:** Extend the project with Evaluation and security checkpoint in Release regression gate. Adapt this focused lab to the project data: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Evaluation and security checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A deterministic CI gate with explicit allowed regressions. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Evaluation and security checkpoint: Evaluation and security checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Fail when a critical case regresses even if average score improves.
- [ ] Evaluation and security checkpoint: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Secret exposure regression kit

A maintainer needs to prevent test secrets leaking into logs.

**Data:** Generate fake credentials and malformed requests only. Use a fixed seed and keep evaluation cases separate.

**Output:** A redaction pipeline with log and response checks.

**Effort:** 10h · Beginner → intermediate

- **Evaluation and security checkpoint:** Extend the project with Evaluation and security checkpoint in Secret exposure regression kit. Adapt this focused lab to the project data: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Evaluation and security checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A redaction pipeline with log and response checks. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Evaluation and security checkpoint: Evaluation and security checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] No seeded secret appears in outputs, including exception messages.
- [ ] Evaluation and security checkpoint: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Evaluation slice explorer

An analyst needs to find failures hidden by an average score.

**Data:** Generate 100 labeled results across language and length slices. Use a fixed seed and keep evaluation cases separate.

**Output:** A per-slice report with sample counts and uncertainty.

**Effort:** 10h · Beginner → intermediate

- **Evaluation and security checkpoint:** Extend the project with Evaluation and security checkpoint in Evaluation slice explorer. Adapt this focused lab to the project data: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Evaluation and security checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A per-slice report with sample counts and uncertainty. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Evaluation and security checkpoint: Evaluation and security checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Flag small samples and reproduce all aggregate metrics from raw cases.
- [ ] Evaluation and security checkpoint: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Local AI service threat model

A builder needs practical boundaries for a small AI app.

**Data:** Use a fictional notes assistant architecture and seeded abuse cases. Use a fixed seed and keep evaluation cases separate.

**Output:** A threat model linked to tests and mitigations.

**Effort:** 10h · Beginner → intermediate

- **Evaluation and security checkpoint:** Extend the project with Evaluation and security checkpoint in Local AI service threat model. Adapt this focused lab to the project data: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Evaluation and security checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A threat model linked to tests and mitigations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Evaluation and security checkpoint: Evaluation and security checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Trace each trust boundary to a concrete enforcement point and test.
- [ ] Evaluation and security checkpoint: Build a locked holdout and regression runner for the assistant. Test unsupported claims, malicious retrieved text, unauthorized tools, oversized payloads and malformed output. Publish failures and residual risks.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

