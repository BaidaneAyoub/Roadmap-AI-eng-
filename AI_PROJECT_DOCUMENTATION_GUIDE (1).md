# AI Project Documentation Guide

## Purpose

Documentation is a core engineering asset in an AI project.

AI systems combine **business requirements, software engineering, data, models, prompts, APIs, security, evaluation, and operations**. Without clear documentation, teams can easily build the wrong system, lose important decisions, create inconsistent behavior, or make the project difficult to maintain.

Good documentation creates a shared **source of truth** for:

- Product and business teams
- AI / ML engineers
- Software engineers
- Data engineers
- QA and evaluation teams
- Security and compliance teams
- DevOps / MLOps teams
- AI coding agents and other automated tools

The objective is **not to create documents for bureaucracy**.  
The objective is to document the information required to make good decisions and build the system correctly.

---

# Documentation by Project Phase

| Project Phase | Main Question | Recommended Documents | Importance |
|---|---|---|---|
| 0. Idea / Conception | Why should we build this? | Vision, Problem Statement, BRD | Critical |
| 1. Discovery | What does the business actually need? | BRD, Use Cases, Stakeholders, Success Metrics | Critical |
| 2. Requirements | What exactly must the system do? | PRD, SRS, Functional & Non-Functional Requirements | Critical |
| 3. AI Feasibility | Can AI solve the problem reliably? | AI Use-Case Spec, Data Requirements, Evaluation Plan, Risk Assessment | Critical |
| 4. Architecture | How will the system work? | System Architecture, AI Architecture, Data Flow, ADRs | Critical |
| 5. Implementation | How should engineers build it? | API Specs, Data Schemas, Prompt Specs, Coding Standards | High |
| 6. Testing / Evaluation | How do we know it works? | Test Plan, AI Evaluation Plan, Acceptance Criteria | Critical |
| 7. Deployment | How do we release it safely? | Deployment Guide, Security Review, Runbook | High |
| 8. Production / Operations | How do we operate and improve it? | Monitoring, Incident Runbook, Model Card, Change Log | Critical |

---

# Core Documents

## 1. BRD — Business Requirements Document

### Purpose

The BRD explains **why the project exists from a business perspective**.

It defines:

- Business problem
- Business goals
- Stakeholders
- Expected business value
- Scope
- Constraints
- High-level requirements
- Success metrics

### Example

> Customer support agents spend 40% of their time searching internal documentation.  
> The project will build an AI assistant that retrieves relevant knowledge and proposes answers.

### When Needed

**Project conception / discovery**

Create the BRD before major architecture or implementation decisions.

### Main Audience

- Business stakeholders
- Product managers
- Engineering leads
- Project managers

---

## 2. PRD — Product Requirements Document

### Purpose

The PRD explains **what product experience should be built**.

It normally contains:

- User personas
- User problems
- Features
- User journeys
- Priorities
- Product behavior
- Success metrics
- Acceptance criteria

### Example

A support agent must be able to:

1. Enter a customer question.
2. Receive an AI-generated answer.
3. See supporting sources.
4. Edit the answer.
5. Send the final response.

### When Needed

**Discovery → requirements phase**

Create it after the business problem is understood and before detailed engineering design.

---

## 3. SRS — Software Requirements Specification

### Purpose

The SRS translates product requirements into **precise software requirements**.

It defines:

### Functional Requirements

What the system must do.

Example:

> FR-01: The system shall retrieve the five most relevant knowledge documents for every support query.

### Non-Functional Requirements

How well the system must operate.

Examples:

- Latency < 3 seconds
- 99.9% availability
- Role-based access control
- Encryption at rest
- Audit logging
- Maximum infrastructure cost per request

### When Needed

**Requirements / technical planning**

Especially important for medium and large projects.

---

# AI-Specific Documentation

Traditional software documentation is not enough for AI systems.

AI projects should also document the following.

---

## 4. AI Use-Case Specification

Defines exactly **where AI is used and where deterministic software is used**.

Include:

- AI task
- Inputs
- Expected outputs
- Model responsibilities
- Human responsibilities
- Allowed actions
- Forbidden actions
- Failure scenarios
- Escalation rules

### Example

The LLM may:

- Summarize customer messages
- Retrieve knowledge
- Draft responses

The LLM may NOT:

- Approve refunds automatically
- Modify customer accounts
- Expose internal confidential information

### When Needed

**AI feasibility / architecture**

---

## 5. Data Requirements Specification

AI quality depends heavily on data quality.

Document:

- Data sources
- Data owners
- Data schemas
- Data quality expectations
- Update frequency
- Permissions
- Sensitive information
- Retention rules
- Training / evaluation datasets

### For RAG Systems

Also document:

- Knowledge sources
- Chunking strategy
- Metadata
- Embedding model
- Vector database
- Refresh strategy

### When Needed

**AI feasibility → architecture**

---

## 6. AI Evaluation Plan

One of the most important documents in an AI project.

Traditional software can often be tested using:

```text
input -> expected output
```

AI output may vary, so the team must define **evaluation criteria**.

Possible metrics:

- Accuracy
- Retrieval precision
- Retrieval recall
- Faithfulness
- Hallucination rate
- Task completion rate
- Human preference
- Safety violations
- Latency
- Cost per request

### Example Acceptance Criteria

| Metric | Target |
|---|---:|
| Correct answer rate | >= 90% |
| Citation accuracy | >= 95% |
| Hallucination rate | < 3% |
| P95 response latency | < 5s |

### When Needed

Create the first version during **AI feasibility**.

Finalize it before production.

---

## 7. Prompt / Agent Specification

For LLM and agent systems, prompts are part of the software architecture.

Document:

- System prompt responsibilities
- Agent role
- Available tools
- Tool permissions
- Input format
- Output format
- Guardrails
- Memory behavior
- Error handling
- Escalation logic

Avoid keeping critical prompt logic only inside application code.

### When Needed

**Architecture → implementation**

---

## 8. Model / Provider Decision Document

Document why a model was selected.

Example comparison:

| Criteria | Model A | Model B |
|---|---:|---:|
| Quality | High | Medium |
| Latency | Medium | Fast |
| Cost | High | Low |
| Tool calling | Strong | Medium |
| Context window | Large | Medium |

Record:

- Models evaluated
- Evaluation results
- Cost
- Latency
- Privacy constraints
- Final decision
- Decision date

### When Needed

**AI feasibility / architecture**

---

# Architecture Documentation

## 9. System Architecture Document

Explains how major components interact.

Typical AI architecture:

```text
User
  |
Frontend
  |
Backend API
  |
AI Orchestrator
  |
  +---- LLM
  |
  +---- Retrieval Service
  |       |
  |       +---- Vector Database
  |
  +---- Business APIs
  |
Observability / Evaluation
```

Document:

- Components
- Responsibilities
- Interfaces
- External services
- Data flows
- Failure modes
- Security boundaries

### When Needed

**Before major implementation begins**

---

## 10. ADR — Architecture Decision Record

ADR documents an important technical decision.

Example:

```text
ADR-004: Use PostgreSQL + pgvector instead of a dedicated vector database.

Context:
The project already uses PostgreSQL.

Decision:
Use pgvector for the first production version.

Reason:
Lower operational complexity.

Consequences:
May need migration if vector search scale becomes very large.
```

### When Needed

Whenever an important technical decision is made.

ADRs are especially useful because they preserve **why** a decision was made.

---

# Implementation Documentation

## 11. API Specification

Document:

- Endpoints
- Authentication
- Request format
- Response format
- Error codes
- Rate limits

OpenAPI / Swagger is recommended where possible.

### When Needed

**Implementation**

---

## 12. Data Schema Documentation

Document important entities and relationships.

Example:

```text
User
Conversation
Message
Document
DocumentChunk
EvaluationResult
PromptVersion
ModelInvocation
```

### When Needed

**Architecture → implementation**

---

# Testing Documentation

## 13. Test Plan

Include:

- Unit tests
- Integration tests
- End-to-end tests
- AI evaluation tests
- Security tests
- Load tests
- Regression tests

AI applications should maintain a **regression evaluation dataset**.

Whenever prompts, models, retrieval, or tools change, rerun the evaluation suite.

---

# Production Documentation

## 14. Deployment Guide

Document:

- Environments
- Required secrets
- Configuration
- Infrastructure
- Deployment procedure
- Rollback procedure
- Database migrations
- Model/provider configuration

### When Needed

Before the first staging or production deployment.

---

## 15. Runbook

A runbook explains what to do when production problems happen.

Examples:

- LLM provider unavailable
- Vector database unavailable
- Cost suddenly increases
- Hallucination rate increases
- Retrieval quality decreases
- API latency increases
- Prompt deployment causes regression

### When Needed

Before production.

---

## 16. Monitoring & Observability Specification

AI systems should monitor more than CPU and memory.

Monitor:

### Infrastructure

- Latency
- Error rate
- Availability

### AI

- Model usage
- Token usage
- Cost
- Hallucination rate
- Evaluation scores
- Tool failures
- Retrieval quality

### Product

- User adoption
- Task completion
- User feedback
- Escalation rate

### When Needed

**Before production and continuously after launch**

---

## 17. Model Card

A model card records information about the AI model or AI system.

Include:

- Model name/version
- Intended use
- Limitations
- Known failure modes
- Evaluation results
- Safety considerations
- Data considerations
- Version history

### When Needed

Before production and whenever the model changes significantly.

---

# Documentation Levels

Not every project needs the same amount of documentation.

## Level 1 — Prototype / Proof of Concept

Minimum documentation:

```text
README.md
docs/
  problem-statement.md
  ai-use-case.md
  architecture.md
  evaluation.md
```

Goal: prove the idea quickly.

---

## Level 2 — MVP

Recommended documentation:

```text
README.md
docs/
  BRD.md
  PRD.md
  SRS.md
  architecture.md
  ai-use-case.md
  data-requirements.md
  evaluation-plan.md
  prompt-spec.md
  api-spec.md
  deployment.md
  adr/
```

Goal: build a stable product that real users can test.

