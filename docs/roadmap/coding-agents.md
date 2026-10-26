# Coding agents

Direct and verify generated work with clear engineering context.

## AI Engineering · Step 11 of 13

**Goal:** Direct coding agents using clear specifications and verify their work.

**Stage checkpoint:** Write AGENTS.md and a task specification; review a generated change using tests and security checks.

Direct coding agents through specifications, code review and verified outcomes.

Follow the modules and lessons below at your pace. Finish each exercise, save your evidence and self-assessment, then continue. Completed and Already known count as completed; Skipped is reported separately. You can move ahead at any time.

[Full pipeline](../PIPELINE.md) · [Next step: Deployment and operations](deployment.md)

## Planning and directing work

<a id="coding-specifications"></a>

### Problem definition, research and specifications

Give humans and coding tools a concrete goal and verifiable scope.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

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

### Small-patch planning workbench

A maintainer needs manageable changes instead of one huge generated diff.

**Data:** Use a three-feature demo application backlog. Use a fixed seed and keep evaluation cases separate.

**Output:** A dependency-ordered task plan with independently testable patches.

**Effort:** 10h · Beginner → intermediate

- **Problem definition, research and specifications:** Implement Problem definition, research and specifications in Small-patch planning workbench. Adapt this focused lab to the project data: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.  Required concepts: Problem and research, Requirements and architecture, Task decomposition.
  - Deliverable: Problem definition, research and specifications: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A dependency-ordered task plan with independently testable patches. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Problem definition, research and specifications: Problem definition, research and specifications: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Each patch has a clear rollback and does not leave broken callers.
- [ ] Problem definition, research and specifications: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Executable feature handoff

A learner needs an AI coding task with observable completion criteria.

**Data:** Use a fictional notes-search feature and six user scenarios. Use a fixed seed and keep evaluation cases separate.

**Output:** A task specification, fixtures and acceptance checklist.

**Effort:** 10h · Beginner → intermediate

- **Problem definition, research and specifications:** Implement Problem definition, research and specifications in Executable feature handoff. Adapt this focused lab to the project data: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.  Required concepts: Problem and research, Requirements and architecture, Task decomposition.
  - Deliverable: Problem definition, research and specifications: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A task specification, fixtures and acceptance checklist. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Problem definition, research and specifications: Problem definition, research and specifications: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Another developer can identify completion without reading the original conversation.
- [ ] Problem definition, research and specifications: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Coding autonomy boundary lab

A team needs clear approval boundaries for agent actions.

**Data:** Create 20 proposed shell/file actions in a temporary sandbox. Use a fixed seed and keep evaluation cases separate.

**Output:** An AGENTS.md policy and a dry-run decision table.

**Effort:** 10h · Beginner → intermediate

- **Problem definition, research and specifications:** Extend the project with Problem definition, research and specifications in Coding autonomy boundary lab. Adapt this focused lab to the project data: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.  Required concepts: Problem and research, Requirements and architecture, Task decomposition.
  - Deliverable: Problem definition, research and specifications: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An AGENTS.md policy and a dry-run decision table. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Problem definition, research and specifications: Problem definition, research and specifications: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Classify destructive actions consistently without executing them.
- [ ] Problem definition, research and specifications: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Repository context packager

A maintainer needs to provide relevant context without secrets.

**Data:** Use a small local demo repository with public and excluded files. Use a fixed seed and keep evaluation cases separate.

**Output:** An allowlisted context bundle and file provenance list.

**Effort:** 10h · Beginner → intermediate

- **Problem definition, research and specifications:** Extend the project with Problem definition, research and specifications in Repository context packager. Adapt this focused lab to the project data: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.  Required concepts: Problem and research, Requirements and architecture, Task decomposition.
  - Deliverable: Problem definition, research and specifications: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An allowlisted context bundle and file provenance list. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Problem definition, research and specifications: Problem definition, research and specifications: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude fake secrets and generated folders; include required caller contracts.
- [ ] Problem definition, research and specifications: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Agent debugging learning journal

A learner needs to understand why repeated AI fixes fail.

**Data:** Use three small bugs with known root causes. Use a fixed seed and keep evaluation cases separate.

**Output:** A hypothesis log, minimal reproductions and verified fixes.

**Effort:** 10h · Beginner → intermediate

- **Problem definition, research and specifications:** Extend the project with Problem definition, research and specifications in Agent debugging learning journal. Adapt this focused lab to the project data: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.  Required concepts: Problem and research, Requirements and architecture, Task decomposition.
  - Deliverable: Problem definition, research and specifications: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A hypothesis log, minimal reproductions and verified fixes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Problem definition, research and specifications: Problem definition, research and specifications: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject changes that only hide errors and explain the actual cause of each bug.
- [ ] Problem definition, research and specifications: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Generated patch review clinic

A learner needs to detect plausible but broken generated code.

**Data:** Author five tiny patches with security and logic defects. Use a fixed seed and keep evaluation cases separate.

**Output:** A review report with reproducing tests and corrected patches.

**Effort:** 10h · Beginner → intermediate

- **Problem definition, research and specifications:** Extend the project with Problem definition, research and specifications in Generated patch review clinic. Adapt this focused lab to the project data: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.  Required concepts: Problem and research, Requirements and architecture, Task decomposition.
  - Deliverable: Problem definition, research and specifications: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A review report with reproducing tests and corrected patches. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Problem definition, research and specifications: Problem definition, research and specifications: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Each finding has a failing test that passes after the correction.
- [ ] Problem definition, research and specifications: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Requirement-to-test tracker

A reviewer needs evidence that generated changes meet the request.

**Data:** Write ten requirements for a local data importer. Use a fixed seed and keep evaluation cases separate.

**Output:** A traceability matrix linking requirements, code and tests.

**Effort:** 10h · Beginner → intermediate

- **Problem definition, research and specifications:** Extend the project with Problem definition, research and specifications in Requirement-to-test tracker. Adapt this focused lab to the project data: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.  Required concepts: Problem and research, Requirements and architecture, Task decomposition.
  - Deliverable: Problem definition, research and specifications: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A traceability matrix linking requirements, code and tests. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Problem definition, research and specifications: Problem definition, research and specifications: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Every requirement has an observable check and unrelated changes are identified.
- [ ] Problem definition, research and specifications: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Test-first coding exercise

A learner needs to guide an assistant through a small bug fix.

**Data:** Use a parser with one reproducible Unicode bug. Use a fixed seed and keep evaluation cases separate.

**Output:** A failing regression test, bounded task prompt and reviewed fix.

**Effort:** 10h · Beginner → intermediate

- **Problem definition, research and specifications:** Extend the project with Problem definition, research and specifications in Test-first coding exercise. Adapt this focused lab to the project data: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.  Required concepts: Problem and research, Requirements and architecture, Task decomposition.
  - Deliverable: Problem definition, research and specifications: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A failing regression test, bounded task prompt and reviewed fix. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Problem definition, research and specifications: Problem definition, research and specifications: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The fix handles the failing case without weakening existing tests.
- [ ] Problem definition, research and specifications: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Coding tool contract simulator

An agent builder needs precise read/search/edit tool semantics.

**Data:** Use temporary text files and deterministic tool-call fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A bounded tool adapter with explicit errors.

**Effort:** 10h · Beginner → intermediate

- **Problem definition, research and specifications:** Extend the project with Problem definition, research and specifications in Coding tool contract simulator. Adapt this focused lab to the project data: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.  Required concepts: Problem and research, Requirements and architecture, Task decomposition.
  - Deliverable: Problem definition, research and specifications: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bounded tool adapter with explicit errors. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Problem definition, research and specifications: Problem definition, research and specifications: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject traversal and out-of-scope writes and preserve files on failed edits.
- [ ] Problem definition, research and specifications: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### End-to-end verification handoff

A learner needs to prove a generated feature works beyond compilation.

**Data:** Use a local form/API/storage demo with one seeded integration bug. Use a fixed seed and keep evaluation cases separate.

**Output:** A verification plan and evidence report across the complete flow.

**Effort:** 10h · Beginner → intermediate

- **Problem definition, research and specifications:** Extend the project with Problem definition, research and specifications in End-to-end verification handoff. Adapt this focused lab to the project data: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.  Required concepts: Problem and research, Requirements and architecture, Task decomposition.
  - Deliverable: Problem definition, research and specifications: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A verification plan and evidence report across the complete flow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Problem definition, research and specifications: Problem definition, research and specifications: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show input, persisted state and resulting UI behavior for success and failure.
- [ ] Problem definition, research and specifications: Write a one-page specification for a local document-search app including user problem, architecture, exclusions and five acceptance checks.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="coding-context"></a>

### AGENTS.md, project instructions, tools, plugins and hooks

Make project context explicit and keep automation within defined permissions.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

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

### Repository context packager

A maintainer needs to provide relevant context without secrets.

**Data:** Use a small local demo repository with public and excluded files. Use a fixed seed and keep evaluation cases separate.

**Output:** An allowlisted context bundle and file provenance list.

**Effort:** 10h · Beginner → intermediate

- **AGENTS.md, project instructions, tools, plugins and hooks:** Implement AGENTS.md, project instructions, tools, plugins and hooks in Repository context packager. Adapt this focused lab to the project data: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.  Required concepts: Project context, Tools, MCP and plugins, Hooks and harnesses.
  - Deliverable: AGENTS.md, project instructions, tools, plugins and hooks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An allowlisted context bundle and file provenance list. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · AGENTS.md, project instructions, tools, plugins and hooks: AGENTS.md, project instructions, tools, plugins and hooks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude fake secrets and generated folders; include required caller contracts.
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Coding tool contract simulator

An agent builder needs precise read/search/edit tool semantics.

**Data:** Use temporary text files and deterministic tool-call fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A bounded tool adapter with explicit errors.

