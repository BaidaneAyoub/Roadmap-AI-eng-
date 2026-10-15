# Evaluation and security

Make quality, safety and failure behavior measurable.

## Main route · Step 6 of 8

**Goal:** Measure quality and protect the application against predictable failures.

**Stage checkpoint:** Create a golden dataset, regression report and prompt-injection tests with explicit failure handling.

Test quality, privacy and hostile inputs. Add agents only when tools and multi-step workflows serve the problem.

Follow the modules and lessons below at your pace. Finish each exercise, save your evidence and self-assessment, then continue. Completed and Already known count as completed; Skipped is reported separately. You can move ahead at any time.

[Full pipeline](../PIPELINE.md) · [Next step: Deployment and operations](deployment.md)

## Evaluation-driven development

<a id="eval-datasets"></a>

### Golden datasets and deterministic regression evaluation

Make improvement claims reproducible and keep evaluation cases separate from tuning.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

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

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Golden datasets and deterministic regression evaluation:** Build a golden task set and test evidence support, permissions and failure cases.  For Golden datasets and deterministic regression evaluation, explicitly apply Golden datasets, Deterministic checks, Regression evaluation.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Golden datasets and deterministic regression evaluation: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Golden datasets and deterministic regression evaluation: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Golden datasets and deterministic regression evaluation:** Build a golden task set and test evidence support, permissions and failure cases.  For Golden datasets and deterministic regression evaluation, explicitly apply Golden datasets, Deterministic checks, Regression evaluation.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Golden datasets and deterministic regression evaluation: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Golden datasets and deterministic regression evaluation: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Golden datasets and deterministic regression evaluation:** Build a golden task set and test evidence support, permissions and failure cases.  For Golden datasets and deterministic regression evaluation, explicitly apply Golden datasets, Deterministic checks, Regression evaluation.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Golden datasets and deterministic regression evaluation: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Golden datasets and deterministic regression evaluation: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Golden datasets and deterministic regression evaluation:** Build a golden task set and test evidence support, permissions and failure cases.  For Golden datasets and deterministic regression evaluation, explicitly apply Golden datasets, Deterministic checks, Regression evaluation.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Golden datasets and deterministic regression evaluation: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Golden datasets and deterministic regression evaluation: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Golden datasets and deterministic regression evaluation:** Build a golden task set and test evidence support, permissions and failure cases.  For Golden datasets and deterministic regression evaluation, explicitly apply Golden datasets, Deterministic checks, Regression evaluation.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Golden datasets and deterministic regression evaluation: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Golden datasets and deterministic regression evaluation: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Golden datasets and deterministic regression evaluation:** Build a golden task set and test evidence support, permissions and failure cases.  For Golden datasets and deterministic regression evaluation, explicitly apply Golden datasets, Deterministic checks, Regression evaluation.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Golden datasets and deterministic regression evaluation: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Golden datasets and deterministic regression evaluation: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Golden datasets and deterministic regression evaluation:** Build a golden task set and test evidence support, permissions and failure cases.  For Golden datasets and deterministic regression evaluation, explicitly apply Golden datasets, Deterministic checks, Regression evaluation.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Golden datasets and deterministic regression evaluation: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Golden datasets and deterministic regression evaluation: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Golden datasets and deterministic regression evaluation:** Build a golden task set and test evidence support, permissions and failure cases.  For Golden datasets and deterministic regression evaluation, explicitly apply Golden datasets, Deterministic checks, Regression evaluation.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Golden datasets and deterministic regression evaluation: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Golden datasets and deterministic regression evaluation: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Golden datasets and deterministic regression evaluation:** Build a golden task set and test evidence support, permissions and failure cases.  For Golden datasets and deterministic regression evaluation, explicitly apply Golden datasets, Deterministic checks, Regression evaluation.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Golden datasets and deterministic regression evaluation: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Golden datasets and deterministic regression evaluation: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Golden datasets and deterministic regression evaluation:** Build a golden task set and test evidence support, permissions and failure cases.  For Golden datasets and deterministic regression evaluation, explicitly apply Golden datasets, Deterministic checks, Regression evaluation.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Golden datasets and deterministic regression evaluation: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Golden datasets and deterministic regression evaluation: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create a twenty-case fixture dataset and an offline evaluator with schema, citation and expected-action checks; compare two mock system versions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="eval-human-judge"></a>

