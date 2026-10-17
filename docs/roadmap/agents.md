# Agents and MCP

Build bounded tool workflows before increasing autonomy.

## Main route · Step 10 of 13

**Goal:** Build bounded tool workflows with state, recovery and human approval.

**Stage checkpoint:** Implement a tool workflow with an MCP connection, approval for sensitive actions and recovery tests.

Use bounded tool workflows and versioned MCP contracts with explicit permissions.

Follow the modules and lessons below at your pace. Finish each exercise, save your evidence and self-assessment, then continue. Completed and Already known count as completed; Skipped is reported separately. You can move ahead at any time.

[Full pipeline](../PIPELINE.md) · [Next step: Coding agents](coding-agents.md)

## Orchestration

<a id="agents-loops"></a>

### Workflows, agent loops, planning and state

Distinguish fixed control flow from model-directed decisions and bound execution.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

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

### Bounded research workflow

A learner needs an assistant that can search and stop predictably.

**Data:** Use ten local notes and recorded planning outputs. Use a fixed seed and keep evaluation cases separate.

**Output:** A stateful search, summarize and review loop.

**Effort:** 16h · Intermediate

- **Workflows, agent loops, planning and state:** Implement Workflows, agent loops, planning and state in Bounded research workflow. Adapt this focused lab to the project data: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.  Required concepts: Workflows versus agents, Planning and loops, State and memory.
  - Deliverable: Workflows, agent loops, planning and state: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A stateful search, summarize and review loop. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Workflows, agent loops, planning and state: Workflows, agent loops, planning and state: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Stop at the step budget and cite only retrieved sources.
- [ ] Workflows, agent loops, planning and state: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Independent review coordinator

A team needs independent checks before combining conclusions.

**Data:** Use three deterministic reviewers for schema, evidence and policy. Use a fixed seed and keep evaluation cases separate.

**Output:** A coordinator with separate review results and conflict handling.

**Effort:** 16h · Intermediate

- **Workflows, agent loops, planning and state:** Implement Workflows, agent loops, planning and state in Independent review coordinator. Adapt this focused lab to the project data: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.  Required concepts: Workflows versus agents, Planning and loops, State and memory.
  - Deliverable: Workflows, agent loops, planning and state: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A coordinator with separate review results and conflict handling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Workflows, agent loops, planning and state: Workflows, agent loops, planning and state: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep dissent visible and enforce a timeout per reviewer.
- [ ] Workflows, agent loops, planning and state: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workflow versus agent experiment

A product builder needs evidence that autonomy helps a task.

**Data:** Use 20 document-routing cases and fixed decision fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A deterministic workflow versus bounded-planner benchmark.

**Effort:** 16h · Intermediate

- **Workflows, agent loops, planning and state:** Implement Workflows, agent loops, planning and state in Workflow versus agent experiment. Adapt this focused lab to the project data: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.  Required concepts: Workflows versus agents, Planning and loops, State and memory.
  - Deliverable: Workflows, agent loops, planning and state: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A deterministic workflow versus bounded-planner benchmark. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Workflows, agent loops, planning and state: Workflows, agent loops, planning and state: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare task success, tool count and failure behavior under identical cases.
- [ ] Workflows, agent loops, planning and state: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Human review state machine

A reviewer needs risky actions paused until a decision is recorded.

**Data:** Use fictional content-publication requests and reviewer decisions. Use a fixed seed and keep evaluation cases separate.

**Output:** A draft, review, approved and rejected workflow.

**Effort:** 16h · Intermediate

- **Workflows, agent loops, planning and state:** Extend the project with Workflows, agent loops, planning and state in Human review state machine. Adapt this focused lab to the project data: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.  Required concepts: Workflows versus agents, Planning and loops, State and memory.
  - Deliverable: Workflows, agent loops, planning and state: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A draft, review, approved and rejected workflow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Workflows, agent loops, planning and state: Workflows, agent loops, planning and state: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject invalid transitions and stale approvals after draft changes.
- [ ] Workflows, agent loops, planning and state: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Agent failure replay studio

A maintainer needs reproducible debugging of tool errors.

**Data:** Record 12 tool traces with timeouts, malformed outputs and retryable errors. Use a fixed seed and keep evaluation cases separate.

**Output:** A deterministic replay and failure classification tool.

**Effort:** 16h · Intermediate

- **Workflows, agent loops, planning and state:** Extend the project with Workflows, agent loops, planning and state in Agent failure replay studio. Adapt this focused lab to the project data: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.  Required concepts: Workflows versus agents, Planning and loops, State and memory.
  - Deliverable: Workflows, agent loops, planning and state: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A deterministic replay and failure classification tool. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Workflows, agent loops, planning and state: Workflows, agent loops, planning and state: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Replay without external side effects and cap retries.
- [ ] Workflows, agent loops, planning and state: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### MCP client capability explorer

A learner needs to inspect and call server tools safely.

**Data:** Use a local deterministic MCP test server. Use a fixed seed and keep evaluation cases separate.

**Output:** A capability browser and bounded tool caller.

**Effort:** 16h · Intermediate

- **Workflows, agent loops, planning and state:** Extend the project with Workflows, agent loops, planning and state in MCP client capability explorer. Adapt this focused lab to the project data: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.  Required concepts: Workflows versus agents, Planning and loops, State and memory.
  - Deliverable: Workflows, agent loops, planning and state: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A capability browser and bounded tool caller. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Workflows, agent loops, planning and state: Workflows, agent loops, planning and state: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Handle server disconnects and unsupported capabilities explicitly.
- [ ] Workflows, agent loops, planning and state: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Read-only notes MCP server

A learner needs a small MCP server with useful contracts.

**Data:** Use ten local text notes with stable IDs. Use a fixed seed and keep evaluation cases separate.

**Output:** A search/read server and an example client transcript.

**Effort:** 16h · Intermediate

- **Workflows, agent loops, planning and state:** Extend the project with Workflows, agent loops, planning and state in Read-only notes MCP server. Adapt this focused lab to the project data: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.  Required concepts: Workflows versus agents, Planning and loops, State and memory.
  - Deliverable: Workflows, agent loops, planning and state: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A search/read server and an example client transcript. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Workflows, agent loops, planning and state: Workflows, agent loops, planning and state: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Validate arguments, reject path traversal and test unknown tool errors.
- [ ] Workflows, agent loops, planning and state: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Agent memory provenance ledger

A learner needs to distinguish trusted facts from conversation summaries.

**Data:** Create 30 events with sources, timestamps and corrections. Use a fixed seed and keep evaluation cases separate.

**Output:** A scoped memory store with expiration and correction history.

**Effort:** 16h · Intermediate

- **Workflows, agent loops, planning and state:** Extend the project with Workflows, agent loops, planning and state in Agent memory provenance ledger. Adapt this focused lab to the project data: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.  Required concepts: Workflows versus agents, Planning and loops, State and memory.
  - Deliverable: Workflows, agent loops, planning and state: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A scoped memory store with expiration and correction history. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Workflows, agent loops, planning and state: Workflows, agent loops, planning and state: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Expired or cross-user entries cannot be retrieved.
- [ ] Workflows, agent loops, planning and state: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Checkpoint recovery runner

An operator needs to resume failed multi-step jobs safely.

**Data:** Create five deterministic tasks and inject failures after checkpoints. Use a fixed seed and keep evaluation cases separate.

**Output:** A durable local state machine with replay.

**Effort:** 16h · Intermediate

- **Workflows, agent loops, planning and state:** Extend the project with Workflows, agent loops, planning and state in Checkpoint recovery runner. Adapt this focused lab to the project data: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.  Required concepts: Workflows versus agents, Planning and loops, State and memory.
  - Deliverable: Workflows, agent loops, planning and state: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A durable local state machine with replay. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Workflows, agent loops, planning and state: Workflows, agent loops, planning and state: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Resume without duplicating completed side effects.
- [ ] Workflows, agent loops, planning and state: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Tool permission gateway

A developer needs a clear boundary between proposals and execution.

**Data:** Create read, write and delete tool fixtures on a temporary folder. Use a fixed seed and keep evaluation cases separate.

**Output:** A policy gate with dry-run and approval states.

**Effort:** 16h · Intermediate

- **Workflows, agent loops, planning and state:** Extend the project with Workflows, agent loops, planning and state in Tool permission gateway. Adapt this focused lab to the project data: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.  Required concepts: Workflows versus agents, Planning and loops, State and memory.
  - Deliverable: Workflows, agent loops, planning and state: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A policy gate with dry-run and approval states. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Workflows, agent loops, planning and state: Workflows, agent loops, planning and state: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Denied calls produce no side effects; approval is bound to exact arguments.
- [ ] Workflows, agent loops, planning and state: Build a deterministic fixture-driven tool loop with maximum steps, typed state and a resume checkpoint; demonstrate successful completion and a loop-limit failure.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="agents-tools"></a>

### Tools, APIs, permissions and sandboxing

Treat every tool argument as untrusted input and limit what an agent may change.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

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

### Agent memory provenance ledger

A learner needs to distinguish trusted facts from conversation summaries.

**Data:** Create 30 events with sources, timestamps and corrections. Use a fixed seed and keep evaluation cases separate.

**Output:** A scoped memory store with expiration and correction history.

**Effort:** 16h · Intermediate

- **Tools, APIs, permissions and sandboxing:** Implement Tools, APIs, permissions and sandboxing in Agent memory provenance ledger. Adapt this focused lab to the project data: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.  Required concepts: Tool schemas, Permissions and approval, Sandboxing.
  - Deliverable: Tools, APIs, permissions and sandboxing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A scoped memory store with expiration and correction history. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tools, APIs, permissions and sandboxing: Tools, APIs, permissions and sandboxing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Expired or cross-user entries cannot be retrieved.
- [ ] Tools, APIs, permissions and sandboxing: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Tool permission gateway

A developer needs a clear boundary between proposals and execution.

**Data:** Create read, write and delete tool fixtures on a temporary folder. Use a fixed seed and keep evaluation cases separate.

