# Product and documentation

Build useful products and document only what guides real decisions.

## Main route · Step 8 of 8

**Goal:** Deliver a useful AI product with evidence, feedback and maintainable documentation.

**Stage checkpoint:** Ship a small capstone with requirements, architecture, evaluation, deployment instructions and a runbook.

Deliver a capstone with user feedback and documentation. Start user discovery from day one and revisit it here.

Follow the modules and lessons below at your pace. Finish each exercise, save your evidence and self-assessment, then continue. Completed and Already known count as completed; Skipped is reported separately. You can move ahead at any time.

[Full pipeline](../PIPELINE.md) · [Choose a capstone](../PROJECTS.md)

## Shaping the build

<a id="product-discovery"></a>

### Users, problems, discovery and product decisions

Decide whether AI adds value before selecting a model.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Complexity, code structure and testing](engineering.md#engineering-design) Navigation is unrestricted.

#### Concepts

- [ ] **Discovery:** Observe the current workflow, users and constraints; distinguish a user problem from a requested technology.
  - Example: Interview a teammate about time lost searching course notes.
  - Videos:
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on discovery. Then reproduce the lesson example: Interview a teammate about time lost searching course notes.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY
- [ ] **AI suitability:** A deterministic solution may solve the problem more cheaply and reliably.
  - Example: Use SQL for exact progress totals and retrieval for document questions.
  - Videos:
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on ai suitability. Then reproduce the lesson example: Use SQL for exact progress totals and retrieval for document questions.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY
- [ ] **BRD and stakeholders:** Document business goals, constraints, owners and success metrics.
  - Example: Define minutes saved per search and identify who maintains the knowledge base.
  - Videos:
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on brd and stakeholders. Then reproduce the lesson example: Define minutes saved per search and identify who maintains the knowledge base.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY

#### YouTube: focused explanations and full courses

- [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
  - Explains: How faster development changes the role of product judgment and ownership.
  - Useful because: Frame a real user problem and feedback loop before adding more features.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY

#### Free written resources

1. [PAIR: user needs and success](https://pair.withgoogle.com/guidebook/chapters/user-needs/) — Free; no registration required. No paid materials required.
2. [Google: technical writing essentials](https://developers.google.com/tech-writing/one) — Free; no registration required. No paid materials required.

#### Lab: Users, problems, discovery and product decisions

Interview two teammates, write a problem statement and concise BRD, and compare an AI approach with a deterministic baseline.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Interview two teammates, write a problem statement and concise BRD, and compare an AI approach with a deterministic baseline.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Users, problems, discovery and product decisions:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Users, problems, discovery and product decisions, explicitly apply Discovery, AI suitability, BRD and stakeholders.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates, write a problem statement and concise BRD, and compare an AI approach with a deterministic baseline.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Users, problems, discovery and product decisions: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Users, problems, discovery and product decisions: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates, write a problem statement and concise BRD, and compare an AI approach with a deterministic baseline.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Users, problems, discovery and product decisions:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Users, problems, discovery and product decisions, explicitly apply Discovery, AI suitability, BRD and stakeholders.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates, write a problem statement and concise BRD, and compare an AI approach with a deterministic baseline.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Users, problems, discovery and product decisions: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Users, problems, discovery and product decisions: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates, write a problem statement and concise BRD, and compare an AI approach with a deterministic baseline.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Users, problems, discovery and product decisions:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Users, problems, discovery and product decisions, explicitly apply Discovery, AI suitability, BRD and stakeholders.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates, write a problem statement and concise BRD, and compare an AI approach with a deterministic baseline.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Users, problems, discovery and product decisions: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Users, problems, discovery and product decisions: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates, write a problem statement and concise BRD, and compare an AI approach with a deterministic baseline.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Users, problems, discovery and product decisions:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Users, problems, discovery and product decisions, explicitly apply Discovery, AI suitability, BRD and stakeholders.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates, write a problem statement and concise BRD, and compare an AI approach with a deterministic baseline.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Users, problems, discovery and product decisions: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Users, problems, discovery and product decisions: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates, write a problem statement and concise BRD, and compare an AI approach with a deterministic baseline.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Users, problems, discovery and product decisions:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Users, problems, discovery and product decisions, explicitly apply Discovery, AI suitability, BRD and stakeholders.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates, write a problem statement and concise BRD, and compare an AI approach with a deterministic baseline.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Users, problems, discovery and product decisions: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Users, problems, discovery and product decisions: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates, write a problem statement and concise BRD, and compare an AI approach with a deterministic baseline.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Users, problems, discovery and product decisions:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Users, problems, discovery and product decisions, explicitly apply Discovery, AI suitability, BRD and stakeholders.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates, write a problem statement and concise BRD, and compare an AI approach with a deterministic baseline.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Users, problems, discovery and product decisions: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Users, problems, discovery and product decisions: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates, write a problem statement and concise BRD, and compare an AI approach with a deterministic baseline.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Users, problems, discovery and product decisions:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Users, problems, discovery and product decisions, explicitly apply Discovery, AI suitability, BRD and stakeholders.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates, write a problem statement and concise BRD, and compare an AI approach with a deterministic baseline.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Users, problems, discovery and product decisions: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Users, problems, discovery and product decisions: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates, write a problem statement and concise BRD, and compare an AI approach with a deterministic baseline.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Users, problems, discovery and product decisions:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Users, problems, discovery and product decisions, explicitly apply Discovery, AI suitability, BRD and stakeholders.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates, write a problem statement and concise BRD, and compare an AI approach with a deterministic baseline.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Users, problems, discovery and product decisions: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Users, problems, discovery and product decisions: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates, write a problem statement and concise BRD, and compare an AI approach with a deterministic baseline.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Users, problems, discovery and product decisions:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Users, problems, discovery and product decisions, explicitly apply Discovery, AI suitability, BRD and stakeholders.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates, write a problem statement and concise BRD, and compare an AI approach with a deterministic baseline.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Users, problems, discovery and product decisions: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Users, problems, discovery and product decisions: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates, write a problem statement and concise BRD, and compare an AI approach with a deterministic baseline.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Users, problems, discovery and product decisions:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Users, problems, discovery and product decisions, explicitly apply Discovery, AI suitability, BRD and stakeholders.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates, write a problem statement and concise BRD, and compare an AI approach with a deterministic baseline.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Users, problems, discovery and product decisions: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Users, problems, discovery and product decisions: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates, write a problem statement and concise BRD, and compare an AI approach with a deterministic baseline.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="product-requirements"></a>

### PRD, SRS, use cases and success metrics

Translate a product idea into behavior that can be accepted or rejected.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Users, problems, discovery and product decisions](product.md#product-discovery) Navigation is unrestricted.

#### Concepts

- [ ] **PRD:** Personas, journeys and priorities explain the experience and intended user value.
  - Example: Describe a learner selecting skills and starting a project.
  - Videos:
    - [Software requirements specification — worked tutorial](https://www.youtube.com/watch?v=M5DY3eTyhUA) · Requirements engineering tutorial · Focused tutorial
      - Explains: Functional requirements and software specification structure.
      - Useful because: Write testable requirements and distinguish them from implementation details.
      - Watch for: Focus on prd. Then reproduce the lesson example: Describe a learner selecting skills and starting a project.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=M5DY3eTyhUA
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on prd. Then reproduce the lesson example: Describe a learner selecting skills and starting a project.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY
- [ ] **SRS:** Functional and non-functional requirements define contracts, access rules and performance expectations.
  - Example: State that only the owner can change personal lesson status.
  - Videos:
    - [Software requirements specification — worked tutorial](https://www.youtube.com/watch?v=M5DY3eTyhUA) · Requirements engineering tutorial · Focused tutorial
      - Explains: Functional requirements and software specification structure.
      - Useful because: Write testable requirements and distinguish them from implementation details.
      - Watch for: Focus on srs. Then reproduce the lesson example: State that only the owner can change personal lesson status.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=M5DY3eTyhUA
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on srs. Then reproduce the lesson example: State that only the owner can change personal lesson status.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY
- [ ] **AI use-case specification:** Define model responsibilities, allowed/forbidden actions and escalation behavior.
  - Example: An assistant may draft an answer but cannot modify accounts.
  - Videos:
    - [Software requirements specification — worked tutorial](https://www.youtube.com/watch?v=M5DY3eTyhUA) · Requirements engineering tutorial · Focused tutorial
      - Explains: Functional requirements and software specification structure.
      - Useful because: Write testable requirements and distinguish them from implementation details.
      - Watch for: Focus on ai use-case specification. Then reproduce the lesson example: An assistant may draft an answer but cannot modify accounts.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=M5DY3eTyhUA
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on ai use-case specification. Then reproduce the lesson example: An assistant may draft an answer but cannot modify accounts.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY

#### YouTube: focused explanations and full courses

- [Software requirements specification — worked tutorial](https://www.youtube.com/watch?v=M5DY3eTyhUA) · Requirements engineering tutorial · Focused tutorial
  - Explains: Functional requirements and software specification structure.
  - Useful because: Write testable requirements and distinguish them from implementation details.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=M5DY3eTyhUA
- [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
  - Explains: How faster development changes the role of product judgment and ownership.
  - Useful because: Frame a real user problem and feedback loop before adding more features.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY

#### Free written resources

1. [Google: technical writing essentials](https://developers.google.com/tech-writing/one) — Free; no registration required. No paid materials required.
2. [PAIR: mental models](https://pair.withgoogle.com/guidebook/chapters/mental-models/) — Free; no registration required. No paid materials required.

#### Lab: PRD, SRS, use cases and success metrics

Write a short PRD, SRS and AI use-case specification for a document assistant with five functional checks and explicit safe-failure behavior.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Write a short PRD, SRS and AI use-case specification for a document assistant with five functional checks and explicit safe-failure behavior.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **PRD, SRS, use cases and success metrics:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For PRD, SRS, use cases and success metrics, explicitly apply PRD, SRS, AI use-case specification.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write a short PRD, SRS and AI use-case specification for a document assistant with five functional checks and explicit safe-failure behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] PRD, SRS, use cases and success metrics: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] PRD, SRS, use cases and success metrics: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write a short PRD, SRS and AI use-case specification for a document assistant with five functional checks and explicit safe-failure behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **PRD, SRS, use cases and success metrics:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For PRD, SRS, use cases and success metrics, explicitly apply PRD, SRS, AI use-case specification.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write a short PRD, SRS and AI use-case specification for a document assistant with five functional checks and explicit safe-failure behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] PRD, SRS, use cases and success metrics: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] PRD, SRS, use cases and success metrics: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write a short PRD, SRS and AI use-case specification for a document assistant with five functional checks and explicit safe-failure behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **PRD, SRS, use cases and success metrics:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For PRD, SRS, use cases and success metrics, explicitly apply PRD, SRS, AI use-case specification.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write a short PRD, SRS and AI use-case specification for a document assistant with five functional checks and explicit safe-failure behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] PRD, SRS, use cases and success metrics: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] PRD, SRS, use cases and success metrics: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write a short PRD, SRS and AI use-case specification for a document assistant with five functional checks and explicit safe-failure behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **PRD, SRS, use cases and success metrics:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For PRD, SRS, use cases and success metrics, explicitly apply PRD, SRS, AI use-case specification.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write a short PRD, SRS and AI use-case specification for a document assistant with five functional checks and explicit safe-failure behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] PRD, SRS, use cases and success metrics: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] PRD, SRS, use cases and success metrics: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write a short PRD, SRS and AI use-case specification for a document assistant with five functional checks and explicit safe-failure behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **PRD, SRS, use cases and success metrics:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For PRD, SRS, use cases and success metrics, explicitly apply PRD, SRS, AI use-case specification.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write a short PRD, SRS and AI use-case specification for a document assistant with five functional checks and explicit safe-failure behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] PRD, SRS, use cases and success metrics: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] PRD, SRS, use cases and success metrics: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write a short PRD, SRS and AI use-case specification for a document assistant with five functional checks and explicit safe-failure behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **PRD, SRS, use cases and success metrics:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For PRD, SRS, use cases and success metrics, explicitly apply PRD, SRS, AI use-case specification.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write a short PRD, SRS and AI use-case specification for a document assistant with five functional checks and explicit safe-failure behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] PRD, SRS, use cases and success metrics: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] PRD, SRS, use cases and success metrics: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write a short PRD, SRS and AI use-case specification for a document assistant with five functional checks and explicit safe-failure behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **PRD, SRS, use cases and success metrics:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For PRD, SRS, use cases and success metrics, explicitly apply PRD, SRS, AI use-case specification.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write a short PRD, SRS and AI use-case specification for a document assistant with five functional checks and explicit safe-failure behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] PRD, SRS, use cases and success metrics: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] PRD, SRS, use cases and success metrics: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write a short PRD, SRS and AI use-case specification for a document assistant with five functional checks and explicit safe-failure behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **PRD, SRS, use cases and success metrics:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For PRD, SRS, use cases and success metrics, explicitly apply PRD, SRS, AI use-case specification.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write a short PRD, SRS and AI use-case specification for a document assistant with five functional checks and explicit safe-failure behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] PRD, SRS, use cases and success metrics: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] PRD, SRS, use cases and success metrics: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write a short PRD, SRS and AI use-case specification for a document assistant with five functional checks and explicit safe-failure behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **PRD, SRS, use cases and success metrics:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For PRD, SRS, use cases and success metrics, explicitly apply PRD, SRS, AI use-case specification.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write a short PRD, SRS and AI use-case specification for a document assistant with five functional checks and explicit safe-failure behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] PRD, SRS, use cases and success metrics: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] PRD, SRS, use cases and success metrics: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write a short PRD, SRS and AI use-case specification for a document assistant with five functional checks and explicit safe-failure behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **PRD, SRS, use cases and success metrics:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For PRD, SRS, use cases and success metrics, explicitly apply PRD, SRS, AI use-case specification.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write a short PRD, SRS and AI use-case specification for a document assistant with five functional checks and explicit safe-failure behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] PRD, SRS, use cases and success metrics: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] PRD, SRS, use cases and success metrics: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write a short PRD, SRS and AI use-case specification for a document assistant with five functional checks and explicit safe-failure behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="product-prototype"></a>