**Effort:** 10h · Beginner → intermediate

- **AGENTS.md, project instructions, tools, plugins and hooks:** Implement AGENTS.md, project instructions, tools, plugins and hooks in Coding tool contract simulator. Adapt this focused lab to the project data: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.  Required concepts: Project context, Tools, MCP and plugins, Hooks and harnesses.
  - Deliverable: AGENTS.md, project instructions, tools, plugins and hooks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bounded tool adapter with explicit errors. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · AGENTS.md, project instructions, tools, plugins and hooks: AGENTS.md, project instructions, tools, plugins and hooks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject traversal and out-of-scope writes and preserve files on failed edits.
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Coding autonomy boundary lab

A team needs clear approval boundaries for agent actions.

**Data:** Create 20 proposed shell/file actions in a temporary sandbox. Use a fixed seed and keep evaluation cases separate.

**Output:** An AGENTS.md policy and a dry-run decision table.

**Effort:** 10h · Beginner → intermediate

- **AGENTS.md, project instructions, tools, plugins and hooks:** Extend the project with AGENTS.md, project instructions, tools, plugins and hooks in Coding autonomy boundary lab. Adapt this focused lab to the project data: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.  Required concepts: Project context, Tools, MCP and plugins, Hooks and harnesses.
  - Deliverable: AGENTS.md, project instructions, tools, plugins and hooks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An AGENTS.md policy and a dry-run decision table. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · AGENTS.md, project instructions, tools, plugins and hooks: AGENTS.md, project instructions, tools, plugins and hooks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Classify destructive actions consistently without executing them.
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Agent debugging learning journal

A learner needs to understand why repeated AI fixes fail.

**Data:** Use three small bugs with known root causes. Use a fixed seed and keep evaluation cases separate.

**Output:** A hypothesis log, minimal reproductions and verified fixes.

**Effort:** 10h · Beginner → intermediate

- **AGENTS.md, project instructions, tools, plugins and hooks:** Extend the project with AGENTS.md, project instructions, tools, plugins and hooks in Agent debugging learning journal. Adapt this focused lab to the project data: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.  Required concepts: Project context, Tools, MCP and plugins, Hooks and harnesses.
  - Deliverable: AGENTS.md, project instructions, tools, plugins and hooks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A hypothesis log, minimal reproductions and verified fixes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · AGENTS.md, project instructions, tools, plugins and hooks: AGENTS.md, project instructions, tools, plugins and hooks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject changes that only hide errors and explain the actual cause of each bug.
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Generated patch review clinic

A learner needs to detect plausible but broken generated code.

**Data:** Author five tiny patches with security and logic defects. Use a fixed seed and keep evaluation cases separate.

**Output:** A review report with reproducing tests and corrected patches.

**Effort:** 10h · Beginner → intermediate

- **AGENTS.md, project instructions, tools, plugins and hooks:** Extend the project with AGENTS.md, project instructions, tools, plugins and hooks in Generated patch review clinic. Adapt this focused lab to the project data: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.  Required concepts: Project context, Tools, MCP and plugins, Hooks and harnesses.
  - Deliverable: AGENTS.md, project instructions, tools, plugins and hooks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A review report with reproducing tests and corrected patches. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · AGENTS.md, project instructions, tools, plugins and hooks: AGENTS.md, project instructions, tools, plugins and hooks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Each finding has a failing test that passes after the correction.
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Requirement-to-test tracker

A reviewer needs evidence that generated changes meet the request.

**Data:** Write ten requirements for a local data importer. Use a fixed seed and keep evaluation cases separate.

**Output:** A traceability matrix linking requirements, code and tests.

**Effort:** 10h · Beginner → intermediate

- **AGENTS.md, project instructions, tools, plugins and hooks:** Extend the project with AGENTS.md, project instructions, tools, plugins and hooks in Requirement-to-test tracker. Adapt this focused lab to the project data: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.  Required concepts: Project context, Tools, MCP and plugins, Hooks and harnesses.
  - Deliverable: AGENTS.md, project instructions, tools, plugins and hooks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A traceability matrix linking requirements, code and tests. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · AGENTS.md, project instructions, tools, plugins and hooks: AGENTS.md, project instructions, tools, plugins and hooks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Every requirement has an observable check and unrelated changes are identified.
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Small-patch planning workbench

A maintainer needs manageable changes instead of one huge generated diff.

**Data:** Use a three-feature demo application backlog. Use a fixed seed and keep evaluation cases separate.

**Output:** A dependency-ordered task plan with independently testable patches.

**Effort:** 10h · Beginner → intermediate

- **AGENTS.md, project instructions, tools, plugins and hooks:** Extend the project with AGENTS.md, project instructions, tools, plugins and hooks in Small-patch planning workbench. Adapt this focused lab to the project data: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.  Required concepts: Project context, Tools, MCP and plugins, Hooks and harnesses.
  - Deliverable: AGENTS.md, project instructions, tools, plugins and hooks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A dependency-ordered task plan with independently testable patches. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · AGENTS.md, project instructions, tools, plugins and hooks: AGENTS.md, project instructions, tools, plugins and hooks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Each patch has a clear rollback and does not leave broken callers.
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Executable feature handoff

A learner needs an AI coding task with observable completion criteria.

**Data:** Use a fictional notes-search feature and six user scenarios. Use a fixed seed and keep evaluation cases separate.

**Output:** A task specification, fixtures and acceptance checklist.

**Effort:** 10h · Beginner → intermediate

- **AGENTS.md, project instructions, tools, plugins and hooks:** Extend the project with AGENTS.md, project instructions, tools, plugins and hooks in Executable feature handoff. Adapt this focused lab to the project data: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.  Required concepts: Project context, Tools, MCP and plugins, Hooks and harnesses.
  - Deliverable: AGENTS.md, project instructions, tools, plugins and hooks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A task specification, fixtures and acceptance checklist. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · AGENTS.md, project instructions, tools, plugins and hooks: AGENTS.md, project instructions, tools, plugins and hooks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Another developer can identify completion without reading the original conversation.
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Test-first coding exercise

A learner needs to guide an assistant through a small bug fix.

**Data:** Use a parser with one reproducible Unicode bug. Use a fixed seed and keep evaluation cases separate.

**Output:** A failing regression test, bounded task prompt and reviewed fix.

**Effort:** 10h · Beginner → intermediate

- **AGENTS.md, project instructions, tools, plugins and hooks:** Extend the project with AGENTS.md, project instructions, tools, plugins and hooks in Test-first coding exercise. Adapt this focused lab to the project data: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.  Required concepts: Project context, Tools, MCP and plugins, Hooks and harnesses.
  - Deliverable: AGENTS.md, project instructions, tools, plugins and hooks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A failing regression test, bounded task prompt and reviewed fix. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · AGENTS.md, project instructions, tools, plugins and hooks: AGENTS.md, project instructions, tools, plugins and hooks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The fix handles the failing case without weakening existing tests.
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### End-to-end verification handoff

A learner needs to prove a generated feature works beyond compilation.

**Data:** Use a local form/API/storage demo with one seeded integration bug. Use a fixed seed and keep evaluation cases separate.

**Output:** A verification plan and evidence report across the complete flow.

**Effort:** 10h · Beginner → intermediate

- **AGENTS.md, project instructions, tools, plugins and hooks:** Extend the project with AGENTS.md, project instructions, tools, plugins and hooks in End-to-end verification handoff. Adapt this focused lab to the project data: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.  Required concepts: Project context, Tools, MCP and plugins, Hooks and harnesses.
  - Deliverable: AGENTS.md, project instructions, tools, plugins and hooks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A verification plan and evidence report across the complete flow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · AGENTS.md, project instructions, tools, plugins and hooks: AGENTS.md, project instructions, tools, plugins and hooks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show input, persisted state and resulting UI behavior for success and failure.
- [ ] AGENTS.md, project instructions, tools, plugins and hooks: Create AGENTS.md and a tool-permission table for a sample project; add a local verification script and explain which integration capabilities are deliberately disabled.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="coding-autonomy"></a>

### Agent autonomy, subagents and long-running tasks

Delegate bounded work without surrendering responsibility for integration.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

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

### Coding tool contract simulator

An agent builder needs precise read/search/edit tool semantics.

**Data:** Use temporary text files and deterministic tool-call fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A bounded tool adapter with explicit errors.

**Effort:** 10h · Beginner → intermediate

- **Agent autonomy, subagents and long-running tasks:** Implement Agent autonomy, subagents and long-running tasks in Coding tool contract simulator. Adapt this focused lab to the project data: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.  Required concepts: Autonomy boundaries, Context management, Delegation.
  - Deliverable: Agent autonomy, subagents and long-running tasks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bounded tool adapter with explicit errors. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Agent autonomy, subagents and long-running tasks: Agent autonomy, subagents and long-running tasks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject traversal and out-of-scope writes and preserve files on failed edits.
- [ ] Agent autonomy, subagents and long-running tasks: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Coding autonomy boundary lab

A team needs clear approval boundaries for agent actions.

**Data:** Create 20 proposed shell/file actions in a temporary sandbox. Use a fixed seed and keep evaluation cases separate.

**Output:** An AGENTS.md policy and a dry-run decision table.

**Effort:** 10h · Beginner → intermediate

- **Agent autonomy, subagents and long-running tasks:** Extend the project with Agent autonomy, subagents and long-running tasks in Coding autonomy boundary lab. Adapt this focused lab to the project data: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.  Required concepts: Autonomy boundaries, Context management, Delegation.
  - Deliverable: Agent autonomy, subagents and long-running tasks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An AGENTS.md policy and a dry-run decision table. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Agent autonomy, subagents and long-running tasks: Agent autonomy, subagents and long-running tasks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Classify destructive actions consistently without executing them.
