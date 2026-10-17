# Backend and databases

Expose reliable APIs and protect shared application state.

## Main route · Step 7 of 14

**Goal:** Build the API and database layer that an AI application needs.

**Stage checkpoint:** Build a FastAPI service with validated inputs, a SQL query and API tests.

Expose validated APIs with authorization, relational data and transaction checks.

Follow the modules and lessons below at your pace. Finish each exercise, save your evidence and self-assessment, then continue. Completed and Already known count as completed; Skipped is reported separately. You can move ahead at any time.

[Full pipeline](../PIPELINE.md) · [Next step: Data Engineering + AI](data-engineering-ai.md)

## FastAPI and full-stack contracts

<a id="backend-frontend"></a>

### Frontend essentials, state and accessible UX

Understand the browser side of a full-stack AI product instead of treating it as an afterthought.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [HTTP, APIs and JSON contracts](engineering.md#engineering-http) Navigation is unrestricted.

#### Concepts

- [ ] **HTML and CSS:** Semantic HTML describes controls and structure; responsive CSS adapts layout without hiding essential functionality.
  - Example: Use a labeled form, a result list and a keyboard-visible submit button.
  - Videos:
    - [Frontend web development bootcamp](https://www.youtube.com/watch?v=zJSY8tbf_ys) · freeCodeCamp · Long course
      - Explains: HTML, CSS, JavaScript and practical browser-side application work.
      - Useful because: Build a usable interface for your API with explicit loading and failure states.
      - Watch for: Focus on html and css. Then reproduce the lesson example: Use a labeled form, a result list and a keyboard-visible submit button.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=zJSY8tbf_ys
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on html and css. Then reproduce the lesson example: Use a labeled form, a result list and a keyboard-visible submit button.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [ ] **Browser state:** Inputs, pending requests, saved records and errors are distinct states; rerendering should not destroy unsaved work.
  - Example: Retain the draft when the API rejects a save.
  - Videos:
    - [Frontend web development bootcamp](https://www.youtube.com/watch?v=zJSY8tbf_ys) · freeCodeCamp · Long course
      - Explains: HTML, CSS, JavaScript and practical browser-side application work.
      - Useful because: Build a usable interface for your API with explicit loading and failure states.
      - Watch for: Focus on browser state. Then reproduce the lesson example: Retain the draft when the API rejects a save.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=zJSY8tbf_ys
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on browser state. Then reproduce the lesson example: Retain the draft when the API rejects a save.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [ ] **API integration and accessibility:** Fetch structured data, handle status codes and announce outcomes; keyboard users need the same actions as pointer users.
  - Example: Show a loading state, a cited result and an actionable error message.
  - Videos:
    - [Frontend web development bootcamp](https://www.youtube.com/watch?v=zJSY8tbf_ys) · freeCodeCamp · Long course
      - Explains: HTML, CSS, JavaScript and practical browser-side application work.
      - Useful because: Build a usable interface for your API with explicit loading and failure states.
      - Watch for: Focus on api integration and accessibility. Then reproduce the lesson example: Show a loading state, a cited result and an actionable error message.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=zJSY8tbf_ys
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on api integration and accessibility. Then reproduce the lesson example: Show a loading state, a cited result and an actionable error message.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/

#### YouTube: focused explanations and full courses

- [Frontend web development bootcamp](https://www.youtube.com/watch?v=zJSY8tbf_ys) · freeCodeCamp · Long course
  - Explains: HTML, CSS, JavaScript and practical browser-side application work.
  - Useful because: Build a usable interface for your API with explicit loading and failure states.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=zJSY8tbf_ys
- [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
  - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
  - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/

#### Free written resources

1. [MDN: your first website](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website) — Free; no registration required. No paid materials required.
2. [MDN: using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) — Free; no registration required. No paid materials required.

#### Lab: Frontend essentials, state and accessible UX

Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### API explorer frontend

A learner needs to connect form state to typed API responses.

**Data:** Use a local fictional catalog with 30 items. Use a fixed seed and keep evaluation cases separate.

**Output:** A searchable browser UI connected to FastAPI.

**Effort:** 10h · Beginner → intermediate

- **Frontend essentials, state and accessible UX:** Implement Frontend essentials, state and accessible UX in API explorer frontend. Adapt this focused lab to the project data: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.  Required concepts: HTML and CSS, Browser state, API integration and accessibility.
  - Deliverable: Frontend essentials, state and accessible UX: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A searchable browser UI connected to FastAPI. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Frontend essentials, state and accessible UX: Frontend essentials, state and accessible UX: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show loading, empty, validation and server-failure states.
- [ ] Frontend essentials, state and accessible UX: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Async request boundary lab

A developer needs responsive APIs when one dependency stalls.

**Data:** Use a local delayed stub service and concurrent requests. Use a fixed seed and keep evaluation cases separate.

**Output:** A FastAPI client with timeouts and bounded work.

**Effort:** 10h · Beginner → intermediate

- **Frontend essentials, state and accessible UX:** Extend the project with Frontend essentials, state and accessible UX in Async request boundary lab. Adapt this focused lab to the project data: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.  Required concepts: HTML and CSS, Browser state, API integration and accessibility.
  - Deliverable: Frontend essentials, state and accessible UX: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A FastAPI client with timeouts and bounded work. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Frontend essentials, state and accessible UX: Frontend essentials, state and accessible UX: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] A slow dependency does not block independent health requests.
- [ ] Frontend essentials, state and accessible UX: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Database index benchmark

A developer needs to diagnose slow queries with evidence.

**Data:** Generate 10000 fictional events in local PostgreSQL. Use a fixed seed and keep evaluation cases separate.

**Output:** An EXPLAIN comparison and minimal index migration.

**Effort:** 10h · Beginner → intermediate

- **Frontend essentials, state and accessible UX:** Extend the project with Frontend essentials, state and accessible UX in Database index benchmark. Adapt this focused lab to the project data: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.  Required concepts: HTML and CSS, Browser state, API integration and accessibility.
  - Deliverable: Frontend essentials, state and accessible UX: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An EXPLAIN comparison and minimal index migration. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Frontend essentials, state and accessible UX: Frontend essentials, state and accessible UX: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare plans before/after indexing and measure write overhead.
- [ ] Frontend essentials, state and accessible UX: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Private notes authorization lab

A team needs each user to access only their own notes.

**Data:** Use three fictional users and 15 local notes. Use a fixed seed and keep evaluation cases separate.

**Output:** A local authenticated CRUD API with ownership checks.

**Effort:** 10h · Beginner → intermediate

- **Frontend essentials, state and accessible UX:** Extend the project with Frontend essentials, state and accessible UX in Private notes authorization lab. Adapt this focused lab to the project data: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.  Required concepts: HTML and CSS, Browser state, API integration and accessibility.
  - Deliverable: Frontend essentials, state and accessible UX: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local authenticated CRUD API with ownership checks. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Frontend essentials, state and accessible UX: Frontend essentials, state and accessible UX: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test every cross-user read and write; no client-supplied owner override.
- [ ] Frontend essentials, state and accessible UX: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Order analytics query lab

An analyst needs correct reports over relational data.

**Data:** Generate customers, orders and line items in SQLite or local PostgreSQL. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema, joins and reconciled analytics report.

**Effort:** 10h · Beginner → intermediate

- **Frontend essentials, state and accessible UX:** Extend the project with Frontend essentials, state and accessible UX in Order analytics query lab. Adapt this focused lab to the project data: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.  Required concepts: HTML and CSS, Browser state, API integration and accessibility.
  - Deliverable: Frontend essentials, state and accessible UX: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema, joins and reconciled analytics report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Frontend essentials, state and accessible UX: Frontend essentials, state and accessible UX: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Prove totals survive joins and explain null and duplicate-key behavior.
- [ ] Frontend essentials, state and accessible UX: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Validated prediction API

A model builder needs a reliable inference boundary.

**Data:** Use bundled digits and a small saved baseline or deterministic test predictor. Use a fixed seed and keep evaluation cases separate.

**Output:** A FastAPI service with request/response schemas and health endpoint.

**Effort:** 10h · Beginner → intermediate

- **Frontend essentials, state and accessible UX:** Extend the project with Frontend essentials, state and accessible UX in Validated prediction API. Adapt this focused lab to the project data: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.  Required concepts: HTML and CSS, Browser state, API integration and accessibility.
  - Deliverable: Frontend essentials, state and accessible UX: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A FastAPI service with request/response schemas and health endpoint. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Frontend essentials, state and accessible UX: Frontend essentials, state and accessible UX: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject bad shapes and test successful inference plus unavailable-model errors.
- [ ] Frontend essentials, state and accessible UX: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Safe schema evolution exercise

A maintainer needs to change data shape without losing records.

**Data:** Seed a local notes database with an old author-name field. Use a fixed seed and keep evaluation cases separate.

**Output:** Forward/backward migrations and compatibility tests.

**Effort:** 10h · Beginner → intermediate

- **Frontend essentials, state and accessible UX:** Extend the project with Frontend essentials, state and accessible UX in Safe schema evolution exercise. Adapt this focused lab to the project data: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.  Required concepts: HTML and CSS, Browser state, API integration and accessibility.
  - Deliverable: Frontend essentials, state and accessible UX: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Forward/backward migrations and compatibility tests. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Frontend essentials, state and accessible UX: Frontend essentials, state and accessible UX: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Preserve seeded records and document irreversible transformations.
- [ ] Frontend essentials, state and accessible UX: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Concurrent stock reservation

A shop simulator needs to avoid selling more stock than exists.

**Data:** Seed ten products with five units each in local PostgreSQL. Use a fixed seed and keep evaluation cases separate.

**Output:** A transactional reservation endpoint and concurrency test.

**Effort:** 10h · Beginner → intermediate

- **Frontend essentials, state and accessible UX:** Extend the project with Frontend essentials, state and accessible UX in Concurrent stock reservation. Adapt this focused lab to the project data: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.  Required concepts: HTML and CSS, Browser state, API integration and accessibility.
  - Deliverable: Frontend essentials, state and accessible UX: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A transactional reservation endpoint and concurrency test. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Frontend essentials, state and accessible UX: Frontend essentials, state and accessible UX: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Concurrent requests never make inventory negative and retries remain idempotent.
- [ ] Frontend essentials, state and accessible UX: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Relational versus document store trial

A designer needs evidence for choosing a storage model.

**Data:** Represent the same 40 products and tags in SQL and JSON documents. Use a fixed seed and keep evaluation cases separate.

**Output:** Two query implementations and a tradeoff report.

**Effort:** 10h · Beginner → intermediate

- **Frontend essentials, state and accessible UX:** Extend the project with Frontend essentials, state and accessible UX in Relational versus document store trial. Adapt this focused lab to the project data: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.  Required concepts: HTML and CSS, Browser state, API integration and accessibility.
  - Deliverable: Frontend essentials, state and accessible UX: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Two query implementations and a tradeoff report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Frontend essentials, state and accessible UX: Frontend essentials, state and accessible UX: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match query results and demonstrate update consistency differences.
- [ ] Frontend essentials, state and accessible UX: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Vector lookup service

A search builder needs predictable similarity queries and filters.

**Data:** Generate 100 normalized vectors with source and role metadata. Use a fixed seed and keep evaluation cases separate.

**Output:** A local vector search API and metadata filter tests.

**Effort:** 10h · Beginner → intermediate

- **Frontend essentials, state and accessible UX:** Extend the project with Frontend essentials, state and accessible UX in Vector lookup service. Adapt this focused lab to the project data: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.  Required concepts: HTML and CSS, Browser state, API integration and accessibility.
  - Deliverable: Frontend essentials, state and accessible UX: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local vector search API and metadata filter tests. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Frontend essentials, state and accessible UX: Frontend essentials, state and accessible UX: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare with brute-force scores and reject unauthorized IDs.
- [ ] Frontend essentials, state and accessible UX: Build a plain HTML/JavaScript page that calls a local mock prediction API, retains drafts on failure and works with keyboard-only navigation at mobile width.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="fastapi"></a>

### FastAPI routes, validation and OpenAPI

Build a model API with predictable input/output shapes and inspectable documentation.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Frontend essentials, state and accessible UX](backend.md#backend-frontend) Navigation is unrestricted.

#### Concepts

- [ ] **Routes and models:** Routes map methods and paths to operations; Pydantic validates external data and response models constrain output.
  - Example: Reject a missing text field with a validation response.
  - Videos:
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on routes and models. Then reproduce the lesson example: Reject a missing text field with a validation response.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [ ] **Dependencies and async:** Dependencies provide shared resources; async suits I/O, while heavy CPU work needs suitable execution separation.
  - Example: Inject a model once instead of loading it per request.
  - Videos:
    - [Asyncio in Python — full tutorial](https://www.youtube.com/watch?v=Qb9s3UiMSTA) · Tech With Tim · Tool tutorial
      - Explains: Coroutines, async/await and concurrent I/O patterns.
      - Useful because: Understand what happens while an application waits on tools or network requests.
      - Watch for: Focus on dependencies and async. Then reproduce the lesson example: Inject a model once instead of loading it per request.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=Qb9s3UiMSTA
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on dependencies and async. Then reproduce the lesson example: Inject a model once instead of loading it per request.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [ ] **OpenAPI and errors:** Document schemas and status codes; sanitized errors help clients recover.
  - Example: Return a clear 503 when inference is temporarily unavailable.
  - Videos:
    - [API documentation best practices](https://www.youtube.com/watch?v=0CSyIBHQy9g) · freeCodeCamp · Documentation course
      - Explains: Documenting API behavior and making developer-facing instructions usable.
      - Useful because: Document your actual contracts and a reproducible example instead of generic prose.
      - Watch for: Focus on openapi and errors. Then reproduce the lesson example: Return a clear 503 when inference is temporarily unavailable.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/api-documentation-best-practices-course/
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on openapi and errors. Then reproduce the lesson example: Return a clear 503 when inference is temporarily unavailable.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/

#### YouTube: focused explanations and full courses

- [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
  - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
  - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/

#### Free written resources

1. [FastAPI tutorial](https://fastapi.tiangolo.com/tutorial/) — Free; no registration required. No paid materials required.
2. [FastAPI: request bodies](https://fastapi.tiangolo.com/tutorial/body/) — Free; no registration required. No paid materials required.

#### Lab: FastAPI routes, validation and OpenAPI

Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Private notes authorization lab

A team needs each user to access only their own notes.

**Data:** Use three fictional users and 15 local notes. Use a fixed seed and keep evaluation cases separate.

**Output:** A local authenticated CRUD API with ownership checks.

**Effort:** 10h · Beginner → intermediate

- **FastAPI routes, validation and OpenAPI:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Private notes authorization lab: A local authenticated CRUD API with ownership checks. Focus: Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local authenticated CRUD API with ownership checks. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · FastAPI routes, validation and OpenAPI: API routes, OpenAPI examples and integration tests
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test every cross-user read and write; no client-supplied owner override.
- [ ] FastAPI routes, validation and OpenAPI: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Validated prediction API

A model builder needs a reliable inference boundary.

**Data:** Use bundled digits and a small saved baseline or deterministic test predictor. Use a fixed seed and keep evaluation cases separate.

**Output:** A FastAPI service with request/response schemas and health endpoint.

**Effort:** 10h · Beginner → intermediate

- **FastAPI routes, validation and OpenAPI:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Validated prediction API: A FastAPI service with request/response schemas and health endpoint. Focus: Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A FastAPI service with request/response schemas and health endpoint. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · FastAPI routes, validation and OpenAPI: API routes, OpenAPI examples and integration tests
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject bad shapes and test successful inference plus unavailable-model errors.
- [ ] FastAPI routes, validation and OpenAPI: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Concurrent stock reservation

A shop simulator needs to avoid selling more stock than exists.

**Data:** Seed ten products with five units each in local PostgreSQL. Use a fixed seed and keep evaluation cases separate.

**Output:** A transactional reservation endpoint and concurrency test.

**Effort:** 10h · Beginner → intermediate

- **FastAPI routes, validation and OpenAPI:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Concurrent stock reservation: A transactional reservation endpoint and concurrency test. Focus: Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A transactional reservation endpoint and concurrency test. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · FastAPI routes, validation and OpenAPI: API routes, OpenAPI examples and integration tests
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Concurrent requests never make inventory negative and retries remain idempotent.
- [ ] FastAPI routes, validation and OpenAPI: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### API explorer frontend

A learner needs to connect form state to typed API responses.

**Data:** Use a local fictional catalog with 30 items. Use a fixed seed and keep evaluation cases separate.

**Output:** A searchable browser UI connected to FastAPI.

**Effort:** 10h · Beginner → intermediate

- **FastAPI routes, validation and OpenAPI:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to API explorer frontend: A searchable browser UI connected to FastAPI. Focus: Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A searchable browser UI connected to FastAPI. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · FastAPI routes, validation and OpenAPI: API routes, OpenAPI examples and integration tests
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show loading, empty, validation and server-failure states.
- [ ] FastAPI routes, validation and OpenAPI: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Reproducible inference container

A teammate needs to start the same API on another machine.

**Data:** Use a tiny local FastAPI app and generated request fixtures. Use a fixed seed and keep evaluation cases separate.

**Output:** A non-root Docker image with health check and smoke test.

**Effort:** 10h · Beginner → intermediate

- **FastAPI routes, validation and OpenAPI:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Reproducible inference container: A non-root Docker image with health check and smoke test. Focus: Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A non-root Docker image with health check and smoke test. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · FastAPI routes, validation and OpenAPI: API routes, OpenAPI examples and integration tests
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Build cleanly, start on a configurable port and stop gracefully.
- [ ] FastAPI routes, validation and OpenAPI: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Tiny digit recognition service

A learner needs to compare classical and neural classification end to end.

**Data:** Use scikit-learn bundled 8 by 8 digits; no download needed. Use a fixed seed and keep evaluation cases separate.

**Output:** A linear baseline, small PyTorch MLP, inference endpoint and container when selected.

**Effort:** 16h · Intermediate

- **FastAPI routes, validation and OpenAPI:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Tiny digit recognition service: A linear baseline, small PyTorch MLP, inference endpoint and container when selected. Focus: Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A linear baseline, small PyTorch MLP, inference endpoint and container when selected. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · FastAPI routes, validation and OpenAPI: API routes, OpenAPI examples and integration tests
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report held-out accuracy, confusion matrix and CPU latency for both models.
- [ ] FastAPI routes, validation and OpenAPI: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Streaming response assembler

An interface builder needs correct partial structured-response handling.

**Data:** Create fixtures of chunked JSON and text with disconnects. Use a fixed seed and keep evaluation cases separate.

**Output:** A stream assembler and cancellation demo.

**Effort:** 10h · Beginner → intermediate

- **FastAPI routes, validation and OpenAPI:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Streaming response assembler: A stream assembler and cancellation demo. Focus: Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A stream assembler and cancellation demo. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · FastAPI routes, validation and OpenAPI: API routes, OpenAPI examples and integration tests
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Never parse incomplete JSON as final; recover cleanly from a dropped stream.
- [ ] FastAPI routes, validation and OpenAPI: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Nearest example explanation service

A learner needs predictions with inspectable reference examples.

**Data:** Use scikit-learn digits with a fixed train/test split. Use a fixed seed and keep evaluation cases separate.

**Output:** A kNN classifier that returns neighbors and distance explanations.

**Effort:** 16h · Intermediate

- **FastAPI routes, validation and OpenAPI:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Nearest example explanation service: A kNN classifier that returns neighbors and distance explanations. Focus: Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A kNN classifier that returns neighbors and distance explanations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · FastAPI routes, validation and OpenAPI: API routes, OpenAPI examples and integration tests
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test scaling, ties and out-of-distribution inputs; record latency.
- [ ] FastAPI routes, validation and OpenAPI: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Support ticket model comparison

A support lead needs category suggestions with human review for ambiguity.

**Data:** Generate 180 labeled login, billing and setup tickets with paraphrases. Use a fixed seed and keep evaluation cases separate.

**Output:** A classifier comparison, error slices and a review threshold.

**Effort:** 16h · Intermediate

- **FastAPI routes, validation and OpenAPI:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Support ticket model comparison: A classifier comparison, error slices and a review threshold. Focus: Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A classifier comparison, error slices and a review threshold. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · FastAPI routes, validation and OpenAPI: API routes, OpenAPI examples and integration tests
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Hold out templates, compare a dummy baseline and report macro F1.
- [ ] FastAPI routes, validation and OpenAPI: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Personal notes retrieval desk

A student needs answers traceable to their own notes.

**Data:** Create ten Markdown notes and 20 query/relevance judgments. Use a fixed seed and keep evaluation cases separate.

**Output:** A local search interface with passage IDs and citations.

**Effort:** 10h · Beginner → intermediate

- **FastAPI routes, validation and OpenAPI:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Personal notes retrieval desk: A local search interface with passage IDs and citations. Focus: Routes and models, Dependencies and async, OpenAPI and errors.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local search interface with passage IDs and citations. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · FastAPI routes, validation and OpenAPI: API routes, OpenAPI examples and integration tests
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Report recall at five and refuse unsupported answers.
- [ ] FastAPI routes, validation and OpenAPI: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI classifier endpoint using a small model or mock, schema validation and OpenAPI; test invalid requests and unavailable inference.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="backend-auth"></a>

### Frontend, authentication, authorization and sessions

Connect a browser to an API while enforcing access on the trusted side.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [FastAPI routes, validation and OpenAPI](backend.md#fastapi) Navigation is unrestricted.

#### Concepts

- [ ] **Frontend and API state:** Loading, error and saved states must reflect actual server outcomes.
  - Example: Keep form input visible when a save fails.
  - Videos:
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on frontend and api state. Then reproduce the lesson example: Keep form input visible when a save fails.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [ ] **Authentication versus authorization:** Identity proves who a caller is; authorization decides what that caller may read or change.
  - Example: A valid login cannot edit another user's progress.
  - Videos:
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on authentication versus authorization. Then reproduce the lesson example: A valid login cannot edit another user's progress.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [ ] **Sessions and secrets:** Session credentials expire and need appropriate storage; privileged secrets never belong in browser bundles.
  - Example: Keep database service credentials in server configuration only.
  - Videos:
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on sessions and secrets. Then reproduce the lesson example: Keep database service credentials in server configuration only.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/

#### YouTube: focused explanations and full courses

- [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
  - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
  - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/

#### Free written resources

1. [FastAPI: security introduction](https://fastapi.tiangolo.com/tutorial/security/) — Free; no registration required. No paid materials required.
2. [MDN: client-side web APIs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction) — Free; no registration required. No paid materials required.

#### Lab: Frontend, authentication, authorization and sessions

Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Private notes authorization lab

A team needs each user to access only their own notes.

**Data:** Use three fictional users and 15 local notes. Use a fixed seed and keep evaluation cases separate.

**Output:** A local authenticated CRUD API with ownership checks.

**Effort:** 10h · Beginner → intermediate

- **Frontend, authentication, authorization and sessions:** Implement Frontend, authentication, authorization and sessions in Private notes authorization lab. Adapt this focused lab to the project data: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.  Required concepts: Frontend and API state, Authentication versus authorization, Sessions and secrets.
  - Deliverable: Frontend, authentication, authorization and sessions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local authenticated CRUD API with ownership checks. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Frontend, authentication, authorization and sessions: Frontend, authentication, authorization and sessions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test every cross-user read and write; no client-supplied owner override.
- [ ] Frontend, authentication, authorization and sessions: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Agent memory provenance ledger

A learner needs to distinguish trusted facts from conversation summaries.

**Data:** Create 30 events with sources, timestamps and corrections. Use a fixed seed and keep evaluation cases separate.

**Output:** A scoped memory store with expiration and correction history.

**Effort:** 16h · Intermediate

- **Frontend, authentication, authorization and sessions:** Implement Frontend, authentication, authorization and sessions in Agent memory provenance ledger. Adapt this focused lab to the project data: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.  Required concepts: Frontend and API state, Authentication versus authorization, Sessions and secrets.
  - Deliverable: Frontend, authentication, authorization and sessions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A scoped memory store with expiration and correction history. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Frontend, authentication, authorization and sessions: Frontend, authentication, authorization and sessions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Expired or cross-user entries cannot be retrieved.
- [ ] Frontend, authentication, authorization and sessions: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Permission-aware team search

A team needs retrieval that respects document access rights.

**Data:** Generate three fictional roles and 30 access-labeled documents. Use a fixed seed and keep evaluation cases separate.

**Output:** A retrieval filter and adversarial permission test set.

**Effort:** 10h · Beginner → intermediate

- **Frontend, authentication, authorization and sessions:** Implement Frontend, authentication, authorization and sessions in Permission-aware team search. Adapt this focused lab to the project data: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.  Required concepts: Frontend and API state, Authentication versus authorization, Sessions and secrets.
  - Deliverable: Frontend, authentication, authorization and sessions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A retrieval filter and adversarial permission test set. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Frontend, authentication, authorization and sessions: Frontend, authentication, authorization and sessions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Unauthorized passages never enter the retrieved context.
- [ ] Frontend, authentication, authorization and sessions: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Async request boundary lab

A developer needs responsive APIs when one dependency stalls.

**Data:** Use a local delayed stub service and concurrent requests. Use a fixed seed and keep evaluation cases separate.

**Output:** A FastAPI client with timeouts and bounded work.

**Effort:** 10h · Beginner → intermediate

- **Frontend, authentication, authorization and sessions:** Extend the project with Frontend, authentication, authorization and sessions in Async request boundary lab. Adapt this focused lab to the project data: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.  Required concepts: Frontend and API state, Authentication versus authorization, Sessions and secrets.
  - Deliverable: Frontend, authentication, authorization and sessions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A FastAPI client with timeouts and bounded work. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Frontend, authentication, authorization and sessions: Frontend, authentication, authorization and sessions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] A slow dependency does not block independent health requests.
- [ ] Frontend, authentication, authorization and sessions: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Database index benchmark

A developer needs to diagnose slow queries with evidence.

**Data:** Generate 10000 fictional events in local PostgreSQL. Use a fixed seed and keep evaluation cases separate.

**Output:** An EXPLAIN comparison and minimal index migration.

**Effort:** 10h · Beginner → intermediate

- **Frontend, authentication, authorization and sessions:** Extend the project with Frontend, authentication, authorization and sessions in Database index benchmark. Adapt this focused lab to the project data: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.  Required concepts: Frontend and API state, Authentication versus authorization, Sessions and secrets.
  - Deliverable: Frontend, authentication, authorization and sessions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An EXPLAIN comparison and minimal index migration. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Frontend, authentication, authorization and sessions: Frontend, authentication, authorization and sessions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare plans before/after indexing and measure write overhead.
- [ ] Frontend, authentication, authorization and sessions: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Order analytics query lab

An analyst needs correct reports over relational data.

**Data:** Generate customers, orders and line items in SQLite or local PostgreSQL. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema, joins and reconciled analytics report.

**Effort:** 10h · Beginner → intermediate

- **Frontend, authentication, authorization and sessions:** Extend the project with Frontend, authentication, authorization and sessions in Order analytics query lab. Adapt this focused lab to the project data: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.  Required concepts: Frontend and API state, Authentication versus authorization, Sessions and secrets.
  - Deliverable: Frontend, authentication, authorization and sessions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema, joins and reconciled analytics report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Frontend, authentication, authorization and sessions: Frontend, authentication, authorization and sessions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Prove totals survive joins and explain null and duplicate-key behavior.
- [ ] Frontend, authentication, authorization and sessions: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Validated prediction API

A model builder needs a reliable inference boundary.

**Data:** Use bundled digits and a small saved baseline or deterministic test predictor. Use a fixed seed and keep evaluation cases separate.

**Output:** A FastAPI service with request/response schemas and health endpoint.

**Effort:** 10h · Beginner → intermediate

- **Frontend, authentication, authorization and sessions:** Extend the project with Frontend, authentication, authorization and sessions in Validated prediction API. Adapt this focused lab to the project data: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.  Required concepts: Frontend and API state, Authentication versus authorization, Sessions and secrets.
  - Deliverable: Frontend, authentication, authorization and sessions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A FastAPI service with request/response schemas and health endpoint. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Frontend, authentication, authorization and sessions: Frontend, authentication, authorization and sessions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject bad shapes and test successful inference plus unavailable-model errors.
- [ ] Frontend, authentication, authorization and sessions: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Safe schema evolution exercise

A maintainer needs to change data shape without losing records.

**Data:** Seed a local notes database with an old author-name field. Use a fixed seed and keep evaluation cases separate.

**Output:** Forward/backward migrations and compatibility tests.

**Effort:** 10h · Beginner → intermediate

- **Frontend, authentication, authorization and sessions:** Extend the project with Frontend, authentication, authorization and sessions in Safe schema evolution exercise. Adapt this focused lab to the project data: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.  Required concepts: Frontend and API state, Authentication versus authorization, Sessions and secrets.
  - Deliverable: Frontend, authentication, authorization and sessions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Forward/backward migrations and compatibility tests. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Frontend, authentication, authorization and sessions: Frontend, authentication, authorization and sessions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Preserve seeded records and document irreversible transformations.
- [ ] Frontend, authentication, authorization and sessions: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Concurrent stock reservation

A shop simulator needs to avoid selling more stock than exists.

**Data:** Seed ten products with five units each in local PostgreSQL. Use a fixed seed and keep evaluation cases separate.

**Output:** A transactional reservation endpoint and concurrency test.

**Effort:** 10h · Beginner → intermediate

- **Frontend, authentication, authorization and sessions:** Extend the project with Frontend, authentication, authorization and sessions in Concurrent stock reservation. Adapt this focused lab to the project data: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.  Required concepts: Frontend and API state, Authentication versus authorization, Sessions and secrets.
  - Deliverable: Frontend, authentication, authorization and sessions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A transactional reservation endpoint and concurrency test. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Frontend, authentication, authorization and sessions: Frontend, authentication, authorization and sessions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Concurrent requests never make inventory negative and retries remain idempotent.
- [ ] Frontend, authentication, authorization and sessions: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Relational versus document store trial

A designer needs evidence for choosing a storage model.

**Data:** Represent the same 40 products and tags in SQL and JSON documents. Use a fixed seed and keep evaluation cases separate.

**Output:** Two query implementations and a tradeoff report.

**Effort:** 10h · Beginner → intermediate

- **Frontend, authentication, authorization and sessions:** Extend the project with Frontend, authentication, authorization and sessions in Relational versus document store trial. Adapt this focused lab to the project data: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.  Required concepts: Frontend and API state, Authentication versus authorization, Sessions and secrets.
  - Deliverable: Frontend, authentication, authorization and sessions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Two query implementations and a tradeoff report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Frontend, authentication, authorization and sessions: Frontend, authentication, authorization and sessions: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match query results and demonstrate update consistency differences.
- [ ] Frontend, authentication, authorization and sessions: Build a two-user local API fixture with owner-only record updates; demonstrate unauthorized access failing and a frontend showing a failed save honestly.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Data integrity

<a id="backend-sql"></a>

### SQL, PostgreSQL, joins and indexes

Model relationships and inspect query performance before adding infrastructure.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Frontend, authentication, authorization and sessions](backend.md#backend-auth) Navigation is unrestricted.

#### Concepts

- [ ] **SQL and joins:** Primary/foreign keys represent identities and relationships; joins combine matching rows.
  - Example: Join members to their project participation records.
  - Videos:
    - [PostgreSQL — course for beginners](https://www.youtube.com/watch?v=SpfIwlAYaKk) · freeCodeCamp · Full tool course
      - Explains: SQL tables, querying and PostgreSQL fundamentals.
      - Useful because: Use local PostgreSQL/SQLite practice rather than a paid database service.
      - Watch for: Focus on sql and joins. Then reproduce the lesson example: Join members to their project participation records.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/posgresql-course-for-beginners/
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on sql and joins. Then reproduce the lesson example: Join members to their project participation records.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [ ] **Indexes:** Indexes speed selected lookups but cost writes and storage; query plans reveal actual usage.
  - Example: Index lesson progress by user_id and lesson_id.
  - Videos:
    - [PostgreSQL — course for beginners](https://www.youtube.com/watch?v=SpfIwlAYaKk) · freeCodeCamp · Full tool course
      - Explains: SQL tables, querying and PostgreSQL fundamentals.
      - Useful because: Use local PostgreSQL/SQLite practice rather than a paid database service.
      - Watch for: Focus on indexes. Then reproduce the lesson example: Index lesson progress by user_id and lesson_id.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/posgresql-course-for-beginners/
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on indexes. Then reproduce the lesson example: Index lesson progress by user_id and lesson_id.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [ ] **Schemas and migrations:** Migrations version schema changes; existing data requires compatibility and a rollback/backup plan.
  - Example: Add a nullable field before requiring it in updated clients.
  - Videos:
    - [PostgreSQL — course for beginners](https://www.youtube.com/watch?v=SpfIwlAYaKk) · freeCodeCamp · Full tool course
      - Explains: SQL tables, querying and PostgreSQL fundamentals.
      - Useful because: Use local PostgreSQL/SQLite practice rather than a paid database service.
      - Watch for: Focus on schemas and migrations. Then reproduce the lesson example: Add a nullable field before requiring it in updated clients.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/posgresql-course-for-beginners/
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on schemas and migrations. Then reproduce the lesson example: Add a nullable field before requiring it in updated clients.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/

#### YouTube: focused explanations and full courses

- [PostgreSQL — course for beginners](https://www.youtube.com/watch?v=SpfIwlAYaKk) · freeCodeCamp · Full tool course
  - Explains: SQL tables, querying and PostgreSQL fundamentals.
  - Useful because: Use local PostgreSQL/SQLite practice rather than a paid database service.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/posgresql-course-for-beginners/
- [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
  - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
  - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/

#### Free written resources

1. [PostgreSQL: joins](https://www.postgresql.org/docs/current/tutorial-join.html) — Free; no registration required. No paid materials required.
2. [PostgreSQL: indexes](https://www.postgresql.org/docs/current/indexes.html) — Free; no registration required. No paid materials required.

#### Lab: SQL, PostgreSQL, joins and indexes

Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Order analytics query lab

An analyst needs correct reports over relational data.

**Data:** Generate customers, orders and line items in SQLite or local PostgreSQL. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema, joins and reconciled analytics report.

**Effort:** 10h · Beginner → intermediate

- **SQL, PostgreSQL, joins and indexes:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to Order analytics query lab: A schema, joins and reconciled analytics report. Focus: SQL and joins, Indexes, Schemas and migrations.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema, joins and reconciled analytics report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL, PostgreSQL, joins and indexes: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Prove totals survive joins and explain null and duplicate-key behavior.
- [ ] SQL, PostgreSQL, joins and indexes: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### API and database Compose lab

A developer needs reproducible service networking and persistence.

**Data:** Seed a local PostgreSQL database with fictional tasks. Use a fixed seed and keep evaluation cases separate.

**Output:** A Compose stack with isolated services and persistent data.

**Effort:** 10h · Beginner → intermediate

- **SQL, PostgreSQL, joins and indexes:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to API and database Compose lab: A Compose stack with isolated services and persistent data. Focus: SQL and joins, Indexes, Schemas and migrations.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A Compose stack with isolated services and persistent data. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL, PostgreSQL, joins and indexes: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Restart containers without losing rows; API connects by service name.
- [ ] SQL, PostgreSQL, joins and indexes: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Read-only SQL evidence assistant

An analyst needs answers grounded in tabular records.

**Data:** Use a local SQLite database of fictional orders and customers. Use a fixed seed and keep evaluation cases separate.

**Output:** A whitelisted query workflow with rows cited as evidence.

**Effort:** 10h · Beginner → intermediate

- **SQL, PostgreSQL, joins and indexes:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to Read-only SQL evidence assistant: A whitelisted query workflow with rows cited as evidence. Focus: SQL and joins, Indexes, Schemas and migrations.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A whitelisted query workflow with rows cited as evidence. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL, PostgreSQL, joins and indexes: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject writes, bound row counts and verify join totals.
- [ ] SQL, PostgreSQL, joins and indexes: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Async request boundary lab

A developer needs responsive APIs when one dependency stalls.

**Data:** Use a local delayed stub service and concurrent requests. Use a fixed seed and keep evaluation cases separate.

**Output:** A FastAPI client with timeouts and bounded work.

**Effort:** 10h · Beginner → intermediate

- **SQL, PostgreSQL, joins and indexes:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to Async request boundary lab: A FastAPI client with timeouts and bounded work. Focus: SQL and joins, Indexes, Schemas and migrations.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A FastAPI client with timeouts and bounded work. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL, PostgreSQL, joins and indexes: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] A slow dependency does not block independent health requests.
- [ ] SQL, PostgreSQL, joins and indexes: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Database index benchmark

A developer needs to diagnose slow queries with evidence.

**Data:** Generate 10000 fictional events in local PostgreSQL. Use a fixed seed and keep evaluation cases separate.

**Output:** An EXPLAIN comparison and minimal index migration.

**Effort:** 10h · Beginner → intermediate

- **SQL, PostgreSQL, joins and indexes:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to Database index benchmark: An EXPLAIN comparison and minimal index migration. Focus: SQL and joins, Indexes, Schemas and migrations.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An EXPLAIN comparison and minimal index migration. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL, PostgreSQL, joins and indexes: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare plans before/after indexing and measure write overhead.
- [ ] SQL, PostgreSQL, joins and indexes: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Private notes authorization lab

A team needs each user to access only their own notes.

**Data:** Use three fictional users and 15 local notes. Use a fixed seed and keep evaluation cases separate.

**Output:** A local authenticated CRUD API with ownership checks.

**Effort:** 10h · Beginner → intermediate

- **SQL, PostgreSQL, joins and indexes:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to Private notes authorization lab: A local authenticated CRUD API with ownership checks. Focus: SQL and joins, Indexes, Schemas and migrations.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local authenticated CRUD API with ownership checks. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL, PostgreSQL, joins and indexes: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test every cross-user read and write; no client-supplied owner override.
- [ ] SQL, PostgreSQL, joins and indexes: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Validated prediction API

A model builder needs a reliable inference boundary.

**Data:** Use bundled digits and a small saved baseline or deterministic test predictor. Use a fixed seed and keep evaluation cases separate.

**Output:** A FastAPI service with request/response schemas and health endpoint.

**Effort:** 10h · Beginner → intermediate

- **SQL, PostgreSQL, joins and indexes:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to Validated prediction API: A FastAPI service with request/response schemas and health endpoint. Focus: SQL and joins, Indexes, Schemas and migrations.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A FastAPI service with request/response schemas and health endpoint. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL, PostgreSQL, joins and indexes: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject bad shapes and test successful inference plus unavailable-model errors.
- [ ] SQL, PostgreSQL, joins and indexes: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Safe schema evolution exercise

A maintainer needs to change data shape without losing records.

**Data:** Seed a local notes database with an old author-name field. Use a fixed seed and keep evaluation cases separate.

**Output:** Forward/backward migrations and compatibility tests.

**Effort:** 10h · Beginner → intermediate

- **SQL, PostgreSQL, joins and indexes:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to Safe schema evolution exercise: Forward/backward migrations and compatibility tests. Focus: SQL and joins, Indexes, Schemas and migrations.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Forward/backward migrations and compatibility tests. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL, PostgreSQL, joins and indexes: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Preserve seeded records and document irreversible transformations.
- [ ] SQL, PostgreSQL, joins and indexes: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Concurrent stock reservation

A shop simulator needs to avoid selling more stock than exists.

**Data:** Seed ten products with five units each in local PostgreSQL. Use a fixed seed and keep evaluation cases separate.

**Output:** A transactional reservation endpoint and concurrency test.

**Effort:** 10h · Beginner → intermediate

- **SQL, PostgreSQL, joins and indexes:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to Concurrent stock reservation: A transactional reservation endpoint and concurrency test. Focus: SQL and joins, Indexes, Schemas and migrations.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A transactional reservation endpoint and concurrency test. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL, PostgreSQL, joins and indexes: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Concurrent requests never make inventory negative and retries remain idempotent.
- [ ] SQL, PostgreSQL, joins and indexes: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Relational versus document store trial

A designer needs evidence for choosing a storage model.

**Data:** Represent the same 40 products and tags in SQL and JSON documents. Use a fixed seed and keep evaluation cases separate.

**Output:** Two query implementations and a tradeoff report.

**Effort:** 10h · Beginner → intermediate

- **SQL, PostgreSQL, joins and indexes:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to Relational versus document store trial: Two query implementations and a tradeoff report. Focus: SQL and joins, Indexes, Schemas and migrations.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Two query implementations and a tradeoff report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL, PostgreSQL, joins and indexes: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match query results and demonstrate update consistency differences.
- [ ] SQL, PostgreSQL, joins and indexes: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Create a local SQLite schema for users, lessons and progress; write joins, add a composite unique key and inspect a query plan. Include a PostgreSQL version of the schema.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="backend-transactions"></a>

### Transactions, concurrency and data quality

Prevent races and partial updates in multi-user applications.

**Priority:** Essential · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [SQL, PostgreSQL, joins and indexes](backend.md#backend-sql) Navigation is unrestricted.

#### Concepts

- [ ] **Transactions:** Related changes should commit together or roll back together.
  - Example: Create a project and its owner participant in one transaction.
  - Videos:
    - [PostgreSQL — course for beginners](https://www.youtube.com/watch?v=SpfIwlAYaKk) · freeCodeCamp · Full tool course
      - Explains: SQL tables, querying and PostgreSQL fundamentals.
      - Useful because: Use local PostgreSQL/SQLite practice rather than a paid database service.
      - Watch for: Focus on transactions. Then reproduce the lesson example: Create a project and its owner participant in one transaction.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/posgresql-course-for-beginners/
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on transactions. Then reproduce the lesson example: Create a project and its owner participant in one transaction.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [ ] **Concurrency:** Unique constraints and atomic updates prevent races that client-side checks cannot.
  - Example: Two simultaneous join requests should produce one membership row.
  - Videos:
    - [PostgreSQL — course for beginners](https://www.youtube.com/watch?v=SpfIwlAYaKk) · freeCodeCamp · Full tool course
      - Explains: SQL tables, querying and PostgreSQL fundamentals.
      - Useful because: Use local PostgreSQL/SQLite practice rather than a paid database service.
      - Watch for: Focus on concurrency. Then reproduce the lesson example: Two simultaneous join requests should produce one membership row.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/posgresql-course-for-beginners/
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on concurrency. Then reproduce the lesson example: Two simultaneous join requests should produce one membership row.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [ ] **Data quality and privacy:** Constraints preserve allowed values; retention and access rules govern sensitive records.
  - Example: Reject invalid statuses and avoid exposing private notes in team summaries.
  - Videos:
    - [PostgreSQL — course for beginners](https://www.youtube.com/watch?v=SpfIwlAYaKk) · freeCodeCamp · Full tool course
      - Explains: SQL tables, querying and PostgreSQL fundamentals.
      - Useful because: Use local PostgreSQL/SQLite practice rather than a paid database service.
      - Watch for: Focus on data quality and privacy. Then reproduce the lesson example: Reject invalid statuses and avoid exposing private notes in team summaries.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/posgresql-course-for-beginners/
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on data quality and privacy. Then reproduce the lesson example: Reject invalid statuses and avoid exposing private notes in team summaries.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/

#### YouTube: focused explanations and full courses

- [PostgreSQL — course for beginners](https://www.youtube.com/watch?v=SpfIwlAYaKk) · freeCodeCamp · Full tool course
  - Explains: SQL tables, querying and PostgreSQL fundamentals.
  - Useful because: Use local PostgreSQL/SQLite practice rather than a paid database service.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/posgresql-course-for-beginners/
- [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
  - Explains: Scalability, reliability, storage and architecture tradeoffs.
  - Useful because: Explain why a queue, index or cache is useful before adding one.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
  - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
  - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/

#### Free written resources

1. [PostgreSQL: transactions](https://www.postgresql.org/docs/current/tutorial-transactions.html) — Free; no registration required. No paid materials required.
2. [PostgreSQL: concurrency control](https://www.postgresql.org/docs/current/mvcc.html) — Free; no registration required. No paid materials required.

#### Lab: Transactions, concurrency and data quality

Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Safe schema evolution exercise

A maintainer needs to change data shape without losing records.

**Data:** Seed a local notes database with an old author-name field. Use a fixed seed and keep evaluation cases separate.

**Output:** Forward/backward migrations and compatibility tests.

**Effort:** 10h · Beginner → intermediate

- **Transactions, concurrency and data quality:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to Safe schema evolution exercise: Forward/backward migrations and compatibility tests. Focus: Transactions, Concurrency, Data quality and privacy.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Forward/backward migrations and compatibility tests. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Transactions, concurrency and data quality: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Preserve seeded records and document irreversible transformations.
- [ ] Transactions, concurrency and data quality: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Concurrent stock reservation

A shop simulator needs to avoid selling more stock than exists.

**Data:** Seed ten products with five units each in local PostgreSQL. Use a fixed seed and keep evaluation cases separate.

**Output:** A transactional reservation endpoint and concurrency test.

**Effort:** 10h · Beginner → intermediate

- **Transactions, concurrency and data quality:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to Concurrent stock reservation: A transactional reservation endpoint and concurrency test. Focus: Transactions, Concurrency, Data quality and privacy.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A transactional reservation endpoint and concurrency test. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Transactions, concurrency and data quality: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Concurrent requests never make inventory negative and retries remain idempotent.
- [ ] Transactions, concurrency and data quality: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Async request boundary lab

A developer needs responsive APIs when one dependency stalls.

**Data:** Use a local delayed stub service and concurrent requests. Use a fixed seed and keep evaluation cases separate.

**Output:** A FastAPI client with timeouts and bounded work.

**Effort:** 10h · Beginner → intermediate

- **Transactions, concurrency and data quality:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to Async request boundary lab: A FastAPI client with timeouts and bounded work. Focus: Transactions, Concurrency, Data quality and privacy.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A FastAPI client with timeouts and bounded work. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Transactions, concurrency and data quality: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] A slow dependency does not block independent health requests.
- [ ] Transactions, concurrency and data quality: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Database index benchmark

A developer needs to diagnose slow queries with evidence.

**Data:** Generate 10000 fictional events in local PostgreSQL. Use a fixed seed and keep evaluation cases separate.

**Output:** An EXPLAIN comparison and minimal index migration.

**Effort:** 10h · Beginner → intermediate

- **Transactions, concurrency and data quality:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to Database index benchmark: An EXPLAIN comparison and minimal index migration. Focus: Transactions, Concurrency, Data quality and privacy.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An EXPLAIN comparison and minimal index migration. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Transactions, concurrency and data quality: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare plans before/after indexing and measure write overhead.
- [ ] Transactions, concurrency and data quality: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Private notes authorization lab

A team needs each user to access only their own notes.

**Data:** Use three fictional users and 15 local notes. Use a fixed seed and keep evaluation cases separate.

**Output:** A local authenticated CRUD API with ownership checks.

**Effort:** 10h · Beginner → intermediate

- **Transactions, concurrency and data quality:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to Private notes authorization lab: A local authenticated CRUD API with ownership checks. Focus: Transactions, Concurrency, Data quality and privacy.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local authenticated CRUD API with ownership checks. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Transactions, concurrency and data quality: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test every cross-user read and write; no client-supplied owner override.
- [ ] Transactions, concurrency and data quality: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Order analytics query lab

An analyst needs correct reports over relational data.

**Data:** Generate customers, orders and line items in SQLite or local PostgreSQL. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema, joins and reconciled analytics report.

**Effort:** 10h · Beginner → intermediate

- **Transactions, concurrency and data quality:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to Order analytics query lab: A schema, joins and reconciled analytics report. Focus: Transactions, Concurrency, Data quality and privacy.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema, joins and reconciled analytics report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Transactions, concurrency and data quality: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Prove totals survive joins and explain null and duplicate-key behavior.
- [ ] Transactions, concurrency and data quality: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Validated prediction API

A model builder needs a reliable inference boundary.

**Data:** Use bundled digits and a small saved baseline or deterministic test predictor. Use a fixed seed and keep evaluation cases separate.

**Output:** A FastAPI service with request/response schemas and health endpoint.

**Effort:** 10h · Beginner → intermediate

- **Transactions, concurrency and data quality:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to Validated prediction API: A FastAPI service with request/response schemas and health endpoint. Focus: Transactions, Concurrency, Data quality and privacy.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A FastAPI service with request/response schemas and health endpoint. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Transactions, concurrency and data quality: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject bad shapes and test successful inference plus unavailable-model errors.
- [ ] Transactions, concurrency and data quality: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Relational versus document store trial

A designer needs evidence for choosing a storage model.

**Data:** Represent the same 40 products and tags in SQL and JSON documents. Use a fixed seed and keep evaluation cases separate.

**Output:** Two query implementations and a tradeoff report.

**Effort:** 10h · Beginner → intermediate

- **Transactions, concurrency and data quality:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to Relational versus document store trial: Two query implementations and a tradeoff report. Focus: Transactions, Concurrency, Data quality and privacy.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Two query implementations and a tradeoff report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Transactions, concurrency and data quality: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match query results and demonstrate update consistency differences.
- [ ] Transactions, concurrency and data quality: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### API explorer frontend

A learner needs to connect form state to typed API responses.

**Data:** Use a local fictional catalog with 30 items. Use a fixed seed and keep evaluation cases separate.

**Output:** A searchable browser UI connected to FastAPI.

**Effort:** 10h · Beginner → intermediate

- **Transactions, concurrency and data quality:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to API explorer frontend: A searchable browser UI connected to FastAPI. Focus: Transactions, Concurrency, Data quality and privacy.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A searchable browser UI connected to FastAPI. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Transactions, concurrency and data quality: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show loading, empty, validation and server-failure states.
- [ ] Transactions, concurrency and data quality: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Vector lookup service

A search builder needs predictable similarity queries and filters.

**Data:** Generate 100 normalized vectors with source and role metadata. Use a fixed seed and keep evaluation cases separate.

**Output:** A local vector search API and metadata filter tests.

**Effort:** 10h · Beginner → intermediate

- **Transactions, concurrency and data quality:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to Vector lookup service: A local vector search API and metadata filter tests. Focus: Transactions, Concurrency, Data quality and privacy.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local vector search API and metadata filter tests. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Transactions, concurrency and data quality: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare with brute-force scores and reject unauthorized IDs.
- [ ] Transactions, concurrency and data quality: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Simulate concurrent membership inserts, verify unique constraints and rollback on a failing second write, and define which fields teammates can read.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="backend-stores"></a>

### Vector, NoSQL and graph database tradeoffs

Choose the simplest store that supports your access patterns.

**Priority:** Specialization · **Study:** 2h · **Practice:** 3h

**Prerequisites:** [Transactions, concurrency and data quality](backend.md#backend-transactions) Navigation is unrestricted.

#### Concepts

- [ ] **Vector storage:** Vector indexes support similarity retrieval but require consistent dimensions, versions and access filters.
  - Example: Store embedding_model_version with each document vector.
  - Videos:
    - [Neo4j: building a knowledge graph](https://www.youtube.com/watch?v=1ogNyPWUP7g) · Neo4j · Vendor teaching session
      - Explains: Modeling entities, querying relationships and growing a knowledge graph.
      - Useful because: Compare relationship traversal with vector similarity before selecting a database.
      - Watch for: Focus on vector storage. Then reproduce the lesson example: Store embedding_model_version with each document vector.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=1ogNyPWUP7g
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on vector storage. Then reproduce the lesson example: Store embedding_model_version with each document vector.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [ ] **NoSQL:** Document/key-value stores can simplify flexible records but may change transaction and query tradeoffs.
  - Example: Compare a document record with normalized SQL tables.
  - Videos:
    - [Neo4j: building a knowledge graph](https://www.youtube.com/watch?v=1ogNyPWUP7g) · Neo4j · Vendor teaching session
      - Explains: Modeling entities, querying relationships and growing a knowledge graph.
      - Useful because: Compare relationship traversal with vector similarity before selecting a database.
      - Watch for: Focus on nosql. Then reproduce the lesson example: Compare a document record with normalized SQL tables.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=1ogNyPWUP7g
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on nosql. Then reproduce the lesson example: Compare a document record with normalized SQL tables.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [ ] **Graph storage:** Relationship traversal can justify a graph model; many small cases work in SQL or memory.
  - Example: Represent prerequisites as directed edges and detect cycles.
  - Videos:
    - [Neo4j: building a knowledge graph](https://www.youtube.com/watch?v=1ogNyPWUP7g) · Neo4j · Vendor teaching session
      - Explains: Modeling entities, querying relationships and growing a knowledge graph.
      - Useful because: Compare relationship traversal with vector similarity before selecting a database.
      - Watch for: Focus on graph storage. Then reproduce the lesson example: Represent prerequisites as directed edges and detect cycles.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.youtube.com/watch?v=1ogNyPWUP7g
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on graph storage. Then reproduce the lesson example: Represent prerequisites as directed edges and detect cycles.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/

#### YouTube: focused explanations and full courses

- [Neo4j: building a knowledge graph](https://www.youtube.com/watch?v=1ogNyPWUP7g) · Neo4j · Vendor teaching session
  - Explains: Modeling entities, querying relationships and growing a knowledge graph.
  - Useful because: Compare relationship traversal with vector similarity before selecting a database.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=1ogNyPWUP7g
- [RAG fundamentals and advanced techniques](https://www.youtube.com/watch?v=ea2W8IogX80) · freeCodeCamp · Full course · approximately 2h
  - Explains: Ingestion, retrieval and techniques for grounding model answers.
  - Useful because: Follow the pipeline, then test chunking and retrieval separately.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/
- [PostgreSQL — course for beginners](https://www.youtube.com/watch?v=SpfIwlAYaKk) · freeCodeCamp · Full tool course
  - Explains: SQL tables, querying and PostgreSQL fundamentals.
  - Useful because: Use local PostgreSQL/SQLite practice rather than a paid database service.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/posgresql-course-for-beginners/
- [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
  - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
  - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/

#### Free written resources

1. [pgvector: PostgreSQL vector extension](https://github.com/pgvector/pgvector) — Free; no registration required. No paid materials required.
2. [Neo4j: graph database concepts](https://neo4j.com/docs/getting-started/appendix/graphdb-concepts/) — Free reading; Hugging Face account optional for sharing models. No paid materials required.

#### Lab: Vector, NoSQL and graph database tradeoffs

Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Relational versus document store trial

A designer needs evidence for choosing a storage model.

**Data:** Represent the same 40 products and tags in SQL and JSON documents. Use a fixed seed and keep evaluation cases separate.

**Output:** Two query implementations and a tradeoff report.

**Effort:** 10h · Beginner → intermediate

- **Vector, NoSQL and graph database tradeoffs:** Implement Vector, NoSQL and graph database tradeoffs in Relational versus document store trial. Adapt this focused lab to the project data: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.  Required concepts: Vector storage, NoSQL, Graph storage.
  - Deliverable: Vector, NoSQL and graph database tradeoffs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Two query implementations and a tradeoff report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Vector, NoSQL and graph database tradeoffs: Vector, NoSQL and graph database tradeoffs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match query results and demonstrate update consistency differences.
- [ ] Vector, NoSQL and graph database tradeoffs: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Vector lookup service

A search builder needs predictable similarity queries and filters.

**Data:** Generate 100 normalized vectors with source and role metadata. Use a fixed seed and keep evaluation cases separate.

**Output:** A local vector search API and metadata filter tests.

**Effort:** 10h · Beginner → intermediate

- **Vector, NoSQL and graph database tradeoffs:** Implement Vector, NoSQL and graph database tradeoffs in Vector lookup service. Adapt this focused lab to the project data: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.  Required concepts: Vector storage, NoSQL, Graph storage.
  - Deliverable: Vector, NoSQL and graph database tradeoffs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local vector search API and metadata filter tests. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Vector, NoSQL and graph database tradeoffs: Vector, NoSQL and graph database tradeoffs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare with brute-force scores and reject unauthorized IDs.
- [ ] Vector, NoSQL and graph database tradeoffs: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Async request boundary lab

A developer needs responsive APIs when one dependency stalls.

**Data:** Use a local delayed stub service and concurrent requests. Use a fixed seed and keep evaluation cases separate.

**Output:** A FastAPI client with timeouts and bounded work.

**Effort:** 10h · Beginner → intermediate

- **Vector, NoSQL and graph database tradeoffs:** Extend the project with Vector, NoSQL and graph database tradeoffs in Async request boundary lab. Adapt this focused lab to the project data: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.  Required concepts: Vector storage, NoSQL, Graph storage.
  - Deliverable: Vector, NoSQL and graph database tradeoffs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A FastAPI client with timeouts and bounded work. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Vector, NoSQL and graph database tradeoffs: Vector, NoSQL and graph database tradeoffs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] A slow dependency does not block independent health requests.
- [ ] Vector, NoSQL and graph database tradeoffs: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Database index benchmark

A developer needs to diagnose slow queries with evidence.

**Data:** Generate 10000 fictional events in local PostgreSQL. Use a fixed seed and keep evaluation cases separate.

**Output:** An EXPLAIN comparison and minimal index migration.

**Effort:** 10h · Beginner → intermediate

- **Vector, NoSQL and graph database tradeoffs:** Extend the project with Vector, NoSQL and graph database tradeoffs in Database index benchmark. Adapt this focused lab to the project data: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.  Required concepts: Vector storage, NoSQL, Graph storage.
  - Deliverable: Vector, NoSQL and graph database tradeoffs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An EXPLAIN comparison and minimal index migration. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Vector, NoSQL and graph database tradeoffs: Vector, NoSQL and graph database tradeoffs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare plans before/after indexing and measure write overhead.
- [ ] Vector, NoSQL and graph database tradeoffs: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Private notes authorization lab

A team needs each user to access only their own notes.

**Data:** Use three fictional users and 15 local notes. Use a fixed seed and keep evaluation cases separate.

**Output:** A local authenticated CRUD API with ownership checks.

**Effort:** 10h · Beginner → intermediate

- **Vector, NoSQL and graph database tradeoffs:** Extend the project with Vector, NoSQL and graph database tradeoffs in Private notes authorization lab. Adapt this focused lab to the project data: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.  Required concepts: Vector storage, NoSQL, Graph storage.
  - Deliverable: Vector, NoSQL and graph database tradeoffs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local authenticated CRUD API with ownership checks. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Vector, NoSQL and graph database tradeoffs: Vector, NoSQL and graph database tradeoffs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test every cross-user read and write; no client-supplied owner override.
- [ ] Vector, NoSQL and graph database tradeoffs: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Order analytics query lab

An analyst needs correct reports over relational data.

**Data:** Generate customers, orders and line items in SQLite or local PostgreSQL. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema, joins and reconciled analytics report.

**Effort:** 10h · Beginner → intermediate

- **Vector, NoSQL and graph database tradeoffs:** Extend the project with Vector, NoSQL and graph database tradeoffs in Order analytics query lab. Adapt this focused lab to the project data: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.  Required concepts: Vector storage, NoSQL, Graph storage.
  - Deliverable: Vector, NoSQL and graph database tradeoffs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema, joins and reconciled analytics report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Vector, NoSQL and graph database tradeoffs: Vector, NoSQL and graph database tradeoffs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Prove totals survive joins and explain null and duplicate-key behavior.
- [ ] Vector, NoSQL and graph database tradeoffs: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Validated prediction API

A model builder needs a reliable inference boundary.

**Data:** Use bundled digits and a small saved baseline or deterministic test predictor. Use a fixed seed and keep evaluation cases separate.

**Output:** A FastAPI service with request/response schemas and health endpoint.

**Effort:** 10h · Beginner → intermediate

- **Vector, NoSQL and graph database tradeoffs:** Extend the project with Vector, NoSQL and graph database tradeoffs in Validated prediction API. Adapt this focused lab to the project data: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.  Required concepts: Vector storage, NoSQL, Graph storage.
  - Deliverable: Vector, NoSQL and graph database tradeoffs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A FastAPI service with request/response schemas and health endpoint. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Vector, NoSQL and graph database tradeoffs: Vector, NoSQL and graph database tradeoffs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject bad shapes and test successful inference plus unavailable-model errors.
- [ ] Vector, NoSQL and graph database tradeoffs: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Safe schema evolution exercise

A maintainer needs to change data shape without losing records.

**Data:** Seed a local notes database with an old author-name field. Use a fixed seed and keep evaluation cases separate.

**Output:** Forward/backward migrations and compatibility tests.

**Effort:** 10h · Beginner → intermediate

- **Vector, NoSQL and graph database tradeoffs:** Extend the project with Vector, NoSQL and graph database tradeoffs in Safe schema evolution exercise. Adapt this focused lab to the project data: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.  Required concepts: Vector storage, NoSQL, Graph storage.
  - Deliverable: Vector, NoSQL and graph database tradeoffs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Forward/backward migrations and compatibility tests. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Vector, NoSQL and graph database tradeoffs: Vector, NoSQL and graph database tradeoffs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Preserve seeded records and document irreversible transformations.
- [ ] Vector, NoSQL and graph database tradeoffs: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Concurrent stock reservation

A shop simulator needs to avoid selling more stock than exists.

**Data:** Seed ten products with five units each in local PostgreSQL. Use a fixed seed and keep evaluation cases separate.

**Output:** A transactional reservation endpoint and concurrency test.

**Effort:** 10h · Beginner → intermediate

- **Vector, NoSQL and graph database tradeoffs:** Extend the project with Vector, NoSQL and graph database tradeoffs in Concurrent stock reservation. Adapt this focused lab to the project data: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.  Required concepts: Vector storage, NoSQL, Graph storage.
  - Deliverable: Vector, NoSQL and graph database tradeoffs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A transactional reservation endpoint and concurrency test. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Vector, NoSQL and graph database tradeoffs: Vector, NoSQL and graph database tradeoffs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Concurrent requests never make inventory negative and retries remain idempotent.
- [ ] Vector, NoSQL and graph database tradeoffs: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### API explorer frontend

A learner needs to connect form state to typed API responses.

**Data:** Use a local fictional catalog with 30 items. Use a fixed seed and keep evaluation cases separate.

**Output:** A searchable browser UI connected to FastAPI.

**Effort:** 10h · Beginner → intermediate

- **Vector, NoSQL and graph database tradeoffs:** Extend the project with Vector, NoSQL and graph database tradeoffs in API explorer frontend. Adapt this focused lab to the project data: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.  Required concepts: Vector storage, NoSQL, Graph storage.
  - Deliverable: Vector, NoSQL and graph database tradeoffs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
  - Check: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A searchable browser UI connected to FastAPI. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Vector, NoSQL and graph database tradeoffs: Vector, NoSQL and graph database tradeoffs: Runnable code or notebook with a small reproducible input; README explaining decisions, results and limitations
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show loading, empty, validation and server-failure states.
- [ ] Vector, NoSQL and graph database tradeoffs: Write an ADR comparing PostgreSQL/pgvector, a document store and an in-memory graph for a small RAG app; implement the simplest viable schema and sample queries.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Service boundaries in detail

<a id="backend-fastapi-boundaries"></a>

### FastAPI dependencies, schemas and testable error boundaries

Keep model calls replaceable and validate both inputs and outputs at the API boundary.

**Priority:** Essential · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [FastAPI routes, validation and OpenAPI](backend.md#fastapi) Navigation is unrestricted.

#### Concepts

- [ ] **Request versus response schema:** An input schema validates client data while a response schema controls the public contract and accidental field exposure.
  - Example: Accept a prompt and return only the declared answer fields rather than internal tracing metadata.
  - Videos:
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on request versus response schema. Then reproduce the lesson example: Accept a prompt and return only the declared answer fields rather than internal tracing metadata.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [ ] **Dependency injection:** Dependencies supply services or identity context without hard-coding a model client into every route.
  - Example: Inject a fake predictor in tests and a local predictor in the normal application.
  - Videos:
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on dependency injection. Then reproduce the lesson example: Inject a fake predictor in tests and a local predictor in the normal application.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [ ] **Validation versus upstream failure:** Bad user input and a malformed model response require different handling and error codes.
  - Example: Return a validation response for a missing prompt and a controlled upstream error for invalid predictor output.
  - Videos:
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on validation versus upstream failure. Then reproduce the lesson example: Return a validation response for a missing prompt and a controlled upstream error for invalid predictor output.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [ ] **Sync versus async boundaries:** Async routes should not directly perform long blocking work in the event loop; choose a suitable execution boundary.
  - Example: Compare a fake awaited network call with a CPU-bound loop and document where the latter runs.
  - Videos:
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on sync versus async boundaries. Then reproduce the lesson example: Compare a fake awaited network call with a CPU-bound loop and document where the latter runs.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [ ] **Dependency overrides in tests:** An override lets tests exercise the real route and validation path while replacing only the external boundary.
  - Example: Override authentication and prediction independently to test authorised, forbidden and malformed-response cases.
  - Videos:
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on dependency overrides in tests. Then reproduce the lesson example: Override authentication and prediction independently to test authorised, forbidden and malformed-response cases.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/

#### YouTube: focused explanations and full courses

- [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
  - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
  - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [CS50P 5 — Unit tests](https://www.youtube.com/watch?v=tIrcxwLqzjQ) · Harvard CS50 · David Malan · University lecture
  - Explains: Assertions, pytest, test organization and testing return values.
  - Useful because: A structured explanation with live coding; pause and reproduce the examples.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://cs50.harvard.edu/python/2022/weeks/5/

#### Free written resources

1. [FastAPI: dependencies](https://fastapi.tiangolo.com/tutorial/dependencies/) — Free; no registration required. No paid materials required.
2. [FastAPI: testing](https://fastapi.tiangolo.com/tutorial/testing/) — Free; no registration required. No paid materials required.

#### Lab: FastAPI dependencies, schemas and testable error boundaries

Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Async request boundary lab

A developer needs responsive APIs when one dependency stalls.

**Data:** Use a local delayed stub service and concurrent requests. Use a fixed seed and keep evaluation cases separate.

**Output:** A FastAPI client with timeouts and bounded work.

**Effort:** 10h · Beginner → intermediate

- **FastAPI dependencies, schemas and testable error boundaries:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Async request boundary lab: A FastAPI client with timeouts and bounded work. Focus: Request versus response schema, Dependency injection, Validation versus upstream failure, Sync versus async boundaries, Dependency overrides in tests.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A FastAPI client with timeouts and bounded work. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · FastAPI dependencies, schemas and testable error boundaries: API routes, OpenAPI examples and integration tests
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] A slow dependency does not block independent health requests.
- [ ] FastAPI dependencies, schemas and testable error boundaries: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Database index benchmark

A developer needs to diagnose slow queries with evidence.

**Data:** Generate 10000 fictional events in local PostgreSQL. Use a fixed seed and keep evaluation cases separate.

**Output:** An EXPLAIN comparison and minimal index migration.

**Effort:** 10h · Beginner → intermediate

- **FastAPI dependencies, schemas and testable error boundaries:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Database index benchmark: An EXPLAIN comparison and minimal index migration. Focus: Request versus response schema, Dependency injection, Validation versus upstream failure, Sync versus async boundaries, Dependency overrides in tests.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An EXPLAIN comparison and minimal index migration. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · FastAPI dependencies, schemas and testable error boundaries: API routes, OpenAPI examples and integration tests
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare plans before/after indexing and measure write overhead.
- [ ] FastAPI dependencies, schemas and testable error boundaries: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Private notes authorization lab

A team needs each user to access only their own notes.

**Data:** Use three fictional users and 15 local notes. Use a fixed seed and keep evaluation cases separate.

**Output:** A local authenticated CRUD API with ownership checks.

**Effort:** 10h · Beginner → intermediate

- **FastAPI dependencies, schemas and testable error boundaries:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Private notes authorization lab: A local authenticated CRUD API with ownership checks. Focus: Request versus response schema, Dependency injection, Validation versus upstream failure, Sync versus async boundaries, Dependency overrides in tests.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local authenticated CRUD API with ownership checks. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · FastAPI dependencies, schemas and testable error boundaries: API routes, OpenAPI examples and integration tests
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test every cross-user read and write; no client-supplied owner override.
- [ ] FastAPI dependencies, schemas and testable error boundaries: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Order analytics query lab

An analyst needs correct reports over relational data.

**Data:** Generate customers, orders and line items in SQLite or local PostgreSQL. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema, joins and reconciled analytics report.

**Effort:** 10h · Beginner → intermediate

- **FastAPI dependencies, schemas and testable error boundaries:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Order analytics query lab: A schema, joins and reconciled analytics report. Focus: Request versus response schema, Dependency injection, Validation versus upstream failure, Sync versus async boundaries, Dependency overrides in tests.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema, joins and reconciled analytics report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · FastAPI dependencies, schemas and testable error boundaries: API routes, OpenAPI examples and integration tests
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Prove totals survive joins and explain null and duplicate-key behavior.
- [ ] FastAPI dependencies, schemas and testable error boundaries: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Validated prediction API

A model builder needs a reliable inference boundary.

**Data:** Use bundled digits and a small saved baseline or deterministic test predictor. Use a fixed seed and keep evaluation cases separate.

**Output:** A FastAPI service with request/response schemas and health endpoint.

**Effort:** 10h · Beginner → intermediate

- **FastAPI dependencies, schemas and testable error boundaries:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Validated prediction API: A FastAPI service with request/response schemas and health endpoint. Focus: Request versus response schema, Dependency injection, Validation versus upstream failure, Sync versus async boundaries, Dependency overrides in tests.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A FastAPI service with request/response schemas and health endpoint. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · FastAPI dependencies, schemas and testable error boundaries: API routes, OpenAPI examples and integration tests
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject bad shapes and test successful inference plus unavailable-model errors.
- [ ] FastAPI dependencies, schemas and testable error boundaries: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Safe schema evolution exercise

A maintainer needs to change data shape without losing records.

**Data:** Seed a local notes database with an old author-name field. Use a fixed seed and keep evaluation cases separate.

**Output:** Forward/backward migrations and compatibility tests.

**Effort:** 10h · Beginner → intermediate

- **FastAPI dependencies, schemas and testable error boundaries:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Safe schema evolution exercise: Forward/backward migrations and compatibility tests. Focus: Request versus response schema, Dependency injection, Validation versus upstream failure, Sync versus async boundaries, Dependency overrides in tests.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Forward/backward migrations and compatibility tests. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · FastAPI dependencies, schemas and testable error boundaries: API routes, OpenAPI examples and integration tests
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Preserve seeded records and document irreversible transformations.
- [ ] FastAPI dependencies, schemas and testable error boundaries: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Concurrent stock reservation

A shop simulator needs to avoid selling more stock than exists.

**Data:** Seed ten products with five units each in local PostgreSQL. Use a fixed seed and keep evaluation cases separate.

**Output:** A transactional reservation endpoint and concurrency test.

**Effort:** 10h · Beginner → intermediate

- **FastAPI dependencies, schemas and testable error boundaries:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Concurrent stock reservation: A transactional reservation endpoint and concurrency test. Focus: Request versus response schema, Dependency injection, Validation versus upstream failure, Sync versus async boundaries, Dependency overrides in tests.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A transactional reservation endpoint and concurrency test. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · FastAPI dependencies, schemas and testable error boundaries: API routes, OpenAPI examples and integration tests
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Concurrent requests never make inventory negative and retries remain idempotent.
- [ ] FastAPI dependencies, schemas and testable error boundaries: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Relational versus document store trial

A designer needs evidence for choosing a storage model.

**Data:** Represent the same 40 products and tags in SQL and JSON documents. Use a fixed seed and keep evaluation cases separate.

**Output:** Two query implementations and a tradeoff report.

**Effort:** 10h · Beginner → intermediate

- **FastAPI dependencies, schemas and testable error boundaries:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Relational versus document store trial: Two query implementations and a tradeoff report. Focus: Request versus response schema, Dependency injection, Validation versus upstream failure, Sync versus async boundaries, Dependency overrides in tests.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Two query implementations and a tradeoff report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · FastAPI dependencies, schemas and testable error boundaries: API routes, OpenAPI examples and integration tests
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match query results and demonstrate update consistency differences.
- [ ] FastAPI dependencies, schemas and testable error boundaries: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### API explorer frontend

A learner needs to connect form state to typed API responses.

**Data:** Use a local fictional catalog with 30 items. Use a fixed seed and keep evaluation cases separate.

**Output:** A searchable browser UI connected to FastAPI.

**Effort:** 10h · Beginner → intermediate

- **FastAPI dependencies, schemas and testable error boundaries:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to API explorer frontend: A searchable browser UI connected to FastAPI. Focus: Request versus response schema, Dependency injection, Validation versus upstream failure, Sync versus async boundaries, Dependency overrides in tests.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A searchable browser UI connected to FastAPI. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · FastAPI dependencies, schemas and testable error boundaries: API routes, OpenAPI examples and integration tests
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show loading, empty, validation and server-failure states.
- [ ] FastAPI dependencies, schemas and testable error boundaries: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Vector lookup service

A search builder needs predictable similarity queries and filters.

**Data:** Generate 100 normalized vectors with source and role metadata. Use a fixed seed and keep evaluation cases separate.

**Output:** A local vector search API and metadata filter tests.

**Effort:** 10h · Beginner → intermediate

- **FastAPI dependencies, schemas and testable error boundaries:** Expose the project result through FastAPI with Pydantic request/response validation, explicit errors and a health endpoint. Apply this to Vector lookup service: A local vector search API and metadata filter tests. Focus: Request versus response schema, Dependency injection, Validation versus upstream failure, Sync versus async boundaries, Dependency overrides in tests.
  - Deliverable: API routes, OpenAPI examples and integration tests
  - Check: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local vector search API and metadata filter tests. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · FastAPI dependencies, schemas and testable error boundaries: API routes, OpenAPI examples and integration tests
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare with brute-force scores and reject unauthorized IDs.
- [ ] FastAPI dependencies, schemas and testable error boundaries: Exercise valid requests, malformed payloads, unavailable dependencies and unauthorized access. Build a local FastAPI inference endpoint with separate request/response models and injected fake predictor. Test invalid input, unauthorised access, malformed output and timeout handling without a paid model API.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


---

<a id="backend-sql-performance"></a>

### SQL query plans, transaction races and migrations

Recognise database bottlenecks and correctness failures before they become unexplained API behaviour.

**Priority:** Essential · **Study:** 3h · **Practice:** 4h

**Prerequisites:** [Transactions, concurrency and data quality](backend.md#backend-transactions) Navigation is unrestricted.

#### Concepts

- [ ] **Indexes and predicates:** An index can help a matching query but consumes storage and write work; usefulness depends on filters and row counts.
  - Example: Compare an indexed equality lookup with a sequential scan on a generated table.
  - Videos:
    - [PostgreSQL — course for beginners](https://www.youtube.com/watch?v=SpfIwlAYaKk) · freeCodeCamp · Full tool course
      - Explains: SQL tables, querying and PostgreSQL fundamentals.
      - Useful because: Use local PostgreSQL/SQLite practice rather than a paid database service.
      - Watch for: Focus on indexes and predicates. Then reproduce the lesson example: Compare an indexed equality lookup with a sequential scan on a generated table.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/posgresql-course-for-beginners/
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on indexes and predicates. Then reproduce the lesson example: Compare an indexed equality lookup with a sequential scan on a generated table.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [ ] **Query plans:** EXPLAIN describes a chosen execution plan; estimated costs are not milliseconds and ANALYZE actually executes the statement.
  - Example: Use EXPLAIN on a read query and explain the difference between estimated rows and measured rows.
  - Videos:
    - [PostgreSQL — course for beginners](https://www.youtube.com/watch?v=SpfIwlAYaKk) · freeCodeCamp · Full tool course
      - Explains: SQL tables, querying and PostgreSQL fundamentals.
      - Useful because: Use local PostgreSQL/SQLite practice rather than a paid database service.
      - Watch for: Focus on query plans. Then reproduce the lesson example: Use EXPLAIN on a read query and explain the difference between estimated rows and measured rows.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/posgresql-course-for-beginners/
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on query plans. Then reproduce the lesson example: Use EXPLAIN on a read query and explain the difference between estimated rows and measured rows.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [ ] **Lost updates and conditional writes:** Two clients can overwrite one another unless the update enforces a concurrency rule.
  - Example: Update a project only when revision equals the version the client read, then reject a stale second update.
  - Videos:
    - [PostgreSQL — course for beginners](https://www.youtube.com/watch?v=SpfIwlAYaKk) · freeCodeCamp · Full tool course
      - Explains: SQL tables, querying and PostgreSQL fundamentals.
      - Useful because: Use local PostgreSQL/SQLite practice rather than a paid database service.
      - Watch for: Focus on lost updates and conditional writes. Then reproduce the lesson example: Update a project only when revision equals the version the client read, then reject a stale second update.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/posgresql-course-for-beginners/
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on lost updates and conditional writes. Then reproduce the lesson example: Update a project only when revision equals the version the client read, then reject a stale second update.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [ ] **Transactions and invariants:** Several writes that establish one invariant should succeed or fail together.
  - Example: Create a project and its owner participation in one transaction, then inject a failure to verify rollback.
  - Videos:
    - [PostgreSQL — course for beginners](https://www.youtube.com/watch?v=SpfIwlAYaKk) · freeCodeCamp · Full tool course
      - Explains: SQL tables, querying and PostgreSQL fundamentals.
      - Useful because: Use local PostgreSQL/SQLite practice rather than a paid database service.
      - Watch for: Focus on transactions and invariants. Then reproduce the lesson example: Create a project and its owner participation in one transaction, then inject a failure to verify rollback.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/posgresql-course-for-beginners/
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on transactions and invariants. Then reproduce the lesson example: Create a project and its owner participation in one transaction, then inject a failure to verify rollback.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [ ] **Migration compatibility:** A deployment may temporarily run old and new code together; expand/backfill/contract reduces breaking schema transitions.
  - Example: Add a nullable field, backfill it and only later require it after both code versions can handle it.
  - Videos:
    - [PostgreSQL — course for beginners](https://www.youtube.com/watch?v=SpfIwlAYaKk) · freeCodeCamp · Full tool course
      - Explains: SQL tables, querying and PostgreSQL fundamentals.
      - Useful because: Use local PostgreSQL/SQLite practice rather than a paid database service.
      - Watch for: Focus on migration compatibility. Then reproduce the lesson example: Add a nullable field, backfill it and only later require it after both code versions can handle it.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/posgresql-course-for-beginners/
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on migration compatibility. Then reproduce the lesson example: Add a nullable field, backfill it and only later require it after both code versions can handle it.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/

#### YouTube: focused explanations and full courses

- [PostgreSQL — course for beginners](https://www.youtube.com/watch?v=SpfIwlAYaKk) · freeCodeCamp · Full tool course
  - Explains: SQL tables, querying and PostgreSQL fundamentals.
  - Useful because: Use local PostgreSQL/SQLite practice rather than a paid database service.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/posgresql-course-for-beginners/
- [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
  - Explains: Scalability, reliability, storage and architecture tradeoffs.
  - Useful because: Explain why a queue, index or cache is useful before adding one.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
  - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
  - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/

#### Free written resources

1. [PostgreSQL: using EXPLAIN](https://www.postgresql.org/docs/current/using-explain.html) — Free; no registration required. No paid materials required.
2. [PostgreSQL: concurrency control](https://www.postgresql.org/docs/current/mvcc.html) — Free; no registration required. No paid materials required.

#### Lab: SQL query plans, transaction races and migrations

Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.

**Deliverables**

- Runnable code or notebook with a small reproducible input
- README explaining decisions, results and limitations

**Completion checks**

- [ ] Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.
- [ ] Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

#### Ten project recommendations

### Database index benchmark

A developer needs to diagnose slow queries with evidence.

**Data:** Generate 10000 fictional events in local PostgreSQL. Use a fixed seed and keep evaluation cases separate.

**Output:** An EXPLAIN comparison and minimal index migration.

**Effort:** 10h · Beginner → intermediate

- **SQL query plans, transaction races and migrations:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to Database index benchmark: An EXPLAIN comparison and minimal index migration. Focus: Indexes and predicates, Query plans, Lost updates and conditional writes, Transactions and invariants, Migration compatibility.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An EXPLAIN comparison and minimal index migration. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL query plans, transaction races and migrations: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare plans before/after indexing and measure write overhead.
- [ ] SQL query plans, transaction races and migrations: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Async request boundary lab

A developer needs responsive APIs when one dependency stalls.

**Data:** Use a local delayed stub service and concurrent requests. Use a fixed seed and keep evaluation cases separate.

**Output:** A FastAPI client with timeouts and bounded work.

**Effort:** 10h · Beginner → intermediate

- **SQL query plans, transaction races and migrations:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to Async request boundary lab: A FastAPI client with timeouts and bounded work. Focus: Indexes and predicates, Query plans, Lost updates and conditional writes, Transactions and invariants, Migration compatibility.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A FastAPI client with timeouts and bounded work. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL query plans, transaction races and migrations: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] A slow dependency does not block independent health requests.
- [ ] SQL query plans, transaction races and migrations: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Private notes authorization lab

A team needs each user to access only their own notes.

**Data:** Use three fictional users and 15 local notes. Use a fixed seed and keep evaluation cases separate.

**Output:** A local authenticated CRUD API with ownership checks.

**Effort:** 10h · Beginner → intermediate

- **SQL query plans, transaction races and migrations:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to Private notes authorization lab: A local authenticated CRUD API with ownership checks. Focus: Indexes and predicates, Query plans, Lost updates and conditional writes, Transactions and invariants, Migration compatibility.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local authenticated CRUD API with ownership checks. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL query plans, transaction races and migrations: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test every cross-user read and write; no client-supplied owner override.
- [ ] SQL query plans, transaction races and migrations: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Order analytics query lab

An analyst needs correct reports over relational data.

**Data:** Generate customers, orders and line items in SQLite or local PostgreSQL. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema, joins and reconciled analytics report.

**Effort:** 10h · Beginner → intermediate

- **SQL query plans, transaction races and migrations:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to Order analytics query lab: A schema, joins and reconciled analytics report. Focus: Indexes and predicates, Query plans, Lost updates and conditional writes, Transactions and invariants, Migration compatibility.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema, joins and reconciled analytics report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL query plans, transaction races and migrations: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Prove totals survive joins and explain null and duplicate-key behavior.
- [ ] SQL query plans, transaction races and migrations: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Validated prediction API

A model builder needs a reliable inference boundary.

**Data:** Use bundled digits and a small saved baseline or deterministic test predictor. Use a fixed seed and keep evaluation cases separate.

**Output:** A FastAPI service with request/response schemas and health endpoint.

**Effort:** 10h · Beginner → intermediate

- **SQL query plans, transaction races and migrations:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to Validated prediction API: A FastAPI service with request/response schemas and health endpoint. Focus: Indexes and predicates, Query plans, Lost updates and conditional writes, Transactions and invariants, Migration compatibility.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A FastAPI service with request/response schemas and health endpoint. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL query plans, transaction races and migrations: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject bad shapes and test successful inference plus unavailable-model errors.
- [ ] SQL query plans, transaction races and migrations: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Safe schema evolution exercise

A maintainer needs to change data shape without losing records.

**Data:** Seed a local notes database with an old author-name field. Use a fixed seed and keep evaluation cases separate.

**Output:** Forward/backward migrations and compatibility tests.

**Effort:** 10h · Beginner → intermediate

- **SQL query plans, transaction races and migrations:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to Safe schema evolution exercise: Forward/backward migrations and compatibility tests. Focus: Indexes and predicates, Query plans, Lost updates and conditional writes, Transactions and invariants, Migration compatibility.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Forward/backward migrations and compatibility tests. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL query plans, transaction races and migrations: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Preserve seeded records and document irreversible transformations.
- [ ] SQL query plans, transaction races and migrations: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Concurrent stock reservation

A shop simulator needs to avoid selling more stock than exists.

**Data:** Seed ten products with five units each in local PostgreSQL. Use a fixed seed and keep evaluation cases separate.

**Output:** A transactional reservation endpoint and concurrency test.

**Effort:** 10h · Beginner → intermediate

- **SQL query plans, transaction races and migrations:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to Concurrent stock reservation: A transactional reservation endpoint and concurrency test. Focus: Indexes and predicates, Query plans, Lost updates and conditional writes, Transactions and invariants, Migration compatibility.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A transactional reservation endpoint and concurrency test. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL query plans, transaction races and migrations: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Concurrent requests never make inventory negative and retries remain idempotent.
- [ ] SQL query plans, transaction races and migrations: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Relational versus document store trial

A designer needs evidence for choosing a storage model.

**Data:** Represent the same 40 products and tags in SQL and JSON documents. Use a fixed seed and keep evaluation cases separate.

**Output:** Two query implementations and a tradeoff report.

**Effort:** 10h · Beginner → intermediate

- **SQL query plans, transaction races and migrations:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to Relational versus document store trial: Two query implementations and a tradeoff report. Focus: Indexes and predicates, Query plans, Lost updates and conditional writes, Transactions and invariants, Migration compatibility.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Two query implementations and a tradeoff report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL query plans, transaction races and migrations: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match query results and demonstrate update consistency differences.
- [ ] SQL query plans, transaction races and migrations: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### API explorer frontend

A learner needs to connect form state to typed API responses.

**Data:** Use a local fictional catalog with 30 items. Use a fixed seed and keep evaluation cases separate.

**Output:** A searchable browser UI connected to FastAPI.

**Effort:** 10h · Beginner → intermediate

- **SQL query plans, transaction races and migrations:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to API explorer frontend: A searchable browser UI connected to FastAPI. Focus: Indexes and predicates, Query plans, Lost updates and conditional writes, Transactions and invariants, Migration compatibility.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A searchable browser UI connected to FastAPI. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL query plans, transaction races and migrations: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show loading, empty, validation and server-failure states.
- [ ] SQL query plans, transaction races and migrations: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Vector lookup service

A search builder needs predictable similarity queries and filters.

**Data:** Generate 100 normalized vectors with source and role metadata. Use a fixed seed and keep evaluation cases separate.

**Output:** A local vector search API and metadata filter tests.

**Effort:** 10h · Beginner → intermediate

- **SQL query plans, transaction races and migrations:** Persist source records and results in a relational schema; use SQL joins, constraints and transactions rather than an in-memory replacement. Apply this to Vector lookup service: A local vector search API and metadata filter tests. Focus: Indexes and predicates, Query plans, Lost updates and conditional writes, Transactions and invariants, Migration compatibility.
  - Deliverable: Schema, seed script, queries and rollback-safe migration
  - Check: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local vector search API and metadata filter tests. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · SQL query plans, transaction races and migrations: Schema, seed script, queries and rollback-safe migration
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare with brute-force scores and reject unauthorized IDs.
- [ ] SQL query plans, transaction races and migrations: Verify foreign keys, duplicate rejection, join totals and rollback after a failed write. Use a local PostgreSQL instance or SQLite for the required transaction/revision exercise. Generate rows, inspect a query plan, demonstrate a stale-write rejection and document which PostgreSQL-specific observations need PostgreSQL.; Include at least one happy-path and one failure/edge-case check; explain the output using the concept checklist.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.


## Stage checkpoint

<a id="checkpoint-backend"></a>

### Backend and data checkpoint

Demonstrate readiness through a reproducible practical handoff. Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.

**Priority:** Essential · **Study:** 1h · **Practice:** 6h

**Prerequisites:** [Frontend essentials, state and accessible UX](backend.md#backend-frontend), [FastAPI routes, validation and OpenAPI](backend.md#fastapi), [Frontend, authentication, authorization and sessions](backend.md#backend-auth), [SQL, PostgreSQL, joins and indexes](backend.md#backend-sql), [Transactions, concurrency and data quality](backend.md#backend-transactions), [FastAPI dependencies, schemas and testable error boundaries](backend.md#backend-fastapi-boundaries), [SQL query plans, transaction races and migrations](backend.md#backend-sql-performance) Navigation is unrestricted.

#### Concepts

- [ ] **Define the success contract:** Write observable checks before implementation so success is not just a plausible demonstration.
  - Example: Turn this task into a numbered acceptance checklist: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.
  - Videos:
    - [PostgreSQL — course for beginners](https://www.youtube.com/watch?v=SpfIwlAYaKk) · freeCodeCamp · Full tool course
      - Explains: SQL tables, querying and PostgreSQL fundamentals.
      - Useful because: Use local PostgreSQL/SQLite practice rather than a paid database service.
      - Watch for: Focus on define the success contract. Then reproduce the lesson example: Turn this task into a numbered acceptance checklist: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/posgresql-course-for-beginners/
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on define the success contract. Then reproduce the lesson example: Turn this task into a numbered acceptance checklist: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [ ] **Reproduce the baseline:** Keep a simple reference output and deterministic inputs so changes can be compared honestly.
  - Example: Run a fixed input twice and compare saved outputs with the documented baseline.
  - Videos:
    - [PostgreSQL — course for beginners](https://www.youtube.com/watch?v=SpfIwlAYaKk) · freeCodeCamp · Full tool course
      - Explains: SQL tables, querying and PostgreSQL fundamentals.
      - Useful because: Use local PostgreSQL/SQLite practice rather than a paid database service.
      - Watch for: Focus on reproduce the baseline. Then reproduce the lesson example: Run a fixed input twice and compare saved outputs with the documented baseline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/posgresql-course-for-beginners/
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on reproduce the baseline. Then reproduce the lesson example: Run a fixed input twice and compare saved outputs with the documented baseline.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [ ] **Test a failure boundary:** A working happy path does not establish robustness to malformed data or dependency failures.
  - Example: Inject one malformed input and one controlled failure, then record the resulting state.
  - Videos:
    - [PostgreSQL — course for beginners](https://www.youtube.com/watch?v=SpfIwlAYaKk) · freeCodeCamp · Full tool course
      - Explains: SQL tables, querying and PostgreSQL fundamentals.
      - Useful because: Use local PostgreSQL/SQLite practice rather than a paid database service.
      - Watch for: Focus on test a failure boundary. Then reproduce the lesson example: Inject one malformed input and one controlled failure, then record the resulting state.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/posgresql-course-for-beginners/
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on test a failure boundary. Then reproduce the lesson example: Inject one malformed input and one controlled failure, then record the resulting state.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [ ] **Explain the decisions:** Describe why each technique was chosen and what evidence would make you choose differently.
  - Example: Write a short decision note comparing the chosen approach with one simpler alternative.
  - Videos:
    - [PostgreSQL — course for beginners](https://www.youtube.com/watch?v=SpfIwlAYaKk) · freeCodeCamp · Full tool course
      - Explains: SQL tables, querying and PostgreSQL fundamentals.
      - Useful because: Use local PostgreSQL/SQLite practice rather than a paid database service.
      - Watch for: Focus on explain the decisions. Then reproduce the lesson example: Write a short decision note comparing the chosen approach with one simpler alternative.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/posgresql-course-for-beginners/
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on explain the decisions. Then reproduce the lesson example: Write a short decision note comparing the chosen approach with one simpler alternative.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- [ ] **Hand off the evidence:** Another learner must be able to reproduce the result from your instructions and supplied inputs.
  - Example: Ask a teammate to run the README commands in a clean environment and record missing steps.
  - Videos:
    - [PostgreSQL — course for beginners](https://www.youtube.com/watch?v=SpfIwlAYaKk) · freeCodeCamp · Full tool course
      - Explains: SQL tables, querying and PostgreSQL fundamentals.
      - Useful because: Use local PostgreSQL/SQLite practice rather than a paid database service.
      - Watch for: Focus on hand off the evidence. Then reproduce the lesson example: Ask a teammate to run the README commands in a clean environment and record missing steps.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/posgresql-course-for-beginners/
    - [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
      - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
      - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
      - Watch for: Focus on hand off the evidence. Then reproduce the lesson example: Ask a teammate to run the README commands in a clean environment and record missing steps.
      - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
      - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/

#### YouTube: focused explanations and full courses

- [PostgreSQL — course for beginners](https://www.youtube.com/watch?v=SpfIwlAYaKk) · freeCodeCamp · Full tool course
  - Explains: SQL tables, querying and PostgreSQL fundamentals.
  - Useful because: Use local PostgreSQL/SQLite practice rather than a paid database service.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/posgresql-course-for-beginners/
- [System design concepts — complete course](https://www.youtube.com/watch?v=F2FmTdLtb_4) · freeCodeCamp · Full course
  - Explains: Scalability, reliability, storage and architecture tradeoffs.
  - Useful because: Explain why a queue, index or cache is useful before adding one.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.youtube.com/watch?v=F2FmTdLtb_4
- [Python API development — comprehensive course](https://www.youtube.com/watch?v=0sOvCWFmrtA) · freeCodeCamp · Sanjeev Thiyagarajan · Long course · approximately 19h
  - Explains: FastAPI, validation, SQL persistence, authentication, testing and deployment.
  - Useful because: Follow one stage at a time and consult current FastAPI docs for version changes.
  - Free YouTube video; no purchase required. Promoted tools/certificates may be paid. Use local labs and current linked documentation.
  - Verification source: https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/

#### Free written resources

1. [PostgreSQL: using EXPLAIN](https://www.postgresql.org/docs/current/using-explain.html) — Free; no registration required. No paid materials required.
2. [PostgreSQL: concurrency control](https://www.postgresql.org/docs/current/mvcc.html) — Free; no registration required. No paid materials required.

#### Backend and data checkpoint

Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.

**Deliverables**

- Runnable project and reproducible input fixtures
- README, results and decision notes
- Failure evidence and clean-start instructions

**Completion checks**

- [ ] Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.
- [ ] Explain the code and results without relying on an AI-generated summary.
- [ ] A teammate can reproduce the demo without paid credentials.

#### Ten project recommendations

### Async request boundary lab

A developer needs responsive APIs when one dependency stalls.

**Data:** Use a local delayed stub service and concurrent requests. Use a fixed seed and keep evaluation cases separate.

**Output:** A FastAPI client with timeouts and bounded work.

**Effort:** 10h · Beginner → intermediate

- **Backend and data checkpoint:** Extend the project with Backend and data checkpoint in Async request boundary lab. Adapt this focused lab to the project data: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Backend and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A FastAPI client with timeouts and bounded work. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Backend and data checkpoint: Backend and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] A slow dependency does not block independent health requests.
- [ ] Backend and data checkpoint: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Database index benchmark

A developer needs to diagnose slow queries with evidence.

**Data:** Generate 10000 fictional events in local PostgreSQL. Use a fixed seed and keep evaluation cases separate.

**Output:** An EXPLAIN comparison and minimal index migration.

**Effort:** 10h · Beginner → intermediate

- **Backend and data checkpoint:** Extend the project with Backend and data checkpoint in Database index benchmark. Adapt this focused lab to the project data: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Backend and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: An EXPLAIN comparison and minimal index migration. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Backend and data checkpoint: Backend and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare plans before/after indexing and measure write overhead.
- [ ] Backend and data checkpoint: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Private notes authorization lab

A team needs each user to access only their own notes.

**Data:** Use three fictional users and 15 local notes. Use a fixed seed and keep evaluation cases separate.

**Output:** A local authenticated CRUD API with ownership checks.

**Effort:** 10h · Beginner → intermediate

- **Backend and data checkpoint:** Extend the project with Backend and data checkpoint in Private notes authorization lab. Adapt this focused lab to the project data: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Backend and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local authenticated CRUD API with ownership checks. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Backend and data checkpoint: Backend and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Test every cross-user read and write; no client-supplied owner override.
- [ ] Backend and data checkpoint: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Order analytics query lab

An analyst needs correct reports over relational data.

**Data:** Generate customers, orders and line items in SQLite or local PostgreSQL. Use a fixed seed and keep evaluation cases separate.

**Output:** A schema, joins and reconciled analytics report.

**Effort:** 10h · Beginner → intermediate

- **Backend and data checkpoint:** Extend the project with Backend and data checkpoint in Order analytics query lab. Adapt this focused lab to the project data: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Backend and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A schema, joins and reconciled analytics report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Backend and data checkpoint: Backend and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Prove totals survive joins and explain null and duplicate-key behavior.
- [ ] Backend and data checkpoint: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Validated prediction API

A model builder needs a reliable inference boundary.

**Data:** Use bundled digits and a small saved baseline or deterministic test predictor. Use a fixed seed and keep evaluation cases separate.

**Output:** A FastAPI service with request/response schemas and health endpoint.

**Effort:** 10h · Beginner → intermediate

- **Backend and data checkpoint:** Extend the project with Backend and data checkpoint in Validated prediction API. Adapt this focused lab to the project data: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Backend and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A FastAPI service with request/response schemas and health endpoint. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Backend and data checkpoint: Backend and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Reject bad shapes and test successful inference plus unavailable-model errors.
- [ ] Backend and data checkpoint: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Safe schema evolution exercise

A maintainer needs to change data shape without losing records.

**Data:** Seed a local notes database with an old author-name field. Use a fixed seed and keep evaluation cases separate.

**Output:** Forward/backward migrations and compatibility tests.

**Effort:** 10h · Beginner → intermediate

- **Backend and data checkpoint:** Extend the project with Backend and data checkpoint in Safe schema evolution exercise. Adapt this focused lab to the project data: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Backend and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Forward/backward migrations and compatibility tests. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Backend and data checkpoint: Backend and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Preserve seeded records and document irreversible transformations.
- [ ] Backend and data checkpoint: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Concurrent stock reservation

A shop simulator needs to avoid selling more stock than exists.

**Data:** Seed ten products with five units each in local PostgreSQL. Use a fixed seed and keep evaluation cases separate.

**Output:** A transactional reservation endpoint and concurrency test.

**Effort:** 10h · Beginner → intermediate

- **Backend and data checkpoint:** Extend the project with Backend and data checkpoint in Concurrent stock reservation. Adapt this focused lab to the project data: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Backend and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A transactional reservation endpoint and concurrency test. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Backend and data checkpoint: Backend and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Concurrent requests never make inventory negative and retries remain idempotent.
- [ ] Backend and data checkpoint: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Relational versus document store trial

A designer needs evidence for choosing a storage model.

**Data:** Represent the same 40 products and tags in SQL and JSON documents. Use a fixed seed and keep evaluation cases separate.

**Output:** Two query implementations and a tradeoff report.

**Effort:** 10h · Beginner → intermediate

- **Backend and data checkpoint:** Extend the project with Backend and data checkpoint in Relational versus document store trial. Adapt this focused lab to the project data: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Backend and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: Two query implementations and a tradeoff report. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Backend and data checkpoint: Backend and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Match query results and demonstrate update consistency differences.
- [ ] Backend and data checkpoint: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### API explorer frontend

A learner needs to connect form state to typed API responses.

**Data:** Use a local fictional catalog with 30 items. Use a fixed seed and keep evaluation cases separate.

**Output:** A searchable browser UI connected to FastAPI.

**Effort:** 10h · Beginner → intermediate

- **Backend and data checkpoint:** Extend the project with Backend and data checkpoint in API explorer frontend. Adapt this focused lab to the project data: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Backend and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A searchable browser UI connected to FastAPI. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Backend and data checkpoint: Backend and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Show loading, empty, validation and server-failure states.
- [ ] Backend and data checkpoint: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

### Vector lookup service

A search builder needs predictable similarity queries and filters.

**Data:** Generate 100 normalized vectors with source and role metadata. Use a fixed seed and keep evaluation cases separate.

**Output:** A local vector search API and metadata filter tests.

**Effort:** 10h · Beginner → intermediate

- **Backend and data checkpoint:** Extend the project with Backend and data checkpoint in Vector lookup service. Adapt this focused lab to the project data: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.  Required concepts: Define the success contract, Reproduce the baseline, Test a failure boundary, Explain the decisions, Hand off the evidence.
  - Deliverable: Backend and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
  - Check: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.

**Milestones**

- [ ] MVP · problem and reproducible baseline: A local vector search API and metadata filter tests. Start with the smallest deterministic reference before adding extensions.
- [ ] MVP · Backend and data checkpoint: Backend and data checkpoint: Runnable project and reproducible input fixtures; README, results and decision notes; Failure evidence and clean-start instructions
- [ ] Integrated demonstration: One clean-start command, connected end-to-end example and evidence report
- [ ] Explain and hand off: README, decision notes and recorded limitations

**Acceptance**

- [ ] Compare with brute-force scores and reject unauthorized IDs.
- [ ] Backend and data checkpoint: Expose a validated FastAPI endpoint with ownership checks and SQL persistence. Demonstrate invalid input, unauthorized access, transaction rollback and an idempotent retry using fictional records.; Explain the code and results without relying on an AI-generated summary.; A teammate can reproduce the demo without paid credentials.
- [ ] A teammate can reproduce the demo using the README without paid credentials.

**Documentation:** README: purpose, setup, worked example, checks and limitations.