### Human evaluation, LLM judges and error analysis

Combine measurable checks with careful human judgment and known judge limitations.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

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

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Human evaluation, LLM judges and error analysis:** Build a golden task set and test evidence support, permissions and failure cases.  For Human evaluation, LLM judges and error analysis, explicitly apply Human rubrics, Model-based judging, Failure categories.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Human evaluation, LLM judges and error analysis: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Human evaluation, LLM judges and error analysis: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Human evaluation, LLM judges and error analysis:** Build a golden task set and test evidence support, permissions and failure cases.  For Human evaluation, LLM judges and error analysis, explicitly apply Human rubrics, Model-based judging, Failure categories.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Human evaluation, LLM judges and error analysis: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Human evaluation, LLM judges and error analysis: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Human evaluation, LLM judges and error analysis:** Build a golden task set and test evidence support, permissions and failure cases.  For Human evaluation, LLM judges and error analysis, explicitly apply Human rubrics, Model-based judging, Failure categories.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Human evaluation, LLM judges and error analysis: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Human evaluation, LLM judges and error analysis: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Human evaluation, LLM judges and error analysis:** Build a golden task set and test evidence support, permissions and failure cases.  For Human evaluation, LLM judges and error analysis, explicitly apply Human rubrics, Model-based judging, Failure categories.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Human evaluation, LLM judges and error analysis: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Human evaluation, LLM judges and error analysis: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Human evaluation, LLM judges and error analysis:** Build a golden task set and test evidence support, permissions and failure cases.  For Human evaluation, LLM judges and error analysis, explicitly apply Human rubrics, Model-based judging, Failure categories.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Human evaluation, LLM judges and error analysis: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Human evaluation, LLM judges and error analysis: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Human evaluation, LLM judges and error analysis:** Build a golden task set and test evidence support, permissions and failure cases.  For Human evaluation, LLM judges and error analysis, explicitly apply Human rubrics, Model-based judging, Failure categories.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Human evaluation, LLM judges and error analysis: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Human evaluation, LLM judges and error analysis: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Human evaluation, LLM judges and error analysis:** Build a golden task set and test evidence support, permissions and failure cases.  For Human evaluation, LLM judges and error analysis, explicitly apply Human rubrics, Model-based judging, Failure categories.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Human evaluation, LLM judges and error analysis: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Human evaluation, LLM judges and error analysis: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Human evaluation, LLM judges and error analysis:** Build a golden task set and test evidence support, permissions and failure cases.  For Human evaluation, LLM judges and error analysis, explicitly apply Human rubrics, Model-based judging, Failure categories.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Human evaluation, LLM judges and error analysis: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Human evaluation, LLM judges and error analysis: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Human evaluation, LLM judges and error analysis:** Build a golden task set and test evidence support, permissions and failure cases.  For Human evaluation, LLM judges and error analysis, explicitly apply Human rubrics, Model-based judging, Failure categories.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Human evaluation, LLM judges and error analysis: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Human evaluation, LLM judges and error analysis: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Human evaluation, LLM judges and error analysis:** Build a golden task set and test evidence support, permissions and failure cases.  For Human evaluation, LLM judges and error analysis, explicitly apply Human rubrics, Model-based judging, Failure categories.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Human evaluation, LLM judges and error analysis: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Human evaluation, LLM judges and error analysis: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Build a human-rating sheet and a fixture-based judge comparison; compute agreement, inspect five disagreements and categorize errors without calling a paid model.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="eval-metrics"></a>

### Faithfulness, hallucinations, task success and business metrics