**Output:** A policy gate with dry-run and approval states.

**Effort:** 16h · Intermediate

- **Tools, APIs, permissions and sandboxing:** Implement Tools, APIs, permissions and sandboxing in Tool permission gateway. Adapt this focused lab to the project data: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.  Required concepts: Tool schemas, Permissions and approval, Sandboxing.
  - Deliverable: Tools, APIs, permissions and sandboxing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A policy gate with dry-run and approval states. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tools, APIs, permissions and sandboxing: Tools, APIs, permissions and sandboxing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Denied calls produce no side effects; approval is bound to exact arguments.
- [ ] Tools, APIs, permissions and sandboxing: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Human review state machine

A reviewer needs risky actions paused until a decision is recorded.

**Data:** Use fictional content-publication requests and reviewer decisions. Use a fixed seed and keep evaluation cases separate.

**Output:** A draft, review, approved and rejected workflow.

**Effort:** 16h · Intermediate

- **Tools, APIs, permissions and sandboxing:** Extend the project with Tools, APIs, permissions and sandboxing in Human review state machine. Adapt this focused lab to the project data: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.  Required concepts: Tool schemas, Permissions and approval, Sandboxing.
  - Deliverable: Tools, APIs, permissions and sandboxing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A draft, review, approved and rejected workflow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tools, APIs, permissions and sandboxing: Tools, APIs, permissions and sandboxing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject invalid transitions and stale approvals after draft changes.
- [ ] Tools, APIs, permissions and sandboxing: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Bounded research workflow

A learner needs an assistant that can search and stop predictably.

**Data:** Use ten local notes and recorded planning outputs. Use a fixed seed and keep evaluation cases separate.

**Output:** A stateful search, summarize and review loop.

**Effort:** 16h · Intermediate

- **Tools, APIs, permissions and sandboxing:** Extend the project with Tools, APIs, permissions and sandboxing in Bounded research workflow. Adapt this focused lab to the project data: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.  Required concepts: Tool schemas, Permissions and approval, Sandboxing.
  - Deliverable: Tools, APIs, permissions and sandboxing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A stateful search, summarize and review loop. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tools, APIs, permissions and sandboxing: Tools, APIs, permissions and sandboxing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Stop at the step budget and cite only retrieved sources.
- [ ] Tools, APIs, permissions and sandboxing: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Agent failure replay studio

A maintainer needs reproducible debugging of tool errors.

**Data:** Record 12 tool traces with timeouts, malformed outputs and retryable errors. Use a fixed seed and keep evaluation cases separate.

**Output:** A deterministic replay and failure classification tool.

**Effort:** 16h · Intermediate

- **Tools, APIs, permissions and sandboxing:** Extend the project with Tools, APIs, permissions and sandboxing in Agent failure replay studio. Adapt this focused lab to the project data: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.  Required concepts: Tool schemas, Permissions and approval, Sandboxing.
  - Deliverable: Tools, APIs, permissions and sandboxing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A deterministic replay and failure classification tool. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tools, APIs, permissions and sandboxing: Tools, APIs, permissions and sandboxing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Replay without external side effects and cap retries.
- [ ] Tools, APIs, permissions and sandboxing: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### MCP client capability explorer

A learner needs to inspect and call server tools safely.

**Data:** Use a local deterministic MCP test server. Use a fixed seed and keep evaluation cases separate.

**Output:** A capability browser and bounded tool caller.

**Effort:** 16h · Intermediate

- **Tools, APIs, permissions and sandboxing:** Extend the project with Tools, APIs, permissions and sandboxing in MCP client capability explorer. Adapt this focused lab to the project data: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.  Required concepts: Tool schemas, Permissions and approval, Sandboxing.
  - Deliverable: Tools, APIs, permissions and sandboxing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A capability browser and bounded tool caller. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tools, APIs, permissions and sandboxing: Tools, APIs, permissions and sandboxing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Handle server disconnects and unsupported capabilities explicitly.
- [ ] Tools, APIs, permissions and sandboxing: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Read-only notes MCP server

A learner needs a small MCP server with useful contracts.

**Data:** Use ten local text notes with stable IDs. Use a fixed seed and keep evaluation cases separate.

**Output:** A search/read server and an example client transcript.

**Effort:** 16h · Intermediate

- **Tools, APIs, permissions and sandboxing:** Extend the project with Tools, APIs, permissions and sandboxing in Read-only notes MCP server. Adapt this focused lab to the project data: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.  Required concepts: Tool schemas, Permissions and approval, Sandboxing.
  - Deliverable: Tools, APIs, permissions and sandboxing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A search/read server and an example client transcript. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tools, APIs, permissions and sandboxing: Tools, APIs, permissions and sandboxing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Validate arguments, reject path traversal and test unknown tool errors.
- [ ] Tools, APIs, permissions and sandboxing: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Independent review coordinator

A team needs independent checks before combining conclusions.

**Data:** Use three deterministic reviewers for schema, evidence and policy. Use a fixed seed and keep evaluation cases separate.

**Output:** A coordinator with separate review results and conflict handling.

**Effort:** 16h · Intermediate

- **Tools, APIs, permissions and sandboxing:** Extend the project with Tools, APIs, permissions and sandboxing in Independent review coordinator. Adapt this focused lab to the project data: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.  Required concepts: Tool schemas, Permissions and approval, Sandboxing.
  - Deliverable: Tools, APIs, permissions and sandboxing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A coordinator with separate review results and conflict handling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tools, APIs, permissions and sandboxing: Tools, APIs, permissions and sandboxing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep dissent visible and enforce a timeout per reviewer.
- [ ] Tools, APIs, permissions and sandboxing: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Checkpoint recovery runner

An operator needs to resume failed multi-step jobs safely.

**Data:** Create five deterministic tasks and inject failures after checkpoints. Use a fixed seed and keep evaluation cases separate.

**Output:** A durable local state machine with replay.

**Effort:** 16h · Intermediate

- **Tools, APIs, permissions and sandboxing:** Extend the project with Tools, APIs, permissions and sandboxing in Checkpoint recovery runner. Adapt this focused lab to the project data: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.  Required concepts: Tool schemas, Permissions and approval, Sandboxing.
  - Deliverable: Tools, APIs, permissions and sandboxing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A durable local state machine with replay. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tools, APIs, permissions and sandboxing: Tools, APIs, permissions and sandboxing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Resume without duplicating completed side effects.
- [ ] Tools, APIs, permissions and sandboxing: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workflow versus agent experiment

A product builder needs evidence that autonomy helps a task.

**Data:** Use 20 document-routing cases and fixed decision fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A deterministic workflow versus bounded-planner benchmark.

**Effort:** 16h · Intermediate

- **Tools, APIs, permissions and sandboxing:** Extend the project with Tools, APIs, permissions and sandboxing in Workflow versus agent experiment. Adapt this focused lab to the project data: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.  Required concepts: Tool schemas, Permissions and approval, Sandboxing.
  - Deliverable: Tools, APIs, permissions and sandboxing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A deterministic workflow versus bounded-planner benchmark. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tools, APIs, permissions and sandboxing: Tools, APIs, permissions and sandboxing: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare task success, tool count and failure behavior under identical cases.
- [ ] Tools, APIs, permissions and sandboxing: Implement read-only file search and a draft-change tool in a temporary directory; reject traversal, unauthorized writes and oversized inputs.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="agents-recovery"></a>

### LangGraph, multi-agent coordination and failure recovery

Make coordination explicit and preserve useful work when dependencies fail.

**Priority:** Specialization · **Study:** 2h · **Practice:** 3h

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

### Agent failure replay studio

A maintainer needs reproducible debugging of tool errors.

**Data:** Record 12 tool traces with timeouts, malformed outputs and retryable errors. Use a fixed seed and keep evaluation cases separate.

**Output:** A deterministic replay and failure classification tool.

**Effort:** 16h · Intermediate

- **LangGraph, multi-agent coordination and failure recovery:** Implement LangGraph, multi-agent coordination and failure recovery in Agent failure replay studio. Adapt this focused lab to the project data: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.  Required concepts: Graph orchestration, Multi-agent context, Recovery.
  - Deliverable: LangGraph, multi-agent coordination and failure recovery: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A deterministic replay and failure classification tool. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · LangGraph, multi-agent coordination and failure recovery: LangGraph, multi-agent coordination and failure recovery: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Replay without external side effects and cap retries.
- [ ] LangGraph, multi-agent coordination and failure recovery: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Checkpoint recovery runner

An operator needs to resume failed multi-step jobs safely.

**Data:** Create five deterministic tasks and inject failures after checkpoints. Use a fixed seed and keep evaluation cases separate.

**Output:** A durable local state machine with replay.

**Effort:** 16h · Intermediate

- **LangGraph, multi-agent coordination and failure recovery:** Implement LangGraph, multi-agent coordination and failure recovery in Checkpoint recovery runner. Adapt this focused lab to the project data: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.  Required concepts: Graph orchestration, Multi-agent context, Recovery.
  - Deliverable: LangGraph, multi-agent coordination and failure recovery: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A durable local state machine with replay. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · LangGraph, multi-agent coordination and failure recovery: LangGraph, multi-agent coordination and failure recovery: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Resume without duplicating completed side effects.
- [ ] LangGraph, multi-agent coordination and failure recovery: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Human review state machine

A reviewer needs risky actions paused until a decision is recorded.

**Data:** Use fictional content-publication requests and reviewer decisions. Use a fixed seed and keep evaluation cases separate.

**Output:** A draft, review, approved and rejected workflow.

**Effort:** 16h · Intermediate

- **LangGraph, multi-agent coordination and failure recovery:** Extend the project with LangGraph, multi-agent coordination and failure recovery in Human review state machine. Adapt this focused lab to the project data: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.  Required concepts: Graph orchestration, Multi-agent context, Recovery.
  - Deliverable: LangGraph, multi-agent coordination and failure recovery: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A draft, review, approved and rejected workflow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · LangGraph, multi-agent coordination and failure recovery: LangGraph, multi-agent coordination and failure recovery: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject invalid transitions and stale approvals after draft changes.