- [ ] Agent autonomy, subagents and long-running tasks: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Repository context packager

A maintainer needs to provide relevant context without secrets.

**Data:** Use a small local demo repository with public and excluded files. Use a fixed seed and keep evaluation cases separate.

**Output:** An allowlisted context bundle and file provenance list.

**Effort:** 10h · Beginner → intermediate

- **Agent autonomy, subagents and long-running tasks:** Extend the project with Agent autonomy, subagents and long-running tasks in Repository context packager. Adapt this focused lab to the project data: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.  Required concepts: Autonomy boundaries, Context management, Delegation.
  - Deliverable: Agent autonomy, subagents and long-running tasks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An allowlisted context bundle and file provenance list. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Agent autonomy, subagents and long-running tasks: Agent autonomy, subagents and long-running tasks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude fake secrets and generated folders; include required caller contracts.
- [ ] Agent autonomy, subagents and long-running tasks: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Agent debugging learning journal

A learner needs to understand why repeated AI fixes fail.

**Data:** Use three small bugs with known root causes. Use a fixed seed and keep evaluation cases separate.

**Output:** A hypothesis log, minimal reproductions and verified fixes.

**Effort:** 10h · Beginner → intermediate

- **Agent autonomy, subagents and long-running tasks:** Extend the project with Agent autonomy, subagents and long-running tasks in Agent debugging learning journal. Adapt this focused lab to the project data: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.  Required concepts: Autonomy boundaries, Context management, Delegation.
  - Deliverable: Agent autonomy, subagents and long-running tasks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A hypothesis log, minimal reproductions and verified fixes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Agent autonomy, subagents and long-running tasks: Agent autonomy, subagents and long-running tasks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject changes that only hide errors and explain the actual cause of each bug.
- [ ] Agent autonomy, subagents and long-running tasks: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Generated patch review clinic

A learner needs to detect plausible but broken generated code.

**Data:** Author five tiny patches with security and logic defects. Use a fixed seed and keep evaluation cases separate.

**Output:** A review report with reproducing tests and corrected patches.

**Effort:** 10h · Beginner → intermediate

- **Agent autonomy, subagents and long-running tasks:** Extend the project with Agent autonomy, subagents and long-running tasks in Generated patch review clinic. Adapt this focused lab to the project data: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.  Required concepts: Autonomy boundaries, Context management, Delegation.
  - Deliverable: Agent autonomy, subagents and long-running tasks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A review report with reproducing tests and corrected patches. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Agent autonomy, subagents and long-running tasks: Agent autonomy, subagents and long-running tasks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Each finding has a failing test that passes after the correction.
- [ ] Agent autonomy, subagents and long-running tasks: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Requirement-to-test tracker

A reviewer needs evidence that generated changes meet the request.

**Data:** Write ten requirements for a local data importer. Use a fixed seed and keep evaluation cases separate.

**Output:** A traceability matrix linking requirements, code and tests.

**Effort:** 10h · Beginner → intermediate

- **Agent autonomy, subagents and long-running tasks:** Extend the project with Agent autonomy, subagents and long-running tasks in Requirement-to-test tracker. Adapt this focused lab to the project data: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.  Required concepts: Autonomy boundaries, Context management, Delegation.
  - Deliverable: Agent autonomy, subagents and long-running tasks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A traceability matrix linking requirements, code and tests. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Agent autonomy, subagents and long-running tasks: Agent autonomy, subagents and long-running tasks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Every requirement has an observable check and unrelated changes are identified.
- [ ] Agent autonomy, subagents and long-running tasks: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Small-patch planning workbench

A maintainer needs manageable changes instead of one huge generated diff.

**Data:** Use a three-feature demo application backlog. Use a fixed seed and keep evaluation cases separate.

**Output:** A dependency-ordered task plan with independently testable patches.

**Effort:** 10h · Beginner → intermediate

- **Agent autonomy, subagents and long-running tasks:** Extend the project with Agent autonomy, subagents and long-running tasks in Small-patch planning workbench. Adapt this focused lab to the project data: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.  Required concepts: Autonomy boundaries, Context management, Delegation.
  - Deliverable: Agent autonomy, subagents and long-running tasks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A dependency-ordered task plan with independently testable patches. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Agent autonomy, subagents and long-running tasks: Agent autonomy, subagents and long-running tasks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Each patch has a clear rollback and does not leave broken callers.
- [ ] Agent autonomy, subagents and long-running tasks: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Executable feature handoff

A learner needs an AI coding task with observable completion criteria.

**Data:** Use a fictional notes-search feature and six user scenarios. Use a fixed seed and keep evaluation cases separate.

**Output:** A task specification, fixtures and acceptance checklist.

**Effort:** 10h · Beginner → intermediate

- **Agent autonomy, subagents and long-running tasks:** Extend the project with Agent autonomy, subagents and long-running tasks in Executable feature handoff. Adapt this focused lab to the project data: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.  Required concepts: Autonomy boundaries, Context management, Delegation.
  - Deliverable: Agent autonomy, subagents and long-running tasks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A task specification, fixtures and acceptance checklist. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Agent autonomy, subagents and long-running tasks: Agent autonomy, subagents and long-running tasks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Another developer can identify completion without reading the original conversation.
- [ ] Agent autonomy, subagents and long-running tasks: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Test-first coding exercise

A learner needs to guide an assistant through a small bug fix.

**Data:** Use a parser with one reproducible Unicode bug. Use a fixed seed and keep evaluation cases separate.

**Output:** A failing regression test, bounded task prompt and reviewed fix.

**Effort:** 10h · Beginner → intermediate

- **Agent autonomy, subagents and long-running tasks:** Extend the project with Agent autonomy, subagents and long-running tasks in Test-first coding exercise. Adapt this focused lab to the project data: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.  Required concepts: Autonomy boundaries, Context management, Delegation.
  - Deliverable: Agent autonomy, subagents and long-running tasks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A failing regression test, bounded task prompt and reviewed fix. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Agent autonomy, subagents and long-running tasks: Agent autonomy, subagents and long-running tasks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The fix handles the failing case without weakening existing tests.
- [ ] Agent autonomy, subagents and long-running tasks: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### End-to-end verification handoff

A learner needs to prove a generated feature works beyond compilation.

**Data:** Use a local form/API/storage demo with one seeded integration bug. Use a fixed seed and keep evaluation cases separate.

**Output:** A verification plan and evidence report across the complete flow.

**Effort:** 10h · Beginner → intermediate

- **Agent autonomy, subagents and long-running tasks:** Extend the project with Agent autonomy, subagents and long-running tasks in End-to-end verification handoff. Adapt this focused lab to the project data: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.  Required concepts: Autonomy boundaries, Context management, Delegation.
  - Deliverable: Agent autonomy, subagents and long-running tasks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A verification plan and evidence report across the complete flow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Agent autonomy, subagents and long-running tasks: Agent autonomy, subagents and long-running tasks: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show input, persisted state and resulting UI behavior for success and failure.
- [ ] Agent autonomy, subagents and long-running tasks: Simulate a planner, implementer and reviewer handoff with written artifacts and recorded outputs; introduce one missing requirement and detect it during integration.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Review and verification

<a id="coding-review"></a>

### Read code, test, lint, type-check and review security

Treat generated code as a proposal that requires evidence.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

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
- Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check

**Completion checks**

- [ ] Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] For each planted contract or authorization bug, show a failing check before the repair and a passing check afterward; explain the relevant caller and trust boundary.
- [ ] Attach actual lint/type/test results where applicable and one complete user-flow observation; explicitly label checks that were not run.

#### Ten project recommendations

### Agent debugging learning journal

A learner needs to understand why repeated AI fixes fail.

**Data:** Use three small bugs with known root causes. Use a fixed seed and keep evaluation cases separate.

**Output:** A hypothesis log, minimal reproductions and verified fixes.

**Effort:** 10h · Beginner → intermediate

- **Read code, test, lint, type-check and review security:** Implement Read code, test, lint, type-check and review security in Agent debugging learning journal. Adapt this focused lab to the project data: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.  Required concepts: Review, Automated checks, Failure modes and evals.
  - Deliverable: Read code, test, lint, type-check and review security: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
  - Check: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; For each planted contract or authorization bug, show a failing check before the repair and a passing check afterward; explain the relevant caller and trust boundary.; Attach actual lint/type/test results where applicable and one complete user-flow observation; explicitly label checks that were not run.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A hypothesis log, minimal reproductions and verified fixes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Read code, test, lint, type-check and review security: Read code, test, lint, type-check and review security: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject changes that only hide errors and explain the actual cause of each bug.
- [ ] Read code, test, lint, type-check and review security: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; For each planted contract or authorization bug, show a failing check before the repair and a passing check afterward; explain the relevant caller and trust boundary.; Attach actual lint/type/test results where applicable and one complete user-flow observation; explicitly label checks that were not run.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Generated patch review clinic

A learner needs to detect plausible but broken generated code.

**Data:** Author five tiny patches with security and logic defects. Use a fixed seed and keep evaluation cases separate.

**Output:** A review report with reproducing tests and corrected patches.

**Effort:** 10h · Beginner → intermediate

- **Read code, test, lint, type-check and review security:** Implement Read code, test, lint, type-check and review security in Generated patch review clinic. Adapt this focused lab to the project data: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.  Required concepts: Review, Automated checks, Failure modes and evals.
  - Deliverable: Read code, test, lint, type-check and review security: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
  - Check: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; For each planted contract or authorization bug, show a failing check before the repair and a passing check afterward; explain the relevant caller and trust boundary.; Attach actual lint/type/test results where applicable and one complete user-flow observation; explicitly label checks that were not run.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A review report with reproducing tests and corrected patches. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Read code, test, lint, type-check and review security: Read code, test, lint, type-check and review security: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Each finding has a failing test that passes after the correction.