Measure product outcomes alongside model quality, latency and cost.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

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

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Faithfulness, hallucinations, task success and business metrics:** Build a golden task set and test evidence support, permissions and failure cases.  For Faithfulness, hallucinations, task success and business metrics, explicitly apply Faithfulness and hallucinations, Task completion, Operational and business metrics.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Faithfulness, hallucinations, task success and business metrics: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Faithfulness, hallucinations, task success and business metrics: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Faithfulness, hallucinations, task success and business metrics:** Build a golden task set and test evidence support, permissions and failure cases.  For Faithfulness, hallucinations, task success and business metrics, explicitly apply Faithfulness and hallucinations, Task completion, Operational and business metrics.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Faithfulness, hallucinations, task success and business metrics: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Faithfulness, hallucinations, task success and business metrics: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Faithfulness, hallucinations, task success and business metrics:** Build a golden task set and test evidence support, permissions and failure cases.  For Faithfulness, hallucinations, task success and business metrics, explicitly apply Faithfulness and hallucinations, Task completion, Operational and business metrics.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Faithfulness, hallucinations, task success and business metrics: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Faithfulness, hallucinations, task success and business metrics: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Faithfulness, hallucinations, task success and business metrics:** Build a golden task set and test evidence support, permissions and failure cases.  For Faithfulness, hallucinations, task success and business metrics, explicitly apply Faithfulness and hallucinations, Task completion, Operational and business metrics.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Faithfulness, hallucinations, task success and business metrics: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Faithfulness, hallucinations, task success and business metrics: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Faithfulness, hallucinations, task success and business metrics:** Build a golden task set and test evidence support, permissions and failure cases.  For Faithfulness, hallucinations, task success and business metrics, explicitly apply Faithfulness and hallucinations, Task completion, Operational and business metrics.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Faithfulness, hallucinations, task success and business metrics: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Faithfulness, hallucinations, task success and business metrics: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Faithfulness, hallucinations, task success and business metrics:** Build a golden task set and test evidence support, permissions and failure cases.  For Faithfulness, hallucinations, task success and business metrics, explicitly apply Faithfulness and hallucinations, Task completion, Operational and business metrics.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Faithfulness, hallucinations, task success and business metrics: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Faithfulness, hallucinations, task success and business metrics: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Faithfulness, hallucinations, task success and business metrics:** Build a golden task set and test evidence support, permissions and failure cases.  For Faithfulness, hallucinations, task success and business metrics, explicitly apply Faithfulness and hallucinations, Task completion, Operational and business metrics.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Faithfulness, hallucinations, task success and business metrics: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Faithfulness, hallucinations, task success and business metrics: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Faithfulness, hallucinations, task success and business metrics:** Build a golden task set and test evidence support, permissions and failure cases.  For Faithfulness, hallucinations, task success and business metrics, explicitly apply Faithfulness and hallucinations, Task completion, Operational and business metrics.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Faithfulness, hallucinations, task success and business metrics: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Faithfulness, hallucinations, task success and business metrics: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Faithfulness, hallucinations, task success and business metrics:** Build a golden task set and test evidence support, permissions and failure cases.  For Faithfulness, hallucinations, task success and business metrics, explicitly apply Faithfulness and hallucinations, Task completion, Operational and business metrics.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Faithfulness, hallucinations, task success and business metrics: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Faithfulness, hallucinations, task success and business metrics: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Faithfulness, hallucinations, task success and business metrics:** Build a golden task set and test evidence support, permissions and failure cases.  For Faithfulness, hallucinations, task success and business metrics, explicitly apply Faithfulness and hallucinations, Task completion, Operational and business metrics.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Faithfulness, hallucinations, task success and business metrics: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Faithfulness, hallucinations, task success and business metrics: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Evaluate twenty fixture tasks with evidence support, completion rate and latency; write an evaluation report with denominators, failure slices and one proposed improvement.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Security and safety

<a id="security-injection"></a>