- [ ] LangGraph, multi-agent coordination and failure recovery: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Bounded research workflow

A learner needs an assistant that can search and stop predictably.

**Data:** Use ten local notes and recorded planning outputs. Use a fixed seed and keep evaluation cases separate.

**Output:** A stateful search, summarize and review loop.

**Effort:** 16h · Intermediate

- **LangGraph, multi-agent coordination and failure recovery:** Extend the project with LangGraph, multi-agent coordination and failure recovery in Bounded research workflow. Adapt this focused lab to the project data: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.  Required concepts: Graph orchestration, Multi-agent context, Recovery.
  - Deliverable: LangGraph, multi-agent coordination and failure recovery: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A stateful search, summarize and review loop. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · LangGraph, multi-agent coordination and failure recovery: LangGraph, multi-agent coordination and failure recovery: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Stop at the step budget and cite only retrieved sources.
- [ ] LangGraph, multi-agent coordination and failure recovery: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### MCP client capability explorer

A learner needs to inspect and call server tools safely.

**Data:** Use a local deterministic MCP test server. Use a fixed seed and keep evaluation cases separate.

**Output:** A capability browser and bounded tool caller.

**Effort:** 16h · Intermediate

- **LangGraph, multi-agent coordination and failure recovery:** Extend the project with LangGraph, multi-agent coordination and failure recovery in MCP client capability explorer. Adapt this focused lab to the project data: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.  Required concepts: Graph orchestration, Multi-agent context, Recovery.
  - Deliverable: LangGraph, multi-agent coordination and failure recovery: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A capability browser and bounded tool caller. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · LangGraph, multi-agent coordination and failure recovery: LangGraph, multi-agent coordination and failure recovery: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Handle server disconnects and unsupported capabilities explicitly.
- [ ] LangGraph, multi-agent coordination and failure recovery: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Read-only notes MCP server

A learner needs a small MCP server with useful contracts.

**Data:** Use ten local text notes with stable IDs. Use a fixed seed and keep evaluation cases separate.

**Output:** A search/read server and an example client transcript.

**Effort:** 16h · Intermediate

- **LangGraph, multi-agent coordination and failure recovery:** Extend the project with LangGraph, multi-agent coordination and failure recovery in Read-only notes MCP server. Adapt this focused lab to the project data: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.  Required concepts: Graph orchestration, Multi-agent context, Recovery.
  - Deliverable: LangGraph, multi-agent coordination and failure recovery: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A search/read server and an example client transcript. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · LangGraph, multi-agent coordination and failure recovery: LangGraph, multi-agent coordination and failure recovery: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Validate arguments, reject path traversal and test unknown tool errors.
- [ ] LangGraph, multi-agent coordination and failure recovery: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Agent memory provenance ledger

A learner needs to distinguish trusted facts from conversation summaries.

**Data:** Create 30 events with sources, timestamps and corrections. Use a fixed seed and keep evaluation cases separate.

**Output:** A scoped memory store with expiration and correction history.

**Effort:** 16h · Intermediate

- **LangGraph, multi-agent coordination and failure recovery:** Extend the project with LangGraph, multi-agent coordination and failure recovery in Agent memory provenance ledger. Adapt this focused lab to the project data: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.  Required concepts: Graph orchestration, Multi-agent context, Recovery.
  - Deliverable: LangGraph, multi-agent coordination and failure recovery: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A scoped memory store with expiration and correction history. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · LangGraph, multi-agent coordination and failure recovery: LangGraph, multi-agent coordination and failure recovery: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Expired or cross-user entries cannot be retrieved.
- [ ] LangGraph, multi-agent coordination and failure recovery: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Independent review coordinator

A team needs independent checks before combining conclusions.

**Data:** Use three deterministic reviewers for schema, evidence and policy. Use a fixed seed and keep evaluation cases separate.

**Output:** A coordinator with separate review results and conflict handling.

**Effort:** 16h · Intermediate

- **LangGraph, multi-agent coordination and failure recovery:** Extend the project with LangGraph, multi-agent coordination and failure recovery in Independent review coordinator. Adapt this focused lab to the project data: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.  Required concepts: Graph orchestration, Multi-agent context, Recovery.
  - Deliverable: LangGraph, multi-agent coordination and failure recovery: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A coordinator with separate review results and conflict handling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · LangGraph, multi-agent coordination and failure recovery: LangGraph, multi-agent coordination and failure recovery: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep dissent visible and enforce a timeout per reviewer.
- [ ] LangGraph, multi-agent coordination and failure recovery: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Tool permission gateway

A developer needs a clear boundary between proposals and execution.

**Data:** Create read, write and delete tool fixtures on a temporary folder. Use a fixed seed and keep evaluation cases separate.

**Output:** A policy gate with dry-run and approval states.

**Effort:** 16h · Intermediate

- **LangGraph, multi-agent coordination and failure recovery:** Extend the project with LangGraph, multi-agent coordination and failure recovery in Tool permission gateway. Adapt this focused lab to the project data: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.  Required concepts: Graph orchestration, Multi-agent context, Recovery.
  - Deliverable: LangGraph, multi-agent coordination and failure recovery: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A policy gate with dry-run and approval states. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · LangGraph, multi-agent coordination and failure recovery: LangGraph, multi-agent coordination and failure recovery: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Denied calls produce no side effects; approval is bound to exact arguments.
- [ ] LangGraph, multi-agent coordination and failure recovery: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workflow versus agent experiment

A product builder needs evidence that autonomy helps a task.

**Data:** Use 20 document-routing cases and fixed decision fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A deterministic workflow versus bounded-planner benchmark.

**Effort:** 16h · Intermediate

- **LangGraph, multi-agent coordination and failure recovery:** Extend the project with LangGraph, multi-agent coordination and failure recovery in Workflow versus agent experiment. Adapt this focused lab to the project data: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.  Required concepts: Graph orchestration, Multi-agent context, Recovery.
  - Deliverable: LangGraph, multi-agent coordination and failure recovery: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A deterministic workflow versus bounded-planner benchmark. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · LangGraph, multi-agent coordination and failure recovery: LangGraph, multi-agent coordination and failure recovery: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare task success, tool count and failure behavior under identical cases.
- [ ] LangGraph, multi-agent coordination and failure recovery: Implement a two-role research/verifier workflow with deterministic fixtures, checkpointing and one injected failure; compare it with a simpler single-role baseline.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Model Context Protocol

<a id="agents-mcp"></a>

### MCP host, client, server and transports

Understand the protocol boundary independently of any coding assistant vendor.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

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

### Read-only notes MCP server

A learner needs a small MCP server with useful contracts.

**Data:** Use ten local text notes with stable IDs. Use a fixed seed and keep evaluation cases separate.

**Output:** A search/read server and an example client transcript.

**Effort:** 16h · Intermediate

- **MCP host, client, server and transports:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to Read-only notes MCP server: A search/read server and an example client transcript. Focus: Roles, Capabilities, Transports.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A search/read server and an example client transcript. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP host, client, server and transports: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Validate arguments, reject path traversal and test unknown tool errors.
- [ ] MCP host, client, server and transports: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Human review state machine

A reviewer needs risky actions paused until a decision is recorded.

**Data:** Use fictional content-publication requests and reviewer decisions. Use a fixed seed and keep evaluation cases separate.

**Output:** A draft, review, approved and rejected workflow.

**Effort:** 16h · Intermediate

- **MCP host, client, server and transports:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to Human review state machine: A draft, review, approved and rejected workflow. Focus: Roles, Capabilities, Transports.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A draft, review, approved and rejected workflow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP host, client, server and transports: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject invalid transitions and stale approvals after draft changes.
- [ ] MCP host, client, server and transports: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Bounded research workflow

A learner needs an assistant that can search and stop predictably.

**Data:** Use ten local notes and recorded planning outputs. Use a fixed seed and keep evaluation cases separate.

**Output:** A stateful search, summarize and review loop.

**Effort:** 16h · Intermediate

- **MCP host, client, server and transports:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to Bounded research workflow: A stateful search, summarize and review loop. Focus: Roles, Capabilities, Transports.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A stateful search, summarize and review loop. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP host, client, server and transports: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Stop at the step budget and cite only retrieved sources.
- [ ] MCP host, client, server and transports: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Agent failure replay studio

A maintainer needs reproducible debugging of tool errors.

**Data:** Record 12 tool traces with timeouts, malformed outputs and retryable errors. Use a fixed seed and keep evaluation cases separate.

**Output:** A deterministic replay and failure classification tool.

**Effort:** 16h · Intermediate

- **MCP host, client, server and transports:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to Agent failure replay studio: A deterministic replay and failure classification tool. Focus: Roles, Capabilities, Transports.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A deterministic replay and failure classification tool. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP host, client, server and transports: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Replay without external side effects and cap retries.
- [ ] MCP host, client, server and transports: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### MCP client capability explorer

A learner needs to inspect and call server tools safely.

**Data:** Use a local deterministic MCP test server. Use a fixed seed and keep evaluation cases separate.

**Output:** A capability browser and bounded tool caller.

**Effort:** 16h · Intermediate

- **MCP host, client, server and transports:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to MCP client capability explorer: A capability browser and bounded tool caller. Focus: Roles, Capabilities, Transports.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A capability browser and bounded tool caller. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP host, client, server and transports: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Handle server disconnects and unsupported capabilities explicitly.
- [ ] MCP host, client, server and transports: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Agent memory provenance ledger

A learner needs to distinguish trusted facts from conversation summaries.

**Data:** Create 30 events with sources, timestamps and corrections. Use a fixed seed and keep evaluation cases separate.

**Output:** A scoped memory store with expiration and correction history.

**Effort:** 16h · Intermediate

- **MCP host, client, server and transports:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to Agent memory provenance ledger: A scoped memory store with expiration and correction history. Focus: Roles, Capabilities, Transports.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A scoped memory store with expiration and correction history. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP host, client, server and transports: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Expired or cross-user entries cannot be retrieved.
- [ ] MCP host, client, server and transports: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Independent review coordinator

