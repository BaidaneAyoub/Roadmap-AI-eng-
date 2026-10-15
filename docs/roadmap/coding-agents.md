# Coding agents

Direct and verify generated work with clear engineering context.

## Optional branch

**Goal:** Direct coding agents using clear specifications and verify their work.

**Stage checkpoint:** Write AGENTS.md and a task specification; review a generated change using tests and security checks.

Explore this branch when it helps your goal. Return to the main route at any time; completion is not a gate.

Follow the modules and lessons below at your pace. Finish each exercise, save your evidence and self-assessment, then continue. Completed and Already known count as completed; Skipped is reported separately. You can move ahead at any time.

[Full pipeline](../PIPELINE.md) · [Return to main route: Deployment and operations](deployment.md)

## Planning and directing work

<a id="coding-specifications"></a>

### Problem definition, research and specifications

Give humans and coding tools a concrete goal and verifiable scope.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Complexity, code structure and testing](engineering.md#engineering-design), [Golden datasets and deterministic regression evaluation](eval-security.md#eval-datasets) Navigation is unrestricted.

#### Concepts

- [ ] **Problem and research:** Understand the user problem and existing implementation before proposing changes.
  - Example: Read the affected code and identify its callers before fixing a bug.
  - Videos:
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on problem and research. Then reproduce the lesson example: Read the affected code and identify its callers before fixing a bug.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [ ] **Requirements and architecture:** Describe behavior, interfaces, constraints and acceptance criteria without inventing extra features.
  - Example: Specify invalid-input behavior for a new endpoint.
  - Videos:
    - [Software requirements specification — worked tutorial](https://www.youtube.com/watch?v=M5DY3eTyhUA) · Requirements engineering tutorial · Focused tutorial
      - Explains: Functional requirements and software specification structure.
      - Useful because: Write testable requirements and distinguish them from implementation details.
      - Watch for: Focus on requirements and architecture. Then reproduce the lesson example: Specify invalid-input behavior for a new endpoint.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=M5DY3eTyhUA
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on requirements and architecture. Then reproduce the lesson example: Specify invalid-input behavior for a new endpoint.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [ ] **Task decomposition:** Bound tasks by coherent outcomes and include integration responsibility.
  - Example: Separate dataset preparation from API delivery but name who verifies their contract.
  - Videos:
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on task decomposition. Then reproduce the lesson example: Separate dataset preparation from API delivery but name who verifies their contract.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA

#### YouTube: focused explanations and full courses

- [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
  - Explains: AI coding agents and the engineering skills needed to direct and verify them.
  - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [Software requirements specification — worked tutorial](https://www.youtube.com/watch?v=M5DY3eTyhUA) · Requirements engineering tutorial · Focused tutorial
  - Explains: Functional requirements and software specification structure.
  - Useful because: Write testable requirements and distinguish them from implementation details.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=M5DY3eTyhUA

#### Free written resources

1. [Google: technical writing essentials](https://developers.google.com/tech-writing/one) — Free; no registration required. No paid materials required.
2. [GitHub: responsible use of coding assistants](https://docs.github.com/en/copilot/responsible-use/copilot-code-completion) — Free documentation. The associated hosted coding product is optional and may be paid; exercises use manual code review.

#### Lab: Problem definition, research and specifications

Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Problem definition, research and specifications:** Write a bounded implementation spec and AGENTS.md for this project.  For Problem definition, research and specifications, explicitly apply Problem and research, Requirements and architecture, Task decomposition.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Problem definition, research and specifications: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Problem definition, research and specifications: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Problem definition, research and specifications:** Write a bounded implementation spec and AGENTS.md for this project.  For Problem definition, research and specifications, explicitly apply Problem and research, Requirements and architecture, Task decomposition.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Problem definition, research and specifications: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Problem definition, research and specifications: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Problem definition, research and specifications:** Write a bounded implementation spec and AGENTS.md for this project.  For Problem definition, research and specifications, explicitly apply Problem and research, Requirements and architecture, Task decomposition.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Problem definition, research and specifications: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Problem definition, research and specifications: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Problem definition, research and specifications:** Write a bounded implementation spec and AGENTS.md for this project.  For Problem definition, research and specifications, explicitly apply Problem and research, Requirements and architecture, Task decomposition.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Problem definition, research and specifications: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Problem definition, research and specifications: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Problem definition, research and specifications:** Write a bounded implementation spec and AGENTS.md for this project.  For Problem definition, research and specifications, explicitly apply Problem and research, Requirements and architecture, Task decomposition.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Problem definition, research and specifications: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Problem definition, research and specifications: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Problem definition, research and specifications:** Write a bounded implementation spec and AGENTS.md for this project.  For Problem definition, research and specifications, explicitly apply Problem and research, Requirements and architecture, Task decomposition.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Problem definition, research and specifications: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Problem definition, research and specifications: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Problem definition, research and specifications:** Write a bounded implementation spec and AGENTS.md for this project.  For Problem definition, research and specifications, explicitly apply Problem and research, Requirements and architecture, Task decomposition.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Problem definition, research and specifications: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Problem definition, research and specifications: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Problem definition, research and specifications:** Write a bounded implementation spec and AGENTS.md for this project.  For Problem definition, research and specifications, explicitly apply Problem and research, Requirements and architecture, Task decomposition.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Problem definition, research and specifications: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Problem definition, research and specifications: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Problem definition, research and specifications:** Write a bounded implementation spec and AGENTS.md for this project.  For Problem definition, research and specifications, explicitly apply Problem and research, Requirements and architecture, Task decomposition.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Problem definition, research and specifications: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Problem definition, research and specifications: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Problem definition, research and specifications:** Write a bounded implementation spec and AGENTS.md for this project.  For Problem definition, research and specifications, explicitly apply Problem and research, Requirements and architecture, Task decomposition.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Problem definition, research and specifications: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Problem definition, research and specifications: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="coding-context"></a>

### AGENTS.md, project instructions, tools, plugins and hooks

Make project context explicit and keep automation within defined permissions.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Problem definition, research and specifications](coding-agents.md#coding-specifications) Navigation is unrestricted.

#### Concepts

- [ ] **Project context:** Repository instructions should reference requirements, conventions and important checks.
  - Example: AGENTS.md links to architecture and evaluation documents.
  - Videos:
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on project context. Then reproduce the lesson example: AGENTS.md links to architecture and evaluation documents.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [ ] **Tools, MCP and plugins:** Each integration grants capabilities and trust boundaries; only enable necessary access.
  - Example: Expose read-only repository search before adding write tools.
  - Videos:
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on tools, mcp and plugins. Then reproduce the lesson example: Expose read-only repository search before adding write tools.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [ ] **Hooks and harnesses:** A harness manages context, tools and execution; hooks run defined checks at lifecycle events.
  - Example: Run a local type check after a generated edit without letting tool output redefine permissions.
  - Videos:
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on hooks and harnesses. Then reproduce the lesson example: Run a local type check after a generated edit without letting tool output redefine permissions.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA

#### YouTube: focused explanations and full courses

- [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
  - Explains: AI coding agents and the engineering skills needed to direct and verify them.
  - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
  - Explains: Retrieval, MCP coordination and caching integration.
  - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/

#### Free written resources

1. [MCP: architecture](https://modelcontextprotocol.io/docs/learn/architecture) — Free; no registration required. No paid materials required.
2. [GitHub: responsible use of coding assistants](https://docs.github.com/en/copilot/responsible-use/copilot-code-completion) — Free documentation. The associated hosted coding product is optional and may be paid; exercises use manual code review.

#### Lab: AGENTS.md, project instructions, tools, plugins and hooks

Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **AGENTS.md, project instructions, tools, plugins and hooks:** Write a bounded implementation spec and AGENTS.md for this project.  For AGENTS.md, project instructions, tools, plugins and hooks, explicitly apply Project context, Tools, MCP and plugins, Hooks and harnesses.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **AGENTS.md, project instructions, tools, plugins and hooks:** Write a bounded implementation spec and AGENTS.md for this project.  For AGENTS.md, project instructions, tools, plugins and hooks, explicitly apply Project context, Tools, MCP and plugins, Hooks and harnesses.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **AGENTS.md, project instructions, tools, plugins and hooks:** Write a bounded implementation spec and AGENTS.md for this project.  For AGENTS.md, project instructions, tools, plugins and hooks, explicitly apply Project context, Tools, MCP and plugins, Hooks and harnesses.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **AGENTS.md, project instructions, tools, plugins and hooks:** Write a bounded implementation spec and AGENTS.md for this project.  For AGENTS.md, project instructions, tools, plugins and hooks, explicitly apply Project context, Tools, MCP and plugins, Hooks and harnesses.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **AGENTS.md, project instructions, tools, plugins and hooks:** Write a bounded implementation spec and AGENTS.md for this project.  For AGENTS.md, project instructions, tools, plugins and hooks, explicitly apply Project context, Tools, MCP and plugins, Hooks and harnesses.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **AGENTS.md, project instructions, tools, plugins and hooks:** Write a bounded implementation spec and AGENTS.md for this project.  For AGENTS.md, project instructions, tools, plugins and hooks, explicitly apply Project context, Tools, MCP and plugins, Hooks and harnesses.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **AGENTS.md, project instructions, tools, plugins and hooks:** Write a bounded implementation spec and AGENTS.md for this project.  For AGENTS.md, project instructions, tools, plugins and hooks, explicitly apply Project context, Tools, MCP and plugins, Hooks and harnesses.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **AGENTS.md, project instructions, tools, plugins and hooks:** Write a bounded implementation spec and AGENTS.md for this project.  For AGENTS.md, project instructions, tools, plugins and hooks, explicitly apply Project context, Tools, MCP and plugins, Hooks and harnesses.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **AGENTS.md, project instructions, tools, plugins and hooks:** Write a bounded implementation spec and AGENTS.md for this project.  For AGENTS.md, project instructions, tools, plugins and hooks, explicitly apply Project context, Tools, MCP and plugins, Hooks and harnesses.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **AGENTS.md, project instructions, tools, plugins and hooks:** Write a bounded implementation spec and AGENTS.md for this project.  For AGENTS.md, project instructions, tools, plugins and hooks, explicitly apply Project context, Tools, MCP and plugins, Hooks and harnesses.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="coding-autonomy"></a>

### Agent autonomy, subagents and long-running tasks

Delegate bounded work without surrendering responsibility for integration.

**Priority:** Useful next · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [AGENTS.md, project instructions, tools, plugins and hooks](coding-agents.md#coding-context) Navigation is unrestricted.

#### Concepts

- [ ] **Autonomy boundaries:** Specify permitted actions, stopping conditions and human approval for consequential changes.
  - Example: Allow code drafting but require approval before external publication.
  - Videos:
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on autonomy boundaries. Then reproduce the lesson example: Allow code drafting but require approval before external publication.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [ ] **Context management:** Finite context windows, summaries and retrieval can omit constraints; preserve essential requirements explicitly.
  - Example: Include acceptance checks in a long-task handoff.
  - Videos:
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on context management. Then reproduce the lesson example: Include acceptance checks in a long-task handoff.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [ ] **Delegation:** Workers need distinct ownership and output contracts; parallel edits to shared files can conflict.
  - Example: Assign separate modules and verify the integrated application afterward.
  - Videos:
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on delegation. Then reproduce the lesson example: Assign separate modules and verify the integrated application afterward.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA

#### YouTube: focused explanations and full courses

- [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
  - Explains: AI coding agents and the engineering skills needed to direct and verify them.
  - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
  - Explains: Graph state, nodes, workflows and agent applications.
  - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/

#### Free written resources

1. [Hugging Face agents course](https://huggingface.co/learn/agents-course/unit1/what-are-agents) — Free reading; optional account for course activities. No paid materials required.
2. [GitHub: responsible use of coding assistants](https://docs.github.com/en/copilot/responsible-use/copilot-code-completion) — Free documentation. The associated hosted coding product is optional and may be paid; exercises use manual code review.

#### Lab: Agent autonomy, subagents and long-running tasks

Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Agent autonomy, subagents and long-running tasks:** Write a bounded implementation spec and AGENTS.md for this project.  For Agent autonomy, subagents and long-running tasks, explicitly apply Autonomy boundaries, Context management, Delegation.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Agent autonomy, subagents and long-running tasks: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Agent autonomy, subagents and long-running tasks: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Agent autonomy, subagents and long-running tasks:** Write a bounded implementation spec and AGENTS.md for this project.  For Agent autonomy, subagents and long-running tasks, explicitly apply Autonomy boundaries, Context management, Delegation.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Agent autonomy, subagents and long-running tasks: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Agent autonomy, subagents and long-running tasks: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Agent autonomy, subagents and long-running tasks:** Write a bounded implementation spec and AGENTS.md for this project.  For Agent autonomy, subagents and long-running tasks, explicitly apply Autonomy boundaries, Context management, Delegation.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Agent autonomy, subagents and long-running tasks: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Agent autonomy, subagents and long-running tasks: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Agent autonomy, subagents and long-running tasks:** Write a bounded implementation spec and AGENTS.md for this project.  For Agent autonomy, subagents and long-running tasks, explicitly apply Autonomy boundaries, Context management, Delegation.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Agent autonomy, subagents and long-running tasks: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Agent autonomy, subagents and long-running tasks: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Agent autonomy, subagents and long-running tasks:** Write a bounded implementation spec and AGENTS.md for this project.  For Agent autonomy, subagents and long-running tasks, explicitly apply Autonomy boundaries, Context management, Delegation.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Agent autonomy, subagents and long-running tasks: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Agent autonomy, subagents and long-running tasks: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Agent autonomy, subagents and long-running tasks:** Write a bounded implementation spec and AGENTS.md for this project.  For Agent autonomy, subagents and long-running tasks, explicitly apply Autonomy boundaries, Context management, Delegation.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Agent autonomy, subagents and long-running tasks: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Agent autonomy, subagents and long-running tasks: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Agent autonomy, subagents and long-running tasks:** Write a bounded implementation spec and AGENTS.md for this project.  For Agent autonomy, subagents and long-running tasks, explicitly apply Autonomy boundaries, Context management, Delegation.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Agent autonomy, subagents and long-running tasks: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Agent autonomy, subagents and long-running tasks: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Agent autonomy, subagents and long-running tasks:** Write a bounded implementation spec and AGENTS.md for this project.  For Agent autonomy, subagents and long-running tasks, explicitly apply Autonomy boundaries, Context management, Delegation.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Agent autonomy, subagents and long-running tasks: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Agent autonomy, subagents and long-running tasks: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Agent autonomy, subagents and long-running tasks:** Write a bounded implementation spec and AGENTS.md for this project.  For Agent autonomy, subagents and long-running tasks, explicitly apply Autonomy boundaries, Context management, Delegation.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Agent autonomy, subagents and long-running tasks: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Agent autonomy, subagents and long-running tasks: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Agent autonomy, subagents and long-running tasks:** Write a bounded implementation spec and AGENTS.md for this project.  For Agent autonomy, subagents and long-running tasks, explicitly apply Autonomy boundaries, Context management, Delegation.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Agent autonomy, subagents and long-running tasks: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Agent autonomy, subagents and long-running tasks: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Review and verification

<a id="coding-review"></a>

### Read code, test, lint, type-check and review security

Treat generated code as a proposal that requires evidence.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Agent autonomy, subagents and long-running tasks](coding-agents.md#coding-autonomy) Navigation is unrestricted.

#### Concepts

- [ ] **Review:** Read connected callers and error paths, not only the edited lines.
  - Example: Check that a changed response shape still matches the frontend.
  - Videos:
    - [CS50P 5 — Unit tests](https://www.youtube.com/watch?v=tIrcxwLqzjQ) · Harvard CS50 · David Malan · University lecture
      - Explains: Assertions, pytest, test organization and testing return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on review. Then reproduce the lesson example: Check that a changed response shape still matches the frontend.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/5/
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on review. Then reproduce the lesson example: Check that a changed response shape still matches the frontend.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [ ] **Automated checks:** Tests, lint and type checking detect different faults; passing them does not prove product correctness.
  - Example: Combine a unit assertion with one user-flow check.
  - Videos:
    - [CS50P 5 — Unit tests](https://www.youtube.com/watch?v=tIrcxwLqzjQ) · Harvard CS50 · David Malan · University lecture
      - Explains: Assertions, pytest, test organization and testing return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on automated checks. Then reproduce the lesson example: Combine a unit assertion with one user-flow check.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/5/
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on automated checks. Then reproduce the lesson example: Combine a unit assertion with one user-flow check.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [ ] **Failure modes and evals:** Hallucinated APIs, missing authorization and weak evaluation are common integration failures.
  - Example: Insert a plausible but nonexistent function and verify the check catches it.
  - Videos:
    - [CS50P 5 — Unit tests](https://www.youtube.com/watch?v=tIrcxwLqzjQ) · Harvard CS50 · David Malan · University lecture
      - Explains: Assertions, pytest, test organization and testing return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on failure modes and evals. Then reproduce the lesson example: Insert a plausible but nonexistent function and verify the check catches it.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/5/
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on failure modes and evals. Then reproduce the lesson example: Insert a plausible but nonexistent function and verify the check catches it.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA

#### YouTube: focused explanations and full courses

- [CS50P 5 — Unit tests](https://www.youtube.com/watch?v=tIrcxwLqzjQ) · Harvard CS50 · David Malan · University lecture
  - Explains: Assertions, pytest, test organization and testing return values.
  - Useful because: A structured explanation with live coding; pause and reproduce the examples.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/2022/weeks/5/
- [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
  - Explains: Direct/indirect prompt injection and application trust boundaries.
  - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
- [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
  - Explains: AI coding agents and the engineering skills needed to direct and verify them.
  - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA

#### Free written resources

1. [pytest: getting started](https://docs.pytest.org/en/stable/getting-started.html) — Free; no registration required. No paid materials required.
2. [OWASP Top 10 for LLM applications](https://genai.owasp.org/llm-top-10/) — Free; no registration required. No paid materials required.

#### Lab: Read code, test, lint, type-check and review security

Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Read code, test, lint, type-check and review security:** Write a bounded implementation spec and AGENTS.md for this project.  For Read code, test, lint, type-check and review security, explicitly apply Review, Automated checks, Failure modes and evals.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Read code, test, lint, type-check and review security: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Read code, test, lint, type-check and review security: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Read code, test, lint, type-check and review security:** Write a bounded implementation spec and AGENTS.md for this project.  For Read code, test, lint, type-check and review security, explicitly apply Review, Automated checks, Failure modes and evals.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Read code, test, lint, type-check and review security: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Read code, test, lint, type-check and review security: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Read code, test, lint, type-check and review security:** Write a bounded implementation spec and AGENTS.md for this project.  For Read code, test, lint, type-check and review security, explicitly apply Review, Automated checks, Failure modes and evals.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Read code, test, lint, type-check and review security: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Read code, test, lint, type-check and review security: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Read code, test, lint, type-check and review security:** Write a bounded implementation spec and AGENTS.md for this project.  For Read code, test, lint, type-check and review security, explicitly apply Review, Automated checks, Failure modes and evals.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Read code, test, lint, type-check and review security: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Read code, test, lint, type-check and review security: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Read code, test, lint, type-check and review security:** Write a bounded implementation spec and AGENTS.md for this project.  For Read code, test, lint, type-check and review security, explicitly apply Review, Automated checks, Failure modes and evals.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Read code, test, lint, type-check and review security: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Read code, test, lint, type-check and review security: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Read code, test, lint, type-check and review security:** Write a bounded implementation spec and AGENTS.md for this project.  For Read code, test, lint, type-check and review security, explicitly apply Review, Automated checks, Failure modes and evals.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Read code, test, lint, type-check and review security: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Read code, test, lint, type-check and review security: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Read code, test, lint, type-check and review security:** Write a bounded implementation spec and AGENTS.md for this project.  For Read code, test, lint, type-check and review security, explicitly apply Review, Automated checks, Failure modes and evals.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Read code, test, lint, type-check and review security: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Read code, test, lint, type-check and review security: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Read code, test, lint, type-check and review security:** Write a bounded implementation spec and AGENTS.md for this project.  For Read code, test, lint, type-check and review security, explicitly apply Review, Automated checks, Failure modes and evals.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Read code, test, lint, type-check and review security: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Read code, test, lint, type-check and review security: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Read code, test, lint, type-check and review security:** Write a bounded implementation spec and AGENTS.md for this project.  For Read code, test, lint, type-check and review security, explicitly apply Review, Automated checks, Failure modes and evals.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Read code, test, lint, type-check and review security: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Read code, test, lint, type-check and review security: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Read code, test, lint, type-check and review security:** Write a bounded implementation spec and AGENTS.md for this project.  For Read code, test, lint, type-check and review security, explicitly apply Review, Automated checks, Failure modes and evals.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Read code, test, lint, type-check and review security: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Read code, test, lint, type-check and review security: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="coding-ci"></a>

### CI/CD integration, verification and iteration

Keep automation tied to working user outcomes and maintainable changes.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Read code, test, lint, type-check and review security](coding-agents.md#coding-review) Navigation is unrestricted.

#### Concepts

- [ ] **CI integration:** Run the same required checks locally and in CI, with explicit failures and no privileged secrets in logs.
  - Example: Fail a PR when regression fixtures change unexpectedly.
  - Videos:
    - [GitHub Actions — full course](https://www.youtube.com/watch?v=Tz7FsunBbfQ) · freeCodeCamp · Full tool course
      - Explains: Workflow configuration, CI/CD and automation.
      - Useful because: Build a test/build workflow; paid certification is not required.
      - Watch for: Focus on ci integration. Then reproduce the lesson example: Fail a PR when regression fixtures change unexpectedly.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=Tz7FsunBbfQ
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on ci integration. Then reproduce the lesson example: Fail a PR when regression fixtures change unexpectedly.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [ ] **Verification:** Follow the full input→API→data→response path and distinguish mock checks from live integration.
  - Example: Verify a saved record survives reload and is visible to an authorized teammate.
  - Videos:
    - [GitHub Actions — full course](https://www.youtube.com/watch?v=Tz7FsunBbfQ) · freeCodeCamp · Full tool course
      - Explains: Workflow configuration, CI/CD and automation.
      - Useful because: Build a test/build workflow; paid certification is not required.
      - Watch for: Focus on verification. Then reproduce the lesson example: Verify a saved record survives reload and is visible to an authorized teammate.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=Tz7FsunBbfQ
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on verification. Then reproduce the lesson example: Verify a saved record survives reload and is visible to an authorized teammate.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [ ] **Iteration:** Use observed failures and feedback to choose the next smallest complete change.
  - Example: Fix a reproducible save failure before adding more settings.
  - Videos:
    - [GitHub Actions — full course](https://www.youtube.com/watch?v=Tz7FsunBbfQ) · freeCodeCamp · Full tool course
      - Explains: Workflow configuration, CI/CD and automation.
      - Useful because: Build a test/build workflow; paid certification is not required.
      - Watch for: Focus on iteration. Then reproduce the lesson example: Fix a reproducible save failure before adding more settings.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=Tz7FsunBbfQ
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on iteration. Then reproduce the lesson example: Fix a reproducible save failure before adding more settings.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA

#### YouTube: focused explanations and full courses

- [GitHub Actions — full course](https://www.youtube.com/watch?v=Tz7FsunBbfQ) · freeCodeCamp · Full tool course
  - Explains: Workflow configuration, CI/CD and automation.
  - Useful because: Build a test/build workflow; paid certification is not required.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=Tz7FsunBbfQ
- [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
  - Explains: AI coding agents and the engineering skills needed to direct and verify them.
  - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA

#### Free written resources

1. [GitHub Actions: Python build and test](https://docs.github.com/en/actions/tutorials/build-and-test-code/python) — Free; no registration required. No paid materials required.
2. [Google: technical writing essentials](https://developers.google.com/tech-writing/one) — Free; no registration required. No paid materials required.

#### Lab: CI/CD integration, verification and iteration

Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **CI/CD integration, verification and iteration:** Write a bounded implementation spec and AGENTS.md for this project.  For CI/CD integration, verification and iteration, explicitly apply CI integration, Verification, Iteration.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] CI/CD integration, verification and iteration: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] CI/CD integration, verification and iteration: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **CI/CD integration, verification and iteration:** Write a bounded implementation spec and AGENTS.md for this project.  For CI/CD integration, verification and iteration, explicitly apply CI integration, Verification, Iteration.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] CI/CD integration, verification and iteration: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] CI/CD integration, verification and iteration: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **CI/CD integration, verification and iteration:** Write a bounded implementation spec and AGENTS.md for this project.  For CI/CD integration, verification and iteration, explicitly apply CI integration, Verification, Iteration.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] CI/CD integration, verification and iteration: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] CI/CD integration, verification and iteration: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **CI/CD integration, verification and iteration:** Write a bounded implementation spec and AGENTS.md for this project.  For CI/CD integration, verification and iteration, explicitly apply CI integration, Verification, Iteration.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] CI/CD integration, verification and iteration: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] CI/CD integration, verification and iteration: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **CI/CD integration, verification and iteration:** Write a bounded implementation spec and AGENTS.md for this project.  For CI/CD integration, verification and iteration, explicitly apply CI integration, Verification, Iteration.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] CI/CD integration, verification and iteration: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] CI/CD integration, verification and iteration: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **CI/CD integration, verification and iteration:** Write a bounded implementation spec and AGENTS.md for this project.  For CI/CD integration, verification and iteration, explicitly apply CI integration, Verification, Iteration.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] CI/CD integration, verification and iteration: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] CI/CD integration, verification and iteration: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **CI/CD integration, verification and iteration:** Write a bounded implementation spec and AGENTS.md for this project.  For CI/CD integration, verification and iteration, explicitly apply CI integration, Verification, Iteration.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] CI/CD integration, verification and iteration: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] CI/CD integration, verification and iteration: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **CI/CD integration, verification and iteration:** Write a bounded implementation spec and AGENTS.md for this project.  For CI/CD integration, verification and iteration, explicitly apply CI integration, Verification, Iteration.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] CI/CD integration, verification and iteration: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] CI/CD integration, verification and iteration: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **CI/CD integration, verification and iteration:** Write a bounded implementation spec and AGENTS.md for this project.  For CI/CD integration, verification and iteration, explicitly apply CI integration, Verification, Iteration.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] CI/CD integration, verification and iteration: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] CI/CD integration, verification and iteration: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **CI/CD integration, verification and iteration:** Write a bounded implementation spec and AGENTS.md for this project.  For CI/CD integration, verification and iteration, explicitly apply CI integration, Verification, Iteration.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] CI/CD integration, verification and iteration: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] CI/CD integration, verification and iteration: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Verifiable coding workflows

<a id="coding-specification-review"></a>

### Acceptance tests, change scope and evidence-based review

Make coding-agent work reviewable by defining a concrete problem, bounded changes and observable completion criteria.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [Read code, test, lint, type-check and review security](coding-agents.md#coding-review) Navigation is unrestricted.

#### Concepts

- [ ] **Problem and counterexample:** A useful task describes an observed failure and expected behaviour rather than only requesting a technology.
  - Example: Provide an input where duplicate ingestion occurs and the exact record count expected after the fix.
  - Videos:
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on problem and counterexample. Then reproduce the lesson example: Provide an input where duplicate ingestion occurs and the exact record count expected after the fix.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [ ] **Bounded context:** Give relevant files, contracts and constraints without assuming every instruction found in a repository or document is trusted.
  - Example: Separate project instructions from an untrusted sample document containing an attempted tool instruction.
  - Videos:
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on bounded context. Then reproduce the lesson example: Separate project instructions from an untrusted sample document containing an attempted tool instruction.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [ ] **Acceptance versus implementation checks:** Tests should verify user-visible behaviour and important invariants rather than copying the chosen algorithm.
  - Example: Assert repeated ingestion is idempotent without asserting which helper function implements it.
  - Videos:
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on acceptance versus implementation checks. Then reproduce the lesson example: Assert repeated ingestion is idempotent without asserting which helper function implements it.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [ ] **Diff and dependency review:** Review changed callers, schemas and dependency effects in addition to reading a generated summary.
  - Example: Check whether a migration or added package changes the deployment requirements before approving a feature.
  - Videos:
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on diff and dependency review. Then reproduce the lesson example: Check whether a migration or added package changes the deployment requirements before approving a feature.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [ ] **Verification evidence:** A report must distinguish code changes, tests actually run and checks that remain unverified.
  - Example: Write a completion note with the exact test command and a clear statement that hosted OAuth was not tested.
  - Videos:
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on verification evidence. Then reproduce the lesson example: Write a completion note with the exact test command and a clear statement that hosted OAuth was not tested.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA

#### YouTube: focused explanations and full courses

- [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
  - Explains: AI coding agents and the engineering skills needed to direct and verify them.
  - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [CS50P 5 — Unit tests](https://www.youtube.com/watch?v=tIrcxwLqzjQ) · Harvard CS50 · David Malan · University lecture
  - Explains: Assertions, pytest, test organization and testing return values.
  - Useful because: A structured explanation with live coding; pause and reproduce the examples.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/2022/weeks/5/

#### Free written resources

1. [GitHub: responsible use of coding assistants](https://docs.github.com/en/copilot/responsible-use/copilot-code-completion) — Free; no registration required. No paid materials required.
2. [pytest: good integration practices](https://docs.pytest.org/en/stable/explanation/goodpractices.html) — Free; no registration required. No paid materials required.

#### Lab: Acceptance tests, change scope and evidence-based review

Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Acceptance tests, change scope and evidence-based review:** Write a bounded implementation spec and AGENTS.md for this project.  For Acceptance tests, change scope and evidence-based review, explicitly apply Problem and counterexample, Bounded context, Acceptance versus implementation checks.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Acceptance tests, change scope and evidence-based review: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Acceptance tests, change scope and evidence-based review: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Acceptance tests, change scope and evidence-based review:** Write a bounded implementation spec and AGENTS.md for this project.  For Acceptance tests, change scope and evidence-based review, explicitly apply Problem and counterexample, Bounded context, Acceptance versus implementation checks.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Acceptance tests, change scope and evidence-based review: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Acceptance tests, change scope and evidence-based review: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Acceptance tests, change scope and evidence-based review:** Write a bounded implementation spec and AGENTS.md for this project.  For Acceptance tests, change scope and evidence-based review, explicitly apply Problem and counterexample, Bounded context, Acceptance versus implementation checks.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Acceptance tests, change scope and evidence-based review: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Acceptance tests, change scope and evidence-based review: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Acceptance tests, change scope and evidence-based review:** Write a bounded implementation spec and AGENTS.md for this project.  For Acceptance tests, change scope and evidence-based review, explicitly apply Problem and counterexample, Bounded context, Acceptance versus implementation checks.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Acceptance tests, change scope and evidence-based review: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Acceptance tests, change scope and evidence-based review: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Acceptance tests, change scope and evidence-based review:** Write a bounded implementation spec and AGENTS.md for this project.  For Acceptance tests, change scope and evidence-based review, explicitly apply Problem and counterexample, Bounded context, Acceptance versus implementation checks.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Acceptance tests, change scope and evidence-based review: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Acceptance tests, change scope and evidence-based review: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Acceptance tests, change scope and evidence-based review:** Write a bounded implementation spec and AGENTS.md for this project.  For Acceptance tests, change scope and evidence-based review, explicitly apply Problem and counterexample, Bounded context, Acceptance versus implementation checks.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Acceptance tests, change scope and evidence-based review: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Acceptance tests, change scope and evidence-based review: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Acceptance tests, change scope and evidence-based review:** Write a bounded implementation spec and AGENTS.md for this project.  For Acceptance tests, change scope and evidence-based review, explicitly apply Problem and counterexample, Bounded context, Acceptance versus implementation checks.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Acceptance tests, change scope and evidence-based review: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Acceptance tests, change scope and evidence-based review: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Acceptance tests, change scope and evidence-based review:** Write a bounded implementation spec and AGENTS.md for this project.  For Acceptance tests, change scope and evidence-based review, explicitly apply Problem and counterexample, Bounded context, Acceptance versus implementation checks.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Acceptance tests, change scope and evidence-based review: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Acceptance tests, change scope and evidence-based review: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Acceptance tests, change scope and evidence-based review:** Write a bounded implementation spec and AGENTS.md for this project.  For Acceptance tests, change scope and evidence-based review, explicitly apply Problem and counterexample, Bounded context, Acceptance versus implementation checks.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Acceptance tests, change scope and evidence-based review: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Acceptance tests, change scope and evidence-based review: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Acceptance tests, change scope and evidence-based review:** Write a bounded implementation spec and AGENTS.md for this project.  For Acceptance tests, change scope and evidence-based review, explicitly apply Problem and counterexample, Bounded context, Acceptance versus implementation checks.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Acceptance tests, change scope and evidence-based review: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Acceptance tests, change scope and evidence-based review: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="coding-autonomy-controls"></a>

### Tool permissions, untrusted context and recoverable task steps

Allow useful autonomous work while keeping credentials, side effects and review boundaries explicit.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [Agent autonomy, subagents and long-running tasks](coding-agents.md#coding-autonomy) Navigation is unrestricted.

#### Concepts

- [ ] **Capability scope:** A tool's availability is not unlimited authorisation; permission should match the task, data and destination.
  - Example: Permit reading a fixture folder while prohibiting a write to a real production database.
  - Videos:
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on capability scope. Then reproduce the lesson example: Permit reading a fixture folder while prohibiting a write to a real production database.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [ ] **Untrusted repository content:** Comments, issue text and dependency files can contain malicious instructions; treat them as evidence rather than authority.
  - Example: Place a fake instruction to print environment secrets inside a test fixture and document why it must be ignored.
  - Videos:
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on untrusted repository content. Then reproduce the lesson example: Place a fake instruction to print environment secrets inside a test fixture and document why it must be ignored.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [ ] **Checkpointed task decomposition:** Break work into verifiable increments so an interruption does not require guessing which effects occurred.
  - Example: Record whether a migration was generated, locally tested or actually applied as three distinct states.
  - Videos:
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on checkpointed task decomposition. Then reproduce the lesson example: Record whether a migration was generated, locally tested or actually applied as three distinct states.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [ ] **Secret handling:** Credentials should stay outside source, prompts and generated logs; use placeholders in examples and inspect outputs for accidental disclosure.
  - Example: Scan a sample diff for a fake API key and ensure the final report redacts it.
  - Videos:
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on secret handling. Then reproduce the lesson example: Scan a sample diff for a fake API key and ensure the final report redacts it.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [ ] **Review and escalation rules:** Define which reversible actions may proceed and which consequential actions need a human decision before execution.
  - Example: Create a policy permitting local tests but requiring an explicit approval for a simulated production deploy.
  - Videos:
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on review and escalation rules. Then reproduce the lesson example: Create a policy permitting local tests but requiring an explicit approval for a simulated production deploy.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA

#### YouTube: focused explanations and full courses

- [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
  - Explains: AI coding agents and the engineering skills needed to direct and verify them.
  - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
  - Explains: Retrieval, MCP coordination and caching integration.
  - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/

#### Free written resources

1. [MCP: security best practices](https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices) — Free; no registration required. No paid materials required.
2. [GitHub: responsible use of coding assistants](https://docs.github.com/en/copilot/responsible-use/copilot-code-completion) — Free; no registration required. No paid materials required.

#### Lab: Tool permissions, untrusted context and recoverable task steps

Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Tool permissions, untrusted context and recoverable task steps:** Write a bounded implementation spec and AGENTS.md for this project.  For Tool permissions, untrusted context and recoverable task steps, explicitly apply Capability scope, Untrusted repository content, Checkpointed task decomposition.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tool permissions, untrusted context and recoverable task steps: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Tool permissions, untrusted context and recoverable task steps: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Tool permissions, untrusted context and recoverable task steps:** Write a bounded implementation spec and AGENTS.md for this project.  For Tool permissions, untrusted context and recoverable task steps, explicitly apply Capability scope, Untrusted repository content, Checkpointed task decomposition.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tool permissions, untrusted context and recoverable task steps: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Tool permissions, untrusted context and recoverable task steps: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Tool permissions, untrusted context and recoverable task steps:** Write a bounded implementation spec and AGENTS.md for this project.  For Tool permissions, untrusted context and recoverable task steps, explicitly apply Capability scope, Untrusted repository content, Checkpointed task decomposition.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tool permissions, untrusted context and recoverable task steps: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Tool permissions, untrusted context and recoverable task steps: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Tool permissions, untrusted context and recoverable task steps:** Write a bounded implementation spec and AGENTS.md for this project.  For Tool permissions, untrusted context and recoverable task steps, explicitly apply Capability scope, Untrusted repository content, Checkpointed task decomposition.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tool permissions, untrusted context and recoverable task steps: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Tool permissions, untrusted context and recoverable task steps: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Tool permissions, untrusted context and recoverable task steps:** Write a bounded implementation spec and AGENTS.md for this project.  For Tool permissions, untrusted context and recoverable task steps, explicitly apply Capability scope, Untrusted repository content, Checkpointed task decomposition.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tool permissions, untrusted context and recoverable task steps: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Tool permissions, untrusted context and recoverable task steps: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Tool permissions, untrusted context and recoverable task steps:** Write a bounded implementation spec and AGENTS.md for this project.  For Tool permissions, untrusted context and recoverable task steps, explicitly apply Capability scope, Untrusted repository content, Checkpointed task decomposition.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tool permissions, untrusted context and recoverable task steps: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Tool permissions, untrusted context and recoverable task steps: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Tool permissions, untrusted context and recoverable task steps:** Write a bounded implementation spec and AGENTS.md for this project.  For Tool permissions, untrusted context and recoverable task steps, explicitly apply Capability scope, Untrusted repository content, Checkpointed task decomposition.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tool permissions, untrusted context and recoverable task steps: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Tool permissions, untrusted context and recoverable task steps: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Tool permissions, untrusted context and recoverable task steps:** Write a bounded implementation spec and AGENTS.md for this project.  For Tool permissions, untrusted context and recoverable task steps, explicitly apply Capability scope, Untrusted repository content, Checkpointed task decomposition.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tool permissions, untrusted context and recoverable task steps: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Tool permissions, untrusted context and recoverable task steps: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Tool permissions, untrusted context and recoverable task steps:** Write a bounded implementation spec and AGENTS.md for this project.  For Tool permissions, untrusted context and recoverable task steps, explicitly apply Capability scope, Untrusted repository content, Checkpointed task decomposition.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tool permissions, untrusted context and recoverable task steps: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Tool permissions, untrusted context and recoverable task steps: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Tool permissions, untrusted context and recoverable task steps:** Write a bounded implementation spec and AGENTS.md for this project.  For Tool permissions, untrusted context and recoverable task steps, explicitly apply Capability scope, Untrusted repository content, Checkpointed task decomposition.
  - Deliverable: A task handoff, reviewed patch and verification report
  - Check: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tool permissions, untrusted context and recoverable task steps: A task handoff, reviewed patch and verification report
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Tool permissions, untrusted context and recoverable task steps: Review connected callers, run type/tests/security checks and verify the complete user flow. Adapt the lesson lab: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