### Prompt injection, leakage and adversarial testing

Keep retrieved content and model proposals outside trusted authorization decisions.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

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

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Prompt injection, leakage and adversarial testing:** Build a golden task set and test evidence support, permissions and failure cases.  For Prompt injection, leakage and adversarial testing, explicitly apply Prompt injection, Leakage and privacy, Adversarial tests.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompt injection, leakage and adversarial testing: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Prompt injection, leakage and adversarial testing: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Prompt injection, leakage and adversarial testing:** Build a golden task set and test evidence support, permissions and failure cases.  For Prompt injection, leakage and adversarial testing, explicitly apply Prompt injection, Leakage and privacy, Adversarial tests.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompt injection, leakage and adversarial testing: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Prompt injection, leakage and adversarial testing: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Prompt injection, leakage and adversarial testing:** Build a golden task set and test evidence support, permissions and failure cases.  For Prompt injection, leakage and adversarial testing, explicitly apply Prompt injection, Leakage and privacy, Adversarial tests.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompt injection, leakage and adversarial testing: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Prompt injection, leakage and adversarial testing: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Prompt injection, leakage and adversarial testing:** Build a golden task set and test evidence support, permissions and failure cases.  For Prompt injection, leakage and adversarial testing, explicitly apply Prompt injection, Leakage and privacy, Adversarial tests.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompt injection, leakage and adversarial testing: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Prompt injection, leakage and adversarial testing: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Prompt injection, leakage and adversarial testing:** Build a golden task set and test evidence support, permissions and failure cases.  For Prompt injection, leakage and adversarial testing, explicitly apply Prompt injection, Leakage and privacy, Adversarial tests.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompt injection, leakage and adversarial testing: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Prompt injection, leakage and adversarial testing: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Prompt injection, leakage and adversarial testing:** Build a golden task set and test evidence support, permissions and failure cases.  For Prompt injection, leakage and adversarial testing, explicitly apply Prompt injection, Leakage and privacy, Adversarial tests.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompt injection, leakage and adversarial testing: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Prompt injection, leakage and adversarial testing: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Prompt injection, leakage and adversarial testing:** Build a golden task set and test evidence support, permissions and failure cases.  For Prompt injection, leakage and adversarial testing, explicitly apply Prompt injection, Leakage and privacy, Adversarial tests.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompt injection, leakage and adversarial testing: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Prompt injection, leakage and adversarial testing: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Prompt injection, leakage and adversarial testing:** Build a golden task set and test evidence support, permissions and failure cases.  For Prompt injection, leakage and adversarial testing, explicitly apply Prompt injection, Leakage and privacy, Adversarial tests.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompt injection, leakage and adversarial testing: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Prompt injection, leakage and adversarial testing: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Prompt injection, leakage and adversarial testing:** Build a golden task set and test evidence support, permissions and failure cases.  For Prompt injection, leakage and adversarial testing, explicitly apply Prompt injection, Leakage and privacy, Adversarial tests.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompt injection, leakage and adversarial testing: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Prompt injection, leakage and adversarial testing: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Prompt injection, leakage and adversarial testing:** Build a golden task set and test evidence support, permissions and failure cases.  For Prompt injection, leakage and adversarial testing, explicitly apply Prompt injection, Leakage and privacy, Adversarial tests.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompt injection, leakage and adversarial testing: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Prompt injection, leakage and adversarial testing: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Create ten malicious inputs for a mock RAG/tool app; assert no unauthorized document, secret or write operation is exposed.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="security-guardrails"></a>

### Guardrails, secrets, bias/fairness and graceful failure