A team needs independent checks before combining conclusions.

**Data:** Use three deterministic reviewers for schema, evidence and policy. Use a fixed seed and keep evaluation cases separate.

**Output:** A coordinator with separate review results and conflict handling.

**Effort:** 16h · Intermediate

- **MCP host, client, server and transports:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to Independent review coordinator: A coordinator with separate review results and conflict handling. Focus: Roles, Capabilities, Transports.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A coordinator with separate review results and conflict handling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP host, client, server and transports: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep dissent visible and enforce a timeout per reviewer.
- [ ] MCP host, client, server and transports: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Checkpoint recovery runner

An operator needs to resume failed multi-step jobs safely.

**Data:** Create five deterministic tasks and inject failures after checkpoints. Use a fixed seed and keep evaluation cases separate.

**Output:** A durable local state machine with replay.

**Effort:** 16h · Intermediate

- **MCP host, client, server and transports:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to Checkpoint recovery runner: A durable local state machine with replay. Focus: Roles, Capabilities, Transports.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A durable local state machine with replay. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP host, client, server and transports: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Resume without duplicating completed side effects.
- [ ] MCP host, client, server and transports: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Tool permission gateway

A developer needs a clear boundary between proposals and execution.

**Data:** Create read, write and delete tool fixtures on a temporary folder. Use a fixed seed and keep evaluation cases separate.

**Output:** A policy gate with dry-run and approval states.

**Effort:** 16h · Intermediate

- **MCP host, client, server and transports:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to Tool permission gateway: A policy gate with dry-run and approval states. Focus: Roles, Capabilities, Transports.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A policy gate with dry-run and approval states. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP host, client, server and transports: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Denied calls produce no side effects; approval is bound to exact arguments.
- [ ] MCP host, client, server and transports: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workflow versus agent experiment

A product builder needs evidence that autonomy helps a task.

**Data:** Use 20 document-routing cases and fixed decision fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A deterministic workflow versus bounded-planner benchmark.

**Effort:** 16h · Intermediate

- **MCP host, client, server and transports:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to Workflow versus agent experiment: A deterministic workflow versus bounded-planner benchmark. Focus: Roles, Capabilities, Transports.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A deterministic workflow versus bounded-planner benchmark. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP host, client, server and transports: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare task success, tool count and failure behavior under identical cases.
- [ ] MCP host, client, server and transports: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local MCP server with one read-only tool and resource, connect a test client and document permissions and transport; remote access is optional.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="agents-mcp-client"></a>

### MCP client connections, context security and testing

Prevent remote tool descriptions or results from overriding application policy.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

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

### MCP client capability explorer

A learner needs to inspect and call server tools safely.

**Data:** Use a local deterministic MCP test server. Use a fixed seed and keep evaluation cases separate.

**Output:** A capability browser and bounded tool caller.

**Effort:** 16h · Intermediate

- **MCP client connections, context security and testing:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to MCP client capability explorer: A capability browser and bounded tool caller. Focus: Connections, Context security, Protocol tests.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A capability browser and bounded tool caller. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP client connections, context security and testing: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Handle server disconnects and unsupported capabilities explicitly.
- [ ] MCP client connections, context security and testing: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Human review state machine

A reviewer needs risky actions paused until a decision is recorded.

**Data:** Use fictional content-publication requests and reviewer decisions. Use a fixed seed and keep evaluation cases separate.

**Output:** A draft, review, approved and rejected workflow.

**Effort:** 16h · Intermediate

- **MCP client connections, context security and testing:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to Human review state machine: A draft, review, approved and rejected workflow. Focus: Connections, Context security, Protocol tests.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A draft, review, approved and rejected workflow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP client connections, context security and testing: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject invalid transitions and stale approvals after draft changes.
- [ ] MCP client connections, context security and testing: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Bounded research workflow

A learner needs an assistant that can search and stop predictably.

**Data:** Use ten local notes and recorded planning outputs. Use a fixed seed and keep evaluation cases separate.

**Output:** A stateful search, summarize and review loop.

**Effort:** 16h · Intermediate

- **MCP client connections, context security and testing:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to Bounded research workflow: A stateful search, summarize and review loop. Focus: Connections, Context security, Protocol tests.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A stateful search, summarize and review loop. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP client connections, context security and testing: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Stop at the step budget and cite only retrieved sources.
- [ ] MCP client connections, context security and testing: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Agent failure replay studio

A maintainer needs reproducible debugging of tool errors.

**Data:** Record 12 tool traces with timeouts, malformed outputs and retryable errors. Use a fixed seed and keep evaluation cases separate.

**Output:** A deterministic replay and failure classification tool.

**Effort:** 16h · Intermediate

- **MCP client connections, context security and testing:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to Agent failure replay studio: A deterministic replay and failure classification tool. Focus: Connections, Context security, Protocol tests.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A deterministic replay and failure classification tool. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP client connections, context security and testing: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Replay without external side effects and cap retries.
- [ ] MCP client connections, context security and testing: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Read-only notes MCP server

A learner needs a small MCP server with useful contracts.

**Data:** Use ten local text notes with stable IDs. Use a fixed seed and keep evaluation cases separate.

**Output:** A search/read server and an example client transcript.

**Effort:** 16h · Intermediate

- **MCP client connections, context security and testing:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to Read-only notes MCP server: A search/read server and an example client transcript. Focus: Connections, Context security, Protocol tests.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A search/read server and an example client transcript. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP client connections, context security and testing: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Validate arguments, reject path traversal and test unknown tool errors.
- [ ] MCP client connections, context security and testing: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Agent memory provenance ledger

A learner needs to distinguish trusted facts from conversation summaries.

**Data:** Create 30 events with sources, timestamps and corrections. Use a fixed seed and keep evaluation cases separate.

**Output:** A scoped memory store with expiration and correction history.

**Effort:** 16h · Intermediate

- **MCP client connections, context security and testing:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to Agent memory provenance ledger: A scoped memory store with expiration and correction history. Focus: Connections, Context security, Protocol tests.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A scoped memory store with expiration and correction history. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP client connections, context security and testing: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Expired or cross-user entries cannot be retrieved.
- [ ] MCP client connections, context security and testing: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Independent review coordinator

A team needs independent checks before combining conclusions.

**Data:** Use three deterministic reviewers for schema, evidence and policy. Use a fixed seed and keep evaluation cases separate.

**Output:** A coordinator with separate review results and conflict handling.

**Effort:** 16h · Intermediate

- **MCP client connections, context security and testing:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to Independent review coordinator: A coordinator with separate review results and conflict handling. Focus: Connections, Context security, Protocol tests.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A coordinator with separate review results and conflict handling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP client connections, context security and testing: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep dissent visible and enforce a timeout per reviewer.
- [ ] MCP client connections, context security and testing: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Checkpoint recovery runner

An operator needs to resume failed multi-step jobs safely.

**Data:** Create five deterministic tasks and inject failures after checkpoints. Use a fixed seed and keep evaluation cases separate.

**Output:** A durable local state machine with replay.

**Effort:** 16h · Intermediate

- **MCP client connections, context security and testing:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to Checkpoint recovery runner: A durable local state machine with replay. Focus: Connections, Context security, Protocol tests.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A durable local state machine with replay. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP client connections, context security and testing: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Resume without duplicating completed side effects.
- [ ] MCP client connections, context security and testing: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Tool permission gateway

A developer needs a clear boundary between proposals and execution.

**Data:** Create read, write and delete tool fixtures on a temporary folder. Use a fixed seed and keep evaluation cases separate.

**Output:** A policy gate with dry-run and approval states.

**Effort:** 16h · Intermediate

- **MCP client connections, context security and testing:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to Tool permission gateway: A policy gate with dry-run and approval states. Focus: Connections, Context security, Protocol tests.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A policy gate with dry-run and approval states. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP client connections, context security and testing: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Denied calls produce no side effects; approval is bound to exact arguments.
- [ ] MCP client connections, context security and testing: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workflow versus agent experiment

A product builder needs evidence that autonomy helps a task.

**Data:** Use 20 document-routing cases and fixed decision fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A deterministic workflow versus bounded-planner benchmark.

**Effort:** 16h · Intermediate

- **MCP client connections, context security and testing:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to Workflow versus agent experiment: A deterministic workflow versus bounded-planner benchmark. Focus: Connections, Context security, Protocol tests.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A deterministic workflow versus bounded-planner benchmark. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP client connections, context security and testing: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare task success, tool count and failure behavior under identical cases.
- [ ] MCP client connections, context security and testing: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Connect a local test client to the previous server; inject a malicious tool result, malformed response and disconnect, and verify safe failure behavior.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Stateful workflows and tool boundaries

<a id="agents-state-machines"></a>

### Typed state, checkpoints and bounded execution graphs

Keep multi-step workflows inspectable and resumable without relying on an unconstrained agent conversation.

**Priority:** Essential · **Study:** 3h · **Practice:** 4h

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

### Human review state machine

A reviewer needs risky actions paused until a decision is recorded.

**Data:** Use fictional content-publication requests and reviewer decisions. Use a fixed seed and keep evaluation cases separate.

**Output:** A draft, review, approved and rejected workflow.

**Effort:** 16h · Intermediate

- **Typed state, checkpoints and bounded execution graphs:** Implement Typed state, checkpoints and bounded execution graphs in Human review state machine. Adapt this focused lab to the project data: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.  Required concepts: State schema, Nodes, edges and routing, Reducers and concurrent updates, Checkpoints and replay, Budgets and terminal states.
  - Deliverable: Typed state, checkpoints and bounded execution graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A draft, review, approved and rejected workflow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Typed state, checkpoints and bounded execution graphs: Typed state, checkpoints and bounded execution graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject invalid transitions and stale approvals after draft changes.
- [ ] Typed state, checkpoints and bounded execution graphs: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Checkpoint recovery runner

An operator needs to resume failed multi-step jobs safely.

**Data:** Create five deterministic tasks and inject failures after checkpoints. Use a fixed seed and keep evaluation cases separate.