- [ ] Read code, test, lint, type-check and review security: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; For each planted contract or authorization bug, show a failing check before the repair and a passing check afterward; explain the relevant caller and trust boundary.; Attach actual lint/type/test results where applicable and one complete user-flow observation; explicitly label checks that were not run.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### End-to-end verification handoff

A learner needs to prove a generated feature works beyond compilation.

**Data:** Use a local form/API/storage demo with one seeded integration bug. Use a fixed seed and keep evaluation cases separate.

**Output:** A verification plan and evidence report across the complete flow.

**Effort:** 10h · Beginner → intermediate

- **Read code, test, lint, type-check and review security:** Implement Read code, test, lint, type-check and review security in End-to-end verification handoff. Adapt this focused lab to the project data: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.  Required concepts: Review, Automated checks, Failure modes and evals.
  - Deliverable: Read code, test, lint, type-check and review security: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
  - Check: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; For each planted contract or authorization bug, show a failing check before the repair and a passing check afterward; explain the relevant caller and trust boundary.; Attach actual lint/type/test results where applicable and one complete user-flow observation; explicitly label checks that were not run.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A verification plan and evidence report across the complete flow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Read code, test, lint, type-check and review security: Read code, test, lint, type-check and review security: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show input, persisted state and resulting UI behavior for success and failure.
- [ ] Read code, test, lint, type-check and review security: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; For each planted contract or authorization bug, show a failing check before the repair and a passing check afterward; explain the relevant caller and trust boundary.; Attach actual lint/type/test results where applicable and one complete user-flow observation; explicitly label checks that were not run.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Coding autonomy boundary lab

A team needs clear approval boundaries for agent actions.

**Data:** Create 20 proposed shell/file actions in a temporary sandbox. Use a fixed seed and keep evaluation cases separate.

**Output:** An AGENTS.md policy and a dry-run decision table.

**Effort:** 10h · Beginner → intermediate

- **Read code, test, lint, type-check and review security:** Extend the project with Read code, test, lint, type-check and review security in Coding autonomy boundary lab. Adapt this focused lab to the project data: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.  Required concepts: Review, Automated checks, Failure modes and evals.
  - Deliverable: Read code, test, lint, type-check and review security: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
  - Check: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; For each planted contract or authorization bug, show a failing check before the repair and a passing check afterward; explain the relevant caller and trust boundary.; Attach actual lint/type/test results where applicable and one complete user-flow observation; explicitly label checks that were not run.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An AGENTS.md policy and a dry-run decision table. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Read code, test, lint, type-check and review security: Read code, test, lint, type-check and review security: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Classify destructive actions consistently without executing them.
- [ ] Read code, test, lint, type-check and review security: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; For each planted contract or authorization bug, show a failing check before the repair and a passing check afterward; explain the relevant caller and trust boundary.; Attach actual lint/type/test results where applicable and one complete user-flow observation; explicitly label checks that were not run.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Repository context packager

A maintainer needs to provide relevant context without secrets.

**Data:** Use a small local demo repository with public and excluded files. Use a fixed seed and keep evaluation cases separate.

**Output:** An allowlisted context bundle and file provenance list.

**Effort:** 10h · Beginner → intermediate

- **Read code, test, lint, type-check and review security:** Extend the project with Read code, test, lint, type-check and review security in Repository context packager. Adapt this focused lab to the project data: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.  Required concepts: Review, Automated checks, Failure modes and evals.
  - Deliverable: Read code, test, lint, type-check and review security: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
  - Check: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; For each planted contract or authorization bug, show a failing check before the repair and a passing check afterward; explain the relevant caller and trust boundary.; Attach actual lint/type/test results where applicable and one complete user-flow observation; explicitly label checks that were not run.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An allowlisted context bundle and file provenance list. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Read code, test, lint, type-check and review security: Read code, test, lint, type-check and review security: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude fake secrets and generated folders; include required caller contracts.
- [ ] Read code, test, lint, type-check and review security: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; For each planted contract or authorization bug, show a failing check before the repair and a passing check afterward; explain the relevant caller and trust boundary.; Attach actual lint/type/test results where applicable and one complete user-flow observation; explicitly label checks that were not run.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Requirement-to-test tracker

A reviewer needs evidence that generated changes meet the request.

**Data:** Write ten requirements for a local data importer. Use a fixed seed and keep evaluation cases separate.

**Output:** A traceability matrix linking requirements, code and tests.

**Effort:** 10h · Beginner → intermediate

- **Read code, test, lint, type-check and review security:** Extend the project with Read code, test, lint, type-check and review security in Requirement-to-test tracker. Adapt this focused lab to the project data: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.  Required concepts: Review, Automated checks, Failure modes and evals.
  - Deliverable: Read code, test, lint, type-check and review security: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
  - Check: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; For each planted contract or authorization bug, show a failing check before the repair and a passing check afterward; explain the relevant caller and trust boundary.; Attach actual lint/type/test results where applicable and one complete user-flow observation; explicitly label checks that were not run.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A traceability matrix linking requirements, code and tests. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Read code, test, lint, type-check and review security: Read code, test, lint, type-check and review security: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Every requirement has an observable check and unrelated changes are identified.
- [ ] Read code, test, lint, type-check and review security: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; For each planted contract or authorization bug, show a failing check before the repair and a passing check afterward; explain the relevant caller and trust boundary.; Attach actual lint/type/test results where applicable and one complete user-flow observation; explicitly label checks that were not run.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Small-patch planning workbench

A maintainer needs manageable changes instead of one huge generated diff.

**Data:** Use a three-feature demo application backlog. Use a fixed seed and keep evaluation cases separate.

**Output:** A dependency-ordered task plan with independently testable patches.

**Effort:** 10h · Beginner → intermediate

- **Read code, test, lint, type-check and review security:** Extend the project with Read code, test, lint, type-check and review security in Small-patch planning workbench. Adapt this focused lab to the project data: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.  Required concepts: Review, Automated checks, Failure modes and evals.
  - Deliverable: Read code, test, lint, type-check and review security: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
  - Check: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; For each planted contract or authorization bug, show a failing check before the repair and a passing check afterward; explain the relevant caller and trust boundary.; Attach actual lint/type/test results where applicable and one complete user-flow observation; explicitly label checks that were not run.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A dependency-ordered task plan with independently testable patches. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Read code, test, lint, type-check and review security: Read code, test, lint, type-check and review security: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Each patch has a clear rollback and does not leave broken callers.
- [ ] Read code, test, lint, type-check and review security: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; For each planted contract or authorization bug, show a failing check before the repair and a passing check afterward; explain the relevant caller and trust boundary.; Attach actual lint/type/test results where applicable and one complete user-flow observation; explicitly label checks that were not run.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Executable feature handoff

A learner needs an AI coding task with observable completion criteria.

**Data:** Use a fictional notes-search feature and six user scenarios. Use a fixed seed and keep evaluation cases separate.

**Output:** A task specification, fixtures and acceptance checklist.

**Effort:** 10h · Beginner → intermediate

- **Read code, test, lint, type-check and review security:** Extend the project with Read code, test, lint, type-check and review security in Executable feature handoff. Adapt this focused lab to the project data: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.  Required concepts: Review, Automated checks, Failure modes and evals.
  - Deliverable: Read code, test, lint, type-check and review security: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
  - Check: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; For each planted contract or authorization bug, show a failing check before the repair and a passing check afterward; explain the relevant caller and trust boundary.; Attach actual lint/type/test results where applicable and one complete user-flow observation; explicitly label checks that were not run.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A task specification, fixtures and acceptance checklist. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Read code, test, lint, type-check and review security: Read code, test, lint, type-check and review security: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Another developer can identify completion without reading the original conversation.
- [ ] Read code, test, lint, type-check and review security: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; For each planted contract or authorization bug, show a failing check before the repair and a passing check afterward; explain the relevant caller and trust boundary.; Attach actual lint/type/test results where applicable and one complete user-flow observation; explicitly label checks that were not run.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Test-first coding exercise

A learner needs to guide an assistant through a small bug fix.

**Data:** Use a parser with one reproducible Unicode bug. Use a fixed seed and keep evaluation cases separate.

**Output:** A failing regression test, bounded task prompt and reviewed fix.

**Effort:** 10h · Beginner → intermediate

- **Read code, test, lint, type-check and review security:** Extend the project with Read code, test, lint, type-check and review security in Test-first coding exercise. Adapt this focused lab to the project data: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.  Required concepts: Review, Automated checks, Failure modes and evals.
  - Deliverable: Read code, test, lint, type-check and review security: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
  - Check: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; For each planted contract or authorization bug, show a failing check before the repair and a passing check afterward; explain the relevant caller and trust boundary.; Attach actual lint/type/test results where applicable and one complete user-flow observation; explicitly label checks that were not run.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A failing regression test, bounded task prompt and reviewed fix. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Read code, test, lint, type-check and review security: Read code, test, lint, type-check and review security: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The fix handles the failing case without weakening existing tests.
- [ ] Read code, test, lint, type-check and review security: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; For each planted contract or authorization bug, show a failing check before the repair and a passing check afterward; explain the relevant caller and trust boundary.; Attach actual lint/type/test results where applicable and one complete user-flow observation; explicitly label checks that were not run.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Coding tool contract simulator

An agent builder needs precise read/search/edit tool semantics.

**Data:** Use temporary text files and deterministic tool-call fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A bounded tool adapter with explicit errors.

**Effort:** 10h · Beginner → intermediate