Constrain inputs and actions while making limitations visible to users.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

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

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Guardrails, secrets, bias/fairness and graceful failure:** Build a golden task set and test evidence support, permissions and failure cases.  For Guardrails, secrets, bias/fairness and graceful failure, explicitly apply Guardrails, Secrets and rate limits, Bias and fairness.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Guardrails, secrets, bias/fairness and graceful failure: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Guardrails, secrets, bias/fairness and graceful failure: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Guardrails, secrets, bias/fairness and graceful failure:** Build a golden task set and test evidence support, permissions and failure cases.  For Guardrails, secrets, bias/fairness and graceful failure, explicitly apply Guardrails, Secrets and rate limits, Bias and fairness.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Guardrails, secrets, bias/fairness and graceful failure: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Guardrails, secrets, bias/fairness and graceful failure: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Guardrails, secrets, bias/fairness and graceful failure:** Build a golden task set and test evidence support, permissions and failure cases.  For Guardrails, secrets, bias/fairness and graceful failure, explicitly apply Guardrails, Secrets and rate limits, Bias and fairness.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Guardrails, secrets, bias/fairness and graceful failure: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Guardrails, secrets, bias/fairness and graceful failure: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Guardrails, secrets, bias/fairness and graceful failure:** Build a golden task set and test evidence support, permissions and failure cases.  For Guardrails, secrets, bias/fairness and graceful failure, explicitly apply Guardrails, Secrets and rate limits, Bias and fairness.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Guardrails, secrets, bias/fairness and graceful failure: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Guardrails, secrets, bias/fairness and graceful failure: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Guardrails, secrets, bias/fairness and graceful failure:** Build a golden task set and test evidence support, permissions and failure cases.  For Guardrails, secrets, bias/fairness and graceful failure, explicitly apply Guardrails, Secrets and rate limits, Bias and fairness.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Guardrails, secrets, bias/fairness and graceful failure: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Guardrails, secrets, bias/fairness and graceful failure: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Guardrails, secrets, bias/fairness and graceful failure:** Build a golden task set and test evidence support, permissions and failure cases.  For Guardrails, secrets, bias/fairness and graceful failure, explicitly apply Guardrails, Secrets and rate limits, Bias and fairness.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Guardrails, secrets, bias/fairness and graceful failure: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Guardrails, secrets, bias/fairness and graceful failure: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Guardrails, secrets, bias/fairness and graceful failure:** Build a golden task set and test evidence support, permissions and failure cases.  For Guardrails, secrets, bias/fairness and graceful failure, explicitly apply Guardrails, Secrets and rate limits, Bias and fairness.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Guardrails, secrets, bias/fairness and graceful failure: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Guardrails, secrets, bias/fairness and graceful failure: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Guardrails, secrets, bias/fairness and graceful failure:** Build a golden task set and test evidence support, permissions and failure cases.  For Guardrails, secrets, bias/fairness and graceful failure, explicitly apply Guardrails, Secrets and rate limits, Bias and fairness.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Guardrails, secrets, bias/fairness and graceful failure: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Guardrails, secrets, bias/fairness and graceful failure: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Guardrails, secrets, bias/fairness and graceful failure:** Build a golden task set and test evidence support, permissions and failure cases.  For Guardrails, secrets, bias/fairness and graceful failure, explicitly apply Guardrails, Secrets and rate limits, Bias and fairness.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Guardrails, secrets, bias/fairness and graceful failure: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Guardrails, secrets, bias/fairness and graceful failure: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Guardrails, secrets, bias/fairness and graceful failure:** Build a golden task set and test evidence support, permissions and failure cases.  For Guardrails, secrets, bias/fairness and graceful failure, explicitly apply Guardrails, Secrets and rate limits, Bias and fairness.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Guardrails, secrets, bias/fairness and graceful failure: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Guardrails, secrets, bias/fairness and graceful failure: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Implement a fixture-based policy gate with input limits, redacted logging and safe failure responses; report a fairness slice analysis with uncertainty and limitations.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Evaluation reliability

<a id="eval-judges-statistics"></a>

### Judge rubrics, disagreement and uncertain improvements