### Prototypes, MVPs, UX, feedback and A/B testing

Learn from real users with the smallest useful product.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [PRD, SRS, use cases and success metrics](product.md#product-requirements) Navigation is unrestricted.

#### Concepts

- [ ] **Build loop:** Prototype, test, measure, gather feedback and iterate; productionize only what proves useful.
  - Example: Test a paper/mock search flow before building full authentication.
  - Videos:
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on build loop. Then reproduce the lesson example: Test a paper/mock search flow before building full authentication.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY
- [ ] **UX and limitations:** Communicate uncertainty and give users ways to correct mistakes or see evidence.
  - Example: Show citations, an abstention and a report-error action.
  - Videos:
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on ux and limitations. Then reproduce the lesson example: Show citations, an abstention and a report-error action.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY
- [ ] **Experiments and business value:** A/B tests need a defined outcome and appropriate sample size; tiny samples mainly provide qualitative signals.
  - Example: Compare two search interfaces and report observations without claiming statistical significance.
  - Videos:
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on experiments and business value. Then reproduce the lesson example: Compare two search interfaces and report observations without claiming statistical significance.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY
- [ ] **Ownership and communication:** Explain risks, costs and decisions to engineering, product, design, management, legal and users.
  - Example: Write a short demo note with benefits, limitations and next steps.
  - Videos:
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on ownership and communication. Then reproduce the lesson example: Write a short demo note with benefits, limitations and next steps.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY

#### YouTube: focused explanations and full courses

- [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
  - Explains: How faster development changes the role of product judgment and ownership.
  - Useful because: Frame a real user problem and feedback loop before adding more features.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY

#### Free written resources

1. [PAIR: feedback and control](https://pair.withgoogle.com/guidebook/chapters/feedback-controls/) — Free; no registration required. No paid materials required.
2. [PAIR: errors and graceful failure](https://pair.withgoogle.com/guidebook/chapters/errors-failing-gracefully/) — Free; no registration required. No paid materials required.

#### Lab: Prototypes, MVPs, UX, feedback and A/B testing

Test a small prototype with two teammates, record task completion and feedback, prioritize one improvement and explain its expected user value.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Test a small prototype with two teammates, record task completion and feedback, prioritize one improvement and explain its expected user value.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Prototypes, MVPs, UX, feedback and A/B testing:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Prototypes, MVPs, UX, feedback and A/B testing, explicitly apply Build loop, UX and limitations, Experiments and business value.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Test a small prototype with two teammates, record task completion and feedback, prioritize one improvement and explain its expected user value.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prototypes, MVPs, UX, feedback and A/B testing: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Prototypes, MVPs, UX, feedback and A/B testing: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Test a small prototype with two teammates, record task completion and feedback, prioritize one improvement and explain its expected user value.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Prototypes, MVPs, UX, feedback and A/B testing:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Prototypes, MVPs, UX, feedback and A/B testing, explicitly apply Build loop, UX and limitations, Experiments and business value.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Test a small prototype with two teammates, record task completion and feedback, prioritize one improvement and explain its expected user value.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prototypes, MVPs, UX, feedback and A/B testing: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Prototypes, MVPs, UX, feedback and A/B testing: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Test a small prototype with two teammates, record task completion and feedback, prioritize one improvement and explain its expected user value.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Prototypes, MVPs, UX, feedback and A/B testing:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Prototypes, MVPs, UX, feedback and A/B testing, explicitly apply Build loop, UX and limitations, Experiments and business value.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Test a small prototype with two teammates, record task completion and feedback, prioritize one improvement and explain its expected user value.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prototypes, MVPs, UX, feedback and A/B testing: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Prototypes, MVPs, UX, feedback and A/B testing: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Test a small prototype with two teammates, record task completion and feedback, prioritize one improvement and explain its expected user value.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Prototypes, MVPs, UX, feedback and A/B testing:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Prototypes, MVPs, UX, feedback and A/B testing, explicitly apply Build loop, UX and limitations, Experiments and business value.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Test a small prototype with two teammates, record task completion and feedback, prioritize one improvement and explain its expected user value.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prototypes, MVPs, UX, feedback and A/B testing: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Prototypes, MVPs, UX, feedback and A/B testing: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Test a small prototype with two teammates, record task completion and feedback, prioritize one improvement and explain its expected user value.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Prototypes, MVPs, UX, feedback and A/B testing:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Prototypes, MVPs, UX, feedback and A/B testing, explicitly apply Build loop, UX and limitations, Experiments and business value.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Test a small prototype with two teammates, record task completion and feedback, prioritize one improvement and explain its expected user value.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prototypes, MVPs, UX, feedback and A/B testing: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Prototypes, MVPs, UX, feedback and A/B testing: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Test a small prototype with two teammates, record task completion and feedback, prioritize one improvement and explain its expected user value.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Prototypes, MVPs, UX, feedback and A/B testing:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Prototypes, MVPs, UX, feedback and A/B testing, explicitly apply Build loop, UX and limitations, Experiments and business value.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Test a small prototype with two teammates, record task completion and feedback, prioritize one improvement and explain its expected user value.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prototypes, MVPs, UX, feedback and A/B testing: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Prototypes, MVPs, UX, feedback and A/B testing: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Test a small prototype with two teammates, record task completion and feedback, prioritize one improvement and explain its expected user value.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Prototypes, MVPs, UX, feedback and A/B testing:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Prototypes, MVPs, UX, feedback and A/B testing, explicitly apply Build loop, UX and limitations, Experiments and business value.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Test a small prototype with two teammates, record task completion and feedback, prioritize one improvement and explain its expected user value.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prototypes, MVPs, UX, feedback and A/B testing: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Prototypes, MVPs, UX, feedback and A/B testing: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Test a small prototype with two teammates, record task completion and feedback, prioritize one improvement and explain its expected user value.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Prototypes, MVPs, UX, feedback and A/B testing:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Prototypes, MVPs, UX, feedback and A/B testing, explicitly apply Build loop, UX and limitations, Experiments and business value.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Test a small prototype with two teammates, record task completion and feedback, prioritize one improvement and explain its expected user value.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prototypes, MVPs, UX, feedback and A/B testing: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Prototypes, MVPs, UX, feedback and A/B testing: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Test a small prototype with two teammates, record task completion and feedback, prioritize one improvement and explain its expected user value.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Prototypes, MVPs, UX, feedback and A/B testing:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Prototypes, MVPs, UX, feedback and A/B testing, explicitly apply Build loop, UX and limitations, Experiments and business value.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Test a small prototype with two teammates, record task completion and feedback, prioritize one improvement and explain its expected user value.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prototypes, MVPs, UX, feedback and A/B testing: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Prototypes, MVPs, UX, feedback and A/B testing: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Test a small prototype with two teammates, record task completion and feedback, prioritize one improvement and explain its expected user value.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Prototypes, MVPs, UX, feedback and A/B testing:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Prototypes, MVPs, UX, feedback and A/B testing, explicitly apply Build loop, UX and limitations, Experiments and business value.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Test a small prototype with two teammates, record task completion and feedback, prioritize one improvement and explain its expected user value.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prototypes, MVPs, UX, feedback and A/B testing: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Prototypes, MVPs, UX, feedback and A/B testing: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Test a small prototype with two teammates, record task completion and feedback, prioritize one improvement and explain its expected user value.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="product-economics"></a>

### Business models, unit economics and high-agency ownership

Measure real value and take responsibility for outcomes beyond a successful demo.

**Priority:** Useful next · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Prototypes, MVPs, UX, feedback and A/B testing](product.md#product-prototype) Navigation is unrestricted.

#### Concepts

- [ ] **Business model:** Explain who receives value, who maintains the system and how its operation is sustained; a learning prototype need not monetize.
  - Example: Compare an internal time-saving tool with a subscription product as written scenarios.
  - Videos:
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on business model. Then reproduce the lesson example: Compare an internal time-saving tool with a subscription product as written scenarios.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY
- [ ] **Unit economics:** Estimate cost per successfully completed task, including inference, hosting and human review; cheap requests can still produce expensive failed tasks.
  - Example: Divide simulated total operating cost by successful tasks and test a lower completion-rate scenario.
  - Videos:
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on unit economics. Then reproduce the lesson example: Divide simulated total operating cost by successful tasks and test a lower completion-rate scenario.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY
- [ ] **High-agency ownership:** Notice a problem, propose and test a solution, deploy appropriately, measure results and iterate with users.
  - Example: Own an improvement from interview through a measured teammate demo and follow-up feedback.
  - Videos:
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on high-agency ownership. Then reproduce the lesson example: Own an improvement from interview through a measured teammate demo and follow-up feedback.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY

#### YouTube: focused explanations and full courses

- [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
  - Explains: How faster development changes the role of product judgment and ownership.
  - Useful because: Frame a real user problem and feedback loop before adding more features.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY
- [Site reliability engineering fundamentals](https://www.youtube.com/watch?v=eopc_ijIfLg) · Google Cloud Events · Technical session
  - Explains: Service objectives, error budgets, monitoring, alerting and emergency response.
  - Useful because: Write actionable monitoring and recovery steps instead of collecting logs without a plan.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=eopc_ijIfLg

#### Free written resources

1. [PAIR: user needs and defining success](https://pair.withgoogle.com/guidebook/chapters/user-needs/) — Free; no registration required. No paid materials required.
2. [Google SRE: embracing risk](https://sre.google/sre-book/embracing-risk/) — Free; no registration required. No paid materials required.

#### Lab: Business models, unit economics and high-agency ownership

Create a spreadsheet or Python model using fictional costs and completion rates, compare two operating scenarios, and write an ownership plan for collecting real user feedback without spending money.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Create a spreadsheet or Python model using fictional costs and completion rates, compare two operating scenarios, and write an ownership plan for collecting real user feedback without spending money.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Business models, unit economics and high-agency ownership:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Business models, unit economics and high-agency ownership, explicitly apply Business model, Unit economics, High-agency ownership.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Create a spreadsheet or Python model using fictional costs and completion rates, compare two operating scenarios, and write an ownership plan for collecting real user feedback without spending money.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Business models, unit economics and high-agency ownership: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Business models, unit economics and high-agency ownership: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Create a spreadsheet or Python model using fictional costs and completion rates, compare two operating scenarios, and write an ownership plan for collecting real user feedback without spending money.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Business models, unit economics and high-agency ownership:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Business models, unit economics and high-agency ownership, explicitly apply Business model, Unit economics, High-agency ownership.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Create a spreadsheet or Python model using fictional costs and completion rates, compare two operating scenarios, and write an ownership plan for collecting real user feedback without spending money.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Business models, unit economics and high-agency ownership: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Business models, unit economics and high-agency ownership: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Create a spreadsheet or Python model using fictional costs and completion rates, compare two operating scenarios, and write an ownership plan for collecting real user feedback without spending money.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Business models, unit economics and high-agency ownership:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Business models, unit economics and high-agency ownership, explicitly apply Business model, Unit economics, High-agency ownership.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Create a spreadsheet or Python model using fictional costs and completion rates, compare two operating scenarios, and write an ownership plan for collecting real user feedback without spending money.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Business models, unit economics and high-agency ownership: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Business models, unit economics and high-agency ownership: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Create a spreadsheet or Python model using fictional costs and completion rates, compare two operating scenarios, and write an ownership plan for collecting real user feedback without spending money.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Business models, unit economics and high-agency ownership:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Business models, unit economics and high-agency ownership, explicitly apply Business model, Unit economics, High-agency ownership.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Create a spreadsheet or Python model using fictional costs and completion rates, compare two operating scenarios, and write an ownership plan for collecting real user feedback without spending money.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Business models, unit economics and high-agency ownership: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Business models, unit economics and high-agency ownership: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Create a spreadsheet or Python model using fictional costs and completion rates, compare two operating scenarios, and write an ownership plan for collecting real user feedback without spending money.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Business models, unit economics and high-agency ownership:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Business models, unit economics and high-agency ownership, explicitly apply Business model, Unit economics, High-agency ownership.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Create a spreadsheet or Python model using fictional costs and completion rates, compare two operating scenarios, and write an ownership plan for collecting real user feedback without spending money.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Business models, unit economics and high-agency ownership: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Business models, unit economics and high-agency ownership: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Create a spreadsheet or Python model using fictional costs and completion rates, compare two operating scenarios, and write an ownership plan for collecting real user feedback without spending money.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Business models, unit economics and high-agency ownership:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Business models, unit economics and high-agency ownership, explicitly apply Business model, Unit economics, High-agency ownership.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Create a spreadsheet or Python model using fictional costs and completion rates, compare two operating scenarios, and write an ownership plan for collecting real user feedback without spending money.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Business models, unit economics and high-agency ownership: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Business models, unit economics and high-agency ownership: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Create a spreadsheet or Python model using fictional costs and completion rates, compare two operating scenarios, and write an ownership plan for collecting real user feedback without spending money.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Business models, unit economics and high-agency ownership:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Business models, unit economics and high-agency ownership, explicitly apply Business model, Unit economics, High-agency ownership.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Create a spreadsheet or Python model using fictional costs and completion rates, compare two operating scenarios, and write an ownership plan for collecting real user feedback without spending money.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Business models, unit economics and high-agency ownership: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Business models, unit economics and high-agency ownership: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Create a spreadsheet or Python model using fictional costs and completion rates, compare two operating scenarios, and write an ownership plan for collecting real user feedback without spending money.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Business models, unit economics and high-agency ownership:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Business models, unit economics and high-agency ownership, explicitly apply Business model, Unit economics, High-agency ownership.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Create a spreadsheet or Python model using fictional costs and completion rates, compare two operating scenarios, and write an ownership plan for collecting real user feedback without spending money.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Business models, unit economics and high-agency ownership: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Business models, unit economics and high-agency ownership: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Create a spreadsheet or Python model using fictional costs and completion rates, compare two operating scenarios, and write an ownership plan for collecting real user feedback without spending money.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Business models, unit economics and high-agency ownership:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Business models, unit economics and high-agency ownership, explicitly apply Business model, Unit economics, High-agency ownership.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Create a spreadsheet or Python model using fictional costs and completion rates, compare two operating scenarios, and write an ownership plan for collecting real user feedback without spending money.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Business models, unit economics and high-agency ownership: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Business models, unit economics and high-agency ownership: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Create a spreadsheet or Python model using fictional costs and completion rates, compare two operating scenarios, and write an ownership plan for collecting real user feedback without spending money.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Business models, unit economics and high-agency ownership:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Business models, unit economics and high-agency ownership, explicitly apply Business model, Unit economics, High-agency ownership.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Create a spreadsheet or Python model using fictional costs and completion rates, compare two operating scenarios, and write an ownership plan for collecting real user feedback without spending money.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Business models, unit economics and high-agency ownership: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Business models, unit economics and high-agency ownership: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Create a spreadsheet or Python model using fictional costs and completion rates, compare two operating scenarios, and write an ownership plan for collecting real user feedback without spending money.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Engineering documentation

<a id="docs-architecture"></a>

### Architecture, data requirements, schemas and ADRs

Record system boundaries and the reasons behind consequential choices.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Business models, unit economics and high-agency ownership](product.md#product-economics) Navigation is unrestricted.

#### Concepts

- [ ] **Architecture and data flow:** Describe components, interfaces, security boundaries and failure paths.
  - Example: Draw browser→API→retrieval→model→cited response.
  - Videos:
    - [Architecture decision records: when and how to use them](https://www.youtube.com/watch?v=GhB7vz3sg-0) · Architecture teaching session · Focused tutorial
      - Explains: Lightweight ADRs, decision context and consequences.
      - Useful because: Preserve the reason for a design choice in a short document.
      - Watch for: Focus on architecture and data flow. Then reproduce the lesson example: Draw browser→API→retrieval→model→cited response.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=GhB7vz3sg-0
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on architecture and data flow. Then reproduce the lesson example: Draw browser→API→retrieval→model→cited response.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY
- [ ] **Data requirements:** Record sources, owners, schemas, quality rules, permissions, retention and refresh strategy.
  - Example: Specify document versioning and sensitive-field removal.
  - Videos:
    - [Software requirements specification — worked tutorial](https://www.youtube.com/watch?v=M5DY3eTyhUA) · Requirements engineering tutorial · Focused tutorial
      - Explains: Functional requirements and software specification structure.
      - Useful because: Write testable requirements and distinguish them from implementation details.
      - Watch for: Focus on data requirements. Then reproduce the lesson example: Specify document versioning and sensitive-field removal.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=M5DY3eTyhUA
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on data requirements. Then reproduce the lesson example: Specify document versioning and sensitive-field removal.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY
- [ ] **ADRs:** Capture context, decision and consequences so later changes respect earlier tradeoffs.
  - Example: Explain why a small prototype uses SQLite instead of three database services.
  - Videos:
    - [Architecture decision records: when and how to use them](https://www.youtube.com/watch?v=GhB7vz3sg-0) · Architecture teaching session · Focused tutorial
      - Explains: Lightweight ADRs, decision context and consequences.
      - Useful because: Preserve the reason for a design choice in a short document.
      - Watch for: Focus on adrs. Then reproduce the lesson example: Explain why a small prototype uses SQLite instead of three database services.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=GhB7vz3sg-0
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on adrs. Then reproduce the lesson example: Explain why a small prototype uses SQLite instead of three database services.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY

#### YouTube: focused explanations and full courses

- [Architecture decision records: when and how to use them](https://www.youtube.com/watch?v=GhB7vz3sg-0) · Architecture teaching session · Focused tutorial
  - Explains: Lightweight ADRs, decision context and consequences.
  - Useful because: Preserve the reason for a design choice in a short document.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=GhB7vz3sg-0
- [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
  - Explains: Scalability, reliability, storage and architecture tradeoffs.
  - Useful because: Explain why a queue, index or cache is useful before adding one.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
  - Explains: How faster development changes the role of product judgment and ownership.
  - Useful because: Frame a real user problem and feedback loop before adding more features.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY

#### Free written resources

1. [Architecture Decision Records](https://adr.github.io/) — Free; no registration required. No paid materials required.
2. [Google: technical writing essentials](https://developers.google.com/tech-writing/one) — Free; no registration required. No paid materials required.

#### Lab: Architecture, data requirements, schemas and ADRs

Write an architecture diagram, data schema and one ADR for a local RAG prototype, including permission boundaries and refresh behavior.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Write an architecture diagram, data schema and one ADR for a local RAG prototype, including permission boundaries and refresh behavior.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Architecture, data requirements, schemas and ADRs:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Architecture, data requirements, schemas and ADRs, explicitly apply Architecture and data flow, Data requirements, ADRs.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write an architecture diagram, data schema and one ADR for a local RAG prototype, including permission boundaries and refresh behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Architecture, data requirements, schemas and ADRs: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Architecture, data requirements, schemas and ADRs: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write an architecture diagram, data schema and one ADR for a local RAG prototype, including permission boundaries and refresh behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Architecture, data requirements, schemas and ADRs:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Architecture, data requirements, schemas and ADRs, explicitly apply Architecture and data flow, Data requirements, ADRs.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write an architecture diagram, data schema and one ADR for a local RAG prototype, including permission boundaries and refresh behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Architecture, data requirements, schemas and ADRs: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Architecture, data requirements, schemas and ADRs: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write an architecture diagram, data schema and one ADR for a local RAG prototype, including permission boundaries and refresh behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Architecture, data requirements, schemas and ADRs:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Architecture, data requirements, schemas and ADRs, explicitly apply Architecture and data flow, Data requirements, ADRs.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write an architecture diagram, data schema and one ADR for a local RAG prototype, including permission boundaries and refresh behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Architecture, data requirements, schemas and ADRs: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Architecture, data requirements, schemas and ADRs: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write an architecture diagram, data schema and one ADR for a local RAG prototype, including permission boundaries and refresh behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Architecture, data requirements, schemas and ADRs:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Architecture, data requirements, schemas and ADRs, explicitly apply Architecture and data flow, Data requirements, ADRs.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write an architecture diagram, data schema and one ADR for a local RAG prototype, including permission boundaries and refresh behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Architecture, data requirements, schemas and ADRs: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Architecture, data requirements, schemas and ADRs: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write an architecture diagram, data schema and one ADR for a local RAG prototype, including permission boundaries and refresh behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Architecture, data requirements, schemas and ADRs:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Architecture, data requirements, schemas and ADRs, explicitly apply Architecture and data flow, Data requirements, ADRs.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write an architecture diagram, data schema and one ADR for a local RAG prototype, including permission boundaries and refresh behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Architecture, data requirements, schemas and ADRs: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Architecture, data requirements, schemas and ADRs: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write an architecture diagram, data schema and one ADR for a local RAG prototype, including permission boundaries and refresh behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Architecture, data requirements, schemas and ADRs:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Architecture, data requirements, schemas and ADRs, explicitly apply Architecture and data flow, Data requirements, ADRs.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write an architecture diagram, data schema and one ADR for a local RAG prototype, including permission boundaries and refresh behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Architecture, data requirements, schemas and ADRs: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Architecture, data requirements, schemas and ADRs: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write an architecture diagram, data schema and one ADR for a local RAG prototype, including permission boundaries and refresh behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Architecture, data requirements, schemas and ADRs:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Architecture, data requirements, schemas and ADRs, explicitly apply Architecture and data flow, Data requirements, ADRs.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write an architecture diagram, data schema and one ADR for a local RAG prototype, including permission boundaries and refresh behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Architecture, data requirements, schemas and ADRs: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Architecture, data requirements, schemas and ADRs: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write an architecture diagram, data schema and one ADR for a local RAG prototype, including permission boundaries and refresh behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Architecture, data requirements, schemas and ADRs:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Architecture, data requirements, schemas and ADRs, explicitly apply Architecture and data flow, Data requirements, ADRs.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write an architecture diagram, data schema and one ADR for a local RAG prototype, including permission boundaries and refresh behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Architecture, data requirements, schemas and ADRs: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Architecture, data requirements, schemas and ADRs: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write an architecture diagram, data schema and one ADR for a local RAG prototype, including permission boundaries and refresh behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Architecture, data requirements, schemas and ADRs:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Architecture, data requirements, schemas and ADRs, explicitly apply Architecture and data flow, Data requirements, ADRs.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write an architecture diagram, data schema and one ADR for a local RAG prototype, including permission boundaries and refresh behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Architecture, data requirements, schemas and ADRs: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Architecture, data requirements, schemas and ADRs: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write an architecture diagram, data schema and one ADR for a local RAG prototype, including permission boundaries and refresh behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Architecture, data requirements, schemas and ADRs:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Architecture, data requirements, schemas and ADRs, explicitly apply Architecture and data flow, Data requirements, ADRs.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write an architecture diagram, data schema and one ADR for a local RAG prototype, including permission boundaries and refresh behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Architecture, data requirements, schemas and ADRs: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Architecture, data requirements, schemas and ADRs: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Write an architecture diagram, data schema and one ADR for a local RAG prototype, including permission boundaries and refresh behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="docs-ai"></a>

### Prompt specs, model decisions, API specs and evaluation plans

Keep the contracts and quality criteria needed to reproduce AI behavior.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Architecture, data requirements, schemas and ADRs](product.md#docs-architecture) Navigation is unrestricted.

#### Concepts

- [ ] **Prompt and agent specs:** Document role, tools, permissions, inputs, outputs, memory and failures.
  - Example: Version the system instructions alongside the eval fixture.
  - Videos:
    - [API documentation best practices](https://www.youtube.com/watch?v=0CSyIBHQy9g) · freeCodeCamp · Documentation course
      - Explains: Documenting API behavior and making developer-facing instructions usable.
      - Useful because: Document your actual contracts and a reproducible example instead of generic prose.
      - Watch for: Focus on prompt and agent specs. Then reproduce the lesson example: Version the system instructions alongside the eval fixture.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/api-documentation-best-practices-course/
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on prompt and agent specs. Then reproduce the lesson example: Version the system instructions alongside the eval fixture.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY
- [ ] **Model/provider decisions:** Compare measured quality, license, hardware, privacy and operational constraints.
  - Example: Record the decision date and a local/mock fallback.
  - Videos:
    - [API documentation best practices](https://www.youtube.com/watch?v=0CSyIBHQy9g) · freeCodeCamp · Documentation course
      - Explains: Documenting API behavior and making developer-facing instructions usable.
      - Useful because: Document your actual contracts and a reproducible example instead of generic prose.
      - Watch for: Focus on model/provider decisions. Then reproduce the lesson example: Record the decision date and a local/mock fallback.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/api-documentation-best-practices-course/
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on model/provider decisions. Then reproduce the lesson example: Record the decision date and a local/mock fallback.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY
- [ ] **API and evaluation plans:** Define request/response/error formats and datasets, metrics, thresholds and regression checks.
  - Example: Include a citation-validity check and an unsupported-question test.
  - Videos:
    - [API documentation best practices](https://www.youtube.com/watch?v=0CSyIBHQy9g) · freeCodeCamp · Documentation course
      - Explains: Documenting API behavior and making developer-facing instructions usable.
      - Useful because: Document your actual contracts and a reproducible example instead of generic prose.
      - Watch for: Focus on api and evaluation plans. Then reproduce the lesson example: Include a citation-validity check and an unsupported-question test.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/api-documentation-best-practices-course/
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on api and evaluation plans. Then reproduce the lesson example: Include a citation-validity check and an unsupported-question test.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY

#### YouTube: focused explanations and full courses

- [API documentation best practices](https://www.youtube.com/watch?v=0CSyIBHQy9g) · freeCodeCamp · Documentation course
  - Explains: Documenting API behavior and making developer-facing instructions usable.
  - Useful because: Document your actual contracts and a reproducible example instead of generic prose.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/api-documentation-best-practices-course/
- [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
  - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
  - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8
- [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
  - Explains: How faster development changes the role of product judgment and ownership.
  - Useful because: Frame a real user problem and feedback loop before adding more features.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY

#### Free written resources

1. [FastAPI tutorial](https://fastapi.tiangolo.com/tutorial/) — Free; no registration required. No paid materials required.
2. [Haystack: evaluation](https://docs.haystack.deepset.ai/docs/evaluation) — Free reading; Hugging Face account optional for sharing models. No paid materials required.

#### Lab: Prompt specs, model decisions, API specs and evaluation plans

Document a prototype prompt/tool contract, model decision table, OpenAPI example and twenty-case evaluation plan; ensure they match the runnable demo.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Document a prototype prompt/tool contract, model decision table, OpenAPI example and twenty-case evaluation plan; ensure they match the runnable demo.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Prompt specs, model decisions, API specs and evaluation plans:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Prompt specs, model decisions, API specs and evaluation plans, explicitly apply Prompt and agent specs, Model/provider decisions, API and evaluation plans.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Document a prototype prompt/tool contract, model decision table, OpenAPI example and twenty-case evaluation plan; ensure they match the runnable demo.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompt specs, model decisions, API specs and evaluation plans: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Prompt specs, model decisions, API specs and evaluation plans: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Document a prototype prompt/tool contract, model decision table, OpenAPI example and twenty-case evaluation plan; ensure they match the runnable demo.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Prompt specs, model decisions, API specs and evaluation plans:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Prompt specs, model decisions, API specs and evaluation plans, explicitly apply Prompt and agent specs, Model/provider decisions, API and evaluation plans.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Document a prototype prompt/tool contract, model decision table, OpenAPI example and twenty-case evaluation plan; ensure they match the runnable demo.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompt specs, model decisions, API specs and evaluation plans: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Prompt specs, model decisions, API specs and evaluation plans: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Document a prototype prompt/tool contract, model decision table, OpenAPI example and twenty-case evaluation plan; ensure they match the runnable demo.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Prompt specs, model decisions, API specs and evaluation plans:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Prompt specs, model decisions, API specs and evaluation plans, explicitly apply Prompt and agent specs, Model/provider decisions, API and evaluation plans.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Document a prototype prompt/tool contract, model decision table, OpenAPI example and twenty-case evaluation plan; ensure they match the runnable demo.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompt specs, model decisions, API specs and evaluation plans: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Prompt specs, model decisions, API specs and evaluation plans: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Document a prototype prompt/tool contract, model decision table, OpenAPI example and twenty-case evaluation plan; ensure they match the runnable demo.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Prompt specs, model decisions, API specs and evaluation plans:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Prompt specs, model decisions, API specs and evaluation plans, explicitly apply Prompt and agent specs, Model/provider decisions, API and evaluation plans.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Document a prototype prompt/tool contract, model decision table, OpenAPI example and twenty-case evaluation plan; ensure they match the runnable demo.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompt specs, model decisions, API specs and evaluation plans: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Prompt specs, model decisions, API specs and evaluation plans: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Document a prototype prompt/tool contract, model decision table, OpenAPI example and twenty-case evaluation plan; ensure they match the runnable demo.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Prompt specs, model decisions, API specs and evaluation plans:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Prompt specs, model decisions, API specs and evaluation plans, explicitly apply Prompt and agent specs, Model/provider decisions, API and evaluation plans.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Document a prototype prompt/tool contract, model decision table, OpenAPI example and twenty-case evaluation plan; ensure they match the runnable demo.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompt specs, model decisions, API specs and evaluation plans: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Prompt specs, model decisions, API specs and evaluation plans: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Document a prototype prompt/tool contract, model decision table, OpenAPI example and twenty-case evaluation plan; ensure they match the runnable demo.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Prompt specs, model decisions, API specs and evaluation plans:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Prompt specs, model decisions, API specs and evaluation plans, explicitly apply Prompt and agent specs, Model/provider decisions, API and evaluation plans.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Document a prototype prompt/tool contract, model decision table, OpenAPI example and twenty-case evaluation plan; ensure they match the runnable demo.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompt specs, model decisions, API specs and evaluation plans: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Prompt specs, model decisions, API specs and evaluation plans: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Document a prototype prompt/tool contract, model decision table, OpenAPI example and twenty-case evaluation plan; ensure they match the runnable demo.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Prompt specs, model decisions, API specs and evaluation plans:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Prompt specs, model decisions, API specs and evaluation plans, explicitly apply Prompt and agent specs, Model/provider decisions, API and evaluation plans.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Document a prototype prompt/tool contract, model decision table, OpenAPI example and twenty-case evaluation plan; ensure they match the runnable demo.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompt specs, model decisions, API specs and evaluation plans: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Prompt specs, model decisions, API specs and evaluation plans: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Document a prototype prompt/tool contract, model decision table, OpenAPI example and twenty-case evaluation plan; ensure they match the runnable demo.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Prompt specs, model decisions, API specs and evaluation plans:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Prompt specs, model decisions, API specs and evaluation plans, explicitly apply Prompt and agent specs, Model/provider decisions, API and evaluation plans.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Document a prototype prompt/tool contract, model decision table, OpenAPI example and twenty-case evaluation plan; ensure they match the runnable demo.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompt specs, model decisions, API specs and evaluation plans: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Prompt specs, model decisions, API specs and evaluation plans: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Document a prototype prompt/tool contract, model decision table, OpenAPI example and twenty-case evaluation plan; ensure they match the runnable demo.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Prompt specs, model decisions, API specs and evaluation plans:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Prompt specs, model decisions, API specs and evaluation plans, explicitly apply Prompt and agent specs, Model/provider decisions, API and evaluation plans.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Document a prototype prompt/tool contract, model decision table, OpenAPI example and twenty-case evaluation plan; ensure they match the runnable demo.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompt specs, model decisions, API specs and evaluation plans: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Prompt specs, model decisions, API specs and evaluation plans: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Document a prototype prompt/tool contract, model decision table, OpenAPI example and twenty-case evaluation plan; ensure they match the runnable demo.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Prompt specs, model decisions, API specs and evaluation plans:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Prompt specs, model decisions, API specs and evaluation plans, explicitly apply Prompt and agent specs, Model/provider decisions, API and evaluation plans.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Document a prototype prompt/tool contract, model decision table, OpenAPI example and twenty-case evaluation plan; ensure they match the runnable demo.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Prompt specs, model decisions, API specs and evaluation plans: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Prompt specs, model decisions, API specs and evaluation plans: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Document a prototype prompt/tool contract, model decision table, OpenAPI example and twenty-case evaluation plan; ensure they match the runnable demo.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="docs-operations"></a>

### Deployment guides, runbooks, model cards and change logs

Enable another teammate to run, diagnose and improve the system.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Prompt specs, model decisions, API specs and evaluation plans](product.md#docs-ai) Navigation is unrestricted.

#### Concepts

- [ ] **Deployment guide:** Explain configuration, secrets, environments, migrations, release and rollback steps.
  - Example: Provide a clean local setup with a health check.
  - Videos:
    - [Incident management: SRE implements DevOps](https://www.youtube.com/watch?v=n4y9dwinPBQ) · Google Cloud Tech · Focused lecture
      - Explains: Incident roles, response process and learning after failures.
      - Useful because: Rehearse your runbook on a local outage and document what changed.
      - Watch for: Focus on deployment guide. Then reproduce the lesson example: Provide a clean local setup with a health check.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=n4y9dwinPBQ
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on deployment guide. Then reproduce the lesson example: Provide a clean local setup with a health check.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY
- [ ] **Runbook and monitoring:** Connect symptoms to diagnosis and safe mitigation, with owners and escalation.
  - Example: Describe how to recover when retrieval returns no documents.
  - Videos:
    - [Incident management: SRE implements DevOps](https://www.youtube.com/watch?v=n4y9dwinPBQ) · Google Cloud Tech · Focused lecture
      - Explains: Incident roles, response process and learning after failures.
      - Useful because: Rehearse your runbook on a local outage and document what changed.
      - Watch for: Focus on runbook and monitoring. Then reproduce the lesson example: Describe how to recover when retrieval returns no documents.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=n4y9dwinPBQ
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on runbook and monitoring. Then reproduce the lesson example: Describe how to recover when retrieval returns no documents.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY
- [ ] **Model card and change log:** Record intended use, limitations, known failures, evaluation, data considerations and version history.
  - Example: State that a toy classifier is educational and not appropriate for medical decisions.
  - Videos:
    - [Incident management: SRE implements DevOps](https://www.youtube.com/watch?v=n4y9dwinPBQ) · Google Cloud Tech · Focused lecture
      - Explains: Incident roles, response process and learning after failures.
      - Useful because: Rehearse your runbook on a local outage and document what changed.
      - Watch for: Focus on model card and change log. Then reproduce the lesson example: State that a toy classifier is educational and not appropriate for medical decisions.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=n4y9dwinPBQ
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on model card and change log. Then reproduce the lesson example: State that a toy classifier is educational and not appropriate for medical decisions.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY

#### YouTube: focused explanations and full courses

- [Incident management: SRE implements DevOps](https://www.youtube.com/watch?v=n4y9dwinPBQ) · Google Cloud Tech · Focused lecture
  - Explains: Incident roles, response process and learning after failures.
  - Useful because: Rehearse your runbook on a local outage and document what changed.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=n4y9dwinPBQ
- [API documentation best practices](https://www.youtube.com/watch?v=0CSyIBHQy9g) · freeCodeCamp · Documentation course
  - Explains: Documenting API behavior and making developer-facing instructions usable.
  - Useful because: Document your actual contracts and a reproducible example instead of generic prose.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/api-documentation-best-practices-course/
- [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
  - Explains: How faster development changes the role of product judgment and ownership.
  - Useful because: Frame a real user problem and feedback loop before adding more features.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY

#### Free written resources

1. [Google SRE: managing incidents](https://sre.google/sre-book/managing-incidents/) — Free; no registration required. No paid materials required.
2. [Google: technical writing essentials](https://developers.google.com/tech-writing/one) — Free; no registration required. No paid materials required.

#### Lab: Deployment guides, runbooks, model cards and change logs

Deliver a deployment guide, one incident runbook, model card and change log; have a teammate follow the setup without extra verbal instructions.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Deliver a deployment guide, one incident runbook, model card and change log; have a teammate follow the setup without extra verbal instructions.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Deployment guides, runbooks, model cards and change logs:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Deployment guides, runbooks, model cards and change logs, explicitly apply Deployment guide, Runbook and monitoring, Model card and change log.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Deliver a deployment guide, one incident runbook, model card and change log; have a teammate follow the setup without extra verbal instructions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Deployment guides, runbooks, model cards and change logs: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Deployment guides, runbooks, model cards and change logs: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Deliver a deployment guide, one incident runbook, model card and change log; have a teammate follow the setup without extra verbal instructions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Deployment guides, runbooks, model cards and change logs:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Deployment guides, runbooks, model cards and change logs, explicitly apply Deployment guide, Runbook and monitoring, Model card and change log.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Deliver a deployment guide, one incident runbook, model card and change log; have a teammate follow the setup without extra verbal instructions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Deployment guides, runbooks, model cards and change logs: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Deployment guides, runbooks, model cards and change logs: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Deliver a deployment guide, one incident runbook, model card and change log; have a teammate follow the setup without extra verbal instructions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Deployment guides, runbooks, model cards and change logs:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Deployment guides, runbooks, model cards and change logs, explicitly apply Deployment guide, Runbook and monitoring, Model card and change log.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Deliver a deployment guide, one incident runbook, model card and change log; have a teammate follow the setup without extra verbal instructions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Deployment guides, runbooks, model cards and change logs: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Deployment guides, runbooks, model cards and change logs: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Deliver a deployment guide, one incident runbook, model card and change log; have a teammate follow the setup without extra verbal instructions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Deployment guides, runbooks, model cards and change logs:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Deployment guides, runbooks, model cards and change logs, explicitly apply Deployment guide, Runbook and monitoring, Model card and change log.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Deliver a deployment guide, one incident runbook, model card and change log; have a teammate follow the setup without extra verbal instructions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Deployment guides, runbooks, model cards and change logs: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Deployment guides, runbooks, model cards and change logs: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Deliver a deployment guide, one incident runbook, model card and change log; have a teammate follow the setup without extra verbal instructions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Deployment guides, runbooks, model cards and change logs:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Deployment guides, runbooks, model cards and change logs, explicitly apply Deployment guide, Runbook and monitoring, Model card and change log.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Deliver a deployment guide, one incident runbook, model card and change log; have a teammate follow the setup without extra verbal instructions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Deployment guides, runbooks, model cards and change logs: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Deployment guides, runbooks, model cards and change logs: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Deliver a deployment guide, one incident runbook, model card and change log; have a teammate follow the setup without extra verbal instructions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Deployment guides, runbooks, model cards and change logs:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Deployment guides, runbooks, model cards and change logs, explicitly apply Deployment guide, Runbook and monitoring, Model card and change log.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Deliver a deployment guide, one incident runbook, model card and change log; have a teammate follow the setup without extra verbal instructions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Deployment guides, runbooks, model cards and change logs: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Deployment guides, runbooks, model cards and change logs: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Deliver a deployment guide, one incident runbook, model card and change log; have a teammate follow the setup without extra verbal instructions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Deployment guides, runbooks, model cards and change logs:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Deployment guides, runbooks, model cards and change logs, explicitly apply Deployment guide, Runbook and monitoring, Model card and change log.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Deliver a deployment guide, one incident runbook, model card and change log; have a teammate follow the setup without extra verbal instructions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Deployment guides, runbooks, model cards and change logs: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Deployment guides, runbooks, model cards and change logs: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Deliver a deployment guide, one incident runbook, model card and change log; have a teammate follow the setup without extra verbal instructions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Deployment guides, runbooks, model cards and change logs:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Deployment guides, runbooks, model cards and change logs, explicitly apply Deployment guide, Runbook and monitoring, Model card and change log.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Deliver a deployment guide, one incident runbook, model card and change log; have a teammate follow the setup without extra verbal instructions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Deployment guides, runbooks, model cards and change logs: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Deployment guides, runbooks, model cards and change logs: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Deliver a deployment guide, one incident runbook, model card and change log; have a teammate follow the setup without extra verbal instructions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Deployment guides, runbooks, model cards and change logs:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Deployment guides, runbooks, model cards and change logs, explicitly apply Deployment guide, Runbook and monitoring, Model card and change log.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Deliver a deployment guide, one incident runbook, model card and change log; have a teammate follow the setup without extra verbal instructions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Deployment guides, runbooks, model cards and change logs: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Deployment guides, runbooks, model cards and change logs: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Deliver a deployment guide, one incident runbook, model card and change log; have a teammate follow the setup without extra verbal instructions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Deployment guides, runbooks, model cards and change logs:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Deployment guides, runbooks, model cards and change logs, explicitly apply Deployment guide, Runbook and monitoring, Model card and change log.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Deliver a deployment guide, one incident runbook, model card and change log; have a teammate follow the setup without extra verbal instructions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Deployment guides, runbooks, model cards and change logs: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Deployment guides, runbooks, model cards and change logs: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Deliver a deployment guide, one incident runbook, model card and change log; have a teammate follow the setup without extra verbal instructions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Product decisions and documentation details

<a id="product-discovery-metrics"></a>

### User interviews, baselines and measurable AI value

Choose a problem and success measure before assuming a model or autonomous workflow is the solution.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [Users, problems, discovery and product decisions](product.md#product-discovery) Navigation is unrestricted.

#### Concepts

- [ ] **Problem interviews:** Ask about actual recent workflows, failures and alternatives instead of asking whether a hypothetical AI feature sounds attractive.
  - Example: Ask a teammate to walk through the last time they searched a document and record the failed steps.
  - Videos:
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on problem interviews. Then reproduce the lesson example: Ask a teammate to walk through the last time they searched a document and record the failed steps.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY
- [ ] **Non-AI baseline:** Rules, search or a simple form may solve enough of the problem to be a valuable baseline.
  - Example: Compare keyword search with a proposed RAG assistant on the same ten user questions.
  - Videos:
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on non-ai baseline. Then reproduce the lesson example: Compare keyword search with a proposed RAG assistant on the same ten user questions.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY
- [ ] **Outcome and guardrail metrics:** A success metric needs a defined measurement process and constraints that prevent gaming.
  - Example: Measure correctly resolved tasks and time saved while separately tracking unsupported answers and privacy failures.
  - Videos:
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on outcome and guardrail metrics. Then reproduce the lesson example: Measure correctly resolved tasks and time saved while separately tracking unsupported answers and privacy failures.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY
- [ ] **Prototype learning goals:** A prototype should test the riskiest assumption with the least expensive setup, not imitate every production component.
  - Example: Use recorded answers and a clickable workflow to test whether citations help users verify results.
  - Videos:
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on prototype learning goals. Then reproduce the lesson example: Use recorded answers and a clickable workflow to test whether citations help users verify results.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY
- [ ] **Feedback interpretation:** User comments and behaviour need context; a small convenience sample does not establish broad product-market demand.
  - Example: Record participant count, task success and the limitations of testing only with the four-person team.
  - Videos:
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on feedback interpretation. Then reproduce the lesson example: Record participant count, task success and the limitations of testing only with the four-person team.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY

#### YouTube: focused explanations and full courses

- [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
  - Explains: How faster development changes the role of product judgment and ownership.
  - Useful because: Frame a real user problem and feedback loop before adding more features.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY
- [Deep dive into LLM evaluation](https://www.youtube.com/watch?v=7EcznH0-of8) · Weights & Biases · Workshop
  - Explains: Evaluation datasets, model quality checks and retrieval evaluation.
  - Useful because: Use the evaluation methodology with local fixtures; hosted tracking accounts are optional.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=7EcznH0-of8

#### Free written resources

1. [Google PAIR: user needs](https://pair.withgoogle.com/guidebook/chapters/user-needs/) — Free; no registration required. No paid materials required.
2. [Google PAIR: feedback and control](https://pair.withgoogle.com/guidebook/chapters/feedback-controls/) — Free; no registration required. No paid materials required.

#### Lab: User interviews, baselines and measurable AI value

Interview two teammates about a real document workflow, define one measurable outcome and two guardrails, and compare a non-AI baseline with a recorded-answer prototype. Write the evidence and limitations in a short product brief.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Interview two teammates about a real document workflow, define one measurable outcome and two guardrails, and compare a non-AI baseline with a recorded-answer prototype. Write the evidence and limitations in a short product brief.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **User interviews, baselines and measurable AI value:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For User interviews, baselines and measurable AI value, explicitly apply Problem interviews, Non-AI baseline, Outcome and guardrail metrics.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates about a real document workflow, define one measurable outcome and two guardrails, and compare a non-AI baseline with a recorded-answer prototype. Write the evidence and limitations in a short product brief.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] User interviews, baselines and measurable AI value: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] User interviews, baselines and measurable AI value: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates about a real document workflow, define one measurable outcome and two guardrails, and compare a non-AI baseline with a recorded-answer prototype. Write the evidence and limitations in a short product brief.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **User interviews, baselines and measurable AI value:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For User interviews, baselines and measurable AI value, explicitly apply Problem interviews, Non-AI baseline, Outcome and guardrail metrics.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates about a real document workflow, define one measurable outcome and two guardrails, and compare a non-AI baseline with a recorded-answer prototype. Write the evidence and limitations in a short product brief.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] User interviews, baselines and measurable AI value: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] User interviews, baselines and measurable AI value: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates about a real document workflow, define one measurable outcome and two guardrails, and compare a non-AI baseline with a recorded-answer prototype. Write the evidence and limitations in a short product brief.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **User interviews, baselines and measurable AI value:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For User interviews, baselines and measurable AI value, explicitly apply Problem interviews, Non-AI baseline, Outcome and guardrail metrics.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates about a real document workflow, define one measurable outcome and two guardrails, and compare a non-AI baseline with a recorded-answer prototype. Write the evidence and limitations in a short product brief.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] User interviews, baselines and measurable AI value: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] User interviews, baselines and measurable AI value: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates about a real document workflow, define one measurable outcome and two guardrails, and compare a non-AI baseline with a recorded-answer prototype. Write the evidence and limitations in a short product brief.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **User interviews, baselines and measurable AI value:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For User interviews, baselines and measurable AI value, explicitly apply Problem interviews, Non-AI baseline, Outcome and guardrail metrics.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates about a real document workflow, define one measurable outcome and two guardrails, and compare a non-AI baseline with a recorded-answer prototype. Write the evidence and limitations in a short product brief.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] User interviews, baselines and measurable AI value: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] User interviews, baselines and measurable AI value: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates about a real document workflow, define one measurable outcome and two guardrails, and compare a non-AI baseline with a recorded-answer prototype. Write the evidence and limitations in a short product brief.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **User interviews, baselines and measurable AI value:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For User interviews, baselines and measurable AI value, explicitly apply Problem interviews, Non-AI baseline, Outcome and guardrail metrics.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates about a real document workflow, define one measurable outcome and two guardrails, and compare a non-AI baseline with a recorded-answer prototype. Write the evidence and limitations in a short product brief.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] User interviews, baselines and measurable AI value: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] User interviews, baselines and measurable AI value: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates about a real document workflow, define one measurable outcome and two guardrails, and compare a non-AI baseline with a recorded-answer prototype. Write the evidence and limitations in a short product brief.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **User interviews, baselines and measurable AI value:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For User interviews, baselines and measurable AI value, explicitly apply Problem interviews, Non-AI baseline, Outcome and guardrail metrics.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates about a real document workflow, define one measurable outcome and two guardrails, and compare a non-AI baseline with a recorded-answer prototype. Write the evidence and limitations in a short product brief.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] User interviews, baselines and measurable AI value: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] User interviews, baselines and measurable AI value: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates about a real document workflow, define one measurable outcome and two guardrails, and compare a non-AI baseline with a recorded-answer prototype. Write the evidence and limitations in a short product brief.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **User interviews, baselines and measurable AI value:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For User interviews, baselines and measurable AI value, explicitly apply Problem interviews, Non-AI baseline, Outcome and guardrail metrics.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates about a real document workflow, define one measurable outcome and two guardrails, and compare a non-AI baseline with a recorded-answer prototype. Write the evidence and limitations in a short product brief.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] User interviews, baselines and measurable AI value: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] User interviews, baselines and measurable AI value: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates about a real document workflow, define one measurable outcome and two guardrails, and compare a non-AI baseline with a recorded-answer prototype. Write the evidence and limitations in a short product brief.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **User interviews, baselines and measurable AI value:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For User interviews, baselines and measurable AI value, explicitly apply Problem interviews, Non-AI baseline, Outcome and guardrail metrics.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates about a real document workflow, define one measurable outcome and two guardrails, and compare a non-AI baseline with a recorded-answer prototype. Write the evidence and limitations in a short product brief.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] User interviews, baselines and measurable AI value: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] User interviews, baselines and measurable AI value: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates about a real document workflow, define one measurable outcome and two guardrails, and compare a non-AI baseline with a recorded-answer prototype. Write the evidence and limitations in a short product brief.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **User interviews, baselines and measurable AI value:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For User interviews, baselines and measurable AI value, explicitly apply Problem interviews, Non-AI baseline, Outcome and guardrail metrics.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates about a real document workflow, define one measurable outcome and two guardrails, and compare a non-AI baseline with a recorded-answer prototype. Write the evidence and limitations in a short product brief.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] User interviews, baselines and measurable AI value: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] User interviews, baselines and measurable AI value: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates about a real document workflow, define one measurable outcome and two guardrails, and compare a non-AI baseline with a recorded-answer prototype. Write the evidence and limitations in a short product brief.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **User interviews, baselines and measurable AI value:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For User interviews, baselines and measurable AI value, explicitly apply Problem interviews, Non-AI baseline, Outcome and guardrail metrics.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates about a real document workflow, define one measurable outcome and two guardrails, and compare a non-AI baseline with a recorded-answer prototype. Write the evidence and limitations in a short product brief.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] User interviews, baselines and measurable AI value: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] User interviews, baselines and measurable AI value: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Interview two teammates about a real document workflow, define one measurable outcome and two guardrails, and compare a non-AI baseline with a recorded-answer prototype. Write the evidence and limitations in a short product brief.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="docs-delivery-contracts"></a>

### Data cards, evaluation plans and operational handover

Document the actual assumptions needed to reproduce and operate an AI feature after its original developer leaves.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [Prompt specs, model decisions, API specs and evaluation plans](product.md#docs-ai) Navigation is unrestricted.

#### Concepts

- [ ] **Requirements traceability:** Connect requirements to tests and evidence so a delivered feature can be assessed without relying on a verbal explanation.
  - Example: Map a citation requirement to its schema check, relevance fixture and known limitation.
  - Videos:
    - [API documentation best practices](https://www.youtube.com/watch?v=0CSyIBHQy9g) · freeCodeCamp · Documentation course
      - Explains: Documenting API behavior and making developer-facing instructions usable.
      - Useful because: Document your actual contracts and a reproducible example instead of generic prose.
      - Watch for: Focus on requirements traceability. Then reproduce the lesson example: Map a citation requirement to its schema check, relevance fixture and known limitation.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/api-documentation-best-practices-course/
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on requirements traceability. Then reproduce the lesson example: Map a citation requirement to its schema check, relevance fixture and known limitation.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY
- [ ] **Dataset and source provenance:** Document origin, permissions, collection date, transformations and intended uses of each dataset or document corpus.
  - Example: Write a data card for five synthetic policy documents and label them explicitly as fabricated fixtures.
  - Videos:
    - [API documentation best practices](https://www.youtube.com/watch?v=0CSyIBHQy9g) · freeCodeCamp · Documentation course
      - Explains: Documenting API behavior and making developer-facing instructions usable.
      - Useful because: Document your actual contracts and a reproducible example instead of generic prose.
      - Watch for: Focus on dataset and source provenance. Then reproduce the lesson example: Write a data card for five synthetic policy documents and label them explicitly as fabricated fixtures.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/api-documentation-best-practices-course/
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on dataset and source provenance. Then reproduce the lesson example: Write a data card for five synthetic policy documents and label them explicitly as fabricated fixtures.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY
- [ ] **Evaluation plan:** Specify task population, datasets, metrics, thresholds, slices and failure handling before selecting a winning model.
  - Example: Define a ten-question retrieval evaluation with answerability labels and an abstention check.
  - Videos:
    - [API documentation best practices](https://www.youtube.com/watch?v=0CSyIBHQy9g) · freeCodeCamp · Documentation course
      - Explains: Documenting API behavior and making developer-facing instructions usable.
      - Useful because: Document your actual contracts and a reproducible example instead of generic prose.
      - Watch for: Focus on evaluation plan. Then reproduce the lesson example: Define a ten-question retrieval evaluation with answerability labels and an abstention check.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/api-documentation-best-practices-course/
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on evaluation plan. Then reproduce the lesson example: Define a ten-question retrieval evaluation with answerability labels and an abstention check.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY
- [ ] **Model and prompt version contracts:** Record model identity, prompt/configuration version and preprocessing so outputs can be traced to the deployed configuration.
  - Example: Save a manifest connecting a checkpoint hash, prompt template and label mapping.
  - Videos:
    - [API documentation best practices](https://www.youtube.com/watch?v=0CSyIBHQy9g) · freeCodeCamp · Documentation course
      - Explains: Documenting API behavior and making developer-facing instructions usable.
      - Useful because: Document your actual contracts and a reproducible example instead of generic prose.
      - Watch for: Focus on model and prompt version contracts. Then reproduce the lesson example: Save a manifest connecting a checkpoint hash, prompt template and label mapping.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/api-documentation-best-practices-course/
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on model and prompt version contracts. Then reproduce the lesson example: Save a manifest connecting a checkpoint hash, prompt template and label mapping.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY
- [ ] **Runbook ownership:** An operational guide needs symptoms, diagnosis, safe recovery, rollback and an owner; commands must match the delivered environment.
  - Example: Write a local service recovery procedure and verify it against the exact Docker Compose setup.
  - Videos:
    - [API documentation best practices](https://www.youtube.com/watch?v=0CSyIBHQy9g) · freeCodeCamp · Documentation course
      - Explains: Documenting API behavior and making developer-facing instructions usable.
      - Useful because: Document your actual contracts and a reproducible example instead of generic prose.
      - Watch for: Focus on runbook ownership. Then reproduce the lesson example: Write a local service recovery procedure and verify it against the exact Docker Compose setup.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/api-documentation-best-practices-course/
    - [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
      - Explains: How faster development changes the role of product judgment and ownership.
      - Useful because: Frame a real user problem and feedback loop before adding more features.
      - Watch for: Focus on runbook ownership. Then reproduce the lesson example: Write a local service recovery procedure and verify it against the exact Docker Compose setup.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY

#### YouTube: focused explanations and full courses

- [API documentation best practices](https://www.youtube.com/watch?v=0CSyIBHQy9g) · freeCodeCamp · Documentation course
  - Explains: Documenting API behavior and making developer-facing instructions usable.
  - Useful because: Document your actual contracts and a reproducible example instead of generic prose.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/api-documentation-best-practices-course/
- [Incident management: SRE implements DevOps](https://www.youtube.com/watch?v=n4y9dwinPBQ) · Google Cloud Tech · Focused lecture
  - Explains: Incident roles, response process and learning after failures.
  - Useful because: Rehearse your runbook on a local outage and document what changed.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=n4y9dwinPBQ
- [Building faster with AI](https://www.youtube.com/watch?v=RNJCfif1dPY) · Andrew Ng · Product/engineering talk
  - Explains: How faster development changes the role of product judgment and ownership.
  - Useful because: Frame a real user problem and feedback loop before adding more features.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=RNJCfif1dPY

#### Free written resources

1. [Google: technical writing one](https://developers.google.com/tech-writing/one) — Free; no registration required. No paid materials required.
2. [Google SRE: incident management](https://sre.google/sre-book/managing-incidents/) — Free; no registration required. No paid materials required.

#### Lab: Data cards, evaluation plans and operational handover

Prepare a handover pack for one existing mini-project: requirements-to-test table, synthetic-data card, evaluation plan, version manifest and runbook. Ask a teammate to reproduce the project using only the pack and record missing instructions.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Prepare a handover pack for one existing mini-project: requirements-to-test table, synthetic-data card, evaluation plan, version manifest and runbook. Ask a teammate to reproduce the project using only the pack and record missing instructions.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Data cards, evaluation plans and operational handover:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Data cards, evaluation plans and operational handover, explicitly apply Requirements traceability, Dataset and source provenance, Evaluation plan.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Prepare a handover pack for one existing mini-project: requirements-to-test table, synthetic-data card, evaluation plan, version manifest and runbook. Ask a teammate to reproduce the project using only the pack and record missing instructions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Data cards, evaluation plans and operational handover: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Data cards, evaluation plans and operational handover: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Prepare a handover pack for one existing mini-project: requirements-to-test table, synthetic-data card, evaluation plan, version manifest and runbook. Ask a teammate to reproduce the project using only the pack and record missing instructions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Data cards, evaluation plans and operational handover:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Data cards, evaluation plans and operational handover, explicitly apply Requirements traceability, Dataset and source provenance, Evaluation plan.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Prepare a handover pack for one existing mini-project: requirements-to-test table, synthetic-data card, evaluation plan, version manifest and runbook. Ask a teammate to reproduce the project using only the pack and record missing instructions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Data cards, evaluation plans and operational handover: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Data cards, evaluation plans and operational handover: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Prepare a handover pack for one existing mini-project: requirements-to-test table, synthetic-data card, evaluation plan, version manifest and runbook. Ask a teammate to reproduce the project using only the pack and record missing instructions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Data cards, evaluation plans and operational handover:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Data cards, evaluation plans and operational handover, explicitly apply Requirements traceability, Dataset and source provenance, Evaluation plan.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Prepare a handover pack for one existing mini-project: requirements-to-test table, synthetic-data card, evaluation plan, version manifest and runbook. Ask a teammate to reproduce the project using only the pack and record missing instructions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Data cards, evaluation plans and operational handover: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Data cards, evaluation plans and operational handover: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Prepare a handover pack for one existing mini-project: requirements-to-test table, synthetic-data card, evaluation plan, version manifest and runbook. Ask a teammate to reproduce the project using only the pack and record missing instructions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Data cards, evaluation plans and operational handover:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Data cards, evaluation plans and operational handover, explicitly apply Requirements traceability, Dataset and source provenance, Evaluation plan.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Prepare a handover pack for one existing mini-project: requirements-to-test table, synthetic-data card, evaluation plan, version manifest and runbook. Ask a teammate to reproduce the project using only the pack and record missing instructions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Data cards, evaluation plans and operational handover: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Data cards, evaluation plans and operational handover: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Prepare a handover pack for one existing mini-project: requirements-to-test table, synthetic-data card, evaluation plan, version manifest and runbook. Ask a teammate to reproduce the project using only the pack and record missing instructions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Data cards, evaluation plans and operational handover:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Data cards, evaluation plans and operational handover, explicitly apply Requirements traceability, Dataset and source provenance, Evaluation plan.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Prepare a handover pack for one existing mini-project: requirements-to-test table, synthetic-data card, evaluation plan, version manifest and runbook. Ask a teammate to reproduce the project using only the pack and record missing instructions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Data cards, evaluation plans and operational handover: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Data cards, evaluation plans and operational handover: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Prepare a handover pack for one existing mini-project: requirements-to-test table, synthetic-data card, evaluation plan, version manifest and runbook. Ask a teammate to reproduce the project using only the pack and record missing instructions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Data cards, evaluation plans and operational handover:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Data cards, evaluation plans and operational handover, explicitly apply Requirements traceability, Dataset and source provenance, Evaluation plan.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Prepare a handover pack for one existing mini-project: requirements-to-test table, synthetic-data card, evaluation plan, version manifest and runbook. Ask a teammate to reproduce the project using only the pack and record missing instructions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Data cards, evaluation plans and operational handover: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Data cards, evaluation plans and operational handover: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Prepare a handover pack for one existing mini-project: requirements-to-test table, synthetic-data card, evaluation plan, version manifest and runbook. Ask a teammate to reproduce the project using only the pack and record missing instructions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Data cards, evaluation plans and operational handover:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Data cards, evaluation plans and operational handover, explicitly apply Requirements traceability, Dataset and source provenance, Evaluation plan.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Prepare a handover pack for one existing mini-project: requirements-to-test table, synthetic-data card, evaluation plan, version manifest and runbook. Ask a teammate to reproduce the project using only the pack and record missing instructions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Data cards, evaluation plans and operational handover: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Data cards, evaluation plans and operational handover: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Prepare a handover pack for one existing mini-project: requirements-to-test table, synthetic-data card, evaluation plan, version manifest and runbook. Ask a teammate to reproduce the project using only the pack and record missing instructions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Data cards, evaluation plans and operational handover:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Data cards, evaluation plans and operational handover, explicitly apply Requirements traceability, Dataset and source provenance, Evaluation plan.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Prepare a handover pack for one existing mini-project: requirements-to-test table, synthetic-data card, evaluation plan, version manifest and runbook. Ask a teammate to reproduce the project using only the pack and record missing instructions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Data cards, evaluation plans and operational handover: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Data cards, evaluation plans and operational handover: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Prepare a handover pack for one existing mini-project: requirements-to-test table, synthetic-data card, evaluation plan, version manifest and runbook. Ask a teammate to reproduce the project using only the pack and record missing instructions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Data cards, evaluation plans and operational handover:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Data cards, evaluation plans and operational handover, explicitly apply Requirements traceability, Dataset and source provenance, Evaluation plan.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Prepare a handover pack for one existing mini-project: requirements-to-test table, synthetic-data card, evaluation plan, version manifest and runbook. Ask a teammate to reproduce the project using only the pack and record missing instructions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Data cards, evaluation plans and operational handover: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Data cards, evaluation plans and operational handover: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Prepare a handover pack for one existing mini-project: requirements-to-test table, synthetic-data card, evaluation plan, version manifest and runbook. Ask a teammate to reproduce the project using only the pack and record missing instructions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Data cards, evaluation plans and operational handover:** Interview a teammate, define the workflow and success metric, and scope a useful prototype.  For Data cards, evaluation plans and operational handover, explicitly apply Requirements traceability, Dataset and source provenance, Evaluation plan.
  - Deliverable: A concise PRD/ADR, user feedback and project documentation
  - Check: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Prepare a handover pack for one existing mini-project: requirements-to-test table, synthetic-data card, evaluation plan, version manifest and runbook. Ask a teammate to reproduce the project using only the pack and record missing instructions.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Data cards, evaluation plans and operational handover: A concise PRD/ADR, user feedback and project documentation
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Data cards, evaluation plans and operational handover: Document requirements, architecture, evaluation and limitations; test the prototype with a user. Adapt the lesson lab: Prepare a handover pack for one existing mini-project: requirements-to-test table, synthetic-data card, evaluation plan, version manifest and runbook. Ask a teammate to reproduce the project using only the pack and record missing instructions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