**Output:** A durable local state machine with replay.

**Effort:** 16h · Intermediate

- **Typed state, checkpoints and bounded execution graphs:** Implement Typed state, checkpoints and bounded execution graphs in Checkpoint recovery runner. Adapt this focused lab to the project data: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.  Required concepts: State schema, Nodes, edges and routing, Reducers and concurrent updates, Checkpoints and replay, Budgets and terminal states.
  - Deliverable: Typed state, checkpoints and bounded execution graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A durable local state machine with replay. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Typed state, checkpoints and bounded execution graphs: Typed state, checkpoints and bounded execution graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Resume without duplicating completed side effects.
- [ ] Typed state, checkpoints and bounded execution graphs: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Bounded research workflow

A learner needs an assistant that can search and stop predictably.

**Data:** Use ten local notes and recorded planning outputs. Use a fixed seed and keep evaluation cases separate.

**Output:** A stateful search, summarize and review loop.

**Effort:** 16h · Intermediate

- **Typed state, checkpoints and bounded execution graphs:** Extend the project with Typed state, checkpoints and bounded execution graphs in Bounded research workflow. Adapt this focused lab to the project data: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.  Required concepts: State schema, Nodes, edges and routing, Reducers and concurrent updates, Checkpoints and replay, Budgets and terminal states.
  - Deliverable: Typed state, checkpoints and bounded execution graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A stateful search, summarize and review loop. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Typed state, checkpoints and bounded execution graphs: Typed state, checkpoints and bounded execution graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Stop at the step budget and cite only retrieved sources.
- [ ] Typed state, checkpoints and bounded execution graphs: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Agent failure replay studio

A maintainer needs reproducible debugging of tool errors.

**Data:** Record 12 tool traces with timeouts, malformed outputs and retryable errors. Use a fixed seed and keep evaluation cases separate.

**Output:** A deterministic replay and failure classification tool.

**Effort:** 16h · Intermediate

- **Typed state, checkpoints and bounded execution graphs:** Extend the project with Typed state, checkpoints and bounded execution graphs in Agent failure replay studio. Adapt this focused lab to the project data: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.  Required concepts: State schema, Nodes, edges and routing, Reducers and concurrent updates, Checkpoints and replay, Budgets and terminal states.
  - Deliverable: Typed state, checkpoints and bounded execution graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A deterministic replay and failure classification tool. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Typed state, checkpoints and bounded execution graphs: Typed state, checkpoints and bounded execution graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Replay without external side effects and cap retries.
- [ ] Typed state, checkpoints and bounded execution graphs: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### MCP client capability explorer

A learner needs to inspect and call server tools safely.

**Data:** Use a local deterministic MCP test server. Use a fixed seed and keep evaluation cases separate.

**Output:** A capability browser and bounded tool caller.

**Effort:** 16h · Intermediate

- **Typed state, checkpoints and bounded execution graphs:** Extend the project with Typed state, checkpoints and bounded execution graphs in MCP client capability explorer. Adapt this focused lab to the project data: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.  Required concepts: State schema, Nodes, edges and routing, Reducers and concurrent updates, Checkpoints and replay, Budgets and terminal states.
  - Deliverable: Typed state, checkpoints and bounded execution graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A capability browser and bounded tool caller. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Typed state, checkpoints and bounded execution graphs: Typed state, checkpoints and bounded execution graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Handle server disconnects and unsupported capabilities explicitly.
- [ ] Typed state, checkpoints and bounded execution graphs: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Read-only notes MCP server

A learner needs a small MCP server with useful contracts.

**Data:** Use ten local text notes with stable IDs. Use a fixed seed and keep evaluation cases separate.

**Output:** A search/read server and an example client transcript.

**Effort:** 16h · Intermediate

- **Typed state, checkpoints and bounded execution graphs:** Extend the project with Typed state, checkpoints and bounded execution graphs in Read-only notes MCP server. Adapt this focused lab to the project data: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.  Required concepts: State schema, Nodes, edges and routing, Reducers and concurrent updates, Checkpoints and replay, Budgets and terminal states.
  - Deliverable: Typed state, checkpoints and bounded execution graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A search/read server and an example client transcript. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Typed state, checkpoints and bounded execution graphs: Typed state, checkpoints and bounded execution graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Validate arguments, reject path traversal and test unknown tool errors.
- [ ] Typed state, checkpoints and bounded execution graphs: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Agent memory provenance ledger

A learner needs to distinguish trusted facts from conversation summaries.

**Data:** Create 30 events with sources, timestamps and corrections. Use a fixed seed and keep evaluation cases separate.

**Output:** A scoped memory store with expiration and correction history.

**Effort:** 16h · Intermediate

- **Typed state, checkpoints and bounded execution graphs:** Extend the project with Typed state, checkpoints and bounded execution graphs in Agent memory provenance ledger. Adapt this focused lab to the project data: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.  Required concepts: State schema, Nodes, edges and routing, Reducers and concurrent updates, Checkpoints and replay, Budgets and terminal states.
  - Deliverable: Typed state, checkpoints and bounded execution graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A scoped memory store with expiration and correction history. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Typed state, checkpoints and bounded execution graphs: Typed state, checkpoints and bounded execution graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Expired or cross-user entries cannot be retrieved.
- [ ] Typed state, checkpoints and bounded execution graphs: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Independent review coordinator

A team needs independent checks before combining conclusions.

**Data:** Use three deterministic reviewers for schema, evidence and policy. Use a fixed seed and keep evaluation cases separate.

**Output:** A coordinator with separate review results and conflict handling.

**Effort:** 16h · Intermediate

- **Typed state, checkpoints and bounded execution graphs:** Extend the project with Typed state, checkpoints and bounded execution graphs in Independent review coordinator. Adapt this focused lab to the project data: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.  Required concepts: State schema, Nodes, edges and routing, Reducers and concurrent updates, Checkpoints and replay, Budgets and terminal states.
  - Deliverable: Typed state, checkpoints and bounded execution graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A coordinator with separate review results and conflict handling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Typed state, checkpoints and bounded execution graphs: Typed state, checkpoints and bounded execution graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep dissent visible and enforce a timeout per reviewer.
- [ ] Typed state, checkpoints and bounded execution graphs: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Tool permission gateway

A developer needs a clear boundary between proposals and execution.

**Data:** Create read, write and delete tool fixtures on a temporary folder. Use a fixed seed and keep evaluation cases separate.

**Output:** A policy gate with dry-run and approval states.

**Effort:** 16h · Intermediate

- **Typed state, checkpoints and bounded execution graphs:** Extend the project with Typed state, checkpoints and bounded execution graphs in Tool permission gateway. Adapt this focused lab to the project data: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.  Required concepts: State schema, Nodes, edges and routing, Reducers and concurrent updates, Checkpoints and replay, Budgets and terminal states.
  - Deliverable: Typed state, checkpoints and bounded execution graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A policy gate with dry-run and approval states. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Typed state, checkpoints and bounded execution graphs: Typed state, checkpoints and bounded execution graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Denied calls produce no side effects; approval is bound to exact arguments.
- [ ] Typed state, checkpoints and bounded execution graphs: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workflow versus agent experiment

A product builder needs evidence that autonomy helps a task.

**Data:** Use 20 document-routing cases and fixed decision fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A deterministic workflow versus bounded-planner benchmark.

**Effort:** 16h · Intermediate

- **Typed state, checkpoints and bounded execution graphs:** Extend the project with Typed state, checkpoints and bounded execution graphs in Workflow versus agent experiment. Adapt this focused lab to the project data: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.  Required concepts: State schema, Nodes, edges and routing, Reducers and concurrent updates, Checkpoints and replay, Budgets and terminal states.
  - Deliverable: Typed state, checkpoints and bounded execution graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A deterministic workflow versus bounded-planner benchmark. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Typed state, checkpoints and bounded execution graphs: Typed state, checkpoints and bounded execution graphs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare task success, tool count and failure behavior under identical cases.
- [ ] Typed state, checkpoints and bounded execution graphs: Implement a deterministic Python workflow graph with a fake planner, evidence lookup and approval state. Save JSON checkpoints, resume after a simulated crash and test reducer merging plus step-budget exhaustion.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="agents-mcp-contracts"></a>

### MCP tool schemas, transport lifecycle and permission checks

Separate protocol discovery from authorisation so a reachable tool does not automatically become an allowed action.

**Priority:** Essential · **Study:** 3h · **Practice:** 4h

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

### Read-only notes MCP server

A learner needs a small MCP server with useful contracts.

**Data:** Use ten local text notes with stable IDs. Use a fixed seed and keep evaluation cases separate.

**Output:** A search/read server and an example client transcript.

**Effort:** 16h · Intermediate

- **MCP tool schemas, transport lifecycle and permission checks:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to Read-only notes MCP server: A search/read server and an example client transcript. Focus: Tool discovery and schemas, Transport lifecycle, Resources, prompts and tools, Authorisation per operation, Approval and audit context.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A search/read server and an example client transcript. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP tool schemas, transport lifecycle and permission checks: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Validate arguments, reject path traversal and test unknown tool errors.
- [ ] MCP tool schemas, transport lifecycle and permission checks: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Human review state machine

A reviewer needs risky actions paused until a decision is recorded.

**Data:** Use fictional content-publication requests and reviewer decisions. Use a fixed seed and keep evaluation cases separate.

**Output:** A draft, review, approved and rejected workflow.

**Effort:** 16h · Intermediate

- **MCP tool schemas, transport lifecycle and permission checks:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to Human review state machine: A draft, review, approved and rejected workflow. Focus: Tool discovery and schemas, Transport lifecycle, Resources, prompts and tools, Authorisation per operation, Approval and audit context.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A draft, review, approved and rejected workflow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP tool schemas, transport lifecycle and permission checks: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject invalid transitions and stale approvals after draft changes.
- [ ] MCP tool schemas, transport lifecycle and permission checks: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Bounded research workflow

A learner needs an assistant that can search and stop predictably.