- **Read code, test, lint, type-check and review security:** Extend the project with Read code, test, lint, type-check and review security in Coding tool contract simulator. Adapt this focused lab to the project data: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.  Required concepts: Review, Automated checks, Failure modes and evals.
  - Deliverable: Read code, test, lint, type-check and review security: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
  - Check: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; For each planted contract or authorization bug, show a failing check before the repair and a passing check afterward; explain the relevant caller and trust boundary.; Attach actual lint/type/test results where applicable and one complete user-flow observation; explicitly label checks that were not run.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bounded tool adapter with explicit errors. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Read code, test, lint, type-check and review security: Read code, test, lint, type-check and review security: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations; Evidence report with fixture IDs, commands, observed results and limitations for each acceptance check
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject traversal and out-of-scope writes and preserve files on failed edits.
- [ ] Read code, test, lint, type-check and review security: Review a deliberately flawed fixture patch, identify a contract bug and authorization bug, fix them manually and attach test/evaluation evidence.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.; For each planted contract or authorization bug, show a failing check before the repair and a passing check afterward; explain the relevant caller and trust boundary.; Attach actual lint/type/test results where applicable and one complete user-flow observation; explicitly label checks that were not run.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="coding-ci"></a>

### CI/CD integration, verification and iteration

Keep automation tied to working user outcomes and maintainable changes.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

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

### Test-first coding exercise

A learner needs to guide an assistant through a small bug fix.

**Data:** Use a parser with one reproducible Unicode bug. Use a fixed seed and keep evaluation cases separate.

**Output:** A failing regression test, bounded task prompt and reviewed fix.

**Effort:** 10h · Beginner → intermediate

- **CI/CD integration, verification and iteration:** Implement CI/CD integration, verification and iteration in Test-first coding exercise. Adapt this focused lab to the project data: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.  Required concepts: CI integration, Verification, Iteration.
  - Deliverable: CI/CD integration, verification and iteration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A failing regression test, bounded task prompt and reviewed fix. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · CI/CD integration, verification and iteration: CI/CD integration, verification and iteration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The fix handles the failing case without weakening existing tests.
- [ ] CI/CD integration, verification and iteration: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### End-to-end verification handoff

A learner needs to prove a generated feature works beyond compilation.

**Data:** Use a local form/API/storage demo with one seeded integration bug. Use a fixed seed and keep evaluation cases separate.

**Output:** A verification plan and evidence report across the complete flow.

**Effort:** 10h · Beginner → intermediate

- **CI/CD integration, verification and iteration:** Implement CI/CD integration, verification and iteration in End-to-end verification handoff. Adapt this focused lab to the project data: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.  Required concepts: CI integration, Verification, Iteration.
  - Deliverable: CI/CD integration, verification and iteration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A verification plan and evidence report across the complete flow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · CI/CD integration, verification and iteration: CI/CD integration, verification and iteration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show input, persisted state and resulting UI behavior for success and failure.
- [ ] CI/CD integration, verification and iteration: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Coding autonomy boundary lab

A team needs clear approval boundaries for agent actions.

**Data:** Create 20 proposed shell/file actions in a temporary sandbox. Use a fixed seed and keep evaluation cases separate.

**Output:** An AGENTS.md policy and a dry-run decision table.

**Effort:** 10h · Beginner → intermediate

- **CI/CD integration, verification and iteration:** Extend the project with CI/CD integration, verification and iteration in Coding autonomy boundary lab. Adapt this focused lab to the project data: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.  Required concepts: CI integration, Verification, Iteration.
  - Deliverable: CI/CD integration, verification and iteration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An AGENTS.md policy and a dry-run decision table. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · CI/CD integration, verification and iteration: CI/CD integration, verification and iteration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Classify destructive actions consistently without executing them.
- [ ] CI/CD integration, verification and iteration: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Repository context packager

A maintainer needs to provide relevant context without secrets.

**Data:** Use a small local demo repository with public and excluded files. Use a fixed seed and keep evaluation cases separate.

**Output:** An allowlisted context bundle and file provenance list.

**Effort:** 10h · Beginner → intermediate

- **CI/CD integration, verification and iteration:** Extend the project with CI/CD integration, verification and iteration in Repository context packager. Adapt this focused lab to the project data: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.  Required concepts: CI integration, Verification, Iteration.
  - Deliverable: CI/CD integration, verification and iteration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An allowlisted context bundle and file provenance list. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · CI/CD integration, verification and iteration: CI/CD integration, verification and iteration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude fake secrets and generated folders; include required caller contracts.
- [ ] CI/CD integration, verification and iteration: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Agent debugging learning journal

A learner needs to understand why repeated AI fixes fail.

**Data:** Use three small bugs with known root causes. Use a fixed seed and keep evaluation cases separate.

**Output:** A hypothesis log, minimal reproductions and verified fixes.

**Effort:** 10h · Beginner → intermediate

- **CI/CD integration, verification and iteration:** Extend the project with CI/CD integration, verification and iteration in Agent debugging learning journal. Adapt this focused lab to the project data: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.  Required concepts: CI integration, Verification, Iteration.
  - Deliverable: CI/CD integration, verification and iteration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A hypothesis log, minimal reproductions and verified fixes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · CI/CD integration, verification and iteration: CI/CD integration, verification and iteration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject changes that only hide errors and explain the actual cause of each bug.
- [ ] CI/CD integration, verification and iteration: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Generated patch review clinic

A learner needs to detect plausible but broken generated code.

**Data:** Author five tiny patches with security and logic defects. Use a fixed seed and keep evaluation cases separate.

**Output:** A review report with reproducing tests and corrected patches.

**Effort:** 10h · Beginner → intermediate

- **CI/CD integration, verification and iteration:** Extend the project with CI/CD integration, verification and iteration in Generated patch review clinic. Adapt this focused lab to the project data: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.  Required concepts: CI integration, Verification, Iteration.
  - Deliverable: CI/CD integration, verification and iteration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A review report with reproducing tests and corrected patches. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · CI/CD integration, verification and iteration: CI/CD integration, verification and iteration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Each finding has a failing test that passes after the correction.
- [ ] CI/CD integration, verification and iteration: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Requirement-to-test tracker

A reviewer needs evidence that generated changes meet the request.

**Data:** Write ten requirements for a local data importer. Use a fixed seed and keep evaluation cases separate.

**Output:** A traceability matrix linking requirements, code and tests.

**Effort:** 10h · Beginner → intermediate

- **CI/CD integration, verification and iteration:** Extend the project with CI/CD integration, verification and iteration in Requirement-to-test tracker. Adapt this focused lab to the project data: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.  Required concepts: CI integration, Verification, Iteration.
  - Deliverable: CI/CD integration, verification and iteration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A traceability matrix linking requirements, code and tests. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · CI/CD integration, verification and iteration: CI/CD integration, verification and iteration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Every requirement has an observable check and unrelated changes are identified.
- [ ] CI/CD integration, verification and iteration: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Small-patch planning workbench

A maintainer needs manageable changes instead of one huge generated diff.

**Data:** Use a three-feature demo application backlog. Use a fixed seed and keep evaluation cases separate.

**Output:** A dependency-ordered task plan with independently testable patches.

**Effort:** 10h · Beginner → intermediate

- **CI/CD integration, verification and iteration:** Extend the project with CI/CD integration, verification and iteration in Small-patch planning workbench. Adapt this focused lab to the project data: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.  Required concepts: CI integration, Verification, Iteration.
  - Deliverable: CI/CD integration, verification and iteration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A dependency-ordered task plan with independently testable patches. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · CI/CD integration, verification and iteration: CI/CD integration, verification and iteration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Each patch has a clear rollback and does not leave broken callers.
- [ ] CI/CD integration, verification and iteration: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Executable feature handoff

A learner needs an AI coding task with observable completion criteria.

**Data:** Use a fictional notes-search feature and six user scenarios. Use a fixed seed and keep evaluation cases separate.

**Output:** A task specification, fixtures and acceptance checklist.

**Effort:** 10h · Beginner → intermediate

- **CI/CD integration, verification and iteration:** Extend the project with CI/CD integration, verification and iteration in Executable feature handoff. Adapt this focused lab to the project data: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.  Required concepts: CI integration, Verification, Iteration.
  - Deliverable: CI/CD integration, verification and iteration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A task specification, fixtures and acceptance checklist. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · CI/CD integration, verification and iteration: CI/CD integration, verification and iteration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Another developer can identify completion without reading the original conversation.
- [ ] CI/CD integration, verification and iteration: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Coding tool contract simulator

An agent builder needs precise read/search/edit tool semantics.

**Data:** Use temporary text files and deterministic tool-call fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A bounded tool adapter with explicit errors.

**Effort:** 10h · Beginner → intermediate

- **CI/CD integration, verification and iteration:** Extend the project with CI/CD integration, verification and iteration in Coding tool contract simulator. Adapt this focused lab to the project data: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.  Required concepts: CI integration, Verification, Iteration.
  - Deliverable: CI/CD integration, verification and iteration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bounded tool adapter with explicit errors. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · CI/CD integration, verification and iteration: CI/CD integration, verification and iteration: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject traversal and out-of-scope writes and preserve files on failed edits.
- [ ] CI/CD integration, verification and iteration: Create a minimal CI workflow for a sample app and a verification report covering a complete user flow, one failure and remaining external setup.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Verifiable coding workflows

<a id="coding-specification-review"></a>

### Acceptance tests, change scope and evidence-based review

Make coding-agent work reviewable by defining a concrete problem, bounded changes and observable completion criteria.

**Priority:** Essential · **Study:** 3h · **Practice:** 4h

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

### Requirement-to-test tracker

A reviewer needs evidence that generated changes meet the request.

**Data:** Write ten requirements for a local data importer. Use a fixed seed and keep evaluation cases separate.

**Output:** A traceability matrix linking requirements, code and tests.

**Effort:** 10h · Beginner → intermediate