Avoid shipping a change because an unreliable judge or a tiny benchmark produced an attractive average.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

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

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Judge rubrics, disagreement and uncertain improvements:** Build a golden task set and test evidence support, permissions and failure cases.  For Judge rubrics, disagreement and uncertain improvements, explicitly apply Operational rubrics, Position and presentation bias, Human disagreement.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Judge rubrics, disagreement and uncertain improvements: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Judge rubrics, disagreement and uncertain improvements: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Judge rubrics, disagreement and uncertain improvements:** Build a golden task set and test evidence support, permissions and failure cases.  For Judge rubrics, disagreement and uncertain improvements, explicitly apply Operational rubrics, Position and presentation bias, Human disagreement.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Judge rubrics, disagreement and uncertain improvements: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Judge rubrics, disagreement and uncertain improvements: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Judge rubrics, disagreement and uncertain improvements:** Build a golden task set and test evidence support, permissions and failure cases.  For Judge rubrics, disagreement and uncertain improvements, explicitly apply Operational rubrics, Position and presentation bias, Human disagreement.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Judge rubrics, disagreement and uncertain improvements: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Judge rubrics, disagreement and uncertain improvements: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Judge rubrics, disagreement and uncertain improvements:** Build a golden task set and test evidence support, permissions and failure cases.  For Judge rubrics, disagreement and uncertain improvements, explicitly apply Operational rubrics, Position and presentation bias, Human disagreement.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Judge rubrics, disagreement and uncertain improvements: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Judge rubrics, disagreement and uncertain improvements: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Judge rubrics, disagreement and uncertain improvements:** Build a golden task set and test evidence support, permissions and failure cases.  For Judge rubrics, disagreement and uncertain improvements, explicitly apply Operational rubrics, Position and presentation bias, Human disagreement.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Judge rubrics, disagreement and uncertain improvements: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Judge rubrics, disagreement and uncertain improvements: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Judge rubrics, disagreement and uncertain improvements:** Build a golden task set and test evidence support, permissions and failure cases.  For Judge rubrics, disagreement and uncertain improvements, explicitly apply Operational rubrics, Position and presentation bias, Human disagreement.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Judge rubrics, disagreement and uncertain improvements: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Judge rubrics, disagreement and uncertain improvements: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Judge rubrics, disagreement and uncertain improvements:** Build a golden task set and test evidence support, permissions and failure cases.  For Judge rubrics, disagreement and uncertain improvements, explicitly apply Operational rubrics, Position and presentation bias, Human disagreement.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Judge rubrics, disagreement and uncertain improvements: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Judge rubrics, disagreement and uncertain improvements: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Judge rubrics, disagreement and uncertain improvements:** Build a golden task set and test evidence support, permissions and failure cases.  For Judge rubrics, disagreement and uncertain improvements, explicitly apply Operational rubrics, Position and presentation bias, Human disagreement.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Judge rubrics, disagreement and uncertain improvements: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Judge rubrics, disagreement and uncertain improvements: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Judge rubrics, disagreement and uncertain improvements:** Build a golden task set and test evidence support, permissions and failure cases.  For Judge rubrics, disagreement and uncertain improvements, explicitly apply Operational rubrics, Position and presentation bias, Human disagreement.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Judge rubrics, disagreement and uncertain improvements: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Judge rubrics, disagreement and uncertain improvements: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Judge rubrics, disagreement and uncertain improvements:** Build a golden task set and test evidence support, permissions and failure cases.  For Judge rubrics, disagreement and uncertain improvements, explicitly apply Operational rubrics, Position and presentation bias, Human disagreement.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Judge rubrics, disagreement and uncertain improvements: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Judge rubrics, disagreement and uncertain improvements: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Use recorded judge outputs for twenty paired answers, swap presentation order and compare with two human annotations. Produce a rubric revision, disagreement table and paired bootstrap interval without calling a paid judge.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="security-threat-boundaries"></a>

### Threat modelling, indirect injection and data minimisation