**Data:** Use ten local notes and recorded planning outputs. Use a fixed seed and keep evaluation cases separate.

**Output:** A stateful search, summarize and review loop.

**Effort:** 16h · Intermediate

- **MCP tool schemas, transport lifecycle and permission checks:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to Bounded research workflow: A stateful search, summarize and review loop. Focus: Tool discovery and schemas, Transport lifecycle, Resources, prompts and tools, Authorisation per operation, Approval and audit context.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A stateful search, summarize and review loop. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP tool schemas, transport lifecycle and permission checks: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Stop at the step budget and cite only retrieved sources.
- [ ] MCP tool schemas, transport lifecycle and permission checks: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Agent failure replay studio

A maintainer needs reproducible debugging of tool errors.

**Data:** Record 12 tool traces with timeouts, malformed outputs and retryable errors. Use a fixed seed and keep evaluation cases separate.

**Output:** A deterministic replay and failure classification tool.

**Effort:** 16h · Intermediate

- **MCP tool schemas, transport lifecycle and permission checks:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to Agent failure replay studio: A deterministic replay and failure classification tool. Focus: Tool discovery and schemas, Transport lifecycle, Resources, prompts and tools, Authorisation per operation, Approval and audit context.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A deterministic replay and failure classification tool. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP tool schemas, transport lifecycle and permission checks: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Replay without external side effects and cap retries.
- [ ] MCP tool schemas, transport lifecycle and permission checks: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### MCP client capability explorer

A learner needs to inspect and call server tools safely.

**Data:** Use a local deterministic MCP test server. Use a fixed seed and keep evaluation cases separate.

**Output:** A capability browser and bounded tool caller.

**Effort:** 16h · Intermediate

- **MCP tool schemas, transport lifecycle and permission checks:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to MCP client capability explorer: A capability browser and bounded tool caller. Focus: Tool discovery and schemas, Transport lifecycle, Resources, prompts and tools, Authorisation per operation, Approval and audit context.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A capability browser and bounded tool caller. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP tool schemas, transport lifecycle and permission checks: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Handle server disconnects and unsupported capabilities explicitly.
- [ ] MCP tool schemas, transport lifecycle and permission checks: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Agent memory provenance ledger

A learner needs to distinguish trusted facts from conversation summaries.

**Data:** Create 30 events with sources, timestamps and corrections. Use a fixed seed and keep evaluation cases separate.

**Output:** A scoped memory store with expiration and correction history.

**Effort:** 16h · Intermediate

- **MCP tool schemas, transport lifecycle and permission checks:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to Agent memory provenance ledger: A scoped memory store with expiration and correction history. Focus: Tool discovery and schemas, Transport lifecycle, Resources, prompts and tools, Authorisation per operation, Approval and audit context.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A scoped memory store with expiration and correction history. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP tool schemas, transport lifecycle and permission checks: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Expired or cross-user entries cannot be retrieved.
- [ ] MCP tool schemas, transport lifecycle and permission checks: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Independent review coordinator

A team needs independent checks before combining conclusions.

**Data:** Use three deterministic reviewers for schema, evidence and policy. Use a fixed seed and keep evaluation cases separate.

**Output:** A coordinator with separate review results and conflict handling.

**Effort:** 16h · Intermediate

- **MCP tool schemas, transport lifecycle and permission checks:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to Independent review coordinator: A coordinator with separate review results and conflict handling. Focus: Tool discovery and schemas, Transport lifecycle, Resources, prompts and tools, Authorisation per operation, Approval and audit context.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A coordinator with separate review results and conflict handling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP tool schemas, transport lifecycle and permission checks: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep dissent visible and enforce a timeout per reviewer.
- [ ] MCP tool schemas, transport lifecycle and permission checks: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Checkpoint recovery runner

An operator needs to resume failed multi-step jobs safely.

**Data:** Create five deterministic tasks and inject failures after checkpoints. Use a fixed seed and keep evaluation cases separate.

**Output:** A durable local state machine with replay.

**Effort:** 16h · Intermediate

- **MCP tool schemas, transport lifecycle and permission checks:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to Checkpoint recovery runner: A durable local state machine with replay. Focus: Tool discovery and schemas, Transport lifecycle, Resources, prompts and tools, Authorisation per operation, Approval and audit context.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A durable local state machine with replay. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP tool schemas, transport lifecycle and permission checks: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Resume without duplicating completed side effects.
- [ ] MCP tool schemas, transport lifecycle and permission checks: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Tool permission gateway

A developer needs a clear boundary between proposals and execution.

**Data:** Create read, write and delete tool fixtures on a temporary folder. Use a fixed seed and keep evaluation cases separate.

**Output:** A policy gate with dry-run and approval states.

**Effort:** 16h · Intermediate

- **MCP tool schemas, transport lifecycle and permission checks:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to Tool permission gateway: A policy gate with dry-run and approval states. Focus: Tool discovery and schemas, Transport lifecycle, Resources, prompts and tools, Authorisation per operation, Approval and audit context.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A policy gate with dry-run and approval states. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP tool schemas, transport lifecycle and permission checks: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Denied calls produce no side effects; approval is bound to exact arguments.
- [ ] MCP tool schemas, transport lifecycle and permission checks: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workflow versus agent experiment

A product builder needs evidence that autonomy helps a task.

**Data:** Use 20 document-routing cases and fixed decision fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A deterministic workflow versus bounded-planner benchmark.

**Effort:** 16h · Intermediate

- **MCP tool schemas, transport lifecycle and permission checks:** Expose or consume a read-only project capability through an MCP server/client with a documented tool schema and bounded responses. Apply this to Workflow versus agent experiment: A deterministic workflow versus bounded-planner benchmark. Focus: Tool discovery and schemas, Transport lifecycle, Resources, prompts and tools, Authorisation per operation, Approval and audit context.
  - Deliverable: Local MCP server/client, schema and example transcript
  - Check: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A deterministic workflow versus bounded-planner benchmark. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP tool schemas, transport lifecycle and permission checks: Local MCP server/client, schema and example transcript
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare task success, tool count and failure behavior under identical cases.
- [ ] MCP tool schemas, transport lifecycle and permission checks: Test invalid arguments, unknown tools, disconnects and path traversal; reject calls outside the allowed scope. Create a local toy MCP-style tool boundary or use an official local SDK with a read-only note tool. Test schema rejection, object-level permissions, shutdown and exact-payload approval for an optional simulated write.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## MCP versions, discovery and authorization boundaries

<a id="agents-mcp-versioning"></a>

### MCP versions, discovery and authorization boundaries

MCP versions, discovery and authorization boundaries helps you make explainable engineering decisions and test failure cases. Build the experiment below before relying on the concept in an AI system.

**Priority:** Essential · **Study:** 4h · **Practice:** 5h

