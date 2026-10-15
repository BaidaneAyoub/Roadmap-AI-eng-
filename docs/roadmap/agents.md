# Agents and MCP

Build bounded tool workflows before increasing autonomy.

## Optional branch

**Goal:** Build bounded tool workflows with state, recovery and human approval.

**Stage checkpoint:** Implement a tool workflow with an MCP connection, approval for sensitive actions and recovery tests.

Explore this branch when it helps your goal. Return to the main route at any time; completion is not a gate.

Follow the modules and lessons below at your pace. Finish each exercise, save your evidence and self-assessment, then continue. Completed and Already known count as completed; Skipped is reported separately. You can move ahead at any time.

[Full pipeline](../PIPELINE.md) · [Return to main route: Evaluation and security](eval-security.md)

## Orchestration

<a id="agents-loops"></a>

### Workflows, agent loops, planning and state

Distinguish fixed control flow from model-directed decisions and bound execution.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Tool calling, streaming and multimodal AI](llm.md#llm-tools) Navigation is unrestricted.

#### Concepts

- [ ] **Workflows versus agents:** A workflow follows known transitions; an agent chooses actions based on observations.
  - Example: Use a fixed extract→validate→save flow when the steps are predictable.
  - Videos:
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on workflows versus agents. Then reproduce the lesson example: Use a fixed extract→validate→save flow when the steps are predictable.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [ ] **Planning and loops:** An agent alternates decisions, tool actions and observations; impose iteration/time limits.
  - Example: Stop after five tool calls and return a partial result with a reason.
  - Videos:
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on planning and loops. Then reproduce the lesson example: Stop after five tool calls and return a partial result with a reason.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [ ] **State and memory:** State records current execution; memory persists selected knowledge across runs and needs scope.
  - Example: Checkpoint task state without sharing another user's history.
  - Videos:
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on state and memory. Then reproduce the lesson example: Checkpoint task state without sharing another user's history.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/

#### YouTube: focused explanations and full courses

- [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
  - Explains: Graph state, nodes, workflows and agent applications.
  - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/

#### Free written resources

1. [Hugging Face agents course](https://huggingface.co/learn/agents-course/unit1/what-are-agents) — Free reading; optional account for course activities. No paid materials required.
2. [LangGraph: overview](https://docs.langchain.com/oss/python/langgraph/overview) — Free reading; optional account for course activities. No paid materials required.

#### Lab: Workflows, agent loops, planning and state

Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Workflows, agent loops, planning and state:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Workflows, agent loops, planning and state, explicitly apply Workflows versus agents, Planning and loops, State and memory.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Workflows, agent loops, planning and state: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Workflows, agent loops, planning and state: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Workflows, agent loops, planning and state:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Workflows, agent loops, planning and state, explicitly apply Workflows versus agents, Planning and loops, State and memory.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Workflows, agent loops, planning and state: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Workflows, agent loops, planning and state: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Workflows, agent loops, planning and state:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Workflows, agent loops, planning and state, explicitly apply Workflows versus agents, Planning and loops, State and memory.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Workflows, agent loops, planning and state: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Workflows, agent loops, planning and state: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Workflows, agent loops, planning and state:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Workflows, agent loops, planning and state, explicitly apply Workflows versus agents, Planning and loops, State and memory.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Workflows, agent loops, planning and state: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Workflows, agent loops, planning and state: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Workflows, agent loops, planning and state:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Workflows, agent loops, planning and state, explicitly apply Workflows versus agents, Planning and loops, State and memory.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Workflows, agent loops, planning and state: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Workflows, agent loops, planning and state: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Workflows, agent loops, planning and state:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Workflows, agent loops, planning and state, explicitly apply Workflows versus agents, Planning and loops, State and memory.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Workflows, agent loops, planning and state: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Workflows, agent loops, planning and state: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Workflows, agent loops, planning and state:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Workflows, agent loops, planning and state, explicitly apply Workflows versus agents, Planning and loops, State and memory.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Workflows, agent loops, planning and state: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Workflows, agent loops, planning and state: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Workflows, agent loops, planning and state:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Workflows, agent loops, planning and state, explicitly apply Workflows versus agents, Planning and loops, State and memory.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Workflows, agent loops, planning and state: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Workflows, agent loops, planning and state: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Workflows, agent loops, planning and state:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Workflows, agent loops, planning and state, explicitly apply Workflows versus agents, Planning and loops, State and memory.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Workflows, agent loops, planning and state: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Workflows, agent loops, planning and state: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Workflows, agent loops, planning and state:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Workflows, agent loops, planning and state, explicitly apply Workflows versus agents, Planning and loops, State and memory.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Workflows, agent loops, planning and state: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Workflows, agent loops, planning and state: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="agents-tools"></a>

### Tools, APIs, permissions and sandboxing

Treat every tool argument as untrusted input and limit what an agent may change.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Workflows, agent loops, planning and state](agents.md#agents-loops) Navigation is unrestricted.

#### Concepts

- [ ] **Tool schemas:** Names, descriptions and argument schemas explain supported actions; validation still occurs in software.
  - Example: A search tool accepts a bounded query length and result limit.
  - Videos:
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on tool schemas. Then reproduce the lesson example: A search tool accepts a bounded query length and result limit.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [ ] **Permissions and approval:** Read access and write access are different; consequential actions require explicit authorization.
  - Example: Let an agent draft a change but require a human before applying it.
  - Videos:
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on permissions and approval. Then reproduce the lesson example: Let an agent draft a change but require a human before applying it.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [ ] **Sandboxing:** Restrict filesystem/network/process capabilities and enforce resource limits.
  - Example: Use a temporary allowed directory and reject parent-directory traversal.
  - Videos:
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on sandboxing. Then reproduce the lesson example: Use a temporary allowed directory and reject parent-directory traversal.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/

#### YouTube: focused explanations and full courses

- [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
  - Explains: Graph state, nodes, workflows and agent applications.
  - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
  - Explains: Direct/indirect prompt injection and application trust boundaries.
  - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg

#### Free written resources

1. [Hugging Face: tools](https://huggingface.co/learn/agents-course/unit1/tools) — Free reading; optional account for course activities. No paid materials required.
2. [OWASP Top 10 for LLM applications](https://genai.owasp.org/llm-top-10/) — Free; no registration required. No paid materials required.

#### Lab: Tools, APIs, permissions and sandboxing

Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Tools, APIs, permissions and sandboxing:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Tools, APIs, permissions and sandboxing, explicitly apply Tool schemas, Permissions and approval, Sandboxing.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tools, APIs, permissions and sandboxing: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Tools, APIs, permissions and sandboxing: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Tools, APIs, permissions and sandboxing:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Tools, APIs, permissions and sandboxing, explicitly apply Tool schemas, Permissions and approval, Sandboxing.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tools, APIs, permissions and sandboxing: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Tools, APIs, permissions and sandboxing: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Tools, APIs, permissions and sandboxing:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Tools, APIs, permissions and sandboxing, explicitly apply Tool schemas, Permissions and approval, Sandboxing.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tools, APIs, permissions and sandboxing: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Tools, APIs, permissions and sandboxing: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Tools, APIs, permissions and sandboxing:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Tools, APIs, permissions and sandboxing, explicitly apply Tool schemas, Permissions and approval, Sandboxing.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tools, APIs, permissions and sandboxing: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Tools, APIs, permissions and sandboxing: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Tools, APIs, permissions and sandboxing:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Tools, APIs, permissions and sandboxing, explicitly apply Tool schemas, Permissions and approval, Sandboxing.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tools, APIs, permissions and sandboxing: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Tools, APIs, permissions and sandboxing: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Tools, APIs, permissions and sandboxing:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Tools, APIs, permissions and sandboxing, explicitly apply Tool schemas, Permissions and approval, Sandboxing.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tools, APIs, permissions and sandboxing: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Tools, APIs, permissions and sandboxing: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Tools, APIs, permissions and sandboxing:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Tools, APIs, permissions and sandboxing, explicitly apply Tool schemas, Permissions and approval, Sandboxing.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tools, APIs, permissions and sandboxing: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Tools, APIs, permissions and sandboxing: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Tools, APIs, permissions and sandboxing:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Tools, APIs, permissions and sandboxing, explicitly apply Tool schemas, Permissions and approval, Sandboxing.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tools, APIs, permissions and sandboxing: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Tools, APIs, permissions and sandboxing: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Tools, APIs, permissions and sandboxing:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Tools, APIs, permissions and sandboxing, explicitly apply Tool schemas, Permissions and approval, Sandboxing.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tools, APIs, permissions and sandboxing: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Tools, APIs, permissions and sandboxing: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Tools, APIs, permissions and sandboxing:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Tools, APIs, permissions and sandboxing, explicitly apply Tool schemas, Permissions and approval, Sandboxing.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Tools, APIs, permissions and sandboxing: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Tools, APIs, permissions and sandboxing: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="agents-recovery"></a>

### LangGraph, multi-agent coordination and failure recovery

Make coordination explicit and preserve useful work when dependencies fail.

**Priority:** Useful next · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Tools, APIs, permissions and sandboxing](agents.md#agents-tools) Navigation is unrestricted.

#### Concepts

- [ ] **Graph orchestration:** Nodes transform state and edges select transitions; graph state schemas make assumptions visible.
  - Example: Route failed retrieval to a fallback node rather than retrying indefinitely.
  - Videos:
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on graph orchestration. Then reproduce the lesson example: Route failed retrieval to a fallback node rather than retrying indefinitely.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [ ] **Multi-agent context:** Each worker needs a bounded task, appropriate context and an output contract; more workers can add coordination cost.
  - Example: Separate research and verification outputs with source IDs.
  - Videos:
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on multi-agent context. Then reproduce the lesson example: Separate research and verification outputs with source IDs.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [ ] **Recovery:** Retries need bounds and idempotency; durable checkpoints avoid repeating completed side effects.
  - Example: Resume after a mock tool timeout without duplicating a saved result.
  - Videos:
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on recovery. Then reproduce the lesson example: Resume after a mock tool timeout without duplicating a saved result.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/

#### YouTube: focused explanations and full courses

- [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
  - Explains: Graph state, nodes, workflows and agent applications.
  - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/

#### Free written resources

1. [LangGraph: persistence](https://docs.langchain.com/oss/python/langgraph/persistence) — Free reading; optional account for course activities. No paid materials required.
2. [LangGraph: workflows and agents](https://docs.langchain.com/oss/python/langgraph/workflows-agents) — Free reading; optional account for course activities. No paid materials required.

#### Lab: LangGraph, multi-agent coordination and failure recovery

Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **LangGraph, multi-agent coordination and failure recovery:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For LangGraph, multi-agent coordination and failure recovery, explicitly apply Graph orchestration, Multi-agent context, Recovery.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] LangGraph, multi-agent coordination and failure recovery: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] LangGraph, multi-agent coordination and failure recovery: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **LangGraph, multi-agent coordination and failure recovery:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For LangGraph, multi-agent coordination and failure recovery, explicitly apply Graph orchestration, Multi-agent context, Recovery.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] LangGraph, multi-agent coordination and failure recovery: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] LangGraph, multi-agent coordination and failure recovery: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **LangGraph, multi-agent coordination and failure recovery:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For LangGraph, multi-agent coordination and failure recovery, explicitly apply Graph orchestration, Multi-agent context, Recovery.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] LangGraph, multi-agent coordination and failure recovery: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] LangGraph, multi-agent coordination and failure recovery: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **LangGraph, multi-agent coordination and failure recovery:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For LangGraph, multi-agent coordination and failure recovery, explicitly apply Graph orchestration, Multi-agent context, Recovery.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] LangGraph, multi-agent coordination and failure recovery: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] LangGraph, multi-agent coordination and failure recovery: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **LangGraph, multi-agent coordination and failure recovery:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For LangGraph, multi-agent coordination and failure recovery, explicitly apply Graph orchestration, Multi-agent context, Recovery.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] LangGraph, multi-agent coordination and failure recovery: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] LangGraph, multi-agent coordination and failure recovery: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **LangGraph, multi-agent coordination and failure recovery:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For LangGraph, multi-agent coordination and failure recovery, explicitly apply Graph orchestration, Multi-agent context, Recovery.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] LangGraph, multi-agent coordination and failure recovery: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] LangGraph, multi-agent coordination and failure recovery: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **LangGraph, multi-agent coordination and failure recovery:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For LangGraph, multi-agent coordination and failure recovery, explicitly apply Graph orchestration, Multi-agent context, Recovery.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] LangGraph, multi-agent coordination and failure recovery: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] LangGraph, multi-agent coordination and failure recovery: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **LangGraph, multi-agent coordination and failure recovery:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For LangGraph, multi-agent coordination and failure recovery, explicitly apply Graph orchestration, Multi-agent context, Recovery.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] LangGraph, multi-agent coordination and failure recovery: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] LangGraph, multi-agent coordination and failure recovery: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **LangGraph, multi-agent coordination and failure recovery:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For LangGraph, multi-agent coordination and failure recovery, explicitly apply Graph orchestration, Multi-agent context, Recovery.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] LangGraph, multi-agent coordination and failure recovery: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] LangGraph, multi-agent coordination and failure recovery: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **LangGraph, multi-agent coordination and failure recovery:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For LangGraph, multi-agent coordination and failure recovery, explicitly apply Graph orchestration, Multi-agent context, Recovery.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] LangGraph, multi-agent coordination and failure recovery: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] LangGraph, multi-agent coordination and failure recovery: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Model Context Protocol