Place controls at real trust boundaries rather than assuming a prompt can secure every operation.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

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

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Threat modelling, indirect injection and data minimisation:** Build a golden task set and test evidence support, permissions and failure cases.  For Threat modelling, indirect injection and data minimisation, explicitly apply Assets and trust boundaries, Indirect prompt injection, Least privilege and output validation.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Threat modelling, indirect injection and data minimisation: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Threat modelling, indirect injection and data minimisation: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Threat modelling, indirect injection and data minimisation:** Build a golden task set and test evidence support, permissions and failure cases.  For Threat modelling, indirect injection and data minimisation, explicitly apply Assets and trust boundaries, Indirect prompt injection, Least privilege and output validation.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Threat modelling, indirect injection and data minimisation: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Threat modelling, indirect injection and data minimisation: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Threat modelling, indirect injection and data minimisation:** Build a golden task set and test evidence support, permissions and failure cases.  For Threat modelling, indirect injection and data minimisation, explicitly apply Assets and trust boundaries, Indirect prompt injection, Least privilege and output validation.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Threat modelling, indirect injection and data minimisation: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Threat modelling, indirect injection and data minimisation: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Threat modelling, indirect injection and data minimisation:** Build a golden task set and test evidence support, permissions and failure cases.  For Threat modelling, indirect injection and data minimisation, explicitly apply Assets and trust boundaries, Indirect prompt injection, Least privilege and output validation.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Threat modelling, indirect injection and data minimisation: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Threat modelling, indirect injection and data minimisation: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Threat modelling, indirect injection and data minimisation:** Build a golden task set and test evidence support, permissions and failure cases.  For Threat modelling, indirect injection and data minimisation, explicitly apply Assets and trust boundaries, Indirect prompt injection, Least privilege and output validation.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Threat modelling, indirect injection and data minimisation: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Threat modelling, indirect injection and data minimisation: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Threat modelling, indirect injection and data minimisation:** Build a golden task set and test evidence support, permissions and failure cases.  For Threat modelling, indirect injection and data minimisation, explicitly apply Assets and trust boundaries, Indirect prompt injection, Least privilege and output validation.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Threat modelling, indirect injection and data minimisation: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Threat modelling, indirect injection and data minimisation: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Threat modelling, indirect injection and data minimisation:** Build a golden task set and test evidence support, permissions and failure cases.  For Threat modelling, indirect injection and data minimisation, explicitly apply Assets and trust boundaries, Indirect prompt injection, Least privilege and output validation.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Threat modelling, indirect injection and data minimisation: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Threat modelling, indirect injection and data minimisation: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Threat modelling, indirect injection and data minimisation:** Build a golden task set and test evidence support, permissions and failure cases.  For Threat modelling, indirect injection and data minimisation, explicitly apply Assets and trust boundaries, Indirect prompt injection, Least privilege and output validation.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Threat modelling, indirect injection and data minimisation: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Threat modelling, indirect injection and data minimisation: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Threat modelling, indirect injection and data minimisation:** Build a golden task set and test evidence support, permissions and failure cases.  For Threat modelling, indirect injection and data minimisation, explicitly apply Assets and trust boundaries, Indirect prompt injection, Least privilege and output validation.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Threat modelling, indirect injection and data minimisation: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Threat modelling, indirect injection and data minimisation: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Threat modelling, indirect injection and data minimisation:** Build a golden task set and test evidence support, permissions and failure cases.  For Threat modelling, indirect injection and data minimisation, explicitly apply Assets and trust boundaries, Indirect prompt injection, Least privilege and output validation.
  - Deliverable: An evaluation dataset, security checks and a results report
  - Check: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Threat modelling, indirect injection and data minimisation: An evaluation dataset, security checks and a results report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Threat modelling, indirect injection and data minimisation: Evaluate per-case results, adversarial inputs, latency and a meaningful error slice. Adapt the lesson lab: Threat-model a local document assistant using fake secrets and recorded model responses. Add adversarial documents, permission checks, output validation and log redaction; report the attack cases each boundary blocks and the remaining limitations.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