- **Acceptance tests, change scope and evidence-based review:** Implement Acceptance tests, change scope and evidence-based review in Requirement-to-test tracker. Adapt this focused lab to the project data: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.  Required concepts: Problem and counterexample, Bounded context, Acceptance versus implementation checks, Diff and dependency review, Verification evidence.
  - Deliverable: Acceptance tests, change scope and evidence-based review: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A traceability matrix linking requirements, code and tests. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Acceptance tests, change scope and evidence-based review: Acceptance tests, change scope and evidence-based review: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Every requirement has an observable check and unrelated changes are identified.
- [ ] Acceptance tests, change scope and evidence-based review: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Coding autonomy boundary lab

A team needs clear approval boundaries for agent actions.

**Data:** Create 20 proposed shell/file actions in a temporary sandbox. Use a fixed seed and keep evaluation cases separate.

**Output:** An AGENTS.md policy and a dry-run decision table.

**Effort:** 10h · Beginner → intermediate

- **Acceptance tests, change scope and evidence-based review:** Extend the project with Acceptance tests, change scope and evidence-based review in Coding autonomy boundary lab. Adapt this focused lab to the project data: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.  Required concepts: Problem and counterexample, Bounded context, Acceptance versus implementation checks, Diff and dependency review, Verification evidence.
  - Deliverable: Acceptance tests, change scope and evidence-based review: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An AGENTS.md policy and a dry-run decision table. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Acceptance tests, change scope and evidence-based review: Acceptance tests, change scope and evidence-based review: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Classify destructive actions consistently without executing them.
- [ ] Acceptance tests, change scope and evidence-based review: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Repository context packager

A maintainer needs to provide relevant context without secrets.

**Data:** Use a small local demo repository with public and excluded files. Use a fixed seed and keep evaluation cases separate.

**Output:** An allowlisted context bundle and file provenance list.

**Effort:** 10h · Beginner → intermediate

- **Acceptance tests, change scope and evidence-based review:** Extend the project with Acceptance tests, change scope and evidence-based review in Repository context packager. Adapt this focused lab to the project data: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.  Required concepts: Problem and counterexample, Bounded context, Acceptance versus implementation checks, Diff and dependency review, Verification evidence.
  - Deliverable: Acceptance tests, change scope and evidence-based review: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An allowlisted context bundle and file provenance list. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Acceptance tests, change scope and evidence-based review: Acceptance tests, change scope and evidence-based review: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude fake secrets and generated folders; include required caller contracts.
- [ ] Acceptance tests, change scope and evidence-based review: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Agent debugging learning journal

A learner needs to understand why repeated AI fixes fail.

**Data:** Use three small bugs with known root causes. Use a fixed seed and keep evaluation cases separate.

**Output:** A hypothesis log, minimal reproductions and verified fixes.

**Effort:** 10h · Beginner → intermediate

- **Acceptance tests, change scope and evidence-based review:** Extend the project with Acceptance tests, change scope and evidence-based review in Agent debugging learning journal. Adapt this focused lab to the project data: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.  Required concepts: Problem and counterexample, Bounded context, Acceptance versus implementation checks, Diff and dependency review, Verification evidence.
  - Deliverable: Acceptance tests, change scope and evidence-based review: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A hypothesis log, minimal reproductions and verified fixes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Acceptance tests, change scope and evidence-based review: Acceptance tests, change scope and evidence-based review: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject changes that only hide errors and explain the actual cause of each bug.
- [ ] Acceptance tests, change scope and evidence-based review: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Generated patch review clinic

A learner needs to detect plausible but broken generated code.

**Data:** Author five tiny patches with security and logic defects. Use a fixed seed and keep evaluation cases separate.

**Output:** A review report with reproducing tests and corrected patches.

**Effort:** 10h · Beginner → intermediate

- **Acceptance tests, change scope and evidence-based review:** Extend the project with Acceptance tests, change scope and evidence-based review in Generated patch review clinic. Adapt this focused lab to the project data: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.  Required concepts: Problem and counterexample, Bounded context, Acceptance versus implementation checks, Diff and dependency review, Verification evidence.
  - Deliverable: Acceptance tests, change scope and evidence-based review: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A review report with reproducing tests and corrected patches. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Acceptance tests, change scope and evidence-based review: Acceptance tests, change scope and evidence-based review: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Each finding has a failing test that passes after the correction.
- [ ] Acceptance tests, change scope and evidence-based review: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Small-patch planning workbench

A maintainer needs manageable changes instead of one huge generated diff.

**Data:** Use a three-feature demo application backlog. Use a fixed seed and keep evaluation cases separate.

**Output:** A dependency-ordered task plan with independently testable patches.

**Effort:** 10h · Beginner → intermediate

- **Acceptance tests, change scope and evidence-based review:** Extend the project with Acceptance tests, change scope and evidence-based review in Small-patch planning workbench. Adapt this focused lab to the project data: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.  Required concepts: Problem and counterexample, Bounded context, Acceptance versus implementation checks, Diff and dependency review, Verification evidence.
  - Deliverable: Acceptance tests, change scope and evidence-based review: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A dependency-ordered task plan with independently testable patches. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Acceptance tests, change scope and evidence-based review: Acceptance tests, change scope and evidence-based review: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Each patch has a clear rollback and does not leave broken callers.
- [ ] Acceptance tests, change scope and evidence-based review: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Executable feature handoff

A learner needs an AI coding task with observable completion criteria.

**Data:** Use a fictional notes-search feature and six user scenarios. Use a fixed seed and keep evaluation cases separate.

**Output:** A task specification, fixtures and acceptance checklist.

**Effort:** 10h · Beginner → intermediate

- **Acceptance tests, change scope and evidence-based review:** Extend the project with Acceptance tests, change scope and evidence-based review in Executable feature handoff. Adapt this focused lab to the project data: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.  Required concepts: Problem and counterexample, Bounded context, Acceptance versus implementation checks, Diff and dependency review, Verification evidence.
  - Deliverable: Acceptance tests, change scope and evidence-based review: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A task specification, fixtures and acceptance checklist. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Acceptance tests, change scope and evidence-based review: Acceptance tests, change scope and evidence-based review: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Another developer can identify completion without reading the original conversation.
- [ ] Acceptance tests, change scope and evidence-based review: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Test-first coding exercise

A learner needs to guide an assistant through a small bug fix.

**Data:** Use a parser with one reproducible Unicode bug. Use a fixed seed and keep evaluation cases separate.

**Output:** A failing regression test, bounded task prompt and reviewed fix.

**Effort:** 10h · Beginner → intermediate

- **Acceptance tests, change scope and evidence-based review:** Extend the project with Acceptance tests, change scope and evidence-based review in Test-first coding exercise. Adapt this focused lab to the project data: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.  Required concepts: Problem and counterexample, Bounded context, Acceptance versus implementation checks, Diff and dependency review, Verification evidence.
  - Deliverable: Acceptance tests, change scope and evidence-based review: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A failing regression test, bounded task prompt and reviewed fix. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Acceptance tests, change scope and evidence-based review: Acceptance tests, change scope and evidence-based review: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The fix handles the failing case without weakening existing tests.
- [ ] Acceptance tests, change scope and evidence-based review: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Coding tool contract simulator

An agent builder needs precise read/search/edit tool semantics.

**Data:** Use temporary text files and deterministic tool-call fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A bounded tool adapter with explicit errors.

**Effort:** 10h · Beginner → intermediate

- **Acceptance tests, change scope and evidence-based review:** Extend the project with Acceptance tests, change scope and evidence-based review in Coding tool contract simulator. Adapt this focused lab to the project data: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.  Required concepts: Problem and counterexample, Bounded context, Acceptance versus implementation checks, Diff and dependency review, Verification evidence.
  - Deliverable: Acceptance tests, change scope and evidence-based review: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bounded tool adapter with explicit errors. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Acceptance tests, change scope and evidence-based review: Acceptance tests, change scope and evidence-based review: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject traversal and out-of-scope writes and preserve files on failed edits.
- [ ] Acceptance tests, change scope and evidence-based review: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### End-to-end verification handoff

A learner needs to prove a generated feature works beyond compilation.

**Data:** Use a local form/API/storage demo with one seeded integration bug. Use a fixed seed and keep evaluation cases separate.

**Output:** A verification plan and evidence report across the complete flow.

**Effort:** 10h · Beginner → intermediate

- **Acceptance tests, change scope and evidence-based review:** Extend the project with Acceptance tests, change scope and evidence-based review in End-to-end verification handoff. Adapt this focused lab to the project data: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.  Required concepts: Problem and counterexample, Bounded context, Acceptance versus implementation checks, Diff and dependency review, Verification evidence.
  - Deliverable: Acceptance tests, change scope and evidence-based review: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A verification plan and evidence report across the complete flow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Acceptance tests, change scope and evidence-based review: Acceptance tests, change scope and evidence-based review: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show input, persisted state and resulting UI behavior for success and failure.
- [ ] Acceptance tests, change scope and evidence-based review: Prepare a small reproducible ingestion bug, a bounded task specification and behaviour-level acceptance checks. Implement it manually or with an available coding assistant, then review the diff and produce a verification note with explicit limits.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="coding-autonomy-controls"></a>

### Tool permissions, untrusted context and recoverable task steps

Allow useful autonomous work while keeping credentials, side effects and review boundaries explicit.

**Priority:** Essential · **Study:** 3h · **Practice:** 4h

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

### Coding autonomy boundary lab

A team needs clear approval boundaries for agent actions.

**Data:** Create 20 proposed shell/file actions in a temporary sandbox. Use a fixed seed and keep evaluation cases separate.

**Output:** An AGENTS.md policy and a dry-run decision table.

**Effort:** 10h · Beginner → intermediate