<a id="agents-mcp"></a>

### MCP host, client, server and transports

Understand the protocol boundary independently of any coding assistant vendor.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [LangGraph, multi-agent coordination and failure recovery](agents.md#agents-recovery) Navigation is unrestricted.

#### Concepts

- [ ] **Roles:** The host manages user interaction and permissions, clients connect to servers, and servers expose capabilities.
  - Example: Draw one host connected to two distinct tool servers.
  - Videos:
    - [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
      - Explains: Retrieval, MCP coordination and caching integration.
      - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
      - Watch for: Focus on roles. Then reproduce the lesson example: Draw one host connected to two distinct tool servers.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on roles. Then reproduce the lesson example: Draw one host connected to two distinct tool servers.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [ ] **Capabilities:** Tools perform actions, resources expose data and prompts supply reusable templates.
  - Example: Expose a read-only document resource separately from a search tool.
  - Videos:
    - [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
      - Explains: Retrieval, MCP coordination and caching integration.
      - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
      - Watch for: Focus on capabilities. Then reproduce the lesson example: Expose a read-only document resource separately from a search tool.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on capabilities. Then reproduce the lesson example: Expose a read-only document resource separately from a search tool.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [ ] **Transports:** stdio connects local processes; Streamable HTTP supports remote connections with authentication boundaries.
  - Example: Keep a local stdio tool separate from a remotely reachable HTTP service.
  - Videos:
    - [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
      - Explains: Retrieval, MCP coordination and caching integration.
      - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
      - Watch for: Focus on transports. Then reproduce the lesson example: Keep a local stdio tool separate from a remotely reachable HTTP service.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on transports. Then reproduce the lesson example: Keep a local stdio tool separate from a remotely reachable HTTP service.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/

#### YouTube: focused explanations and full courses

- [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
  - Explains: Retrieval, MCP coordination and caching integration.
  - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/
- [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
  - Explains: Graph state, nodes, workflows and agent applications.
  - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/

#### Free written resources

1. [MCP: architecture](https://modelcontextprotocol.io/docs/learn/architecture) — Free; no registration required. No paid materials required.
2. [MCP: build a server](https://modelcontextprotocol.io/docs/develop/build-server) — Free; no registration required. No paid materials required.

#### Lab: MCP host, client, server and transports

Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **MCP host, client, server and transports:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP host, client, server and transports, explicitly apply Roles, Capabilities, Transports.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP host, client, server and transports: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] MCP host, client, server and transports: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **MCP host, client, server and transports:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP host, client, server and transports, explicitly apply Roles, Capabilities, Transports.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP host, client, server and transports: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] MCP host, client, server and transports: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **MCP host, client, server and transports:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP host, client, server and transports, explicitly apply Roles, Capabilities, Transports.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP host, client, server and transports: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] MCP host, client, server and transports: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **MCP host, client, server and transports:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP host, client, server and transports, explicitly apply Roles, Capabilities, Transports.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP host, client, server and transports: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] MCP host, client, server and transports: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **MCP host, client, server and transports:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP host, client, server and transports, explicitly apply Roles, Capabilities, Transports.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP host, client, server and transports: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] MCP host, client, server and transports: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **MCP host, client, server and transports:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP host, client, server and transports, explicitly apply Roles, Capabilities, Transports.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP host, client, server and transports: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] MCP host, client, server and transports: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **MCP host, client, server and transports:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP host, client, server and transports, explicitly apply Roles, Capabilities, Transports.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP host, client, server and transports: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] MCP host, client, server and transports: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **MCP host, client, server and transports:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP host, client, server and transports, explicitly apply Roles, Capabilities, Transports.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP host, client, server and transports: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] MCP host, client, server and transports: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **MCP host, client, server and transports:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP host, client, server and transports, explicitly apply Roles, Capabilities, Transports.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP host, client, server and transports: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] MCP host, client, server and transports: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **MCP host, client, server and transports:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP host, client, server and transports, explicitly apply Roles, Capabilities, Transports.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP host, client, server and transports: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] MCP host, client, server and transports: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="agents-mcp-client"></a>