**Prerequisites:** [MCP host, client, server and transports](agents.md#agents-mcp) Navigation is unrestricted.

#### Concepts

- [ ] **Version pinning:** Protocol examples must match a specific specification and SDK version; older tutorials may describe a different lifecycle.
  - Example: Record the official 2026-07-28 specification and the installed SDK's advertised support.
  - Videos:
    - [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
      - Explains: Retrieval, MCP coordination and caching integration.
      - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
      - Watch for: Focus on version pinning. Then reproduce the lesson example: Record the official 2026-07-28 specification and the installed SDK's advertised support.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on version pinning. Then reproduce the lesson example: Record the official 2026-07-28 specification and the installed SDK's advertised support.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [ ] **Capability discovery:** The current specification describes server/discover and per-request metadata; implementations must be checked against their supported version.
  - Example: Create discovery request and response fixtures with advertised tool capabilities.
  - Videos:
    - [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
      - Explains: Retrieval, MCP coordination and caching integration.
      - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
      - Watch for: Focus on capability discovery. Then reproduce the lesson example: Create discovery request and response fixtures with advertised tool capabilities.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on capability discovery. Then reproduce the lesson example: Create discovery request and response fixtures with advertised tool capabilities.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [ ] **Transport boundaries:** Local stdio and remote Streamable HTTP have different process and network trust boundaries.
  - Example: Document a local child process versus an HTTP service boundary.
  - Videos:
    - [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
      - Explains: Retrieval, MCP coordination and caching integration.
      - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
      - Watch for: Focus on transport boundaries. Then reproduce the lesson example: Document a local child process versus an HTTP service boundary.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on transport boundaries. Then reproduce the lesson example: Document a local child process versus an HTTP service boundary.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [ ] **Authorization:** A discovered tool schema is not permission to call it; trusted authorization remains necessary.
  - Example: Reject a read request for another user's document before invoking the tool.
  - Videos:
    - [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
      - Explains: Retrieval, MCP coordination and caching integration.
      - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
      - Watch for: Focus on authorization. Then reproduce the lesson example: Reject a read request for another user's document before invoking the tool.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on authorization. Then reproduce the lesson example: Reject a read request for another user's document before invoking the tool.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [ ] **Compatibility failures:** Unsupported versions and capabilities should fail explicitly rather than silently changing semantics.
  - Example: Return a documented failure for an unsupported request version in a stub.
  - Videos:
    - [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
      - Explains: Retrieval, MCP coordination and caching integration.
      - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
      - Watch for: Focus on compatibility failures. Then reproduce the lesson example: Return a documented failure for an unsupported request version in a stub.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on compatibility failures. Then reproduce the lesson example: Return a documented failure for an unsupported request version in a stub.
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

1. [Official reference: MCP versions, discovery and authorization boundaries](https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture) — Free reading; no registration required. Use the local CPU exercise; optional hosted services and downloads are not required..
2. [MCP: architecture](https://modelcontextprotocol.io/docs/learn/architecture) — Free; no registration required. No paid materials required.

#### Lab: MCP versions, discovery and authorization boundaries

Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.

**Deliverables**

- Runnable CPU notebook or script with deterministic fixtures
- Measured outputs, failure cases and a README explaining decisions

**Completion checks**

- [ ] Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.
- [ ] Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

#### Ten project recommendations

### Human review state machine

A reviewer needs risky actions paused until a decision is recorded.

**Data:** Use fictional content-publication requests and reviewer decisions. Use a fixed seed and keep evaluation cases separate.

**Output:** A draft, review, approved and rejected workflow.

**Effort:** 16h · Intermediate

- **MCP versions, discovery and authorization boundaries:** Extend the project with MCP versions, discovery and authorization boundaries in Human review state machine. Adapt this focused lab to the project data: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.  Required concepts: Version pinning, Capability discovery, Transport boundaries, Authorization, Compatibility failures.
  - Deliverable: MCP versions, discovery and authorization boundaries: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A draft, review, approved and rejected workflow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP versions, discovery and authorization boundaries: MCP versions, discovery and authorization boundaries: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject invalid transitions and stale approvals after draft changes.
- [ ] MCP versions, discovery and authorization boundaries: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Bounded research workflow

A learner needs an assistant that can search and stop predictably.

**Data:** Use ten local notes and recorded planning outputs. Use a fixed seed and keep evaluation cases separate.

**Output:** A stateful search, summarize and review loop.

**Effort:** 16h · Intermediate

- **MCP versions, discovery and authorization boundaries:** Extend the project with MCP versions, discovery and authorization boundaries in Bounded research workflow. Adapt this focused lab to the project data: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.  Required concepts: Version pinning, Capability discovery, Transport boundaries, Authorization, Compatibility failures.
  - Deliverable: MCP versions, discovery and authorization boundaries: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A stateful search, summarize and review loop. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP versions, discovery and authorization boundaries: MCP versions, discovery and authorization boundaries: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Stop at the step budget and cite only retrieved sources.
- [ ] MCP versions, discovery and authorization boundaries: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Agent failure replay studio

A maintainer needs reproducible debugging of tool errors.

**Data:** Record 12 tool traces with timeouts, malformed outputs and retryable errors. Use a fixed seed and keep evaluation cases separate.

**Output:** A deterministic replay and failure classification tool.

**Effort:** 16h · Intermediate

- **MCP versions, discovery and authorization boundaries:** Extend the project with MCP versions, discovery and authorization boundaries in Agent failure replay studio. Adapt this focused lab to the project data: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.  Required concepts: Version pinning, Capability discovery, Transport boundaries, Authorization, Compatibility failures.
  - Deliverable: MCP versions, discovery and authorization boundaries: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A deterministic replay and failure classification tool. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP versions, discovery and authorization boundaries: MCP versions, discovery and authorization boundaries: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Replay without external side effects and cap retries.
- [ ] MCP versions, discovery and authorization boundaries: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### MCP client capability explorer

A learner needs to inspect and call server tools safely.

**Data:** Use a local deterministic MCP test server. Use a fixed seed and keep evaluation cases separate.

**Output:** A capability browser and bounded tool caller.

**Effort:** 16h · Intermediate

- **MCP versions, discovery and authorization boundaries:** Extend the project with MCP versions, discovery and authorization boundaries in MCP client capability explorer. Adapt this focused lab to the project data: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.  Required concepts: Version pinning, Capability discovery, Transport boundaries, Authorization, Compatibility failures.
  - Deliverable: MCP versions, discovery and authorization boundaries: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A capability browser and bounded tool caller. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP versions, discovery and authorization boundaries: MCP versions, discovery and authorization boundaries: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Handle server disconnects and unsupported capabilities explicitly.
- [ ] MCP versions, discovery and authorization boundaries: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Read-only notes MCP server

A learner needs a small MCP server with useful contracts.

**Data:** Use ten local text notes with stable IDs. Use a fixed seed and keep evaluation cases separate.

**Output:** A search/read server and an example client transcript.

**Effort:** 16h · Intermediate

- **MCP versions, discovery and authorization boundaries:** Extend the project with MCP versions, discovery and authorization boundaries in Read-only notes MCP server. Adapt this focused lab to the project data: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.  Required concepts: Version pinning, Capability discovery, Transport boundaries, Authorization, Compatibility failures.
  - Deliverable: MCP versions, discovery and authorization boundaries: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A search/read server and an example client transcript. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP versions, discovery and authorization boundaries: MCP versions, discovery and authorization boundaries: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Validate arguments, reject path traversal and test unknown tool errors.
- [ ] MCP versions, discovery and authorization boundaries: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Agent memory provenance ledger

A learner needs to distinguish trusted facts from conversation summaries.

**Data:** Create 30 events with sources, timestamps and corrections. Use a fixed seed and keep evaluation cases separate.

**Output:** A scoped memory store with expiration and correction history.

**Effort:** 16h · Intermediate

- **MCP versions, discovery and authorization boundaries:** Extend the project with MCP versions, discovery and authorization boundaries in Agent memory provenance ledger. Adapt this focused lab to the project data: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.  Required concepts: Version pinning, Capability discovery, Transport boundaries, Authorization, Compatibility failures.
  - Deliverable: MCP versions, discovery and authorization boundaries: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A scoped memory store with expiration and correction history. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP versions, discovery and authorization boundaries: MCP versions, discovery and authorization boundaries: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Expired or cross-user entries cannot be retrieved.
- [ ] MCP versions, discovery and authorization boundaries: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Independent review coordinator

A team needs independent checks before combining conclusions.

**Data:** Use three deterministic reviewers for schema, evidence and policy. Use a fixed seed and keep evaluation cases separate.

**Output:** A coordinator with separate review results and conflict handling.

**Effort:** 16h · Intermediate

- **MCP versions, discovery and authorization boundaries:** Extend the project with MCP versions, discovery and authorization boundaries in Independent review coordinator. Adapt this focused lab to the project data: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.  Required concepts: Version pinning, Capability discovery, Transport boundaries, Authorization, Compatibility failures.
  - Deliverable: MCP versions, discovery and authorization boundaries: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A coordinator with separate review results and conflict handling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP versions, discovery and authorization boundaries: MCP versions, discovery and authorization boundaries: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep dissent visible and enforce a timeout per reviewer.
- [ ] MCP versions, discovery and authorization boundaries: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Checkpoint recovery runner

An operator needs to resume failed multi-step jobs safely.

**Data:** Create five deterministic tasks and inject failures after checkpoints. Use a fixed seed and keep evaluation cases separate.

**Output:** A durable local state machine with replay.

**Effort:** 16h · Intermediate

- **MCP versions, discovery and authorization boundaries:** Extend the project with MCP versions, discovery and authorization boundaries in Checkpoint recovery runner. Adapt this focused lab to the project data: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.  Required concepts: Version pinning, Capability discovery, Transport boundaries, Authorization, Compatibility failures.
  - Deliverable: MCP versions, discovery and authorization boundaries: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A durable local state machine with replay. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP versions, discovery and authorization boundaries: MCP versions, discovery and authorization boundaries: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Resume without duplicating completed side effects.
- [ ] MCP versions, discovery and authorization boundaries: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Tool permission gateway

A developer needs a clear boundary between proposals and execution.

**Data:** Create read, write and delete tool fixtures on a temporary folder. Use a fixed seed and keep evaluation cases separate.

**Output:** A policy gate with dry-run and approval states.

**Effort:** 16h · Intermediate

- **MCP versions, discovery and authorization boundaries:** Extend the project with MCP versions, discovery and authorization boundaries in Tool permission gateway. Adapt this focused lab to the project data: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.  Required concepts: Version pinning, Capability discovery, Transport boundaries, Authorization, Compatibility failures.
  - Deliverable: MCP versions, discovery and authorization boundaries: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A policy gate with dry-run and approval states. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP versions, discovery and authorization boundaries: MCP versions, discovery and authorization boundaries: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Denied calls produce no side effects; approval is bound to exact arguments.
- [ ] MCP versions, discovery and authorization boundaries: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workflow versus agent experiment

A product builder needs evidence that autonomy helps a task.

**Data:** Use 20 document-routing cases and fixed decision fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A deterministic workflow versus bounded-planner benchmark.

**Effort:** 16h · Intermediate

- **MCP versions, discovery and authorization boundaries:** Extend the project with MCP versions, discovery and authorization boundaries in Workflow versus agent experiment. Adapt this focused lab to the project data: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.  Required concepts: Version pinning, Capability discovery, Transport boundaries, Authorization, Compatibility failures.
  - Deliverable: MCP versions, discovery and authorization boundaries: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
  - Check: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A deterministic workflow versus bounded-planner benchmark. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · MCP versions, discovery and authorization boundaries: MCP versions, discovery and authorization boundaries: Runnable CPU notebook or script with deterministic fixtures; Measured outputs, failure cases and a README explaining decisions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare task success, tool count and failure behavior under identical cases.
- [ ] MCP versions, discovery and authorization boundaries: Compare the current official MCP specification with the SDK version you use. Build recorded request/response contract tests for discovery, version mismatch, invalid arguments and denied authorization; document the exact supported version.; Run the example plus an edge case, explain the result, and distinguish measured evidence from assumptions.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Stage checkpoint

<a id="checkpoint-agents"></a>

### Bounded tools checkpoint

Demonstrate readiness through a reproducible practical handoff. Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.

**Priority:** Essential · **Study:** 1h · **Practice:** 6h

**Prerequisites:** [Workflows, agent loops, planning and state](agents.md#agents-loops), [Tools, APIs, permissions and sandboxing](agents.md#agents-tools), [MCP host, client, server and transports](agents.md#agents-mcp), [MCP client connections, context security and testing](agents.md#agents-mcp-client), [Typed state, checkpoints and bounded execution graphs](agents.md#agents-state-machines), [MCP tool schemas, transport lifecycle and permission checks](agents.md#agents-mcp-contracts), [MCP versions, discovery and authorization boundaries](agents.md#agents-mcp-versioning) Navigation is unrestricted.

#### Concepts

- [ ] **Define the success contract:** Write observable checks before implementation so success is not just a plausible demonstration.
  - Example: Turn this task into a numbered acceptance checklist: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.
  - Videos:
    - [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
      - Explains: Retrieval, MCP coordination and caching integration.
      - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
      - Watch for: Focus on define the success contract. Then reproduce the lesson example: Turn this task into a numbered acceptance checklist: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on define the success contract. Then reproduce the lesson example: Turn this task into a numbered acceptance checklist: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [ ] **Reproduce the baseline:** Keep a simple reference output and deterministic inputs so changes can be compared honestly.
  - Example: Run a fixed input twice and compare saved outputs with the documented baseline.
  - Videos:
    - [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
      - Explains: Retrieval, MCP coordination and caching integration.
      - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
      - Watch for: Focus on reproduce the baseline. Then reproduce the lesson example: Run a fixed input twice and compare saved outputs with the documented baseline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on reproduce the baseline. Then reproduce the lesson example: Run a fixed input twice and compare saved outputs with the documented baseline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [ ] **Test a failure boundary:** A working happy path does not establish robustness to malformed data or dependency failures.
  - Example: Inject one malformed input and one controlled failure, then record the resulting state.
  - Videos:
    - [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
      - Explains: Retrieval, MCP coordination and caching integration.
      - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
      - Watch for: Focus on test a failure boundary. Then reproduce the lesson example: Inject one malformed input and one controlled failure, then record the resulting state.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on test a failure boundary. Then reproduce the lesson example: Inject one malformed input and one controlled failure, then record the resulting state.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [ ] **Explain the decisions:** Describe why each technique was chosen and what evidence would make you choose differently.
  - Example: Write a short decision note comparing the chosen approach with one simpler alternative.
  - Videos:
    - [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
      - Explains: Retrieval, MCP coordination and caching integration.
      - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
      - Watch for: Focus on explain the decisions. Then reproduce the lesson example: Write a short decision note comparing the chosen approach with one simpler alternative.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on explain the decisions. Then reproduce the lesson example: Write a short decision note comparing the chosen approach with one simpler alternative.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-langgraph-and-build-conversational-ai-with-python/
- [ ] **Hand off the evidence:** Another learner must be able to reproduce the result from your instructions and supplied inputs.
  - Example: Ask a teammate to run the README commands in a clean environment and record missing steps.
  - Videos:
    - [RAG and MCP fundamentals — hands-on course](https://www.youtube.com/watch?v=I7_WXKhyGms) · freeCodeCamp · Full course · approximately 2h
      - Explains: Retrieval, MCP coordination and caching integration.
      - Useful because: Connect knowledge retrieval with tool access while keeping permission checks in software.
      - Watch for: Focus on hand off the evidence. Then reproduce the lesson example: Ask a teammate to run the README commands in a clean environment and record missing steps.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/learn-rag-and-mcp-fundamentals/
    - [LangGraph — complete course for beginners](https://www.youtube.com/watch?v=jGg_1h0qzaM) · freeCodeCamp · Full tool course
      - Explains: Graph state, nodes, workflows and agent applications.
      - Useful because: Use it to understand orchestration; replace paid provider calls with local/recorded responses.
      - Watch for: Focus on hand off the evidence. Then reproduce the lesson example: Ask a teammate to run the README commands in a clean environment and record missing steps.
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

1. [Official reference: MCP versions, discovery and authorization boundaries](https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture) — Free reading; no registration required. Use the local CPU exercise; optional hosted services and downloads are not required..
2. [MCP: architecture](https://modelcontextprotocol.io/docs/learn/architecture) — Free; no registration required. No paid materials required.

#### Bounded tools checkpoint

Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.

**Deliverables**

- Runnable project and reproducible input fixtures
- README, results and decision notes
- Failure evidence and clean-start instructions

**Completion checks**

- [ ] Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.
- [ ] Explain the code and results without relying on an AI-generated summary.
- [ ] A teammate can reproduce the demo without paid credentials.

#### Ten project recommendations

### Human review state machine

A reviewer needs risky actions paused until a decision is recorded.

**Data:** Use fictional content-publication requests and reviewer decisions. Use a fixed seed and keep evaluation cases separate.

**Output:** A draft, review, approved and rejected workflow.

**Effort:** 16h · Intermediate

- **Bounded tools checkpoint:** Extend the project with Bounded tools checkpoint in Human review state machine. Adapt this focused lab to the project data: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Bounded tools checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A draft, review, approved and rejected workflow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bounded tools checkpoint: Bounded tools checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject invalid transitions and stale approvals after draft changes.
- [ ] Bounded tools checkpoint: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Bounded research workflow

A learner needs an assistant that can search and stop predictably.

**Data:** Use ten local notes and recorded planning outputs. Use a fixed seed and keep evaluation cases separate.

**Output:** A stateful search, summarize and review loop.

**Effort:** 16h · Intermediate

- **Bounded tools checkpoint:** Extend the project with Bounded tools checkpoint in Bounded research workflow. Adapt this focused lab to the project data: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Bounded tools checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A stateful search, summarize and review loop. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bounded tools checkpoint: Bounded tools checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Stop at the step budget and cite only retrieved sources.
- [ ] Bounded tools checkpoint: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Agent failure replay studio

A maintainer needs reproducible debugging of tool errors.

**Data:** Record 12 tool traces with timeouts, malformed outputs and retryable errors. Use a fixed seed and keep evaluation cases separate.

**Output:** A deterministic replay and failure classification tool.

**Effort:** 16h · Intermediate

- **Bounded tools checkpoint:** Extend the project with Bounded tools checkpoint in Agent failure replay studio. Adapt this focused lab to the project data: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Bounded tools checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A deterministic replay and failure classification tool. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bounded tools checkpoint: Bounded tools checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Replay without external side effects and cap retries.
- [ ] Bounded tools checkpoint: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### MCP client capability explorer

A learner needs to inspect and call server tools safely.

**Data:** Use a local deterministic MCP test server. Use a fixed seed and keep evaluation cases separate.

**Output:** A capability browser and bounded tool caller.

**Effort:** 16h · Intermediate

- **Bounded tools checkpoint:** Extend the project with Bounded tools checkpoint in MCP client capability explorer. Adapt this focused lab to the project data: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Bounded tools checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A capability browser and bounded tool caller. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bounded tools checkpoint: Bounded tools checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Handle server disconnects and unsupported capabilities explicitly.
- [ ] Bounded tools checkpoint: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Read-only notes MCP server

A learner needs a small MCP server with useful contracts.

**Data:** Use ten local text notes with stable IDs. Use a fixed seed and keep evaluation cases separate.

**Output:** A search/read server and an example client transcript.

**Effort:** 16h · Intermediate

- **Bounded tools checkpoint:** Extend the project with Bounded tools checkpoint in Read-only notes MCP server. Adapt this focused lab to the project data: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Bounded tools checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A search/read server and an example client transcript. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bounded tools checkpoint: Bounded tools checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Validate arguments, reject path traversal and test unknown tool errors.
- [ ] Bounded tools checkpoint: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Agent memory provenance ledger

A learner needs to distinguish trusted facts from conversation summaries.

**Data:** Create 30 events with sources, timestamps and corrections. Use a fixed seed and keep evaluation cases separate.

**Output:** A scoped memory store with expiration and correction history.

**Effort:** 16h · Intermediate

- **Bounded tools checkpoint:** Extend the project with Bounded tools checkpoint in Agent memory provenance ledger. Adapt this focused lab to the project data: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Bounded tools checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A scoped memory store with expiration and correction history. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bounded tools checkpoint: Bounded tools checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Expired or cross-user entries cannot be retrieved.
- [ ] Bounded tools checkpoint: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Independent review coordinator

A team needs independent checks before combining conclusions.

**Data:** Use three deterministic reviewers for schema, evidence and policy. Use a fixed seed and keep evaluation cases separate.

**Output:** A coordinator with separate review results and conflict handling.

**Effort:** 16h · Intermediate

- **Bounded tools checkpoint:** Extend the project with Bounded tools checkpoint in Independent review coordinator. Adapt this focused lab to the project data: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Bounded tools checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A coordinator with separate review results and conflict handling. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bounded tools checkpoint: Bounded tools checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Keep dissent visible and enforce a timeout per reviewer.
- [ ] Bounded tools checkpoint: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Checkpoint recovery runner

An operator needs to resume failed multi-step jobs safely.

**Data:** Create five deterministic tasks and inject failures after checkpoints. Use a fixed seed and keep evaluation cases separate.

**Output:** A durable local state machine with replay.

**Effort:** 16h · Intermediate

- **Bounded tools checkpoint:** Extend the project with Bounded tools checkpoint in Checkpoint recovery runner. Adapt this focused lab to the project data: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Bounded tools checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A durable local state machine with replay. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bounded tools checkpoint: Bounded tools checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Resume without duplicating completed side effects.
- [ ] Bounded tools checkpoint: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Tool permission gateway

A developer needs a clear boundary between proposals and execution.

**Data:** Create read, write and delete tool fixtures on a temporary folder. Use a fixed seed and keep evaluation cases separate.

**Output:** A policy gate with dry-run and approval states.

**Effort:** 16h · Intermediate

- **Bounded tools checkpoint:** Extend the project with Bounded tools checkpoint in Tool permission gateway. Adapt this focused lab to the project data: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Bounded tools checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A policy gate with dry-run and approval states. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bounded tools checkpoint: Bounded tools checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Denied calls produce no side effects; approval is bound to exact arguments.
- [ ] Bounded tools checkpoint: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Workflow versus agent experiment

A product builder needs evidence that autonomy helps a task.

**Data:** Use 20 document-routing cases and fixed decision fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A deterministic workflow versus bounded-planner benchmark.

**Effort:** 16h · Intermediate

- **Bounded tools checkpoint:** Extend the project with Bounded tools checkpoint in Workflow versus agent experiment. Adapt this focused lab to the project data: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Bounded tools checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A deterministic workflow versus bounded-planner benchmark. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Bounded tools checkpoint: Bounded tools checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare task success, tool count and failure behavior under identical cases.
- [ ] Bounded tools checkpoint: Create a read-only tool workflow with typed arguments, a call budget, authorization, recovery and a human review state. Pin the supported MCP version and test discovery and invalid-request contracts.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