- **Tool permissions, untrusted context and recoverable task steps:** Implement Tool permissions, untrusted context and recoverable task steps in Coding autonomy boundary lab. Adapt this focused lab to the project data: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.  Required concepts: Capability scope, Untrusted repository content, Checkpointed task decomposition, Secret handling, Review and escalation rules.
  - Deliverable: Tool permissions, untrusted context and recoverable task steps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An AGENTS.md policy and a dry-run decision table. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tool permissions, untrusted context and recoverable task steps: Tool permissions, untrusted context and recoverable task steps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Classify destructive actions consistently without executing them.
- [ ] Tool permissions, untrusted context and recoverable task steps: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Repository context packager

A maintainer needs to provide relevant context without secrets.

**Data:** Use a small local demo repository with public and excluded files. Use a fixed seed and keep evaluation cases separate.

**Output:** An allowlisted context bundle and file provenance list.

**Effort:** 10h · Beginner → intermediate

- **Tool permissions, untrusted context and recoverable task steps:** Extend the project with Tool permissions, untrusted context and recoverable task steps in Repository context packager. Adapt this focused lab to the project data: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.  Required concepts: Capability scope, Untrusted repository content, Checkpointed task decomposition, Secret handling, Review and escalation rules.
  - Deliverable: Tool permissions, untrusted context and recoverable task steps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An allowlisted context bundle and file provenance list. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tool permissions, untrusted context and recoverable task steps: Tool permissions, untrusted context and recoverable task steps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude fake secrets and generated folders; include required caller contracts.
- [ ] Tool permissions, untrusted context and recoverable task steps: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Agent debugging learning journal

A learner needs to understand why repeated AI fixes fail.

**Data:** Use three small bugs with known root causes. Use a fixed seed and keep evaluation cases separate.

**Output:** A hypothesis log, minimal reproductions and verified fixes.

**Effort:** 10h · Beginner → intermediate

- **Tool permissions, untrusted context and recoverable task steps:** Extend the project with Tool permissions, untrusted context and recoverable task steps in Agent debugging learning journal. Adapt this focused lab to the project data: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.  Required concepts: Capability scope, Untrusted repository content, Checkpointed task decomposition, Secret handling, Review and escalation rules.
  - Deliverable: Tool permissions, untrusted context and recoverable task steps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A hypothesis log, minimal reproductions and verified fixes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tool permissions, untrusted context and recoverable task steps: Tool permissions, untrusted context and recoverable task steps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject changes that only hide errors and explain the actual cause of each bug.
- [ ] Tool permissions, untrusted context and recoverable task steps: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Generated patch review clinic

A learner needs to detect plausible but broken generated code.

**Data:** Author five tiny patches with security and logic defects. Use a fixed seed and keep evaluation cases separate.

**Output:** A review report with reproducing tests and corrected patches.

**Effort:** 10h · Beginner → intermediate

- **Tool permissions, untrusted context and recoverable task steps:** Extend the project with Tool permissions, untrusted context and recoverable task steps in Generated patch review clinic. Adapt this focused lab to the project data: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.  Required concepts: Capability scope, Untrusted repository content, Checkpointed task decomposition, Secret handling, Review and escalation rules.
  - Deliverable: Tool permissions, untrusted context and recoverable task steps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A review report with reproducing tests and corrected patches. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tool permissions, untrusted context and recoverable task steps: Tool permissions, untrusted context and recoverable task steps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Each finding has a failing test that passes after the correction.
- [ ] Tool permissions, untrusted context and recoverable task steps: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Requirement-to-test tracker

A reviewer needs evidence that generated changes meet the request.

**Data:** Write ten requirements for a local data importer. Use a fixed seed and keep evaluation cases separate.

**Output:** A traceability matrix linking requirements, code and tests.

**Effort:** 10h · Beginner → intermediate

- **Tool permissions, untrusted context and recoverable task steps:** Extend the project with Tool permissions, untrusted context and recoverable task steps in Requirement-to-test tracker. Adapt this focused lab to the project data: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.  Required concepts: Capability scope, Untrusted repository content, Checkpointed task decomposition, Secret handling, Review and escalation rules.
  - Deliverable: Tool permissions, untrusted context and recoverable task steps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A traceability matrix linking requirements, code and tests. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tool permissions, untrusted context and recoverable task steps: Tool permissions, untrusted context and recoverable task steps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Every requirement has an observable check and unrelated changes are identified.
- [ ] Tool permissions, untrusted context and recoverable task steps: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Small-patch planning workbench

A maintainer needs manageable changes instead of one huge generated diff.

**Data:** Use a three-feature demo application backlog. Use a fixed seed and keep evaluation cases separate.

**Output:** A dependency-ordered task plan with independently testable patches.

**Effort:** 10h · Beginner → intermediate

- **Tool permissions, untrusted context and recoverable task steps:** Extend the project with Tool permissions, untrusted context and recoverable task steps in Small-patch planning workbench. Adapt this focused lab to the project data: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.  Required concepts: Capability scope, Untrusted repository content, Checkpointed task decomposition, Secret handling, Review and escalation rules.
  - Deliverable: Tool permissions, untrusted context and recoverable task steps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A dependency-ordered task plan with independently testable patches. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tool permissions, untrusted context and recoverable task steps: Tool permissions, untrusted context and recoverable task steps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Each patch has a clear rollback and does not leave broken callers.
- [ ] Tool permissions, untrusted context and recoverable task steps: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Executable feature handoff

A learner needs an AI coding task with observable completion criteria.

**Data:** Use a fictional notes-search feature and six user scenarios. Use a fixed seed and keep evaluation cases separate.

**Output:** A task specification, fixtures and acceptance checklist.

**Effort:** 10h · Beginner → intermediate

- **Tool permissions, untrusted context and recoverable task steps:** Extend the project with Tool permissions, untrusted context and recoverable task steps in Executable feature handoff. Adapt this focused lab to the project data: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.  Required concepts: Capability scope, Untrusted repository content, Checkpointed task decomposition, Secret handling, Review and escalation rules.
  - Deliverable: Tool permissions, untrusted context and recoverable task steps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A task specification, fixtures and acceptance checklist. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tool permissions, untrusted context and recoverable task steps: Tool permissions, untrusted context and recoverable task steps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Another developer can identify completion without reading the original conversation.
- [ ] Tool permissions, untrusted context and recoverable task steps: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Test-first coding exercise

A learner needs to guide an assistant through a small bug fix.

**Data:** Use a parser with one reproducible Unicode bug. Use a fixed seed and keep evaluation cases separate.

**Output:** A failing regression test, bounded task prompt and reviewed fix.

**Effort:** 10h · Beginner → intermediate

- **Tool permissions, untrusted context and recoverable task steps:** Extend the project with Tool permissions, untrusted context and recoverable task steps in Test-first coding exercise. Adapt this focused lab to the project data: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.  Required concepts: Capability scope, Untrusted repository content, Checkpointed task decomposition, Secret handling, Review and escalation rules.
  - Deliverable: Tool permissions, untrusted context and recoverable task steps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A failing regression test, bounded task prompt and reviewed fix. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tool permissions, untrusted context and recoverable task steps: Tool permissions, untrusted context and recoverable task steps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The fix handles the failing case without weakening existing tests.
- [ ] Tool permissions, untrusted context and recoverable task steps: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Coding tool contract simulator

An agent builder needs precise read/search/edit tool semantics.

**Data:** Use temporary text files and deterministic tool-call fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A bounded tool adapter with explicit errors.

**Effort:** 10h · Beginner → intermediate

- **Tool permissions, untrusted context and recoverable task steps:** Extend the project with Tool permissions, untrusted context and recoverable task steps in Coding tool contract simulator. Adapt this focused lab to the project data: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.  Required concepts: Capability scope, Untrusted repository content, Checkpointed task decomposition, Secret handling, Review and escalation rules.
  - Deliverable: Tool permissions, untrusted context and recoverable task steps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bounded tool adapter with explicit errors. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tool permissions, untrusted context and recoverable task steps: Tool permissions, untrusted context and recoverable task steps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject traversal and out-of-scope writes and preserve files on failed edits.
- [ ] Tool permissions, untrusted context and recoverable task steps: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### End-to-end verification handoff

A learner needs to prove a generated feature works beyond compilation.

**Data:** Use a local form/API/storage demo with one seeded integration bug. Use a fixed seed and keep evaluation cases separate.

**Output:** A verification plan and evidence report across the complete flow.

**Effort:** 10h · Beginner → intermediate

- **Tool permissions, untrusted context and recoverable task steps:** Extend the project with Tool permissions, untrusted context and recoverable task steps in End-to-end verification handoff. Adapt this focused lab to the project data: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.  Required concepts: Capability scope, Untrusted repository content, Checkpointed task decomposition, Secret handling, Review and escalation rules.
  - Deliverable: Tool permissions, untrusted context and recoverable task steps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A verification plan and evidence report across the complete flow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Tool permissions, untrusted context and recoverable task steps: Tool permissions, untrusted context and recoverable task steps: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show input, persisted state and resulting UI behavior for success and failure.
- [ ] Tool permissions, untrusted context and recoverable task steps: Write AGENTS.md and a permissions matrix for a toy repository. Run an injected-fixture exercise, simulate an interrupted task from a checkpoint and produce a review checklist that distinguishes local verification from deployment authority.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Stage checkpoint

<a id="checkpoint-coding-agents"></a>

### Coding-agent verification checkpoint

Demonstrate readiness through a reproducible practical handoff. Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.

**Priority:** Essential · **Study:** 1h · **Practice:** 6h