### MCP client connections, context security and testing

Prevent remote tool descriptions or results from overriding application policy.

**Priority:** Core · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [MCP host, client, server and transports](agents.md#agents-mcp) Navigation is unrestricted.

#### Concepts

- [ ] **Connections:** Clients discover capabilities, call tools and handle disconnects/timeouts without corrupting state.
  - Example: Report an unavailable server while keeping previous results.
  - Videos:
    - [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
      - Explains: Retrieval, MCP coordination and caching integration.
      - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
      - Watch for: Focus on connections. Then reproduce the lesson example: Report an unavailable server while keeping previous results.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on connections. Then reproduce the lesson example: Report an unavailable server while keeping previous results.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [ ] **Context security:** Tool outputs are untrusted data and can contain prompt injection; identities and permissions must survive context assembly.
  - Example: Ignore a document instruction asking to expose secrets.
  - Videos:
    - [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
      - Explains: Retrieval, MCP coordination and caching integration.
      - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
      - Watch for: Focus on context security. Then reproduce the lesson example: Ignore a document instruction asking to expose secrets.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on context security. Then reproduce the lesson example: Ignore a document instruction asking to expose secrets.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [ ] **Protocol tests:** Validate argument/output shapes, failures and transport behavior with a test harness.
  - Example: Test a malformed tool response and a disconnected server.
  - Videos:
    - [CS50P 5 — Unit tests](https://www.youtube.com/watch?v=tIrcxwLqzjQ) · Harvard CS50 · David Malan · University lecture
      - Explains: Assertions, pytest, test organization and testing return values.
      - Useful because: A structured explanation with live coding; pause and reproduce the examples.
      - Watch for: Focus on protocol tests. Then reproduce the lesson example: Test a malformed tool response and a disconnected server.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://cs50.harvard.edu/python/2022/weeks/5/
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on protocol tests. Then reproduce the lesson example: Test a malformed tool response and a disconnected server.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/

#### YouTube: focused explanations and full courses

- [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
  - Explains: Retrieval, MCP coordination and caching integration.
  - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/
- [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
  - Explains: Direct/indirect prompt injection and application trust boundaries.
  - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
- [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
  - Explains: Graph state, nodes, workflows and agent applications.
  - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/

#### Free written resources

1. [MCP: build a client](https://modelcontextprotocol.io/docs/develop/build-client) — Free; no registration required. No paid materials required.
2. [MCP: security best practices](https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices) — Free; no registration required. No paid materials required.

#### Lab: MCP client connections, context security and testing

Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **MCP client connections, context security and testing:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP client connections, context security and testing, explicitly apply Connections, Context security, Protocol tests.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP client connections, context security and testing: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] MCP client connections, context security and testing: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **MCP client connections, context security and testing:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP client connections, context security and testing, explicitly apply Connections, Context security, Protocol tests.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP client connections, context security and testing: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] MCP client connections, context security and testing: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **MCP client connections, context security and testing:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP client connections, context security and testing, explicitly apply Connections, Context security, Protocol tests.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP client connections, context security and testing: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] MCP client connections, context security and testing: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **MCP client connections, context security and testing:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP client connections, context security and testing, explicitly apply Connections, Context security, Protocol tests.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP client connections, context security and testing: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] MCP client connections, context security and testing: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **MCP client connections, context security and testing:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP client connections, context security and testing, explicitly apply Connections, Context security, Protocol tests.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP client connections, context security and testing: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] MCP client connections, context security and testing: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **MCP client connections, context security and testing:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP client connections, context security and testing, explicitly apply Connections, Context security, Protocol tests.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP client connections, context security and testing: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] MCP client connections, context security and testing: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **MCP client connections, context security and testing:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP client connections, context security and testing, explicitly apply Connections, Context security, Protocol tests.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP client connections, context security and testing: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] MCP client connections, context security and testing: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **MCP client connections, context security and testing:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP client connections, context security and testing, explicitly apply Connections, Context security, Protocol tests.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP client connections, context security and testing: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] MCP client connections, context security and testing: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **MCP client connections, context security and testing:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP client connections, context security and testing, explicitly apply Connections, Context security, Protocol tests.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP client connections, context security and testing: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] MCP client connections, context security and testing: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **MCP client connections, context security and testing:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP client connections, context security and testing, explicitly apply Connections, Context security, Protocol tests.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP client connections, context security and testing: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] MCP client connections, context security and testing: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Stateful workflows and tool boundaries