---

## Level 3 — Production AI System

Recommended documentation:

```text
README.md

docs/
  business/
    BRD.md
    success-metrics.md

  product/
    PRD.md
    user-flows.md

  requirements/
    SRS.md
    non-functional-requirements.md

  ai/
    ai-use-case.md
    model-selection.md
    prompt-spec.md
    evaluation-plan.md
    model-card.md

  data/
    data-sources.md
    data-schema.md
    data-quality.md

  architecture/
    system-architecture.md
    security-architecture.md
    adr/

  engineering/
    api-spec.md
    coding-guidelines.md

  testing/
    test-plan.md
    ai-regression-tests.md

  operations/
    deployment.md
    monitoring.md
    runbook.md
    incident-response.md
```

Goal: maintain a reliable, auditable, scalable production system.

---

# Recommended Documentation Timeline

```text
IDEA
 |
 +-- Problem Statement
 +-- BRD
 |
DISCOVERY
 |
 +-- Use Cases
 +-- PRD
 +-- Success Metrics
 |
REQUIREMENTS
 |
 +-- SRS
 +-- Non-Functional Requirements
 |
AI FEASIBILITY
 |
 +-- AI Use-Case Specification
 +-- Data Requirements
 +-- Initial Evaluation Plan
 +-- Model Experiments
 |
ARCHITECTURE
 |
 +-- System Architecture
 +-- AI Architecture
 +-- Data Flow
 +-- Security Design
 +-- ADRs
 |
IMPLEMENTATION
 |
 +-- API Specification
 +-- Prompt / Agent Specification
 +-- Data Schemas
 |
TESTING
 |
 +-- Test Plan
 +-- Evaluation Dataset
 +-- AI Regression Tests
 |
DEPLOYMENT
 |
 +-- Deployment Guide
 +-- Runbook
 +-- Monitoring Specification
 +-- Model Card
 |
PRODUCTION
 |
 +-- Evaluation Reports
 +-- Incident Reports
 +-- ADR Updates
 +-- Change Log
```

---

# Why Documentation Is Especially Important for AI Agents

When AI coding agents or autonomous engineering tools work on a repository, documentation becomes part of their **working context**.

A good project repository should allow an AI agent to answer:

1. What problem are we solving?
2. Who are the users?
3. What are the requirements?
4. What is outside the project scope?
5. What architecture should be respected?
6. What can the AI system do?
7. What must it never do?
8. Where does the data come from?
9. How is success measured?
10. How should changes be tested?
11. What technical decisions have already been made?
12. What constraints must not be violated?

Without this context, an AI agent may generate technically valid code that is **wrong for the project**.

---

# Documentation as AI Project Context

A useful pattern is to treat the `/docs` directory as part of the project's AI context.

Example:

```text
project/
├── README.md
├── AGENTS.md
├── docs/
│   ├── BRD.md
│   ├── PRD.md
│   ├── SRS.md
│   ├── architecture.md
│   ├── ai-use-case.md
│   ├── data-requirements.md
│   ├── evaluation-plan.md
│   ├── prompt-spec.md
│   └── adr/
├── src/
├── tests/
└── evals/
```

`AGENTS.md` can tell AI development agents which documents they must read before modifying the project.

Example:

```markdown
# AI Agent Instructions

Before making architectural or feature changes, read:

1. docs/BRD.md
2. docs/PRD.md
3. docs/SRS.md
4. docs/architecture.md
5. docs/ai-use-case.md
6. docs/evaluation-plan.md

Rules:

- Do not introduce features outside the documented scope.
- Respect existing ADR decisions.
- Update documentation when architecture or requirements change.
- Add or update tests for every behavior change.
- Run AI evaluations when prompts, models, retrieval, or agent behavior change.
```

---

# Documentation Priority

If time is limited, prioritize documentation in this order:

| Priority | Document |
|---|---|
| P0 | Problem / Business Goal |
| P0 | BRD or equivalent business context |
| P0 | PRD / Use Cases |
| P0 | SRS / Technical Requirements |
| P0 | AI Use-Case Specification |
| P0 | Evaluation Plan |
| P1 | Architecture |
| P1 | Data Requirements |
| P1 | Security / Privacy |
| P1 | Prompt / Agent Specification |
| P1 | ADRs |
| P2 | API & Schema Documentation |
| P2 | Deployment Guide |
| P2 | Runbook |
| P2 | Model Card |
| P2 | Monitoring Documentation |

---

# Key Principle

Documentation should evolve with the project.

Do not try to write every document completely on day one.

Use this progression:

```text
Conception     -> document WHY
Discovery      -> document WHAT
Architecture   -> document HOW
Implementation -> document CONTRACTS
Testing        -> document HOW TO VERIFY
Production     -> document HOW TO OPERATE
Evolution      -> document WHAT CHANGED AND WHY
```

The best documentation is:

- Short enough to stay updated
- Precise enough to guide engineering
- Version controlled with the code
- Linked to actual decisions
- Updated whenever important behavior changes

For AI engineering projects, documentation is not separate from the system.

**It is part of the system's engineering context.**