**Prerequisites:** [Problem definition, research and specifications](coding-agents.md#coding-specifications), [AGENTS.md, project instructions, tools, plugins and hooks](coding-agents.md#coding-context), [Agent autonomy, subagents and long-running tasks](coding-agents.md#coding-autonomy), [Read code, test, lint, type-check and review security](coding-agents.md#coding-review), [CI/CD integration, verification and iteration](coding-agents.md#coding-ci), [Acceptance tests, change scope and evidence-based review](coding-agents.md#coding-specification-review), [Tool permissions, untrusted context and recoverable task steps](coding-agents.md#coding-autonomy-controls) Navigation is unrestricted.

#### Concepts

- [ ] **Define the success contract:** Write observable checks before implementation so success is not just a plausible demonstration.
  - Example: Turn this task into a numbered acceptance checklist: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.
  - Videos:
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on define the success contract. Then reproduce the lesson example: Turn this task into a numbered acceptance checklist: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [ ] **Reproduce the baseline:** Keep a simple reference output and deterministic inputs so changes can be compared honestly.
  - Example: Run a fixed input twice and compare saved outputs with the documented baseline.
  - Videos:
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on reproduce the baseline. Then reproduce the lesson example: Run a fixed input twice and compare saved outputs with the documented baseline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [ ] **Test a failure boundary:** A working happy path does not establish robustness to malformed data or dependency failures.
  - Example: Inject one malformed input and one controlled failure, then record the resulting state.
  - Videos:
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on test a failure boundary. Then reproduce the lesson example: Inject one malformed input and one controlled failure, then record the resulting state.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [ ] **Explain the decisions:** Describe why each technique was chosen and what evidence would make you choose differently.
  - Example: Write a short decision note comparing the chosen approach with one simpler alternative.
  - Videos:
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on explain the decisions. Then reproduce the lesson example: Write a short decision note comparing the chosen approach with one simpler alternative.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=g8um2AEf5ZA
- [ ] **Hand off the evidence:** Another learner must be able to reproduce the result from your instructions and supplied inputs.
  - Example: Ask a teammate to run the README commands in a clean environment and record missing steps.
  - Videos:
    - [The future of software engineering](https://www.youtube.com/watch?v=g8um2AEf5ZA) · DeepLearning.AI · Andrew Ng · Engineering talk
      - Explains: AI coding agents and the engineering skills needed to direct and verify them.
      - Useful because: Use the talk as context, then apply the supplied specification and verification labs.
      - Watch for: Focus on hand off the evidence. Then reproduce the lesson example: Ask a teammate to run the README commands in a clean environment and record missing steps.
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

#### Coding-agent verification checkpoint

Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.

**Deliverables**

- Runnable project and reproducible input fixtures
- README, results and decision notes
- Failure evidence and clean-start instructions

**Completion checks**

- [ ] Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.
- [ ] Explain the code and results without relying on an AI-generated summary.
- [ ] A teammate can reproduce the demo without paid credentials.

#### Ten project recommendations

### Coding autonomy boundary lab

A team needs clear approval boundaries for agent actions.

**Data:** Create 20 proposed shell/file actions in a temporary sandbox. Use a fixed seed and keep evaluation cases separate.

**Output:** An AGENTS.md policy and a dry-run decision table.

**Effort:** 10h · Beginner → intermediate

- **Coding-agent verification checkpoint:** Extend the project with Coding-agent verification checkpoint in Coding autonomy boundary lab. Adapt this focused lab to the project data: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Coding-agent verification checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An AGENTS.md policy and a dry-run decision table. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Coding-agent verification checkpoint: Coding-agent verification checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Classify destructive actions consistently without executing them.
- [ ] Coding-agent verification checkpoint: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Repository context packager

A maintainer needs to provide relevant context without secrets.

**Data:** Use a small local demo repository with public and excluded files. Use a fixed seed and keep evaluation cases separate.

**Output:** An allowlisted context bundle and file provenance list.

**Effort:** 10h · Beginner → intermediate

- **Coding-agent verification checkpoint:** Extend the project with Coding-agent verification checkpoint in Repository context packager. Adapt this focused lab to the project data: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Coding-agent verification checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An allowlisted context bundle and file provenance list. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Coding-agent verification checkpoint: Coding-agent verification checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Exclude fake secrets and generated folders; include required caller contracts.
- [ ] Coding-agent verification checkpoint: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Agent debugging learning journal

A learner needs to understand why repeated AI fixes fail.

**Data:** Use three small bugs with known root causes. Use a fixed seed and keep evaluation cases separate.

**Output:** A hypothesis log, minimal reproductions and verified fixes.

**Effort:** 10h · Beginner → intermediate

- **Coding-agent verification checkpoint:** Extend the project with Coding-agent verification checkpoint in Agent debugging learning journal. Adapt this focused lab to the project data: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Coding-agent verification checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A hypothesis log, minimal reproductions and verified fixes. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Coding-agent verification checkpoint: Coding-agent verification checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject changes that only hide errors and explain the actual cause of each bug.
- [ ] Coding-agent verification checkpoint: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Generated patch review clinic

A learner needs to detect plausible but broken generated code.

**Data:** Author five tiny patches with security and logic defects. Use a fixed seed and keep evaluation cases separate.

**Output:** A review report with reproducing tests and corrected patches.

**Effort:** 10h · Beginner → intermediate

- **Coding-agent verification checkpoint:** Extend the project with Coding-agent verification checkpoint in Generated patch review clinic. Adapt this focused lab to the project data: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Coding-agent verification checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A review report with reproducing tests and corrected patches. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Coding-agent verification checkpoint: Coding-agent verification checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Each finding has a failing test that passes after the correction.
- [ ] Coding-agent verification checkpoint: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Requirement-to-test tracker

A reviewer needs evidence that generated changes meet the request.

**Data:** Write ten requirements for a local data importer. Use a fixed seed and keep evaluation cases separate.

**Output:** A traceability matrix linking requirements, code and tests.

**Effort:** 10h · Beginner → intermediate

- **Coding-agent verification checkpoint:** Extend the project with Coding-agent verification checkpoint in Requirement-to-test tracker. Adapt this focused lab to the project data: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Coding-agent verification checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A traceability matrix linking requirements, code and tests. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Coding-agent verification checkpoint: Coding-agent verification checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Every requirement has an observable check and unrelated changes are identified.
- [ ] Coding-agent verification checkpoint: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Small-patch planning workbench

A maintainer needs manageable changes instead of one huge generated diff.

**Data:** Use a three-feature demo application backlog. Use a fixed seed and keep evaluation cases separate.

**Output:** A dependency-ordered task plan with independently testable patches.

**Effort:** 10h · Beginner → intermediate

- **Coding-agent verification checkpoint:** Extend the project with Coding-agent verification checkpoint in Small-patch planning workbench. Adapt this focused lab to the project data: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Coding-agent verification checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A dependency-ordered task plan with independently testable patches. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Coding-agent verification checkpoint: Coding-agent verification checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Each patch has a clear rollback and does not leave broken callers.
- [ ] Coding-agent verification checkpoint: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Executable feature handoff

A learner needs an AI coding task with observable completion criteria.

**Data:** Use a fictional notes-search feature and six user scenarios. Use a fixed seed and keep evaluation cases separate.

**Output:** A task specification, fixtures and acceptance checklist.

**Effort:** 10h · Beginner → intermediate

- **Coding-agent verification checkpoint:** Extend the project with Coding-agent verification checkpoint in Executable feature handoff. Adapt this focused lab to the project data: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Coding-agent verification checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A task specification, fixtures and acceptance checklist. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Coding-agent verification checkpoint: Coding-agent verification checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Another developer can identify completion without reading the original conversation.
- [ ] Coding-agent verification checkpoint: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Test-first coding exercise

A learner needs to guide an assistant through a small bug fix.

**Data:** Use a parser with one reproducible Unicode bug. Use a fixed seed and keep evaluation cases separate.

**Output:** A failing regression test, bounded task prompt and reviewed fix.

**Effort:** 10h · Beginner → intermediate

- **Coding-agent verification checkpoint:** Extend the project with Coding-agent verification checkpoint in Test-first coding exercise. Adapt this focused lab to the project data: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Coding-agent verification checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A failing regression test, bounded task prompt and reviewed fix. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Coding-agent verification checkpoint: Coding-agent verification checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] The fix handles the failing case without weakening existing tests.
- [ ] Coding-agent verification checkpoint: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Coding tool contract simulator

An agent builder needs precise read/search/edit tool semantics.

**Data:** Use temporary text files and deterministic tool-call fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A bounded tool adapter with explicit errors.

**Effort:** 10h · Beginner → intermediate

- **Coding-agent verification checkpoint:** Extend the project with Coding-agent verification checkpoint in Coding tool contract simulator. Adapt this focused lab to the project data: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Coding-agent verification checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A bounded tool adapter with explicit errors. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Coding-agent verification checkpoint: Coding-agent verification checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject traversal and out-of-scope writes and preserve files on failed edits.
- [ ] Coding-agent verification checkpoint: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### End-to-end verification handoff

A learner needs to prove a generated feature works beyond compilation.

**Data:** Use a local form/API/storage demo with one seeded integration bug. Use a fixed seed and keep evaluation cases separate.

**Output:** A verification plan and evidence report across the complete flow.

**Effort:** 10h · Beginner → intermediate

- **Coding-agent verification checkpoint:** Extend the project with Coding-agent verification checkpoint in End-to-end verification handoff. Adapt this focused lab to the project data: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Coding-agent verification checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A verification plan and evidence report across the complete flow. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Coding-agent verification checkpoint: Coding-agent verification checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show input, persisted state and resulting UI behavior for success and failure.
- [ ] Coding-agent verification checkpoint: Write a bounded implementation specification and AGENTS.md, review a generated change and demonstrate unit, integration, type and security checks. Explain a discovered defect and provide reproducible evidence of the correction.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