<a id="agents-state-machines"></a>

### Typed state, checkpoints and bounded execution graphs

Keep multi-step workflows inspectable and resumable without relying on an unconstrained agent conversation.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [Workflows, agent loops, planning and state](agents.md#agents-loops) Navigation is unrestricted.

#### Concepts

- [ ] **State schema:** Explicit state fields describe what each step reads and writes, avoiding accidental dependence on a hidden conversation history.
  - Example: Represent a workflow with query, evidence IDs, approval status, attempts and final answer.
  - Videos:
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on state schema. Then reproduce the lesson example: Represent a workflow with query, evidence IDs, approval status, attempts and final answer.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [ ] **Nodes, edges and routing:** Nodes perform bounded work and routing selects the next allowed transition based on state.
  - Example: Route a validation failure back to one repair step and prohibit an unbounded self-loop.
  - Videos:
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on nodes, edges and routing. Then reproduce the lesson example: Route a validation failure back to one repair step and prohibit an unbounded self-loop.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [ ] **Reducers and concurrent updates:** Concurrent branches need a clear merge rule or can overwrite each other's changes.
  - Example: Merge two evidence lists with stable-ID deduplication instead of last-write-wins replacement.
  - Videos:
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on reducers and concurrent updates. Then reproduce the lesson example: Merge two evidence lists with stable-ID deduplication instead of last-write-wins replacement.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [ ] **Checkpoints and replay:** A checkpoint records resumable state, but replay may execute work again and requires deliberate treatment of side effects.
  - Example: Resume a paused toy workflow from a JSON checkpoint and verify its completed write is not duplicated.
  - Videos:
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on checkpoints and replay. Then reproduce the lesson example: Resume a paused toy workflow from a JSON checkpoint and verify its completed write is not duplicated.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [ ] **Budgets and terminal states:** Maximum steps, attempts and elapsed-time budgets limit runaway work; success and exhaustion should be distinct outcomes.
  - Example: Stop a looping fake planner after three attempts with an explicit budget-exhausted result.
  - Videos:
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on budgets and terminal states. Then reproduce the lesson example: Stop a looping fake planner after three attempts with an explicit budget-exhausted result.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/

#### YouTube: focused explanations and full courses

- [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
  - Explains: Graph state, nodes, workflows and agent applications.
  - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
  - Explains: Scalability, reliability, storage and architecture tradeoffs.
  - Useful because: Explain why a queue, index or cache is useful before adding one.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4

#### Free written resources

1. [LangGraph: graph API](https://docs.langchain.com/oss/python/langgraph/graph-api) — Free; no registration required. No paid materials required.
2. [LangGraph: persistence](https://docs.langchain.com/oss/python/langgraph/persistence) — Free; no registration required. No paid materials required.

#### Lab: Typed state, checkpoints and bounded execution graphs

Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **Typed state, checkpoints and bounded execution graphs:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Typed state, checkpoints and bounded execution graphs, explicitly apply State schema, Nodes, edges and routing, Reducers and concurrent updates.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Typed state, checkpoints and bounded execution graphs: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] Typed state, checkpoints and bounded execution graphs: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **Typed state, checkpoints and bounded execution graphs:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Typed state, checkpoints and bounded execution graphs, explicitly apply State schema, Nodes, edges and routing, Reducers and concurrent updates.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Typed state, checkpoints and bounded execution graphs: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] Typed state, checkpoints and bounded execution graphs: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **Typed state, checkpoints and bounded execution graphs:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Typed state, checkpoints and bounded execution graphs, explicitly apply State schema, Nodes, edges and routing, Reducers and concurrent updates.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Typed state, checkpoints and bounded execution graphs: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] Typed state, checkpoints and bounded execution graphs: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **Typed state, checkpoints and bounded execution graphs:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Typed state, checkpoints and bounded execution graphs, explicitly apply State schema, Nodes, edges and routing, Reducers and concurrent updates.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Typed state, checkpoints and bounded execution graphs: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] Typed state, checkpoints and bounded execution graphs: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **Typed state, checkpoints and bounded execution graphs:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Typed state, checkpoints and bounded execution graphs, explicitly apply State schema, Nodes, edges and routing, Reducers and concurrent updates.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Typed state, checkpoints and bounded execution graphs: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] Typed state, checkpoints and bounded execution graphs: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **Typed state, checkpoints and bounded execution graphs:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Typed state, checkpoints and bounded execution graphs, explicitly apply State schema, Nodes, edges and routing, Reducers and concurrent updates.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Typed state, checkpoints and bounded execution graphs: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] Typed state, checkpoints and bounded execution graphs: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **Typed state, checkpoints and bounded execution graphs:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Typed state, checkpoints and bounded execution graphs, explicitly apply State schema, Nodes, edges and routing, Reducers and concurrent updates.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Typed state, checkpoints and bounded execution graphs: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] Typed state, checkpoints and bounded execution graphs: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **Typed state, checkpoints and bounded execution graphs:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Typed state, checkpoints and bounded execution graphs, explicitly apply State schema, Nodes, edges and routing, Reducers and concurrent updates.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Typed state, checkpoints and bounded execution graphs: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] Typed state, checkpoints and bounded execution graphs: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **Typed state, checkpoints and bounded execution graphs:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Typed state, checkpoints and bounded execution graphs, explicitly apply State schema, Nodes, edges and routing, Reducers and concurrent updates.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Typed state, checkpoints and bounded execution graphs: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] Typed state, checkpoints and bounded execution graphs: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **Typed state, checkpoints and bounded execution graphs:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For Typed state, checkpoints and bounded execution graphs, explicitly apply State schema, Nodes, edges and routing, Reducers and concurrent updates.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] Typed state, checkpoints and bounded execution graphs: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] Typed state, checkpoints and bounded execution graphs: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="agents-mcp-contracts"></a>

### MCP tool schemas, transport lifecycle and permission checks

Separate protocol discovery from authorisation so a reachable tool does not automatically become an allowed action.

**Priority:** Useful next · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [MCP client connections, context security and testing](agents.md#agents-mcp-client) Navigation is unrestricted.

#### Concepts

- [ ] **Tool discovery and schemas:** A client discovers tool names and input schemas, then validates arguments before dispatch; a tool description is untrusted content.
  - Example: Expose a read_note tool taking an ID and reject an unexpected filesystem path argument.
  - Videos:
    - [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
      - Explains: Retrieval, MCP coordination and caching integration.
      - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
      - Watch for: Focus on tool discovery and schemas. Then reproduce the lesson example: Expose a read_note tool taking an ID and reject an unexpected filesystem path argument.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on tool discovery and schemas. Then reproduce the lesson example: Expose a read_note tool taking an ID and reject an unexpected filesystem path argument.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [ ] **Transport lifecycle:** A local stdio process and a network HTTP server have different startup, connection and shutdown concerns.
  - Example: Test that a local server process exits when its client shuts down and document a timeout path.
  - Videos:
    - [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
      - Explains: Retrieval, MCP coordination and caching integration.
      - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
      - Watch for: Focus on transport lifecycle. Then reproduce the lesson example: Test that a local server process exits when its client shuts down and document a timeout path.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on transport lifecycle. Then reproduce the lesson example: Test that a local server process exits when its client shuts down and document a timeout path.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [ ] **Resources, prompts and tools:** Resources expose context, prompts provide reusable interaction templates and tools perform operations; none bypass application permissions.
  - Example: Classify a note document, a summarisation template and a write_note operation under the appropriate primitive.
  - Videos:
    - [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
      - Explains: Retrieval, MCP coordination and caching integration.
      - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
      - Watch for: Focus on resources, prompts and tools. Then reproduce the lesson example: Classify a note document, a summarisation template and a write_note operation under the appropriate primitive.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on resources, prompts and tools. Then reproduce the lesson example: Classify a note document, a summarisation template and a write_note operation under the appropriate primitive.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [ ] **Authorisation per operation:** Validate the caller and object scope for every action instead of trusting a successful discovery step.
  - Example: Deny a tool call attempting to read another user's note even when the tool itself is enabled.
  - Videos:
    - [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
      - Explains: Retrieval, MCP coordination and caching integration.
      - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
      - Watch for: Focus on authorisation per operation. Then reproduce the lesson example: Deny a tool call attempting to read another user's note even when the tool itself is enabled.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on authorisation per operation. Then reproduce the lesson example: Deny a tool call attempting to read another user's note even when the tool itself is enabled.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [ ] **Approval and audit context:** Sensitive side effects need a defined approval boundary and a recorded decision context; tool text must not grant itself permission.
  - Example: Record an approval for one exact write payload and reject a changed payload reusing that approval.
  - Videos:
    - [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
      - Explains: Retrieval, MCP coordination and caching integration.
      - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
      - Watch for: Focus on approval and audit context. Then reproduce the lesson example: Record an approval for one exact write payload and reject a changed payload reusing that approval.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on approval and audit context. Then reproduce the lesson example: Record an approval for one exact write payload and reject a changed payload reusing that approval.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/

#### YouTube: focused explanations and full courses

- [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
  - Explains: Retrieval, MCP coordination and caching integration.
  - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/
- [OWASP LLM01 — prompt injection](https://www.youtube.com/watch?v=dq5jD_qE1Cg) · Vandana Verma · Security explanation
  - Explains: Direct/indirect prompt injection and application trust boundaries.
  - Useful because: Design malicious-input tests rather than assuming a prompt alone enforces permissions.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=dq5jD_qE1Cg
- [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
  - Explains: Graph state, nodes, workflows and agent applications.
  - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/

#### Free written resources

1. [MCP: architecture](https://modelcontextprotocol.io/docs/learn/architecture) — Free; no registration required. No paid materials required.
2. [MCP: security best practices](https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices) — Free; no registration required. No paid materials required.

#### Lab: MCP tool schemas, transport lifecycle and permission checks

Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Service incident investigation board

Connect incident symptoms to related logs and suggest a safe diagnostic next step.

**Data:** Generate 300 sanitized log events with request IDs and five seeded incident scenarios. Label or derive the target: the incident category/severity from a log window. Start with error counts and a keyword-to-runbook mapping.

**Output:** An incident timeline with linked evidence and runbook actions.

**Effort:** 9h · Beginner → intermediate

- **MCP tool schemas, transport lifecycle and permission checks:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP tool schemas, transport lifecycle and permission checks, explicitly apply Tool discovery and schemas, Transport lifecycle, Resources, prompts and tools.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP tool schemas, transport lifecycle and permission checks: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Replay all five incidents; distinguish evidence from hypotheses and never execute destructive remediation automatically.
- [ ] MCP tool schemas, transport lifecycle and permission checks: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket triage desk

Route incoming support tickets to the right category and show the evidence behind each decision.

**Data:** Generate 120 labeled tickets about login, billing and account setup with fixed seed 42. Label or derive the target: ticket category: login, billing or account setup. Start with a majority-class predictor and keyword rules.

**Output:** A review queue with categories, confidence, evidence and correction controls.

**Effort:** 9h · Beginner → intermediate

- **MCP tool schemas, transport lifecycle and permission checks:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP tool schemas, transport lifecycle and permission checks, explicitly apply Tool discovery and schemas, Transport lifecycle, Resources, prompts and tools.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP tool schemas, transport lifecycle and permission checks: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Evaluate 24 held-out tickets and report per-category errors; ambiguous tickets must go to human review.
- [ ] MCP tool schemas, transport lifecycle and permission checks: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Research library navigator

Help a learner find relevant passages in a small technical reading collection.

**Data:** Use ten of your own Markdown notes with titles, source URLs and section headings. Label or derive the target: whether a query/passage pair is relevant. Start with keyword overlap and a TF-IDF retriever.

**Output:** A searchable library with grounded answers and source references.

**Effort:** 10h · Beginner → intermediate

- **MCP tool schemas, transport lifecycle and permission checks:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP tool schemas, transport lifecycle and permission checks, explicitly apply Tool discovery and schemas, Transport lifecycle, Resources, prompts and tools.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP tool schemas, transport lifecycle and permission checks: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test twenty queries including exact names, paraphrases and five unsupported questions; no fabricated citations.
- [ ] MCP tool schemas, transport lifecycle and permission checks: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Inventory exception monitor

Find unusual stock movements and explain which records need investigation.

**Data:** Generate 200 inventory movements with dates, product IDs, quantities and injected anomalies. Label or derive the target: whether a stock movement is an injected anomaly. Start with explicit quantity limits and rolling statistics.

**Output:** An exception list with explanations and reproducible source records.

**Effort:** 11h · Beginner → intermediate

- **MCP tool schemas, transport lifecycle and permission checks:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP tool schemas, transport lifecycle and permission checks, explicitly apply Tool discovery and schemas, Transport lifecycle, Resources, prompts and tools.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP tool schemas, transport lifecycle and permission checks: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Keep future records out of training; measure anomaly recall and false alerts on a held-out time window.
- [ ] MCP tool schemas, transport lifecycle and permission checks: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Product review quality explorer

Summarize themes and surface potentially misleading or contradictory review records.

**Data:** Write or generate 100 fictional product reviews with ratings, topics and deliberately inconsistent examples. Label or derive the target: the review topic and rating-consistency flag. Start with topic keywords and explicit rating rules.

**Output:** A theme browser and an evidence-linked quality report.

**Effort:** 9h · Beginner → intermediate

- **MCP tool schemas, transport lifecycle and permission checks:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP tool schemas, transport lifecycle and permission checks, explicitly apply Tool discovery and schemas, Transport lifecycle, Resources, prompts and tools.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP tool schemas, transport lifecycle and permission checks: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test contradictory reviews, missing ratings and duplicate records; report limitations and avoid labeling real people as fraudulent.
- [ ] MCP tool schemas, transport lifecycle and permission checks: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Learning gap coach

Turn a learner’s quiz results into a concrete next exercise with an explanation.

**Data:** Create forty fictional learners, concept-level quiz scores and fifteen prerequisite relationships. Label or derive the target: the next weak concept requiring practice. Start with the lowest-score eligible prerequisite-aware concept.

**Output:** A next-step study planner with explainable recommendations.

**Effort:** 10h · Beginner → intermediate

- **MCP tool schemas, transport lifecycle and permission checks:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP tool schemas, transport lifecycle and permission checks, explicitly apply Tool discovery and schemas, Transport lifecycle, Resources, prompts and tools.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP tool schemas, transport lifecycle and permission checks: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Test a beginner, an advanced learner and conflicting prerequisites; recommendations must cite an actual weak concept.
- [ ] MCP tool schemas, transport lifecycle and permission checks: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Document intake and validation pipeline

Convert incoming documents into validated records and flag what cannot be trusted.

**Data:** Create thirty local JSON/Markdown documents with schema variations, malformed values and duplicates. Label or derive the target: validity of a document record. Start with a deterministic schema validator; keep it authoritative.

**Output:** A reproducible ingestion pipeline and a rejection report.

**Effort:** 11h · Beginner → intermediate

- **MCP tool schemas, transport lifecycle and permission checks:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP tool schemas, transport lifecycle and permission checks, explicitly apply Tool discovery and schemas, Transport lifecycle, Resources, prompts and tools.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP tool schemas, transport lifecycle and permission checks: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Prove idempotent re-ingestion, preserve raw files and identify every deliberately malformed record.
- [ ] MCP tool schemas, transport lifecycle and permission checks: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Catalog search and ranking workbench

Compare ranking approaches and explain which item best matches a query.

**Data:** Generate eighty fictional catalog items with descriptions, categories and twenty relevance-labeled queries. Label or derive the target: query/item relevance. Start with keyword search and a simple ranker.

**Output:** A side-by-side ranking interface with measurable relevance.

**Effort:** 10h · Beginner → intermediate

- **MCP tool schemas, transport lifecycle and permission checks:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP tool schemas, transport lifecycle and permission checks, explicitly apply Tool discovery and schemas, Transport lifecycle, Resources, prompts and tools.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP tool schemas, transport lifecycle and permission checks: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Compare a simple baseline with the selected method using recall@5 and reciprocal rank on held-out queries.
- [ ] MCP tool schemas, transport lifecycle and permission checks: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workload forecast and planning desk

Estimate upcoming task volume and make uncertainty visible to planners.

**Data:** Generate 180 days of task counts with weekly seasonality and one distribution change. Label or derive the target: next-day task count. Start with the count on the same weekday in the previous week.

**Output:** A forecast report with prediction intervals and a planning recommendation.

**Effort:** 11h · Beginner → intermediate

- **MCP tool schemas, transport lifecycle and permission checks:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP tool schemas, transport lifecycle and permission checks, explicitly apply Tool discovery and schemas, Transport lifecycle, Resources, prompts and tools.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP tool schemas, transport lifecycle and permission checks: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Use chronological validation, compare with a last-week baseline and report error before/after the distribution shift.
- [ ] MCP tool schemas, transport lifecycle and permission checks: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Dataset and model audit studio

Audit data quality and model behavior so a teammate can reproduce the findings.

**Data:** Use scikit-learn built-in digits or a generated 200-row labeled dataset; keep downloads optional. Label or derive the target: the digit class or generated dataset label. Start with a dummy predictor and a simple fitted estimator.

**Output:** A reproducible audit report with slices, evidence and a model card.

**Effort:** 9h · Beginner → intermediate

- **MCP tool schemas, transport lifecycle and permission checks:** Orchestrate retrieval, analysis and review with bounded tools and checkpointed state.  For MCP tool schemas, transport lifecycle and permission checks, explicitly apply Tool discovery and schemas, Transport lifecycle, Resources, prompts and tools.
  - Deliverable: A bounded workflow, local MCP endpoint and recovery evidence
  - Check: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.

**Milestones**

- [ ] Define the problem, schema and baseline
- [ ] MCP tool schemas, transport lifecycle and permission checks: A bounded workflow, local MCP endpoint and recovery evidence
- [ ] Integrate the components and run acceptance checks
- [ ] Document results and demonstrate to a teammate

**Acceptance**

- [ ] Include schema failures, class imbalance, one failure slice and a clean-run reproduction; state educational-use limitations.
- [ ] MCP tool schemas, transport lifecycle and permission checks: Expose a read-only MCP tool; test tool failure, malicious input and a loop limit. Adapt the lesson lab: Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

